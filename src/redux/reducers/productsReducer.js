import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const initialState = {
    loading: false,
    products: [],
    filteredProducts: [],
    error: "",
};

export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
    const productsRef = collection(db, "products"); // firebase doc reference.
    return await getDocs(query(productsRef));
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterProducts(state, action) {
            const {
                searchQuery,
                priceRange,
                categories: {
                    mensFashion,
                    womensFashion,
                    jewelery,
                    electronics,
                    beauty,
                    mobileAccessories,
                    mensWatches,
                    mensShoes,
                    fragrances,
                    furniture,
                    groceries,
                    homeDecoration,
                    kitchenAccessories,
                    laptops,
                },
            } = action.payload;

            let filteredProducts = state.products;

            // Filter by search query
            if (searchQuery) {
                filteredProducts = filteredProducts.filter((product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            // Filter by selected categories
            const activeCategories = [];

            if (mensFashion) activeCategories.push("men's clothing");
            if (womensFashion) activeCategories.push("women's clothing");
            if (jewelery) activeCategories.push("jewelery");
            if (electronics) activeCategories.push("electronics");
            if (beauty) activeCategories.push("beauty");
            if (mobileAccessories) activeCategories.push("mobile-accessories");
            if (mensWatches) activeCategories.push("mens-watches");
            if (mensShoes) activeCategories.push("mens-shoes");
            if (fragrances) activeCategories.push("fragrances");
            if (furniture) activeCategories.push("furniture");
            if (groceries) activeCategories.push("groceries");
            if (homeDecoration) activeCategories.push("home-decoration");
            if (kitchenAccessories) activeCategories.push("kitchen-accessories");
            if (laptops) activeCategories.push("laptops");

            if (activeCategories.length > 0) {
                filteredProducts = filteredProducts.filter((product) =>
                    activeCategories.includes(product.category)
                );
            }

            // Filter by price range
            if (priceRange) {
                filteredProducts = filteredProducts.filter((product) => product.price < priceRange);
            }

            state.filteredProducts = filteredProducts;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                const products = action.payload.docs.map((doc) => ({
                    ...doc.data(),
                }));

                state.products = products;
                state.filteredProducts = products;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.error = action.payload.message;
            });
    },
});

export const getLoadingState = (state) => state.products.loading;
export const getProducts = (state) => state.products.products;
export const getFilteredProducts = (state) => state.products.filteredProducts;
export const getError = (state) => state.products.error;

export const { filterProducts } = productsSlice.actions;

export default productsSlice.reducer;

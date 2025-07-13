import React from "react";
import styles from "./FilterSidebar.module.css";

const FilterSidebar = ({ setCategories, setPriceRange, priceRange }) => {
    const categoryList = [
        { id: "mensFashion", label: "Men's Clothing" },
        { id: "womensFashion", label: "Women's Clothing" },
        { id: "jewelery", label: "Jewelery" },
        { id: "electronics", label: "Electronics" },
        { id: "beauty", label: "Beauty" },
        { id: "mobileAccessories", label: "Mobile Accessories" },
        { id: "mensWatches", label: "Men's Watches" },
        { id: "mensShoes", label: "Men's Shoes" },
        { id: "fragrances", label: "Fragrances" },
        { id: "furniture", label: "Furniture" },
        { id: "groceries", label: "Groceries" },
    ];

    const handleCategoryChange = (e) => {
        const { id, checked } = e.target;
        setCategories((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    return (
        <aside className={styles.filterContainer}>
            <h2>Filter</h2>
            <form>
                <label htmlFor="price">Price: {priceRange}</label>
                <input
                    type="range"
                    id="price"
                    name="price"
                    min="1"
                    max="100000"
                    className={styles.priceRange}
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    step="10"
                />

                <h2>Category</h2>
                <div className={styles.categoryContainer}>
                    {categoryList.map(({ id, label }) => (
                        <div key={id} className={styles.inputContainer}>
                            <input type="checkbox" id={id} name={id} onChange={handleCategoryChange} />
                            <label htmlFor={id}>{label}</label>
                        </div>
                    ))}
                </div>
            </form>
        </aside>
    );
};

export default FilterSidebar;

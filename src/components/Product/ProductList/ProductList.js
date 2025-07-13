import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

const ProductList = ({ products, onCart }) => {
    return (
        <div className={styles.grid}>
            {products.map((product, idx) => {
                return <ProductCard product={product} key={idx} onCart={onCart} />;
            })}
        </div>
    );
};

export default ProductList;

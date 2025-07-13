import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";

import styles from "./ProductContainer.module.css";
// Product Card component
const ProductCard = ({ product: { title, price, image, id, quantity }, onOwnPage, onCart }) => {
    return (
        <div className={styles.productContainer}>
            <div style={{ flex: 1 }}>
                <img
                    src={image}
                    alt="Product"
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain", aspectRatio: 1 }}
                />
            </div>

            <ProductDetails
                title={title}
                price={price}
                onOwnPage={onOwnPage}
                productId={id}
                onCart={onCart}
                quantity={quantity}
            />
        </div>
    );
};

export default ProductCard;

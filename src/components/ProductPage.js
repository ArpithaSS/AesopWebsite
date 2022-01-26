import React from "react";
import "../styles/product_page.css";

const ProductPage = () => {
    return (
        <div className="product_page">
            
            <div className="product-details">
                <nav className="product-nav">
                    <ul className="product-nav-list">
                        <li className="product-nav-list-li">
                            <button className="">Skin</button>
                        </li>
                        <li className="product-nav-list-li">
                            <button className="">Tone</button>
                        </li>
                    </ul>
                </nav>
                <div className="product-details-info">
                    <div className="product-details-title"><h2>Parsley Seed Anti-Oxidant Facial Toner</h2></div>
                    <div className="product-description">
                        <p>An alcohol-free, anti-oxidant rich formulation that soothes and balances the skin while preparing it for hydration.</p></div>
                    <div className="add-to-cart">
                        <h4 className="size">Sizes</h4>
                        <ul className="size-list">
                            <li className="size-list__li">
                                <input type="radio" name="quantity" checked />
                                <span>100ml</span>
                            </li>
                            <li className="size-list__li">
                                <input type="radio" name="quantity"/>
                                <span>200ml</span>
                            </li>
                        </ul>
                        <button className="add-to-cart-btn">Add to your cart - $295.00</button>
                    </div>
                    <div className="productdetail">
                        <dl className="defination-list">
                            <dt className="defination-list_term">Suited to</dt>
                            <dd className="description"><div><p>Most skin types, including dry and mildly sensitive</p></div></dd>
                            <dt className="defination-list_term">Skin feel</dt>
                            <dd className="description"><div><p>Calm, soft and hydrated with a light finish</p></div></dd>
                            <dt className="defination-list_term">Key ingredients</dt>
                            <dd className="description"><div><p>Parsley Seed, Lavender Stem, Blue Chamomile</p></div></dd>
                        </dl>
                    </div>
                    <div className="discover-product">
                        <button>
                            <div>
                                <h4>Discover The Kit</h4>
                                <p>Parsley Seed Extended Anti-Oxidant Skin Care Kit</p>
                                <picture></picture>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="image">
                <img className="product-img" alt="Parsley Seed Anti-Oxidant Facial Toner in amber glass bottle " src="https://www.aesop.com/u1nb1km7t5q7/59ChXwSO689JxBwcTsMia2/15d4701f3ccb169b2c1de46ef38f8748/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-large.png" />
            </div>
        </div>
    )
}

export default ProductPage;
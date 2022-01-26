import React from "react";
import "../styles/product_description.css"

const ProductDescription = () => {
    return(
        <div className="item">
            <div className="item-img">
                <img className="img1" alt="product_image" loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/5p8HTAsan1kAf7lvy3mglz/927167c016a3c8b8639f46f9352b6721/Aesop-Skin-Parsley-Seed-Facial-Toner-Texture-1440x1800.jpg" />
            </div>
            <div className="user-guide">
                <div className="content-module">
                        <header className="content-info">
                            <h3 className="content-use">How to use</h3>
                            <h2 className="content-info-des">Morning and evening, splash onto a cotton pad or directly into hands, and pat onto freshly cleansed face and neck.</h2>
                        </header>
                        <div className="list-info">
                            <dl className="defination-list2">
                                <dt className="usage-description">Dosage</dt>
                                <dd className="usage-info">Half a teaspoon</dd>
                                <dt className="usage-description">Texture</dt>
                                <dd className="usage-info">Aqueous</dd>
                                <dt className="usage-description">Aroma</dt>
                                <dd className="usage-info">Herbaceous, floral, fresh</dd>
                            </dl>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDescription;
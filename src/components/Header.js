import React from 'react';
import "../styles/header.css";

const Header = () => {
    return(
        <div>
            <div className='alert'>
                <div className='alert-body'>
                    <p>
                        In line with government guidelines, our stores in Hong Kong will remain open under adjusted opening hours.
                        <button className='alert-learnMoreLink'>For assistance, please click here.</button>
                    </p>
                </div>
            </div>
            <div className='shipping'>
                <div className='shipping-body'>
                    <button className='shipping-btn'>
                        <p className='shipping-content'>
                            Enjoy complimentary carbon neutral shipping on all Hong Kong and Macau orders.
                        </p>
                        
                    </button>
                </div>
            </div>
            <div className='navigation'>
                <nav className='primary_nav'>
                    <ul className='primary-nav-list'>
                        <li className='primary-nav-list__order'><button className='primary-nav-btn'>Skin Care</button></li>
                        <li className='primary-nav-list__order'><button className='primary-nav-btn'>Body & Hand</button></li>
                        <li className='primary-nav-list__order'><button className='primary-nav-btn'>Hair</button></li>
                        <li className='primary-nav-list__order'><button className='primary-nav-btn'>Fragrance</button></li>
                        <li className='primary-nav-list__order'><button className='primary-nav-btn'>Home</button></li>
                        <li className='primary-nav-list__order'><button className='primary-nav-btn'>Kits & Tarvel</button></li>
                        <li className='primary-nav-list__order'><button className='primary-nav-btn'>Gifts</button></li>
                        <li className='primary-nav-list__order'><button className='primary-nav-btn'>Read</button></li>
                        <li className='primary-nav-list__order'><button className='primary-nav-btn'>Stores</button></li>
                        <li className='primary-nav-list__order'><button className='primary-nav-btn'>Search</button></li>
                    </ul>
                </nav>
                <nav className='sec-nav'>
                    <ul className='sec-nav-list'>
                        <li className='sec-nav-list__order'><button className='sec-nav-btn'>Login</button></li>
                        <li className='sec-nav-list__order'><button className='sec-nav-btn'>Cart</button></li>
                    </ul>
                </nav>
            </div>
            {/* <div>
                <a>Aesop</a>
            </div> */}
        </div>
    )
}

export default Header
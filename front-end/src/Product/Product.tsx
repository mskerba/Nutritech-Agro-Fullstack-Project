import React from 'react';
import './Product.css';
import TabsProduct from '../TabsProduct/TabsProduct';

function Product() {
  return (
    <div className='product-page'>
      <div>
        <p className='our-title'>Our </p>
        <p className='agricoles-title'>Agricoles</p>
      </div>
      <div className='sub-title-product-page'>
          <p>High-quality fertilizers and soil solutions crafted to boost crop health, optimize yield, and enhance soil vitality.</p>
      </div>
      <TabsProduct />
    </div>
  );
}

export default Product;

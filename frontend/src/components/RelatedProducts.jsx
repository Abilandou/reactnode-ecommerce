import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const RelatedProducts = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if(products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((product) => category === product.category)
            productsCopy = productsCopy.filter((product) => subCategory === product.subCategory)

            setRelated(productsCopy.slice(0,5));

        }
    }, [products])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           { related.map((relProduct, index) => (
            <ProductItem 
                key={index} id={relProduct._id} image={relProduct.image}
                name={relProduct.name} price={relProduct.price}
            />
           )) } 
        </div>
    </div>
  )
}

export default RelatedProducts
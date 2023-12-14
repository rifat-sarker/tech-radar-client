import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Apple = () => {
    const appleProducts = useLoaderData();
    const uniqueBrand = appleProducts.filter(product=> product.brand === 'Iphone')
    console.log(uniqueBrand)
        
     return (
        <div>
            
        </div>
    );
};

export default Apple;
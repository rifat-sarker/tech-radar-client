
import { useLoaderData } from 'react-router-dom';
import AppleCard from './BrandCard/AppleCard';

const Apple = () => {
    const products = useLoaderData();
    const appleProduct = products.filter(product=> product.brand === 'Apple')
    console.log(appleProduct)
        
     return (
        <div className="grid md:grid-cols-2 gap-8">
           {
            appleProduct.map(product => <AppleCard key={product._id} product={product}></AppleCard>)
           }
        </div>
    );
};

export default Apple;
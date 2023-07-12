import { FC } from 'react';

type Product = {
    id: number;
    image: string;
    name: string;
    price: number;
};

const ProductCard: FC<Product> = ({ id, image, name, price }) => {
    return (
        <div className='px-2 py-2'>
            <div className="max-w-xs rounded overflow-hidden shadow-lg" key={id}>
                <img className="w-full" src={image} alt={name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        Price: Rp {price.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ProductList: FC = () => {
    const products: Product[] = [
        { id: 1, name: 'Product 1', price: 100000, image: '/FlatLay.jpg' },
        { id: 2, name: 'Product 2', price: 150000, image: '/FlatLay.jpg' },
        { id: 3, name: 'Product 3', price: 200000, image: '/FlatLay.jpg' },
        { id: 4, name: 'Product 4', price: 250000, image: '/FlatLay.jpg' },
        { id: 5, name: 'Product 5', price: 300000, image: '/FlatLay.jpg' },
        { id: 6, name: 'Product 6', price: 350000, image: '/FlatLay.jpg' },
        { id: 7, name: 'Product 7', price: 400000, image: '/FlatLay.jpg' },
        { id: 8, name: 'Product 8', price: 450000, image: '/FlatLay.jpg' },
    ];

    return (
        <div className='padding-x pt-6 pb-8'>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
        </div>
    );
};

export default ProductList;


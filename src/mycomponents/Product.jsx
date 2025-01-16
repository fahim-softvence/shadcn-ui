import React, { useContext } from 'react';
import { Apidata } from './ContextApi';

const Product = () => {
    let data = useContext(Apidata);

    return (
        <section className="py-20 bg-[#2d2013]">
            <div className="container mx-auto">
                <div className="">
                    <h4 className="text-white font-bold text-xl text-center">Latest Foods</h4>
                    {Array.isArray(data) && data.length > 0 ? (
                        <div className="flex flex-wrap justify-between mt-20">
                            {data.map((product) => (
                                <div className="w-[24%] border border-white p-3 my-4 hover:scale-105 duration-300" key={product.idCategory}>
                                    <img src={product.strCategoryThumb} alt={product.strCategory} className="w-full h-auto" />
                                    <h5 className='text-white text-xl font-semibold text-center'>{product.strCategory}</h5>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-white">No products available.</p>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Product;

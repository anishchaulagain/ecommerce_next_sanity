
import AddToCart from '@/app/components/AddToCart';
import ImageGallery from '@/app/components/ImageGallery';
import { fullProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity'
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart';

const getData = async (slug: string) => {
    const query = await `*[_type=='product' && slug.current == '${slug}'][0]{
        _id,
        images,
        price,
        name,
        description,
        'slug': slug.current,
        'categoryName': category->name,
        price_id
         
     }`
    const data = await client.fetch(query);
    return data;
}


const ProductPage = async ({
    params,
}: {
    params: { slug: string }
}) => {
    const data: fullProduct = await getData(params.slug)
    
    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
                <div className='grid gap-8 md:grid-cols-2'>
                    <ImageGallery images={data.images} />
                    <div className='md:py-8'>
                        <div className='mb-2 md:mb-3'>
                            <span className='mb-0.5 inline-block text-gray-500 font-bold'>

                                {data.categoryName}
                            </span>
                            <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>{data.name}</h2>

                        </div>
                        <div className='mb-6 flex items-center gap-3 md:mb-10 '>
                            <Button className='rounded-lg gap-x-2'>
                                <span className='font-bold text-sm'>4.2</span>
                                <Star className='h-5 w-5' />
                            </Button>
                            <span className='text-sm text-gray-500 transition duration-100 font-bold'>56 Rating</span>
                        </div>
                        <div className='mb-4'>
                            <div className='flex items-end gap-2'>
                                <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                                    Rs. {data.price}
                                </span>
                                <span className='mb-0.5 text-red-500 line-through'>
                                    Rs.{data.price + 30}
                                </span>
                            </div>
                            <span className='text-sm text-gray-500'>Incl. Vat plus shipping</span>
                        </div>
                        <div className='mb-6 flex items-center gap-2 text-gray-500'>
                            <Truck className='w-6 h-6' />
                            <span className='text-sm'>2-4 Day Shipping</span>
                        </div>
                        <div className='flex gap-2.5'>
                            <AddToCart currency='USD' description={data.description} image={data.images[0]} name={data.name} price={data.price} key={data._id} price_id={data.price_id} />
                            <Button variant='secondary' className='hover:bg-gray-300 font-bold rounded-lg' >Checkout Now</Button>
                        </div>
                        <p className='mt-12 text-base text-gray-500 leading-relaxed tracking-wide'>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
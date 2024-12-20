import { Button } from '@/ui/button'
import React from 'react'

function Productcard({product}) {
  return (
    <div className='w-full max-w-sm mx-auto'>
        <div>
            <div>
                <img src={product?.image}
                alt={product?.title}
                className='w-dull h-[300px] object-cover rounded-t-lg'
                />
                {product?.saleprice>0?<div className='absolute top-2 left-2 bg-red-500 hover:bg-red-600'>Sale</div>:null}
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-bold mb-2'>{product.title}</h2>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-sm text-muted-foreground'>{product?.category}</span>
                    <span className='text-sm text-muted-foreground'>{product?.brand}</span>

                </div>
                <div className='flex justify-between items-center mb-2'>
                    <span className={`${product?.saleprice >0?'line-through':''} text-lg font-semibold text-primary`}>{product?.price}</span>
                    <span className='text-sm text-muted-foreground'>{product?.brand}</span>

                </div>
                <div>
                    <Button>Add to Cart</Button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Productcard

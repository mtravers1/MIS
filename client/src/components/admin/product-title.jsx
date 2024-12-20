import React from 'react'

function ProductTitle({product, currentEditedId, setCurrentEditedId, setFormData, setOpenCreateProductsDialog, handleDelete}) {

    // const editProduct=()=>{
    //     setCurrentEditedId(product?._id)
    //     console.log(product?._id)
    // }


  return (
    <div clasName="w-full max-w-sm mx-auto">
        <div clasName="relative">
            <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
            />
            <div>
                <h2 clasName="text-xl font-bold mb-2">{product?.title}</h2>
                <div clasName="flex justify-between items-center mb-2">
                    <span className={`${product?.salePrice>0 ?'line-through': ''}text-lg font-semibold text-primary`}>${product?.price}</span>
                    <span clasName="text-lg font-bold">${product?.salePrice}</span>
                </div>
            </div>
            <div clasName="flex justify-between items-center">
                <button onClick={()=>{
   setOpenCreateProductsDialog(true)
   setCurrentEditedId(product?._id)
   setFormData(product)
                }

                 
                } >Edit</button>
                <button onClick={()=>handleDelete(product?._id)}>Delete</button>
            </div>

        </div>
    </div>
    
  )
}

export default ProductTitle
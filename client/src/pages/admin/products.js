// import { buttonVariants } from '../../components/ui/button'
// import { addProductFormElements } from '@/config/index.js'
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import { Fragment, useRef, useState} from 'react'
import { useDispatch } from 'react-redux'
import {getAllProducts} from '../../reduxstore/admin/products-slice'
import {addNewProduct} from '../../reduxstore/admin/products-slice'
import axios from 'axios'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductTitle from '../../components/admin/product-title'
// import ProductImageUpload from '../..image-upload'
const initialFormData={
    image:null,
    title:'',
    description:'',
    category:'',
    brand:'',
    price:'',
    salePrice:'',
    totalStock:''
}



const AdminProducts = ()=>{
    const adminProductsState = useSelector((state) => state.adminProducts);
    const { productList } = adminProductsState;
   const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getAllProducts())
        
    },[dispatch])
    const [openCreateProductsDialog, setOpenCreateProductsDialog]=useState(null)

    const open=()=>{
        setOpenCreateProductsDialog(!openCreateProductsDialog)
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        dispatch(addNewProduct({
            ...formData,
            image:uploadedImageUrl
        })).then((data)=>{
            console.log(data)
            if(data?.payload?.success){
                dispatch(getAllProducts())
                setImageFile(null)
                setFormData(initialFormData)

            }
        })
        
    }
    console.log(addNewProduct)
     const addProductFormElements = [
        {
          label: "Title",
          name: "title",
          componentType: "input",
          type: "text",
          placeholder: "Enter product title",
        },
        {
          label: "Description",
          name: "description",
          componentType: "textarea",
          placeholder: "Enter product description",
        },
        {
          label: "Category",
          name: "category",
          componentType: "select",
          options: [
            { id: "men", label: "Men" },
            { id: "women", label: "Women" },
            { id: "kids", label: "Kids" },
            { id: "accessories", label: "Accessories" },
            { id: "footwear", label: "Footwear" },
          ],
        },
        {
          label: "Brand",
          name: "brand",
          componentType: "select",
          options: [
            { id: "nike", label: "Nike" },
            { id: "adidas", label: "Adidas" },
            { id: "puma", label: "Puma" },
            { id: "levi", label: "Levi's" },
            { id: "zara", label: "Zara" },
            { id: "h&m", label: "H&M" },
          ],
        },
        {
          label: "Price",
          name: "price",
          componentType: "input",
          type: "number",
          placeholder: "Enter product price",
        },
        {
          label: "Sale Price",
          name: "salePrice",
          componentType: "input",
          type: "number",
          placeholder: "Enter sale price (optional)",
        },
        {
          label: "Total Stock",
          name: "totalStock",
          componentType: "input",
          type: "number",
          placeholder: "Enter total stock",
        },
      ];
    const [formData, setFormData]=useState(initialFormData)
    const [imageFile, setImageFile]=useState(null)
    const [uploadedImageUrl, setUploadedImageUrl]=useState('')
    const inputRef = useRef(null)
    const handleImageFileChange = (e)=>{
        const selectedFile= e.target.files?.[0]
        if(selectedFile){
            setImageFile(selectedFile)
            console.log(selectedFile)
        }
    }

    const handleDragOver = (e)=>{
        e.preventDefault()
    }

    const handleDrop = (e)=>{
        e.preventDefault()
        const droppedFile = e.dataTransfer.files?.[0]
        if(droppedFile) setImageFile(droppedFile)
    }
const handleRemoveImage=()=>{
    setImageFile(null)
    if(inputRef.current){
        inputRef.current.value = ''
    }
}

useEffect(()=>{
    if(imageFile!==null) uploadImageToCloudinary()
}, [imageFile])

async function uploadImageToCloudinary(){
    const data = new FormData()
    data.append('my_file', imageFile)
    const response = await axios.post('http://localhost:5000/api/admin/products/upload-image', data)
    if(response?.data.success) setUploadedImageUrl(response.data.result.url)
}
    return(
        <Fragment>
            <div className="mb-5 w-full flex ">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {
                productList && productList.length>0 ?
                productList.map(products=><ProductTitle  product={products}/>) : null
            }     
            </div>
            </div>
          
            <button onClick={()=>open()}>
                button

            </button>
            {openCreateProductsDialog &&(
                <div className="overflow-auto">
                    Adding the new products
                    <div className="py-6  w-1/3">
                    <form onSubmit={onSubmit}>
                        {/* <ProductImageUpload/> */}

                        <div className="w-full max-w-md mx-auto">
        <label className="text-lg font-semibold mb-2 block">Upload Image</label>
                <div onDragOver={handleDragOver} onDrop={handleDrop} className="border-2 border-dashed rounded-lg p-4">

              
        <input onChange={handleImageFileChange} ref={inputRef} id="image-upload" type="file" className="hidden"/>
                {
                    !imageFile ?
                        <label htmlFor='image-upload' className="flex flex-col items-center justify-center h-32 cursor-pointer">
                            <UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-3'/>
                        <span>
                            Drag and Drop or Click to upload image
                        </span>
                        </label>
                    :
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <FileIcon className='w-8 h-8 mr-2 text-primary'/>
                        </div>
                        <p className="text-sm font-medium">{imageFile.name}</p>
                        <button variant='ghost' size='icon' className="text-muted-foreground hover:text-foreground" onClick={handleRemoveImage}><XIcon className='w-4 h-4'/>
                        <span className="sr-only">
                            Remove File
                        </span>
                        </button>
                    </div>
                }
                  </div>
    </div>
            <div className="flex flex-col gap-3">
            {addProductFormElements.map((controlItem) => (
            <div className="grid w-full gap-1.5" key={controlItem.name}>
            <label className="mb-1 font-bold text-left">{controlItem.label}</label>
            {/* {renderInputsByComponentType(controlItem)} */}
            {/* <input className="border-2 border-black rounded-sm"/> */}
            <input
            className="border-2 border-black rounded-sm text-xl"
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            id={controlItem.name}
            type={controlItem.type}
            value={controlItem.value}
            onChange={(e)=>setFormData({...formData, [controlItem.name]: e.target.value})}
            />
          </div>
        ))}

            </div>
            <button type='submit' className="mt-2 w-full">Submit</button>

        </form>
                    </div>
                </div>
            )

            }
           
         </Fragment>
    )
}

export default AdminProducts

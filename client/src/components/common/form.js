import { SelectContent, SelectItem, SelectValue, Select, SelectTrigger,  } from "@radix-ui/react-select"
// import { Textarea } from "../ui/textarea"
import { Input } from "postcss"
// import { Button } from "@/ui/button"

import { Label } from "@radix-ui/react-dropdown-menu"
const CommonForm =({formControls, formData, setFormData, onSubmit, buttonText})=>{

    // const type={
    //     INPUT:'input',
    //     SELECT:'select'
    // }
        
    const renderInputsByComponentType=(getControllItems)=>{
        const value=formData[getControllItems.name] || ''

        let element=null
        switch (getControllItems.type){
            case"input":
            element=(
            <Input
            name={getControllItems.name}
            placeholder={getControllItems.placeholder}
            id={getControllItems.name}
            type={getControllItems.type}
            value={value}
            onChange={(e)=>setFormData({...formData, [getControllItems.name]: e.target.value})}
            />
            )
            break;
            case'select':
            element=(
            <Select value={value} onValueChange={(e)=>setFormData({...formData,[getControllItems.name]:e.target.value})}>

                <SelectTrigger classname='w-full'>
                    <SelectValue placeholder={getControllItems.placeholder}/>


                </SelectTrigger>
                <SelectContent>
                    {
                        getControllItems.option && getControllItems.option.length >0 ?
                        getControllItems.option.map(optionItem=><SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>):null
                    }

                </SelectContent>
            </Select>
            )
            break;
          
            // case'textarea':
            // element=(
            // <Textarea
            // name={getControllItems.name}
            // placeholder={getControllItems.placeholder}
            // id={getControllItems.id}
            // value={value}
            // onChange={(event)=>setFormData({...formData, [getControllItems.name]:event.target.value})}
            // />
                
            // )
            // break;

        }
        

    }
    return(
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
            {formControls.map((controlItem) => (
            <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1 font-bold text-left">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
            {/* <input className="border-2 border-black rounded-sm"/> */}
            <input
            className="border-2 border-black rounded-sm"
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
            <button type='submit' className="mt-2 w-full">{buttonText ||'Submit'}</button>

        </form>
    )
}

export default CommonForm
import { filterOptions } from '../../config'
import React from 'react'

 function Filter() {
  return (
    <div className='bg-background rounded-lg shadow-sm'>
       <div className='p-4 border-b'>
        <h2 className='text-lg font-semibold'>Filters</h2>
        </div> 
        <div>
            {
                Object.keys(filterOptions).map((filter)=>(
                    <>
                    <div className='border-b-2 mb-4'>
                        <h3 className='text-base font-bold'>{filter}</h3>
                        <div className='grid gap-2 mt-2'>
                            {filterOptions[filter].map((f)=>(
                                <>
                                <label className='flex items-center gap-2 font-normal'>
                                <input type="radio" /> {f.label}

                                </label>
                                
                                </>
                            ))}
                        </div>
                    </div>
                    </>
                ))
            }

        </div>

    </div>
  )
}

export default Filter

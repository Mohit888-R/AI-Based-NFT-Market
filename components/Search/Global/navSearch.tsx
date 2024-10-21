import { Input } from '@/components/ui/input'
import React from 'react'
import {Search} from 'lucide-react';

function NavSearch() {
  return (
    <div className=' relative flex'>
        <Search className='absolute top-2 left-2 text-gray-100'/>
      <Input placeholder='Search' style={{backgroundColor:'transparent'}} className='placeholder:text-gray-100  pl-[42px] text-white rounded-lg'/>
      <span className='-ml-10 my-1 top-2 bg-gray-300  w-8 h-auto items-center flex justify-center rounded-md bg-opacity-60 text-gray-100'>/</span>
    </div>
  )
}

export default NavSearch

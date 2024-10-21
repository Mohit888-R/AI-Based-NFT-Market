import Image from 'next/image';
import React from 'react'
import NavSearch from '../Search/Global/navSearch';
import { Button } from '../ui/button';
import { BaggageClaim, CircleUserRound, LogIn } from 'lucide-react';

function Nav() {
    const NavItemList = ['Photos', 'Illustrations', 'Collections'];
    return (
        <div className='container flex items-center justify-between'>
            {/* navbar right side */}
            <div className='flex gap-4 items-center'>
                <div className='flex items-center gap-2 py-4'>
                <Image src='../../assets/StockSea_logo.svg' width={40} height={40} alt='Stock Logo' />
                <span className='font-extrabold text-[24px] text-white'>StockSea</span>
                </div>
               <ul className='border-l text-white flex justify-between  gap-4 font-semibold pl-2'>
                {NavItemList.map((item,index)=>(
                    <li key={index}>
                        {item}
                    </li>
                ))}
               </ul>
            </div>  

            {/* navbar center side - Search */}
            <div className='w-4/12'>
            <NavSearch/>
            </div>
            <div className='flex gap-4 justify-between'>
                <Button variant={'default'} className='bg-gray-700 font-semibold text-[16px] text-white '><LogIn /> Login</Button>
                <Button variant={'default'} className='bg-gray-700 font-semibold text-[16px] text-white '><CircleUserRound size={20}/></Button>
                <Button variant={'default'} className='bg-gray-700 font-semibold text-[16px] text-white '><BaggageClaim size={20}/></Button>

            </div>
        </div>

    )
}

export default Nav;

"use client";
import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  
  const [open, setOpen] = useState(false)
  
  
    return (
    <div className="menu">
      <img
      src="/menu.png" 
      alt="Menu" 
      width={28} 
      height={28} 
      className='cursor-pointer'
      onClick={() => setOpen((prev) => !prev)}
      />{
        open && (
            <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-2xl z-10">
            
                <Link href="/">Home</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/login">Logout</Link>
            
            </div>
            )
        }
    </div>
  );
}

export default Menu;

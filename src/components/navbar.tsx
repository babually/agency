import Link from "next/link";
import { useState } from "react";
import { IconMenu2 } from '@tabler/icons-react'

export function Navbar() {
    const [state, setState] = useState(false)
    return (
        <nav className="bg-slate-100 sticky top-0 z-10 w-full">
            <div className="items-center justify-between px-4 max-w-screen-xl mx-auto md:flex md:px-8">
               <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="javascript:void(0)">
                        <h2 className="font-extrabold">Agency</h2>
                    </Link>
                    <div className="md:hidden">
                        <button 
                          className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}>
                          {
                            state ?? (
                                <IconMenu2 
                                   size={30}
                                   color="black" 
                                   stroke={3}  
                                   strokeLinejoin="miter"
                                />
                            )
                          }
                        </button>
                    </div>
               </div>
               <div className="{`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}">
                 <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-gray-600 hover:text-indigo-600">
                        <Link href="/">Demos</Link>
                    </li>
                    <li className="text-gray-600 hover:text-indigo-600">
                        <Link href="/">About</Link>
                    </li>
                    <li className="text-gray-600 hover:text-indigo-600">
                        <Link href="/">Blog</Link>
                    </li>
                    <li className="text-gray-600 hover:text-indigo-600">
                        <Link href="/">Pages</Link>
                    </li>
                    <li className="text-gray-600 hover:text-indigo-600">
                        <Link href="/">Contact</Link>
                    </li>
                    <li className="text-gray-600 hover:text-indigo-600">
                        <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg">
                            <Link href="/">Contact with Us</Link>
                        </button>
                    </li>
                 </ul>
               </div>
            </div>

        </nav>
    );
}
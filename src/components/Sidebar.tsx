        "use client"
        import React, { useState } from 'react'
        import logo from '../../public/logo.png'
        import Image from 'next/image';
        import { CiViewList } from "react-icons/ci";
        import { CgAddR } from "react-icons/cg";
        import { FaRegBell } from "react-icons/fa";
        import { FaImage } from "react-icons/fa6";
        const Sidebar = () => {
            const [sidebar,setSideBar]=useState(false);
            let today=["How to write an impac....",
                "Web accessibility",
                "Design inspiration",
                "What is machine learning"]
        return (
            
            <div className='bg-black    flex  justify-center items-center h-[100vh]'>
                <div className='flex flex-col bg-gradient-to-r from-blue-100 via-yellow-100 to-blue-100
        gap-4 bg-slate-200   p-3 rounded-md'>
                    <CiViewList onClick={()=>setSideBar(prev=>!prev)} className=' size-6 cursor-pointer'/>
                    <CgAddR className='text-red-400 size-6 bg-red-100 rounded-md  cursor-pointer'/>
                    <hr className='  border-slate-300 border '/>
                    <FaRegBell className=' size-5 cursor-pointer'/>
                    <FaImage className=' size-5 cursor-pointer'/>
                </div>
                {/* OPening and closing sidebar on List icon click */}
                {sidebar && (
                    //movemenu animation used here 
                    <div className=' absolute bg-gradient-to-r from-blue-200 via-yellow-100 to-blue-200
                        h-screen  animate-movemenu p-1 z-10  flex flex-col justify-between      min-w-48  '> 
                    <div className='flex  flex-col gap-6'>
                    <div className='flex items-center gap-2'>
                        
                                <Image 
                                    src={logo} 
                                    alt="Logo" 
                                    height={40}
                                    width={40}
                                    className=' object-contain rounded-full bg-blend-color-burn' 
                                />
                                <h1 className='font-semibold font-sans'>ChatGST</h1>
                                <CiViewList className='size-6 ml-10 cursor-pointer' onClick={()=>setSideBar(false)}/>
                            </div>
                            <form className='flex justify-center relative'>
                                <input type="text" placeholder='Add new Thread ' className='w-[90%] h-8 text-xs p-1 rounded-sm'/>
                                <button className='p-1  text-slate-500 absolute  text-center right-4'>+</button>
                        
                                
                            </form>
                            <div className='flex flex-col gap-2 p-1'>
                            <p className='font-semibold font-sans'> Today</p>
                            {
                                today.map((value,index)=>(
                                    <p key={index} className='text-sm text-slate-500  font-sans     hover:scale-105 transition-all duration-500 hover:text-black cursor-pointer'>{value}</p>
                                ))
                            }
                            </div>
                            <div className='flex flex-col gap-2 p-1'>
                            <p className='font-semibold font-sans'>Yesterday</p>
                            {
                                today.map((value,index)=>(
                                    <p  key={index} className='text-sm text-slate-500  font-sans     hover:scale-105 transition-all duration-500 hover:text-black cursor-pointer'>{value}</p>
                                ))
                            }
                            </div>
                        
        </div>
        <div className='flex   flex-col gap-4 p-1'>
                                <div className='flex gap-2 items-center hover:cursor-pointer '>
                                    <FaRegBell className='size-5'/>
                                    <p className='font-sans font-semibold'>Notifications</p>
                                    </div>
                                    <div className='flex gap-2 items-center hover:cursor-pointer'>
                                    <FaImage className='size-5'/>
                                    <p className='font-sans font-semibold'>My Account</p>
                                    </div>
                                </div>
                </div>
            
                )

                }
                </div>
        )
        }

        export default Sidebar
  import React from 'react'
  import { CgAddR } from "react-icons/cg";
  import { CiLocationArrow1 } from "react-icons/ci";
  import logo from '../../public/logo.png'
  import { FaBook } from "react-icons/fa";
  import { FaArrowRight } from "react-icons/fa";
  import Image from 'next/image';
  import PdfList from './PdfList';
  interface IChat{
    selectedPdf?:any
    setSelectedPdf?:any;
  }
  const Chat = ({selectedPdf,setSelectedPdf}:IChat) => {

    return (
      <div className={` w-full bg-gradient-to-r from-blue-100 via-yellow-100 to-blue-200
  p-2 flex justify-center h-screen`}>
      <div className={`   w-full  h-full ${selectedPdf?'':'md:w-[85%] lg:w-[70%]'}  flex flex-col justify-between`}>
        <div className=' mt-10 flex   justify-end'>
        <p className='bg-slate-300  shadow-lg font-sans text-sm rounded-md p-2'>What must be included in a legal document notice under Section 138?
        </p>
        </div>
    
        <div className='w-full flex flex-col gap-2 p-2'>

        <div className='flex w-full mt-4  justify-between'>
          <span className='flex items-center gap-2'>
          <FaBook/>
          <p className=' font-sans text-sm'>Sources</p>
          </span>
          <span className=' flex items-center  hover:text-blue-600 cursor-pointer gap-2 font-sans text-sm'>
            View All 
            <FaArrowRight className='mr-2 size-3'/>
          </span>
          </div>
            {/* PdfList component for Listing all pdfs */}
          <div  className=' w-full'>
            <PdfList selectedPdf={selectedPdf} setSelectedPdf={setSelectedPdf}/>
          </div>
          </div>
        <div className=' h-[65%] mt-4  overflow-y-scroll scrollbar-hide md:h-[70%] p-2'>
                
                  
        <div className='flex items-center gap-2'>
                  
                  <Image 
                      src={logo} 
                      alt="Logo" 
                      height={30}
                      width={30}
                      className=' object-contain rounded-full bg-blend-color-burn' 
                  />
                  <h1 className='font-semibold font-sans'>Result</h1>
                  </div>
  <p className='font-sans text-sm mt-2'>Under Section 138 of the Negotiable Instruments Act, 1881, the legal remedies for cheque dishonor are as follows:</p>
  <p className=' text-sm py-2  font-bold font-sans '>1. Filing a Criminal Complaint</p>
  <ul className='text-sm font-sans flex gap-1 flex-col list-disc ml-6'>
  <li>The payee can initiate criminal proceedings against the drawer for dishonoring a cheque due to insufficient funds or exceeding the arrangement.</li>
  <li>Procedure:<br/>
  <ul className=' flex  flex-col gap-1 mt-0.5'>
  <li>a. The payee must send a demand notice to the drawer within 30 days of receiving the
  cheque return memo from the bank, demanding payment of the cheque amount</li>
  <li>b. The drawer has 15 days from the receipt of the notice to make the payment</li>
  <li>c. The payee must send a demand notice to the drawer within 30 days of receiving the
  cheque return memo from the bank, demanding payment of the cheque amount</li>
  <li>d. The drawer has 15 days from the receipt of the notice to make the payment</li>
  <li>e. The payee must send a demand notice to the drawer within 30 days of receiving the
  cheque return memo from the bank, demanding payment of the cheque amount</li>
  <li>f. The drawer has 15 days from the receipt of the notice to make the payment</li>
  </ul>
  </li>
  </ul>
                
        </div>
        <div className='w-full p-2 border flex  flex-col gap-2  rounded-md border-slate-500'>
        
          <form>
            <input type="text" placeholder='Type your query here...' className='w-full text-sm h-8 outline-none p-1 font-sans'/>
          </form>
          <div className='flex justify-between w-full'>
          <CgAddR className='size-6 text-slate-500 cursor-pointer' />
          <CiLocationArrow1 className='size-6   text-slate-500 cursor-pointer'/>

          </div>

          </div>
      </div>
      </div>

    


      
    )
  }

  export default Chat
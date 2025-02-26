import React, { useState ,useEffect } from 'react'
import { Document,Page} from 'react-pdf'
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io"; 
import { MdAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import { classNames } from '@react-pdf-viewer/core';
interface IPdfViewer{
  selectedPdf:any
  setSelectedPdf:any
}
const PdfViewer = ({selectedPdf,setSelectedPdf}:IPdfViewer) => {
  const [pagenumber,setPageNumber]=useState(1);

  useEffect(() => {
    setPageNumber(1);
  }, [selectedPdf]);

  const handlePageChange = (direction: 'next' | 'previous') => {
    if (direction === 'next') {
      setPageNumber(prev => prev + 1);
    } else if (direction === 'previous') {
      setPageNumber(prev => prev - 1);
  }
}
  return (
    <div className={`   ${selectedPdf?" md:left-[70px]  lg:left-0 absolute lg:relative":''} bg-yellow-100  overflow-hidden    w-full md:w-[90%] lg:w-full h-screen p-2 ` }>
      <div className=' p-1   flex justify-between  bg-slate-200 rounded-t-md'>
        <p className='font-sans  text-sm'> {selectedPdf.name}</p>
        <div className='flex gap-2'>
            <button onClick={()=>handlePageChange('previous')}
            disabled={pagenumber <= 1} className={`font-sans ${pagenumber===1?'text-red-500 bg-red-100 opacity-60':' hover:bg-slate-100  bg-slate-300 '} text-center px-0.5 rounded-lg   `}><RiSubtractLine/></button>
            <span className='font-sans bg-yellow-100 px-2 rounded-md'>{pagenumber}</span>
            <button onClick={()=>handlePageChange('next')}
              disabled={pagenumber >= selectedPdf.pages} className={`font-sans ${pagenumber==selectedPdf.pages?'text-red-500 bg-red-100 opacity-60 ':' hover:bg-slate-100  bg-slate-300  '} text-center px-0.5 rounded-lg   `}><MdAdd/></button>
          </div>
        <div className='flex gap-2'>
        <a
            href={`${selectedPdf.fileUrl}`}  
            download
          >
          <MdOutlineFileDownload className='size-5 cursor-pointer'/>
         </a>
          <IoIosCloseCircleOutline className='size-5 cursor-pointer' onClick={()=>setSelectedPdf(null)}/>
        </div>
      </div>
       <div className='   shadow-xl  h-[95%]  overflow-y-scroll overflow-x-scroll md:overflow-x-hidden '>
       <Document file={selectedPdf.fileUrl } >
      <Page pageNumber={pagenumber} 
      
       className="   h-full w-full  "  />
      
      </Document>
      </div>

    </div>
  )
}

export default PdfViewer

  import React from 'react';
  import { pdfjs } from 'react-pdf';
  import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
  import 'react-pdf/dist/esm/Page/TextLayer.css';
  import logo from '../../public/logo.png'
  import Image from 'next/image';
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

  interface IPdfList{
    selectedPdf?:any
    setSelectedPdf?:any
  }

  const PdfList = ({selectedPdf,setSelectedPdf}:IPdfList) => {
  
  // static Object  for pdfs
    const pdfFiles = [
      { id: 1,  name: 'Securities & Exchange Board',pages:39, fileUrl: 'pdfs/sample_1.pdf' },
      { id: 2, name: 'Banking Regulations',pages:2, fileUrl: 'pdfs/sample_2.pdf' },
      { id: 3, name: 'Section 138 Notice',pages:11, fileUrl: 'pdfs/sample_3.pdf' },
      { id: 4, name: 'Law Under Section 138',pages:34, fileUrl: 'pdfs/sample_4.pdf' },
    
      

    ];

    const handleClick = (pdf:any) => {
      setSelectedPdf(pdf);

    };

    return (
      
        // Mapping static pdf details object(imported in Chat component)
        <div className='  p-2 flex w-full flex-wrap justify-start gap-2'>
          {pdfFiles.map(pdf => (
            <div key={pdf.id} className='text-sm  flex  items-center gap-2 md:flex-col cursor-pointer hover:scale-95    md:max-w-32 hover:bg-slate-200 duration-500 bg-slate-100   border  shadow-lg p-1 md:p-2 rounded-md ' onClick={() => handleClick(pdf)}>
              <Image  src={logo} alt="logo" width={40}  className='   w-10 md:w-full  rounded-sm h-10 md:h-20'/>
              <p className='font-sans font-semibold text-center  '>{pdf.name}</p>
            </div>
          ))}
        </div>
      
        

      
    );
  };

  export default PdfList;

"use client"
import Chat from "@/components/Chat";
import Sidebar from "@/components/Sidebar";
import PdfViewer from "@/components/PdfViewer";
import { useState } from "react";
export default function Home() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  return (
    <div className={`grid ${selectedPdf?'grid-cols-[60px_1fr] lg:grid-cols-[60px_1fr_1fr]   ':'grid-cols-[60px_1fr]'} bg-black text-black  h-screen `}>
      <Sidebar/>
      <Chat selectedPdf={selectedPdf} setSelectedPdf={setSelectedPdf} />
     
      {selectedPdf && <PdfViewer selectedPdf={selectedPdf} setSelectedPdf={setSelectedPdf}/> }
      
      
      
    </div>
  );
}

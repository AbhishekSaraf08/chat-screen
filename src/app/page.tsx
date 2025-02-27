  "use client"
  import Chat from "@/components/Chat/Chat";
  import Sidebar from "@/components/Sidebar/Sidebar";
  import PdfViewer from "@/components/PdfViewer/PdfViewer";
  import { useState } from "react";
  export default function Home() {
    const [selectedPdf, setSelectedPdf] = useState(null);
    return (
      <div className={`grid ${selectedPdf?'grid-cols-[60px_1fr] lg:grid-cols-[60px_1fr_1fr]   ':'grid-cols-[60px_1fr]'} bg-black text-black  h-screen `}>
        <Sidebar/>
        <Chat selectedPdf={selectedPdf} setSelectedPdf={setSelectedPdf} />
      {/* showing PdfViewer when there is any selectedPdf */}
        {selectedPdf && <PdfViewer selectedPdf={selectedPdf} setSelectedPdf={setSelectedPdf}/> }
        
        
        
      </div>
    );
  }

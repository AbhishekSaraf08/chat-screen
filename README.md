<b>Chat Screen Project</b>

This project is a chat screen interface built using Next.js, Tailwind CSS, and various React libraries. It provides a smooth and customizable chat UI that integrates seamlessly with PDF viewer features and custom icons.


 Live project Link - https://chat-screen-iota.vercel.app/ 

Files / Code/Component Locations : - 
1. main page is 'src/app/ page.tsx' 
2. Sidebar , chat , PdfList , PdfViewer  in 'src/components'
3. Sample pdf files are in 'public/pdfs'
4. movemenu  css animation added in tailwind.config.ts

Technologies Used - 
Next.js: A React framework for building server-rendered React applications with ease.
Tailwind CSS: A utility-first CSS framework for creating custom designs without writing custom CSS.
React PDF: A library for displaying PDF files in React applications.
React Icons: A library providing customizable icons for React applications.

Features
Responsive Layout: The chat screen is designed to be fully responsive, thanks to Tailwind CSS. It looks great on both desktop and mobile devices.
PDF Viewer: Allows users to view PDF files directly within the chat interface using the react-pdf library.
Customizable Icons: The UI includes customizable icons, thanks to the react-icons library, allowing you to choose from a wide range of icons.
Next.js Performance: Built using Next.js for fast performance and optimized server-side rendering.
 



Components - 
1. Sidebar - sidebar with functionality of opening and closing of more list of sidebar (responsive)
2. Chat - main section where listed static chat ui   and  pdflist (responsive)
3.pdflist - array of objects for pdf which list the pdfs in chat sections (responsive)
4. PDF viewer - Ui and functionality to show pdf (responsive)


Functionalities - 
1. Sidebar opening and closing on click on list icon 
2. Listing pdfs in chat and its click functionality to show pdfViewer accordingly (using satatic pdfs)
3. addded page change  , download , close functionality to pdf viewer

UI - 
1. designed sidebar , chat , pdfviewer  with responsiveness or different layout as per screen size
2. layout change as per pdfviewer is opened or not


Changes (ui and functionalities )- 
1. Changed the Colour theme of  page 
2. Implemented some custom animation on sidebar opening (which opens when  we click on list icon on sidebar) and pdf lists
3.  Added page change feature to the Pdf Viewer with full functionality 
4. changed the layout of page as per different screen sizes

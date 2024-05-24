import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 ">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
          </svg>
          <span className="text-lg font-bold">Stress Detect</span>
        </div>
        {/* <nav className="flex space-x-4 mt-4 md:mt-0">
          <a className="hover:underline" href="#"> Privacy Policy </a>
 
        </nav> */}
      <div className="text-center mt-4 text-gray-500 mb-3 md:mr-36 flex-1">
        <p>© {currentYear} Stress Detect, IND. All rights reserved</p>
         <p>Made in India</p> 
      </div>
      </div>
    </footer>
  );
}

export default Footer;

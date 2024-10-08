import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="max-w-[450px] w-full   p-10 transition-transform transform  ">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;

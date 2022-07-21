import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl font-bold my-6">My Posts</h1>
      {children}
      <footer className="sticky bot-0">
        Developed by <strong>Daniel Alexander</strong>
      </footer>
    </div>
  );
};

export default Layout;

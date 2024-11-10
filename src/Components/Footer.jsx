import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white d-flex justify-content-center align-items-center">
  <div className='footer-text p-2 text-center'>
    {/* Copyright Section */}
    <div>
      <h4>© {currentYear} ER. Sachin Thak. All rights reserved.</h4>
    </div>
  </div>
</footer>

  );
};

export default Footer;

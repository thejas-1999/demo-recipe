import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">
            {/* Add any logo or branding here if needed */}
          </div>
          <div className="text-sm">
            <p>
              Created with <span className="text-white">&lt;</span>TK<span className="text-white">/&gt;</span> by Thejas.K
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

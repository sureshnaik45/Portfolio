import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
      <p className="text-slate-500">
        © {new Date().getFullYear()} Kimavath Sureshnaik. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
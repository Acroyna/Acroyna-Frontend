import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white p-4 text-center">
      <p className="text-white">&copy; {new Date().getFullYear()} Acroyna Software Solutions. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

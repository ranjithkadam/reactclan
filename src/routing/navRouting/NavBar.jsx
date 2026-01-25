import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return (
    <nav className="bg-white shadow sm:py-5 sm:px-1 sm:pr-3 list-none sm:flex sm:flex-col sm:gap-3 sm:h-full sm:sticky lsm:eft-0.5 sm:top-15 hidden">    
      <Link to="/intro"><li className="py-2 px-1 hover:bg-blue-100 hover:shadow">React-Introduction</li></Link>
      <Link to="/components"><li className="py-2 px-1 hover:bg-blue-100 hover:shadow">React-Components</li></Link>
      <Link to="/props"><li className="py-2 px-1 hover:bg-blue-100 hover:shadow">React-Props</li></Link>
      <Link to="/states"><li className="py-2 px-1 hover:bg-blue-100 hover:shadow">React-States</li></Link>
      <Link to="/jsx"><li className="py-2 px-1 hover:bg-blue-100 hover:shadow">React-javaScriptXML-file</li></Link>
      <Link to="/events"><li className="py-2 px-1 hover:bg-blue-100 hover:shadow">React-Events</li></Link>
      <Link to="/conditions"><li className="py-2 px-1 hover:bg-blue-100 hover:shadow">React-Conditions</li></Link>
      <Link to="/fragments"><li className="py-2 px-1 hover:bg-blue-100 hover:shadow">React-Fragments</li></Link>
      <Link to="/routing"><li className="py-2 px-1 hover:bg-blue-100 hover:shadow">React-Routing</li></Link>
      <Link to="/forms"><li className="py-2 px-1 hover:bg-blue-100 hover:shadow">React-Forms</li></Link>
    </nav>
  );
}

export default Navbar;

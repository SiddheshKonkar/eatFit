import React from "react";


const Header = () => {
  return (
    <>
      <div className="flex items-center px-5 justify-around bg-amber-100 ">
        <a href="/">
          <img src="../assets/biteboxLogo.png" className="h-24 w-24" />
        </a>
        <div className="flex gap-14">
          <a className="text-amber-700 font-semibold	text-lg" href="#">
            Home
          </a>
          <a className="text-amber-700 font-semibold	text-lg" href="#">
            About
          </a>
          <a className="text-amber-700 font-semibold	text-lg" href="#">
            Menu
          </a>
          <a className="text-amber-700 font-semibold	text-lg" href="#">
            Contact
          </a>
        </div>
        <a className="text-amber-700 font-semibold	text-lg" href="#">
          Log in
        </a>
      </div>
    </>
  );
};

export default Header;

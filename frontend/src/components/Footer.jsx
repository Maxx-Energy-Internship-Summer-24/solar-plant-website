import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 w-full">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Find us on any of these platforms, we respond within 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex flex-wrap">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2" type="button">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2" type="button">
                <i className="fab fa-facebook-square"></i>
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2" type="button">
                <i className="fab fa-dribbble"></i>
              </button>
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2" type="button">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-white hover:text-black font-semibold block pb-2 text-sm" to="/">Home</Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-black font-semibold block pb-2 text-sm" to="/about">About</Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-black font-semibold block pb-2 text-sm" to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-black font-semibold block pb-2 text-sm" to="/data">Data</Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-black font-semibold block pb-2 text-sm" to="/login">Login</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-white hover:text-black font-semibold block pb-2 text-sm" to="https://mit-license.org">MIT License</Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-black font-semibold block pb-2 text-sm" to="https://www.novibes.com/TnC?gad_source=1&gclid=Cj0KCQjw9Km3BhDjARIsAGUb4nw1uMIHz4cJky1lT-rIEtRgxhQw7go-9n2O64lsvGASBNCxi7lvlTsaAlVXEALw_wcB">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-black font-semibold block pb-2 text-sm" to="https://en.wikipedia.org/wiki/Privacy_policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link className="text-white hover:text-black font-semibold block pb-2 text-sm" to="https://maxxpotential.com/contact-us/">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © {currentYear} Notus JS by
              <a href="https://www.linkedin.com/in/dumebi-chukwuma-1a914a258/" className="text-white hover:text-black"> Dumebi (Alfred) Chukwuma.</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

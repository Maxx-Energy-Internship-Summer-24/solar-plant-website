import React, { useState, useEffect } from 'react';
import alfred from "../images/Alfred.jpeg"
import FormPopup from '../components/FormPopup';
import { useNavigate } from 'react-router-dom'

const UserProfile = ({userInfo, setUserInfo, isLoggedIn, setLoggedIn}) => {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();
  useEffect(() => {
    setUserInfo(user)
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem('user'); // Clear sessionStorage
    setUserInfo(null); // Reset userInfo state
    setLoggedIn(false)
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="w-full text-white bg-main-color">
        <div className="flex flex-col max-w-screen-xl mx-auto px-4 md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex items-center justify-between">
            <a href="#" className="text-lg font-semibold tracking-widest uppercase rounded-lg text-black focus:outline-none focus:shadow-outline">
              Customer Profile
            </a>
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path x-show={!open} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                <path x-show={open} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <nav className={`flex-col flex-grow pb-4 md:pb-0 ${open ? 'flex' : 'hidden'} md:flex md:justify-end md:flex-row`}>
            <div className="relative" onClick={() => setOpen(true)}>
              <button className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-blue-800 focus:outline-none focus:shadow-outline">
                <span className="text-black">{userInfo.name}</span>
                <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 transition-transform duration-200 transform ${open ? 'rotate-180' : 'rotate-0'}`}>
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 ${open ? 'block' : 'hidden'}`}>
                <div className="py-2 bg-white text-blue-800 text-sm rounded-sm border border-main-color shadow-sm">
                  <div className="border-b"></div>
                  <button className="block w-full text-left px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full mx-auto my-5 px-5">
        <div className="flex flex-wrap -mx-2">
          {/* Profile Picture and Info */}
          <div className="w-full md:w-3/12 md:px-2">
            <div className="bg-white p-3 border-t-4 border-purple-400 rounded-lg">
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user.name}</h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">Solar Customer</h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">We’re thrilled to have you as a customer! Our goal is to make sure your solar system runs smoothly and meets your needs. If you ever have questions or need help, don’t hesitate to reach out—we’re here for you.</p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Account Status</span>
                  <span className="ml-auto"><span className="bg-purple-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member Since</span>
                  <span className="ml-auto">Nov 07, 2021</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* User Details and Service Information */}
          <div className="w-full md:w-9/12 md:px-2">
            <div className="bg-white p-3 shadow-sm rounded-lg">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-purple-500">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm gap-4">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">{user.firstName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">{user.lastName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{user.gender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{user.phoneNumber}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Current Address</div>
                    <div className="px-4 py-2">{user.address}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Occupation</div>
                    <div className="px-4 py-2">{user.occupation}</div>
                  </div>
                  <FormPopup userInfo={userInfo} setUserInfo={setUserInfo}/>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-3 mt-6 shadow-sm rounded-lg">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-purple-500">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <span className="tracking-wide">Service Information</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm gap-4">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">System Type</div>
                    <div className="px-4 py-2">Residential</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Installation Date</div>
                    <div className="px-4 py-2">Sept 01, 2024</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Energy Production</div>
                    <div className="px-4 py-2">8.5 kWh/day</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Monthly Savings</div>
                    <div className="px-4 py-2">$200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;

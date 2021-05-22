import React from 'react';
import {AmplifySignOut} from '@aws-amplify/ui-react';

const Nav = () => (
    <nav
        className="shadow-md flex items-center justify-between flex-wrap  p-6 bg-gradient-to-r from-gray-100 to-gray-50 ">
      <div className="flex items-center flex-no-shrink text-black mr-6">
        <span
            className="font-semibold text-3xl text-black">Image Storage</span>
      </div>
      {/*<div className="block lg:hidden">*/}
      {/*  <button*/}
      {/*      className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">*/}
      {/*    <svg className="h-3 w-3" viewBox="0 0 20 20"*/}
      {/*         xmlns="http://www.w3.org/2000/svg"><title>Menu</title>*/}
      {/*      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>*/}
      {/*    </svg>*/}
      {/*  </button>*/}
      {/*</div>*/}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-2xl">

        <div className="text-sm lg:flex-grow text-gray-800">
          <a href="#upload"
             className="block mt-4 lg:inline-block lg:mt-0 hover:underline mr-4 text-xl font-bold">
            Upload
          </a>
          <a href="#search"
             className="block mt-4 lg:inline-block lg:mt-0 hover:underline mr-4 text-xl font-bold">
            Search
          </a>
        </div>
        <div className="max-w-xs">
          <AmplifySignOut/>
        </div>
      </div>
    </nav>);

export default Nav;
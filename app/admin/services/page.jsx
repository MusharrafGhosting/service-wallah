import Nav from "@/components/Nav";
import React from "react";
import { IoMdInformationCircle } from "react-icons/io";

const Services = () => {
  return (
    <div>
      <Nav />
      <div className="px-20 py-6 grid grid-cols-3">
        <div className="p-4 shadow border bg-white border-gray-300 rounded-lg flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <img src="/image/service-logos/ac.svg" alt="ac" />
            <h2 className="text-2xl font-bold text-gray-700">AC Repairing</h2>
          </div>
          <div className="flex w-full gap-2 items-center">
            <div className="bg-gray-500 w-full h-[1px]"></div>
            <div className="whitespace-nowrap text-gray-700 text-xs">
              Sub Services
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center hover:bg-gray-300 rounded cursor-pointer transition-all duration-500 p-2">
              <img
                src="/image/sub-service/image2.png"
                alt=""
                className="w-14 h-14 object-cover"
              />
              <h4 className="whitespace-nowrap">AC Installation</h4>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-300 rounded cursor-pointer transition-all duration-500 p-2">
              <img
                src="/image/sub-service/image1.png"
                alt=""
                className="w-14 h-14 object-cover"
              />
              <h4 className="whitespace-nowrap">AC Uninstallation</h4>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-300 rounded cursor-pointer transition-all duration-500 p-2">
              <img
                src="/image/sub-service/image3.png"
                alt=""
                className="w-14 h-14 object-cover"
              />
              <h4 className="whitespace-nowrap">AC Repairing</h4>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
              type="button"
            >
              <IoMdInformationCircle size={25} />
              More details
            </button>
          </div>
        </div>
        <div className="p-4 shadow border bg-white border-gray-300 rounded-lg flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <img src="/image/service-logos/ac.svg" alt="ac" />
            <h2 className="text-2xl font-bold text-gray-700">AC Repairing</h2>
          </div>
          <div className="flex w-full gap-2 items-center">
            <div className="bg-gray-500 w-full h-[1px]"></div>
            <div className="whitespace-nowrap text-gray-700 text-xs">
              Sub Services
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center hover:bg-gray-300 rounded cursor-pointer transition-all duration-500 p-2">
              <img
                src="/image/sub-service/image2.png"
                alt=""
                className="w-14 h-14 object-cover"
              />
              <h4 className="whitespace-nowrap">AC Installation</h4>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-300 rounded cursor-pointer transition-all duration-500 p-2">
              <img
                src="/image/sub-service/image1.png"
                alt=""
                className="w-14 h-14 object-cover"
              />
              <h4 className="whitespace-nowrap">AC Uninstallation</h4>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-300 rounded cursor-pointer transition-all duration-500 p-2">
              <img
                src="/image/sub-service/image3.png"
                alt=""
                className="w-14 h-14 object-cover"
              />
              <h4 className="whitespace-nowrap">AC Repairing</h4>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
              type="button"
            >
              <IoMdInformationCircle size={25} />
              More details
            </button>
          </div>
        </div>
        <div className="p-4 shadow border bg-white border-gray-300 rounded-lg flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <img src="/image/service-logos/ac.svg" alt="ac" />
            <h2 className="text-2xl font-bold text-gray-700">AC Repairing</h2>
          </div>
          <div className="flex w-full gap-2 items-center">
            <div className="bg-gray-500 w-full h-[1px]"></div>
            <div className="whitespace-nowrap text-gray-700 text-xs">
              Sub Services
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center hover:bg-gray-300 rounded cursor-pointer transition-all duration-500 p-2">
              <img
                src="/image/sub-service/image2.png"
                alt=""
                className="w-14 h-14 object-cover"
              />
              <h4 className="whitespace-nowrap">AC Installation</h4>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-300 rounded cursor-pointer transition-all duration-500 p-2">
              <img
                src="/image/sub-service/image1.png"
                alt=""
                className="w-14 h-14 object-cover"
              />
              <h4 className="whitespace-nowrap">AC Uninstallation</h4>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-300 rounded cursor-pointer transition-all duration-500 p-2">
              <img
                src="/image/sub-service/image3.png"
                alt=""
                className="w-14 h-14 object-cover"
              />
              <h4 className="whitespace-nowrap">AC Repairing</h4>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
              type="button"
            >
              <IoMdInformationCircle size={25} />
              More details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

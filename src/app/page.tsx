"use client";
import {
  RiArrowRightLine,
  RiLiveFill,
  RiCustomerService2Line,
  RiTeamLine,
  RiBuilding2Line,
  RiArchiveLine,
  RiHomeOfficeLine,
  RiStarFill,
} from "@remixicon/react";

export default function Home() {
  return (
    <div className="container px-24 grid grid-cols-2 items-center min-h-[85vh]">
      <div>
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Over 14k+ Customers in the Middle East
        </div>

        <h1 className="mt-2 font-light text-6xl leading-tight">
          Foundation of
        </h1>
        <h1 className="font-bold text-6xl leading-tight text-blue-600">
          Modern Business
        </h1>

        <p className="pt-6 text-gray-600 max-w-xl leading-relaxed">
          Complete business solutions that streamline your operations, automate
          workflows, and unite all your business operations. We offer expert
          accounting, IT infrastructure, security systems, web development, and
          enterprise solutions — all backed by 24/7 support for your digital
          success.
        </p>

        <div className="mt-10 flex items-center gap-6">
          <button
            className="
              bg-blue-500 text-white
              hover:bg-blue-600
              transition-all duration-300 ease-out
              transform hover:-translate-y-0.5
              flex gap-3 py-3 px-6 rounded-md
              text-sm font-medium items-center group
              shadow-sm hover:shadow-md
            "
          >
            Get Started
            <RiArrowRightLine
              size={16}
              className="transition-transform duration-300 ease-out group-hover:translate-x-2"
            />
          </button>

          <button
            className="
              flex items-center gap-2 text-sm font-medium text-gray-700
              hover:text-blue-600 cursor-pointer group
              transition-all duration-300 ease-out
            "
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 ease-out group-hover:border-blue-400 border-gray-300">
              <RiLiveFill size={16} className="text-red-500" />
            </span>
            Watch Video
          </button>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="relative rounded-2xl">
          <img
            className="h-130 w-100 rounded-2xl object-cover"
            src="./hero.jpg"
            alt=""
          />

          <div className="absolute top-14 -left-56 w-72 rounded-md bg-white/80 backdrop-blur shadow-lg p-4 space-y-3 border-x-2 border-transparent hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-3 group cursor-pointer">
              <RiCustomerService2Line
                className="text-blue-600 mt-0.5"
                size={22}
              />
              <div className="flex-1">
                <h4 className="font-semibold text-sm flex items-center gap-1 text-blue-600">
                  CRM
                  <RiArrowRightLine
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  />
                </h4>
                <p className="text-xs text-gray-600">
                  Manage customer relationships effectively.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 group cursor-pointer">
              <RiTeamLine className="text-blue-600 mt-0.5" size={22} />
              <div className="flex-1">
                <h4 className="font-semibold text-sm flex items-center gap-1 text-blue-600">
                  HRMS
                  <RiArrowRightLine
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  />
                </h4>
                <p className="text-xs text-gray-600">
                  Simplify human resource management.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 group cursor-pointer">
              <RiBuilding2Line className="text-blue-600 mt-0.5" size={22} />
              <div className="flex-1">
                <h4 className="font-semibold text-sm flex items-center gap-1 text-blue-600">
                  ERP
                  <RiArrowRightLine
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  />
                </h4>
                <p className="text-xs text-gray-600">
                  Integrate business processes into one system.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-5 right-5 bg-white/80 backdrop-blur p-2 rounded-md flex items-center gap-2 ">
            <div className="h-7 w-7">
              <img src="./go.png" alt="" />
            </div>
            <div>
              <h1 className="text-xs flex items-center gap-2">
                4.9 <RiStarFill className="text-amber-500" size={14} />
              </h1>
              <h1 className="text-xs"><span className="font-bold">1k+ </span>Reviews</h1>
            </div>
          </div>

          <div className="absolute top-80 -right-32 w-72 rounded-md bg-white/80 backdrop-blur shadow-lg p-4 space-y-3 border-x-2 border-transparent hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-3 group cursor-pointer">
              <RiArchiveLine className="text-blue-600 mt-0.5" size={22} />
              <div className="flex-1">
                <h4 className="font-semibold text-sm flex items-center gap-1 text-blue-600">
                  Inventory
                  <RiArrowRightLine
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  />
                </h4>
                <p className="text-xs text-gray-600">
                  Effortlessly manage inventory with Elate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 group cursor-pointer">
              <RiHomeOfficeLine className="text-blue-600 mt-0.5" size={22} />
              <div className="flex-1">
                <h4 className="font-semibold text-sm flex items-center gap-1 text-blue-600">
                  Property
                  <RiArrowRightLine
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  />
                </h4>
                <p className="text-xs text-gray-600">
                  Streamline property operations and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

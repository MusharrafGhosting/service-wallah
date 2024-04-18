import Nav from "../components/Nav";

import { RxDoubleArrowRight } from "react-icons/rx";


export default function Home() {
  return (
    <main>
      <Nav />
      <div className="flex flex-col lg:flex-row">
        {/* Left half */}
        <div className="lg:w-1/2 py-20 px-10 flex items-center">
          <div className="lg:w-full">
            <p className="text-2xl">Get Your Work done in a</p>
            <h1 className="text-6xl  font-normal  text-[#582FFF] mb-4">
              Professional
            </h1>
            <span className="flex justify-center"><svg width="518" className="sm:w-3/4" height="60" viewBox="0 0 518 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50.4788 51.2511C68.428 47.9447 54.2816 50.3745 88.2408 44.617C92.6221 43.8766 117.908 40.1574 118.269 40.1149C162.5 34.6 180.945 32.2426 245.974 29.4128C288.447 28.8638 276.568 28.9447 296.772 29.1702C323.523 29.4723 316.368 29.1872 338.038 31.1149C359.057 32.9872 353.088 32.4043 359.057 33.166C399.399 38.3149 383.527 36.017 423.744 42.5957C423.781 42.6 452.563 48.0766 471.308 52.7319L490.841 57.5787C491.449 57.7277 491.939 56.8894 492.241 56.3489C494.089 53.0255 494.73 46.4085 493.944 44.6426C501.855 45.3787 506.053 45.9362 511.62 45.6043C512.587 45.5447 513.553 45.2979 514.509 45.1191C517.017 43.9702 518.865 32.6468 517.261 30.834C516.687 30.1318 515.959 29.6794 515.177 29.5404C513.065 27.5026 510.664 26.0234 508.11 25.1872C506.539 24.7106 505.724 24.7234 499.301 24.2C490.706 23.5021 492.702 23.0979 476.176 19.7702C435.363 11.5362 390.403 4.34043 349.147 1.84681C282.172 -2.19149 211.552 2.26809 144.787 10.2596C62.068 16.5745 11.8818 28.0085 9.88346 28.2128C9.32712 28.2785 8.7914 28.518 8.32223 28.9106C7.69445 29.434 7.31647 30.4085 6.9615 31.217C5.13403 35.3872 4.83493 40.9149 5.40684 42.7745C4.60157 43.3234 3.80288 43.9021 2.99761 44.4383C1.38051 45.5064 -0.893962 54.5957 0.364883 58.0979C0.644261 58.6596 0.894058 59.1191 1.25561 59.5957C1.50212 59.9191 1.91625 60 2.28438 60C4.72318 60 44.5592 52.366 50.4788 51.2511Z" fill="url(#paint0_linear_112_70)" />
              <defs>
                <linearGradient id="paint0_linear_112_70" x1="517.861" y1="30.1664" x2="0" y2="30.1664" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFB800" />
                  <stop offset="1" stop-color="#FFE600" />
                </linearGradient>
              </defs>
            </svg>
            </span>
            <h3 className="text-center font-extralight text-4xl">Manner</h3>
            <div className="flex w-full justify-evenly flex-nowrap items-center gap-1  mt-8">
              <button variant="gradient" size="sm" className="transition-all duration-700 w-[274px] h-[71px] flex justify-center items-center rounded-lg   gap-1 hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-[#5D35FF] hover:border-[#582FFF] hover:border-2 bg-gradient-to-r from-[#5D35FF] to-[#301BB1] font-semibold text-white" fullWidth>
                Find a Service <RxDoubleArrowRight size={18} />
              </button>
              <button variant="gradient" size="sm" className="transition-all duration-700 w-[274px] h-[71px] rounded-lg   gap-6 hover:bg-gradient-to-r hover:from-[#5D35FF] hover:to-[#301BB1] hover:text-white  border-2 border-[#582FFF] text-[#582FFF] font-semibold" fullWidth>
                Become a Service provider
              </button>
            </div>
            <div className="flex w-full justify-around flex-nowrap items-center pt-8 gap-2  mt-2">
              <div className=" flex flex-col items-end justify-center">
                <img
                  className="  max-w-full text-center  rounded-lg w-[137px]"
                  src="/image/start.png"
                  alt=""
                />
                <div className="">
                  <h3 className="text-[#582FFF] font-bold text-3xl text-center">4.7</h3>
                  <p className="text-xl font-medium">Service Rating</p>
                </div>
              </div>
              <div className="star w-1/2   flex text-center gap-4">
                <p className="">
                  <img
                    className="h-auto   rounded-lg w-[120px] "
                    src="/image/hero-child.png"
                    alt=""
                  />
                </p>
                <div class="w-full flex items-start justify-center flex-col   ">
                  <div class="mb-2 text-[#582FFF] font-bold text-3xl">2+ Lakhs</div>
                  <div className="text-2xl font-medium">Happy Customers</div>
                </div>
              </div>

            </div>


          </div>
        </div>
        {/* Right half */}
        <div className="lg:w-1/2 py-5 px-5">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="grid gap-2">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/image/hero1.webp"
                alt=""
              />
              <div className="ml-auto">
                <img
                  className="float-right w-4/5  h-56 rounded-lg"
                  src="/image/hero3.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <img
                className="h-auto max-w-full h-full rounded-lg"
                src="/image/hero2.webp"
                alt=""
              />
            </div>
            <div className="grid gap-4">
              <div className="ml-auto">
                <img
                  className="h-auto   rounded-lg"
                  src="/image/hero4.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <img
                className="h-auto max-w-full h-full w-full rounded-lg"
                src="/image/hero5.webp"
                alt=""
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

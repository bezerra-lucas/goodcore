import Image from "next/image";

import computer from "@/assets/computer.svg";

export default function ServicesSection() {
  const divElementGrid = `svg-change-color transition duration-100 ease-in-out delay-150 
  cursor-pointer rounded-xl transition ease-in-out delay-150 border border-[#f1f1f1]
  group bg-[white] hover:bg-[#1a64a3] px-7 py-12  w-full flex flex-col
  justify-center font-normal text-center box-border
  opacity-100 px-[15px]`;

  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="uppercase font-bold text-[48px] mx-auto">
        our&nbsp;
        <span className="custom-underline uppercase font-bold text-[48px] mx-auto text-center">
          services
        </span>
      </h2>
      <p className="text-[24px] text-center max-w-[1200px] mx-auto mt-7 text-[#303234]">
        GoodCore is a leading bespoke software development company based in
        Croydon, UK. We build robust software for startups and established
        businesses. Since 2005.
      </p>

      <div className="max-w-[1200px] w-[97%] mx-auto grid grid-cols-3 gap-x-10 mt-16">
        <div className="svg-change-color cursor-pointer rounded-xl border border-[#f1f1f1] group bg-[white] px-7 py-16  w-full flex flex-col justify-center font-normal text-[#212529] text-center box-border">
          <div className="flex justify-center w-full">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width={80}
                height={60}
                viewBox="0 0 640 480"
              >
                <g transform="matrix(8.69 0 0 8.8 316.6 240.5)">
                  <path
                    style={{
                      stroke: "none",
                      strokeWidth: "1",
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeDashoffset: "0",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: "4",
                      fillRule: "nonzero",
                      opacity: "1",
                    }}
                    transform=" translate(-32.16, -27.29)"
                    d="m 61.295 46.491 h -22.828 l 1.507 6.066 h 3.235 c 0.555 0 1.005 0.453 1.005 1.01 c 0 0.56 -0.45 1.012 -1.005 1.012 h -22.105 c -0.555 0 -1.005 -0.452 -1.005 -1.012 c 0 -0.557 0.45 -1.01 1.005 -1.01 h 3.234 l 1.508 -6.066 h -22.828 c -1.662 0 -3.014 -1.359 -3.014 -3.031 v -40.434 c 0 -1.673 1.352 -3.033 3.014 -3.033 h 58.277 c 1.662 0 3.014 1.36 3.014 3.033 v 40.434 c 0 1.672 -1.352 3.031 -3.014 3.031 z m -23.392 6.066 l -1.507 -6.066 h -8.479 l -1.507 6.066 h 11.493 z m 24.396 -49.531 c 0 -0.558 -0.45 -1.01 -1.004 -1.01 h -58.277 c -0.554 0 -1.005 0.452 -1.005 1.01 v 33.357 h 60.286 v -33.357 z m 0 35.38 h -60.286 v 5.054 c 0 0.557 0.451 1.011 1.005 1.011 h 58.277 c 0.554 0 1.004 -0.454 1.004 -1.011 v -5.054 z m -29.138 4.043 h -2.009 c -0.555 0 -1.005 -0.452 -1.005 -1.011 c 0 -0.558 0.45 -1.011 1.005 -1.011 h 2.009 c 0.555 0 1.005 0.453 1.005 1.011 c 0 0.559 -0.45 1.011 -1.005 1.011 z m -26.124 -36.39 h 50.239 c 0.554 0 1.004 0.361 1.004 0.809 c 0 0.446 -0.45 0.809 -1.004 0.809 h -50.239 c -0.555 0 -1.005 -0.363 -1.005 -0.809 c 0 -0.448 0.45 -0.809 1.005 -0.809 z m 0 5.054 h 30.143 c 0.555 0 1.005 0.361 1.005 0.809 c 0 0.447 -0.45 0.808 -1.005 0.808 h -30.143 c -0.555 0 -1.005 -0.361 -1.005 -0.808 c 0 -0.448 0.45 -0.809 1.005 -0.809 z m -0.201 13.141 c 0.444 0 0.804 0.452 0.804 1.011 v 6.065 c 0 0.559 -0.36 1.011 -0.804 1.011 s -0.804 -0.452 -0.804 -1.011 v -6.065 c 0 -0.559 0.36 -1.011 0.804 -1.011 z m 5.024 -2.021 c 0.444 0 0.804 0.451 0.804 1.01 v 8.087 c 0 0.559 -0.36 1.011 -0.804 1.011 s -0.804 -0.452 -0.804 -1.011 v -8.087 c 0 -0.559 0.36 -1.01 0.804 -1.01 z m 5.024 -2.023 c 0.444 0 0.804 0.452 0.804 1.012 v 10.108 c 0 0.559 -0.36 1.011 -0.804 1.011 s -0.804 -0.452 -0.804 -1.011 v -10.108 c 0 -0.56 0.36 -1.012 0.804 -1.012 z m 5.024 -2.021 c 0.444 0 0.804 0.452 0.804 1.01 v 12.131 c 0 0.559 -0.36 1.011 -0.804 1.011 s -0.804 -0.452 -0.804 -1.011 v -12.131 c 0 -0.558 0.36 -1.01 0.804 -1.01 z m 18.578 -5.348 c -0.181 -0.192 -0.291 -0.456 -0.291 -0.716 c 0 -0.275 0.11 -0.527 0.291 -0.718 c 0.371 -0.375 1.055 -0.375 1.427 0 c 0.18 0.191 0.291 0.443 0.291 0.718 c 0 0.271 -0.111 0.524 -0.291 0.716 c -0.191 0.182 -0.453 0.293 -0.714 0.293 s -0.522 -0.111 -0.713 -0.293 z m 4.019 0 c -0.181 -0.192 -0.291 -0.445 -0.291 -0.716 c 0 -0.275 0.11 -0.527 0.291 -0.718 c 0.371 -0.375 1.055 -0.375 1.427 0 c 0.18 0.191 0.291 0.443 0.291 0.718 c 0 0.26 -0.111 0.524 -0.291 0.716 c -0.191 0.182 -0.442 0.293 -0.714 0.293 c -0.261 0 -0.522 -0.111 -0.713 -0.293 z m 4.019 0 c -0.181 -0.192 -0.291 -0.456 -0.291 -0.716 c 0 -0.264 0.11 -0.527 0.291 -0.718 c 0.382 -0.375 1.055 -0.375 1.427 0 c 0.18 0.191 0.291 0.443 0.291 0.718 c 0 0.271 -0.111 0.524 -0.291 0.716 c -0.191 0.182 -0.453 0.293 -0.714 0.293 s -0.522 -0.111 -0.713 -0.293 z m 4.019 0 c -0.181 -0.192 -0.291 -0.445 -0.291 -0.716 c 0 -0.275 0.11 -0.527 0.291 -0.718 c 0.372 -0.365 1.045 -0.375 1.427 0 c 0.18 0.191 0.291 0.454 0.291 0.718 c 0 0.26 -0.111 0.524 -0.291 0.716 c -0.191 0.182 -0.452 0.293 -0.713 0.293 c -0.262 0 -0.523 -0.111 -0.714 -0.293 z m 4.733 0.293 c -0.262 0 -0.523 -0.111 -0.714 -0.293 c -0.181 -0.192 -0.291 -0.456 -0.291 -0.716 c 0 -0.264 0.11 -0.527 0.291 -0.718 c 0.372 -0.375 1.055 -0.375 1.427 0 c 0.181 0.191 0.291 0.454 0.291 0.718 c 0 0.26 -0.11 0.524 -0.291 0.716 c -0.191 0.182 -0.452 0.293 -0.713 0.293 z m -22.105 7.076 h 22.105 c 0.554 0 1.004 0.362 1.004 0.809 c 0 0.446 -0.45 0.808 -1.004 0.808 h -22.105 c -0.555 0 -1.005 -0.362 -1.005 -0.808 c 0 -0.447 0.45 -0.809 1.005 -0.809 z m 0 5.055 h 22.105 c 0.554 0 1.004 0.361 1.004 0.808 c 0 0.448 -0.45 0.809 -1.004 0.809 h -22.105 c -0.555 0 -1.005 -0.361 -1.005 -0.809 c 0 -0.447 0.45 -0.808 1.005 -0.808 z m 0 5.054 h 10.047 c 0.555 0 1.005 0.361 1.005 0.808 s -0.45 0.808 -1.005 0.808 h -10.047 c -0.555 0 -1.005 -0.361 -1.005 -0.808 s 0.45 -0.808 1.005 -0.808 z m 14.78 0.293 c 0.18 0.191 0.291 0.455 0.291 0.718 c 0 0.262 -0.111 0.525 -0.291 0.717 c -0.191 0.182 -0.453 0.294 -0.714 0.294 s -0.522 -0.112 -0.713 -0.294 c -0.181 -0.192 -0.291 -0.446 -0.291 -0.717 c 0 -0.274 0.11 -0.527 0.291 -0.718 c 0.372 -0.374 1.045 -0.374 1.427 0 z m 4.019 0 c 0.18 0.191 0.291 0.455 0.291 0.718 c 0 0.262 -0.111 0.525 -0.291 0.717 c -0.191 0.182 -0.452 0.294 -0.713 0.294 c -0.262 0 -0.523 -0.112 -0.714 -0.294 c -0.181 -0.192 -0.291 -0.455 -0.291 -0.717 c 0 -0.263 0.11 -0.527 0.291 -0.718 c 0.382 -0.374 1.045 -0.374 1.427 0 z m 4.019 0 c 0.181 0.191 0.291 0.455 0.291 0.718 c 0 0.262 -0.11 0.525 -0.291 0.717 c -0.191 0.182 -0.452 0.294 -0.713 0.294 c -0.262 0 -0.523 -0.112 -0.714 -0.294 c -0.181 -0.192 -0.291 -0.455 -0.291 -0.717 c 0 -0.263 0.11 -0.527 0.291 -0.718 c 0.382 -0.374 1.055 -0.374 1.427 0 z"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <h3 className="mt-8 text-[#303234] font-semibold text-lg">
            Web Application Development
          </h3>
          <p className="text-[1rem] mt-4 text-[#828282] font-medium">
            Utilising the latest technologies, we build web applications that
            deliver remarkable functionality and user engagement from within a
            browser window.
          </p>
          <span className="mt-5 text-[#78bdf8]">MORE &gt;&gt;</span>
        </div>
        <div className="svg-change-color cursor-pointer rounded-xl border border-[#f1f1f1] group bg-[white] px-7 py-16  w-full flex flex-col justify-center font-normal text-[#212529] text-center box-border">
          <div className="flex justify-center w-full">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width={80}
                height={60}
                viewBox="0 0 640 480"
              >
                <g transform="matrix(8.54 0 0 8.54 317.78 239.98)">
                  <path
                    style={{
                      stroke: "none",
                      strokeWidth: "1",
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeDashoffset: "0",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: "4",
                      fillRule: "nonzero",
                      opacity: "1",
                    }}
                    transform=" translate(-15.75, -28)"
                    d="m 27.125 56 h -22.75 c -2.412 0 -4.375 -1.962 -4.375 -4.375 v -47.25 c 0 -2.412 1.963 -4.376 4.375 -4.376 h 22.75 c 2.412 0 4.375 1.964 4.375 4.376 v 47.25 c 0 2.413 -1.963 4.375 -4.375 4.375 z m 2.625 -51.625 c 0 -1.448 -1.178 -2.625 -2.625 -2.625 h -22.75 c -1.448 0 -2.625 1.177 -2.625 2.625 v 47.25 c 0 1.448 1.177 2.625 2.625 2.625 h 22.75 c 1.447 0 2.625 -1.177 2.625 -2.625 v -47.25 z m -2.625 42.875 h -22.75 c -0.483 0 -0.875 -0.392 -0.875 -0.876 v -38.5 c 0 -0.483 0.392 -0.875 0.875 -0.875 h 22.75 c 0.483 0 0.875 0.392 0.875 0.875 v 38.5 c 0 0.484 -0.392 0.876 -0.875 0.876 z m -0.875 -38.5 h -21 v 36.75 h 21 v -36.75 z m -18.995 16.883 l 6.985 -7.015 c 0.341 -0.344 0.895 -0.344 1.238 -0.003 c 0.342 0.341 0.343 0.895 0.002 1.238 l -6.985 7.014 c -0.171 0.172 -0.395 0.258 -0.62 0.258 c -0.223 0 -0.446 -0.085 -0.617 -0.255 c -0.343 -0.341 -0.344 -0.896 -0.003 -1.237 z m 8.241 -11.012 c -0.166 0.158 -0.394 0.253 -0.621 0.253 c -0.228 0 -0.455 -0.095 -0.621 -0.253 c -0.158 -0.166 -0.254 -0.385 -0.254 -0.622 c 0 -0.227 0.096 -0.454 0.254 -0.62 c 0.323 -0.324 0.918 -0.324 1.242 0 c 0.157 0.166 0.254 0.393 0.254 0.62 c 0 0.237 -0.097 0.456 -0.254 0.622 z m 1.383 -3.867 c 0.332 -0.325 0.918 -0.325 1.242 0 c 0.157 0.165 0.254 0.393 0.254 0.621 c 0 0.227 -0.097 0.455 -0.254 0.621 c -0.166 0.158 -0.394 0.254 -0.621 0.254 c -0.228 0 -0.455 -0.096 -0.621 -0.254 c -0.158 -0.166 -0.254 -0.394 -0.254 -0.621 c 0 -0.228 0.096 -0.456 0.254 -0.621 z m 0 5.25 c 0.332 -0.324 0.918 -0.324 1.242 0 c 0.157 0.166 0.254 0.393 0.254 0.621 s -0.097 0.455 -0.254 0.62 c -0.166 0.158 -0.394 0.254 -0.621 0.254 c -0.228 0 -0.455 -0.096 -0.621 -0.254 c -0.158 -0.165 -0.254 -0.392 -0.254 -0.62 s 0.096 -0.455 0.254 -0.621 z m 2.625 -2.625 c 0.323 -0.324 0.918 -0.324 1.242 0.008 c 0.157 0.158 0.254 0.385 0.254 0.612 c 0 0.228 -0.097 0.456 -0.254 0.622 c -0.166 0.158 -0.394 0.253 -0.621 0.253 c -0.228 0 -0.455 -0.095 -0.621 -0.253 c -0.158 -0.166 -0.254 -0.394 -0.254 -0.622 c 0 -0.227 0.096 -0.454 0.254 -0.62 z m 2.625 -2.625 c 0.323 -0.325 0.918 -0.325 1.242 0 c 0.157 0.165 0.254 0.393 0.254 0.621 c 0 0.227 -0.097 0.455 -0.254 0.621 c -0.166 0.158 -0.394 0.254 -0.621 0.254 c -0.228 0 -0.455 -0.096 -0.621 -0.254 c -0.158 -0.166 -0.254 -0.394 -0.254 -0.621 c 0 -0.228 0.096 -0.456 0.254 -0.621 z m -9.258 1.242 c -0.166 0.158 -0.394 0.254 -0.621 0.254 c -0.228 0 -0.455 -0.096 -0.621 -0.254 c -0.158 -0.166 -0.254 -0.394 -0.254 -0.621 c 0 -0.237 0.096 -0.456 0.254 -0.621 c 0.323 -0.325 0.909 -0.325 1.242 0 c 0.157 0.165 0.254 0.393 0.254 0.621 c 0 0.227 -0.097 0.455 -0.254 0.621 z m -5.615 8.386 l 4.375 -4.375 c 0.342 -0.343 0.896 -0.343 1.238 0 c 0.341 0.341 0.341 0.895 0 1.237 l -4.375 4.374 c -0.171 0.171 -0.395 0.257 -0.619 0.257 s -0.448 -0.086 -0.619 -0.257 c -0.342 -0.342 -0.342 -0.896 0 -1.236 z m 2.988 -5.764 l -1.75 1.751 c -0.171 0.17 -0.395 0.256 -0.619 0.256 s -0.448 -0.086 -0.619 -0.256 c -0.342 -0.342 -0.342 -0.896 0 -1.238 l 1.75 -1.749 c 0.342 -0.342 0.896 -0.342 1.238 0 c 0.341 0.34 0.341 0.894 0 1.236 z m 9.006 -9.368 h -3.5 c -0.483 0 -0.875 -0.392 -0.875 -0.875 s 0.392 -0.876 0.875 -0.876 h 3.5 c 0.483 0 0.875 0.393 0.875 0.876 s -0.392 0.875 -0.875 0.875 z m -6.379 -0.254 c -0.166 0.157 -0.394 0.254 -0.621 0.254 c -0.228 0 -0.455 -0.097 -0.621 -0.254 c -0.158 -0.166 -0.254 -0.394 -0.254 -0.621 c 0 -0.237 0.096 -0.456 0.254 -0.621 c 0.323 -0.325 0.909 -0.325 1.242 0 c 0.157 0.165 0.254 0.393 0.254 0.621 c 0 0.227 -0.097 0.455 -0.254 0.621 z m 2.879 43.128 c 1.448 0 2.625 1.178 2.625 2.625 c 0 1.448 -1.177 2.625 -2.625 2.625 s -2.625 -1.177 -2.625 -2.625 c 0 -1.447 1.177 -2.625 2.625 -2.625 z m 0 3.501 c 0.482 0 0.875 -0.393 0.875 -0.876 c 0 -0.482 -0.393 -0.874 -0.875 -0.874 s -0.875 0.392 -0.875 0.874 c 0 0.483 0.393 0.876 0.875 0.876 z"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <h3 className="mt-8 text-[#303234] font-semibold text-lg">
            Web Application Development
          </h3>
          <p className="text-[1rem] mt-4 text-[#828282] font-medium">
            Utilising the latest technologies, we build web applications that
            deliver remarkable functionality and user engagement from within a
            browser window.
          </p>
          <span className="mt-5 text-[#78bdf8]">MORE &gt;&gt;</span>
        </div>
        <div className="svg-change-color cursor-pointer rounded-xl border border-[#f1f1f1] group bg-[white] px-7 py-16  w-full flex flex-col justify-center font-normal text-[#212529] text-center box-border">
          <div className="flex justify-center w-full">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width={80}
                height={60}
                viewBox="0 0 640 480"
              >
                <g transform="matrix(1.25 0 0 1.25 318.47 238.53)">
                  <path
                    style={{
                      stroke: "none",
                      strokeWidth: "1",
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeDashoffset: "0",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: "4",
                      fillRule: "nonzero",
                      opacity: "1",
                    }}
                    transform=" translate(-252.7, -252.7)"
                    d="m 437.1 233.45 c 14.8 -10.4 24.6 -27.7 24.6 -47.2 c 0 -31.9 -25.8 -57.7 -57.7 -57.7 s -57.7 25.8 -57.7 57.7 c 0 19.5 9.7 36.8 24.6 47.2 c -12.7 4.4 -24.3 11.2 -34.1 20 c -13.5 -11.5 -29.4 -20.3 -46.8 -25.5 c 21.1 -12.8 35.3 -36.1 35.3 -62.6 c 0 -40.4 -32.7 -73.1 -73.1 -73.1 s -73.1 32.8 -73.1 73.1 c 0 26.5 14.1 49.8 35.3 62.6 c -17.2 5.2 -32.9 13.9 -46.3 25.2 c -9.8 -8.6 -21.2 -15.3 -33.7 -19.6 c 14.8 -10.4 24.6 -27.7 24.6 -47.2 c 0 -31.9 -25.8 -57.7 -57.7 -57.7 s -57.7 25.8 -57.7 57.7 c 0 19.5 9.7 36.8 24.6 47.2 c -39.7 13.7 -68.2 51.4 -68.2 95.7 v 6.6 c 0 0.2 0.2 0.4 0.4 0.4 h 122.3 c -0.7 5.5 -1.1 11.2 -1.1 16.9 v 6.8 c 0 29.4 23.8 53.2 53.2 53.2 h 155 c 29.4 0 53.2 -23.8 53.2 -53.2 v -6.8 c 0 -5.7 -0.4 -11.4 -1.1 -16.9 h 123.1 c 0.2 0 0.4 -0.2 0.4 -0.4 v -6.6 c -0.2 -44.4 -28.6 -82.1 -68.3 -95.8 z m -74.8 -47.3 c 0 -23 18.7 -41.7 41.7 -41.7 s 41.7 18.7 41.7 41.7 c 0 22.7 -18.3 41.2 -40.9 41.7 h -0.8 s -0.5 0 -0.8 0 c -22.7 -0.4 -40.9 -18.9 -40.9 -41.7 z m -167.4 -20.8 c 0 -31.5 25.6 -57.1 57.1 -57.1 s 57.1 25.6 57.1 57.1 c 0 30.4 -23.9 55.3 -53.8 57 h -3.3 h -3.3 c -29.9 -1.7 -53.8 -26.6 -53.8 -57 z m -135.6 20.8 c 0 -23 18.7 -41.7 41.7 -41.7 s 41.7 18.7 41.7 41.7 c 0 22.7 -18.3 41.2 -40.9 41.7 h -0.8 s -0.5 0 -0.8 0 c -22.6 -0.4 -40.9 -18.9 -40.9 -41.7 z m 66.2 134 h -109.3 c 4.5 -42.6 40.5 -76 84.2 -76.3 h 0.6 s 0.4 0 0.6 0 c 20.8 0.1 39.8 7.8 54.5 20.3 c -14.4 15.6 -25.1 34.8 -30.6 56 z m 241.3 39.8 c 0 20.5 -16.7 37.2 -37.2 37.2 h -155 c -20.5 0 -37.2 -16.7 -37.2 -37.2 v -6.8 c 0 -62.1 49.6 -112.9 111.3 -114.7 c 1.1 0.1 2.3 0.1 3.4 0.1 s 2.3 0 3.4 -0.1 c 61.7 1.8 111.3 52.6 111.3 114.7 v 6.8 z m 11.9 -39.8 c -5.5 -21.1 -16 -40 -30.3 -55.6 c 14.8 -12.8 34 -20.5 55 -20.7 h 0.6 s 0.4 0 0.6 0 c 43.7 0.3 79.7 33.7 84.2 76.3 h -110.1 z"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <h3 className="mt-8 text-[#303234] font-semibold text-lg">
            Web Application Development
          </h3>
          <p className="text-[1rem] mt-4 text-[#828282] font-medium">
            Utilising the latest technologies, we build web applications that
            deliver remarkable functionality and user engagement from within a
            browser window.
          </p>
          <span className="mt-5 text-[#78bdf8]">MORE &gt;&gt;</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="uppercase text-[#1f92f4] font-medium text-lg border-2 border-[#1f92f4] rounded-full py-2 px-12
      mt-12 transition duration-500 ease-in-out bg-transparent
      hover:bg-[#1f92f4] hover:text-white button-blue-shadow"
        >
          View All Services
        </button>
      </div>
    </div>
  );
}

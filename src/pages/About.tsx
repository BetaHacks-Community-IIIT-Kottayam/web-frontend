import * as React from "react";
import vision from "../images/vision.png";
import values from "../images/values.png";
import mission from "../images/mission.png";
import Member from "../components/ui/Member";
import logo from "../images/logo.jpeg";
import iiit from "../images/iiit.png";
import cypher from "../images/cypher.png";
import topquotes from "../images/topquotes.svg";
import bottom from "../images/bottomquotes.svg";
import "../index.css";

export default function About() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center gap-5 items-center py-24 max-sm:py-0 w-full bg-zinc-100 max-xl:px-5 max-xl:max-w-full max-xl:gap-0 max-sm:flex-col">
        <div className="flex flex-col w-[25%] pl-20 max-lg:pl-5 max-xl:pl-10 max-md:pl-0 max-sm:flex-row max-sm:justify-center max-sm:gap-10 max-sm:w-[100%]">
          <div className=" self-end shrink-0 w-24 h-24 rounded-3xl shadow-2xl bg-slate-900 max-md:h-20 max-md:w-20 max-sm:w-0 max-sm:h-0" />
          <div className=" flex justify-center items-center self-start mt-40 w-[164px] shadow-2xl bg-slate-900 h-[164px] rounded-[32px] max-lg:h-[150px] max-lg:w-[150px] max-md:h-[120px] max-md:w-[120px] max-sm:w-0 max-sm:h-0">
            <img src={iiit} className="h-[75%] w-[75%]" />
          </div>
          <div className="flex justify-center items-center self-end shrink-0 mt-40 bg-[#207EB8] shadow-2xl h-[196px] rounded-[32px] w-[196px] max-md:w-[150px] max-md:h-[150px] max-sm:w-0 max-sm:h-0 max-lg:w-[170px] max-lg:h-[170px]">
            <img src={cypher} className="h-[75%] w-[75%]" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[50%] max-sm:w-[100%]">
          <div className=" mt-20 text-6xl  text-center  leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-xl:text-5xl max-md:leading-[49px]">
            <span className="text-slate-900">We are</span>
            <br />
            <span className="text-[#207EB8]">BetaHacks </span>
            <br />
            <span className="text-slate-900">Cyber Community</span>
          </div>
          <div className="flex flex-col w-[75%] mt-10 max-xl:mt-5">
            <div className=" self-start">
              <img src={topquotes} />
            </div>
            <div className="flex justify-center items-center self-center bg-[#207EB8] px-7 w-[90%] mx-8 py-10  max-xl:py-7 rounded-xl ">
              <p
                className="text-white text-3xl w-[400px] max-xl:text-xl text-center -tracking-tight"
                style={{
                  fontFamily: "Sail",
                }}
              >
                Where bytes unite and connections ignite!
              </p>
            </div>

            <div className=" self-end">
              <img src={bottom} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20 mb-20 pt-20 w-[25%] pr-[110px] max-lg:pr-0 max-md:pr-0 max-sm:justify-center max-sm:flex-row max-sm:w-0 max-sm:h-0">
          <div className=" self-end bg-[#207EB8] shadow-2xl h-[132px] rounded-[32px] w-[132px] mb-20 max-xl:w-[100] max-md:h-[100px] max-md:w-[100px] max-xl:h-[100] max-sm:w-0 max-sm:h-0" />
          <div className=" flex justify-center items-center self-start shadow-2xl aspect-square bg-[#00102A] h-[264px] rounded-[40px] max-md:h-[150px] max-xl:h-[200px] max-sm:w-0 max-sm:h-0">
            <img src={logo} className="w-[75%] h-[75%]" />
          </div>
        </div>
      </div>
      <div className="px-5 w-full max-md:max-w-full">
        <div
          className="flex max-lg:flex-col max-lg:gap-0"
          style={{
            background: "rgba(239, 239, 239, 1)",
          }}
        >
          <div className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full">
            <div
              className="flex flex-col grow items-center px-10 py-12 w-full font-semibold text-center shadow-2xl max-lg:px-5 max-lg:max-w-full"
              style={{
                background: "linear-gradient(to bottom left, #207EB8, white)",
              }}
            >
              <div className="text-5xl tracking-tighter leading-[60.16px] text-sky-950 max-md:text-4xl max-lg:text-5xl">
                Vision
              </div>
              <div className="self-stretch mt-10 text-md tracking-tighter text-white max-lg:mt-5 md:text-xl lg:text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
              <img
                src={vision}
                className="mt-20 max-w-full aspect-square w-[50%] max-lg:mt-7 max-lg:w-1/4 max-md:mt-7 max-md:w-1/6"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col grow items-center p-11 w-full font-semibold text-center bg-white shadow-2xl max-lg:px-5 max-lg:max-w-full">
              <div className="text-5xl tracking-tighter text-black leading-[60.16px] max-md:text-4xl max-lg:text-5xl">
                Values
              </div>
              <div className="self-stretch mt-10 text-md tracking-tighter text-slate-900 max-lg:mt-5 md:text-xl lg:text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
              <img
                src={values}
                className="mt-20 max-w-full aspect-square w-[50%] max-lg:mt-7 max-lg:w-1/4 max-md:mt-7 max-md:w-[1/6]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-lg:ml-0 max-lg:w-full">
            <div
              className="flex flex-col grow items-center px-11 py-12 w-full font-semibold text-center shadow-2xl max-lg:px-5 max-lg:max-w-full"
              style={{
                background: "linear-gradient(to bottom right, #00102A, white)",
              }}
            >
              <div className="text-5xl tracking-tighter text-blue-300 leading-[60.16px] max-md:text-4xl max-lg:text-5xl">
                Mission
              </div>
              <div className="self-stretch mt-10 text-md tracking-tighter text-white max-lg:mt-5 md:text-xl lg:text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
              <img
                src={mission}
                className="mt-20 max-w-full aspect-square w-[1/4] max-lg:mt-7 max-lg:w-1/4 max-md:mt-7 max-md:w-1/6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pr-6 pl-6 mt-40 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-row justify-center items-center self-start py-6 pl-3.5 text-5xl font-semibold tracking-tighter text-center whitespace-nowrap leading-[80px] text-slate-900 max-md:text-4xl max-md:leading-[49px]  max-lg:text-5xl">
          <div className=" rounded-3xl shadow-2xl bg-slate-900 px-4 max-md:px-4 max-md:py-2 max-lg:px-5 max-lg:py-3">
            <span className="text-sky-300">W</span>
          </div>
          hat we do
        </div>
        <div
          className="justify-center px-16 pt-12 pb-16 w-full text-md md:text-md lg:text-lg -tracking-tight  text-white max-w-[1299px] rounded-[40px] max-md:px-5  max-md:py-7 max-md:max-w-full"
          style={{
            background: "linear-gradient(to bottom right, #207EB8, #71C1F2)",
          }}
        >
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infanc
        </div>
        <div className="flex flex-row justify-center items-center self-start mt-20 py-6 pl-3.5 text-5xl font-semibold tracking-tighter text-center whitespace-nowrap leading-[80px] text-slate-900 max-md:text-4xl max-md:leading-[49px] max-lg:text-5xl">
          <div className=" rounded-3xl shadow-2xl bg-slate-900 px-6 max-md:px-5 max-md:py-2 max-lg:px-6 max-lg:py-3 ">
            <span className="text-sky-300">P</span>
          </div>
          eople
        </div>
        <div className="mt-20 max-lg:mt-20 text-5xl font-semibold tracking-tighter leading-9 text-center text-cyan-600 max-md:mt-10 max-md:text-3xl">
          Patrons
        </div>

        <div className=" flex gap-20 justify-center mb-20 max-md:justify-center mt-20 text-3xl max-md:text-xl max-lg:text-2xl font-semibold tracking-tighter leading-10 text-center text-black whitespace-nowrap max-lg:flex-wrap max-lg:mt-10 max-lg:gap-10 max-md:gap-5 max-xl:gap-3">
          <Member name="Name" desig="Designation" />
          <Member name="Name" desig="Designation" />
          <Member name="Name" desig="Designation" />
          <Member name="Name" desig="Designation" />
          <Member name="Name" desig="Designation" />
        </div>
        <div className="mt-32 text-5xl font-semibold tracking-tighter leading-9 text-center text-cyan-600 max-md:mt-10 max-md:text-3xl">
          Leads
        </div>
        <div className="flex gap-20 justify-center mb-20 max-md:justify-center mt-20 text-3xl max-md:text-xl max-lg:text-2xl font-semibold tracking-tighter leading-10 text-center text-black whitespace-nowrap max-lg:flex-wrap max-lg:mt-10 max-lg:gap-10 max-md:gap-5 max-xl:justify-center max-xl:gap-5 ">
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
        </div>
        <div className="mt-32 max-lg:mt-20 text-5xl font-semibold tracking-tighter leading-9 text-center text-cyan-600 max-md:mt-10 max-md:max-w-full max-md:text-3xl">
          Tech Contributers
        </div>
        <div className="flex self-center gap-20 justify-center max-md:justify-center mt-20 text-3xl max-lg:text-2xl max-md:text-xl font-semibold tracking-tighter leading-10 text-center text-black whitespace-nowrap max-lg:flex-wrap max-lg:mt-10 max-lg:gap-10 max-md:gap-5 max-md:w-[75%]">
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
        </div>

        <div className="flex gap-20 justify-center max-md:justify-center mt-20 text-3xl max-md:text-xl max-lg:text-2xl font-semibold tracking-tighter leading-10 text-center text-black whitespace-nowrap max-lg:flex-wrap max-lg:mt-10 max-lg:gap-10 max-md:gap-5 max-md:w-[75%]">
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
        </div>
        <div className="flex gap-20 justify-between max-md:justify-center mt-20 text-3xl max-md:text-xl max-lg:text-2xl font-semibold tracking-tighter leading-10 text-center text-black whitespace-nowrap max-lg:flex-wrap max-lg:mt-10 max-lg:gap-10 max-md:gap-5 max-md:w-[75%]">
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
        </div>
        <div className="mt-32 text-5xl font-semibold tracking-tighter leading-9 text-center text-cyan-600 max-md:mt-20 max-md:max-w-full max-md:text-3xl">
          Development Team
        </div>

        <div className="flex gap-20 justify-center mb-20 max-md:justify-center mt-20  max-md:text-xl text-3xl max-lg:text-2xl font-semibold tracking-tighter leading-10 text-center text-black whitespace-nowrap max-lg:flex-wrap max-lg:mt-10 max-lg:gap-10 max-md:gap-10 max-xl:gap-5">
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
          <Member name="Name" />
        </div>
      </div>
    </div>
  );
}

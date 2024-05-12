import React from "react";
import Card from "../components/Card";
const Home = () => {
  return (
    <>
      <main className="w-full h-[80vh] flex justify-center items-center  ">
        <section className="max-w-[40rem]">
          <span className="text-2xl md:text-4xl w-full inline-block text-center text-[#da0819] mb-4 font-bold">
            One App is Enough for a Restaurant
          </span>
          <div>
            <span className="p-4 inline-block mb-2 text-[16px] md:text-2xl">
              ✨Efficiently manage restaurant with RestroX✨All features in one
              platform✨ Try Basic Plan for free!
            </span>

            <div className="flex justify-center mt-8">
              <button className="p-2 border-2 mr-8 bg-[#da0819] rounded-md text-[#fff] hover:bg-[#fff] hover:text-[#da0819] hover:font-bold">
                Download App
              </button>
              <button className="p-2 border-2 border-[#da0819] rounded-md  ">
                Sign Up
              </button>
            </div>
          </div>
        </section>
      </main>
      <div className=" flex w-full h-[400px] mb-4 ">
        <img
          src="https://www.restrox.co/images/hero-img2.svg"
          alt="img"
          className="grow"
        />
      </div>

      <div className="md:grid md:grid-cols-2  md:mx-auto md:max-w-[1200px]  ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;

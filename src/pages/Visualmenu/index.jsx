import React from "react";

import { Img, Text } from "components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const VisualmenuPage = () => {
  return (
    <>
    <Navbar/>
      <div className="bg-blue_gray-900 flex flex-col font-jacquesfrancois items-end justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[89px] justify-start mb-11 mr-2 md:px-5 w-[92%] md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="sm:mt-0 mt-[18px] md:text-5xl text-[80px] text-white-A700"
              size="txtJacquesFrancoisRegular80"
            >
              Visual Menu
            </Text>
          </div>
          <div className="md:gap-5 gap-[140px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] md:ml-[0] ml-[82px] w-[79%]">
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_cheeseboard.png"
              alt="cheeseboard"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_breadsalmon.png"
              alt="breadsalmon"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_capresesalad.png"
              alt="capresesalad"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_springgreens.png"
              alt="springgreens"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_tomatosalad.png"
              alt="tomatosalad"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_harvestbowl.png"
              alt="harvestbowl"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_ravioli.png"
              alt="ravioli"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_gnocci.png"
              alt="gnocci"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_wheatpasta.png"
              alt="wheatpasta"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_meatballs.png"
              alt="meatballs"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_penne.png"
              alt="penne"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_spaghetti.png"
              alt="spaghetti"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_margaritapizza.png"
              alt="margaritapizza"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_leafypizza.png"
              alt="leafypizza"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_pepperonipizza.png"
              alt="pepperonipizza"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_icecream.png"
              alt="icecream"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_cannolis.png"
              alt="cannolis"
            />
            <Img
              className="h-[350px] md:h-auto object-cover w-full"
              src="images/img_cappuccino.png"
              alt="cappuccino"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default VisualmenuPage;

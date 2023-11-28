import React from "react";

import { Img, Text } from "components";

const LandingPagePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-yellow-50 flex flex-col font-inknutantiqua sm:gap-10 md:gap-10 gap-[503px] h-[982px] justify-start mx-auto p-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_landingpage.png')" }}
      >
        <div className="flex flex-col items-end md:ml-[0] ml-[165px] mr-2 sm:pl-5 pl-[1195px] md:px-5 w-[88%] md:w-full">
          <Img className="h-7" src="images/img_navbar.svg" alt="navbar" />
        </div>
        <div className="flex flex-col items-center mb-[219px] md:ml-[0] ml-[165px] mr-2 sm:pr-5 pr-[156px] md:px-5">
          <Text
            className="md:text-5xl text-[90px] text-center text-white-A700"
            size="txtInknutAntiquaRegular90"
          >
            La Piazza Sul Tetto
          </Text>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;

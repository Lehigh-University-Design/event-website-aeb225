import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import Navbar from "components/Navbar";

const YoureInvitedPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-900 flex sm:flex-col md:flex-col flex-row font-jacquesfrancois gap-[59px] items-start mx-auto md:pl-10 sm:pl-5 pl-[94px] w-full">
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start md:mt-0 mt-[58px] w-[43%] md:w-full">
          <Text
            className="md:text-5xl text-[80px] text-white-A700"
            size="txtJacquesFrancoisRegular80"
          >
            You’re Invited
          </Text>
          <div className="border-[3px] border-solid border-white-A700 flex flex-col items-center justify-end p-[15px] w-full">
            <Text
              className="mt-[29px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-[77%] sm:w-full"
              size="txtInknutAntiquaRegular40"
            >
              GRAND OPENING
            </Text>
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtInknutAntiquaRegular50"
            >
              La Piazza Sul Tetto
            </Text>
            <Text
              className="mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
              size="txtMontaguSlabRegular25"
            >
              Tuesday, October 17th, 2023
            </Text>
            <Text
              className="mt-[25px] text-center text-white-A700 text-xl w-[74%] sm:w-full"
              size="txtMontagaRegular20"
            >
              <>
                Discover the Upper West Side&#39;s floating oasis. NYC&#39;s
                newest Italian rooftop garden restaurant with a breathtaking
                view of Central Park.
              </>
            </Text>
            <Text
              className="mt-[31px] text-center text-white-A700 text-xl"
              size="txtMontagaRegular20"
            >
              <>
                Savor the tranquility of <br />
                our rooftop escape.
              </>
            </Text>
            <div
              className="common-pointer font-metal md:h-14 h-[41px] mt-[15px] relative w-[24%]"
              onClick={() => navigate("/reservations")}
            >
              <div className="absolute bg-indigo-200 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                size="txtMetalRegular25"
              >
                Reservations
              </Text>
            </div>
            <Text
              className="mt-[29px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
              size="txtMarkaziTextRegular40"
            >
              <>
                327 Elmwood Avenue,
                <br />
                Manhattan, NY 10023
              </>
            </Text>
            <Text
              className="text-center text-white-A700 text-xl"
              size="txtMarkaziTextRegular20"
            >
              +1 (212)-555-8181
            </Text>
          </div>
        </div>
        <div className="h-[1095px] md:h-[982px] pb-[113px] relative w-[54%] md:w-full">
          <Img
            className="h-[982px] mx-auto object-cover w-full"
            src="images/img_restaurantinterior.png"
            alt="restaurantinter"
          />
          <Img
            className="absolute h-7 right-[6%] top-[4%]"
            src="images/img_navbar.svg"
            alt="navbar"
          />
        </div>
      </div>
    </>
  );
};

export default YoureInvitedPage;

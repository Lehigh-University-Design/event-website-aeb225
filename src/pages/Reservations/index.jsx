import React from "react";

import { useNavigate } from "react-router-dom";
import { Img, List, Text } from "components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";


const Test = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar/>

      <div className="bg-blue_gray-900 flex sm:flex-col md:flex-col flex-row font-jacquesfrancois gap-[59px] items-start mx-auto md:pl-10 sm:pl-5 pl-[94px] w-full h-full">
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start md:mt-0 mt-[58px] w-[43%] md:w-full">
          <Text
            className="md:text-5xl text-[80px] text-white-A700 underline"
            size="txtJacquesFrancoisRegular80"
          >
            Reservations
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


            <div className="flex flex-col gap-[31px] items-center justify-start w-[98%] md:w-full p-[30px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <List
                    className="flex flex-col gap-[11px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between my-0 w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                        size="txtMontagaRegular25"
                      >
                        Time:{" "}
                      </Text>
                      <div className="font-metal h-[41px] sm:h-[43px] md:h-[45px] sm:mt-0 my-0.5 relative w-[19%] sm:w-full">
                        <div className="absolute bg-blue_gray-500 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                          size="txtMetalRegular25"
                        >
                          6:00 pm
                        </Text>
                      </div>
                      <div className="font-metal h-[41px] md:h-[45px] sm:mt-0 mt-1 relative w-[19%] sm:w-full">
                        <div className="absolute bg-blue_gray-500 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                          size="txtMetalRegular25"
                        >
                          6:30 pm
                        </Text>
                      </div>
                      <div className="font-metal h-[41px] sm:h-[43px] md:h-[45px] sm:mt-0 my-0.5 relative w-[19%] sm:w-full">
                        <div className="absolute bg-blue_gray-500 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                          size="txtMetalRegular25"
                        >
                          7:00 pm
                        </Text>
                      </div>
                      <div className="font-metal h-[41px] sm:h-[43px] md:h-[45px] sm:mt-0 my-0.5 relative w-[19%] sm:w-full">
                        <div className="absolute bg-blue_gray-500 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                          size="txtMetalRegular25"
                        >
                          7:30 pm
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-col flex-row font-metal sm:gap-5 items-start justify-end ml-[85px] my-0 w-[84%] md:w-full">
                      <div className="h-[41px] relative w-[23%] sm:w-full">
                        <div className="absolute bg-blue_gray-500 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                          size="txtMetalRegular25"
                        >
                          8:00 pm
                        </Text>
                      </div>
                      <div className="h-[41px] md:h-[43px] ml-4 sm:ml-[0] sm:mt-0 mt-0.5 relative w-[23%] sm:w-full">
                        <div className="absolute bg-blue_gray-500 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                          size="txtMetalRegular25"
                        >
                          8:30 pm
                        </Text>
                      </div>
                      <div className="h-[41px] ml-5 sm:ml-[0] relative w-[23%] sm:w-full">
                        <div className="absolute bg-blue_gray-500 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                          size="txtMetalRegular25"
                        >
                          9:00 pm
                        </Text>
                      </div>
                      <div className="h-[41px] md:h-[43px] mb-0.5 sm:ml-[0] ml-[15px] relative w-[23%] sm:w-full">
                        <div className="absolute bg-blue_gray-500 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                          size="txtMetalRegular25"
                        >
                          9:30 pm
                        </Text>
                      </div>
                      </div>
                      </List>
                    </div>
                    </div>




                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full p-[30px]">
                  <Text
                    className="sm:mt-0 mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtMontagaRegular25"
                  >
                    Guests:{" "}
                  </Text>
                  
                  <div className="flex flex-col items-center pl-[30px] text-white-A700 mt-[-20px] w-[98%] md:w-full sm:gap-5">
                      <div className="flex justify-center ">
                        {[...Array(5)].map((_, index) => (
                          <div
                            key={index}
                            className="bg-blue_gray-500 h-12 w-12 rounded-full flex items-center justify-center m-3"
                          >
                            <p className="text-white font-bold text-lg">{index + 1}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-cente">
                        {[...Array(5)].map((_, index) => (
                          <div
                            key={index + 5}
                            className="bg-blue_gray-500 h-12 w-12 rounded-full flex items-center justify-center m-3 "
                          >
                            <p className="text-white font-bold text-lg">{index + 6}</p>
                          </div>
                        ))}
                      </div>
                  </div>



                </div>



              <div className="w-full pb-[40px] flex items-center justify-center">
                <div
                  className=" common-pointer font-metal md:h-14 h-[41px] mt-[15px] relative w-[24%]"
                  onClick={() => navigate("/menu")}
                >
                  <div className="absolute bg-indigo-200 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full align-self"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                    size="txtMetalRegular25"
                  >
                    Book Now
                  </Text>
                </div>
              </div>
            
            
          </div>
        </div>
        <div className="h-[1095px] md:h-[982px] pb-[113px] relative w-[54%] md:w-full">
          <Img
            className="h-[982px] mx-auto object-cover w-full"
            src="images/img_restaurantinterior.png"
            alt="restaurantinter"
          />
        </div>
      </div>


    <Footer/>
    </>
  );
};

export default Test;

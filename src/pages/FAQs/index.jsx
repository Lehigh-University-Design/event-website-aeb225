import React from "react";

import { Img, Text } from "components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const FAQsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-blue_gray-900 flex flex-col font-jacquesfrancois items-center justify-start mx-auto p-10 sm:px-5 w-full">
  <div className="flex flex-col md:gap-10 gap-[68px] justify-start max-w-[1364px] mb-[107px] mx-auto md:px-5 w-full">
    <div className="flex flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[59px] w-[96%] md:w-full">
      <Text
        className="mt-[19px] md:text-5xl text-[80px] text-white-A700"
        size="txtJacquesFrancoisRegular80"
      >
        FAQs
      </Text>
    </div>


    <div className="flex md:flex-col flex-row gap-[37px] justify-center mx-auto w-[97%] md:w-full">
      <div className="flex md:w-[32%] md:h-[582px] h-full relative w-[75%] flex-col">
          <div className= "flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
          <Text className="flex pt-[50px] pb-[20px] justify-center mr-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700" size="txtBesleyRomanBold30" >
            What are your hours of operation?
          </Text>

          <div className="flex flex-col items-center justify-center w-[80%] md:w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-full">
                  <Text
                    className="sm:mt-0 mt-[5px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtDosisRegular30"
                  >
                    <>
                      Monday & Tuesday:
                      <br />
                      Lunch: Closed
                      <br />
                      Dinner: 5:00 PM - 10:00 PM
                    </>
                  </Text>
                  <Text
                    className="mb-[5px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtDosisRegular30"
                  >
                    <>
                      Wednesday & Thursday
                      <br />
                      Lunch: 12:00 PM - 3:00 PM
                      <br />
                      Dinner: 5:00 PM - 10:00 PM
                    </>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtDosisRegular30"
                  >
                    <>
                      Friday & Saturday
                      <br />
                      Lunch: 12:00 PM - 3:00 PM
                      <br />
                      Dinner: 5:00 PM - 11:00 PM
                    </>
                  </Text>
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtDosisRegular30"
                  >
                    <>
                      Sunday
                      <br />
                      Brunch: 10:00 AM - 2:00 PM
                      <br />
                      Dinner: 5:00 PM - 10:00 PM
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div className= "flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
          <Text className="pt-[70px] pb-[20px] flex justify-center mr-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700" size="txtBesleyRomanBold30" >
            Do you take reservations?
          </Text>

          <div className="flex flex-col items-center justify-start w-full ml-[30px] mr-[30px]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtDosisRegular30"
              >
                <span className="text-white-A700 font-dosis text-left font-normal">
                  <>
                    We welcome reservations to ensure our guests have the best
                    experience possible. While walk-ins are accommodated based
                    on availability, we highly recommend making reservations,
                    especially for rooftop dining.
                    <br />
                    <br />
                    Reservations can be made through our website&#39;s online
                    booking system, by calling our reservation line at{" "}
                  </>
                </span>
                <span className="text-white-A700 font-dosis text-left font-normal">
                  +1 (212)-555-8181
                </span>
                <span className="text-white-A700 font-dosis text-left font-normal">
                  <>
                    , or by using third-party reservation platforms. For larger
                    parties or special events, please contact our events team
                    directly.
                    <br />
                    <br />
                    We understand plans can change, and if you need to modify or
                    cancel your reservation, we kindly request that you notify
                    us at least 24 hours in advance.
                    <br />
                    <br />
                    While reservations are encouraged, we strive to accommodate
                    all guests and will do our best to provide a wonderful
                    dining experience for walk-in patrons whenever possible.
                  </>
                </span>
              </Text>
              </div>
          </div>


          <div className= "flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
          <Text className="pt-[70px] pb-[20px] flex justify-center mr-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700" size="txtBesleyRomanBold30" >
            Is there a dress code?
          </Text>

          <div className="flex flex-col items-center justify-start w-full ml-[30px] mr-[30px]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtDosisRegular30"
              >
                <span className="text-white-A700 font-dosis text-left font-normal">
                <>
                  For gentlemen, collared shirts, dress pants, or smart-casual
                  attire are recommended. Ladies often opt for stylish dresses,
                  skirts, or smart-casual outfits. We kindly ask that guests
                  refrain from wearing excessively casual clothing such as
                  beachwear, flip-flops, or athletic attire.
                  <br />
                  <br />
                  We want all our guests to feel comfortable and enjoy their
                  time with us, and our dress code is intended to create an
                  ambiance that complements the rooftop dining experience while
                  allowing our patrons to relax and savor our Italian cuisine
                  and stunning views.
                </>
                </span>
              </Text>
            </div>
          </div>


          <div className= "flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
          <Text className="pt-[70px] pb-[20px] flex justify-center mr-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700" size="txtBesleyRomanBold30" >
          Do you offer takeout or delivery?
          </Text>

          <div className="flex flex-col items-center justify-start w-full ml-[30px] mr-[30px]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtDosisRegular30"
              >
                <span className="text-white-A700 font-dosis text-left font-normal">
                <>
                  As we focus on creating memorable moments for our guests
                  in-house, we do not offer takeout or delivery services.
                  <br />
                  <br />
                  Our commitment is to ensure that every dish served is fresh,
                  beautifully presented, and enjoyed in the unique atmosphere of
                  our rooftop restaurant. We invite you to join us in-person to
                  savor our authentic Italian cuisine and take in the
                  breathtaking views of the city.
                </>
                </span>
              </Text>
            </div>
          </div>


          <div className= "flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
          <Text className="pt-[70px] pb-[20px] flex justify-center mr-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700" size="txtBesleyRomanBold30" >
          Is there a children&#39;s menu available?
          </Text>

          <div className="flex flex-col items-center justify-start w-full ml-[30px] mr-[30px]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtDosisRegular30"
              >
                <span className="text-white-A700 font-dosis text-left font-normal">
                <>
                  Our children&#39;s menu features a selection of Italian
                  classics adapted for young palates, including pasta dishes,
                  mini pizzas, and other flavorful options. Each dish is
                  thoughtfully prepared with fresh, quality ingredients to
                  provide a delicious and wholesome meal for our little guests.
                </>
                </span>
              </Text>
            </div>
          </div>


      </div>
      </div>
      </div>
      </div>

      <Footer/>
    


    </>
  );
};

export default FAQsPage;

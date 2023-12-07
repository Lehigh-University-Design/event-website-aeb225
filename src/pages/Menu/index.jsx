import React from "react";

import { Img, Text } from "components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const MenuPage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-900 flex flex-col font-jacquesfrancois items-center justify-start mx-auto p-10 sm:px-5 w-full">
  <div className="flex flex-col md:gap-10 gap-[68px] justify-start max-w-[1364px] mb-[107px] mx-auto md:px-5 w-full">
    <div className="flex flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[59px] w-[96%] md:w-full">
      <Text
        className="mt-[19px] md:text-5xl text-[80px] text-white-A700"
        size="txtJacquesFrancoisRegular80"
      >
        Menu
      </Text>
    </div>


    <div className="flex md:flex-col flex-row gap-[37px] justify-between mx-auto w-[97%] md:w-full">
      <div className="md:w-[32%] md:h-[582px] h-[591px] relative w-full border-[3px] border-solid border-white-A700 flex flex-col items-center justify-center">
          <Text className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-full" size="txtInknutAntiquaRegular40">   
            Appetizers
          </Text>
          <div className= "flex flex-col inset-x-[0] items-start justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
            <Text className= "mt-2 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700" size="txtMontaguSlabRegular25" >
              Bruschetta Trio:{" "}
            </Text>
            <Text className="mb-[25px] mt-0.5 text-[15px] text-white-A700 w-full" size="txtMontagaRegular15">
              A trio of classic bruschettas featuring fresh tomatoes,
              basil, and mozzarella; roasted red pepper and goat cheese;
              and prosciutto with fig and balsamic glaze.
            </Text>
          </div>

          <div className= "flex flex-col inset-x-[0] items-start justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
            <Text className= "mt-2 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700" size="txtMontaguSlabRegular25" >
            Caprese Skewers:{" "}
            </Text>
            <Text className="mb-[25px] mt-0.5 text-[15px] text-white-A700 w-full" size="txtMontagaRegular15">
              Skewers of cherry tomatoes, fresh mozzarella, and basil
              drizzled with balsamic reduction. A light and refreshing
              starter with the classic flavors of a Caprese salad.
            </Text>
          </div>

          <div className= "flex flex-col inset-x-[0] items-start justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
            <Text className= "mt-2 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700" size="txtMontaguSlabRegular25" >
            Insalata Caprese Moderna:{" "}
            </Text>
            <Text className="mb-[25px] mt-0.5 text-[15px] text-white-A700 w-full" size="txtMontagaRegular15">
            A modern twist on the classic Caprese salad. Sliced heirloom tomatoes, 
            fresh buffalo mozzarella, and avocado arranged in an elegant stack. 
            Drizzled with a balsamic glaze and extra virgin olive oil. Garnished 
            with microgreens and a sprinkle of sea salt.
            </Text>
          </div>
      </div>


      
      <div className="flex md:flex-col flex-row gap-[37px] justify-between mx-auto w-[97%] md:w-full">
      <div className="md:w-[32%] md:h-[582px] h-[591px] relative w-full border-[3px] border-solid border-white-A700 flex flex-col items-center justify-center">
          <Text className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-full" size="txtInknutAntiquaRegular40">   
            Entrées
          </Text>
          <div className= "flex flex-col inset-x-[0] items-start justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
            <Text className= "mt-2 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700" size="txtMontaguSlabRegular25" >
            Pizza Margherita con Prosciutto e Rucola:{" "}
            </Text>
            <Text className="mb-[25px] mt-0.5 text-[15px] text-white-A700 w-full" size="txtMontagaRegular15">
            A classic Margherita pizza with a twist. 
            Thin, wood-fired crust topped with San Marzano
             tomato sauce, fresh mozzarella, and basil 
             leaves. After baking, it's adorned with 
             delicate slices of prosciutto and a handful 
             of arugula. Drizzled with extra virgin olive
              oil for a burst of flavor.
            </Text>
          </div>

          <div className= "flex flex-col inset-x-[0] items-start justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
            <Text className= "mt-2 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700" size="txtMontaguSlabRegular25" >
            Ravioli di Zucca al Burro e Salvia:{" "}
            </Text>
            <Text className="mb-[25px] mt-0.5 text-[15px] text-white-A700 w-full" size="txtMontagaRegular15">
            Homemade ravioli filled with a velvety blend
             of roasted butternut squash, ricotta cheese,
              and nutmeg. The ravioli are delicately 
              sautéed in a sage-infused brown butter sauce,
               creating a luscious and aromatic dish. 
               Garnished with toasted pine nuts and a 
               sprinkle of Parmesan cheese.
            </Text>
          </div>
      </div>
      </div>

      <div className="flex md:flex-col flex-row gap-[37px] justify-between mx-auto w-[97%] md:w-full">
      <div className="md:w-[32%] md:h-[582px] h-[591px] relative w-full border-[3px] border-solid border-white-A700 flex flex-col items-center justify-center">
          <Text className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-full" size="txtInknutAntiquaRegular40">   
            Desserts
          </Text>
          <div className= "flex flex-col inset-x-[0] items-start justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
            <Text className= "mt-2 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700" size="txtMontaguSlabRegular25" >
            Tiramisu Affogato:{" "}
            </Text>
            <Text className="mb-[25px] mt-0.5 text-[15px] text-white-A700 w-full" size="txtMontagaRegular15">
            A playful twist on the classic tiramisu. 
            Layers of coffee-soaked ladyfingers and 
            mascarpone cream served in a glass, topped 
            with a scoop of rich vanilla gelato and 
            a drizzle of espresso.
            </Text>
          </div>

          <div className= "flex flex-col inset-x-[0] items-start justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
            <Text className= "mt-2 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700" size="txtMontaguSlabRegular25" >
            Limoncello Panna Cotta:{" "}
            </Text>
            <Text className="mb-[25px] mt-0.5 text-[15px] text-white-A700 w-full" size="txtMontagaRegular15">
            Silky smooth lemon-infused panna cotta, 
            served in individual cups and accompanied 
            by a zesty Limoncello coulis. Garnished 
            with fresh berries and a sprig of mint.
            </Text>
          </div>

          <div className= "flex flex-col inset-x-[0] items-start justify-center mx-auto top-[0] w-full pl-[30px] pr-[20px]">
            <Text className= "mt-2 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700" size="txtMontaguSlabRegular25" >
            Cannoli Siciliani:{" "}
            </Text>
            <Text className="mb-[25px] mt-0.5 text-[15px] text-white-A700 w-full" size="txtMontagaRegular15">
            Crispy cannoli shells filled with a velvety
             ricotta and chocolate chip filling. 
             Dusted with powdered sugar and served 
             with a side of pistachio crumbles for 
             added texture.
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

export default MenuPage;

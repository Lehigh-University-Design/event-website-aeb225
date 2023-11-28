import React from "react";

const sizeClasses = {
  txtInknutAntiquaRegular90: "font-inknutantiqua font-normal",
  txtBesleyRomanBold30: "font-besley font-bold",
  txtMarkaziTextRegular20: "font-markazitext font-normal",
  txtMarkaziTextRegular40: "font-markazitext font-normal",
  txtMetalRegular25: "font-metal font-normal",
  txtMontagaRegular15: "font-montaga font-normal",
  txtMontagaRegular25: "font-montaga font-normal",
  txtDosisRegular30: "font-dosis font-normal",
  txtJacquesFrancoisRegular80: "font-jacquesfrancois font-normal",
  txtMontagaRegular20: "font-montaga font-normal",
  txtInknutAntiquaRegular40: "font-inknutantiqua font-normal",
  txtMontaguSlabRegular25: "font-montaguslab font-normal",
  txtMerriweatherRegular25: "font-merriweather font-normal",
  txtInknutAntiquaRegular50: "font-inknutantiqua font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

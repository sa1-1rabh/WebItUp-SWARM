import React from "react";

import NewsLetter from "./NewsLetter";
import FooterIconBox from "./FooterIconBox";
import FooterWidgets from "./FooterWidgets";
import FooterContacts from "./FooterContacts";

const Footer = () => {
  return (
    <div className="w-full">
      <NewsLetter />
      <FooterIconBox />
      <FooterWidgets />
      <FooterContacts />
    </div>
  );
};

export default Footer;

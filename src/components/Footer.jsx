import React from "react";
import { LogoBlack } from "../exports/exportImages";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center py-5 bg-gradient-to-b from-white to-brand-pink">
      <img src={LogoBlack} alt="" />
      <p className="text-3xl font-['Freight']">Waysbucks</p>
      <p>Copyright {new Date().getFullYear()}.</p>
      <p>All right reserved.</p>
    </div>
  );
}

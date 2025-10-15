import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ShopByCategory({ src, alt, title, link }) {
  return (
    <div className="w-1/2 h-full flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden mx-auto md:w-84">
      <img src={src} alt={alt} className="w-full h-64 object-cover" />
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-md font-bold text-gray-800 p-2">{title}</h3>
        <Link to={link} className="px-2">
          <ArrowForwardIcon className="text-sm" />
        </Link>
      </div>
    </div>
  );
}

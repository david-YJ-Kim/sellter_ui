// import "tailwindcss/tailwind.css";
// import React from "react";
// import utils from "../../../../utils";
// import { PropTypes } from "prop-types";
//
// export const Label = ({ target, size, color, title }) => {
//   let sizeMode = "text-sm";
//   if (size === "small") {
//     sizeMode = "text-xs";
//   }
//   if (size === "large") {
//     sizeMode = "text-lg";
//   }
//
//   let colorMode = "text-gray-500";
//   if (color === "black") {
//     colorMode = "text-black";
//   }
//   if (color === "white") {
//     colorMode = "text-white";
//   }
//   if (color === "dark-gray") {
//     colorMode = "text-gray-800";
//   }
//   if (color === "point") {
//     colorMode = utils.desgin.pointTextColor;
//   }
//
//   return (
//     <label
//       htmlFor={target}
//       className={[`${sizeMode}`, "font-semibold", `${colorMode}`].join(" ")}
//     >
//       {title}
//     </label>
//   );
// };
//
// Label.protoTypes = {
//   target: PropTypes.string,
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   color: PropTypes.oneOf(["gray", "dark-gray", "black", "white", "point"]),
//   title: PropTypes.string.isRequired,
// };
//
// Label.defaultProps = {
//   size: "medium",
//   title: "Label",
//   color: "gray",
// };

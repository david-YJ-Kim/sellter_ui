// import "tailwindcss/tailwind.css";
// import React from "react";
// import utils from "../../../../utils";
// import { PropTypes } from "prop-types";
//
// export const Title = ({ size, color, title }) => {
//   let sizeMode = "text-2xl";
//   if (size === "small") {
//     sizeMode = "text-xl";
//   }
//   if (size === "large") {
//     sizeMode = "text-3xl";
//   }
//
//   let colorMode = "text-gray-700";
//   if (color === "black") {
//     colorMode = "text-black";
//   }
//   if (color === "white") {
//     colorMode = "text-white";
//   }
//   if (color === "dark-gray") {
//     colorMode = "text-gray-900";
//   }
//   if (color === "point") {
//     colorMode = utils.desgin.pointTextColor;
//   }
//
//   return (
//     <h3
//       className={[`${sizeMode}`, "font-semibold", "my-4", `${colorMode}`].join(
//         " "
//       )}
//     >
//       {title}
//     </h3>
//   );
// };
//
// Title.protoTypes = {
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   color: PropTypes.oneOf(["gray", "dark-gray", "black", "white", "point"]),
//   title: PropTypes.string.isRequired,
// };
//
// Title.defaultProps = {
//   size: "medium",
//   color: "dark-gray",
// };

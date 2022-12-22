// import React from "react";
// import PropTypes from "prop-types";
// import "./Title.css";
// import "../index.css";
//
// export const Title = ({ primary, size, label, backgroundColor, ...props }) => {
//   const mode = primary ? "primary" : "secondary";
//
//   return (
//     <h3
//       className={["title-basic", `title-text--${size}`, mode].join(" ")}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </h3>
//   );
// };
//
// Title.protoTypes = {
//   primary: PropTypes.bool,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   label: PropTypes.string.isRequired,
// };
//
// Title.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: "medium",
//   label: "Title",
// };

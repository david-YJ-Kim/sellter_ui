// import React from "react";
// import PropTypes from "prop-types";
// import "./Label.css";
// import "../index.css";
//
// export const Label = ({
//   primary,
//   target,
//   size,
//   label,
//   backgroundColor,
//   ...props
// }) => {
//   const mode = primary ? "primary" : "secondary";
//   return (
//     <label
//       for={target}
//       className={["label-basic", `label-text--${size}`, mode].join(" ")}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </label>
//   );
// };
//
// Label.protoTypes = {
//   primary: PropTypes.bool,
//   target: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   label: PropTypes.string.isRequired,
// };
//
// Label.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: "medium",
//   label: "Label",
// };

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieScore, setMovieScore] = useState(0);
//   return (
//     <>
//       <StarRating
//         size="30px"
//         color="magenta"
//         maxRating={10}
//         onSetRating={setMovieScore}
//       />
//       <span style={{ color: "magenta" }}>Current score - {movieScore}</span>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating />
    <StarRating
      size="40px"
      color="blue"
      className="something"
      defaultRating={2}
      messages={["Sucks", "Bad", "Watchable", "Nice", "Fabulous"]}
    />
    <Test /> */}
  </React.StrictMode>
);

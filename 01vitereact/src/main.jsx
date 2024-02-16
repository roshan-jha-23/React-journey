import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
function MyAPP(){
  return(
    <div><h1>
      hey bro !
      </h1></div>
  )
}
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.youtube.com",
//     target: "_blank",
//   },
//   children: "click to visit youtube",
// };

const anotherElement = (
  <a href="https://www.youtube.com" target="_blank">
    click to visit youtube
  </a>
);
const anotherUser=" : Roshan"
const ReactElement=React.createElement(
  "a",
  {
    href: "https://facebook.github.io/react/",
    target:"_blank"
  },"Learn more about REACT in this link",
  anotherUser
  
)

ReactDOM.createRoot(document.querySelector("#roshan")).render(ReactElement);

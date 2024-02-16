function customRender(reactElement,container){
    // const domElement=document.createElement(reactElement.type);
    // domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href', reactElement.prop.href)
    // domElement.setAttribute("target", reactElement.prop.target);
    // container.appendChild(domElement);
 const domElemennt=document.createElement(reactElement.type);
domElemennt.innerHTML=reactElement.children;
for (const prop in reactElement.props) {
    domElemennt.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(domElemennt);
}
const reactElement={
    type:"a",
    props:{
      href:"https://www.youtube.com",
      target:"_blank"
    },
    children:"click to visit youtube"
}

const mainContainer=document.querySelector("#root");
customRender(reactElement,mainContainer);
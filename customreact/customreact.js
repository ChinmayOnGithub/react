
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement)

}


// react is just the better way to manipulate the frontend
// has some functions of javascript that even we can replicate.

const customReactElement = {
    type: 'a',
    props: {
        href: "http://google.com",
        target: "_blank"
    },
    children: "Click me"
}


const mainContainer = document.getElementById("root");

customRender(customReactElement, mainContainer);


// what i understood

/* 

JSX (js-xml i.e. html) -> reactElement object -(Rendering)-> html (children inserted)


reactElement Object looks like this : 
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: "_blank"
    },
    'Click to visit Google'
)


Virtual DOM : creating a DOM tree virtually
diffing : process of finding difference between prev and new DOM tree

{changes like states or props}


reconciliation : if any changes in the DOM happen, it only changes those changes




## Props and Children
Props are like attributes in HTML but can include any data or functions. React uses them to customize elements. Children are the nested content inside an element.



## react-dom 
is a seperate library that handles rendering React elements to the DOM
provides ReactDOM.render() as a API
due to this we don't need to deal with DOM directly.

*/
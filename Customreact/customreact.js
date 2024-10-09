//rendering anchor 'a' tag

//function to add element to root

function customRender(reactElement, mainContainer) {
    // const domEl = document.createElement(reactElement.type);
    // domEl.innerHTML = reactElement.children;

    // //problem as one by one 

    // domEl.setAttribute('href', reactElement.props.href);
    // domEl.setAttribute('target', reactElement.props.target);

    // mainContainer.appendChild(domEl);


    //modular code by loop based technique

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;


    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    mainContainer.appendChild(domElement);
}



const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google!'
};



const mainContainer = document.querySelector('#root');


//render or adding this element 'a' to root

customRender(reactElement, mainContainer)
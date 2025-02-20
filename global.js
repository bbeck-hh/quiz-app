// Be lazy ;-) You can use by name export

// Create some element on the fly
export const toCreate = (element) => document.createElement(element);

// To a htmlElement add a cssClass  
export const addCss = (htmlElement, cssClass) => htmlElement.classList.add(cssClass);

// Create a const by using the data-js attribute
export const fromDataJS = (dataJs) => document.querySelector(`[data-js=${dataJs}]`);



// export { addCss, fromDataJS, toCreate };

import	React from 'react'	

const usercontext =React.createContext();

const Provider=usercontext.Provider;
// Warning: The tag <provider> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
 
const Consumer=usercontext.Consumer;

const usercontext1=React.createContext();
const Provider1=usercontext1.Provider;
const Consumer1=usercontext1.Consumer;

export {Provider1,Consumer1};
export { usercontext1};

export {Provider,Consumer} ;

export default usercontext;
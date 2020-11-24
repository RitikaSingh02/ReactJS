import	React from 'react'	

const usercontext =React.createContext();

const Provider=usercontext.Provider;
// Warning: The tag <provider> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
 
const Consumer=usercontext.Consumer;

export {Provider,Consumer} ;

export default usercontext;
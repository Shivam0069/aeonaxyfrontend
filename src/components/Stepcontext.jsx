import React from "react";
 const multicontext = React.createContext()
import App from "../App";
const stepcontext = () =>{
    const [step, setStep] = React.useState(1);

    return (
        <multicontext.Provider value={{step, setStep}}>
    <App/>
        </multicontext.Provider>
    )
}
export default stepcontext;
export {multicontext};
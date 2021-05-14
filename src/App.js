import React from 'react'
import Main from "./components/WithoutMetamask/Main";
import Main2 from "./components/WithMetaMask/Main2";
import Main3 from "./components/TestMetaMask/Main3";

const App = () => {


    return (
        <>
            <div className={"d-flex justify-content-around"}>
                <Main/>
                <Main2/>
                <Main3/>
            </div>
        </>
    )
}

export default App;

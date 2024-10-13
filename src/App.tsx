/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./../components/header.tsx";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div>
                <a href='#' target='_blank'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>PIRO TESTING</h1>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default App;

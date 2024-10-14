import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
    const [hOneState, setHOneState] = useState<string | undefined>("Hi");

    const callTheEndpoint = async () => {
        try {
            const response = await axios.get<string>(`/api/hello`);
            setHOneState(response.data);
            return response.data;
        } catch (err) {
            console.log("Error occurred: " + err);
        }
    };

    return (
        <>
            <h1>{hOneState}</h1>
            <div className="card">
                <button onClick={async () => {
                    if (hOneState === "Hi") {
                        setHOneState(await callTheEndpoint())
                    }
                    else {
                        setHOneState("Hi")
                    }
                }}>
                    Call the API
                </button>
            </div>
        </>
    )
}

export default App

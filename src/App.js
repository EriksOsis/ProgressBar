import './App.css';
import {ProgressBar} from "./components/PorgressBar/ProgressBar";
import {Button} from "./components/Button/Button";
import {useState} from "react";

function App() {
    const [progress, setProgress] = useState(1);

    function progressHandler() {
        setProgress(progress + 1);
    }

    const steps = ["Shipping", "Billing & Review", "Success"];

    return (
        <div className="App">
            <ProgressBar progress={progress} steps={steps}/>
            <Button submitHandler={progressHandler}/>
        </div>
    );
}

export default App;

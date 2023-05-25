import "./index.css";
import React from "react-dom/client";
import App from "./App";
import Audio1 from "./components/assets/Expiration DatedemoV2.wav.mp3";
import Audio2 from "./components/assets/Pearly Drops - I Cry While You Sleep.mp3";
import Audio3 from "./components/assets/Expiration DatedemoV2.wav [music].wav";
import Audio4 from "./components/assets/Expiration Date.mp3";

const root = React.createRoot(document.getElementById("root"));
root.render(<App />);

export const AudioFilePaths = [Audio1, Audio2, Audio3, Audio4];

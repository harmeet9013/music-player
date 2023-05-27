import "./components/styles.css";
import Play from "./components/Play";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import { useState } from "react";

export default function App() {
    const [audioFile, setAudioFile] = useState(new Audio());
    const [currentSongName, setCurrentSongName] = useState("");
    const [isPlaying, setPlaying] = useState(false);
    return (
        <div className="container">
            <Header currentSongName={currentSongName} />
            <Play
                audioFile={audioFile}
                isPlaying={isPlaying}
                setPlaying={setPlaying}
            />
            <Playlist
                audioFile={audioFile}
                setCurrentSongName={setCurrentSongName}
                setPlaying={setPlaying}
            />
        </div>
    );
}

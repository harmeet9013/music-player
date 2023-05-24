import "./components/styles.css"
import Play from "./components/Play";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import { useState } from "react";

export default function App() {
	const [audioFile, setAudioFile] = useState(new Audio());
    const [currentSongName, setCurrentSongName] = useState("");
    const [isPlaying, setPlaying] = useState(false);
    return (
        <div className="App">
            {/* <Form /> */}
            <Header currentSongName={currentSongName} />
            <Play
                currentSongName={currentSongName}
				isPlaying={isPlaying}
				setPlaying={setPlaying}
				audioFile={audioFile}
            />
			<Playlist
                currentSongName={currentSongName}
                setCurrentSongName={setCurrentSongName}
				isPlaying={isPlaying}
				setPlaying={setPlaying}
				audioFile={audioFile}
				setAudioFile={setAudioFile}
            />
            {/* <Footer /> */}
        </div>
    );
}

import PlayButtons from "./PlayButtons";
import Volume from "./Volume";

import { useEffect } from "react";
import Seeker from "./seekAudio";

export default function Play({ audioFile, isPlaying, setPlaying }) {
    const handleEnded = () => {
        setPlaying(false);
    };

    useEffect(() => {
        audioFile.addEventListener("ended", handleEnded);

        return () => {
            audioFile.removeEventListener("ended", handleEnded);
        };
    }, [audioFile]);

    return (
        <div>
            <Seeker audioFile={audioFile} />
            <PlayButtons
                isPlaying={isPlaying}
                audioFile={audioFile}
                setPlaying={setPlaying}
            />
            <Volume audioFile={audioFile} />
        </div>
    );
}

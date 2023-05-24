import "./styles.css";
import { useState, useEffect } from "react";

export default function Seeker({ audioFile }) {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const updateCurrentTime = () => {
            setCurrentTime(audioFile.currentTime);
        };

        const updateDuration = () => {
            setDuration(audioFile.duration);
        };

        audioFile.addEventListener("timeupdate", updateCurrentTime);
        audioFile.addEventListener("loadedmetadata", updateDuration);

        return () => {
            audioFile.removeEventListener("timeupdate", updateCurrentTime);
            audioFile.removeEventListener("loadedmetadata", updateDuration);
        };
    }, [audioFile]);

    const handleSeek = (e) => {
        const seekTime = e.target.value;
        audioFile.currentTime = seekTime;
    };

    return (
        <div className="Seek">
            <span>
                {formatTime(currentTime)}
                {"   "}
            </span>
            <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSeek}
            />
            <span>
                {"   "}
                {formatTime(duration)}
            </span>
        </div>
    );
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

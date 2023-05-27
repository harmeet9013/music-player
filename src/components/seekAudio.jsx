import "./styles.css";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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

    const TinyText = styled(Typography)({
        fontSize: "0.75rem",
        opacity: 0.8,
        fontWeight: 500,
        letterSpacing: 0.2,
    });

    return (
        <div className="Seek">
            <Slider
                aria-label="time-indicator"
                min={0}
                step={1}
                value={currentTime}
                max={duration}
                onChange={handleSeek}
                sx={{
                    color: "rgba(255,255,255,0.87)",
                    height: 6,
                    "& .MuiSlider-thumb": {
                        width: 8,
                        height: 8,
                        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                        "&:before": {
                            color: "white",
                            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                        },
                        "&:hover, &.Mui-focusVisible": {
                            color: "white",
                            boxShadow: `0px 0px 0px 8px "rgb(0 0 0 / 16%)"
                            }`,
                        },
                        "&.Mui-active": {
                            color: "white",
                            width: 20,
                            height: 100,
                        },
                    },
                    "& .MuiSlider-rail": {
                        opacity: 0.28,
                    },
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: -2,
                }}
            >
                <TinyText>{formatTime(currentTime)}</TinyText>
                <TinyText>-{formatTime(duration - currentTime)}</TinyText>
            </Box>
        </div>
    );
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

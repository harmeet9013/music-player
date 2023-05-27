import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";

export default function Volume({ audioFile }) {
    const [currentVolume, setVolume] = useState(100);

    const handleClick = (event) => {
        if (event === "down" && audioFile.volume > 0) {
            audioFile.volume -= 0.1;
            setVolume(audioFile.volume);
        }
        if (event === "up" && audioFile.volume < 1) {
            audioFile.volume += 0.1;
            setVolume(audioFile.volume);
        }
        setVolume(audioFile.volume * 100);
    };

    const handleSeek = (event) => {
        setVolume(event.target.value);
        audioFile.volume = event.target.value / 100;
    };

    return (
        <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1, px: 11.5, width: "220px" }}
            alignItems="center"
        >
            <IconButton
                sx={{ color: "white" }}
                onClick={() => {
                    handleClick("down");
                }}
            >
                <VolumeDownRounded />
            </IconButton>
            <Slider
                aria-label="Volume"
                value={currentVolume}
                step={10}
                min={0}
                max={100}
                marks
                onChange={handleSeek}
                sx={{
                    color: "rgba(255, 255, 255, 0.87)",
                    "& .MuiSlider-track": {
                        border: "none",
                    },
                    "& .MuiSlider-thumb": {
                        width: 18,
                        height: 18,
                        backgroundColor: "#fff",
                        "&:before": {
                            boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                        },
                        "&:hover, &.Mui-focusVisible, &.Mui-active": {
                            boxShadow: "none",
                        },
                    },
                }}
            />
            <IconButton
                sx={{ color: "white" }}
                onClick={() => {
                    handleClick("up");
                }}
                id="up"
            >
                <VolumeUpRounded />
            </IconButton>
        </Stack>
    );
}

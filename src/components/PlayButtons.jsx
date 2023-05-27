import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import Box from "@mui/material/Box";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function PlayButton({ isPlaying, audioFile, setPlaying }) {
    const handleTogglePlay = () => {
        if (audioFile.paused) {
            audioFile.play();
            setPlaying(true);
        } else {
            audioFile.pause();
            setPlaying(false);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: -1,
            }}
        >
            <IconButton
                onClick={() => {
                    audioFile.currentTime -= 5;
                }}
            >
                <SkipPreviousIcon sx={{ fontSize: "3rem", color: "white" }} />
            </IconButton>

            <IconButton onClick={handleTogglePlay}>
                {isPlaying ? (
                    <PauseCircleIcon
                        sx={{ fontSize: "5rem", color: "white" }}
                    />
                ) : (
                    <PlayCircleIcon sx={{ fontSize: "5rem", color: "white" }} />
                )}
            </IconButton>

            <IconButton
                onClick={() => {
                    audioFile.currentTime += 5;
                }}
            >
                <SkipNextIcon sx={{ fontSize: "3rem", color: "white" }} />
            </IconButton>
        </Box>
    );
}

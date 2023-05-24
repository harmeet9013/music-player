export default function Play({ audioFile, isPlaying, setPlaying }) {
    function handleClick() {
        if (!isPlaying) {
            audioFile.play();
            setPlaying(true);
        } else {
            audioFile.pause();
            setPlaying(false);
        }
    }

    return (
        <div className="play">
            <button onClick={handleClick} name="play">
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
}

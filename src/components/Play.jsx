export default function Play({ audioFile, isPlaying, setPlaying }) {
    function handleClick() {
        if (!isPlaying) {
            audioFile.setAttribute('className', '.fade-in-out.fade-in');
            audioFile.play();
            setPlaying(true);
        } else {
            audioFile.setAttribute('className', '.fade-in-out.fade-out');
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

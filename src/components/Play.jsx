import pauseIcon from "./assets/pictures/pause.png";
import playIcon from "./assets/pictures/play.png";
import Seeker from "./seekAudio";

export default function Play({ audioFile, isPlaying, setPlaying }) {
    function handleClick() {
        if (!isPlaying) {
            audioFile.setAttribute("class", ".fade-in-out.fade-in");
            audioFile.play();
            setPlaying(true);
        } else {
            audioFile.setAttribute("class", ".fade-in-out.fade-out");
            audioFile.pause();
            setPlaying(false);
        }
    }

    function setIcon(event) {
        return event === "pause" ? (
            <img src={pauseIcon} />
        ) : (
            <img src={playIcon} />
        );
    }

    return (
        <div className="play">
            <Seeker audioFile={audioFile} />
            <button onClick={handleClick} name="play">
                {isPlaying ? setIcon("pause") : setIcon("play")}
            </button>
        </div>
    );
}

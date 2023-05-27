import { AudioFilePaths } from "../main";
import ChangeSongs from "./ChangeSongs";

export default function PrintPlaylist({
    audioFile,
    isPlaying,
    setPlaying,
    setCurrentSongName,
}) {
    return (
        <div className="playlist">
            <h1>Playlist</h1>
            {AudioFilePaths.map((SongName) => (
                <button
                    key={SongName}
                    onClick={() => {
                        setCurrentSongName(SongName);
                        ChangeSongs(SongName, audioFile, isPlaying, setPlaying);
                    }}
                    name={SongName}
                >
                    {SongName.split("/").pop()}
                </button>
            ))}
        </div>
    );
}

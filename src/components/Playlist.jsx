import { AudioFilePaths } from "../main";
import ChangeSongs from "./ChangeSongs";

export default function PrintPlaylist({ audioFile, setCurrentSongName, setPlaying }) {
    return (
        <div className="playlist">
            <h1>Playlist</h1>
            {AudioFilePaths.map((SongName) => (
                <button
                    key={SongName}
                    onClick={() => {
                        setCurrentSongName(SongName);
                        ChangeSongs(SongName, audioFile, setPlaying);
                    }}
                    name={SongName}
                >
                    {SongName.split("/").pop()}
                </button>
            ))}
        </div>
    );
}

import { AudioFilePaths } from "..";

export default function PrintPlaylist({
    audioFile,
    isPlaying,
    setPlaying,
    setCurrentSongName,
}) {
    function ChangeSongs(SongName) {
        const FileName = SongName.split("/").pop();

        audioFile.setAttribute('src', "static/media/" + FileName);
        
        if (isPlaying) {
            audioFile.setAttribute('className', '.fade-in-out.fade-out');
            audioFile.pause();
            setPlaying(false);
        }
        audioFile.setAttribute('classname', '.fade-in-out.fade-in');
        audioFile.play();
        setPlaying(true);
    }

    return (
        <div className="playlist">
            <h1>Playlist</h1>
            {AudioFilePaths.map((SongName) => (
                <button
                    key={SongName}
                    onClick={() => {
                        setCurrentSongName(SongName);
                        ChangeSongs(SongName);
                    }}
                    name={SongName}
                >
                    {SongName.split("/").pop()}
                </button>
            ))}
        </div>
    );
}

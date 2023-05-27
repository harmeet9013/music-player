export default function ChangeSongs(SongName, audioFile, setPlaying) {
    audioFile.setAttribute("src", SongName);
    audioFile.paused ? audioFile.play() : audioFile.pause();
    setPlaying(true);
}

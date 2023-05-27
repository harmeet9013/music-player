export default function ChangeSongs(
    SongName,
    audioFile,
    isPlaying,
    setPlaying
) {
    const FileName = SongName.split("/").pop();

    // audioFile.setAttribute("src", FileName);
    audioFile = new Audio(SongName)
    if (isPlaying) {
        audioFile.setAttribute("class", ".fade-in-out.fade-out");
        audioFile = new Audio()
        audioFile.pause();
        setPlaying(false);
    }
    audioFile.setAttribute("class", ".fade-in-out.fade-in");
    audioFile.play();
    setPlaying(true);
}

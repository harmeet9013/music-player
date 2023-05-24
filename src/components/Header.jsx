export default function Header({ currentSongName }) {
    return (
        <div className="heading">
            <h1>{currentSongName.split("/").pop()}</h1>
        </div>
    );
}

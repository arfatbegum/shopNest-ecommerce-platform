import BeatLoader from "react-spinners/BeatLoader";

export default function Loader() {
    return (
        <div className="h-screen sweet-loading flex justify-center items-center">
            <BeatLoader
                color={"#2f60b5"}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}
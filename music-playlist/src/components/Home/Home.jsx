import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-blue-700 min-h-screen flex items-center justify-center relative overflow-hidden">
            <svg
                className="absolute bottom-0 left-0 w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#FFFFFF"
                    fillOpacity="1"
                    d="M0,224L48,229.3C96,235,192,245,288,250.7C384,256,480,256,576,234.7C672,213,768,171,864,144C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <div className="relative z-10 text-center">
                <h1 className="text-6xl font-bold text-white mb-4 hover:bg-blue-800 rounded-full px-5 py-5">
                    <Link to='/special'>Waves</Link>
                </h1>
                <p className="text-white text-xl">
                    Choose the music you love.
                </p>
            </div>
        </div>
    );
}

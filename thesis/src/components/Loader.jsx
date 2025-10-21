

function Loader() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-400">
            <div className="hexagon relative w-[200px] h-[200px] overflow-hidden">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#1A2338,#e9e9e9)] animate-spin"></div>
                <div className="hexagon absolute top-1/2 left-1/2 w-[180px] h-[180px] transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold z-20">
                    Loading...
                </div>
            </div>
        </div>
 )
}

export default Loader
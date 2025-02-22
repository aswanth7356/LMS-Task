import { X, Loader, ArrowDownToLine, HelpCircle } from 'lucide-react';
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useRef } from 'react';



function VideoModal({ video, onClose }) {
    if (!video) return null;

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(0.8);
    const [loading, setLoading] = useState(false);



    // Play/Pause handler
    const togglePlayPause = () => setPlaying(!playing);

    // Rewind by 10 seconds
    const handleRewind = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10, 'seconds');
    };

    // Fast forward by 10 seconds
    const handleFastForward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10, 'seconds');
    };

    // Handle volume change
    const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));



    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-[90%] max-w-3xl relative">

                {/* Video Close Icon */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-900 hover:text-black p-2 z-40 "
                    aria-label="Close">
                    <X size={32} color="#ff7575" strokeWidth={3} />
                </button>

                {/* Loading Overlay */}
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
                        <Loader size={48} color="#d4ff00" strokeWidth={2.5} className="animate-spin" />
                    </div>
                )}

                {/* Display Video */}
                <div className="p-1 w-full h-[220px] sm:h-[300px] md:h-[400px]">
                    <ReactPlayer
                        ref={playerRef}
                        url={video.video_url}
                        playing={playing}
                        controls={false}
                        width="100%"
                        height="100%"
                        volume={volume}
                        config={{
                            youtube: { playerVars: { modestbranding: 1 } },
                            vimeo: { playerOptions: { responsive: true } },
                        }}
                    />
                </div>


                {/* Custom Controls */}
                <div className="flex items-center justify-center gap-4 mt-4">
                    <button onClick={handleRewind} className="bg-gray-300 p-2 rounded">⏪ Rewind</button>
                    <button onClick={togglePlayPause} className="bg-gray-300 p-2 rounded">
                        {playing ? '⏸ Pause' : '▶️ Play'}
                    </button>
                    <button onClick={handleFastForward} className="bg-gray-300 p-2 rounded">⏩ Forward</button>

                    <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-1">
                        <label htmlFor="volume" className="text-xs sm:text-sm">🔊 Volume</label>
                        <input
                            id="volume"
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-16 sm:w-24"
                        />
                    </div>
                </div>


                <div className="p-4 mt-5">
                    <h2 className="text-lg font-bold">{video.title}</h2>
                    <p className="text-gray-600">{video.description}</p>

                    {/* Buttons */}
                    <div className="flex justify-between mt-6 gap-4">
                        <button className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 shadow-md px-4 py-2 rounded-lg hover:shadow-lg transition w-full">
                            <ArrowDownToLine size={20} /> Download
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 shadow-md px-4 py-2 rounded-lg hover:shadow-lg transition w-full">
                            <HelpCircle size={20} /> Doubt
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoModal

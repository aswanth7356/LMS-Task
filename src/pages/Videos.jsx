import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import VideoModal from '../components/VideoModal';
import { CheckCircle, ChevronLeft, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function Videos() {

  const { moduleId } = useParams();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    videoData()
  }, [moduleId]);


  const videoData = async () => {
    try {
      // fetching video Api 
      const result = await axios.get(`https://trogon.info/interview/php/api/videos.php?module_id=${moduleId}`);
      console.log(result.data)
      setVideos(result.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
      toast.error("Error fetching videos")
    }
  }




  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col justify-between">
        <div className="min-h-screen bg-gradient-to-b from-purple-200 to-purple-200 flex flex-col justify-between p-6">

          {/* Navigation Icon */}
          <ChevronLeft size={28} className="absolute left-8 cursor-pointer" onClick={() => { navigate(-1) }} />

          {/* logo */}
          <div className="w-full max-w-2xl mx-auto text-center mb-6 flex flex-col items-center">
            <img src="/logo.jpg" alt="Logo" className="mx-auto w-16  h-12 mb-4" />
            <h1 className="text-lg font-semibold my-3"></h1>
            <h2 className="text-2xl font-bold mb-5">Video Section</h2>
          </div>
          {videos.length > 0 ?
            <div className="space-y-6 relative border-l-4 border-purple-600 pl-6">

              {/* Mapping */}
              {videos.map((item) => (
                <div className="flex items-center gap-4 pl-6 relative cursor-pointer p-2 rounded-lg">
                  <CheckCircle className="text-white bg-purple-600 rounded-full p-1 w-8 h-8" />
                  <div className="group inline-block">
                    <h3 className="text-sm font-medium">{item?.id}</h3>
                    <p
                      className="text-lg font-bold p-1 rounded-md transition-all duration-300 group-hover:bg-purple-800 group-hover:text-white group-hover:translate-x-2"
                      onClick={() => setSelectedVideo(item)}
                    >
                      {item?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            :
            // Loading Overlay
            <div className="flex items-center justify-center animate-spin min-h-screen">
              <Loader size={44} color="#00e056" strokeWidth={2.25} />
            </div>
          }
        </div>

        {/* Video Player Modal & Prop Sharing*/}
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      </div>
    </>
  );

}

export default Videos

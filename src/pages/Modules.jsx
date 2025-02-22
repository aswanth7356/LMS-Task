import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CircleChevronLeft, Loader } from 'lucide-react';
import toast from 'react-hot-toast';



function Modules() {
  const { subjectId } = useParams();
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    moduleData()
  }, [subjectId])


  const moduleData = async () => {
    try {
      // fetching Modules Listing Api 
      const result = await axios.get(`https://trogon.info/interview/php/api/modules.php?subject_id=${subjectId}`)
      console.log(result.data)
      setModules(result.data);
    } catch (error) {
      console.error('Error fetching Modules:', error);
      toast.error("Error Fetching Modules")
    }
  }


  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 text-white p-6">

      {/* Navigation Icon */}
      <div className="flex items-center justify-between relative">
        <CircleChevronLeft size={28} className="absolute left-0 cursor-pointer" onClick={() => { navigate(-1) }} />
        <header className="flex-grow text-center text-2xl font-bold mt-4 mb-6">MODULES</header>
      </div>
      {modules.length > 0 ?
        <div>

          {/* Mapping */}
          {modules.map((item) => (
            <div className="relative z-10 space-y-10 pt-10">
              <div className="flex items-center space-x-4 justify-start">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="purple" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">{item?.id}{"-"}{" "}{item?.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        :
        // Loading Overlay
        <div className="flex items-center justify-center animate-spin min-h-screen">
          <Loader size={44} color="#d4ff00" strokeWidth={2.25} />
        </div>
      }

      {/* Button */}
      <div className="relative mt-10 inset-0 flex items-end justify-center pb-6">
        <Link to="/videos">
          <button className="bg-white text-purple-600 w-48 py-3 rounded-full text-lg font-semibold shadow-lg transition-colors duration-300 hover:bg-purple-600 hover:text-white">
            Continue
          </button>

        </Link>
      </div>
    </div>


  );

}

export default Modules

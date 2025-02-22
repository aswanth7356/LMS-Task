import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function Home() {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    try {
      // fetching Subject Listing Api 
      const result = await axios.get("https://trogon.info/interview/php/api/subjects.php")
      console.log(result.data)
      setSubjects(result.data);
    } catch (error) {
      console.log("Error Fetching Subjects:", error)
      toast.error("Error Fetching Subjects")
    }
  }


  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-800 text-white p-4 space-y-6">

        {/* Navigation Icon */}
        <div className="flex items-center justify-between relative">
          <header className="flex-grow text-center text-2xl font-bold mt-4">SUBJECTS</header>
        </div>

        <div className="bg-white text-black rounded-2xl p-4 shadow-lg mx-2 space-y-2">
          <p className="text-sm font-medium">Current Course :</p>
          <h2 className="text-lg font-bold">Spoken English STARTER - Beginner</h2>
          <button className="bg-purple-600 text-white rounded-full py-2 w-full mt-2">Browse Other Course</button>
        </div>

        <div className="mx-2 space-y-4">
          <h3 className="text-xl font-bold my-8">Spoken English STARTER</h3>
          {subjects.length > 0 ?
            <div className="relative border-l-4 border-white space-y-4">

              {/* Mapping */}
              {subjects.map((item) => (
                <Link to={`/module/${item.id}`}>
                  <div className="flex items-center gap-4 pl-6 relative cursor-pointer hover:bg-white hover:text-purple-600 p-2 rounded-lg transition mb-5">
                    <div className="absolute -left-[20px] bg-white text-purple-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {item?.id}
                    </div>
                    <div>
                      <h4 className="font-medium leading-tight">{item?.title}</h4>
                    </div>
                    <div className="ml-auto">➔</div>
                  </div>
                </Link>
              ))
              }

            </div>
            :
            // Loading Overlay
            <div className="flex items-center justify-center animate-spin">
              <Loader size={44} color="#d4ff00" strokeWidth={2.25} />
            </div>

          }
        </div>
      </div>

    </>
  )
}

export default Home

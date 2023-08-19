import { useState } from "react";

const CourseOutline = ({ milestoneList, onSelectModule }) => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  const toggleMilestone = (milestoneIndex) => {
    if (expandedMilestone === milestoneIndex) {
      setExpandedMilestone(null);
    } else {
      setExpandedMilestone(milestoneIndex);
    }
  };


  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMilestones, setFilteredMilestones] = useState(milestoneList);

  const handleSearch = (query) => {
    const filtered = milestoneList.filter((milestone) =>
      milestone.modules.some((module) => module.module.includes(query))
    );
    setFilteredMilestones(filtered);
  };

console.log(searchQuery)


  return (
    <div>
      <div className="p-4 rounded-lg">
      <div className=" flex items-center gap-24">
      <h2 className="text-xl w-3/5  mb-3 mt-3 font-bold">Course Outline</h2>
      {/*<progress className="progress progress-info w-80 md:w-32 lg:w-56 xl:w-80 h-4" value="70" max="100"></progress> */}
      </div>
        <div className="w-full">
          <input type="text" placeholder="Search Lesson" className="input input-success w-full" 
          
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(searchQuery);
            }
          }}
          />
        </div>
        <ul className="border border-gray-300 rounded-md  p-5 mt-5">
          {milestoneList.map((milestone, milestoneIndex) => (
            <li className="w-full px-5 py-3  mb-4 " key={milestoneIndex}>
              <span
                className={`cursor-pointer p-4 rounded-md lg:text-2xl text-white  bg-green-500   ${
                  expandedMilestone === milestoneIndex ? 'font-bold' : ''
                }`}
                onClick={() => toggleMilestone(milestoneIndex)}
              >
                {milestone.milestone}
              </span>
              {expandedMilestone === milestoneIndex && (
                <ul className="text-black mt-3 w-full">
                  {milestone.modules.map((module, moduleIndex) => (
                    <li className="px-3 py-2 text-xl border-b border-green-400 mt-4 mb-4" key={moduleIndex}>
                      <span
                        className="cursor-pointer px-3 rounded-md"
                        onClick={() => onSelectModule(moduleIndex, module.videoUrl)}
                      >
                        {module.module}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <button className="bg-green-500 text-xl text-white rounded-md py-3 px-4 w-full font-bold">
          Course Summary
        </button>
      </div>
    </div>
  );
};

export default CourseOutline;






// import { useState } from 'react';
// import {BiLike } from 'react-icons/bi';
// import {BiDislike } from 'react-icons/bi';
// import {BsBookmark } from 'react-icons/bs';

import { useState } from 'react';
import { BiLike, BiDislike, BiBookmark, BiCheck } from 'react-icons/bi';

const CourseVideo = ({ videoList, currentModuleIndex, onModuleChange }) => {
  const currentVideo = videoList[currentModuleIndex];
  
  const handlePrevious = () => {
    if (currentModuleIndex > 0) {
      onModuleChange(currentModuleIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (currentModuleIndex < videoList.length - 1) {
      onModuleChange(currentModuleIndex + 1);
    }
  };

  const [likeStatus, setLikeStatus] = useState('none'); // 'none', 'liked', 'disliked'
  const [bookmarked, setBookmarked] = useState(false);


  const handleLike = () => {
    if (likeStatus === 'liked') {
      setLikeStatus('none');
    } else {
      setLikeStatus('liked');
      setBookmarked(false); // Reset bookmarked state
    }
  };

  const handleDislike = () => {
    if (likeStatus === 'disliked') {
      setLikeStatus('none');
    } else {
      setLikeStatus('disliked');
      setBookmarked(false); // Reset bookmarked state
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const resetInteractions = () => {
    setLikeStatus('none');
    setBookmarked(false);
  };


  return (
    <div className="p-4 rounded-lg">
      <iframe
        title="Course Video"
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${currentVideo.videoUrl}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
        <div className="bg-gray-500 flex p-4 mt-4 justify-between text-white">
      <div className="flex items-center gap-3">
        <p className="text-xl font-bold">Feedback</p>
        {likeStatus === 'liked' ? (
          <BiCheck className={`text-3xl cursor-pointer`} onClick={handleLike} />
        ) : (
          <BiLike
            className={`text-3xl ${likeStatus === 'disliked' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={likeStatus === 'disliked' ? null : handleLike}
          />
        )}
        {likeStatus === 'disliked' ? (
          <BiCheck className={`text-3xl mt-2 cursor-pointer`} onClick={handleDislike} />
        ) : (
          <BiDislike
            className={`text-3xl mt-2 ${likeStatus === 'liked' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={likeStatus === 'liked' ? null : handleDislike}
          />
        )}
      </div>
      <div className="flex items-center gap-3">
        <p className="text-xl font-bold">Bookmark</p>
        {bookmarked ? (
          <BiCheck
            className={`text-3xl cursor-pointer`}
            onClick={handleBookmark}
          />
        ) : (
          <BiBookmark
            className={`text-3xl cursor-pointer`}
            onClick={handleBookmark}
          />
        )}
      </div>
    </div>

      <div className="mt-3 w-full md:flex justify-between items-center gap-32 lg:gap-56 xl:gap-96">
        <div className="w-full">
          <h3 className="text-md font-semibold mt-3 ">{currentVideo.module}</h3>
        </div>
        <div className="mt-3 w-full flex gap-2">
          <button className="btn btn-outline btn-secondary py-2 px-4 mr-2 w-2/5 md:w-24" onClick={handlePrevious}>
            Previous
          </button>
          <button className="bg-green-500 text-white rounded-md py-2 px-4 w-2/5 md:w-24" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;





import  { useState } from 'react';
import CourseVideo from './CourseOutline/CourseVideo';
import CourseOutline from './CourseOutline/CourseOutline';

const CoursePage = () => {
  const milestoneList = [
    {
      milestone: 'Milestone 1: Fundamentals',
      modules: [
        {
          module: 'Module 0: ওয়েব ডেভেলপমেন্ট এর ফিউচার কি? ২০২৩ সালে কি আমার ওয়েব ডেভেলপমেন্ট শেখা উচিত? ',
          videoUrl: '6Q2jPqyhFCQ',
        },
        {
          module: 'Module 1: কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ শিখবো? কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ আমার জন্য ভালো হবে?',
          videoUrl: 'MIyIIh9YpdY',
        },
        {
          module: 'Module 2: Components and Props',
          videoUrl: ' ',
        },
      ],
    },
    {
      milestone: 'Milestone 2: Advanced Topics',
      modules: [
        {
          module: 'Module 0: State Management',
          videoUrl: '8cr9Wfkolos',
        },
        {
          module: 'Module 1: Hooks and Context',
          videoUrl: 'video-url-2.1',
        },
      ],
    },
    // ... more milestones ...
  ];
  const [selectedVideo, setSelectedVideo] = useState(milestoneList[0]?.modules[0]?.videoUrl || '');
  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const [selectedModule, setSelectedModule] = useState(0);

  const handleModuleSelect = (moduleIndex, videoUrl) => {
    setSelectedModule(moduleIndex);
    setSelectedVideo(videoUrl);
  };
  
  const handleMilestoneSelect = (milestoneIndex) => {
    setSelectedMilestone(milestoneIndex);
    setSelectedModule(0);
    setSelectedVideo(milestoneList[milestoneIndex]?.modules[0]?.videoUrl || '');
  };

  return (
    <div className="lg:flex">
      <div className="lg:w-3/4 p-4">
        <CourseVideo
          videoList={milestoneList.flatMap(milestone => milestone.modules)}
          currentModuleIndex={selectedModule}
          onModuleChange={handleModuleSelect}
        />
      </div>
      <div className="lg:w-2/4 p-4">
        <CourseOutline
          milestoneList={milestoneList}
          selectedMilestone={selectedMilestone}
          onSelectMilestone={handleMilestoneSelect}
          onSelectModule={handleModuleSelect}
        />
      </div>
    </div>
  );
};

export default CoursePage;
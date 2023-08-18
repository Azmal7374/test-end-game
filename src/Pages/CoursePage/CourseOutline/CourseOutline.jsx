import { useState } from "react";

const CourseOutline = ({ selectedMilestone, selectedModule, onTopicClick, onSelectMilestone, onSelectModule }) => {
    

  


const milestoneList = [
    {
      milestone: 'Milestone 1: Fundamentals',
      modules: [
        {
          module: 'Module 1: ওয়েব ডেভেলপমেন্ট এর ফিউচার কি? ২০২৩ সালে কি আমার ওয়েব ডেভেলপমেন্ট শেখা উচিত? ',
          videoUrl: '6Q2jPqyhFCQ',
        },
        {
          module: 'Module 0: কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ শিখবো? কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ আমার জন্য ভালো হবে?',
          videoUrl: '3w5UAWhIjgQ',
        },
        {
          module: 'Module 1: Components and Props',
          videoUrl: 'MIyIIh9YpdY',
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

  const [openMilestone, setOpenMilestone] = useState(null);
  const [openModule, setOpenModule] = useState(null);

  const toggleMilestone = (milestoneIndex) => {
    setOpenMilestone(openMilestone === milestoneIndex ? null : milestoneIndex);
  };

  const toggleModule = (moduleIndex, videoUrl) => {
    setOpenModule(openModule === moduleIndex ? null : moduleIndex);
    onSelectModule(moduleIndex, videoUrl);
  };

  return (
   <div>
   
   <div className=" p-4 rounded-lg">
   <div className=" flex items-center gap-24">
   <h2 className="text-xl w-3/5  mb-3 mt-3 font-bold">Course Outline</h2>
   <progress className="progress progress-info w-80 md:w-32 lg:w-56 xl:w-80 h-4" value="70" max="100"></progress>
   </div>

    <div className="w-full">
    
    <input type="text" placeholder="Search Lesson" className="input  input-info w-full  " /></div>
   <ul className="bg-blue-500 p-5 mt-5">
     {milestoneList.map((milestone, milestoneIndex) => (
       <li className=" w-full px-10 py-6 "  key={milestoneIndex}>
         <span
           className={`cursor-pointer  p-4 rounded-md text-2xl text-white border ${
             openMilestone === milestoneIndex ? 'font-bold' : ''
           }`}
           onClick={() => {
             toggleMilestone(milestoneIndex);
             onSelectMilestone(milestoneIndex);
             setOpenModule(null);
           }}
         >
           {milestone.milestone}
         </span>
         {openMilestone === milestoneIndex && (
           <ul  className=" text-white mt-6 w-full ">
             {milestone.modules.map((module, moduleIndex) => (
               <li className="px-3 py-4 text-xl "  key={moduleIndex}>
                 <span
                   className={`cursor-pointer  p-2 rounded-md ${
                     openModule === moduleIndex ? 'font-bold' : ''
                   }`}
                   onClick={() => toggleModule(moduleIndex, module.videoUrl)}
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

 <div className="mt-4  ">
 <button className="bg-green-500 text-xl text-white rounded-md py-3 px-4  w-full font-bold ">Course Summary</button>
 </div>
   </div>
  );
   
};

export default CourseOutline;
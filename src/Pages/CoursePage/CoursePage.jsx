import { useState } from "react";
import CourseVideo from "./CourseOutline/CourseVideo";
import CourseOutline from "./CourseOutline/CourseOutline";

const CoursePage = () => {
    const [selectedVideo, setSelectedVideo] = useState('uPRwl-wuO7A');
    const [selectedMilestone, setSelectedMilestone] = useState(null);

    const [selectedModule, setSelectedModule] = useState(null);
  
    const handleModuleClick = (videoUrl) => {
      setSelectedVideo(videoUrl);
    };

    const handleModuleSelect = (moduleIndex, videoUrl) => {
      setSelectedModule(moduleIndex);
      setSelectedVideo(videoUrl);
    };
  
    const handleMilestoneSelect = (milestoneIndex) => {
      setSelectedMilestone(milestoneIndex);
    };
  
    return (
        <div className="md:flex ">
          <div className="md:w-3/4 p-4">
            <CourseVideo videoUrl={selectedVideo} />
          </div>
          <div className=" md:w-2/4 p-4">
            <CourseOutline
              selectedMilestone={selectedMilestone}
              onTopicClick={handleModuleClick}
              onSelectMilestone={handleMilestoneSelect}
              onSelectModule={handleModuleSelect}
            />
          </div>
        </div>
      );
};

export default CoursePage;
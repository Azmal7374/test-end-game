import {BiLike } from 'react-icons/bi';
import {BiDislike } from 'react-icons/bi';
import {BsBookmark } from 'react-icons/bs';



const CourseVideo = ({videoUrl}) => {
    return (
        <div className=" p-4 rounded-lg">
          <iframe
            title="Course Video"
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <div className="bg-blue-500 flex p-4 mt-4 justify-between text-white">
          <div className='flex items-center gap-3'>
          <p className='text-xl font-bold'>Feedback</p>
          <BiLike className='text-3xl'></BiLike>
          <BiDislike className='text-3xl mt-2'></BiDislike>
          </div>
          <div className='flex items-center gap-3'>
          <p className='text-xl font-bold'>Bookmark</p>
        <BsBookmark className='text-3xl'></BsBookmark>
          
          </div>
          
          </div>


          <div className="mt-3 w-full md:flex justify-between items-center gap-32 lg:gap-56 xl:gap-96"> 
          <div className="w-full">
          <h3 className="text-md font-semibold mt-3 ">নিয়মিত ফযরে জাগার উপায়</h3>
          </div>
           <div className="mt-3 w-full flex gap-2 ">
           <button className="btn btn-outline btn-secondary py-2 px-4 mr-2 w-2/5 md:w-24">Previous</button>
           <button className="bg-green-500 text-white rounded-md py-2 px-4 w-2/5 md:w-24">Next</button>
           </div>
          </div>
        </div>
      );
};

export default CourseVideo;
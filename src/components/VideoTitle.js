const VideoTitle = ({ title, overview }) => {
  return (
    <div className="  w-screen aspect-video px-12 pt-[15%] absolute text-white bg-gradient-to-r  from-black">
      <h1 className=" text-5xl font-bold w-1/4">{title}</h1>
      <p className=" py-6   text-lg  w-1/4">{overview}</p>
      <div className="">
        <button className="  bg-white rounded-lg text-black p-2 px-6 text-lg font-semibold hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className=" mx-2  bg-white rounded-lg text-black p-2 px-6 text-lg font-semibold bg-opacity-50">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

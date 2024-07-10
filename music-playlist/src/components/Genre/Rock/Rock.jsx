
const Rock = () => {
  return (
    <>
      <div className="container mx-auto px-4 bg-blue-700 text-white py-4">
        <h1 className="text-3xl font-bold">♫♫♫ ♪♪♪ ♫♫ ♪♪</h1>
        <br/>
        <p className="text-lg">Experience how the raw power meets timeless melodies.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8 mx-auto max-w-7xl">
        <iframe
          src="https://www.youtube.com/embed/mX2gP4L0JVs" 
          title="Rock Video1"
          allowFullScreen
          className={'w-full h-80 sm:h-96 lg:h-96 rounded-lg shadow-lg'}
         
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/ZvldX9abgrA?si=9veyclQOZNYoNwdi" 
          title="Rock Video2"
          allowFullScreen
          className={'w-full h-80 sm:h-96 lg:h-96 rounded-lg shadow-lg'}
          
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/bC8EmPA6H6g?si=EGLxHLSd839LiIGP"
          title="Rock video3"
          allowFullScreen
          className={'w-full h-80 sm:h-96 lg:h-96 rounded-lg shadow-lg'}
          
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/Fykcn5d7D6A?si=jCmUAIiuKUH2I6FK"
          title="Rock video4"
          allowFullScreen
          className={'w-full h-80 sm:h-96 lg:h-96 rounded-lg shadow-lg'}
          
        ></iframe>
      </div>
    </>
  );
};

export default Rock;

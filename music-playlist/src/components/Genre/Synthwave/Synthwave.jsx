
const Synthwave = () => {
  return (
    <>
      <div className="container mx-auto px-4 bg-blue-700 text-white py-4">
        <h1 className="text-3xl font-bold">♫♫♫♫ ♪♪♪♪♪ ♫♫♫♫ ♫♫♪♪</h1>
        <br/>
        <p className="text-lg">Feel the neon lights & hear the pulsating synth beats.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8 mx-auto max-w-7xl">
        <iframe
          src="https://www.youtube.com/embed/arzw0tFK5O4" 
          title="Synthwave Video1"
          allowFullScreen
          className={'w-full h-80 sm:h-96 lg:h-96 rounded-lg shadow-lg'}
         
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/GBUCmMxmup0?si=4TjReB4GXvcjzVty"
          title="Synthwave Video2"
          allowFullScreen
          className={'w-full h-80 sm:h-96 lg:h-96 rounded-lg shadow-lg'}
          
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/ICcFMBzOnYs?si=dFVUKkD1BeaHBpIA"
          title="Synthwave video3"
          allowFullScreen
          className={'w-full h-80 sm:h-96 lg:h-96 rounded-lg shadow-lg'}
          
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/_AXIOfilxi0?si=EAXRNalaCc18whtr"
          title="Synthwave video4"
          allowFullScreen
          className={'w-full h-80 sm:h-96 lg:h-96 rounded-lg shadow-lg'}
          
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/1ySFjKfUeK0?si=tAL1KjnXoxJsEhPq"
          title="Synthwave video5"
          allowFullScreen
          className={'w-full h-80 sm:h-96 lg:h-96 rounded-lg shadow-lg'}
          
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/CU_ruPKWJpc?si=FlBzOfuoDvSIs9c8"
          title="Synthwave video6"
          allowFullScreen
          className={'w-full h-80 sm:h-96 lg:h-96 rounded-lg shadow-lg'}
          
        ></iframe>


      </div>
    </>
  );
};

export default Synthwave;

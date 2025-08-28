/* eslint-disable @typescript-eslint/no-explicit-any */
import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "eEzD-Y97ges", 
  
}:any ) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        // autoplay
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;


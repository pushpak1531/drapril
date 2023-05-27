import '../App.css'
const BoxComponent = ({ videoUrl }) => {
  return (
    <div className="box-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <video src={videoUrl} type="video/mp4" autoPlay >
        {/* Add additional video source */}
        Your Browser doesnt support video format
      </video>
    </div>
  );
}; export default BoxComponent;

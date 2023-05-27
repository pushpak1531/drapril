const BoxComponent = ({ videoUrl }) => {
  return (
    <div className="box-container">
      <video controls>
        <source src={videoUrl} type="video/mp" />
        {/* Add additional video source */}
        Your Browser doesnt support video format
      </video>
    </div>
  );
}; export default BoxComponent;

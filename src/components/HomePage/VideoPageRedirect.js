import { useNavigate } from 'react-router-dom';

function VideoPageRedirect({ children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/videopage'); // Redirection vers VideoPage
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
}

export default VideoPageRedirect;

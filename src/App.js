import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import VideoPage from './components/VideoPage/VideoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videopage" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;

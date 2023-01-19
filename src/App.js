import {BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom";

// Pages
import MainPage from "./Pages/Main";
import Arizona from "./Pages/Arizona";
import NotFound from "./Pages/notFound";
import Boston from "./Pages/Boston";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="Arizona" element={<Arizona />} />
        <Route path="Boston" element={<Boston />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

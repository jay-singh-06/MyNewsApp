import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import News  from './components/News';
import LoadingBar from "react-top-loading-bar";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

  const App=()=> {
  const apiKey=import.meta.env.VITE_NEWS_API;

  const [progress,setProgress]=useState(0)

    return (
      <div>
        <Router>
        <Navbar/>
         <LoadingBar
        color="#f11946"
        progress={progress}
      />
        <Routes>
          <Route path="/"element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={20} country="us" category="general" />}
          />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={20} country="us" category="business" />}
          />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={20} country="us" category="entertainment" />}
          />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={20} country="us" category="health" />}
          />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={20} country="us" category="general" />}
          />
          <Route path="/science"element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={20} country="us" category="science" />}
          />
          <Route path="/sports"element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={20} country="us" category="sports" />}
          />
          <Route path="/technology"element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={20} country="us" category="technology" />}
          />

        </Routes>
      </Router>
      </div>
    )
  }

  export default App;
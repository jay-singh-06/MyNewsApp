import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import News  from './components/News';
import LoadingBar from "react-top-loading-bar";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey=import.meta.env.VITE_NEWS_API;
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
     console.log("API KEY:", this.apiKey);
    return (
      <div>
        <Router>
        <Navbar/>
         <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
        <Routes>
          <Route path="/"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={20} country="us" category="general" />}
          />
          <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={20} country="us" category="business" />}
          />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={20} country="us" category="entertainment" />}
          />
          <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={20} country="us" category="health" />}
          />
          <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={20} country="us" category="general" />}
          />
          <Route path="/science"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={20} country="us" category="science" />}
          />
          <Route path="/sports"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={20} country="us" category="sports" />}
          />
          <Route path="/technology"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={20} country="us" category="technology" />}
          />

        </Routes>
      </Router>
      </div>
    )
  }
}

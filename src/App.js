import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Post from './components/Post';

function App() {

  return (
    <div className="App">
        <Header />
        <section className="App-main">
          <Post 
              nickname="Lorena " 
              avatar="https://pbs.twimg.com/profile_images/767829364847370244/n2PEnyCB_400x400.jpg" 
              caption=" In the nature!"
              image="https://wallpapercave.com/wp/NGD9aMj.jpg" />
            <Post 
              nickname="Tudor " 
              avatar="https://avatars0.githubusercontent.com/u/19284939?s=400&v=4" 
              caption=" Building the future"
              image="http://iao.nuaa.edu.cn/wp-content/uploads/2018/03/software-engineering-1024x683.jpg" />
        </section>
    </div>
  );
}

export default App;

// {"id":"17841402984536339","username":"lorena.tacal"}%  

// {"access_token": "IGQVJXb1JjNXg1YTlQcmNaQ0NsMFVxdTljamZAEcEZA6WG1SaUxNMXlYVjlUelU3MUZAWUWtKeXVCR3BteGVJd25RdVlqMmJ6NGxES3dqQTNiaWlhV3FGMUlDRnYybE9UV1ZA2cTJ4Ti1wNGdNYjVjSlRueFk2V0RfZAUQtYTNZA", "user_id": 17841402984536339}%
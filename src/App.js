import React from 'react';
import Header from './components/Header';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
        <Header />
        <section className="App-main">
          <Post 
            nickname="Lorena" 
            avatar="https://pbs.twimg.com/profile_images/767829364847370244/n2PEnyCB_400x400.jpg" 
            caption="In the nature!"
            image="https://wallpapercave.com/wp/NGD9aMj.jpg" />
        </section>
    </div>
  );
}

export default App;

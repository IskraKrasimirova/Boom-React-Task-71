import "./App.css";
import React, { useState, useEffect } from "react";
import Document from "./Document";

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
      .then(response => response.text())
      .then(response => setText(response))
  }, []);

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <Document title='Terms and Conditions' content={text} />
        </div>
      </div>
    </div>
  );
}

export default App;

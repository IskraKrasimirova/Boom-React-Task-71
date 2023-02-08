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
      <Document title="Terms and Conditions" content={text} />
    </div>
  );
}

export default App;

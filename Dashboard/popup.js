import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [cookies, setCookies] = useState({});

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getCookies" }, (response) => {
        setCookies(response.cookies);
      });
    });
  }, []);

  return (
    <div>
      <h1>Cookies</h1>
      <ul>
        {Object.keys(cookies).map((cookieName) => (
          <li key={cookieName}>
            <strong>{cookieName}</strong>: {cookies[cookieName].value}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
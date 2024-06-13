import React, { useState, useEffect } from 'react';

function CookieDashboard() {
  const [cookies, setCookies] = useState({});

  useEffect(() => {
    chrome.cookies.getAll({}, (cookies) => {
      setCookies(cookies);
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

export default CookieDashboard;
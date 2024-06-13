chrome.runtime.sendMessage({ action: "getCookies" }, (response) => {
  const cookieData = response.cookies;
  console.log("Cookie data:", cookieData);

  // You can now use the cookie data to display it on your dashboard
  // For example, you can create a table to display the cookie data
  const table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
    ${cookieData.map((cookie) => `
      <tr>
        <td>${cookie.name}</td>
        <td>${cookie.value}</td>
      </tr>
    `).join("")}
  `;
  document.body.appendChild(table);
});
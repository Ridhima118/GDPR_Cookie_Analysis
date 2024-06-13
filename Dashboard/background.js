chrome.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed: ${changeInfo.cookie.name}`);
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: "getCookies" });
});
import MyBrowser from "./MyBrowser";

const expandedFolders = ["/Common7", "/Common7/IDE", "/DIA SDK/bin/amd64"]; // Example paths to expand by default

function App() {
  return <MyBrowser expandedFolders={expandedFolders} />;
}

export default App;

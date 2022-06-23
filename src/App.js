import logo from "./logo.svg";
import usePosts from "./hooks/usePosts";
import useUsers from "./hooks/useUsers";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import SingleUser from "./pages/users/SingleUser/SingleUser";
// import Posts from "./pages/posts/index";
import Users from "./pages/users";
import Posts from "./pages/posts";

function App() {

  return (
    <main className="App">
      <header className="App-header">
        <h2>REACT EXAMPLE APP</h2>
        
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="user/:userId" element={<SingleUser />} />
      </Routes>
      {/* <header className="App-header">
        <h1>Table example</h1>
      </header> */}
      
    </main>
  );
}

export default App;

import { Body } from "./components/Body";
import Feed from "./components/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profiles from "./components/Profiles";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          {/* <Route path="/login" element={<div> Login Page</div>} /> */}
          <Route path="" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profiles />} />
          </Route>
        </Routes>
        {/* <Navbar /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import Header from "./Header";
import Content from "./Content";
import Popular from "./Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <> <Header /> <Content /> </>}>
            <Route  path="/trending" element={<> <Header /> <Content /> </>} />
            <Route  path="/popular" element={<> <Header /> <Popular /> </>} />
            <Route path="/toprated" element={ <> <Header /> <Content /> </>} />
            <Route path="/:id" element={ <> <Header /> <Content /> </>} />
            <Route path="/search" element={ <> <Header /> </>} />
          </Route>
          <Route path="signup" element={ <> <SignUp /> </>} />
          <Route path="Signin" element={ <> <SignIn /> </>} />
        </Routes>
      </Router>
    </>
  );
};

export default Home;

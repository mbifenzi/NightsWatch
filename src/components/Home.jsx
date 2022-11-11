
import Header from "./Header";
import Content from "./Content";
import Popular from "./Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import SecHeader from "./SecHeader";
import { GlobalState } from "../context/GlobalState";


const Error = () => {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};


const Home = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <> <Header /> <Content /> </>}>
            <Route path="/trending" element={<> <Header /> <Content /> </>} />
            <Route path="/popular" element={<> <Header /> <Popular /> </>} />
            <Route path="/toprated" element={ <> <Header /> <Content /> </>} />
            <Route path="/:id" element={ <> <Header /> <Content /> </>} />
            <Route path="/search" element={ <> <Header /> </>} />
          </Route>
          <Route path="signup" element={ <> <SignUp /> </>} />
          <Route path="Signin" element={ <> <SignIn /> </>} />
          <Route path="*" element={ <> <Header /> <Error /> </>} />
          <Route path="dashboard" element={ <> <SecHeader /> < Dashboard/></>} />
        </Routes>
      </Router>
    </>
  );
};

export default Home;

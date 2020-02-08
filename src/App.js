// import React from "react";
// import "./App.css";

// import Home from "./pages/Home";
// import Rooms from "./pages/Rooms";
// import SingleRoom from "./pages/SingleRoom";
// import Error from "./pages/Error";
// import { Route, Switch } from "react-router-dom";

// import Navbar from "./components/Navbar";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" componenet={Home} />
//         <Route exact path="/rooms" componenet={Rooms} />
//         <Route exact path="/rooms/:slug" componenet={SingleRoom} />
//         <Route component={Error} />
//       </Switch>
//     </>
//   );
// }

// export default App;

import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/rooms/" component={Rooms} />{" "}
        <Route exact path="/rooms/:slug" component={SingleRoom} />{" "}
      </Switch>{" "}
    </>
  );
}

export default App;

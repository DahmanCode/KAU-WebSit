import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/common/header/Header';
import Home from "./components/home/Home"
// import About from "./components/about/About"

function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/about' component={About} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
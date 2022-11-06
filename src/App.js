import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/common/header/Header';
import Home from "./components/home/Home"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Event from "./components/event/Event"
import Previous from './components/event/previous/Previous';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/event' component={Event} />
          <Route exact path='/previous' component={Previous} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/common/header/Header';
import Home from "./components/home/Home"
import About from "./components/about/About"
import Event from "./components/event/Event"
import News from "./components/news/News"
import Contact from "./components/contact/Contact"
import Previous from './components/event/previous/Previous';
import Upcoming from './components/event/upcoming/Upcoming';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/event' component={Event} />
          <Route exact path='/news' component={News} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/previous' component={Previous} />
          <Route exact path='/upcoming' component={Upcoming} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

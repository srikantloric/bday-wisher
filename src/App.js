import LandingPage from './components/LandingPage';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import SecondPage from './components/SecondPage';
import { AnimatePresence } from 'framer-motion';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <AnimatePresence initial={true} exitBeforeEnter>
      <Switch>
      <Route path="/" exact component = {LandingPage}></Route>
      <Route path="/second_page" exact component = {SecondPage}></Route>
      <Route path="/third_page" exact component = {MainPage}></Route>
      </Switch>
      </AnimatePresence>
    </Router>
   
  );
}

export default App;


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Iphone from './Pages/Iphone/Iphone';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import News from "./Components/AppleNews/News";
import "./css/bootstrap.css";
import "./css/styles.css";
import Productpage from "./Pages/Iphonepage/productpage";
import Four04 from "./Pages/Four04/Four04";
import Youtube from "./Components/Youtube/Youtube";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />     
          
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/" component={Four04} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import { FC } from "react";
import Homepage from "./Homepage";
import Checkoutpage from "./Checkoutpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App: FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/checkoutpage" component={Checkoutpage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

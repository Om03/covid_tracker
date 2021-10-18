import Card from "./Components/Card";
import Table from "./Table_format/Table";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Card />
        </Route>
        <Route exact path="/table-view">
          <Table />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

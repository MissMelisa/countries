import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CountriesPage from "./Pages/CountriesPage";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QueryClientProvider client={queryClient}>
          <Router>
            <Switch>
              <Route path="/" exact />

              <Route path="/home" exact>
                <CountriesPage />
              </Route>
            </Switch>
          </Router>
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;

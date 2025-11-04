import { Route, Switch, Router } from "wouter";
import Home from "./pages/Home";
import Presentations from "./pages/Presentations";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

// GitHub Pages 子路径部署的 base path
const basePath = import.meta.env.BASE_URL;

function App() {
  return (
    <Router base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/presentations" component={Presentations} />
        <Route path="/resources" component={Resources} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route>404 - Page Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;


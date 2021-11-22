import { Router, Switch, Route } from "react-router";
import Post from "./components/Post/Post.jsx";
import Detail from "./components/Detail/Detail.jsx";
import AddPost from "./components/AddPost/AddPost.jsx";

import { createBrowserHistory } from "history";
import EditPost from "./components/EditPost/EditPost.jsx";
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Post} />
        <Route exact path="/post/detail/:id" component={Detail} />
        <Route exact path="/post/addpost" component={AddPost} />
        <Route exact path="/post/edit/:id" component={EditPost} />
      </Switch>
    </Router>
  );
}

export default App;

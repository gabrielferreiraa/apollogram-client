import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./containers/Header";
import Login from "./containers/Login";
import Feed from "./containers/Feed";
import CreatePostModal from "./containers/CreatePostModal";
import CreateUser from "./containers/CreateUser";
import useAuth from "./hooks/useAuth";

const PrivateRoutes = ({ children }: any) => {
  const { logged } = useAuth();

  if (!logged) return <Redirect to="/" />;

  return children;
};

function App() {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = React.useState(
    false
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/create-user" component={CreateUser} />
        <PrivateRoutes>
          <Header
            onOpenCreatePostModal={() => setIsCreatePostModalOpen(true)}
          />
          <CreatePostModal
            isOpen={isCreatePostModalOpen}
            onClose={() => setIsCreatePostModalOpen(false)}
          />
          <Route exact path="/feed" component={Feed} />
        </PrivateRoutes>
      </Switch>
    </Router>
  );
}

export default App;

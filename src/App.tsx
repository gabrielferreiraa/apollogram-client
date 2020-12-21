import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./containers/Login";
import Feed from "./containers/Feed";
import CreatePostModal from "./containers/CreatePostModal";
import UpdateUserModal from "./containers/UpdateUserModal";
import CreateUser from "./containers/CreateUser";
import useAuth from "./hooks/useAuth";
import Header from "components/Header";
import { CurrentUserProvider } from "contexts/UserContext";

const PrivateRoutes = ({ children }: any) => {
  const { logged } = useAuth();

  if (!logged) return <Redirect to="/" />;

  return children;
};

function App() {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [isUpdateUserModalOpen, setIsUpdateUserModalOpen] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/create-user" component={CreateUser} />
          <PrivateRoutes>
            <CurrentUserProvider>
              <CreatePostModal
                isOpen={isCreatePostModalOpen}
                handleClose={() => setIsCreatePostModalOpen(false)}
              />
              <UpdateUserModal
                isOpen={isUpdateUserModalOpen}
                handleClose={() => setIsUpdateUserModalOpen(false)}
              />
              <Header
                onOpenCreatePostModal={() => setIsCreatePostModalOpen(true)}
                onOpenUpdateUserModal={() => setIsUpdateUserModalOpen(true)}
              />
              <Route exact path="/feed" component={Feed} />
            </CurrentUserProvider>
          </PrivateRoutes>
        </Switch>
      </Router>
    </>
  );
}

export default App;

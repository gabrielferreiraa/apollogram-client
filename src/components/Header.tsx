import React from "react";
import {
  Alignment,
  Button,
  Classes,
  Position,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  Popover,
  Menu,
  MenuItem,
} from "@blueprintjs/core";

import useAuth from "hooks/useAuth";
import Avatar from "components/Avatar";
import { useCurrentUser } from "contexts/UserContext";
import { User } from "./Header.styles";

interface HeaderProps {
  onOpenCreatePostModal(): void;
  onOpenUpdateUserModal(): void;
}
const Header: React.FC<HeaderProps> = ({
  onOpenCreatePostModal,
  onOpenUpdateUserModal,
}) => {
  const { me } = useCurrentUser();
  const { logout } = useAuth();

  return (
    <header>
      <Navbar>
        <NavbarGroup>
          <User>
            {me && (
              <>
                <Avatar src={me.picture} />
                <strong>Welcome, {me.name}</strong>
              </>
            )}
          </User>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button
            className={Classes.MINIMAL}
            icon="add"
            onClick={onOpenCreatePostModal}
          />
          <NavbarDivider />
          <Popover
            content={
              <Menu>
                <MenuItem
                  icon="edit"
                  text="Edit Profile"
                  onClick={onOpenUpdateUserModal}
                />
                <MenuItem icon="log-out" text="Log out" onClick={logout} />
              </Menu>
            }
            position={Position.BOTTOM_LEFT}
          >
            <Button className={Classes.MINIMAL} icon="user" />
          </Popover>
        </NavbarGroup>
      </Navbar>
    </header>
  );
};

export default Header;

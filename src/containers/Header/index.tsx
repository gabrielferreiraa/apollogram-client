import React from "react";
import { useQuery } from "@apollo/client";
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

import useAuth from "../../hooks/useAuth";
import { GET_AUTENTICATED_USER } from "./gql";
import { User } from "./Header.styles";
import Avatar from "../../components/Avatar";
import { GetAutenticatedUserQuery } from "./__generated__/GetAutenticatedUserQuery";

interface HeaderProps {
  onOpenCreatePostModal(): void;
}
const Header: React.FC<HeaderProps> = ({ onOpenCreatePostModal }) => {
  const { logout } = useAuth();

  const { data } = useQuery<GetAutenticatedUserQuery>(GET_AUTENTICATED_USER);

  return (
    <header>
      <Navbar>
        <NavbarGroup>
          <User>
            {data?.getAutenticatedUser && (
              <>
                <Avatar src={data.getAutenticatedUser.picture} />
                <strong>Welcome, {data.getAutenticatedUser.name}</strong>
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
                <MenuItem icon="edit" text="Edit Profile" />
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

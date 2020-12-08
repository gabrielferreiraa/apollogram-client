import React from "react";
import { useMutation } from "@apollo/client";
import {
  Card,
  H5,
  Text,
  Button,
  Spinner,
  Popover,
  Menu,
  MenuItem,
  Position,
} from "@blueprintjs/core";

import NotFound from "./NotFound";
import { PostUser } from "./Posts.styles";
import Avatar from "../../components/Avatar";
import { DELETE_POST, GET_ALL_POSTS, GET_LOGGED_USER_POSTS } from "./gql";
import { Post } from "../../fragments/__generated__/Post";
import {
  DeletePostMutation,
  DeletePostMutationVariables,
} from "./__generated__/DeletePostMutation";

type PostsProps = {
  data?: Post[] | null;
  loading: boolean;
};
const Posts: React.FC<PostsProps> = ({ data, loading = true }) => {
  const [deletePost] = useMutation<
    DeletePostMutation,
    DeletePostMutationVariables
  >(DELETE_POST, {
    refetchQueries: [
      { query: GET_ALL_POSTS },
      { query: GET_LOGGED_USER_POSTS },
    ],
  });

  if (loading) return <Spinner intent="primary" />;
  if (!data || data.length <= 0) return <NotFound />;

  return (
    <ul>
      {data.map((post: Post) => (
        <li key={post.id}>
          <Card interactive>
            <Popover
              content={
                <Menu>
                  <MenuItem
                    icon="trash"
                    text="Delete"
                    onClick={() =>
                      deletePost({
                        variables: { id: post.id },
                      })
                    }
                  />
                </Menu>
              }
              position={Position.RIGHT}
            >
              <Button icon="more" minimal />
            </Popover>
            <PostUser>
              <Avatar src={post.user.picture} />
              <Text>
                <strong>{post.user.name}</strong>
              </Text>
            </PostUser>
            <H5>{post.title}</H5>
            <Text>
              {post.content.length > 250
                ? post.content.slice(0, 250) + "..."
                : post.content}
            </Text>
            {post.content.length > 250 && (
              <Button intent="primary" outlined>
                ver tudo
              </Button>
            )}
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Posts;

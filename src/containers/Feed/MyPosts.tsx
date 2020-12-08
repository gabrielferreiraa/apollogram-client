import React from "react";
import { useQuery } from "@apollo/client";

import Posts from "./Posts";
import { GET_LOGGED_USER_POSTS } from "./gql";
import { GetLoggedUserPostsQuery } from "./__generated__/GetLoggedUserPostsQuery";

const AllPosts: React.FC = () => {
  const { loading, data } = useQuery<GetLoggedUserPostsQuery>(
    GET_LOGGED_USER_POSTS
  );
  return <Posts data={data?.getLoggedUserPosts} loading={loading} />;
};

export default AllPosts;

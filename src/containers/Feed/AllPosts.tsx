import React from "react";
import { useQuery } from "@apollo/client";

import Posts from "./Posts";
import { GET_ALL_POSTS } from "./gql";
import { GetAllPostsQuery } from "./__generated__/GetAllPostsQuery";

const AllPosts: React.FC = () => {
  const { loading, data } = useQuery<GetAllPostsQuery>(GET_ALL_POSTS);
  return <Posts data={data?.getAllPosts} loading={loading} />;
};

export default AllPosts;

import React from "react";

import Posts from "./Posts";
import { GetAllPosts_posts } from "./__generated__/GetAllPosts";

interface AllPostsProps {
  data?: GetAllPosts_posts[];
  loading: boolean;
}
const AllPosts: React.FC<AllPostsProps> = ({ data, loading }) => {
  return <Posts data={data} loading={loading} />;
};

export default AllPosts;

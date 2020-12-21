import React from "react";

import Posts from "./Posts";
import { GetCurrentUserPosts_posts } from "./__generated__/GetCurrentUserPosts";

interface MyPostsProps {
  data?: GetCurrentUserPosts_posts[];
  loading: boolean;
}
const MyPosts: React.FC<MyPostsProps> = ({ data, loading }) => {
  return <Posts data={data} loading={loading} />;
};

export default MyPosts;

import React from "react";
import { useQuery } from "@apollo/client";
import { Tab } from "@blueprintjs/core";

import { useCurrentUser } from "contexts/UserContext";
import AllPosts from "./AllPosts";
import MyPosts from "./MyPosts";
import { GetAllPosts } from "./__generated__/GetAllPosts";
import {
  GetCurrentUserPosts,
  GetCurrentUserPostsVariables,
} from "./__generated__/GetCurrentUserPosts";
import { GET_ALL_POSTS, GET_CURRENT_USER_POSTS } from "./gql";
import { FeedContainer, StyledTabs } from "./Feed.styles";

enum Tabs {
  AllPosts = "all-posts",
  MyPosts = "my-posts",
}

const Feed: React.FC = () => {
  const [tab, setTab] = React.useState<Tabs>(Tabs.AllPosts);
  const { me } = useCurrentUser();

  const { data: allPosts, loading: allPostsLoading } = useQuery<GetAllPosts>(
    GET_ALL_POSTS
  );
  const { data: currentUserPosts, loading: currentUserPostsLoading } = useQuery<
    GetCurrentUserPosts,
    GetCurrentUserPostsVariables
  >(GET_CURRENT_USER_POSTS, {
    skip: !me?.id,
    variables: {
      user: me ? me.id : "",
    },
  });

  return (
    <FeedContainer>
      <StyledTabs
        onChange={(tab: Tabs) => setTab(tab)}
        defaultSelectedTabId={Tabs.AllPosts}
        selectedTabId={tab}
        renderActiveTabPanelOnly
        large
        animate
      >
        <Tab
          id={Tabs.AllPosts}
          title="All Posts"
          panel={<AllPosts data={allPosts?.posts} loading={allPostsLoading} />}
        />
        <Tab
          id={Tabs.MyPosts}
          title="My Posts"
          panel={
            <MyPosts
              data={currentUserPosts?.posts}
              loading={currentUserPostsLoading}
            />
          }
        />
      </StyledTabs>
    </FeedContainer>
  );
};

export default Feed;

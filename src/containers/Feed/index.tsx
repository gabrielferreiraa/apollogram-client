import React from "react";
import { Tab } from "@blueprintjs/core";

import { FeedContainer, StyledTabs } from "./Feed.styles";
import AllPosts from "./AllPosts";
import MyPosts from "./MyPosts";

enum Tabs {
  AllPosts = "all-posts",
  MyPosts = "my-posts",
}

const Feed: React.FC = () => {
  const [tab, setTab] = React.useState<Tabs>(Tabs.AllPosts);

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
        <Tab id={Tabs.AllPosts} title="All Posts" panel={<AllPosts />} />
        <Tab id={Tabs.MyPosts} title="My Posts" panel={<MyPosts />} />
      </StyledTabs>
    </FeedContainer>
  );
};

export default Feed;

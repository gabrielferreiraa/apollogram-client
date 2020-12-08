import styled from "styled-components";
import { Tabs as BPTabs } from "@blueprintjs/core";

export const FeedContainer = styled.main`
  ul {
    list-style-type: none;
    padding: 0;
    width: 600px;
    margin: 0.5em auto;

    li {
      margin-bottom: 1em;
    }

    @media screen and (max-width: 768px) {
      margin: 1em;
      width: calc(100% - 2em);
    }
  }
`;

export const StyledTabs = styled<any>(BPTabs)`
  .bp3-tab-list {
    margin: 1em auto;
    justify-content: center;
  }
`;

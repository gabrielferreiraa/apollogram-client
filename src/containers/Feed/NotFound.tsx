import styled from "styled-components";
import { Text, Icon } from "@blueprintjs/core";

const Container = styled.div`
  margin: 10px auto;
  display: block;
  text-align: center;
`;

const NotFound: React.FC = () => (
  <Container>
    <Text>
      <Icon icon="error" /> You don't have posts yet
    </Text>
  </Container>
);

export default NotFound;

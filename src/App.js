import { Button } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";
import { useMoralis } from "react-moralis";
import { Auth } from "./Auth";
function App() {
  const { isAuthenticated, logout, user } = useMoralis();
  console.log(user);
  if (isAuthenticated) {
    return (
      <Container>
        <Heading textAlign="center">
          Welcome to the Twitter Clone, {user.attributes.username}
        </Heading>
        <Button onClick={() => logout()}>Logout</Button>
      </Container>
    );
  } else {
    return (
      <Container>
        <Heading mb={6} textAlign="center">
          Welcome to the Twitter Clone
        </Heading>
        <Auth />
      </Container>
    );
  }
}

export default App;

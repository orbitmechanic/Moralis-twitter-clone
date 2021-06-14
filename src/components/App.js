import { Box, Button, Avatar } from "@chakra-ui/react";
import { Container, Heading, Flex, Spacer } from "@chakra-ui/layout";
import { useMoralis, ByMoralis } from "react-moralis";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Auth } from "./Blocks/Auth";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";

function App() {
  const { isAuthenticated, isAuthUndefined, logout, user } = useMoralis();
  return (
    <Container>
      <Flex my={6}>
        <Link to="/">
          <Heading>Home</Heading>
        </Link>
        <Spacer />
        {isAuthenticated && (
          <Link to="/profile">
            <Avatar name={user ? user.attributes.username : "?"} />
          </Link>
        )}
      </Flex>
      <Heading mb={6} textAlign="center">
        Welcome to the Twitter Clone,{" "}
        {user ? user.attributes.username : " authenticate please..."}
      </Heading>
      {isAuthenticated ? (
        <Box>
          <Button onClick={() => logout()}>Logout</Button>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
          </Switch>
        </Box>
      ) : (
        <>
          {!isAuthUndefined && <Redirect to="/" />}
          <Auth />
        </>
      )}
      <Box mt={6}>
        <ByMoralis />
      </Box>
    </Container>
  );
}

export default App;

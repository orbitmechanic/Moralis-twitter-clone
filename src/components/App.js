import {
  Avatar,
  Box,
  Button,
  Center,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { Flex, Heading, Spacer, HStack, VStack } from "@chakra-ui/layout";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useMoralis, ByMoralis } from "react-moralis";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Auth } from "./Blocks/Auth";
import { Dashboard } from "./Pages/Dashboard";
import { Trade } from "./Pages/Trade";
import { SendReceive } from "./Pages/SendReceive";
import { Invest } from "./Pages/Invest";
import { Guides } from "./Pages/Guides";
import { Profile } from "./Pages/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuthenticated, isAuthUndefined, logout, user } = useMoralis();
  return (
    <Flex
      height="100vh"
      direction="column"
      justifyContent="center"
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,blue.300,white,red.300)"
          : "linear(to-r,blue.900,black,red.900)"
      }
    >
      <VStack my={6}>
        {isAuthenticated ? (
          <HStack>
            <HStack>
              <Link to="/">
                <Button boxShadow="dark-lg" bg="blue">
                  Dashboard
                </Button>
              </Link>
              <Link to="/trade">
                <Button boxShadow="dark-lg" bg="blue">
                  Trade
                </Button>
              </Link>
              <Link to="/sendreceive">
                <Button boxShadow="dark-lg" bg="red">
                  Send/Receive
                </Button>
              </Link>
              <Link to="/invest">
                <Button boxShadow="dark-lg" bg="red">
                  Invest
                </Button>
              </Link>
              <Link to="/guides">
                <Button boxShadow="dark-lg" bg="blue">
                  Guides
                </Button>
              </Link>
              <IconButton
                aria-label="Toggle Darkmode"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                boxShadow="dark-lg"
                onClick={toggleColorMode}
              />
            </HStack>
            <Spacer />
            <HStack>
              <Button boxShadow="dark-lg" onClick={() => logout()}>
                Logout
              </Button>
              <Link to="/profile">
                <Avatar
                  boxShadow="dark-lg"
                  name={user ? user.attributes.username : "?"}
                />
              </Link>
            </HStack>
          </HStack>
        ) : (
          <Heading mb="15px">Welcome!</Heading>
        )}
        {/* <Heading mb={6} textAlign="center">
        Welcome to the Twitter Clone,{" "}
        {user ? user.attributes.username : " authenticate please..."}
      </Heading> */}
        {isAuthenticated ? (
          <Box>
            <Switch>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route path="/trade" exact>
                <Trade />
              </Route>
              <Route path="/sendreceive" exact>
                <SendReceive />
              </Route>
              <Route path="/invest" exact>
                <Invest />
              </Route>
              <Route path="/guides" exact>
                <Guides />
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
        <Spacer />
        {/* <Center mt={60}>
          <ByMoralis />
        </Center> */}
      </VStack>
    </Flex>
  );
}

export default App;

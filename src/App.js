import {
  Button,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";
import { useMoralis } from "react-moralis";

function App() {
  const { authenticate, isAuthenticated, isAuthenticating, authError, logout } =
    useMoralis();

  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome to the twitter clone</Heading>
        <Button onClick={() => logout()}>Log Out</Button>
      </Container>
    );
  }

  return (
    <Container>
      Twitter Clone
      {authError && (
        <Alert status="error">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Authentication has failed.</AlertTitle>
            <AlertDescription display="block">
              {authError.message}
            </AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
        Authenticate
      </Button>
    </Container>
  );
}

export default App;

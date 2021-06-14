import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import { ErrorBox } from "../Support/Error";

const SignUp = () => {
  const { signup } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Stack spacing={3}>
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button onClick={() => signup(email, password, email)}>Sign up</Button>
    </Stack>
  );
};

const LogIn = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Stack spacing={3}>
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button onClick={() => login(email, password)}>LogIn</Button>
    </Stack>
  );
};

export const Auth = () => {
  const { authenticate, isAuthenticating, authError } = useMoralis();
  return (
    <Stack spacing={6}>
      {authError && (
        <ErrorBox
          title="Authentication has failed."
          message={authError.message}
        />
      )}
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
        Authenticate via MetaMask
      </Button>
      <Text textAlign="center">
        <em>or</em>
      </Text>
      <SignUp />
      <Text textAlign="center">
        <em>or</em>
      </Text>
      <LogIn />
    </Stack>
  );
};
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { ErrorBox } from "./Error";

export const Profile = () => {
  const { user, setUserData, userError, isUserUpdating } = useMoralis();

  const [username, setUserName] = useState(user.attributes.username);
  const [email, setEMail] = useState(user.attributes.email);
  const [password, setPassWord] = useState("");

  const handleSave = () => {
    setUserData({
      username,
      email,
      password: password === "" ? undefined : password,
    });
  };

  return (
    <Box>
      <Stack spacing={3}>
        {userError && (
          <ErrorBox
            title="User data update failed."
            message={userError.message}
          />
        )}
        <Box>
          <Text>User Name</Text>
          <Input
            value={username}
            onChange={(event) => setUserName(event.currentTarget.value)}
          />
        </Box>
        <Box>
          <Text>E-Mail</Text>
          <Input
            value={email}
            onChange={(event) => setEMail(event.currentTarget.value)}
          />
        </Box>
        <Box>
          <Text>Password</Text>
          <Input
            value={password}
            onChange={(event) => setPassWord(event.currentTarget.value)}
          />
        </Box>
        <Button onClick={handleSave} isLoading={isUserUpdating}>
          Save Changes
        </Button>
      </Stack>
    </Box>
  );
};

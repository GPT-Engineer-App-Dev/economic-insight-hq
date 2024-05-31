import { Box, Button, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const World = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>World Page</Text>
      <Button as={RouterLink} to="/" colorScheme="blue">Back to Home</Button>
    </Box>
  );
};

export default World;
import { Box, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Market Updates
      </Text>
      <VStack align="start">
        <Text>Stock A: $100</Text>
        <Text>Stock B: $200</Text>
        <Text>Stock C: $300</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;
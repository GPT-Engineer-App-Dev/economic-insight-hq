import { Box, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Market Updates</Text>
      <VStack align="start">
        <Text>Stock Market: Up 1.2%</Text>
        <Text>Gold: $1,800</Text>
        <Text>Oil: $70</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;
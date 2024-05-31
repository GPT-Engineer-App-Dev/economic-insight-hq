import { Box, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Text fontWeight="bold" fontSize="xl" mb={4}>
        Market Updates
      </Text>
      <VStack align="start" spacing={2}>
        <Text>Dow Jones: 34,000.00</Text>
        <Text>NASDAQ: 14,000.00</Text>
        <Text>S&P 500: 4,500.00</Text>
        <Text>FTSE 100: 7,000.00</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;
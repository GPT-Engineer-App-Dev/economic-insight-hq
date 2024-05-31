import { Container, Flex, Box, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" mt={4}>
        <Flex direction={{ base: "column", md: "row" }} spacing={4}>
          <Box flex="3">
            <VStack spacing={4}>
              <ArticleCard
                title="Breaking News: Market Hits Record High"
                description="The stock market reached a new high today with major indices showing significant gains."
                imageUrl="https://via.placeholder.com/400"
              />
              <ArticleCard
                title="Global Economy: Trends to Watch"
                description="Experts discuss the key trends that will shape the global economy in the coming years."
                imageUrl="https://via.placeholder.com/400"
              />
            </VStack>
          </Box>
          <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
            <Sidebar />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
import { Container, Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" mt={4}>
        <Flex direction={{ base: "column", md: "row" }} spacing={4}>
          <Box flex="3" mr={{ md: 4 }}>
            <ArticleCard
              title="Breaking News: Market Hits Record Highs"
              description="The stock market reached new heights today as investors reacted positively to the latest economic data."
              imageUrl="https://via.placeholder.com/800x400"
            />
            <ArticleCard
              title="Global Trade: New Agreements Signed"
              description="Several countries have signed new trade agreements aimed at boosting economic growth and cooperation."
              imageUrl="https://via.placeholder.com/800x400"
            />
          </Box>
          <Box flex="1">
            <Sidebar />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
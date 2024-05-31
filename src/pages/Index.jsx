import { Container, Grid, GridItem, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" mt={4}>
        <Grid templateColumns={{ base: "1fr", md: "3fr 1fr" }} gap={4}>
          <GridItem>
            <VStack spacing={4}>
              <ArticleCard
                title="Breaking News: Market Hits Record High"
                description="The stock market reached an all-time high today with major indices showing significant gains."
                imageUrl="https://via.placeholder.com/400"
              />
              <ArticleCard
                title="Global Economy: Trends to Watch"
                description="Experts discuss the key trends that will shape the global economy in the coming years."
                imageUrl="https://via.placeholder.com/400"
              />
            </VStack>
          </GridItem>
          <GridItem>
            <Sidebar />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Index;
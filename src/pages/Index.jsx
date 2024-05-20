import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our SaaS Startup
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Revolutionizing the way you manage your business with our cutting-edge solutions.
        </Text>
        <Button
          rightIcon={<FaRocket />}
          colorScheme="teal"
          variant="solid"
          size="lg"
        >
          Get Started
        </Button>
        <Box boxSize="sm">
          <Image src="/path-to-your-image.jpg" alt="SaaS Startup" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
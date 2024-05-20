import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our SaaS Startup
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Revolutionizing the way you manage your business with cutting-edge technology and innovative solutions.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
      <Box mt={10}>
        <Image src="/path-to-your-image.jpg" alt="SaaS Startup" borderRadius="md" />
      </Box>
      <Flex mt={10} direction="column" align="center">
        <Heading as="h2" size="lg" mb={4}>
          Features
        </Heading>
        <VStack spacing={4}>
          <Text>Feature 1: Innovative Solutions</Text>
          <Text>Feature 2: User-Friendly Interface</Text>
          <Text>Feature 3: 24/7 Customer Support</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
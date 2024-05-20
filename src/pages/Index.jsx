import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="full">
        <Heading as="h1" size="2xl" textAlign="center" color="brand.800">
          Welcome to Our SaaS Startup
        </Heading>
        <Text fontSize="xl" textAlign="center" color="gray.600">
          Revolutionizing the way you manage your business with our cutting-edge solutions.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
      <Box mt={10} width="full">
        <Image src="/images/saas-illustration.png" alt="SaaS Illustration" />
      </Box>
      <Flex mt={10} direction="column" align="center" width="full">
        <Heading as="h2" size="lg" mb={6} color="brand.700">
          Features
        </Heading>
        <VStack spacing={4} align="start">
          <Flex align="center">
            <FaCheckCircle size="24px" color="teal" />
            <Text ml={2} fontSize="lg" color="gray.700">Feature 1: Real-time Analytics</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" color="teal" />
            <Text ml={2} fontSize="lg" color="gray.700">Feature 2: Seamless Integration</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" color="teal" />
            <Text ml={2} fontSize="lg" color="gray.700">Feature 3: User-friendly Interface</Text>
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
import { Container, Heading, Stack } from "@chakra-ui/react";

export default function Landing() {
  return (
    <Container h="100%">
      <Stack h="100%" py={6} spacing={6} align="center">
        <Heading as="h1" textAlign={"center"}>
          Welcome to ReadME Generator
        </Heading>
      </Stack>
    </Container>
  );
}

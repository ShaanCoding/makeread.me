// chakra ui navbar

import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import useMe from "../hooks/useMe";

// Path: packages\frontend\src\components\Navbar.tsx

export default function Navbar() {
  const { data, isError } = useMe();
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Flex
        bg={colorMode === "light" ? "gray.100" : "gray.900"}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}
        >
          <Link to="/">
            <Stack
              // flex={{ base: 1 }}
              // justify={{ base: "center", md: "start" }}
              // alignItems={"center"}
              direction={"row"}
              spacing={4}
              alignItems={"center"}
            >
              {/* Image */}
              <Image
                src={logo}
                alt="react"
                width="50px"
                height="50px"
                // link
              />
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                fontWeight={"semibold"}
              >
                ReadMe Generator
              </Text>
            </Stack>
          </Link>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href="/docs"
          >
            Docs
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

const DarkLightModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", colorMode);
  }, [colorMode]);

  return (
    <Box position="fixed" bottom="0" right="0" zIndex="999" p="8">
      {colorMode === "light" ? (
        <IconButton
          my="20px"
          isRound
          color="gray.800"
          aria-label="Toggle dark mode"
          icon={<MoonIcon />}
          variant="outline"
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          my="20px"
          isRound
          color="yellow.500"
          aria-label="Toggle light mode"
          icon={<SunIcon />}
          variant="outline"
          onClick={toggleColorMode}
        />
      )}
    </Box>
  );
};

export default DarkLightModeToggle;

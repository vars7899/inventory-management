import { Box, Stack, Skeleton } from "@chakra-ui/react";
import React from "react";

const CustomLoaderSkeleton = () => {
  const numberOfSkeleton = Array.from({ length: 10 }, (_, i) => i);
  return (
    <Box width="100%">
      <Stack>
        {numberOfSkeleton.map((_, index) => (
          <Skeleton
            key={`skeleton-${index}`}
            height={{ base: "30px", xl: "50px" }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default CustomLoaderSkeleton;

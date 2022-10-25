import React from "react";

import { Box, Typography } from "@mui/material";
import CustomCard from "../components/Card";

const ListAndKeys = () => {
  const posts = [
    { id: 1, name: "August Amund" },
    { id: 2, name: "Derryl Anna" },
    { id: 3, name: "Haruna Evgeni" },
  ];

  return (
    <>
      <Typography variant="h4" sx={{ color: "white", marginY: 5 }}>
        Príspevky
      </Typography>
      <Box sx={{ overflowY: "scroll", marginBottom: 5 }}>
        {posts.map((post) => (
          <CustomCard key={post.id} name={post.name} />
        ))}
      </Box>
    </>
  );
};

export default ListAndKeys;

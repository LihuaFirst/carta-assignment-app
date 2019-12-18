import React from 'react';
import { Box } from "gestalt";

const ModalContent = ({ item }) => (
      <Box padding={2}>
         <h1>{item.name}</h1>
         <p>{item.id}</p>
         <p>{item.address}</p>
      </Box>

);

export default ModalContent;
import React from 'react';
import { Box } from "gestalt";
import styles from './ModalContent.module.css';

const ModalContent = ({ item }) => (
      <Box>
            <h2 className={styles['modal-title']}>{item.name}</h2>

            <Box
                  alignItems="center"
                  direction="row"
                  display="flex"
                  marginStart={-1}
                  marginEnd={-1}
            >
                  <Box paddingX={1}>
                        <div className={styles['modal-image-wrapper']}>
                              <img src={item.category_icon}
                                    alt={item.category}
                                    title={item.category}
                                    className={styles['modal-image']} />
                        </div>
                  </Box>
                  <Box paddingX={1} flex="grow">
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Address:</strong> {item.address}</p>
                  </Box>
            </Box>


      </Box>

);

export default ModalContent;
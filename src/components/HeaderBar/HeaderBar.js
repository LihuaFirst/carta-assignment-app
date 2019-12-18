import React from 'react';
import { Box, Icon, Heading } from "gestalt";
import styles from './HeaderBar.module.css';

const HeaderBar = (props) => {
    return (
        <header className={styles['header']}>
            <div className={styles['header-wrapper']}>
                <Box padding={3}
                    color="white"
                    shape="rounded"
                    display="flex"
                    direction="row"
                    alignItems="center"
                >
                    <Box>
                        <Icon
                            color="red"
                            icon="location"
                            size={32}
                            accessibilityLabel="location">
                        </Icon>
                    </Box>

                    <Box padding={3}>
                        <Heading size="xs" accessibilityLevel={1}>Places Pin</Heading>
                    </Box>
                    {props.children}
                </Box>
            </div>
        </header>
    );
}

export default HeaderBar;
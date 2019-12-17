import React from 'react';
import {Box, Container, Text} from 'gestalt';

class FooterContainer extends React.Component {
    render() {
        return(
            <Box padding={3} >
                <Container>
                    <Box color="white" padding={3}>
                        <Text align="center">Copyright © Lihua First 2019</Text>
                    </Box>
                </Container>

            </Box>
        );
    }
}

export default FooterContainer;
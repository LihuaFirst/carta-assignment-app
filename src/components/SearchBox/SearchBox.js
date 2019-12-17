import React from 'react';
import { Box, SearchField } from "gestalt";
//import styles from './SearchBox.module.css';

class SearchBox extends React.Component {
   constructor(props) {
      super(props);
      const { query } = this.props;
      
      this.state = {
         query: query || ''
      }

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
      let input = e.value;     
      console.log(e); 
      this.setState({ query: input  });

      if(input) {
         this.props.onSearchChanged(input);
      }
  }

   render() {
      const { query } = this.state;

      return (
         <Box padding={3}>
            <SearchField
               accessibilityLabel="search field"
               id="searchField"
               onChange={this.handleChange}
               placeholder="Search places nearby..."
               value={query}
            />
      </Box>
      );
   }
}

export default SearchBox;
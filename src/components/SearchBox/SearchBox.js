import React from 'react';
import { Box, SearchField } from "gestalt";
//import styles from './SearchBox.module.css';

class SearchBox extends React.Component {
   constructor(props) {
      super(props);
      const { location, query } = this.props;

      this.state = {
         query: query || '',
         location: location || ''
      }

      this.handleCityChange = this.handleCityChange.bind(this);
      this.handleQueryChange = this.handleQueryChange.bind(this);
   }

   handleCityChange(e) {
      let input = e.value;
      console.log(e);
      this.setState({ location: input });

      if (input) {
         this.props.onSearchCityChanged(input);
      }
   }

   handleQueryChange(e) {
      let input = e.value;
      this.setState({ query: input });      
      this.props.onSearchQueryChanged(input);
   }

   render() {
      const { location, query } = this.state;

      return (
         <Box display="flex" direction="row" alignItems="center">
            <Box padding={2}>
               <SearchField
                  accessibilityLabel="search by city"
                  id="searchCity"
                  onChange={this.handleCityChange}
                  placeholder="Search by city"
                  value={location}
               />
            </Box>

            <Box>
               <SearchField
                  accessibilityLabel="search by keyword"
                  id="searchKeyword"
                  onChange={this.handleQueryChange}
                  placeholder="Search by keyword"
                  value={query}
               />
            </Box>
         </Box>
      );
   }
}

export default SearchBox;
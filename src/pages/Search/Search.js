import React from 'react';
import axios from 'axios';
import { FOURSQUARE_API_URL } from '../../services/api/foursqure_api.js';
import normalize from '../../services/normalize/normalize';
import formatDate from '../../services/date/date_formats.js';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import SearchBox from '../../components/SearchBox/SearchBox';
import Gallery from '../../components/Gallery/Gallery';
import styles from './Search.module.css';
import { debounce } from 'lodash';

class Search extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         location: 'Palo Alto',
         query: 'Restaurant',
         assets: [],
         isLoading: true
      };
      this.onSearchCityChanged = this.onSearchCityChanged.bind(this);
      this.onSearchQueryChanged = this.onSearchQueryChanged.bind(this);
   }

   componentDidMount() {
      //console.log(this.state);
      this.searchAsset(this.state.location, this.state.query);
   }

   searchAsset = debounce((location, query) => {
   //searchAsset = (location, query) => {
      this.setState({ isLoading: true });
      //console.log(this.state);

      const version = formatDate.yyyymmdd(new Date());
      const limit = 50; 
      const query_param = (query) ? '&query='+query :'';
      
      axios.get(`${FOURSQUARE_API_URL}&v=${version}&limit=${limit}&near=${location}${query_param}`)
         .then(response => {
            //console.log(response.data.response.venues);          
            this.setState({ isLoading: false });
            this.setState({ assets: normalize.search(response.data.response.venues) });
         })
         .catch(error => {
            this.setState({ isLoading: false });
         })
   //}
   }, 500);

   onSearchCityChanged(location) {
      this.setState({ location });
      this.searchAsset(location, this.state.query);
   }

   onSearchQueryChanged(query) {
      this.setState({ query });
      this.searchAsset(this.state.location, query);
   }

   render() {
      const { location, query, assets, isLoading } = this.state;

      const displayContent = () => {
         if (isLoading) {
            return (
               <p>Loading</p>
            );
         }

         if (assets.length > 0) {
            //console.log(assets);
            return (
               <Gallery>
                  {assets}
               </Gallery>
            );
         }

         if (assets.length === 0) {
            return (
               <p>Opps, no data </p>
            );
         }
      }

      return (
         <div className={styles['search-wrapper']}>
            <div className={styles['search-header']}>
               <HeaderBar>
                  <SearchBox location={location} 
                           query={query}
                           onSearchCityChanged={this.onSearchCityChanged}
                           onSearchQueryChanged = {this.onSearchQueryChanged} />
               </HeaderBar>
            </div>
            <div className={styles['search-content']}>
               {displayContent()}
            </div>
         </div>
      );
   }
}

export default Search;
import React from 'react';
import axios from 'axios';
import { FOURSQUARE_API_URL } from '../../services/api/foursqure_api.js';
import normalize from '../../services/normalize/normalize';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import SearchBox from '../../components/SearchBox/SearchBox';
import Gallery from '../../components/Gallery/Gallery';
import styles from './Search.module.css';

class Search extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         query: 'Waterloo ON',
         assets: [],
         isLoading: true
      };
      this.onSearchChanged = this.onSearchChanged.bind(this);
   }

   componentDidMount() {
      //console.log(this.state);
      this.searchAsset(this.state.query);
   }

   searchAsset(query) {
      this.setState({ isLoading: true });

      axios.get(`${FOURSQUARE_API_URL}&v=20191201&limit=10&query=coffee&near=${query}`)
         .then(response => {
            //console.log(response);           
            this.setState({ isLoading: false });
            this.setState({ assets: normalize.search(response.data.response.venues) });
         })
         .catch(error => {
            this.setState({ isLoading: false });
         })
   }

   onSearchChanged(query) {
      this.setState({ query });
      this.searchAsset(query);
   }

   render() {
      const { query, assets, isLoading } = this.state;

      const displayContent = () => {
         if (isLoading) {
            return (
               <p>Loading</p>
            );
         }

         if (assets.length > 0) {
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
                  <SearchBox query={query} onSearchChanged={this.onSearchChanged} />
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
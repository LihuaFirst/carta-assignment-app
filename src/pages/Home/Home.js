import React from 'react';
import axios from 'axios';
import { FOURSQUARE_API_URL } from '../../services/api/foursqure_api.js';
import normalize from '../../services/normalize/normalize';
import formatDate from '../../services/date/date_formats.js';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import SearchBox from '../../components/SearchBox/SearchBox';
import GalleryItem from '../../components/GalleryItem/GalleryItem';
import ModalContent from '../../components/ModalContent/ModalContent';
import Modal from 'react-responsive-modal';
import styles from './Home.module.css';
import { debounce } from 'lodash';

class Search extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         location: 'New York',
         query: 'vegan restaurant',
         isLoading: true,
         assets: [],
         isModalOpen: false,
         selectedItem: null
      };
      this.onSearchCityChanged = this.onSearchCityChanged.bind(this);
      this.onSearchQueryChanged = this.onSearchQueryChanged.bind(this);

      this.onOpenModal = this.onOpenModal.bind(this);
      this.onCloseModal = this.onCloseModal.bind(this);
   }

   componentDidMount() {
      this.searchAsset(this.state.location, this.state.query);
   }

   searchAsset = debounce((location, query) => {
      this.setState({ isLoading: true });

      const version = formatDate.yyyymmdd(new Date());
      const limit = 50;
      const query_param = (query) ? '&query=' + query : '';

      axios.get(`${FOURSQUARE_API_URL}&v=${version}&limit=${limit}&near=${location}${query_param}`)
         .then(response => {
            //console.log(response.data.response.venues);
            this.setState({ isLoading: false });
            this.setState({ assets: normalize.search(response.data.response.venues) });
         })
         .catch(error => {
            this.setState({ isLoading: false });
         })
   }, 500);

   onSearchCityChanged(location) {
      this.setState({ location });
      this.searchAsset(location, this.state.query);
   }

   onSearchQueryChanged(query) {
      this.setState({ query });
      this.searchAsset(this.state.location, query);
   }

   onOpenModal = (id) => {
      this.setState({
         isModalOpen: true,
         selectedItem: id
      });
   }

   onCloseModal = () => {
      this.setState({
         isModalOpen: false,
         selectedItem: null
      });
   }

   renderModal = () => {
      if (this.state.selectedItem !== null) {
         const item = this.state.assets.find(x => x.id === this.state.selectedItem)
         return (
            <ModalContent item={item} />
         );
      }
   }

   renderContent = () => {
      if (this.state.isLoading) {
         return (<p>Loading</p>);
      }

      if (this.state.assets.length === 0) {
         return (<p>Opps, no data </p>
         );
      }

      if (this.state.assets.length > 0) {
         return (
            <div className={styles['gallery-wrapper']}>
               {this.state.assets.map((child, i) => (
                  <div className={styles['gallery-item']} key={Math.random()}>
                     <GalleryItem
                        id={child.id}
                        name={child.name}
                        address={child.address}
                        category={child.category}
                        category_icon={child.category_icon}
                        onOpenModal={this.onOpenModal}
                     />
                  </div>
               ))}
            </div>
         );
      }
   }


   render() {
      const { location, query, isModalOpen } = this.state;

      return (
         <div className={styles['search-wrapper']}>
            <div className={styles['search-header']}>
               <HeaderBar>
                  <SearchBox location={location}
                     query={query}
                     onSearchCityChanged={this.onSearchCityChanged}
                     onSearchQueryChanged={this.onSearchQueryChanged} />
               </HeaderBar>
            </div>
            <div className={styles['search-content']}>
               {this.renderContent()}
            </div>
            <Modal open={isModalOpen} onClose={this.onCloseModal} center>
               <div>{this.renderModal()}</div>
            </Modal>
         </div>
      );
   }
}

export default Search;
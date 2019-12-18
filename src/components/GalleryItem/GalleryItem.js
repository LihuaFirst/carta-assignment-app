import React from 'react';
import LazyLoad from 'react-lazyload';
import styles from './GalleryItem.module.css';

class GalleryItem extends React.Component {
   constructor(props) {
      super(props);
      this.handleOpenModal = this.handleOpenModal.bind(this);
   }

   handleOpenModal = (id) => {
      //console.log('Selected: ' + id);
      this.props.onOpenModal(id);
   }

   render() {
      const { id, name, category, category_icon } = this.props;

      return (
         <div className={styles['galleryItem']}>
            <a href="/#" onClick={() => this.props.onOpenModal(id)} className={styles['galleryItem-wrapper']} title={name}>
               {name && <p className={styles['galleryItem-title']}>{name}</p>}
               <div className={styles['galleryItem-image-wrapper']}>
                  <LazyLoad height={50} once>
                     <img src={category_icon}
                        alt={category}
                        title={category}
                        className={styles['galleryItem-image']}
                     />
                  </LazyLoad>
               </div>
            </a>
         </div >
      );
   }
}
export default GalleryItem;



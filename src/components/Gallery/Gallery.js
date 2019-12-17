import React from 'react';
import GalleryItem from '../../components/GalleryItem/GalleryItem';
import styles from './Gallery.module.css';

const Gallery = ({ children }) => {
   // passing props.children 
   const galleryItems = children.map(child => (
      <div className={styles['gallery-item']} key={Math.random()}>
         <GalleryItem
            id={child.id}
            name={child.name}
         />
      </div>
   ));

   return (
       <div className={styles['gallery-wrapper']}>
          {galleryItems}
       </div>);
};

export default React.memo(Gallery);
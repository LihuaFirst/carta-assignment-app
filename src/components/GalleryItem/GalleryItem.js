import React from 'react';
import { Link } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';
import styles from './GalleryItem.module.css';

const GalleryItem = (props) => (
   <div className={styles['galleryItem']}>
       <Link className={styles['galleryItem-wrapper']} to={`/asset/${props.id}`} title={props.name}>
         <div className={styles['galleryItem-image-wrapper']}>
            {/* <LazyLoad height={200} once>
               <img src={props.href}
                  alt={props.description}
                  title={props.title}
                  className={styles['galleryItem-image']}
               />
            </LazyLoad> */}
         </div>
         {props.name && <p className={styles['galleryItem-title']}>{props.name}</p>}
      </Link>
   </div >
);

export default GalleryItem;



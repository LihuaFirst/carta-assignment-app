import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import styles from './GalleryItem.module.css';

const GalleryItem = (props) => (
   <div className={styles['galleryItem']}>
      <Link className={styles['galleryItem-wrapper']} to={`/asset/${props.id}`} title={props.name}>
         {props.name && <p className={styles['galleryItem-title']}>{props.name}</p>}
         {/* {props.address && <p>{props.address}</p>} */}
         <div className={styles['galleryItem-image-wrapper']}>
            <LazyLoad height={50} once>
               <img src={props.category_icon}
                  alt={props.category}
                  title={props.title}
                  className={styles['galleryItem-image']}
               />
            </LazyLoad>
         </div>
      </Link>
   </div >
);

export default GalleryItem;



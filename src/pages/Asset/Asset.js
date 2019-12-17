import React from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar';

import axios from 'axios';
import { NASA_API_URL } from '../../services/api/nasa_api';
import normalize from '../../services/normalize/normalize';
import styles from './Asset.module.css';

class Asset extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      asset: {},
      isLoading: true
    };
  }

  componentDidMount() {
    //console.log(this.props);
    const { match: { params: { id } } } = this.props;
    
    axios.get(`${NASA_API_URL}/search?nasa_id=${id}`)
      .then(response => {
        console.log(response.data);
        const result =  normalize.asset(response.data.collection.items[0]);
        //console.log(result);
        this.setState({ isLoading: false });
        this.setState({ asset: result });
      })
      .catch(error => {
        this.setState({ isLoading: false });
      })
  }

  render() {
    const {
      isLoading,
      asset: {
        href,
        title,
        alt,
        description,
        dateCreated
      }
    } = this.state;

    //console.log(this.state);
    const assetContent = (
      <div className={styles['asset-content']}>
        <div className={styles['asset-image']}>
          <img src={href} alt={alt} title={title} />
        </div>        
        <div className={styles['asset-data']}>
          {title && <h1 className={styles['asset-title']}>{title}</h1>}
          {dateCreated && <p className={styles['asset-date']}>Created on: {dateCreated}</p>}
          {description && <p className={styles['asset-description']}>{description}</p>}
        </div>
      </div>
    );

    return (
      <div className="asset">
        <div className="asset-header">
          <HeaderBar />
        </div>
        {isLoading && <p>Loading</p>}
        {!isLoading && assetContent}
      </div>
    );
  }
}

export default Asset;
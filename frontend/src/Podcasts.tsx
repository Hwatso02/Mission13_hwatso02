import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function PodcastPage() {
  return (
    <React.Fragment>
      {/* Reference Bootstrap */}
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-dark border-bottom box-shadow mb-3"></nav>
      <div>
        <Link to="https://baconsale.com/" className={styles.link}>
          BaconSale Podcast
        </Link>
      </div>
    </React.Fragment>
  );
}

//make the function accessible to be imported by other files
export default PodcastPage;

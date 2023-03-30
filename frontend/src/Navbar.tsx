//Access CSS File and Links
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // Reference Bootstrap
    <div className="col text-start navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-dark border-bottom box-shadow mb-3">
      <h1 className={styles.h1}>Joel Hilton's Movie Collection</h1>

      {/* Create Buttons/Links to Other Pages */}
      <ul className="navbar-nav flex-grow-1">
        <li className={styles.li}>
          <Link to="/" className={styles.navlink}>
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/Podcasts" className={styles.navlink}>
            My Podcasts
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/Movies" className={styles.navlink}>
            Movie List
          </Link>
        </li>
      </ul>
    </div>
  );
}

//make the function accessible to be imported by other files
export default Navbar;

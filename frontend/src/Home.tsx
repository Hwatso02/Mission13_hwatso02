import React from 'react';

//make a top banner for the Home page
function HomePage() {
  return (
    <React.Fragment>
      {/* Reference Bootstrap */}
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-dark border-bottom box-shadow mb-3"></nav>
      <br />
      <br />
      <div className="text-center">
        <img src="./JoelHilton.jpg" alt="Joel Hilton" />
      </div>
    </React.Fragment>
  );
}

//make the function accessible to be imported other files
export default HomePage;

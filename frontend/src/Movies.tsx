//gain access to movie data
import movies from './MovieData.json';
import React from 'react';

const Movies = movies.MovieData;

function MovieList() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-dark border-bottom box-shadow mb-3"></nav>

      {/* Table Title */}
      <div className="text-center">
        <h3>Movie Collection</h3>
      </div>

      {/* create table */}
      <div className="col-10 offset-1">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {/* Map Array Of Movies */}
            {Movies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

//make the function accessible to be imported by other files
export default MovieList;

//Import All Functions From Files
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Podcasts from './Podcasts';
import Movies from './Movies';

export default function App() {
  return (
    //Route Paths For Each Page
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Podcasts" element={<Podcasts />} />
          <Route path="Movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

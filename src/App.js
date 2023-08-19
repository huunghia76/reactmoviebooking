import './App.css';
import MovieBooking from './MovieBooking/MovieBooking';

function App() {
  return (
    <>
    <div className='mainMovieBooking' style={{backgroundImage:'url(./imgs/bgmovie.jpg)',backgroundSize: 'cover', }}>
        <MovieBooking></MovieBooking>
    </div>
    </>
  );
}

export default App;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Link } from "react-router-dom";

const animeList = [
  {
    id: 1,
    title: "Thanh Gươm Diệt Quỷ",
    engTitle: "Demon Slayer: Kimetsu no Yaiba",
    image: "https://cinema.momocdn.net/img/2995715139969098-conmemay.jpg",
  },
  {
    id: 2,
    title: "Attack On Titan",
    engTitle: "Shingeki no Kyojin",
    image:
      "https://assets.wfcdn.com/im/76220912/compr-r85/6207/62075932/Entertainment+Paper+Print.jpg",
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    engTitle: "Chú Thuật Hồi Chiến",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/jujutsu-kaisen.jpg",
  },
  {
    id: 4,
    title: "Naruto Shippuden",
    engTitle: "Naruto Shippuden",
    image:
      "https://tiermaker.com/images/templates/naruto-season-2-887103/8871031620327578.jpg",
  },
  {
    id: 5,
    title: "One Piece",
    engTitle: "One Piece",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/one-piece-9.jpg",
  },
  {
    id: 6,
    title: "Spy x Family",
    engTitle: "Gia Đình Điệp Viên",
    image:
      "https://cdn.waterstones.com/bookjackets/large/9781/9747/9781974743339.jpg",
  },
];

const usMovies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    engTitle: "Avengers: Endgame",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.7A-uPhP4iCQY9pqdmCtbfQHaK9?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    title: "Inception",
    engTitle: "Kẻ Đánh Cắp Giấc Mơ",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    engTitle: "Hố Đen Vũ Trụ",
    image:
      "https://play-lh.googleusercontent.com/D5FtnFBPO_FitBIqjCffRZrhZf84Xm3mVoqQDUD2ZGq-Z4LftUotgRj4WquMQhDs1nL46NQxu7Rr2ahbFrWM=w240-h480-rw",
  },
  {
    id: 4,
    title: "Joker",
    engTitle: "Gã Hề",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/250px-Joker_%282019_film%29_poster.jpg",
  },
  {
    id: 5,
    title: "The Dark Knight",
    engTitle: "Kỵ Sĩ Bóng Đêm",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 6,
    title: "Avatar: The Way of Water",
    engTitle: "Thế Giới Pandora 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
  },
];

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.image} alt={movie.title} />
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <p>{movie.engTitle}</p>
    </div>
  </div>
);

const MovieSection = ({ title, movies }) => (
  <div className="movie-section">
    <div className="movie-header">
      <h2>{title}</h2>
      <Link to="/anime" className="see-more">
        Xem thêm →
      </Link>
    </div>

    <div className="swiper-container-wrapper">
      <div className="swiper-button-prev custom-nav"></div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={5}
        grabCursor
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next custom-nav"></div>
    </div>
  </div>
);

const MovieList = () => (
  <>
    <MovieSection title="Anime Nhất Định Phải Xem" movies={animeList} />
    <MovieSection title="Phim Mỹ Hay" movies={usMovies} />
  </>
);

export default MovieList;

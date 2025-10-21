import React, { useState } from "react";
import "./styles.css";

const allMovies = [
  { id: 1, title: "Thanh Gươm Diệt Quỷ", engTitle: "Demon Slayer", image: "https://cinema.momocdn.net/img/2995715139969098-conmemay.jpg" },
  { id: 2, title: "Attack On Titan", engTitle: "Shingeki no Kyojin", image: "https://assets.wfcdn.com/im/76220912/compr-r85/6207/62075932/Entertainment+Paper+Print.jpg" },
  { id: 3, title: "Jujutsu Kaisen", engTitle: "Chú Thuật Hồi Chiến", image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/jujutsu-kaisen.jpg" },
  { id: 4, title: "Naruto Shippuden", engTitle: "Naruto Shippuden", image: "https://tiermaker.com/images/templates/naruto-season-2-887103/8871031620327578.jpg" },
  { id: 5, title: "One Piece", engTitle: "One Piece", image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/one-piece-9.jpg" },
  { id: 6, title: "Spy x Family", engTitle: "Gia Đình Điệp Viên", image: "https://cdn.waterstones.com/bookjackets/large/9781/9747/9781974743339.jpg" },
  { id: 7, title: "Avengers: Endgame", engTitle: "Avengers: Endgame", image: "https://tse1.mm.bing.net/th/id/OIP.7A-uPhP4iCQY9pqdmCtbfQHaK9?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 8, title: "Inception", engTitle: "Kẻ Đánh Cắp Giấc Mơ", image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg" },
  { id: 9, title: "Interstellar", engTitle: "Hố Đen Vũ Trụ", image: "https://play-lh.googleusercontent.com/D5FtnFBPO_FitBIqjCffRZrhZf84Xm3mVoqQDUD2ZGq-Z4LftUotgRj4WquMQhDs1nL46NQxu7Rr2ahbFrWM=w240-h480-rw" },
  { id: 10, title: "Joker", engTitle: "Gã Hề", image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/250px-Joker_%282019_film%29_poster.jpg" },
];

const categories = ["Tất cả", "Anime", "Phim Mỹ"];

const AllMovies = () => {
  const [visibleCount, setVisibleCount] = useState(15);
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const handleSeeMore = () => setVisibleCount(allMovies.length);

  return (
    <div className="all-movies-page">
      <div style={{ height: "100px" }}></div>

      <h2>Danh sách phim</h2>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="movie-grid">
        {allMovies.slice(0, visibleCount).map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.engTitle}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allMovies.length && (
        <div className="see-more-container">
          <button className="see-more-btn" onClick={handleSeeMore}>
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
};

export default AllMovies;

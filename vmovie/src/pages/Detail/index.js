import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    axios
      .get(`https://68ef4da1b06cc802829cd64a.mockapi.io/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
        setRatings(res.data.ratings || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Lỗi tải dữ liệu");
        setLoading(false);
      });
  }, [id]);

  const submitRating = () => {
    if (rating === 0) return;

    const updatedRatings = [...ratings, rating];

    axios
      .put(`https://68ef4da1b06cc802829cd64a.mockapi.io/movies/${id}`, {
        ...movie,
        ratings: updatedRatings
      })
      .then(() => {
        setRatings(updatedRatings);
        setRating(0);
        setHover(0);
      });
  };

  if (loading) return <div>Đang tải phim...</div>;
  if (error) return <div>{error}</div>;
  if (!movie)
    return (
      <div className="movie-detail-page" style={{ padding: "120px", color: "white" }}>
        <h2>Không tìm thấy phim.</h2>
      </div>
    );

  const avgRating =
    ratings.length > 0
      ? (ratings.reduce((s, r) => s + r, 0) / ratings.length).toFixed(1)
      : "Chưa có";

  return (
    <div className="movie-detail-page">
      <div className="movie-detail-header-space"></div>

      <div className="movie-detail">
        <div className="movie-detail-poster">
          <img src={movie.image} alt={movie.title} />
          <button
            className="watch-button"
            onClick={() => navigate(`/xem-phim/${movie.id}`)}
          >
            🎬 Xem Phim
          </button>
        </div>

        <div className="movie-detail-info">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-eng-title">
            <em>{movie.engTitle}</em>
          </p>

          <div className="movie-meta">
            <p><strong>Trạng thái:</strong> Tập 1 Vietsub</p>
            <p><strong>Thời lượng:</strong> {movie.duration}</p>
            <p>
              <strong>Thể loại:</strong>{" "}
              {movie.genre.split(",").map((g, i) => (
                <span key={i} className="tag">{g.trim()}</span>
              ))}
            </p>
            <div className="movie-rating-section">
            <p>
              <strong>Đánh giá:</strong> ⭐ {avgRating} / 5
            </p>

            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= (hover || rating) ? "star active" : "star"}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  ★
                </span>
              ))}
            </div>

            <button className="rate-btn" onClick={submitRating}>
              Gửi đánh giá
            </button>
          </div>
          </div>
        </div>
      </div>

      <div className="movie-detail-description">
        <h2>Nội dung chi tiết</h2>
        <p>{movie.description}</p>

        <div className="keyword-tags">
          <span>#{movie.title.replace(/\s+/g, "")}</span>
          <span>#{movie.engTitle.replace(/\s+/g, "")}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

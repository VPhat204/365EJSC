import React from "react";
import "./styles.css";

const WatchMovie = () => {
  return (
    <div className="watch-movie-page">
      <div className="header-space"></div>

      <iframe
        className="main-video"
        src="https://iframe.mediadelivery.net/play/504498/cfeb507d-a3fb-40a3-92bb-42fff7ce8244"
        title="Video Player"
        allowFullScreen
        frameBorder="0"
        scrolling="no"
      ></iframe>

      <div className="server-buttons">
        <button className="server-btn active">Server #1</button>
        <button className="server-btn">Server #2</button>
        <button className="server-btn">Server #3</button>
      </div>

      <div className="movie-rating">
        ⭐⭐⭐⭐☆ <span>(9.0 điểm / 1 lượt)</span>
      </div>

      <div className="episode-section">
        <h3>
          TẬP PHIM <span className="vietsub-tag">VIETSUB</span>
        </h3>
        <div className="episode-list">
          {Array.from({ length: 13 }, (_, i) => i + 1).map((ep) => (
            <button
              key={ep}
              className={`episode-btn ${ep === 1 ? "active" : ""}`}
            >
              {ep}
            </button>
          ))}
        </div>
      </div>

      <div className="watch-info">
        <h2>Nhập Thanh Vân - Tập 1</h2>
        <p className="eng-title">Love In The Clouds</p>
        <p>
          Tại “Đại hội Thanh Vân” hằng năm, Kỳ Bá Tể đã đánh bại Minh Ý và trở
          thành ngôi sao của Vực Cực Tinh. Minh Ý do trúng kịch độc hóa thân
          thành vũ nữ để tiếp cận Kỳ Bá Tể tìm thuốc giải. Nhưng chàng đã biết
          mọi chuyện và cũng che giấu bí mật của mình...
        </p>

        <p className="info-detail">
          Hầu Minh Hạo, Lư Dục Hiểu, Dư Thừa Ân, Trí Trúc, Bành Học Quân là
          những nhân vật chính trong phim{" "}
          <strong>Nhập Thanh Vân (Love In The Clouds)</strong>.
        </p>

        <div className="keyword-tags">
          <span>#NhậpThanhVân</span>
          <span>#LoveInTheClouds</span>
        </div>
      </div>
    </div>
  );
};

export default WatchMovie;

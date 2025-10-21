import React from "react";
import "./styles.css";

const MovieDetail = () => {
  return (
    <div className="movie-detail-page">
      <div className="movie-detail-header-space"></div>

      <div className="movie-detail">
        <div className="movie-detail-poster">
          <img
            src="https://motchillk.now/storage/hinh-anh/nhap-thanh-van-poster.jpg"
            alt="Nhập Thanh Vân Poster"
          />
          <button className="watch-button">🎬 Xem Phim</button>
        </div>

        <div className="movie-detail-info">
          <h1 className="movie-title">Nhập Thanh Vân</h1>
          <p className="movie-eng-title">
            <em>Love In The Clouds (2025)</em>
          </p>

          <div className="movie-meta">
            <p>
              <strong>Trạng thái:</strong> Tập 13 Vietsub
            </p>
            <p>
              <strong>Thời lượng:</strong> 45 phút/tập
            </p>
            <p>
              <strong>Số tập:</strong> 36
            </p>
            <p>
              <strong>Tình trạng:</strong> Đang chiếu
            </p>
            <p>
              <strong>Thể loại:</strong>
              <span className="tag">Cổ Trang</span>
              <span className="tag">Tình Cảm</span>
              <span className="tag">Lãng Mạn</span>
            </p>
            <p>
              <strong>Đạo diễn:</strong> Trí Trúc, Bành Học Quân
            </p>
            <p>
              <strong>Diễn viên:</strong> Hầu Minh Hạo, Lư Dục Hiểu, Dư Thừa Ân, Hạc Nam, Toàn Y Luân
            </p>
            <p>
              <strong>Đánh giá:</strong> ⭐⭐⭐⭐☆ (9.0/10)
            </p>
          </div>
        </div>
      </div>

      <div className="movie-detail-description">
        <h2>Nội dung chi tiết</h2>
        <p>
          Tại Đại hội Thanh Vân hằng năm, Kỳ Bá Tể đã đánh bại Minh Ý và trở thành ngôi sao của Vực Cực Tinh.
          Minh Ý do trúng kịch độc hóa thân thành vũ nữ để tiếp cận Kỳ Bá Tể tìm thuốc giải. Nhưng chàng đã
          biết mọi chuyện và cũng che giấu bí mật của mình. Trong cuộc chiến tranh đoạt, hai trái tim đã
          rung động với nhau giữa toan tính và tranh đấu...
        </p>

        <div className="keyword-tags">
          <span>#NhậpThanhVân</span>
          <span>#LoveInTheClouds</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

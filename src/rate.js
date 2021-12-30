import ReactStars from "react-rating-stars-component";
import React from "react";


function Rate({ setrate }) {
  const ratingChanged = (newRating) => {
    setrate(newRating);
  };
  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}

        size={24}
        activeColor="#ffd700"
      />

    </div>
  )
}
export default Rate
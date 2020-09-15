import React, { useState } from "react";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "./SwipeButtons.css";

function SwipeButtons() {
  const [swiped, setSwiped] = useState(false);

  return (
    <>
      <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat" onClick={swiped}>
          <ReplayIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtons__left" onClick={swiped}>
          <CloseIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtons__star" onClick={swiped}>
          <StarRateIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtons__right" onClick={swiped}>
          <FavoriteIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtons__lightning" onClick={swiped}>
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </>
  );
}

export default SwipeButtons;

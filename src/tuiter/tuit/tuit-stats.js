import React, { useState } from "react";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { IoRepeatSharp, IoHeart, IoHeartOutline } from "react-icons/io5";
import { AiOutlineUpload } from "react-icons/ai";

function TuitStats({ comments, retweets, likes, liked }) {
  const [ifLiked, setIfLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = () => {
    setLikeCount((prevLikeCount) => {
      const newLikeCount = ifLiked ? prevLikeCount - 1 : prevLikeCount + 1;
      setIfLiked(!ifLiked);
      return newLikeCount;
    });
  };

  const LikeIcon = ifLiked ? IoHeart : IoHeartOutline;
  const likeColor = ifLiked ? "red" : "";

  return (
    <div className="row mt-2 text-secondary">
      <div className="col">
        <HiChatBubbleOvalLeft className="me-1" />
        <span className="comments">{comments}</span>
      </div>
      <div className="col">
        <IoRepeatSharp className="me-1" />
        <span className="retweets">{retweets}</span>
      </div>
      <div className="col" onClick={handleLikeClick}>
        <LikeIcon style={{ color: likeColor }} className="me-1" />
        <span>{likeCount}</span>
      </div>
      <div className="col">
        <AiOutlineUpload />
      </div>
    </div>
  );
}

export default TuitStats;

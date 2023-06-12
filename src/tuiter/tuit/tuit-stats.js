import React, { useState } from "react";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { IoRepeatSharp, IoHeartOutline, IoThumbsDownOutline, IoThumbsDown } from "react-icons/io5";
import { AiOutlineUpload } from "react-icons/ai";
import { FaHeart } from 'react-icons/fa';
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import tuit from "../tuit-summary-list/tuits.json";
import TuitSummaryList from "../tuit-summary-list";

function TuitStats({ comments, retweets, likes, liked }) {
  const [ifLiked, setIfLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [ifDisliked, setIfDisliked] = useState(false);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    if (ifLiked) {
      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1 }));
      setLikeCount((prevLikeCount) => prevLikeCount - 1);
    } else {
      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }));
      setLikeCount((prevLikeCount) => prevLikeCount + 1);
    }
    setIfLiked((prevIfLiked) => !prevIfLiked);
  };

  const handleDislikeClick = () => {
    if (ifDisliked) {
      dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes - 1 }));
      setDislikeCount((prevDislikeCount) => prevDislikeCount - 1);
    } else {
      dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }));
      setDislikeCount((prevDislikeCount) => prevDislikeCount + 1);
    }
    setIfDisliked((prevIfDisliked) => !prevIfDisliked);
  };
  
  
  const LikeIcon = ifLiked ? FaHeart : IoHeartOutline;
  const likeColor = ifLiked ? "red" : "";
  const DislikeIcon = ifDisliked ? IoThumbsDown : IoThumbsDownOutline;
  const dislikeColor = ifDisliked ? "blue" : "blue";

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
        <LikeIcon style={{ color: likeColor }} className="text-danger me-1" />
        <span>{likeCount}</span>
      </div>
      <div className="col" onClick={handleDislikeClick}>
        <DislikeIcon style={{ fill: dislikeColor }} className="text-primary me-1" />
        <span>{dislikeCount}</span>
      </div>
      <div className="col">
        <AiOutlineUpload />
      </div>
    </div>
  );
}

export default TuitStats;

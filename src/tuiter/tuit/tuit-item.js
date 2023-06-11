import React from "react";
import { MdVerified } from "react-icons/md";
import { RxCrossCircled, RxDotFilled } from "react-icons/rx";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";
import "./tuit-item.css";

function TuitItem({ tuit, onLike }) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <div className="tuit-item">
      <div className="tuit-header">
        <div className="user-info">
          <img
            width={50}
            className="float-end rounded-circle"
            src={`/images/${tuit.image}`}
            alt=""
          />
          <span className="username">{tuit.userName}</span>
          <MdVerified className="text-primary" />
          <span className="text-secondary">
            {tuit.handle}
            <RxDotFilled />
            {tuit.time}
          </span>
        </div>
        <RxCrossCircled
          className="float-end"
          onClick={() => deleteTuitHandler(tuit._id)}
        />
      </div>
      <div className="tuit-body">
        <div className="tuit-text">
          <div className="tuit-message">{tuit.tuit}</div>
        </div>
      </div>
      <div className="tuit-footer">
        <TuitStats
          comments={tuit.replies}
          retweets={tuit.retuits}
          likes={tuit.likes}
          liked={tuit.liked}
          onLike={() => onLike(tuit._id, tuit.liked)}
        />
      </div>
    </div>
  );
}

export default TuitItem;

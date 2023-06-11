import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service";


export const findTuitsThunk = createAsyncThunk(
 "tuits/findTuits",
 async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId)
      return tuitId
  })
  
  const currentUser = {
    userName: "NASA",
    handle: "@NASA",
    image: "./nasa.png",
    topic: "Space",
    time: "2h",
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
  };
  
 
  export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuitData) => {
      const tuit = { ...tuitData, ...currentUser }; 
      try {
        const newTuit = await service.createTuit(tuit);
        return newTuit;
      } catch (error) {
        console.error("Error creating tuit:", error);
        throw error;
      }
    }
  );
  

  export const updateTuitThunk =
  createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
      await service.updateTuit(tuit)
)
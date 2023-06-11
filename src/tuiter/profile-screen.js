import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "./services/auth-thunks";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = async () => {
    try {
      console.log(profile);
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.log("Conflict error: User already exists");
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    };

    fetchProfile();
  }, [dispatch]);

  console.log("profile1", profile);

  return (
    <div>
      <h1>Profile Screen</h1>
      {profile && (
        <div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={profile.firstName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  firstName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              value={profile.lastName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  lastName: event.target.value,
                };
                setProfile(newProfile);
                console.log(newProfile);
              }}
            />
          </div>
        </div>
      )}
      <button
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/tuiter/login");
        }}
      >
        Logout
      </button>
      <button onClick={save}>Save</button>
    </div>
  );
}

export default ProfileScreen;

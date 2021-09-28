import React from "react";
import { PhotoCard } from "./PhotoCard";
import "./Photos.css";

export const PhotoList = () => {
  const [avatars, setAvatars] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const fetchAvatarList = React.useCallback(() => {
    setIsFetching(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((resp) => {
        setAvatars(resp.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.error(err);
        setIsFetching(false);
      });
  }, []);
  React.useEffect(() => {
    fetchAvatarList();
  }, [fetchAvatarList]);

  return (
    <div className="photolist-container">
      {!isFetching ? (
        avatars && avatars.length ? (
          avatars.map((avatar) => {
            return (
              //   <div key={avatar.id} style={{ width: "33%" }}>
              <PhotoCard key={avatar.id} avatarUser={avatar} />
              //   </div>
            );
          })
        ) : (
          <>No Photos Available..</>
        )
      ) : (
        <>Generating Photos...</>
      )}
    </div>
  );
};

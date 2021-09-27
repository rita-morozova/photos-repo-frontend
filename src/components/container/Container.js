import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

import Photo from "../photo/Photo";
import PhotoModal from "../photo/PhotoModal";

import "./container.css";

const URL = "https://photos-repo.herokuapp.com/";

const Container = ({ user }) => {
  const [photos, setPhotos] = useState([]);
 
  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPhotos = () => {
    fetch(`${URL}/photos`)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        console.log(user.token);
      })
      .catch((err) => console.log(err));
  };

  const uploadPhoto = (formData) => {
    fetch(`${URL}/photos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    }).then((data) => {
      setPhotos(photos, data);
      getPhotos();
      //scroll down to the uploaded photo
      window.scrollTo(0, document.body.scrollHeight);
    });
  };

  const deletePhoto = (photo) => {
    fetch(`https://photos-repo.herokuapp.com/photos/${photo.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotos(photos.filter((image) => image.id !== data.id));
      });
  };

  return (
    <>
      {user ? (
        <div className="main-container">
          <PhotoModal uploadPhoto={uploadPhoto} user={user} photos={photos} />
          <Card.Group centered>
            {photos.map((photo) => (
              <Photo
                key={photo.id}
                photo={photo}
                deletePhoto={deletePhoto}
                user={user}
              />
            ))}
          </Card.Group>
        </div>
      ) : (
        <div className="main-container">
          <Card.Group centered>
            {photos.map((photo) => (
              <Photo
                key={photo.id}
                photo={photo}
                deletePhoto={deletePhoto}
                user={user}
              />
            ))}
          </Card.Group>
        </div>
      )}
    </>
  );
};

export default Container;

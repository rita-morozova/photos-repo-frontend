import React from "react";
import { Button, Modal } from "semantic-ui-react";
import UploadPhoto from "./UploadPhoto";

import "./photo.css";

const PhotoModal = ({ photos, user, uploadPhoto }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div className="btn-upload">
          <Button
            photos={photos}
            user={user}
            style={{ backgroundColor: "#FA396F", color: "white" }}
          >
            Upload Photo{" "}
          </Button>
        </div>
      }
    >
      <Modal.Header>Upload Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <UploadPhoto photos={photos} user={user} uploadPhoto={uploadPhoto} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={() => setOpen(false)}
          style={{ backgroundColor: " #46D8D2", color: "white" }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => setOpen(false)}
          style={{ backgroundColor: " #FA396F", color: "white" }}
        >
          Let's see some photos!
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PhotoModal;

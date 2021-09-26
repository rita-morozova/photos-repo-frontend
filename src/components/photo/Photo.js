import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import TimeAgo from "react-timeago";

const Photo = ({ photo, deletePhoto, user }) => {
  return (
    <>
      <Card key={photo.id}>
        <Image src={photo.image} alt="" style={{ height: "290px" }} />
        <Card.Content>
          <Card.Meta>
            <TimeAgo date={photo.created_at} />
            <span>By: {photo.username}</span>
            {user.id === photo.user_id ? (
              <Icon
                name="trash alternate outline"
                color="pink"
                onClick={() => deletePhoto(photo)}
                size="large"
                style={{ float: "right" }}
              />
            ) : null}
          </Card.Meta>
        </Card.Content>
      </Card>
    </>
  );
};

export default Photo;

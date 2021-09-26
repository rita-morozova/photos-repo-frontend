import React from "react";
import { Button } from "semantic-ui-react";

class UploadPhoto extends React.Component {
  state = {
    username: this.props.user.username,
    image: null,
  };

  onChange = (e) => {
    e.persist();
    this.setState(() => {
      return {
        //Upload only one file, multiple uploads are not allowed
        [e.target.name]: e.target.files[0],
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", this.state.image);
    formData.append("username", this.state.username);
    this.props.uploadPhoto(formData);
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.onSubmit}>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={this.onChange}
          />
          <input type="hidden" name="username" value={this.state.username} />
          <br />
          <br />
          <Button
            type="submit"
            value="Submit"
            style={{ backgroundColor: "#FA396F", color: "white" }}
          >
            Add My Photo
          </Button>
          <br />
        </form>
      </div>
    );
  }
}

export default UploadPhoto;

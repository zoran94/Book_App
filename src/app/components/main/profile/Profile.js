import React from "react";
import * as data from "../../../../services/FetchProfile";
import { Modal, Button } from "react-materialize";
import M from "materialize-css";
import ModalContent from "./ModalContent";
import { getAuthUserId } from '../../../../services/authService';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      modalVisible: false
    };

    this.modalToggle = this.modalToggle.bind(this)
  }

  onLoadUser = () => {
    const userId = getAuthUserId();

    data.fetchUser(userId)
      .then(user => {
        this.setState({
          user: user
        });
      })
      .catch(error => console.log(error));
  }

  modalToggle() {
    this.setState((prevState) => {
      return {
        modalVisible: !prevState.modalVisible
      }
    })
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    const prevId = prevProps.match.params.id

    if (id !== prevId) {
      this.onLoadUser(id);
    }
  }

  componentDidMount() {
    this.onLoadUser()
  }




  displayUser = () => {
    const editButton =
      this.props.match.params.id == 1 ? <Button onClick={this.modalToggle} className="edit-buton-position">Edit Profile</Button> : "";

    return (
      <>
        {editButton}
        <Modal open={this.state.modalVisible} options={{ dismissible: false }}>
          <ModalContent
            click={this.modalToggle}
            firstName={this.state.user.firstname}
            lastName={this.state.user.lastname}
            imageUrl={this.state.user.avatarUrl}
            bio={this.state.user.about.bio}
            id={this.props.match.params.id}
            onLoadUser={this.onLoadUser} />
        </Modal>

        <div className="singleUser ">
          <div className="center" style={{ marginTop: " 150px" }}>
            <img src={this.state.user.avatarUrl} alt="..." />
            <h4>
              {this.state.user.firstname} {this.state.user.lastname}
            </h4>
            <p>
              <b>Bio: </b> {this.state.user.about.bio}
            </p>
            <p>
              <b>Job: </b>
              {this.state.user.about.job}
            </p>
            <div className="postComments">
              <div className="chip">
                <div className="lg-chip-icon">C</div>
                {this.state.user.posts.length} Posts
              </div>
              <div className="chip">
                <div className="lg-chip-icon">C</div>
                {this.state.user.comments.length} Comments
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    if (!this.state.user) {
      return <h2>Loading...</h2>;
    }

    return (
      <>
        <div className="container">{this.displayUser()}</div>
      </>
    );
  }
}

export default Profile;

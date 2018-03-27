import React from "react";
import {connect} from "react-redux";
import {AppComponent} from "../components/app-component";

const mapStateToProps = state => {
  return {
    playerRoomNameChoose: state.playerName && state.roomName
  };
};

const App = connect(
  mapStateToProps,
  undefined
)(AppComponent);

export default App;

import React from "react";
import {connect} from 'react-redux';
import {emitGenFlow, emitStartPlaying, emitTetrisPlacePiece} from "../socket/socket-api"
import {movePiece} from "../redux/action-creators";
import {PIECES_MOVE} from "../../common/pieces";
import {getColorNum} from "../util/utils"

const ButtonTestComponent = ({
                           line, grid, playerName,
                           onClickButtonFlow, onClickButtonRotRight,
                           onClickButtonRotLeft, onClickButtonMoveDown,
                           onClickButtonMoveLeft, onClickButtonMoveRight,
                           onClickButtonUpdateGrid, onClickButtonStartGame,
                         }) =>
  <div>
    <div className="line">
      {line.map((el, i) =>
        <div key={i} className={"case color" + getColorNum(el)}/>
      )}
    </div>
    <button onClick={() => onClickButtonFlow()}>
      GenFlow
    </button>

    <button onClick={() => onClickButtonStartGame()}>
      StartGame
    </button>

    <button onClick={() => onClickButtonRotRight()}>
      RotRight
    </button>
    <button onClick={() => onClickButtonRotLeft()}>
      RotLeft
    </button>
    <button onClick={() => onClickButtonMoveDown()}>
      MoveDown
    </button>
    <button onClick={() => onClickButtonMoveLeft()}>
      MoveLeft
    </button>
    <button onClick={() => onClickButtonMoveRight()}>
      MoveRight
    </button>
    <button onClick={() => onClickButtonUpdateGrid(grid, playerName)}>
      updateGrid
    </button>
  </div>
;

const mapStateToProps = state => {
  return {
    line: state.piecesFlow.map(e => e),
    grid: state.playerStates.find(
      el => el.playerName === state.playerName
    ).grid.map(l => l.map(e => e)),
    playerName: state.playerName
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickButtonFlow: () => emitGenFlow(),
    onClickButtonStartGame: () => {console.log("button start playing"); emitStartPlaying()},
    onClickButtonRotRight: () => dispatch(movePiece(PIECES_MOVE.ROT_RIGHT)),
    onClickButtonRotLeft: () => dispatch(movePiece(PIECES_MOVE.ROT_LEFT)),
    onClickButtonMoveDown: () => dispatch(movePiece(PIECES_MOVE.DOWN)),
    onClickButtonMoveLeft: () => dispatch(movePiece(PIECES_MOVE.LEFT)),
    onClickButtonMoveRight: () => dispatch(movePiece(PIECES_MOVE.RIGHT)),
    onClickButtonUpdateGrid: (grid, playerName) => emitTetrisPlacePiece(grid, playerName)
  }
};

const ButtonTest = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonTestComponent);

export {ButtonTest};

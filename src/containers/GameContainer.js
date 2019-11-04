import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Game from '../components/game/Game'
import * as Actions from '../actions/index'

const mapStateToProps = (state) => ({
    history: state.game.history,
    xIsNext: state.game.xIsNext,
    isDescending : state.game.isDescending,
    stepNumber: state.game.stepNumber,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch),
})

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);

export default GameContainer
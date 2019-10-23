import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Home from '../components/home/homeView'
import * as Actions from '../actions/index'

const mapStateToProps = (state) => ({
    isFetching: state.homeReducers.isFetching,
    didInvalidate: state.homeReducers.didInvalidate,
    userInfo: state.homeReducers.userInfo,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch),
})

const FillterHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default FillterHome
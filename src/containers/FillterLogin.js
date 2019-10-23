import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Login from '../components/user/login/loginView'
import * as Actions from '../actions/index'

const mapStateToProps = (state) => ({
    isFetching: state.userReducer.isFetching,
    message: state.userReducer.message,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch),
})

const FillterLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default FillterLogin
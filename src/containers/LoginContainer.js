import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Login from '../components/user/login/LoginView'
import {fetchLogin} from '../actions/index'

const mapStateToProps = (state) => ({
    isFetching: state.userReducer.isFetching,
    message: state.userReducer.message,
})

const mapDispatchToProps = (dispatch) => ({
    fetchLogin: bindActionCreators(fetchLogin, dispatch),
})

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer
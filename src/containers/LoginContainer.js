import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Login from '../components/user/login/LoginView'
import {fetchLogin} from '../actions/index'

const mapStateToProps = (state) => ({
    isFetching: state.user.isFetching,
    message: state.user.message,
})

const mapDispatchToProps = (dispatch) => ({
    fetchLogin: bindActionCreators(fetchLogin, dispatch),
})

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Register from '../components/user/register/RegisterView'
import {fetchRegister} from '../actions/index'

const mapStateToProps = (state) => ({
    isFetching: state.user.isFetching,
    message: state.user.message,
})

const mapDispatchToProps = (dispatch) => ({
    fetchRegister: bindActionCreators(fetchRegister, dispatch),
})

const RegisterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);

export default RegisterContainer
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Register from '../components/user/register/registerView'
import * as Actions from '../actions/index'

const mapStateToProps = (state) => ({
    isFetching: state.userReducer.isFetching,
    message: state.userReducer.message,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch),
})

const FillterRegister = connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);

export default FillterRegister
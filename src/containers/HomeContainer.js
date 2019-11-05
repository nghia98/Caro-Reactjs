import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Home from '../components/home/HomeView'
import {fetchInfoUser, logOut} from '../actions/index'

const mapStateToProps = (state) => ({
    isFetching: state.home.isFetching,
    userInfo: state.home.userInfo,
})

const mapDispatchToProps = (dispatch) => ({
    fetchInfoUser : bindActionCreators(fetchInfoUser, dispatch),
    logOut :  bindActionCreators(logOut, dispatch)
})

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer
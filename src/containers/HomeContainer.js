import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Home from '../components/home/HomeView'
import {fetchInfoUser} from '../actions/index'

const mapStateToProps = (state) => ({
    isFetching: state.home.isFetching,
    notLogin: state.home.notLogin,
    userInfo: state.home.userInfo,
})

const mapDispatchToProps = (dispatch) => ({
    fetchInfoUser : bindActionCreators(fetchInfoUser, dispatch),
})

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer
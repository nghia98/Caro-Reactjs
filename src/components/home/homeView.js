import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import Game from '../../containers/GameContainer';
import './home.css'

const HomeView = (props) => {

    const {logOut, userInfo, fetchInfoUser} = props;
    
        if(userInfo){
            return (
                <div>   
                    
                    <div className="header-home">
                        <center><img src="https://www.w3schools.com/howto/img_avatar.png" alt =" Avatar" className="avatar" /><h3>Xin chào, <span className="name-user">{userInfo.fullName}</span> !</h3></center>
                    </div>
                            
                    <div className="centered">
                        <Link to="game-offline"><Button type="button" className="btn-game">Chơi với máy</Button></Link>
                        <Button type="button" className="btn-game">Tìm người chơi</Button>
                        <Button type="button" className="btn-game">Thay đổi thông tin</Button>
                        <Link to = "/login"><Button type="button" className="btn-game bg-dark" onClick={() => {localStorage.setItem('token', null);logOut()}}>Đăng xuất</Button></Link>
                    </div>
   
                </div>
            )
        }
       
        const token = localStorage.getItem('token');
        
        if(token === null || token === 'null'){
            return(<div>
                <center><h2 className="mt-100"> Vui lòng đăng nhập hoặc đăng kí để tiếp tục !</h2></center>
                <div className="centered">
                    
                    <Link to="/login"><Button type="button" className="btn-game"> Đăng nhập</Button></Link>
                    <Link to="/register"><Button type="button" className="btn-game"> Đăng kí</Button></Link>

                </div>
                </div>
            );  
        }
        
        fetchInfoUser(token);
        
        return (
                <div className = "centered">
                    <center><h1>Đang tải...</h1></center>
                </div>
        )
}


export default HomeView;


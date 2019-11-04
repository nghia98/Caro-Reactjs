import React from 'react'
import {Button} from 'react-bootstrap'
// import Game from '../../containers/GameContainer';
import './home.css'

const HomeView = (props) => {

    const logOut = () => {
        localStorage.setItem('token', null);
        localStorage.setItem('isLoggedIn', false);
        window.location.href = '/login';
    }

    const {userInfo, fetchInfoUser} = props;
    
        if(userInfo){
            return (
                <div>   
                    
                    <div className="header-home">
                        <center><img src="https://www.w3schools.com/howto/img_avatar.png" alt =" Avatar" className="avatar" /><h3>Xin chào, <span className="name-user">{userInfo.fullName}</span> !</h3></center>
                    </div>
                            
                    <div className="centered">
                        <Button type="button" className="btn-game">Chơi với máy</Button>
                        <Button type="button" className="btn-game">Tìm người chơi</Button>
                        <Button type="button" className="btn-game">Thay đổi thông tin</Button>
                        <Button type="button" className="btn-game bg-dark" onClick={() => logOut()}>Đăng xuất</Button>
                    </div>
   
                </div>
            )
        }
       
        const token = localStorage.getItem('token');
        
        if(token === null || token === 'null'){
            return(<div>
                <center><h2 className="mt-100"> Vui lòng đăng nhập hoặc đăng kí để tiếp tục !</h2></center>
                <div className="centered">
                    
                    <Button type="button" className="btn-game" onClick= {()=> {window.location.href='/login'}}> Đăng nhập</Button>
                    <Button type="button" className="btn-game" onClick= {()=> {window.location.href='/register'}}> Đăng kí</Button>

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


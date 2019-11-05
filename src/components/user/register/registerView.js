import React, {useState} from 'react'
import {Redirect} from 'react-router'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import '../css/user.css'
// import {Form, Button} from 'react-bootstrap'

const RegisterView = (props) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const {isFetching, isLoggedIn, message, fetchRegister} = props;

    if(isLoggedIn)
    return(
      <Redirect push to="/" />
    );
    
    return (
        <div className = "login-register-form">
          <form className="form-signup" onSubmit={(e) => {e.preventDefault(); fetchRegister(email,password,fullName);}}>
            <h1 className="h3 mt-3 mb-4 font-weight-normal text-center">Đăng kí</h1>
            <div className="box">
              <div className="content">
                <div className="social">
                  <a id="google_login" className="circle google" href="/">
                      <i className="fa fa-google-plus fa-fw"/>
                  </a>
                  <a id="facebook_login" className="circle facebook" href="/">
                      <i className="fa fa-facebook fa-fw" />
                  </a>
                </div>
                <div className="division">
                  <div className="line left" />
                    <span>hoặc</span>
                  <div className="line right" />
                </div>
              </div>
            </div>
            
            
            <p className="text-red" >{(password !== rePassword && rePassword) ? 'Mật khẩu không trùng khớp !' : message}</p>

            <input type="text" id="full-name" className="form-control" placeholder="Họ và tên " value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
            <input type="email" id="user-email" className="form-control" placeholder="Địa chỉ Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password" id="user-pass" className="form-control" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <input type="password" id="user-repeatpass" className="form-control" placeholder="Nhập lại mật khẩu" value={rePassword} onChange={(e) => setRePassword(e.target.value)} required/>
            <button className="btn btn-primary btn-block" type="submit" disabled={isFetching || password !== rePassword}>Đăng kí</button>
            <div className="forgot">
                <span>Đã có tài khoản? </span>
                <Link to="/login">Đăng nhập</Link>
            </div>          
          </form>
        </div>
    )
}

export default RegisterView
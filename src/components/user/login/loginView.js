import React , {useState} from 'react'
import {Redirect} from 'react-router'
import 'font-awesome/css/font-awesome.min.css';
import '../css/user.css'


const LoginView = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {fetchLogin, isFetching, message} = props;
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    

    return (isLoggedIn === 'true') ? (<Redirect to="/" />) : (
      <div className="login-register-form">
        <form className="form-signin" onSubmit={(e) => {e.preventDefault();fetchLogin(email,password)}}>
          <h1 className="h3 mt-3 mb-4 font-weight-normal text-center"> Đăng nhập</h1>
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
          <p className="text-red">{message}</p>
          <input type="email" id="inputEmail" className="form-control" placeholder="Tài khoản" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" id="inputPassword" className="form-control" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="btn btn-success btn-block" type="submit" disabled={isFetching}><i className="fas fa-sign-in-alt"/> Đăng nhập</button>
          <a href="/" id="forgot_pswd" className="text-right">Quên mật khẩu ?</a>
          <hr />
          
          <button className="btn btn-primary btn-block" type="button" id="btn-signup" onClick={ () => {window.location.href=`/register`}}><i className="fa fa-user-plus" /> Tạo tài khoản</button>
        </form>
        
        <form action="/reset/password/" className="form-reset">
          <input type="email" id="resetEmail" className="form-control" placeholder="Email address" />
          <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
          <a href="/" id="cancel_reset"><i className="fas fa-angle-left" /> Back</a>
        </form>
      </div>
    )
}

export default LoginView;
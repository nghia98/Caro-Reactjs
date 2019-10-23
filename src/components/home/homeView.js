import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Game from '../../containers/FilterGame';

const homeView = () => {

    function logOut() {
        localStorage.setItem('token', null);
        window.location.href = '/login';
    }

    return (
        <div>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Button variant="primary" onClick={() => logOut()}>Đăng xuất</Button>   
            </Card>
            <Game /> 
        </div>
    )
}



export default homeView;


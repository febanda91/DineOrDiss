
import React, { Component } from 'react';
import { API_URL } from '../constants';
import {YelpContainer} from '../YelpContainer';
import {Link} from 'react-router-dom'



export class UserDisplay extends Component {


    state = {
        user: {},
        isLoading: false
    }
    

    componentDidMount(){
        fetch(`${API_URL}/users/${this.props.match.params.id}`,{
            headers:{
                Authorization: `BEARER ${this.props.token}`
            }
        })
            .then( res => res.json())
            .then( user => this.setState({ user }))
    }

    render() {
        console.log('hello')
        const {email, name} = this.state.user
        return (
            <div>
                <h1>{email}</h1>
                <p>{name}</p>
                <button className="logout" onClick={() => this.props.logOut(this.props.history)}>Logout</button>
                <button><Link to={{pathname: '/matches'}}>Matches</Link></button>
                <YelpContainer/>
            </div>
        );
    }
}


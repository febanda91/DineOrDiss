
import React, { Component } from 'react';
import { API_URL } from '../constants';
import {YelpContainer} from '../YelpContainer';
export class UserDisplay extends Component {

    state = {
        user: {}
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
       console.log(this.props)
        // const { name } = this.state.user
        return (
            <div>
                <button onClick={() => this.props.logOut(this.props.history)}>Logout</button>
                <YelpContainer/>
            </div>
        );
    }
}


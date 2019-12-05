import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../Card';
import ApiService from '../../utils/ApiService';

export default class Dashboard extends React.Component { 
  constructor() {
    super();
    this.state = {
      users: [],
    }
  }

handleCheckout = (user) => {
  ApiService.CheckoutUser(user)
    .then(res => this.setState({users: this.state.users.filter(item => item.id !== user.id)}))
    
}

  connect = () => {
    const ws = new WebSocket('ws://localhost:7000/ws');
    ws.onopen = () => {
      console.log('connected');
    }
    ws.onmessage = evt => {
      const message = JSON.parse(evt.data);
      this.setState({ users: [message.user, ...this.state.users] })
    }

    ws.onclose = () => {
      console.log('disconnected');
    }
  }

  componentDidMount() {

    ApiService.ListUsers()
      .then(res => this.setState({ users: res.users }))
      .then(() => this.connect());

  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {this.state.users.map(user => (
              <Grid xs={4} key={user.id} item>
                <Card user={user} handleCheckout={this.handleCheckout}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

import React from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import createHistory from 'history/createBrowserHistory'
 
const history = createHistory()

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

	const { phoneNumber } = this.state;
	const { history } = this.props;    

    this.setState({ error: false });

	if (!(phoneNumber === '12345678')) {
		return this.setState({ error: true });
	}
	
	store.set('loggedIn', true);
	history.push('/Overview');	
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    const { error } = this.state;

    return (
      <div class="login">
						<div class="card container">
							<div class="card-content">
								<br />
								<h4>    
									<img alt="Brand" src="src/assets/images/Logo.jpg" float="right" width="135px" />  
									<span class="login-span"> Log in</span>
									<br />
								</h4>
								
								<Form error={error} onSubmit={this.onSubmit}>											
									{error && <Message
									  error={error}
									  content="That username/password is incorrect. Try again!"
									/>}
									<div class="input-field">
											<i class="material-icons prefix">phone_android</i>
											<input type="text" name="phoneNumber" /><br />
											<label for="icon_prefix">Phone Number</label>
									</div>													
									 <div class="input-field">
											<i class="material-icons prefix">bookmark_border</i>
											<label for="icon_prefix">Remember Me:   
											<input type="checkbox" checked="checked" name="remember" class="checkbox"/></label> 
									</div>									
									<br /><br /><br />
									<div class="actions">
										<a href="/Overview" class="waves-effect waves-light btn white-text" to="Overview">Login</a>
									</div>									
								  </Form>
								 
							</div>
						</div>
					</div>
    );
  }
}

export default Login;

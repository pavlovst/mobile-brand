import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Overview from "./Overview";

class App extends React.Component {
   render() {
      return (  
				<Router>
					<div class="login">
						<div class="card container">
							<div class="card-content">
								<br />
								<h4>    
									<img alt="Brand" src="src/assets/images/Logo.jpg" float="right" width="135px" />  
									<span class="login-span"> Log in</span>
									<br />
								</h4>
								 <form>				
									<div class="input-field">
											<i class="material-icons prefix">phone_android</i>
											<input type="text" name="firstname" /><br />
											<label for="icon_prefix">Phone Number</label>
									</div>													
									 <div class="input-field">
											<i class="material-icons prefix">bookmark_border</i>
											<label for="icon_prefix">Remember Me:   
											<input type="checkbox" checked="checked" name="remember" class="checkbox"/></label> 
									</div>
									<br /><br /><br />					
									<div class="actions">										
										<Link class="waves-effect waves-light btn white-text"  to="Overview">Login</Link>										
										<Route exact={true} path="/Overview" component={Overview}/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</Router>
							
      );
   }
}
export default App;
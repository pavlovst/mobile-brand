import React, { Component } from "react";
import axios from 'axios';
import customers from '../../assets/json/users.json';
import Moment from 'react-moment';
 
class Overview extends Component {
	constructor(props) {
    super(props);

    this.state = {
      users: []	  
    };
	
	this.billingAccountNum='';
	this.statusCD=''
	this.statusDt=''
	this.planDescriptionTxt='';
	this.firstName='';
	this.lastName='';
	this.phoneNumberTxt='';
	
	this.getUserInfo = this.getUserInfo.bind(this);
   
  } 
  
  componentDidMount() {
    this.getUserInfo('6042202557');
  }

  componentWillReceiveProps({ location = {} }) {
    if (location.pathname === '/Overview' && location.pathname !== this.props.location.pathname) {
      this.getUserInfo('6042202557');
    }
  } 

  getUserInfo(phonenumber) {
	axios
    .get('http://localhost:7002/listUsers/')
    .then(res => {
        console.log(res);
        const { users }=res.data;
        this.setState({
          users: res.data         
        });		
      }
    )
    .catch(err =>
      console.log(err)
    );
	    
		/*const { users } = customers;
        this.setState({
          users: customers
        });*/
  } 
  
  render() {
	const { users } = this.state.users;	
	var user = this.state.users;	
	const listItems = user.map(d => 
	{
		this.billingAccountNum= d.billingAccountNum;
		this.statusCD=d.statusCd;
		this.statusDt=d.statusDt;
		this.subscriberList=d.subscriberList;

		const planList = d.subscriberList.map(u => 
		{
			this.planDescriptionTxt=u.planDescriptionTxt;
			this.firstName=u.name.firstName;
			this.lastName=u.name.lastName;
			this.phoneNumberTxt=u.phoneNumberTxt;
			
		});			
	});
	
	const dateToFormat = new Date(this.statusDt);
	
    return (
			<div class="navbar-wrapper">
				<div class="container">
					<div class="navbar navbar-static-top nav-wrapper style1">
						<div class="container">
							<div class="navbar-header">
								<a class="navbar-brand" href="overview.html">
								<img alt="Brand" src="src/assets/images/Logo.jpg" width="160px" /></a> 
							</div>        
							<div class="style2"> 
								<p>Logged in as {this.firstName} | Balance: ${this.statusCD} | <a href="/Login">Logout</a></p>
							</div>       
							<div id="navbar" class="navbar-collapse">                
								<nav>
									<ul class="nav navbar-nav">
										<li id="navpart1">
											<a href="#">Overview</a>
										</li>
										<li id="navpart2">
											<a href="profile.html">My Profile</a>
										</li>
										<li id="navpart3">
											<a href="payment.html">Payment</a>
										</li>
										<li id="navpart4">
											<a href="plan.html">Plan and Add-Ons</a>
										</li>
									</ul>
								</nav>                
							</div>
						</div>
					</div>
					<div class="row">
						<br />
						<h5>Overview</h5>
						<hr class="featurette-x-divider" />
						<div class="col s8">
						   <div class="row">
							   <br />                        
								<h6 class="style25">My Profile</h6>
								<div class="card container style26">
									<div class="card-content style27">

										<div class="row">
											<div class = "col s1 style4">
												<div class= "btn-floating waves-effect dark-grey lighten-4 style30">
													<i class="material-icons style31">person</i>
												</div>
											</div>

											<div class="col s7 style28">
												<h7 class="style29">
												{this.firstName} {this.lastName}
												</h7>
											</div>
										</div>

									   <hr class="featurette-x-divider style28" />                               
										<div class="style47">
											<div class="row">																					
											  <div class = "col s1 style4">
													<i class="material-icons prefix style32">email</i>
											  </div>
											   <div class="col s7">
													<p class="style33">
														Email Address
													</p>
													<p class="style34">stephan.kan@gmail.com</p>
												</div>
												<div class="col s4">
													<div class="style35">
														<p>Change Email Address ></p>
													</div>
												</div>
											</div>

											<hr class="featurette-x-divider style28" />
											<div class="row">
											  <div class = "col s1 style4">
													<i class="material-icons prefix style32">lock</i>
											  </div>
											   <div class="col s7">
													<p class="style33">
														Password
													</p>
													<p class="style36">**********</p>
												</div>
												<div class="col s4">
													<div class="style35">
														<p>Change Email Address ></p>
													</div>
												</div>
											</div>
											<hr class="featurette-x-divider style28" />
										</div>
									</div>
								</div>
							<br />                    
							<h6 class="style25">Your Accounts</h6>
								<div class="card container style37">
									<div class="card-content style27">

										<div class="row">
											<div class = "col s1 style4">
												<div class= "btn-floating waves-effect dark-grey lighten-4 style30">
													<i class="material-icons style31">phone_android</i>
												</div>
											</div>

											<div class="col s7 style28">
												<h7 class="style29">
													Mobility Account Number: {this.billingAccountNum}
												</h7>
											</div>
										</div>
										<hr class="featurette-x-divider style28" />                               
										<div class="style34">
											<div class="row">
											  <div class = "col s6 style38">
												   <div class="row">
														<p class="style39">
															Account Owner
														</p>
														<p class="style47">{this.firstName} {this.lastName}</p>
													</div>
													<div class="row">
														<p class="style39">
															Billing Address
														</p>
														<p class="style47">
															26 Thorncliffe Park Dr, East York, ON <br />
															M4H 1H9
														</p>
													</div>
											  </div>
												<div class="col s6">
													<div class="row style40">
														<p>Update Address ></p>
														<hr class="featurette-x-divider style28" />
													</div>
													<div class="row style41">
														<p>Change PIN</p>
														<hr class="featurette-x-divider style28" />
													</div>
													<br />
													<div class="row style41">
														<p>Add, Remove, and Manage Users ></p>
														<hr class="featurette-x-divider style28" />
													</div>
													<br />
													<div class="row style41">
														<p>Unlink this Service ></p>
													</div>
												</div>
											</div>
										</div>
										<hr class="featurette-x-divider style42" />
									</div>
								</div>
							<br />
							<h6 class="style25">Plan and Add-ons Usage</h6>
								<div class="card container style43">
									<div class="card-content style27">
										<div class="style34">
											<div class = "col s6 style38">
											   <div class="row">
													<p class="style39">
														Current Cycle 
													</p>
													<p class="style47">
														<Moment date={dateToFormat} />
													</p>
												</div>
												<div class="row">
													<p class="style39">
														Device
													</p>
													<p class="style34">
													{this.planDescriptionTxt}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>                
							</div>
						</div>
						<div class="featurette-y-divider"></div>                
						<div class="col s4">
						   <div class="row style44">
								<div class="card container style45">
									<div class="card-content">
										<h6 class="style16">Available Funds: ${this.statusCD}</h6>
										<h6 class="style16">Phone Number: {this.phoneNumberTxt}</h6>
										<div class="style17">
											<br />											
											<p>Next plan renewable date: Sep 28, 2018</p>
											<p>Estimated Amount due: $4.00</p>
											<br />
											<p>The amount due is based on your current Rate Plan</p>
											<br />
											<a href="#">View Payment History</a>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="card container style46">
									<div class="card-content style20">
										<div class="style47">
											<img src="src/assets/images/piggy-bank.jpg" width="40px" alt="dollar" class="style22" />
											<p>Save $2 every month with the Autopay Reward. Available on rewardds-eligible plans only.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> 
					<br /><br /><br />
					<hr class="featurette-x-divider" />
					<footer>    
						<div class="footer style47">
							<div class="row footer style22">
								<div class="col s12">					
									<div class="col s2 style23">
										<p class="style24">Get Started</p><br />
										<p>Check Your Phone</p><br />
										<p>Order a SIM Card</p><br />
										<p>Activate a SIM Card</p><br />
										<p>Set Up Account</p><br />
									</div>
									<div class="col s2  style23">
										<p class="style24">Our Plans</p><br />
										<p>Create your Own</p><br />
										<p>Coverage Maps</p><br />
									</div>
									<div class="col s2  style23">
										<p class="style24">Rewards</p><br />
										<p>Loyalty</p><br />
										<p>AutoPay</p><br />
										<p>Refer a Friend</p><br />
										<p>Help the Community</p><br />
									</div>					
									<div class="col s2  style23">
										<p class="style24">Community</p><br />
										<p>Facebook</p><br />
										<p>Twitter</p><br />
										<p>Instagram</p><br />
										<p>YouTube</p><br />
									</div>					
									<div class="col s2  style23">
										<p class="style24">Get Help</p><br />
										<p>Ask a Question</p><br />
									</div>
									<div class="col s2  style23">
										<p class="style24">My Account</p><br />
										<p>Create Account</p><br />
										<p>Visit Account</p><br />
									</div>
									<div class="col s2  style23">
										<p class="style24">Privacy and Legal</p><br />
										<p>Service Terms</p><br />
										<p>E911 Service</p><br />
										<p>CRTC Wireless</p><br />
									</div>
								</div>
							</div>
						</div>
					</footer>
				</div> 
		</div> 	
    );
  }
}
 
export default Overview;
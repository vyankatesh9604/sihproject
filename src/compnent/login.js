import React, { Component } from 'react'  
import './login.css'
import {Link,useHistory} from 'react-router-dom'
import data from './authData.json'
// userData = require('./authData.json')

const myHistory= useHistory()

const login = () => {
	
	
     const userAuth=()=>{
		let isValid = false
		let Eemail = document.getElementById("exampleInputEmail1").value;
		let Epass = document.getElementById("exampleInputPassword1").value;
		console.log(Eemail);
	    data.forEach((item)=>{
		if(Eemail===item.email && Epass===item.password){
			isValid = true
		}
		})
		if(isValid === true){
			alert('Login Successful')
			myHistory.push('/chart')

		}
		else{
			alert('Login Failed')
		}
}
	return (
			  <section className="container-fluid">
				<section className ="row justify-content-center">
					<section className="col-12 col-sm-6 col-md-3">
	            		<form className="form-container">
	            			<h2>LOGIN</h2>
							<div className="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
								<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							<div className="form-group">
								<label for="exampleInputPassword1">Password</label>
								<input type="password" className="form-control" id="exampleInputPassword1" />
							</div>
							<button  onClick={()=>userAuth()} className="btn btn-primary btn-block">Submit</button>
						</form>
					</section>
				</section>
			</section>
	
        );
}

export default login;

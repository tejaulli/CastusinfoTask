import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import swal from 'sweetalert';
import logo1 from './logo.png';
import download from './download.png';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class App extends Component {
  
  constructor(){
    
    super();
    this.state={
      employeeList : [
        {
          day : "Saturday",
		  date:"29/06",
          reg_hours :  "08",
          ot_hours : "00",
          description : " ",
          tot_hours : "11"

        },
        {
          day : "Sunday",
		  date:"29/06",
          reg_hours :  "08",
          ot_hours : "00",
          description : " ",
          tot_hours : "11"

        },
        {
          day : "Monday",
		  date:"29/06",
          reg_hours :  "08",
          ot_hours : "00",
          description : " ",
          tot_hours : "11"

        },
		{
          day : "Tuesday",
		  date:"29/06",
          reg_hours :  "08",
          ot_hours : "00",
          description : " ",
          tot_hours : "11"

        },
		{
          day : "Wednessday",
		  date:"29/06",
          reg_hours :  "08",
          ot_hours : "00",
          description : " ",
          tot_hours : "11"

        },
		{
          day : "Thursday",
		  date:"29/06",
          reg_hours :  "08",
          ot_hours : "00",
          description : " ",
          tot_hours : "11"

        },
		{
          day : "Friday",
		  date:"29/06",
          reg_hours :  "08",
          ot_hours : "00",
          description : " ",
          tot_hours : "11"

        }
		
      ],
      addEmployee : false,
      editIndex : null,
    }
    this.updateFirstName = this.updateFirstName.bind(this)
    this.updateLastName = this.updateLastName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updateSalary = this.updateSalary.bind(this)
    
  }

  //Event Functions

  login() {
    const email = document.getElementById(`email`).value;
    const password = document.getElementById('password').value;
    email === "admin@domain.com" && password === "admin" ? this.setState({
      user:{
        email : email,
        password : password    
      }
        }) : alert("Access Deneid", "Please Enter Correct Email And Password");
  }

  addEmployee() {
      this.setState({
          
          addEmployee : true,
        })
  }

  cancelAddEmployee(){
    this.setState({
      addEmployee : false,
    })
  }

  addEmployeeData(){
    
    const date = new Date();
    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    const email2 = document.getElementById(`email2`).value;
    const salary = document.getElementById(`salary`).value;
    const joinDate = date.getDate()+"/"+(+date.getMonth()+1)+"/"+date.getFullYear()
    this.state.employeeList.push(
      {
        firstName : firstName,
        lastName :  lastName,
        email : email2,
        salary : salary,
        joinDate : joinDate

      },
    )
      this.setState({
        addEmployee : false,
      })
  }

  logOut(){
    this.setState({
      user : false
    })
    
  }

  deleteEmployee(index){
   const empList = this.state.employeeList;
    empList.splice(index, 1)
   this.setState({
     empList
   })
  }

  editEmployee(index){
    
    this.setState(
      {
        editIndex : index
      }
    )
  }

  canceleditEmployee(){
    this.setState({
      editIndex : null
    })
  }

  updateEmployee(){
    const edI = this.state.editIndex
    this.state.editedFirstName && (this.state.employeeList[edI].firstName = this.state.editedFirstName)
    this.state.editedLastName && (this.state.employeeList[edI].lastName = this.state.editedLastName)
    this.state.editedEmail && (this.state.employeeList[edI].email = this.state.editedEmail)
    this.state.editedSalary && (this.state.employeeList[edI].salary = this.state.editedSalary)
    this.setState({
      // employeeList[edI].firstName : this.state.editedFirstName,
      //I Tried This But It Throws An Error 
      editIndex : null
    })
  }

  updateFirstName(e){
  this.setState({
    editedFirstName : e.target.value
  }
  )
  }

  updateLastName(e){
    this.setState({
      editedLastName : e.target.value
    })
  }

  updateEmail(e){
    this.setState({
      editedEmail : e.target.value
    })
    }
    
  updateSalary(e){
    this.setState({
      editedSalary : e.target.value
    })
      }

  //JSX Rendering Functions

  renderLogin(){
    return(
	<Card style={{height:400,width:800,marginLeft:300}}>
    <div className="loginForm">
       <img src={logo1} alt="Logo" style={{height:70,width:150}}/>
      <form>
        <div className="form-group">
          <label style={{marginLeft:-245}}>Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label style={{marginLeft:-260}}>Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password"/>
        </div>
		<a href="#"><p style={{marginLeft:150,marginBottom:20}}>Forgot Password?</p></a>
        <button type="button" className="btn btn-primary" onClick={()=>{this.login()}}>Login</button>
      </form>
    </div>  
	
	</Card>
    )
  }

  rendertoDoList(){
    return(
      
        <div style={{marginLeft:100,marginRight:100,borderWidth:1}}>
          <Card style={{height:50,backgroundColor:'#556B2F'}}>
		  <h4 style={{color:'white',marginTop:20}}>Review Timesheet - 08/02/20  to 08/09/20</h4>
		  <div style={{marginLeft:800,marginTop:-20}}>
        <button className="btn btn-warning" onClick={()=>{
          this.logOut();
        }}>Log Out</button>
      </div>
		  </Card>
          <div>
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col" className="centerAll">Day</th>
                  <th scope="col" className="centerAll">Regular Hours</th>
                  <th scope="col" className="centerAll">OT Hours</th>
                  <th scope="col" className="centerAll">Description</th>
                  <th scope="col" className="centerAll">Total Hours</th>
				  
                </tr>
              </thead>
              <tbody>
              {this.state.employeeList.map((value, index)=>{
                    return(
                      this.state.editIndex !== index ? <tr>
                            <th  className="centerAll" id={index+2}><p style={{borderWidth:10}}>{value.day}<br />{value.date}</p></th>
                            <td className="centerAll" id={index+2}><Card style={{width:30,height:30,marginLeft:100}}>{value.reg_hours}</Card></td>
                            <td className="centerAll" id={index+3}><Card style={{width:30,height:30,marginLeft:100}}>{value.ot_hours}</Card></td>
                            <td className="centerAll" id={index+2+'edit'}><Card><input/></Card></td>
                            <td className="centerAll" id={index+5}>{value.tot_hours}</td>
                    
                            
                          </tr>
                          : <tr>
                          <th scope="row" id={index+1}>{index+1}</th>
                          <td className="centerAll" id={index+2+'edit'}><input type="text" defaultValue={value.firstName} onChange={this.updateFirstName}/></td>
                          <td className="centerAll" id={index+3+'edit'}><input type="text" defaultValue={value.lastName} onChange={this.updateLastName}/></td>
                          <td className="centerAll" id={index+4+'edit'}><input type="text" defaultValue={value.email} onChange={this.updateEmail} /></td>
                          <td className="centerAll" id={index+5+'edit'}><input type="text" defaultValue={value.salary} onChange={this.updateSalary}/></td>
                          <td className="centerAll" id={index+6+'edit'}><input type="text" defaultValue={value.joinDate}/></td>
                          
                        </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
         <Card style={{marginTop:50}}> 
		 <img src={download} alt="Logo" style={{height:200,width:190}}/>
		  <img src={download} alt="Logo" style={{height:200,width:190,marginLeft:130}}/>
		   <img src={download} alt="Logo" style={{height:200,width:190,marginLeft:130}}/>
		 </Card>
        </div>
    )
    
  }

  renderAddEmployee() {
    return(
      <div className="loginForm">
        <h1 className="todoHeader">Add Employee</h1>
        <form className="addEmployeeForm">
        <div className="form-group">
          <label >First Name</label>
          <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name"/>
        </div>
        <div className="form-group">
          <label >Last Name</label>
          <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
        </div>
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control" id="email2" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label >Salary</label>
          <input type="text" className="form-control" id="salary" aria-describedby="emailHelp" placeholder="Enter Salary"/>
        </div>
        <a class="btn-floating btn-large waves-effect waves-light blue  " onClick={()=>{
        this.addEmployeeData()
        }}><i class="material-icons">+</i></a>
        </form>
        <button className="btn btn-danger addEmployeeForm" onClick={()=>{
        this.cancelAddEmployee()
        }}>Cancel</button>
      </div>
    )
  }

  renderLogOut(){
    return(
      <div className="logOut">
        <button className="btn btn-warning" onClick={()=>{
          this.logOut();
        }}>Log Out</button>
      </div>
    )
  }

  render() {
    return (
      
      <div className="App">
     
      {!this.state.user && this.renderLogin()}
      {this.state.user && !this.state.addEmployee && this.rendertoDoList()}
      {this.state.addEmployee && this.renderAddEmployee()}
      
      

      </div>
    );
  }
}

export default App;

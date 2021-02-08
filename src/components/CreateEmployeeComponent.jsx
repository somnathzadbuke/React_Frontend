import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            //id: this.props.match.params.id,
            name: '',
            mobile: '',
            email: '',
            company_name: '',
            message:''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changemobileHandler = this.changemobileHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changecompanynameHandler = this.changecompanynameHandler.bind(this);
        this.changemessageHandler = this.changemessageHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    // componentDidMount(){

    //     // step 4
    //     // if(this.state.id === '_add'){
    //     //     return
    //     // }else{
    //     //     EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
    //     //         let employee = res.data;
    //     //         this.setState({name: employee.name,
    //     //             mobile: employee.mobile,
    //     //             email : employee.email,
    //     //             company_name: employee.company_name,
    //     //             message:employee.message
    //     //         });
    //     //     });
    //     // }        
    // }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, mobile: this.state.mobile, email: this.state.email, company_name: this.state.company_name, message: this.state.message};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        //if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        //}else{
           // EmployeeService.updateEmployee(employee, this.state.id).then( res => {
              //  this.props.history.push('/employees');
            //});
        //}
    }
    
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changemobileHandler= (event) => {
        this.setState({mobile: event.target.value});
    }

    changeemailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changecompanynameHandler= (event) => {
        this.setState({company_name: event.target.value});
    }

    changemessageHandler= (event) => {
        this.setState({message: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

     getTitle(){
    //     if(this.state.id === '_add'){
             return <h3 className="text-center">Add Employee</h3>
    //     }else{
    //         return <h3 className="text-center">Update Employee</h3>
    //     }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                 {
                                    this.getTitle()
                                } 
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                defaultValue={this.state.name} onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile: </label>
                                            <input placeholder="Mobile" name="mobile" className="form-control" 
                                                defaultValue={this.state.mobile} onChange={this.changemobileHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                defaultValue={this.state.email} onChange={this.changeemailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Company Name: </label>
                                            <input placeholder="Company Name" name="company_name" className="form-control" 
                                                defaultValue={this.state.company_name} onChange={this.changecompanynameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Message: </label>
                                            <input placeholder="Message" name="message" className="form-control" 
                                                defaultValue={this.state.message} onChange={this.changemessageHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent

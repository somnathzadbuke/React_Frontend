import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputData: {},
    };
  }

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    console.log("Contact form data", this.state.inputData);

    const contactData = this.state.inputData;
    console.log("employee => " + JSON.stringify(contactData));

    EmployeeService.createEmployee(contactData).then((res) => {
      this.props.history.push("/employees");
    });
  };

  handleChange = (event) => {
    this.state.inputData[event.target.name] = event.target.value;
    this.setState({ inputData: this.state.inputData });
  };

  cancel() {
    this.props.history.push("/employees");
  }

  getTitle() {
    return <h3 className="text-center">Add Employee</h3>;
  }

  render() {
    return (
      <div className="mt-4">
        <div className="container">
          <div className="row">
            <div className="card pt-4 col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form onSubmit={this.saveOrUpdateEmployee}>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label> Mobile: </label>
                    <input
                      placeholder="Mobile"
                      name="mobile"
                      className="form-control"
                      value={this.state.mobile}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      placeholder="Email Address"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label> Company Name: </label>
                    <input
                      placeholder="Company Name"
                      name="company"
                      className="form-control"
                      value={this.state.company_name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label> Message: </label>
                    <input
                      placeholder="Message"
                      name="message"
                      className="form-control"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                  <input type="submit" className="btn btn-success" value="Save" />
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;

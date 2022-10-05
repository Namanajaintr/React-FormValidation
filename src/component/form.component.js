import React, { Component } from "react";

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

const validation = ({ error, ...rest }) => {
  let checkValidation = false;

  Object.values(error).forEach((val) => {
    if (val.length > 0) {
      checkValidation = false;
    } else {
      checkValidation = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      checkValidation = false;
    } else {
      checkValidation = true;
    }
  });

  return checkValidation;
};

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      error: {
        name: "",
        email: "",
        password: "",
      },
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (validation(this.state)) {
      console.log(this.state);
    } else {
      console.log("Error occured");
    }
  };

  formObject = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let error = { ...this.state.error };

    switch (name) {
      case "name":
        error.name =
          value.length < 5 ? "Name should be 5 characaters long" : "";
        break;
      case "email":
        error.email = regularExpression.test(value) ? "" : "Email is not valid";
        break;
      case "password":
        error.password =
          value.length < 5 ? "Password should 5 characaters long" : "";
        break;
      default:
        break;
    }

    this.setState({
      error,
      [name]: value,
    });
  };

  render() {
    const { error } = this.state;

    return (
      <div className="container">
        <div className="card mt-5">
          <form className="card-body" onSubmit={this.onFormSubmit}>
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Name</strong>
              </label>
              <input
                required
                type="text"
                name="name"
                onChange={this.formObject}
                className={
                  error.name.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />

              {error.name.length > 0 && (
                <span className="invalid-feedback">{error.name}</span>
              )}
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Email</strong>
              </label>
              <input
                required
                type="email"
                name="email"
                className={
                  error.email.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                onChange={this.formObject}
              />

              {error.email.length > 0 && (
                <span className="invalid-feedback">{error.email}</span>
              )}
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Password</strong>
              </label>
              <input
                required
                type="password"
                name="password"
                className={
                  error.password.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                onChange={this.formObject}
              />

              {error.password.length > 0 && (
                <span className="invalid-feedback">{error.password}</span>
              )}
            </div>

            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-block btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


import React, { useState } from "react";

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age: "",
    gender: "select",
    phoneNumber: "",
    email: "",
    password: "",
    Confirmpassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.dob === "" ||
      formData.age === "" ||
      formData.gender === "" ||
      formData.phoneNumber === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.Confirmpassword === ""
    ) {
      alert("Enter the data");
    }  else if (formData.age <= 0 || formData.age > 100) {
  
      alert("Invalid age");
    } 
    else if (
      formData.phoneNumber.length < 10 ||
      formData.phoneNumber.length > 10 
      
    ) {
     
      alert("Invalid PhoneNumber");
    } else if (formData.password !== formData.Confirmpassword) {
 
      alert("password do not match");
    } else {
     
      alert("You have been successfully registered.");
    }
  };

  return (
    <div>
      <h1
        style={{ backgroundColor: "pink", textAlign: "center" }}
        className="mt-3"
      >
        Welcome to Form SignIn
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#82C09A" }}
        className="container border mt-3"
      >
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            required="true"
            maxLength=" 15"
            name="name"
            className="form-control"
            placeholder="Enter name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="dob" className="form-label">
            Date OF Birth:
          </label>
          <input
            type="date"
            name="dob"
            required="true"
            className="form-control"
            placeholder="mm/dd/yyyy"
            onChange={handleChange}
            value={formData.dob}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            name="age"
            required="true"
            className="form-control"
            placeholder="Enter age"
            onChange={handleChange}
            value={formData.age}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <select
            name="gender"
            className="form-control"
            placeholder="Enter gender"
            onChange={handleChange}
            value={formData.gender}
          >
            <option value="select">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="phoneNumber" className="form-label">
            PhoneNumber:
          </label>
          <input
            type="number"
            name="phoneNumber"
            required="true"
            className="form-control"
            placeholder="Enter phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            name="email"
            required="true"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            required="true"
            minLength="5"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Confirmpassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            name="Confirmpassword"
            className="form-control"
            placeholder="Re-Enter password"
            onChange={handleChange}
            value={formData.Confirmpassword}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>

        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Form;

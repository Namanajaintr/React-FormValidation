import React, { useState } from "react";

const ValidForm = () => {
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

  const handleFormValidation = () => {
    const {
      name,
      dob,
      age,
      gender,
      phoneNumber,
      email,
      password,
      Confirmpassword,
    } = formData;
    let formErrors = {};
    let formIsValid = true;

    //Name
    if (!name) {
      formIsValid = false;
      formErrors["nameErr"] = "Name is required.";
    }

    //DOB
    if (!dob) {
      formIsValid = false;
      formErrors["dobErr"] = "Date of birth is required.";
    } else {
      var pattern =
        /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
      if (!pattern.test(dob)) {
        formIsValid = false;
        formErrors["dobErr"] = "Invalid date of birth";
      }
    }

    //Age
    if (age < 0 || age > 100) {
      formIsValid = false;
      formErrors["ageErr"] = "Select city.";
    }

    //Gender
    if (gender === "" || gender === "select") {
      formIsValid = false;
      formErrors["genderErr"] = "Select gender.";
    }

    //Phone number
    if (!phoneNumber) {
      formIsValid = false;
      formErrors["phoneNumberErr"] = "Phone number is required.";
    } else {
      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
      if (!mobPattern.test(phoneNumber)) {
        formIsValid = false;
        formErrors["phoneNumberErr"] = "Invalid phone number.";
      }
    }

    //Email
    if (!email) {
      formIsValid = false;
      formErrors["emailErr"] = "Email id is required.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      formIsValid = false;
      formErrors["emailErr"] = "Invalid email id.";
    }

    //password
    if (!password) {
      formIsValid = false;
      formErrors["passwordErr"] = "Invalid password";
    }

    //Confirmpassword
    if (!(Confirmpassword === password)) {
      formIsValid = false;
      formErrors["ConfirmpasswordErr"] = alert("Passwords do not match");
    }

    setFormData({ formErrors: formErrors });
    return formIsValid;
  };

  <div>==================================================================</div>;

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
    } else if (formData.password !== formData.Confirmpassword) {
      alert("password is not matched");
    } else if (handleFormValidation) {
      alert("You have been successfully registered.");
    } else {
      console.log(formData);
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
            className="form-control"
            placeholder="Enter phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
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

export default ValidForm;

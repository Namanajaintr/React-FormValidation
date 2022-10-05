import React, { useState } from "react";

let letters = /^[A-Za-z]+$/;
let phoneno = /^[789]\d{9}$/;
let emails = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const NewValidForm = () => {
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

  <div>==================================================================</div>;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setFormData({
      name: "",
      dob: "",
      age: "",
      gender: "select",
      phoneNumber: "",
      email: "",
      password: "",
      Confirmpassword: "",
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
    } else if (!formData.name.match(letters)) {
      //Name
      alert("Please input alphabet characters only");
    } else if (formData.age <= 0 || formData.age > 100) {
      //Age
      alert("Invalid age");
    } else if (formData.gender === "" || formData.gender === "select") {
      //Gender
      alert("select Gender");
    } else if (
      formData.phoneNumber.length < 10 ||
      formData.phoneNumber.length > 10 ||
      !formData.phoneNumber.match(phoneno)
    ) {
      //PhoneNumber
      alert("Invalid PhoneNumber");
    } else if (!formData.email.match(emails)) {
      //Email
      alert("You have entered an invalid email address!");
    } else if (formData.password !== formData.Confirmpassword) {
      //password
      alert("password do not match");
    } else {
      //Registration successful
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

        <button type="reset" className="btn btn-danger" onClick={handleClick}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default NewValidForm;

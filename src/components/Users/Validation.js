import React from "react";

const Validation = (values) => {
	let errors = {};

	if (values.fullName === "") {
		errors.fullName = "name is required";
	}
	if (values.email === "") {
		errors.email = "email is required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "email is invalid";
	}if (values.password === "") {
		errors.password = "password is required";}

	

	return errors;
};

export default Validation;

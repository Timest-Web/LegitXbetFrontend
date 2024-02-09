type ForgetPasswordProps = {
  values: {
    phoneNo: string;
  };
};

type LoginProps = {
  values: {
    phoneNo: string;
    password: string;
  };
};

type RegistrationProps = {
  values: {
    fullname: string;
    email: string;
    phoneNo: string;
    password: string;
  };
}


export const signInValidation = ({ values }: LoginProps) => {
  let errors: { [key: string]: string } = {};
  const phoneRegex = /^[0-9]{10,11}$/;
      
  if (!values.phoneNo) {
    errors.phoneNo = "Phone Number is Required";
  } else if (!phoneRegex.test(values.phoneNo)) {
    errors.phoneNo = "Phone Number must be 10 to 11 numeric value";
  }
      
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number, and password must be at least 8 characters";
  }
  return errors;
};

export const signUpValidation = ({ values }: RegistrationProps) => {
  let errors: { [key: string]: string } = {};
  const phoneRegex = /^[0-9]{10,11}$/; 

  if (!values.fullname) {
    errors.fullname = "Full Name is Required";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phoneNo) {
    errors.phoneNo = "Phone Number is Required";
  } else if (!phoneRegex.test(values.phoneNo)) {
    errors.phoneNo = "Phone Number must be 10 to 11 numeric value";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number, and password must be at least 8 characters";
  }

  return errors;
};


export const  forgetPasswordValidation = ({ values }: ForgetPasswordProps) => {
  let errors: { [key: string]: string } = {};
  const phoneRegex = /^[0-9]{10,11}$/;
      
  if (!values.phoneNo) {
    errors.phoneNo = "Phone Number is Required";
  } else if (!phoneRegex.test(values.phoneNo)) {
    errors.phoneNo = "Phone Number must be 10 to 11 numeric value";
  }
    
  return errors;
};
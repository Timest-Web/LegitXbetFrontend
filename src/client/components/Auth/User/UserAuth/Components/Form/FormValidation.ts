type Props = {
  values: {
    phoneNo: string;
    password: string;
  };
};

export const formValidation = ({ values }: Props) => {
  let errors: { [key: string]: string } = {};
  const phoneRegex = /^[0-9]{11}$/;
      
  if (!values.phoneNo) {
    errors.phoneNo = "Phone Number is Required";
  }
  // else if (!phoneRegex.test(values.phoneNo)) {
  //   errors.phoneNo =
  //     "Phone Number must be 11 numeric value";
  //     }
      
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number, and password must be at least 8 characters";
  }

  return errors;
};

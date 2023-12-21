import { ErrorToast } from "../ToastBar";

interface FormUtilsProps {
  router: any;
  authType: string;
  phoneNo: string;
  password: string;
  signInMutation: any; 
  signUpMutation: any;
  validationErrors: { phoneNo?: string; password?: string };    
  setPhoneNo: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setIsFormSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  setErrors: React.Dispatch<React.SetStateAction<{ phoneNo?: string; password?: string }>>;

}

export const handleFormSubmit = async ({
  router,
  authType,
  phoneNo,
  password,
  setErrors,
  setPhoneNo,
  setPassword,
  setIsFormSubmit,
  signUpMutation,
  signInMutation,
  validationErrors,
}: FormUtilsProps): Promise<void> => {
  if (Object.keys(validationErrors).length === 0) {
    const formattedPhoneNo = phoneNo.startsWith('0') ? `+234${phoneNo.slice(1)}` : `+234${phoneNo}`;
    const valueEnter = { phoneNumber: formattedPhoneNo, password };
    setErrors({});

    if (authType === 'Register Account') {
      const payload = await signUpMutation.mutateAsync(valueEnter);
      if (payload.message.toLowerCase().includes('exist')) {
        ErrorToast(payload?.message);
      } else if (payload.message.toLowerCase().includes('successfully')) {
        console.log(payload.user);
        window.localStorage.setItem('user', JSON.stringify(payload.user));
        setIsFormSubmit(true);
      } else {
        ErrorToast('Bad Network');
      }
    } else {
      const payload = await signInMutation.mutateAsync(valueEnter);
      if (payload.message.toLowerCase().includes('invalid')) {
        ErrorToast('Invalid Credential');
      } else if (payload.message.toLowerCase().includes('successful')) {
        router.reload();
      } else {
        ErrorToast('Bad Network');
      }
    }
  } else {
    setErrors(validationErrors);
  }
};

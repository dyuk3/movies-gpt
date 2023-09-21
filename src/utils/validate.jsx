
export const validateData = (email, password) => {

  const validateEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  // if (!validateEMail) return 'Entered Email is not valid';
  // if (!validatePassword) return 'Entered Password is not valid';

  if (!validateEmail || !validatePassword) return 'Please Enter correct Email and Password';

  return null;
};
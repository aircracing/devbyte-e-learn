
```
export const post_params = (params: {}) => {
  var dataToSend: any = params;
  var formBody: any = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
};
```
```
export const validate_pancard = (text: string) => {
  let reg = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (reg.test(text) === false) return false;
  else if (text?.length > 50) return false;
  else return true;
};
```
```
export const validate_name = (text: string) => {
  if (text?.length === 0 || text?.length > 30) return false;
  else return true;
};
```
```
export const validate_address = (text: string) => {
  if (text?.length === 0 || text?.length > 80) return false;
  else return true;
};
```
```
export const validate_email = (text: string) => {
  // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  // // let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // if (reg.test(text) === false) return false;
  // else if (text?.length > 80) return false;
  // else return true;
  let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (reg.test(text) === false) return false;
  else if (text?.length > 80)
    return false; // If you want to restrict email length to 80 characters
  else return true;
};
```
```
export const validateIFSC_code = (text: string) => {
  let reg = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  if (reg.test(text) === false) return false;
  else return true;
};
```
```
export const validate_Amount = (text: string) => {
  let reg = /^\d+(\.\d+)?$/;
  if (reg.test(text) === false) return false;
  else return true;
};
```
```
export const validate_password = (text: string) => {
  let validateState = false;
  // Validate min,max length
  // if (text?.length < 8 || text?.length > 36) validateState = "PasswordLengthError"; else validateState = true;
  // Validate lowercase letters
  let reg = /[a-z]/g;
  if (validateState === true)
    if (reg.test(text) === false) validateState = false;
    else validateState = true;
  // Validate capital letters
  reg = /[A-Z]/g;
  if (validateState === true)
    if (reg.test(text) === false) validateState = false;
    else validateState = true;
  // Validate numbers
  reg = /[0-9]/g;
  if (validateState === true)
    if (reg.test(text) === false) validateState = false;
    else validateState = true;
  //Validate special character
  reg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (validateState === true)
    if (reg.test(text) === false) validateState = false;
    else validateState = true;

  return validateState;
};
```
```
//validate 10 digit number (contains only numbers)
export const validate_number = (text: string) => {
  let reg = /^-?\d+?\d*$/;
  if (reg.test(text) === false) return false;
  else if (text?.length > 10 || text?.length < 10) return false;
  else return true;
};
```
```
//validate 6 digit number (contains only numbers)
export const validate_PIN = (text: string) => {
  let reg = /^-?\d+?\d*$/;
  if (text?.length != 6) return false;
  else if (reg.test(text) === false) return false;
  else return true;
};
```
```

export const validate_PAN = (text: string) => {
  let reg = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (text?.length != 10) return false;
  else if (reg.test(text.toUpperCase()) === false) return false;
  else return true;
};
```
```

export const validate_IFSC = (text: string) => {
  let reg = /[A-Z]{4}[0]{1}[0-9]{6}$/;
  if (text?.length != 11) return false;
  else if (reg.test(text.toUpperCase()) === false) return false;
  else return true;
};

```
```
export const differenceInDays = (date1, date2) => {
  // Convert dates to milliseconds since the Unix epoch
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const time1 = new Date(date1).getTime();
  const time2 = new Date(date2).getTime();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = Math.abs(time1 - time2);

  // Convert the difference to days
  const differenceInDays = Math.floor(
    differenceInMilliseconds / millisecondsPerDay
  );

  return differenceInDays;
};
```


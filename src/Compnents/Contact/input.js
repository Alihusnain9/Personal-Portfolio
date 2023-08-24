export default function validation(values){
  const errors = {};

  const Email_Pattern = new RegExp("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$");
  // const Name_Pattern = new RegExp("^[A-Za-z0-9]{3,16}$");

  if(!Email_Pattern.test(values.email)){
    errors.email="Invalid email address";
  }

  // Assuming you want to validate the name as well
  // if(!Name_Pattern.test(values.name)){
  //   errors.name="Invalid name";
  // }

  return errors;
}


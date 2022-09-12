
export const validate = (values) => {
  const errors = {}
  const regex = /\S+@\S+\.\S+/
  if(!values.user) errors.username = 'User is required!'
  else delete errors.username
  if(!values.name) errors.name = 'Name is required!'
  else delete errors.name
  if(!values.pass) errors.pass = 'Password is required!'
  else if(values.pass.length < 6) errors.pass = 'Password too short!'
  else delete errors.pass
  if(!values.email) errors.email = 'Email is required!'
  else if(!regex.test(values.email)) errors.email = 'Not a valid email!'
  else delete errors.email
  return errors
}
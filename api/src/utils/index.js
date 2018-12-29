import bcrypt from 'bcrypt'

export const checkPass = (password, hash) => {
  return bcrypt.compare(password, hash)
}
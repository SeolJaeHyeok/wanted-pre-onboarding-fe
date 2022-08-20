export const validateEmail = (email: string) => {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
  }

export const validataPassword = (password: string, passwordConfirm: string) => {
  if (password !== passwordConfirm) return false;
  return password.length >= 8;
}
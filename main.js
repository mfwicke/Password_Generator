const pass = document.querySelector(".password");

const passwordGenerator = () => {
  let letters = "0123456789ABCDEF!@#$%^&*()";
  let randomPass = "";
  for (let i = 0; i < 10; i++) {
    randomPass += letters[Math.floor(Math.random() * letters.length)];
  }
  //randomPass += "Nice One";
  pass.innerHTML = randomPass;
  return randomPass;
};

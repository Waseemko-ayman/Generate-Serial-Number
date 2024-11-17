let generateBtn = document.getElementById("generate-btn");
let serialLength = document.getElementById("serial-length");
let separator = document.getElementById("separator");
let serialOutput = document.getElementById("serial-output");

function generateSerial() {
  const length = parseInt(serialLength.value);

  if (!length || length <= 0) {
    alert("Please enter a valid length for the serial number.");
    return;
  }

  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let serial = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    serial += characters[randomIndex];
  }

  const regExpSerial = serial.match(/.{1,4}/g);
  const formattedSerial = regExpSerial.join(separator.value);

  serialOutput.innerHTML = formattedSerial;
  serialLength.value = "";
  separator.value = "";
}

generateBtn.addEventListener("click", () => {
  generateSerial();
});
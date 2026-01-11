const placeholders = [
  "Write a little message from your heart 💖",
  "Share a moment they’ll remember ✨",
  "What would you like to say to them?",
  "Type your special message here",
  "Create a private wish just for your loved one 💌"
];
window.onload = function () {
  const box = document.getElementById("message");
  const random = Math.floor(Math.random() * placeholders.length);
  box.placeholder = placeholders[random];
};

function generateWish() {
  const message = document.getElementById("message").value;

  if (message.trim() === "") {
    alert("Write a message first 💖");
    return;
  }

  const encoded = encodeURIComponent(message);
 const link = `https://priviwish.vercel.app/view.html?msg=${encoded}`;



  document.getElementById("output").innerHTML =
    `Scan or share this PriviWish 💖<br><a href="${link}">${link}</a>`;

  document.getElementById("qrcode").innerHTML = "";

  new QRCode(document.getElementById("qrcode"), {
    text: link,
    width: 260,
    height: 260,
    margin: 2
  });
}


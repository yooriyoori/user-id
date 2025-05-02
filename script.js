const form = document.getElementById("signupForm");

const formEvent = (e) => {
  e.preventDefault();

  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (password !== confirmPassword) {
    alert("비밀번호가 일치하지 않습니다");
    return;
  }

  const userData = {
    userId,
    password,
    confirmPassword,
    name,
    email,
    phone,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
  alert(`${userId}님, 회원가입이 완료되었습니다!`);

  gtag("config", "G-HRRBBCXT49", {
    user_id: userId,
    debug_mode: true,
  });

  gtag("event", "sign_up", {
    user_id: userId,
    method: "local_form",
  });

  form.reset();
};

form.addEventListener("submit", formEvent);

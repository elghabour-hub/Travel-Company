/*زرار الصعود لأعلي*/
let span = document.querySelector(".up");
window.onscroll = function () {
  this.scrollY >= 400
    ? span.classList.add("show")
    : span.classList.remove("show");
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
/*نهاية الزرار*/
/*اعدادات الفورم*/
realform.addEventListener("submit", function () {
  event.preventDefault();
  let fname = document.forms[0].firstname.value;
  let email = document.forms[0].email.value;
  let address = document.forms[0].address.value;
  let tele = document.forms[0].phone.value;

  if (fname.length <= 20 && fname.length != 0) {
    document.forms[0].firstname.style.borderColor = "green";
    fname = fname.trim();
  } else {
    document.forms[0].firstname.style.borderColor = "red";
    alert("لابد أن يكون الاسم مكونا من 20 حرف علي الأكثر");
  }
  if (email.includes("@gmail") || email.includes("@yahoo")) {
    document.forms[0].email.style.borderColor = "green";
    email = email.trim();
  } else {
    document.forms[0].email.style.borderColor = "red";
    alert("أدخل البريد الالكتروني بشكل صحيح(gmail/yahoo)");
  }
  if (address.length > 30 && address.length < 50 && address.length != 0) {
    document.forms[0].address.style.borderColor = "green";
    address = address.trim();
  } else {
    document.forms[0].address.style.borderColor = "red";
    alert(
      "لابد أن يكون عنوانك مكون من 30 حرف علي الأقل وأقل من 50 حرف علي الأكثر"
    );
  }
  if (tele.length == 11 && !Number.isNaN(Number(tele))) {
    document.forms[0].phone.style.borderColor = "green";
    tele = tele.trim();
  } else {
    document.forms[0].phone.style.borderColor = "red";
    alert("عفوا..الرقم الذي أدخلته غير صحيح");
  }
});
/*نهاية اعدادات الفورم*/

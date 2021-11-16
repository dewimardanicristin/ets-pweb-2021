function formValidation() {
  if (document.querySelector("#email").value == "") {
    alert("Please insert your email!");
    document.querySelector("#email").focus();
    return false;
  }

  if (document.querySelector("#password").value == "") {
    alert("Password can not be empty!");
    document.querySelector("#password").focus();
    return false;
  }
}

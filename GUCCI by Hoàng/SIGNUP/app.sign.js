let form = document.querySelector(".hoang")
let listCustomers = [];
console.log(username.value);
form.onsubmit = function () {

  if (passWord.value === password2.value) {
    let newUser = {
      name: username.value,
      passWord: passWord.value,
    };
    listCustomers.push(newUser);
    console.log(newUser);
    localStorage.setItem("listCustomers", JSON.stringify(listCustomers));
  } else if (username.value === "" || passWord.value === "") {
    swal({
      title: "Are you sure?",
      text: "dăng kí thất bại",
      icon: "warning",
    });
    // alert("dang ky that bai");
  } else { 
    
  }
};

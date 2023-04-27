let admin = JSON.parse(localStorage.getItem("dataMen"));

// console.log(admin);
let tbody = document.querySelector("#tbody");
// console.log(tbody);

let form = document.getElementById("main-form");

/**
 * thêm sảm phẩm vào admin
 */
function renderoder() {
  tbody.innerHTML = "";
  for (let i = 0; i < admin.length; i++) {
    tbody.innerHTML += `
        <tr id="${admin[i].id}">
                <th scope="row">${i + 1}</th>
                <td>${admin[i].name}</td>
                <td><img src="${admin[i].src1}" alt=""</td>
                <td><span>${admin[i].price}</span>$</td>
                <td> ${Math.floor(Math.random() * 50) + 1} </td>
                <td>
                <button id="${
                  admin[i].id
                }" class="btn btn-success btn-update update">Update</button>
                <button id="${
                  admin[i].id
                }" class="btn btn-danger btn-delete delete">Delete</button>
                </td>
          </tr>

        `;
  }
}
renderoder();

/**
 *
 * submit thêm mới sản phẩm
 */
form.onsubmit = function (e) {
  e.preventDefault();
  let adminSubmit = {
    id: admin.length + 1,
    src1: form.src1.value,
    src2: form.src2.value,
    src3: form.src3.value,
    name: form.name.value,
    price: form.price.value,
    count: 0,
    like: 0,
  };
  admin.push(adminSubmit);
  localStorage.setItem("dataMen", JSON.stringify(admin));
  renderoder();
};

/**
 * xóa sản phẩm
 */
tbody.onclick = function (e) {
  let check = -1;
  if (e.target.classList.contains("delete")) {
    // console.log("hello");
    let deleteId = e.target.id;
    console.log(deleteId);
    for (let i = 0; i < admin.length; i++) {
      if (deleteId === admin[i].id) {
        check = i;
      }
    }
  }
  admin.splice(check, 1);
  renderoder();
};

/**
 *  update sản phẩm
 */

// let updateIndex = undefined;

// tbody.onclick = function (e) {
//   if (e.target.classList.contains("update")) {
//     // console.log("hello");
//     let updateId = e.target.id;
//     // console.log(updateId);
//     let thay_doi = e.target.parentElement.parentElement;
//     let findIndex = -1;
//     for (let i = 0; i < admin.length; i++) {
//       if (admin[i].id === Number(updateId)) {
//         findIndex = i;
//       }
//     }
//     if (findIndex !== -1) {
//       updateIndex = findIndex;
//       let find = admin[findIndex];
//       console.log(find);
//       thay_doi.innerHTML = `
//         <tr id="${find.id}">
//             <th scope="row">${updateIndex + 1}</th>
//                 <td>${find.name}</td>
//                 <td><img src="${find.src1}" alt=""</td>
//                 <td><span>${find.price}</span>$</td>
//                 <td> ${Math.floor(Math.random() * 50) + 1} </td>
//                 <td>
//                 <button id="${
//                   find.id
//                 }" class="btn btn-success btn-update confirm">Confirm</button>
//                 <button id="${
//                   find.id
//                 }" class="btn btn-danger btn-delete cancel">cancel</button>
//                 </td>
//         </tr>
//         `;
//     }
//   }
//   if (e.target.classList.contains("confirm")) {
//     let name = e.target.parentElement.parentElement.children[1].children[0].value;
//     // let img = e.target.parentElement.children[2].children[0].value;
//     let price = e.target.parentElement.children[3].children[0].value;
//     let quantity = e.target.parentElement.children[4].value;
//     admin[updateIndex] = {
//       ...admin[updateIndex],
//       name: name,
//       price: price,
//       quantity: quantity,
//     };
//     localStorage.setItem("admin", JSON.stringify(admin));
//     renderoder();
//   }
// };

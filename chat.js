document.addEventListener("DOMContentLoaded", async () => {
  let logoutBtn = document.querySelector("#logout");
  let ul = document.querySelector("ul");

  logoutBtn.addEventListener("click", async (e) => {
    localStorage.removeItem("user-token");
    window.location.replace("/");
  });

  // ul.append(li)

  let { data: products } = await axios.get("https://fakestoreapi.com/products");

  console.log(products);
  products.forEach((element) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let rating = document.createElement("h4");
    let titlee = document.createElement("h3");
    let pricee = document.createElement("p");
    let descriptionn = document.createElement("p");
   
    titlee.textContent = element.title;
    img.setAttribute("src", element.image);
    pricee.textContent = "$" + element.price;
    descriptionn.textContent = element.description;
    li.append(img, titlee, descriptionn, pricee);

    ul.append(li);
  });
});

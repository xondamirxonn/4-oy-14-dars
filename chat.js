document.addEventListener("DOMContentLoaded", async () => {
  let logoutBtn = document.querySelector("#logout");
  let ul = document.querySelector("ul")

    logoutBtn.addEventListener("click", async (e) => {
      localStorage.removeItem("user-token");
      window.location.replace("/");
    });


  let li = document.createElement("li");
  let img = document.createElement("img");
  // img.setAttribute("src", )
 

  let titlee = document.createElement("h3");
  let pricee = document.createElement("p")
  let descriptionn =document.createElement("p")


  li.append(img, titlee, pricee, descriptionn);

 
  // ul.append(li)

  


  let { data: products } = await axios.get(
    "https://fakestoreapi.com/products",
    {
      image:img,
      title:titlee,
      price:pricee,
      description:descriptionn,

    },
    
    );


    console.log(products);

  
});



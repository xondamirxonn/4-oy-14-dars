document.addEventListener("DOMContentLoaded", async () => {
  let form = document.querySelector("form");
  let alertP = document.querySelector("#alert-p")

  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    let userName = form[0].value;
    let passWord = form[1].value;
    
    let error;
    
    setTimeout(() => {
      alertP.remove()
      
    }, 3_000);

  
      
      alertP.classList.add(
        "mx-auto",
        "rounded-3",
        "bg-danger",
        "py-3",
        "w-50",
        "d-flex",
        "justify-content-center",
        
        
      );
   
      

    try {
      let {
        data: { token },
      } = await axios.post(`https://fakestoreapi.com/auth/login`, {
        username:userName,
        password:passWord,
      });
      localStorage.setItem("user-token", token);
      localStorage.getItem("user-token");
      console.log( token);
    } catch (e) {
      error = e.response.data;
      alertP.innerHTML = error

      
    }
    if(localStorage.getItem("user-token")){
      window.location.replace('/chat.html')
    } 
    
    form.reset();
  });
});

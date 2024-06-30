const loadAllusers =() =>{
    fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
        displayAllusers(data)
    })
}

const displaySingleUser =(id)=>{
    console.log(id)

}


const displayAllusers =(users) =>{
    users.forEach((user) =>{
        console.log(user)
        const parent = document.getElementById("user-container")
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
          <div class="card-body">
          <h5>Name: ${user.name.firstname} ${user.name.lastname} </h5>
          <h5>Username: ${user.username}</h5>
          <h5>Phone: ${user.phone}</h5>
          <h5>Email: ${user.email}</h5>
          <button class="btn btn-primary" onclick="displaySingleUser('${user.id}')">Show Details</button>
          </div>
    
        `
        parent.appendChild(div)
    })

}

loadAllusers()

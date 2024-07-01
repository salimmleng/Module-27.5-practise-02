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
    fetch(`https://fakestoreapi.com/users/${id}`)
    .then((res) => res.json())
    .then((user) =>{
        console.log(user)
        const modalBody = document.getElementById("modal-body")
        modalBody.innerHTML = ""
        const div = document.createElement("div")
        div.innerHTML=`
           
          <h5>Name: ${user.name.firstname} ${user.name.lastname} </h5>
          <h5>Username: ${user.username}</h5>
          <h5>Phone: ${user.phone}</h5>
          <h5>Email: ${user.email}</h5>
          <h5>Address: city-${user.address.city}, Street: ${user.address.street},Road number: ${user.address.number}</h5>
        `
        modalBody.appendChild(div)
        const showModal = new bootstrap.Modal(document.getElementById('modal'));
        showModal.show();
       
    })

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
          <h5>Address: city-${user.address.city}, Street: ${user.address.street},Road number: ${user.address.number}</h5>
          <button class="btn btn-primary" onclick="displaySingleUser('${user.id}')">Show Details</button>
          </div>
    
        `
        parent.appendChild(div)
    })

}

loadAllusers()


// add new user

fetch('https://fakestoreapi.com/users',{
    
    method:"POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(
        {
            email:'Salim@gmail.com',
            username:'salim',
            password:'m38rmF$',
            name:{
                firstname:'Salim',
                lastname:'Hossain'
            },
            address:{
                city:'Dhaka',
                street:'Adabor,10',
                number:3,
                zipcode:'12926-3874',
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone:'0157...'
        }
    )
})
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
        console.log('New user created with ID:', data.id)
    })


//  user login

fetch('https://fakestoreapi.com/auth/login',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        username: "hopkins",
        password: "William56$hj"
    })
})
    .then((res)=>res.json())
    .then((data)=>{
        console.log('Login successful:', data);

    })
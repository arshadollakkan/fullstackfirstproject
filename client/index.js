let input=document.querySelector('input')
let button1=document.querySelector('button')
let details=document.querySelector('.details')

button1.onclick=()=>{
    fetch("http://localhost:3000/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
              id:new Date(),
              name:input.value
        })// data send cheyyan
    }).then(res=>res.json()).then(data=>{
        console.log(data)// /useril backend kodutha res.json ivade kittum
        fetchtwo()
          input.value=''
    })

    
  
  // value clear cheyyan
    
}

 function fetchtwo() {
    let section=''
     fetch('http://localhost:3000/adduser').then(res=>res.json()).then(data=>{//array kittum /adduseril backend kodutha res.json ivade kittum ath push cheytha array ann
        data.forEach(element => {
            section =`<section>${element.name}<section>`
        });
        details.insertAdjacentHTML('beforeend',section)
        console.log(data);
        
     })
}





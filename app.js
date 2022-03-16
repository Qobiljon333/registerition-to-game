const iname = document.querySelector(".iname")
const iage = document.querySelector(".iage")
const ipassword = document.querySelector(".ipassword")
const form = document.querySelector(".form")
const root = document.querySelector(".root")
const isMerried = document.querySelector("#isMerried")
const gender = document.querySelector("#gender")
const SearchName = document.querySelector(".Search_name")
const faUsers = document.querySelector(".fa-users")
const faUserPen = document.querySelector(".fa-user-pen") /// change

let users = []


form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let radioValue = document.querySelector('.gender[name="gender"]:checked').value;

    let newUser = {
        name: iname.value,
        age: iage.value,
        password: ipassword.value,
        isMerried: document.querySelector('.icheckbox').checked,
        gender : radioValue
    }


    if(users === null){
        users = [
            {
                name: "User",
                age: "18",
                password:0000,
                isMerried:false,
                gender : "male"
            }
        ]
    }
    
    users.push(newUser)

    // console.log(users);

    localStorage.setItem("blogs",JSON.stringify([...users]))

    console.log(users);

    // createTable(users)
    while(root.firstChild){
        root.removeChild(root.firstChild)
    }
    getToTable()

    // getText()


    // createTable(users)
    iname.value = ""
    iage.value = ""
    ipassword.value = ""
})



function getText(){
    users = JSON.parse(localStorage.getItem("blogs")) // localStorage dan arrayga aylantirish
    return users
}


isMerried.addEventListener("click",e=>{
    let isMerriedValue = e.target.value
    createTable(users)


})

function getToTable(){
    createTable(users)
}
createTable( getText())
function createTable(data){

    if(data === null){
        data = [
            {
                name: "User",
                age: "18",
                password:0000,
                isMerried:false,
                gender : "male"
            }
        ]
    }
    while(root.firstChild){
        root.removeChild(root.firstChild)
    }

    data.forEach((user, index ) =>{
        if(index === 0){
            return
        }
        // console.log(isMerried.value);
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${index}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>****</td>
            <td>${user.isMerried}</td>
            <td>${user.gender}</td>
        `
        root.appendChild(tr)
    })
}




                ///  uylanganlarni Filterlash
isMerried.addEventListener("click",e=>{
    let isMerriedValue = e.target.value
    while(root.firstChild){
        root.removeChild(root.firstChild)
    }
   
    // createTable(users)


    if(users === null){
        users = [
            {
                name: "User",
                age: "18",
                password:0000,
                isMerried:false,
                gender : "male"
            }
        ]
    }
    // uylangan va uylanmaganlar uchn  if
    if(isMerriedValue ==="all"){
        let allContions = users.filter(user=> user.isMerried === true ||user.isMerried === false )
      allContions.forEach((user, index ) =>{
        if(index === 0){
            return
        }
        
        // console.log(isMerried.value);
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${index}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>*******</td>
            <td>${user.isMerried} </td>
            <td>${user.gender}</i></td>
        `
        root.appendChild(tr)
    })
    }


    // uylanganlar uchin if()
    if(isMerriedValue === "merried"){
        
        let allMarried = users.filter(user=> user.isMerried)
       
        allMarried.forEach((user, index ) =>{
        // if(index === 0){
        //     return
        // }
        
        // console.log(isMerried.value);
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${index +1}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>*******</td>
            <td>${user.isMerried}</td>
            <td>${user.gender}</td>
        `
        root.appendChild(tr)
    })
    }



    // uylanmaganlar uchn if()

    if(isMerriedValue === "unmerried"){
        
        let allMarried = users.filter(user=> !user.isMerried)
       
        allMarried.forEach((user, index ) =>{
        if(index === 0){
            return
        }
        
        // console.log(isMerried.value);
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${index }</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>*******</td>
            <td>${user.isMerried}</td>
            <td>${user.gender}</td>
        `
        root.appendChild(tr)
    })
    }

})


             /// Jins bo'yicha qidirish
gender.addEventListener("click",e=>{
    let genderValue = e.target.value

    ///  tozalash uchn
    while(root.firstChild){
        root.removeChild(root.firstChild)
    }

    if(genderValue === "all"){
        let allContions = users.filter(user=> user.gender === "male" ||user.gender === "female" )
        allContions.forEach((user, index ) =>{
          if(index === 0){
              return
          }
          
          // console.log(isMerried.value);
          let tr = document.createElement("tr")
          tr.innerHTML = `
              <td>${index}</td>
              <td>${user.name}</td>
              <td>${user.age}</td>
              <td>*******</td>
              <td>${user.isMerried}</td>
              <td>${user.gender}</td>
          `
          root.appendChild(tr)
      })
    }

    


    // erkaklarni uchn if()
    if(genderValue === "male"){
        let maleUsers = users.filter(user => user.gender ==="male")

        maleUsers.forEach((user, index ) =>{
            if(index === 0){
                return
            }
            
            // console.log(isMerried.value);
            let tr = document.createElement("tr")
            tr.innerHTML = `
                <td>${index}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>*******</td>
                <td>${user.isMerried}</td>
                <td>${user.gender}</td>
            `
            root.appendChild(tr)
        })

    }


    ///  ayollar  uchn if()
    if(genderValue ==="female"){

       
            /// female ni filter qilish
            let femaleUsers = users.filter(user => user.gender === "female")
    
            femaleUsers.forEach((user, index ) =>{
                // if(index === 0){
                //     return
                // }
                
                // console.log(isMerried.value);
                let tr = document.createElement("tr")
                tr.innerHTML = `
                    <td>${index +1}</td>
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                    <td>*******</td>
                    <td>${user.isMerried}</td>
                    <td>${user.gender}</td>
                `
                root.appendChild(tr)
            })
    
       
    }
})


///////            Ism Bo'yicha Qidirish
SearchName.addEventListener("input",e=>{
    e.preventDefault
    const inputValue = e.target.value
    while(root.firstChild){
        root.removeChild(root.firstChild)
    }



    ///show all users
    faUsers.addEventListener("click",()=>{
        e.target.value = ""
        
        getToTable()
    
        console.log("Salom");
    
    })

    let newData =[]
    users.forEach(user=>{
        if(user.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1){
            newData.push(user)
        }
    })
    createTable(newData)



    // users.forEach((user,index) =>{
    //     if(inputValue !== user.name){
    //         return
    //     }else{
           
    //         let tr = document.createElement("tr")
    //         tr.innerHTML = `
    //             <td>${index}</td>
    //             <td>${user.name}</td>
    //             <td>${user.age}</td>
    //             <td>*******</td>
    //             <td>${user.isMerried}</td>
    //             <td>${user.gender}</td>
    //         `
    //         root.appendChild(tr)
    //     }

    // })
  

})


 








// function ${user.password.length  }
// homework

// Sort -->  male | female
// Sort -->  ismarried
// localstorage 
// style


// name search


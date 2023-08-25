let students=[];
let cities = ["Dindigul", "Madurai", "Theni", "Kanyakumari", "Chennai", "Karur", "Vadachennai", "Selam"];

function add() {


 let name=document.getElementById('name').value;
 let email=document.getElementById('email').value;

 let student={
  name:name,
  email:email
 };
 adduser(student);
 displayUser();
  console.log(students)
  


}
function adduser(student) {
  let existingUser = students.filter((userInput) => {
    return student.email == userInput.email;
  });

  if (existingUser.length == 0) {
    students.push(student);
    addedfunction();
    
  } else {
    alreadyexist();
  }
}
function addedfunction(){
  let addedfunction= document.getElementById('alert-success');
  addedfunction.classList.remove('alert');
  addedfunction.classList.add('alert-success');
  
  setTimeout(()=>{
   addedfunction.classList.remove('alert-success');
   addedfunction.classList.add('alert');
  },2000)
  
 }
 function alreadyexist(){
   let addedfunction= document.getElementById('alert-danger');
   addedfunction.classList.remove('alert');
   addedfunction.classList.add('alert-danger');
   setTimeout(()=>{
    addedfunction.classList.remove('alert-danger');
    addedfunction.classList.add('alert');
   },2000)
  }
function displayUser(){
  
  let studentcontainer=document.getElementById('rightcontainer');
  studentcontainer.innerHTML=" ";
  students.map((a)=>{
    let user = document.createElement('div')
    user.classList.add('student');
    let nameelement=document.createElement('p');
    nameelement.innerText=a.name;
    let emailelement=document.createElement('p');
    emailelement.innerText=a.email;
    let cityelement=document.createElement('p');
    cityelement.innerText=getrandomcity();
    
  
    studentcontainer.appendChild(user);
    user.appendChild(nameelement);
    user.appendChild(emailelement);
    user.appendChild(cityelement);
  })
 

}
function getrandomcity(){
   let cityuser= cities[Math.floor( Math.random()*cities.length) ] ;
   return cityuser;
}
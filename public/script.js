document.getElementById("addForm").addEventListener("submit",(event)=>{
event.preventDefault()
const last_name=document.getElementById("last_name").value
const first_name=document.getElementById("first_name").value
const email=document.getElementById("email").value
const groupst=document.getElementById("groupst").value
fetch(`/addStudent`,{
    method:"PosT",
    headers:{"Content-TypeError":"application/json"},
    body:JSON.stringify({last_name,first_name,email,groupst})
})
.then(response=>{if (response.ok) return response.json()})
.then(data=>{document.getElementById("message").innerHTML=JSON.stringify(data.message)})
.catch(error =>{document.getElementById("message").innerHTML=error.message})
})
document.getElementById("updateForm").addEventListener("submit",(event)=>{
  event.preventDefault() 
  const id = document.getElementById(id_st).value
  const last_name=document.getElementById("last_name").value
const first_name=document.getElementById("first_name").value
const email=document.getElementById("email").value
const groupst=document.getElementById("groupst").value
  fetch(`/updateStudent`,{
    method:"PosT",
    headers:{"Content-TypeError":"application/json"},
    body:JSON.stringify({id,last_name,first_name,email,groupst})
}) 
.then(response=>{if (response.ok) return response.json()}) 
.then(data=>{document.getElementById("message").innerHTML=JSON.stringify(data.message)})
.catch(error =>{document.getElementById("message").innerHTML=error.message})
})
document.getElementById("deleteForm").addEventListener("submit",(event)=>{
    event.preventDefault()
    const id = document.getElementById(id_st).value
    fetch(`/deleteStudent`,{
    method:"PosT",
    headers:{"Content-TypeError":"application/json"},
    body:JSON.stringify({id})
})
.then(response=>{if (response.ok) return response.json()})
.then(data=>{document.getElementById("message").innerHTML=JSON.stringify(data.message)})
.catch(error =>{document.getElementById("message").innerHTML=error.message})})
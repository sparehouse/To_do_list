const myform = document.forms[0],
uname = document.getElementById("uname"),
uemail=document.getElementById("uemail"),
upass=document.getElementById("upass"),
confpass=document.getElementById("urepass")

 
myform.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(validate())
    e.currentTarget.submit()
//b   window.location.href=""
    
})
myform.addEventListener("reset",()=>{
    window.location.reload()
})

const setError = (input,errorMsg)=>{
   const inputControl = input.parentElement
   const errorParagraph = inputControl.querySelector(".error")
   errorParagraph.innerText =errorMsg
   inputControl.classList.remove("succsess")
   inputControl.classList.add("error")

}

const setSuccess=(input)=>{
    const inputControl = input.parentElement
    const errorParagraph = inputControl.querySelector(".error")
    errorParagraph.innerText=""
    inputControl.classList.remove("error")
    inputControl.classList.add("succsess")
}

const validate=()=>{
    let valid=true
//validate name
if(uname.value===""){
    setError(uname,"name is required")
    valid=false
}else{
    setSuccess(uname)
}
//validate eamil
if(!uemail.value.includes("@")){
    setError(uemail,"inavalid email")
    valid=false
}else{
    setSuccess(uemail)
}
//validate password
if(upass.value.length<8){
    setError(upass,"password must be greater than 8")
    valid=false
}else{
    setSuccess(upass)
}

//validate confirm password
if(confpass.value!=upass.value){
    setError(confpass,"not identical")
    valid=false
}else{
    setSuccess(confpass)
}
return valid
}
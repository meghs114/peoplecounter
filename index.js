let countel= document.getElementById("count-el")
let count=0
function increment(){
  count+=1
  countel.textContent=count
}
let saveel=document.getElementById("save-el")
function save(){
  let counter= count+" - "
  saveel.textContent+=counter
  console.log(saveel)
  countel.textContent=0
  count=0 
}

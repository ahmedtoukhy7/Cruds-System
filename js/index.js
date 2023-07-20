 var nameInput= document.getElementById("productName")
 var priceInput= document.getElementById("productPrice")
 var categoryInput= document.getElementById("productCategory")
 var descriptionInput= document.getElementById("productDescription")
 var click = document.getElementById("click")
 var updateclick= document.getElementById("updateclick")
 var btnUpdate = document.getElementById('btnUpdate')
 var searchinput=document.getElementById("searchinput")
 var validname=document.querySelector(".validname")
 var validprice=document.querySelector(".validprice")
 var validdesc=document.querySelector(".validdesc")


//  var mood ='create'
//  var tmp;



 //add product

 var arrList=[]

 if(localStorage.getItem("arrList") != null){
    arrList=JSON.parse(localStorage.getItem("arrList"))
    displayProduct(arrList)
 }
 function addProduct(){

   var product={
      name:nameInput.value,
      price:priceInput.value,
      caregory:categoryInput.value,
      description:descriptionInput.value
  }

   if(validationName()==true && validationPrice()==true && validDesc()==true) {
     
 
     arrList.push(product)
    
    
 
     localStorage.setItem("arrList",JSON.stringify(arrList))
     console.log(arrList)
 
     displayProduct (arrList)
     
   }
   
// if(mood==='create'){
   //  arrList.push(product)
   // }
   // else{
   //  arrList[tmp]=product
   //  click.innerHTML="Add Product"
   // }
 }


 function displayProduct (arr,val){
    var temp=""
    for(var i=0;i< arr.length;i++){
        temp+= `
        <tr>

        <td>${i}</td>
        <td>${arr[i].name.toLowerCase().replace(searchinput.value,`<span class='text-danger'>${searchinput.value}</span>`)}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].caregory.toLowerCase().replace(searchinput.value,`<span class='text-danger'>${searchinput.value}</span>`)}</td>
        <td>${arr[i].description}</td>
        <td>
            <button onclick="newUpdate (${i})"  class="btn btn-outline-warning">Update</button>
        </td>
        <td>
            <button onclick ="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
        </td>
    </tr>`
    }

    document.getElementById("tableBody").innerHTML=temp
 }


 function clear(){
    nameInput.value=""
    priceInput.value=""
    categoryInput.value="TV"
    descriptionInput.value=""
 }



 function deleteProduct(index){
    //console.log(index)

    arrList.splice(index,1)
    localStorage.setItem("arrList",JSON.stringify(arrList))
    displayProduct(arrList)
 }


//  function updateProduct(index){
    
//     var result = arrList[index]
//     console.log(result)

//     nameInput.value=result.name
//     priceInput.value=result.price
//     categoryInput.value=result.caregory
//     descriptionInput.value=result.description
//     click.innerHTML="Update"

//     mood='update'
//     tmp=index


   




//  }




function newUpdate (index){
//console.log(index)

btnUpdate.classList.replace('d-none','d-block')
click.classList.replace('d-block','d-none')

var res= arrList[index]
//console.log(res)

nameInput.value=res.name
priceInput.value=res.price
categoryInput.value=res.caregory
descriptionInput.value=res.description
console.log(res)


btnUpdate.onclick=function(){
  if(validationName()==true){
   res.name=nameInput.value
   res.price=priceInput.value
   res.caregory=categoryInput.value
   res.description=descriptionInput.value

   console.log(res)

   arrList[index]=res
   console.log(arrList)
   localStorage.setItem("arrList",JSON.stringify(arrList))
   displayProduct(arrList)
  }
  else{
   alert("enter valid name start capital")
  }
}

}



//search


function searchProduct (nameInput,category){
var machedArr=[]
   for(var i=0;i<arrList.length;i++){
      if(arrList[i].name.toLowerCase().includes(nameInput.toLowerCase()) ==true || arrList[i].caregory.toLowerCase().includes(category.toLowerCase())  ==true)
      {
         machedArr.push(arrList[i])
      }
      
   }
   displayProduct(machedArr)

}

nameInput.addEventListener("keyup",validationName)
priceInput.addEventListener("keyup",validationPrice)
descriptionInput.addEventListener("keyup",validDesc)
// validation input

function validationName(){
   var regex=/^[A-Z][a-z]{3,10}/

   if(regex.test(nameInput.value)) {
      validname.classList.add("d-none")
      validname.classList.remove("d-block")
      nameInput.classList.add("is-valid")
      nameInput.classList.remove("is-invalid")
      return true

   }
   else{
      validname.classList.add("d-block")
      validname.classList.remove("d-none")
      nameInput.classList.add("is-invalid")
      nameInput.classList.remove("is-valid")
      return false
   }
}

function validationPrice(){
   var regex=/^[1-9][0-9]{2,5}$/
   if(regex.test(priceInput.value)) {
      validprice.classList.add("d-none")
      validprice.classList.remove("d-block")
      priceInput.classList.add("is-valid")
      priceInput.classList.remove("is-invalid")
      return true
   }
   else{
      validprice.classList.add("d-block")
      validprice.classList.remove("d-none")
      priceInput.classList.add("is-invalid")
      priceInput.classList.remove("is-valid")
      return false
   }
}


function validDesc(){
   regex=/^[a-zA-z0-9]{3,20}$/
   if(regex.test(descriptionInput.value)){
      validdesc.classList.add("d-none")
      validdesc.classList.remove("d-block")
      descriptionInput.classList.add("is-valid")
      descriptionInput.classList.remove("is-invalid")
      return true

   }
   else{
      validdesc.classList.add("d-block")
      validdesc.classList.remove("d-none")
      descriptionInput.classList.add("is-invalid")
      descriptionInput.classList.remove("is-valid")
      return false
   }
}




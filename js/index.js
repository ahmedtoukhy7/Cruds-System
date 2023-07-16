 var nameInput= document.getElementById("productName")
 var priceInput= document.getElementById("productPrice")
 var categoryInput= document.getElementById("productCategory")
 var descriptionInput= document.getElementById("productDescription")
 var click = document.getElementById("click")
 var updateclick= document.getElementById("updateclick")
 var btnUpdate = document.getElementById('btnUpdate')
 var searchinput=document.getElementById("searchinput")


//  var mood ='create'
//  var tmp;



 //add product

 var arrList=[]

 if(localStorage.getItem("arrList") != null){
    arrList=JSON.parse(localStorage.getItem("arrList"))
    displayProduct(arrList)
 }
 function addProduct(){

    
   if(validationName()==true && validationPrice()==true){
      var product={
         name:nameInput.value,
         price:priceInput.value,
         caregory:categoryInput.value,
         description:descriptionInput.value
     }
 
     arrList.push(product)
    
    
 
     localStorage.setItem("arrList",JSON.stringify(arrList))
     console.log(arrList)
 
     displayProduct (arrList)
     
   }
   else{
      alert("enter valid data")
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


// validation input

function validationName(){
   var regex=/^[A-Z][a-z]{3,10}/

   return regex.test(nameInput.value)
}

function validationPrice(){
   var regex=/^[1-9][0-9]{2,5}$/
   return regex.test(priceInput.value)
}




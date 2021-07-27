var a=document.getElementById('container')
var b=document.getElementById('inp')


function AddTodo(){

  var newElement=document.createElement('P')
  var text=b.value
    
  text=document.createTextNode(text)

  newElement.appendChild(text)
  a.appendChild(newElement)


  b.value=""

// Delete Button
  var delBtn=document.createElement('button')
  var delBtnText=document.createTextNode('delete')
delBtn.setAttribute("class","dBtn")
  delBtn.appendChild(delBtnText)
  newElement.appendChild(delBtn)

delBtn.setAttribute('onclick','del(this)')


// edit button
 var edt=document.createElement('button')
 var edtText=document.createTextNode('edit')
 edt.appendChild(edtText)
 newElement.appendChild(edt)
 edt.setAttribute("onclick","edit(this)") 
edt.setAttribute("class","eBtn")



  
}


function edit(e){

var edtBtn=prompt("Edit Todo",e.parentNode.firstChild.nodeValue)

e.parentNode.firstChild.nodeValue=edtBtn



  // console.log(e.parentNode.firstChild)
  
}


function del(e){
  
e.parentNode.remove()


}

function delAll(){
a.innerHTML=""
}

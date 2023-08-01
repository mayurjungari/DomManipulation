var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit', addItem);
itemlist.addEventListener('click', removeItem);
filter.addEventListener('keyup',filterItems)



 
//-----Add Item-----------function
function addItem(e)
{
  e.preventDefault();
  // get invut value
  var newItem=document.getElementById('item').value;
  var descre=document.getElementById('description').value;
 // create new list
  var li= document.createElement('li');
  //add class to li
  li.className='list-group-item';
  //add new item to li
  li.appendChild(document.createTextNode(newItem+' :-')) 
  
  li.appendChild(document.createTextNode(descre)) 
  //adding delebutton at the end
  var deletebtn=document.createElement('button')
  var editbtn=document.createElement('button')
  deletebtn.className='btn btn-danger btn-sm float-right delete'
  editbtn.className='btn btn-primary btn-sm float-right edit'

  //add text node
  deletebtn.appendChild(document.createTextNode('X'))
  editbtn.appendChild(document.createTextNode('edits'))
  li.appendChild(deletebtn)
  li.appendChild(editbtn)
  //adding li to item list
  itemlist.appendChild(li)

}
function removeItem(e)
{
  if(e.target.classList.contains('delete'))
  if(confirm('Are You Sure'))
  {
    var li=e.target.parentElement;
    itemlist.removeChild(li)
  }
}
//filter name
function filterItems(e)
{
  //convert text to lower case
  var text=e.target.value.toLowerCase();
  
   var items=itemlist.getElementsByTagName('li');
   
  // //convert to array
  Array.from(items).forEach(function(item){
     var itemName=item.firstChild.textContent;
     var itemdesc=item.textContent.replace(itemName,'').trim();
     //combine name and description
   var combinedText=itemName.toLowerCase()+' '+ itemdesc.toLowerCase()
     if(combinedText.indexOf(text)!==-1)
    {
      item.style.display='block';
    }
    
     else{ item.style.display='none';
  }
  });
}


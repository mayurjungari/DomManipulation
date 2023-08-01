var form=document.getElementById('addForm')
var itemlist=document.getElementById('items')
form.addEventListener('submit', addItem);
itemlist.addEventListener('click', removeItem);




//-----Add Item-----------function
function addItem(e)
{
  e.preventDefault();
  // get invut value
  var newItem=document.getElementById('item').value;
 // create new list
  var li= document.createElement('li');
  //add class to li
  li.className='list-group-item';
  //add new item to li
  li.appendChild(document.createTextNode(newItem)) 
  //adding delebutton at the end
  var deletebtn=document.createElement('button')
  var editbtn=document.createElement('button')
  editbtn.className=("btn btn-primary btn-sm float-right edit")
  deletebtn.className='btn btn-danger btn-sm float-right delete'
  //add text node
  deletebtn.appendChild(document.createTextNode('X'))
  editbtn.appendChild(document.createTextNode('e'))
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

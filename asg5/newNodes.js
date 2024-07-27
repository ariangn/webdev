let obj = document.getElementById("button");
obj.addEventListener("click", addNode);

function addNode() {
    let node_list = document.createElement("li");
    let textnode = document.createTextNode("genmaicha");
    let node_list2 = document.createElement("li");
    let textnode2 = document.createTextNode("rooibos");
    node_list.appendChild(textnode);

    node_list2.appendChild(textnode2);

    document.getElementById("teas").appendChild(node_list);
    document.getElementById("teas").appendChild(node_list2);

let listItems = document.querySelectorAll('li');          
for (let i = 0; i < listItems.length; i++) {            
  listItems[i].className = 'teaName'; 
  }
let tea = document.getElementsByClassName('teaName'); 
for(let i = 0; i < tea.length; i ++){
  if(tea[i].style.backgroundColor == '#F6B9C6'){
    tea[i].style.backgroundColor = '#F3EEE8';
  }
  else{
    tea[i].style.backgroundColor = '#F6B9C6';
  }
}

}
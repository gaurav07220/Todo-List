let textItem = document.getElementById('textItem');
let addBtn = document.getElementById('addBtn');
let data = [];



addBtn.addEventListener('click', () => {

  if (textItem.value.length == 0) {
    alert('plsease add something')
  }

  else {
    function addText(text) {
      let listItem = document.createElement('li');
      listItem.className = "listItems"
      listItem.innerHTML = `${text} <i><img src="cancel.png" class="deleteImg"></i>`
      document.getElementById('todoUl').append(listItem)
      data.push({
        Text: text
      })
      localStorage.setItem('List Item', JSON.stringify(data))

      listItem.querySelector('.deleteImg').addEventListener('click', () => {
        listItem.remove();
      })

    }


  }
  
  addText(textItem.value);
  textItem.value = ""

})


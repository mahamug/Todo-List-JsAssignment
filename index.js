const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const searchInputBox = document.getElementById('searchInput-box')
const searchButton = document.getElementById('search-button')

function addTask() {
  if (inputBox.value === '') {
    alert('You must write something')
  } else {
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML =
      '\u00d7' /*to add content in span ,u00d7 is for make cross icon */
    li.appendChild(span) /*to display the span content */
  }
  inputBox.value = ''
  saveData() //whenever we write item it saves it in local storage
}

function searchTask() {
  let filter = document.getElementById('searchInput-box').value.toUpperCase()
  let li = listContainer.getElementsByTagName('li')
  for (var i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('li')[0]
    let textvalue = li[i].textContent || li[i].innerHTML
    if (textvalue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      //target click kidhr kiya if click on li then do this
      e.target.classList.toggle('checked') //classlist.toggle ki waja se agr item checked already unchecked it
      saveData()
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove()
      saveData()
    }
  },
  false,
) /*js for click function*/

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML) //data is name listcontiner.innerhtml is value that we want to save in browser
}

function showTask() {
  //when we open browser it shows tasks
  listContainer.innerHTML = localStorage.getItem('data')
}
showTask()

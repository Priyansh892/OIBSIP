const taskForm = document.getElementById('taskForm');
const Pending = document.getElementById('Pending');
const Completed=document.getElementById('Completed');
taskForm.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();
  
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  const newRow = document.createElement('tr');
  const newTitle = document.createElement('td');
  const newDescription = document.createElement('td');
  const deleteButton=document.createElement('td');
  const completeButton=document.createElement('td');

    const delete_item = document.createElement('button');
		delete_item.classList.add('delete','btn','btn-danger','fa','fa-trash');

    const complete_item = document.createElement('button');
		complete_item.classList.add('complete','btn','btn-success','fa','fa-list');
  
  newTitle.innerText = title;
  newDescription.innerText = description;
  deleteButton.appendChild(delete_item);
  completeButton.appendChild(complete_item);
  
  newRow.appendChild(newTitle);
  newRow.appendChild(newDescription);
  newRow.appendChild(deleteButton);
  newRow.appendChild(completeButton);
  
  Pending.querySelector('tbody').appendChild(newRow);

  		deleteButton.addEventListener('click', (e) => {
			newRow.remove();
		});
    completeButton.addEventListener('click',(e)=>{
      completeButton.remove();
      Completed.querySelector('tbody').appendChild(newRow);
    });

    taskForm.reset();
}
import './css/reset.css';
import './css/style.css';

document.getElementById('add-button').addEventListener('click', () => {
  onClickAdd();
  initValue();
});

const onClickAdd = () => {
  const inputText = document.getElementById('input-value').value;

  const li = document.createElement('li');
  li.className = 'list incomplete-list';

  const p = document.createElement('p');
  p.className = 'description';
  p.innerText = inputText;

  const completeButton = document.createElement('button');
  completeButton.className = 'button complete-button';
  completeButton.innerText = '完了';

  const deleteButton = document.createElement('button');
  deleteButton.className = 'button delete-button';
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById('incomplete-lists').removeChild(deleteTarget);
  });

  li.appendChild(p);
  document.getElementById('incomplete-lists').appendChild(li);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
};

const initValue = () => {
  document.getElementById('input-value').value = '';
};

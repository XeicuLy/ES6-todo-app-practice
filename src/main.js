import './css/reset.css';
import './css/style.css';

document.getElementById('add-button').addEventListener('click', () => {
  onClickAdd();
  initValue();
});

const onClickAdd = () => {
  // inputに入力されたvalueをinputTextに代入
  const inputText = document.getElementById('input-value').value;
  createIncompleteList(inputText);
};

// input欄を空にする機能
const initValue = () => {
  document.getElementById('input-value').value = '';
};

// 未完了リストから削除する機能
const deleteFromIncompleteList = target => {
  document.getElementById('incomplete-lists').removeChild(target);
};

// 未完了リストに追加する機能
const createIncompleteList = text => {
  // li生成
  const li = document.createElement('li');
  li.className = 'list';

  // pタグ生成
  const p = document.createElement('p');
  p.className = 'description';
  p.innerText = text;

  // 完了ボタン生成
  const completeButton = document.createElement('button');
  completeButton.className = 'button complete-button';
  completeButton.innerText = '完了';
  // 完了ボタン押したら、未完了から削除
  completeButton.addEventListener('click', () => {
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // ToDoの内容をtextに代入
    const text = addTarget.firstElementChild.innerText;
    // li配下を初期化
    addTarget.textContent = null;
    // pタグ生成
    const p = document.createElement('p');
    p.className = 'description';
    p.innerText = text;

    // 戻すbutton生成
    const backButton = document.createElement('button');
    backButton.className = 'button return-button';
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      // 押された戻すボタンのliを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById('complete-lists').removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;

      //戻す処理
      createIncompleteList(text);
    });

    // li配下に各要素を設定
    document.getElementById('complete-lists').appendChild(addTarget);
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement('button');
  deleteButton.className = 'button delete-button';
  deleteButton.innerText = '削除';
  // 削除ボタン押したら未完了リストから削除
  deleteButton.addEventListener('click', () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // liの子要素に各要素を配置
  document.getElementById('incomplete-lists').appendChild(li);
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
};

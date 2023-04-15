const valEl = document.querySelector('tbody');
const view = document.querySelector('th');
const calcEl = document.querySelector('.calc');
const clearEl = document.querySelector('.clear');
const delEl = document.querySelector('.del');
let cur = '';

valEl.addEventListener('click', (e) => {
  const val = e.target.closest('td');
  console.log(val.textContent);
  if (val.textContent === '=') return;
  if (val.textContent === 'DEL') return;
  if (val.textContent === 'AC') return;
  if (val.textContent === '%' && cur === '') return;

  cur += val.textContent;
  view.textContent = cur;
});

calcEl.addEventListener('click', (e) => {
  if (view.textContent === '0') return;
  let answer = eval(cur);
  cur = `${answer}`;
  console.log(cur);
  view.textContent = answer;
});

clearEl.addEventListener('click', (e) => {
  cur = '';
  view.textContent = '0';
});

delEl.addEventListener('click', (e) => {
  cur = cur.slice(0, -1);
  console.log(cur);
  if (cur === '') {
    view.textContent = 0;
    return;
  }
  view.textContent = cur;
});

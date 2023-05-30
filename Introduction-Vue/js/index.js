var user = {
  name: '陈泽',
  birth: '1990-03-17'
}

observe(user);

function setFirstName() {
  const p = document.querySelector('#firstName');
  p.textContent = '姓：' + user.name[0];
}

function setLastName() {
  const p = document.querySelector('#lastName');
  p.textContent = '名：' + user.name.slice(1);
}

function setAge() {
  const p = document.querySelector('#age');
  let currentYear = new Date().getFullYear() //当前的年份
  let calculationYear = new Date(user.birth).getFullYear() //计算的年份
  const calculationAge = currentYear - calculationYear //按照年份计算的年龄
  p.textContent = '年龄：' + calculationAge;
}

autoRun(setFirstName);
autoRun(setLastName);
autoRun(setAge);





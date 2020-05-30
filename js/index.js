one.addEventListener('mousedown', funClick);
document.addEventListener('mousemove', funMove);
document.addEventListener('mouseup', funUp);

let condition = false;

function funClick() {
  /// відслідковує чи був зроблений клік над кольоровим ДІВОМ
  condition = true;
}

function funMove(event) {
  /// функція відслідковує переміщення миші і переміщає ДІВ
  if (condition) {
    one.style.top = event.clientY - 50 + 'px';
    one.style.left = event.clientX - 50 + 'px';
  }
}

function funUp() {
  if (event.path[0].id === 'two') {
    /// якщо миша відпущена в межах пустого ДІВА - кольоровий ДІВ стане середину пустого
    event.path[0].appendChild(one);
    one.style.top = 38 + 'px';
    one.style.left = 38 + 'px';
    one.removeEventListener('mousedown', funClick, (condition = false));
    document.removeEventListener('mouseup', funUp);
  } else if (event.path[0].id !== 'two') {
    /// якщо миша була відпущена за межами пустого ДІВА - кольоровий ДІВ вернеться в початкове положення
    one.style.top = 0 + 'px';
    one.style.left = 0 + 'px';
    condition = false;
  }
}

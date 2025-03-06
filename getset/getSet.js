const state = {
  _value: 0,
  get value() {
    return this._value
  },
  set value(newValue) {
    this._value = newValue
    renderContent()
  }
}

function renderContent() {
  document.querySelector('#content').innerHTML = `Счетчик: ${state.value}`
}

function increment() {
  state.value += 1
}

function reset() {
  state.value = 0
}

document.querySelector('#increment').addEventListener('click', increment)
document.querySelector('#reset').addEventListener('click', reset)

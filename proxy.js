const initial = {
  value: 0
}

const state = new Proxy(initial, {
  get(target, name) {
    return target[name]
  },
  set(obj, prop, value) {
    obj[prop] = value
    renderContent()
  }
})

function renderContent() {
  document.querySelector('#content').textContent = `Счетчик: ${state.value}`
}

function increment() {
  state.value += 1
}

function reset() {
  state.value = 0
}

document.querySelector('#increment').addEventListener('click', increment)
document.querySelector('#reset').addEventListener('click', reset)

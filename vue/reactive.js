const { watchEffect, reactive } = Vue

const initial = {
  count: 0
}

const state = reactive(initial)

watchEffect(() => {
  renderContent()
})


function renderContent() {
  document.querySelector('#content').textContent = `Счетчик: ${state.count}`
}

function increment() {
  state.count += 1
}

function reset() {
  state.count = 0
}

document.querySelector('#increment').addEventListener('click', increment)
document.querySelector('#reset').addEventListener('click', reset)


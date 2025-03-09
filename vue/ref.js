const { ref, watchEffect } = Vue

const _value = 0

const state = ref(_value)

watchEffect(() => {
  renderContent()
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


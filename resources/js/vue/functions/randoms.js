export function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export function randomColor() {
  const colors = ['red', 'orange', 'blue', 'darkblue', 'darkred', 'cyan', 'gray', 'black']

  return colors[Math.floor(Math.random() * colors.length)]
}

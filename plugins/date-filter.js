import Vue from 'vue'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const dateFilter = (value) => {
  return formatDate(value)
}
function formatDate(inputDate) {
  const date = new Date(inputDate)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const formatedDate = day + '. ' + months[month] + ' ' + year
  return formatedDate
}

Vue.filter('date', dateFilter)

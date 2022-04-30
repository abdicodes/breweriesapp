const dateConverter = (string) => {
  const date = new Date(string)
  const mm = date.getMonth() + 1 // getMonth() is zero-based
  const dd = date.getDate()

  return [
    date.getFullYear(),
    '-',
    (mm > 9 ? '' : '0') + mm,
    '-',
    (dd > 9 ? '' : '0') + dd,
    `  ${date.getHours()}:${date.getMinutes()}`,
  ].join('')
}

export default dateConverter

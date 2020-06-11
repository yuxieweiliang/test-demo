export function trim(string) {
  return string.replace(/(^\s+)|(\s+$)/g, '')
}

export function getType (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

export function trimRequest (obj) {
  if (getType(obj) === 'string') {
    return trim(obj)
  }

  if (getType(obj) === 'array') {
    return obj.map(item => trimRequest(item))
  }

  if (getType(obj) === 'object') {
    const option = {}
    console.log(obj)
    for (const [key, value] of Object.entries(obj)) {
      option[key] = trimRequest(value)
    }
    return option
  }
  console.log(obj)
  return obj
}

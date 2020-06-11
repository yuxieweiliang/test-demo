export function add (a , b) {
  return a + b
}
export function addw (a , b) {
  return a + b
}
export function has (a , b) {
  return a + b
}
export function has2 (a , b) {
  return a + b
}
export function searchParams(url) {
  const options = {}
  if(!url) return

  const string = url.substring(1)

  if(typeof URLSearchParams !== 'undefined') {
    let params = new URLSearchParams(string);

    for(let key of params.keys()) {
      options[key] = params.get(key)
      console.log(key)
    }
  } else {
    string.split('&').forEach(item => {
      const _arr = item.split('=')

      console.log(item)
      options[_arr[0]] = _arr[1]
    })
  }

  return options

}

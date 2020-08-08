const HASH_LENGTH = 5
const PREDEFINED_STRINGS = ['a', 'c', 'f', 'e', 'o', 's', 'q', 'v', 'm', 't']
/* c9a9a


id:  1

"00001"
012345
"a9a9c"

"c9a9a" */

export function hashInteger (id) {
  let stringId = String(id)
  const idLength = id.toString().length

  if (idLength < 5) {
    stringId = '0'.repeat(HASH_LENGTH - idLength) + stringId
  }

  let hashString = ''

  stringId.split('').forEach((item, index) => {
    // for even
    if (index % 2 === 0) {
      hashString += PREDEFINED_STRINGS[item]
    } else {
      hashString += 9 - parseInt(item, 10)
    }
  })
  return hashString.split('').reverse().join('')
}

export function unHashInteger (hash) {
  let unHashString = ''

  hash.split('').forEach((item, index) => {
    // for even
    if (index % 2 === 0) {
      unHashString += PREDEFINED_STRINGS.indexOf(item)
    } else {
      unHashString += 9 - parseInt(item, 10)
    }
  })

  return parseInt(unHashString.split('').reverse().join(''))
}

'use strict'

export const prototypefy = obj => {
  for (var param in obj) {
    let val = obj[param]
    if (typeof val === 'object') prototypefy(val)
    else if (param === 'proto' || param === 'childProto') {
      val = val.split('.').reduce((o, i) => o[i], UIkit)
      obj[param] = val
    }
  }
  return obj
}

export const objectify = string => {
  var splitKeys = /(\w+(?=:))|((?<=:\s)[a-zA-Z0-9.\s/'@?":]+(?=\n|,))/g
  var toJSONFormat = (string + '\n')
    .replace(splitKeys, '"$&"')
  var obj = JSON.parse(toJSONFormat)
  return prototypefy(obj)
}
export default array =>
  array.reduce((out, cur, i) => {
    const j = Math.floor(Math.random() * (array.length - i))
    ;[out[i], out[j]] = [out[j], out[i]]
    return out
  }, array)

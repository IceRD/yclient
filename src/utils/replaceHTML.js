export default function replaceHTML(str) {
  if (typeof str !== 'string' || str.length === 0) return ''

  return str.replace(/<\/?[^>]+(>|$)/g, '')
}

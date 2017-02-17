const Nav = (routes, path) =>
  routes
  .map(({title, url}) => `<a href="${url}" style="background: ${path == url? '#ddd' : '#fff'}">${title}</a>`)
  .join(' | ')

const Page = path => require(`./pages${path == '/'? '/home' : path}`)()

module.exports = data => Promise.resolve(`
<!DOCTYPE html>
<html>
  <head><title>Webpack Static Plugin Example</title></head>
  <body>
    ${Nav(data.routes, data.path)}
    ${Page(data.path)}
    <script src="/main.js"></script>
  </body>
</html>
`)
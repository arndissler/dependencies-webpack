const webpack = require('webpack')
const makeTree = require('webpack-dependency-tree')

module.exports = getDeps
function getDeps (config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        throw err
      }

      const tree = makeTree.fromStats(stats)
      const flatList = Object.keys(tree).map((key) => {
        return {
          'name': tree[key].name,
          'version': tree[key].version,
          'path': tree[key].path
        }
      })

      resolve(flatList)
    })
  }, (err) => {
    throw err
  })
}

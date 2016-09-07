const path = require('path')

module.exports = {

  entry: [
    path.join(__dirname, 'project.js')
  ],

  output: {
    path: 'tmp',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

# dependencies-webpack

Creates lists for webpack modules


## Usage

```js

const getDepList = require('dependencies-webpack')
const config = require('webpack.config.js')

  getDepList(config)
    .then((res) => {
      console.log(res)
    })
})

```

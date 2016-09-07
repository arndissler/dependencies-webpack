# deps-flatlist-webpack

Creates lists for webpack modules


## Usage

```js

const getDepList = require('deps-flatlist-webpack')
const config = require('webpack.config.js')

  getDepList(config)
    .then((res) => {
      console.log(res)
    })
})

```

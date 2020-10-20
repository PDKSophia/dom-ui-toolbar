# dom-ui-toolbar

DOM 元素 UI 的工具条，参考 sketch、uxc 等样式

## 本地开发

```bash
npm run start
```

```js
http://localhost:7001
```

## 打包

```bash
npm run build
```

如何验证打包之后的 dist 文件？在 `example` 文件夹中引入

```js
// example/app.js
import React from 'react'
import { render } from 'react-dom'
import YourComponents from '../../dist'

const App = () => {
  return (
    <div>
      验证打包后的组件
      <YourComponents />
    </div>
  )
}
render(<App />, document.getElementById('root'))
```

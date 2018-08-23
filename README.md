## 一个简单的虚拟 dom 库
仅供学习

## api
`h` 用于创建虚拟dom
+ `h (tagName: string, props?: array, children?: vnode|string|number[]) : vnode`
<br/>
`diff` 用于比对新旧 vtree

+ `diff (oldTree, newTree) : patches`
<br/>
`patch` 用于 apply patches，将变化映射到真实 dom 节点

+ `patch (rootNode: HTMLElement, patches) : HTMLElement`
<br/>
`create` 用于生产 dom 节点

+ `create (vnode) : HTMLElement`
<br/>

如果 vnode 有 elementCreated 钩子函数，那么这个 vnode 生成 dom 节点后，会调用此钩子

```js
  import { h, create } 'virtual-dom'

  const vnode = h('div')

  vnode.elementCreated = function (dom, vnode) {
    // ...
  }
  
  const dom = create(vnode)

  document.getElementById('xx').appendChild(dom)
```

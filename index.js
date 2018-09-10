import v, { h, diff, patch, create } from './src'

// 1: Create a function that declares what the DOM should look like
function render(count)  {
  return h('div', {
    style: {
      textAlign: 'center',
      lineHeight: (100 + count) + 'px',
      border: '1px solid red',
      width: (100 + count) + 'px',
      height: (100 + count) + 'px',
    }
  }, [String(count)])
}

// 2: Initialise the document
let count = 0     // We need some app data. Here we just store a count.

let tree = render(count)         // We need an initial tree
let rootNode = create(tree)     // Create an initial root DOM node ...
document.body.appendChild(rootNode)    // ... and it should be in the document

// 3: Wire up the update logic
setInterval(function () {
  count++

  const newTree = render(count)
  const patches = diff(tree, newTree)
  rootNode = patch(rootNode, patches)
  tree = newTree
}, 1000)

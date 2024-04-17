document.oncontextmenu = new Function('event.returnValue=false;')

document.onselectstart = new Function('event.returnValue=false;')

function showContent (contentNumber) {
  // 隐藏所有内容
  var contents = document.getElementsByClassName("content")
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none"
  }

  // 显示选定的内容
  var selectedContent = document.getElementById("content" + contentNumber)
  selectedContent.style.display = "block"
}

//JavaScript

/**
 * 标签单击事件的回调函数
 * @param node - 调用节点（标签）
 */
function clickTab (node) {
  node.classList.add('active')
  for (const tab of document.getElementsByClassName('tab')) {
    if (tab.id !== node.id) {
      tab.classList.remove('active')
    }
  }
}
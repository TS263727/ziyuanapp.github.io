var right = document.querySelector('.right')
var nrtop = document.querySelector('.nrtop')
var tit = document.querySelector('.nrtop>img')
var nrbottom = document.querySelector('.nrbottom')
var ul = document.createElement('ul')
ul.className = 'RightOne'
for (var i = 0; i < one.length; i++) {
  var li = document.createElement('li')
  var img = document.createElement('img')
  var text = document.createElement('div')
  li.appendChild(img)
  img.src = one[i].img
  li.appendChild(text)
  ul.appendChild(li)
}
nrbottom.appendChild(ul)
$('.RightOne>li').click(function () {
  var index = $(this).index()
})
$('.leftmuen>li').eq(0).css('background', 'rgba(0,0,0)')
$('.leftmuen>li').eq(0).css('color', 'white').siblings().css('color', '#9d9d9d')
$('.leftmuen>li').click(function () {
  nrbottom.innerHTML = ''
  var ul = document.createElement('ul')
  var iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.setAttribute('frameborder', '0')
  nrbottom.appendChild(ul)
  nrbottom.appendChild(iframe)
  $('.duihuakuang_xiaochengxu').css('display', 'none')
  $('.tpfd').css('display', 'none')
  var index = $(this).index()
  nrtop.style.display = 'none'
  $('.leftmuen>li').eq(index).css('background', 'rgba(0,0,0)').siblings().css('background', 'transparent')
  $('.leftmuen>li').eq(index).css('color', 'white').siblings().css('color', '#9d9d9d')
  if (index == 0) {
    ul.className = 'RightOne'
    for (var i = 0; i < one.length; i++) {
      var li = document.createElement('li')
      var img = document.createElement('img')
      var text = document.createElement('div')
      li.appendChild(img)
      img.src = one[i].img
      li.appendChild(text)
      ul.appendChild(li)
    }
  }
  else if (index == 1) {
    ul.className = 'RightTwo'
    for (var i = 0; i < two.length; i++) {
      var li = document.createElement('li')
      var img = document.createElement('img')
      var text = document.createElement('div')
      li.appendChild(img)
      img.src = two[i].img
      li.appendChild(text)
      ul.appendChild(li)
    }
  }
  else if (index == 2) {
    ul.className = 'RightThree'
    for (var i = 0; i < three.length; i++) {
      var li = document.createElement('li')
      var img = document.createElement('img')
      var text = document.createElement('div')
      li.appendChild(img)
      img.src = three[i].img
      li.appendChild(text)
      ul.appendChild(li)
    }
  }
  else if (index == 3) {
    ul.className = 'RightFour'
    for (var i = 0; i < four.length; i++) {
      var li = document.createElement('li')
      var img = document.createElement('img')
      var text = document.createElement('div')
      li.appendChild(img)
      img.src = four[i].img
      li.appendChild(text)
      ul.appendChild(li)
    }
  }
  else if (index == 4) {
    $('.nrbottom>iframe').css('display', 'block')
    $('.nrbottom>iframe').attr('src', 'https://ts263727.lanzoul.com/b0acjw3ah')
  }
})
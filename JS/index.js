// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} 

//点击链接打开新页面
function a_new_window() {
    var view_a = document.querySelectorAll('.essay')
    for (let i=0;i<view_a.length;i++) {
      view_a[i].children[0].target = "view_window"
    }
    var view_b = document.querySelectorAll('.post_essay_p')
    for (let i=0;i<view_b.length;i++) {
        var a = view_b[i].getElementsByTagName('a')
        for (let k=0;k<a.length;k++) {
            a[k].target = "_blank"
          }
    }
  }
a_new_window()

//切换标签页时改变title
var true_title = document.title          
  function change_title() {
    function change_1(val) {
        document.title = val
      }
    if (window.document.visibilityState == "hidden") {
      var t = Math.random()*20*1000
      change_1('(｡･ω･｡)ﾉ♡我藏起来了')
      //setTimeout(() => change_1('我藏起来了'), t)
  } 
  if (window.document.visibilityState == "visible" && document.title =='(｡･ω･｡)ﾉ♡我藏起来了') {
    document.title = 'ヾ(≧O≦)〃嗷~被发现了'
    setTimeout(() => change_1(true_title), 3000)
  }
  }

  setInterval(change_title,5)

  //获取最近文章
  function find_recent_essay() {
    var essays = document.querySelectorAll('.essay')
    var id_time = []
    for (let i=0;i<essays.length;i++) {
       id_time[i] = {id: essays[i].id}
       var h = essays[i].querySelectorAll('h5')[0]
       id_time[i]['time'] = h.innerText
    }
    return id_time
  }

  //排序,property为排序传入的key,bol为true时是升序，bol是false时是降序
  function my_sort(property, bol) {
    return function(a,b) {
      var value1 = a[property]
      var value2 = b[property]
      if (bol) {
        return Date.parse(value1) - Date.parse(value2)
      } else {
        return Date.parse(value2) - Date.parse(value1)
      }
    }
  }

  //将排好序的文章链接到指定区域,num为文章数
  function create_sort_essay(num) {
    var id_time = find_recent_essay()
    var sort_essay = id_time.sort(my_sort('time',false))
    const area = document.querySelector('.recent_a')
    var linkText = document.createTextNode("my title text");
    var a = []
    for (let i=0;i<num;i++) {
      a[i] = document.createElement('a')
      a[i].appendChild(linkText)
      a[i].innerText = sort_essay[i].id
      a[i].href = find_link(sort_essay[i].id)
      a[i].target = "_balnk"
      var li = document.createElement('li')
      li.appendChild(a[i])
      area.appendChild(li)
    }
  }
  
create_sort_essay(3)
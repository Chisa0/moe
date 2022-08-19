function find_essays_by_class(val) {               //获取文章id和描述
    var essays = []
    var ess = document.getElementsByClassName(val);
    var n = ess.length
    for (let i=0;i<n;i++) {
    essays[i] = {id: ess[i].id}
    essays[i]['describe'] = ess[i].innerText}
    return essays
  }

  function mysearch(str) {                           //根据描述搜索文章id

    var essays = find_essays_by_class("essay")
    var idx = lunr(function () {
    this.ref("id")
    this.field('describe')

    essays.forEach(function (doc) {
    this.add(doc)
    }, this)
    })

    var x = idx.search(str)
    var n = x.length
    var y = []   
    for (let i=0;i<n;i++) {
      y[i] = x[i].ref
    }
    return y
  }
  
function getInputVal() {                                     //获取输入框中元素
  const inputBox = document.querySelectorAll('#search')[0]
  let inputval = inputBox.value

  return inputval
}

function find_link(id){                                        //获取指定id中的链接
    var domain = document.getElementById(id)
    var a = domain.getElementsByTagName('a')[0]
    return a.href
  }

function my_main() {
  try{
    var link_area = document.querySelectorAll('.link_area')
    for (let i=0;i<link_area.length;i++){
      link_area[i].parentNode.removeChild(link_area[i])
    } 
    var link_rm = document.querySelectorAll('.search_link')
    for (let i=0;i<link_rm.length;i++){
      link_rm[i].remove()
    }
  }catch(error){}
  
  const area = document.querySelectorAll('#search_area')[0]
  var inputval = getInputVal()
  var y = mysearch(inputval + '~1')
  var a1 = document.createElement('a'), a2 = document.createElement('a'),
      a3 = document.createElement('a'), a4 = document.createElement('a'),
      a5 = document.createElement('a')
  var linkText = document.createTextNode("my title text");
  a1.appendChild(linkText)
  a2.appendChild(linkText)
  a3.appendChild(linkText)
  a4.appendChild(linkText)
  a5.appendChild(linkText)
  var a_link = [a1,a2,a3,a4,a5]
  var linkText = document.createTextNode("my title text");
  for (let i=0;i<y.length;i++) {
    a_link[i].innerText = y[i]
    a_link[i].href = find_link(y[i])
    a_link[i].classList.add('search_link')
    area.appendChild(a_link[i])
    var br=document.createElement("div");
    br.classList.add('link_area')
    br.innerHTML="<br/>";
    area.appendChild(br);
  }

  /*var linkText = document.createTextNode("my title text");
  a1.appendChild(linkText)
  a1.classList.add('search_link')
  a1.innerText = 'a1'
  a1.href = '#'
  //a2.appendChild(linkText)
  a2.innerText = 'a2'
  a2.classList.add('search_link')
  a2.setAttribute('href','#')
  area.appendChild(a1)
  area.appendChild(a2)
  /*area.innerHTML = "<a id='4' href='#'>y4</a>"
  area.innerHTML = "<a id='5' href='#'>y</a>"*/
}
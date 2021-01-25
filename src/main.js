let demo = document.querySelector('#demo')
let string = `
你好，我是一名前端新人
接下来加样式
body{
    color: red;
}`
// string = string.replace(/\n/g, '<br>')
let string2 = ''
let n = 0

let step = () => {
    setTimeout(() => {
        if(string[n] === '\n'){
            string2 += '<br>'
        }else{
            string2 += string[n];
        }
        demo.innerHTML = string2
        if(n < string.length-1){
            n += 1;
            step();
        }
    }, 100);
}

step();
// setInterval(() => {
//     n = n + 1
//     demo.innerHTML = n;
// }, 1000);
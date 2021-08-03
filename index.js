const dom = document
const container = dom.querySelector('div.container')
const code = dom.querySelector('div.container > textarea.code')
const show = dom.querySelector('div.container > div.show')
const bt = '<!DOCTYPEhtml><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body></html>'


String.prototype.splet = (text, splt)=>{
    try{
        console.log('0 : ', text)
        let cutted = text.split(splt);
        console.log('1 : ', cutted)
        cutted = cutted.slice(1)
        console.log('2 : ', cutted)
        cutted = cutted.join(splt)
        console.log('3 : ', cutted)
        return cutted
    }catch(err){
        console.warn('we catched an error before hapenning !!.',err)
        return err
    }finally{
        console.log(this)
    }
}



code.value = bt

window.addEventListener('keydown', (e)=>{
    // to switch between the two  windows 
    if(e.code === 'Insert'){
        e.preventDefault()
        
        container.classList.toggle('active')
        console.log('toggled')
        
    }
    if(container.classList.contains('active')){
        console.log(container.classList.contains('active'))
        code.focus()
    }else{
        show.focus()
    }

    // to save the results 
    if(e.key === 's' && e.ctrlKey == true){
        e.preventDefault()
        try{
            let value = location.origin + '/code?' + code.value;
            value = value.toString()
            const selected = document.createElement('input')
            document.body.append(selected)
            selected.value = value
            selected.select()
            selected.setSelectionRange(0, 999999999)
            document.execCommand('copy')
            selected.remove()
            this.alert('Copied the code!! 🎉')
            
        }catch (err){
            console.warn('error', err)
        }
    }

    // to save the two windows  
})

// when click on the tab key it will add "    "
code.onkeydown = (e)=>{
    if(e.code === 'Tab'){
        e.preventDefault()
        code.innerHTML += douvle('&nbsp;', 4)
    }
}


document.oncontextmenu = (e)=>{
    // console.log('toggled')
        e.preventDefault()
        container.classList.toggle('active')
}





// print the results 
code.onkeyup = ()=>{
    show.innerHTML = code.value
}
show.innerHTML = code.value


// a function to double any thing you want 
const douvle = ( text, incrementer )=>{
    let value = ''
    for (let i = 0; i < incrementer; i++) {
        value += text
    }
    return value
}




const url = location.href
if(url.search('code?') > 0){
    try{
        let spltd = url.splet(url, "code?")
        spltd = spltd.replaceAll('%3C', '<')
        spltd = spltd.replaceAll('%3E', '>')
        spltd = spltd.replaceAll('%20', ' ')
        spltd = spltd.replaceAll('%22', '"')
        spltd = spltd.replaceAll('%27', "'")
        code.value = spltd
        show.innerHTML = code.value
    }catch (err){
        console.warn('error', err)
    }
}




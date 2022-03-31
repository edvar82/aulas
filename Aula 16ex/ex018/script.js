let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#select')
let res = document.getElementById('res')
let valores = []

function isnumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnumber(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado a lista.')
    }
    num.value=''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        let par = 0
        let impar = 0
        let pares = []
        let impares = []
        let ordem = []

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior=valores[pos]
            }
            if(valores[pos] < menor){
                menor=valores[pos] 
            }
            if(valores[pos]%2==0){
                par +=1
                pares.push(valores[pos])
            }else{
                impar +=1
                impares.push(valores[pos])
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>`
        res.innerHTML += `<p>A soma entre os números é de ${soma}</p>`
        res.innerHTML += `<p>A media entre os valores digitados é ${media}</p>`
        res.innerHTML += `<p>Foram identificados ${par} números pares, sendo eles: ${pares}.</p>`
        res.innerHTML += `<p>Foram identificados ${impar} números impares, sendo eles: ${impares}.</p>`
    }
}

function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'C'){
            document.getElementById('resultado').value = ''
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }
        if(valor === '='){
            var valor_resultado = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_resultado
        }
    }else if(tipo === 'valor'){
        document.getElementById('resultado').value +=valor
    }
    
}
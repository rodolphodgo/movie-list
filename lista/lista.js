let usuarios = []

if (localStorage.getItem('usuarios')){
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
}

usuarios.forEach((elemento, indice)=>{
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')

    td1.innerHTML = `${indice + 1}`
    td2.innerHTML = `${elemento.nome}`

    tr.append(td1)
    tr.append(td2)

    document.querySelector('.tabela').append(tr)

})
const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')
const pc = document.getElementById('pc')
const jogar = document.getElementById('jogar')
const resetar = document.getElementById('resetar')

function joga(){
    if (pedra.checked == false && 
    papel.checked == false && 
    tesoura.checked == false)
    {
        alert('Selecione uma opção!')
    } else {
        let sorte = Math.floor(Math.random() * 3)
        switch(sorte) {
            case 0:
            pc.src='/imgs/rock.png'
            break
            case 1:
            pc.src='/imgs/paper.png'
            break
            case 2:
            pc.src='/imgs/scissor.png'
            break
        }
        if ((pedra.checked == true && sorte == 0) || (papel.checked == true && sorte == 1) || 
            (tesoura.checked == true && sorte == 2)) {
            document.getElementById('placar').innerHTML = 'Empate'
        } else if ((pedra.checked == true && sorte == 2) || 
                   (papel.checked == true && sorte == 0) ||
                   (tesoura.checked == true && sorte == 1)) {
            document.getElementById('placar').innerHTML = 'Jogador Venceu'
        } else {
            document.getElementById('placar').innerHTML = 'Computador Venceu'
        }
    }
}

function reseta(){
    document.getElementById('pc').src='/imgs/pc.png'
    document.getElementById('placar').innerHTML=''
}

jogar.addEventListener('click', joga)
resetar.addEventListener('click', reseta)
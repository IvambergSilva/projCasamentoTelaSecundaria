let codigoPessoas = [
    {
        nome: 'Kassandra',
        codigo: 'AE18K0',
        id: 'A0', 
    },
    {
        nome: 'Luiz',
        codigo: 'AE18L1',
        id: 'A1',
    },
    {
        nome: 'Fabiana',
        codigo: 'AE18F2',
        id: 'A2', 
    },
    {
        nome: 'Natan Nascimento',
        codigo: 'AE18N3',
        id: 'A3',
    },
    {
        nome: 'Thayssa',
        codigo: 'AE18T4',
        id: 'A4', 
    },
    {
        nome: 'Maria Eduarda',
        codigo: 'AE18M5',
        id: 'A5', 
    },
    {
        nome: 'Venâncio',
        codigo: 'AE18V6',
        id: 'A6', 
    },
    {
        nome: 'Marcia',
        codigo: 'AE18M7',
        id: 'A7',
    },
    {
        nome: 'Missicleide',
        codigo: 'AE18M8',
        id: 'A8', 
    },
    {
        nome: 'Ardson',
        codigo: 'AE18A9',
        id: 'A9',
    },


    {
        nome: 'Clesia',
        codigo: 'AE18C0',
        id: 'B0',
    },
    {
        nome: 'Maria Rita',
        codigo: 'AE18M1',
        id: 'B1',
    },
    {
        nome: 'Jonathan',
        codigo: 'AE18J2',
        id: 'B2',
    },
    {
        nome: 'Luiz Júnior',
        codigo: 'AE18L3',
        id: 'B3',
    },
    {
        nome: 'Elias',
        codigo: 'AE18E4',
        id: 'B4',
    },
    {
        nome: 'Ednalva',
        codigo: 'AE18E5',
        id: 'B5',
    },
    {
        nome: 'Rosy Gomes',
        codigo: 'AE18R6',
        id: 'B6',
    },
    {
        nome: 'Pedro',
        codigo: 'AE18P7',
        id: 'B7',
    },
    {
        nome: 'Natan Alexandre',
        codigo: 'AE18N8',
        id: 'B8',
    },
    {
        nome: 'Iago',
        codigo: 'AE18I9',
        id: 'B9',
    },


    {
        nome: 'Joandersson',
        codigo: 'AE18J0',
        id: 'C0',
    },
    {
        nome: 'João Vitor',
        codigo: 'AE18J1',
        id: 'C1',
    },
    {
        nome: 'Péricles e Sonaly',
        codigo: 'AE18P2',
        id: 'C2',
    },
    {
        nome: 'Ivamberg',
        codigo: 'AE18I3',
        id: 'C3',
    },
    {
        nome: 'Fernanda Tavares',
        codigo: 'AE18F4',
        id: 'C4',
    },
    {
        nome: 'Fernanda',
        codigo: 'AE18F5',
        id: 'C5',
    },
    {
        nome: 'Luzinete',
        codigo: 'AE18L6',
        id: 'C6',
    },
    {
        nome: 'Tallya',
        codigo: 'AE18T7',
        id: 'C7',
    },
    {
        nome: 'Dinha',
        codigo: 'AE18D8',
        id: 'C8',
    },
    {
        nome: 'Ednaldo',
        codigo: 'AE18E9',
        id: 'C9',
    },


    {
        nome: 'Samuel',
        codigo: 'AE18S8',
        id: 'D0',
    },
    {
        nome: 'Renata',
        codigo: 'AE18R9',
        id: 'D1',
    }
];

document.addEventListener('contextmenu', event => event.preventDefault());

let grandeDia = new Date("dec 18, 2022 10:00:00").getTime()
let agora = new Date().getTime();
let t = (grandeDia - agora)/1000
let dia = Math.floor(t / (86400))
document.querySelector('.diasRestantes').innerHTML = dia

const audio = document.querySelector('audio');
audio.currentTime = 25;

let movimento = 0

document.querySelector('body').addEventListener('mousemove', ()=> {
    if (movimento == 0) {
        audio.play();
    }
})

let pause = document.querySelector('#pause')
pause.addEventListener('click', ()=> {
    pause.style.backgroundColor = '#B76E7980';
    play.style.backgroundColor = 'transparent';
    audio.pause();
    movimento = 1
})

let play = document.querySelector('#play')

play.addEventListener('click', ()=> {
    play.style.backgroundColor = '#B76E7980';
    pause.style.backgroundColor = 'transparent';
    audio.play();
    movimento = 1
})

document.querySelector('#botaoCodigo').onclick = buscarPessoa;

var inputCodigo = document.querySelector('#codigo')

inputCodigo.addEventListener('click', (e) => {
    inputCodigo.classList.remove('piscarAvisoBorda');
    inputCodigo.style.border = "none";
    convidado.innerHTML = ''
    inputCodigo.value = '';
    
    let qtdeDeSection = document.querySelector('main').childElementCount - 1;

    let j = 0;
    let l = 0;
    let k = 0;

    for (let i = 0; i < qtdeDeSection; i++) {
        if (i <= 9) {
            document.getElementById(`A${i}`).style.display = 'none'
        } else if (i > 9 && i <= 19) {
            document.getElementById(`B${j}`).style.display = 'none'
            j++
        } else if (i > 19 && i <= 29) {
            document.getElementById(`C${l}`).style.display = 'none'
            l++
        } else {
            document.getElementById(`D${k}`).style.display = 'none'
            k++
        }

    }
})

function buscarPessoa () {
    codigo = inputCodigo.value.toUpperCase()
    let convidado = document.querySelector('#convidado');
    let condicao = 0
    codigoPessoas.map((elemento) => {
        if (elemento.codigo == codigo) {
            document.getElementById(`${elemento.id}`).style.display = 'flex';
            convidado.innerHTML = `❤️ Oii,  ${elemento.nome},  aqui estão algumas sugestões... ❤️ <br><br> Clique no produto para ser direcionado para uma sugestão de loja!`
            condicao = 1
        } else if (codigo == '' || condicao == 0) {
            convidado.innerHTML = 'Oii, digite o código que você recebeu!';
            inputCodigo.classList.add('piscarAvisoBorda')
            inputCodigo.style.border = "4px solid #000";
        } 
    })
}

var numero = 0
var fotoCasal = document.querySelector('#fotoCasal')
var centro = document.querySelector('div.centro')

function slide() {
    numero++
    fotoCasal.src = `img/casal${numero}.jpg`
    if (numero == 6) {
        numero = 0
    }
}

setInterval(slide, 2000);

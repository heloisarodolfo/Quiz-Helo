let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 
let placar = 0 

let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Quantos anos eu tenho?",
    alternativaA : "15",
    alternativaB : "17",
    alternativaC : "16",
    alternativaD : "11",
    correta      : "16",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Esporte favorito?",
    alternativaA : "Volêi",
    alternativaB : "Basquete",
    alternativaC : "Futebol",
    alternativaD : "Handebol",
    correta      : "Basquete",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Meu aniversário?",
    alternativaA : "10/11/2004",
    alternativaB : "21/10/2006",
    alternativaC : "24/10/2005",
    alternativaD : "18/02/2006",
    correta      : "24/10/2005",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Animal favorito?",
    alternativaA : "Gato",
    alternativaB : "Cachorro",
    alternativaC : "Cavalo",
    alternativaD : "Lontra",
    correta      : "Gato",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Estilo de música favorita??",
    alternativaA : "Pagode",
    alternativaB : "Funk",
    alternativaC : "Sertanejo",
    alternativaD : "Trap",
    correta      : "Pagode",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Meu nome completo?",
    alternativaA : "Heloisa Cristina Rodolfo",
    alternativaB : "Heloisa da Silva",
    alternativaC : "Heloisa da Silva Rodolfo",
    alternativaD : "Heloisa Rosa Regina",
    correta      : "Heloisa Cristina Rodolfo",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual meu livro preferido",
    alternativaA : "A seleção",
    alternativaB : "Trono de Vidro",
    alternativaC : "Estilhaça-me",
    alternativaD : "Harry Potter",
    correta      : "Trono de Vidro",
}

    const q8 = {
        numQuestao   : 8,
        pergunta     : "Qual minha série preferida",
        alternativaA : "The witcher",
        alternativaB : "Atypical",
        alternativaC : "Ozark",
        alternativaD : "Rick and Morty",
        correta      : "The witcher",

    }        
    const q9 = {
        numQuestao   : 9,
        pergunta     : "Jogo favorito?",
        alternativaA : "CS-GO",
        alternativaB : "Valorant",
        alternativaC : "LoL",
        alternativaD : "Minecraft",
        correta      : "Valorant",

    }
    const q10 = {
        numQuestao   : 10,
        pergunta     : "Marca favorita?",
        alternativaA : "Puma",
        alternativaB : "Adidas",
        alternativaC : "Nike",
        alternativaD : "Lacoste",
        correta      : "Adidas",

    }
    const q11 = {
        numQuestao   : 11,
        pergunta     : "Eu tenho medo de que",
        alternativaA : "Morrer",
        alternativaB : "Altura",
        alternativaC : "Escuro",
        alternativaD : "Aranha",
        correta      : "Altura",
    }
    const q12 = {
        numQuestao   : 12,
        pergunta     : "Quem é a aluna preferida do Battistella",
        alternativaA : "Heloisa",
        alternativaB : "Alana",
        alternativaC : "Heloisa de novo",
        alternativaD : "Heloisa mais uma vez",
        correta      : "Heloisa",
    }
    const q13 = {
        numQuestao   : 13,
        pergunta     : "Qual matéria eu mais gosto",
        alternativaA : "Matemática",
        alternativaB : "Humanas",
        alternativaC : "Educação Fisica",
        alternativaD : "Técnico",
        correta      : "Educação Fisica",
    }
    const q14 = {
        numQuestao   : 14,
        pergunta     : "Qual meu filme favorito",
        alternativaA : "Assassinos de aluguel",
        alternativaB : "Se eu ficar",
        alternativaC : "Harry Potter",
        alternativaD : "Crepúsculo",
        correta      : "Se eu ficar",
    }
    const q15 = {
        numQuestao   : 15,
        pergunta     : "Em qual colégio eu estudava antes de vir pro senai",
        alternativaA : "Adventista",
        alternativaB : "Marista",
        alternativaC : "Tempo de Despertar",
        alternativaD : "Emaculada",
        correta      : "Tempo de Despertar",
    }
    const q16 = {
        numQuestao   : 16,
        pergunta     : "Qual minha flor preferida",
        alternativaA : "Hibisco",
        alternativaB : "Girassol",
        alternativaC : "Rosa",
        alternativaD : "Margarida",
        correta      : "Hibisco",
    }
    const q17 = {
        numQuestao   : 17,
        pergunta     : "Qual meu signo",
        alternativaA : "Libra",
        alternativaB : "Escorpião",
        alternativaC : "Áquario",
        alternativaD : "Virgem",
        correta      : "Escorpião",
    }
    const q18 = {
        numQuestao   : 18,
        pergunta     : "Qual minha rede social favorita",
        alternativaA : "Instagram",
        alternativaB : "Snapchat",
        alternativaC : "Twitter",
        alternativaD : "Tik Tok",
        correta      : "Twitter",
    }
    const q19 = {
        numQuestao   : 19,
        pergunta     : "Qual minha cor preferida",
        alternativaA : "Azul",
        alternativaB : "Rosa",
        alternativaC : "Roxo",
        alternativaD : "Preto",
        correta      : "Azul",
    }
    const q20 = {
        numQuestao   : 20,
        pergunta     : "Que dia eu mais gosto da semana",
        alternativaA : "Segunda",
        alternativaB : "Terça",
        alternativaC : "Quinta",
        alternativaD : "Sexta",
        correta      : "Sexta",
    }

const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
   
    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        pontos += 10 
    }  
    

    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
        location.reload();
    }, 2000)
}
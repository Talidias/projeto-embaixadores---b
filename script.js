const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que suas escolhas diárias têm um impacto direto no seu futuro?",
        alternativas: [
            "Acredito que cada pequena escolha que faço hoje ajuda a construir como será meu futuro, seja na carreira, nos amigos ou na minha saúde.",
            "Infelizmente, mesmo que eu escolha algo, sinto que a vida já está meio que definida por coisas que não consigo controlar, então minhas escolhas não mudam tanto."
        ]
    },
    {
        enunciado: "Quando você comete um erro, como reage a ele?",
        alternativas: [
            "Quando erro, vejo isso como uma chance de aprender e ficar mais forte. Cada falha me ensina algo novo, me ajuda a melhorar e me dá coragem para tentar de novo de um jeito melhor.",
            "Quando erro, fico bem chateado e às vezes quero desistir. É difícil aceitar, e acabo evitando fazer coisas novas para não errar de novo."
        ]
    },
    {
        enunciado: "Para alcançar o que você quer na vida, você prefere planejar tudo e seguir um caminho claro, ou deixa as coisas acontecerem mais naturalmente?",
        alternativas: [
            "Não faço muitos planos detalhados; prefiro que as coisas aconteçam naturalmente. Tenho meus desejos, mas não me preocupo em traçar um caminho específico, pois acredito que as coisas se ajeitam.",
            "Eu gosto de planejar o que quero, criar passos claros para chegar lá e me esforçar de verdade. Sei que é com disciplina e esforço que meus sonhos viram realidade."
        ]
    },
    {
        enunciado: "Quando algo não sai como você esperava, qual é a primeira coisa que você pensa sobre de quem é a responsabilidade?",
        alternativas: [
            "Às vezes, quando as coisas não dão certo, eu acabo buscando desculpas em outras pessoas ou em coisas que não controlo, o que me impede de ver o que eu poderia ter feito diferente.",
            "Sempre que algo acontece, seja bom ou ruim, eu assumo a responsabilidade pelas minhas decisões. Isso me ajuda a aprender e a melhorar, sabendo que eu tenho poder sobre minhas ações."
        ]
    },
    {
        enunciado: "Você se sente capaz de moldar seu próprio destino e criar a vida que deseja?",
        alternativas: [
            "Acredito no meu potencial para criar a vida que desejo.",
            "Muitas vezes duvido das minhas capacidades e me sinto impotente."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();

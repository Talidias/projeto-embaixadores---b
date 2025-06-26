const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que suas escolhas diárias têm um impacto direto no seu futuro?",
        alternativas: [
            "Não, o futuro é predeterminado e minhas escolhas não importam tanto.",
            "Sim, minhas escolhas hoje moldam meu amanhã."
        ]
    },
    {
        enunciado: "Ao enfrentar um desafio, você tende a assumir a responsabilidade pelas suas decisões ou culpar as circunstâncias?",
        alternativas: [
            "Sim, assumo a responsabilidade por minhas decisões.",
            "Não, muitas vezes culpo as circunstâncias externas."
        ]
    },
    {
        enunciado: "Você costuma definir metas e trabalhar ativamente para alcançá-las?",
        alternativas: [
            "Sim, faço planos e me esforço para alcançá-los.",
            "Não, prefiro deixar as coisas acontecerem naturalmente."
        ]
    },
    {
        enunciado: "Quando você comete um erro, como reage a ele?",
        alternativas: [
            "Sim, vejo os erros como oportunidades de aprendizado.",
            "Não, me frustro e desisto facilmente quando cometo erros."
        ]
    },
    {
        enunciado: "Você se sente capaz de moldar seu próprio destino e criar a vida que deseja?",
        alternativas: [
            "Sim, acredito no meu potencial para criar a vida que desejo.",
            "Não, muitas vezes duvido das minhas capacidades e me sinto impotente."
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

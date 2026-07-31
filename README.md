# Estudos de JavaScript SENAI

Repositório de atividades de programação em HTML, CSS e JavaScript, feito pela turma de ADS (2º semestre) para servir de consulta e estudo das estruturas de controle da linguagem.

## Estruturas

- Se...Senão (if/else)
- Caso (switch)
- Enquanto (while)
- Faça...Enquanto (do...while)
- Para (for)
- Vetores (arrays)
- Matrizes (arrays bidimensionais)

Cada estrutura tem uma página com a teoria e cards pras 3 atividades (fácil/médio/difícil). Clicando num card, abre a página só daquela atividade — enunciado, formulário funcional e código-fonte.

## Como abrir

Só abrir o `index.html` no navegador. Não precisa de servidor nem instalar nada.

## Estrutura de pastas

```
index.html          página inicial
style.css           estilo compartilhado do site
assets/             logos das tecnologias + CSS base compartilhado dos formulários
activities/
  {estrutura}/
    index.html       teoria + cards das 3 atividades
    activity-1/       página + javascript.js da atividade fácil
    activity-2/       página + javascript.js da atividade média
    activity-3/       página + javascript.js da atividade difícil
```

## Tecnologias

HTML, CSS e JavaScript puro (sem frameworks). Prism.js pra realce de sintaxe do código e Font Awesome pros ícones — ambos guardados localmente em `assets/vendor/`, sem depender de CDN.

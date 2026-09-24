# Acolher Care | Landing Page de Home Care para Idosos

Landing page responsiva para uma empresa fictícia de **home care e cuidado de idosos**, criada como projeto de portfólio. O foco do design é transmitir acolhimento e confiança, usando uma paleta de **rosa e lilás suaves** para quebrar a frieza do ambiente hospitalar.

> Projeto de demonstração, sem fins comerciais. A marca "Acolher Care" é fictícia.

## Sobre o projeto

O objetivo foi construir uma página de conversão completa usando apenas as tecnologias nativas da web, sem frameworks nem bibliotecas, para mostrar domínio de HTML semântico, CSS moderno e JavaScript puro.

A página apresenta os serviços de forma humana, explica o caminho até o primeiro atendimento e leva o visitante ao contato pelo WhatsApp em qualquer ponto da rolagem.

## Funcionalidades

- **Layout responsivo** para celular, tablet e desktop, com abordagem fluida (`grid`, `flex`, `clamp()`)
- **Menu mobile** com botão "hambúrguer", que fecha ao clicar em um link ou ao pressionar `Esc`
- **Formulário de contato integrado ao WhatsApp**: valida o nome e abre a conversa com a mensagem já montada
- **Botões de WhatsApp centralizados**: o número é configurado em um único lugar do JavaScript
- **Botão flutuante** de WhatsApp sempre visível
- **Perguntas frequentes** em acordeão, usando `<details>` nativo, sem JavaScript
- **Seção de plantões** (6, 12 e 24 horas) com mensagem personalizada por plano no WhatsApp
- **Acessibilidade**: HTML semântico, `alt` descritivo nas imagens, foco visível no teclado, `aria-*` no menu e respeito a `prefers-reduced-motion`
- **SEO básico**: `title`, `meta description` e `theme-color`

## Tecnologias

| Camada | Uso |
| --- | --- |
| HTML5 | Estrutura semântica |
| CSS3 | Variáveis (`:root`), Grid, Flexbox, media queries |
| JavaScript (ES5+) | Menu mobile, links do WhatsApp e formulário |
| Google Fonts | Fraunces (títulos) e Figtree (texto), com fontes de fallback |

## Estrutura de pastas

```
acolher-care/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── img/
│       ├── hero.jpg
│       ├── fisio.jpg
│       ├── cha.jpg
│       └── relatorio.jpg
└── README.md
```

## Como executar

Não há dependências nem etapa de build.

1. Clone o repositório:
   ```bash
   git clone https://github.com/Li-code1/Acolher-Care.git
   ```
2. Entre na pasta:
   ```bash
   cd acolher-care
   ```
3. Abra o `index.html` no navegador, ou sirva a pasta com qualquer servidor estático:
   ```bash
   npx serve .
   ```

## Configuração do WhatsApp

Abra `js/script.js` e edite as duas variáveis no topo do arquivo:

```js
var NUMERO = "5500000000000";          // código do país + DDD + número, só dígitos
var NUMERO_EXIBIDO = "(00) 00000-0000"; // como o número aparece na página
```

Todos os botões e o formulário passam a usar o novo número automaticamente.

## Personalização

As cores ficam em variáveis no início de `css/style.css`:

```css
:root {
  --rosa-600: #B8477A;   /* botões e destaques */
  --lilas-200: #E3D6F2;  /* fundos suaves */
  --ameixa: #3F2650;     /* texto principal */
}
```

Para trocar as fotos, substitua os arquivos em `assets/img/` mantendo os nomes, ou atualize os caminhos no `index.html`.

## Publicação

**GitHub Pages**

1. No repositório, abra **Settings > Pages**.
2. Em **Source**, escolha a branch `main` e a pasta `/ (root)`.
3. Salve. O site fica disponível em `https://SEU-USUARIO.github.io/acolher-care/`.

**Hospedagem compartilhada (cPanel)**: envie todo o conteúdo da pasta para o `public_html`, mantendo a estrutura de pastas.

## Decisões de design

- **Paleta**: rosa e lilás suaves para transmitir empatia, afeto e humanidade, com texto em tom ameixa escuro para garantir boa legibilidade.
- **Tipografia**: uma serifada de caráter nos títulos e uma sem serifa amigável no texto corrido.
- **Conteúdo**: sem depoimentos ou preços inventados. Os valores são tratados por proposta após avaliação, como no mercado real de home care.
- **Movimento**: uma única animação de entrada no topo da página, com o restante estático para não distrair.

## Créditos das imagens

As imagens foram geradas por inteligência artificial e servem apenas para fins de demonstração neste portfólio.

## Autora

**Liliane Lima**
Desenvolvedora Full Stack em transição de carreira

- GitHub: [https://github.com/Li-code1](https://github.com/Li-code1)
- LinkedIn: [https://www.linkedin.com/in/liliane-lima-ti](https://www.linkedin.com/in/liliane-lima-ti)

## Licença

Projeto de portfólio. O código pode ser consultado para estudo. Para outros usos, entre em contato com a autora.

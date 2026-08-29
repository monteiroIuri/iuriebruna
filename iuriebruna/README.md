# Presente de Casamento — Iuri & Bruna 💍

Site engraçado de "lista de presentes" para o casamento de Iuri e Bruna. Em vez de
uma lista de panelas, a página convida os convidados a mandar um PIX, com QR Code
e código copia-e-cola gerados a partir da chave PIX (telefone).

## Tecnologias

- HTML, CSS e JavaScript puro (sem framework, sem build step)
- [qrcode.js](https://github.com/soldair/node-qrcode) via CDN, para gerar o QR Code do PIX no navegador
- Netlify (hospedagem estática)

## Estrutura

- `index.html` — conteúdo da página
- `style.css` — estilos
- `script.js` — geração do QR Code e botão de copiar o código PIX

## Como rodar localmente

Basta abrir `index.html` em um navegador, ou usar o Netlify CLI:

```bash
netlify dev
```

## Atualizando a chave PIX

O código PIX (payload BR Code) está fixo no atributo `value` do input `#pixCode`
em `index.html`. Para trocar a chave ou os dados do recebedor, gere um novo payload
(EMV/BR Code) e substitua esse valor — o QR Code é gerado automaticamente a partir dele.

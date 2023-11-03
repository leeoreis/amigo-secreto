# Amigo Secreto
Repositório para prática e estudo da aula 4 do curso Lógica de programação: praticando com desafios da Alura

# Objetivo
Desafio: Em um projeto com front-end previamente criado, uma página de sorteio de amigo secreto foi desenvolvida sem funcionalidade aplicada. Deve-se criar as funções de adicionar, sortear e reiniciar a aplicação. Quando um nome for digitado no input text, este deve ser adicionado na lista abaixo. Se o nome digitado já existir na lista, deve haver um alerta informando o problema. Ao clicar em sortear, os nomes da lista devem ser embaralhados de forma que não se repitam e todos sejam contemplados. O clique em Reiniciar deve zerar as listas.

# O que foi feito
Criada a função adicionar que é disparada no clique do botão no HTML. O nome inserido no input é salvo em uma lista (array) para sorteio.

Criada a lógica para reconhecer o caso de nome já existente na lista e dispara um alerta quando necessário.

Criada a função sortear, que embaralha os nomes do array e exibe em outro campo, de modo que todos os nomes sejam exibidos e não se repitam.

Criada a função reiniciar, que zera todos os campos e listas.

### Adicional:
Criado input do tipo range para que o usuário informe o limite mínimo da rodada.

Criada lógica que valida se o limite mínimo não foi informado e dispara um alerta para este caso. Também valida se o limite informado foi 1 e impede que o botão sortear seja acionado nesta condição, diparando também um alerta.

Ao clicar em sortear, os botões e inpur range são desabilitados.

Se nenhum nome foi informado, um alerta é disparado impedindo que a aplicação sorteie uma lista vazia.

# Como foi feito
Utilizando funções no JavaScript para processar e validar o HTML. Criados novos campos no HTML e novo estilo no CSS para as condições e bloqueios dos campos.

# Preview
![image](https://github.com/leeoreis/amigo-secreto/assets/128519062/4a4dc334-f9a2-4a35-9ffc-d289ab7b0817)

# Demo
Live demo: https://amigo-secreto-sage.vercel.app/

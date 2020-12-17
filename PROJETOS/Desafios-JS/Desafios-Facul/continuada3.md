Orientação:
NÃO "zipe" (ou seja, não compacte) o(s) arquivo(s). Envie o(s) arquivos que usou (página, estilos, figuras etc) um por um na tarefa. NÃO envie a pasta inteira e sim os arquivos individualmente! O envio da pasta ou arquivo .zip ou .7zip levará ao desconto de 2 pontos na nota!

Questão única.

No filme Interestrelar, de 2014, os astronautas do futuro conseguem ir para lugares onde o tempo é diferente do nosso. Por exemplo, há um lugar onde 1 minuto equivale a vários anos aqui na Terra, por isso os astronautas têm que agir bem rápido lá. Uma observação importante é que mesmo nesse futuro longínquo, não há registros de que o Palmeiras tenha um mundial.


Crie um programa no qual o usuário registra as viagens de um astronauta a um lugar desses. Considere que nesse local, 1 minuto equivale a 2 horas na Terra. Ou seja, o tempo passa 120x mais rápido lá.

a) O usuário informa: o nome do astronauta, a quantidade de dias, horas e minutos (cada um desses é um campo próprio) da viagem. Esses tempos são na percepção de quem está no local da viagem, não na Terra. Por exemplo, se o astronauta passou só 3 minutos lá, então cadastra 0 dias, 0 horas e 3 minutos. 

b) Pelo menos uma das 3 informações de tempo deve ser maior que 0 e nenhuma deve ser menor que zero, caso contrário, exiba um alert "Informe um tempo de viagem válido!" e, claro, ignore este registro.

c) O cadastro é efetuado ao clicar num botão "Registrar viagem".

d) O usuário pode registrar quantas viagens quiser.

e) Deve haver um botão "Relatório de viagens". Ao clicar nele, devem aparecer os registros de cada viagem, comparando o tempo relativo na Terra a partir da idade de uma criança recém nascida no dia do início da viagem, como nos exemplos abaixo:

   Foram registradas ? viagens, detalhadas a seguir:

   Viagem 1:
   Astronauta NOME1 ficou fora por pelo menos X anos no tempo da Terra.
   Como a pessoa estava quando ele chegou?
   

   Viagem 2:
   Astronauta NOME2 ficou fora por pelo menos X anos no tempo da Terra.
   Como a pessoa estava quando ele chegou?
   


=> As regras para a foto da pessoa nos itens do relatório são as seguintes:

Se a viagem durou até 1 ano no tempo da Terra:


Se a viagem durou mais de 1 ano até 13 anos no tempo da Terra:


Se a viagem durou mais de 13 anos até 30 anos no tempo da Terra:


Se a viagem durou mais de 30 anos até 45 anos no tempo da Terra:


Se a viagem durou mais de 45 anos até 90 anos no tempo da Terra:


Se a viagem durou mais de 90 anos no tempo da Terra:



f) Ao final dos detalhes das viagens, exiba a frase

   O astronauta que passou mais tempo foi o NOME, que ficou pelo menos X anos no tempo da Terra viajando. Essa foi a Yª viagem registrada.

Onde Y deve começar de 1 (no caso da primeira viagem).

#FicaDica: você pode resolver esse problema com vários vetores OU um vetor de JSONs.

#DicasParaCalculo: 
Considere que 1 dia tem ? minutos

Considere que 1 hora tem ? minutos

Em resumo, sua vida fica mais fácil se converter o tempo total em minutos

Para saber quantos anos, por exemplo, uma certa quantidade de minutos tem, divida esses minutos por ? (que é quantos minutos possui 1 ano) e pegue a parte inteira do resultado, usando a função parseInt()
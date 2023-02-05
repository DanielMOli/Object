let itens = ['item1', 'item2', 'item3', 'item4', 'item5'];
console.log(itens);

itens.unshift('novoNome1');
console.log(itens);

itens.pop();
console.log(itens);

itens.push('novoNome2', 'novoNome3');
console.log(itens);

itens.shift();
console.log(itens);

let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

let pessoa = {
  nome: 'Daniel',
  idade: 20,
  profissao: 'Assistente virtual'
};

pessoa.pais = 'Cyberspace';
console.log(pessoa);

delete pessoa.profissao;
console.log(pessoa);

for (propriedade in pessoa) {
  console.log(propriedade + ': ' + pessoa[propriedade]);
}

let cadastro = [  {    nome: 'João',    idade: 30,    telefone: '1111-1111',    amigos: ['Maria', 'Pedro', 'Ana', 'Lucas']
  },
  {
    nome: 'Maria',
    idade: 25,
    telefone: '2222-2222',
    amigos: ['João', 'Ana', 'Lucas', 'Rafael']
  },
  {
    nome: 'Pedro',
    idade: 35,
    telefone: '3333-3333',
    amigos: ['João', 'Maria', 'Lucas', 'Ana']
  },
  {
    nome: 'Ana',
    idade: 28,
    telefone: '4444-4444',
    amigos: ['João', 'Maria', 'Pedro', 'Rafael']
  },
  {
    nome: 'Lucas',
    idade: 32,
    telefone: '5555-5555',
    amigos: ['João', 'Maria', 'Pedro', 'Ana']
  }
];

for (let i = 0; i < cadastro.length; i++) {
  console.log(cadastro[i].amigos[0]);
}


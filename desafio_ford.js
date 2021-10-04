
const rotas = (partida = 'Brasília', entrega = 'Brasília') => {
  const totalRotas = 0;
  const capitaisNorte = ['Belém', 'Boa Vista', 'Macapá', 'Manaus', 'Palmas', 'Porto Velho', 'Rio Branco'];
  const capitaisNordeste = ['Aracaju', 'Fortaleza', 'João Pessoa', 'Natal', 'Maceió', 'Recife', 'Salvador', 'São Luís', 'Teresina'];
  const capitaisCentro = ['Brasília', 'Campo Grande', 'Cuiabá', 'Goiânia'];
  const capitaisSudeste = ['Belo Horizonte', 'Rio de Janeiro', 'São Paulo', 'Vitória'];
  const capitaisSul = ['Curitiba', 'Florienópolis', 'Porto Alegre'];
  const todasMenosCentro = capitaisNorte.concat(capitaisNordeste, capitaisSudeste, capitaisSul).sort();

  if (partida === entrega) return `Adicionando ${totalRotas} rotas.`;
};

console.log(rotas('Brasília', 'Brasília'));
// [“Rio Branco”,”Macapá”], [“Macapá”,”Manaus”], [“Belém”,”Porto Velho”], [“Boa
//   Vista”,”Palmas”], [“Belém”,”Rio Branco”], [“Palmas”,”Rio Branco”], [“Boa
//   Vista”,”Salvador”], [“Maceió”,”Fortaleza”], [“São Luís”,”Salvador”], [“João
//   Pessoa”,”Recife”], [“Recife”,”Teresina”], [“Teresina”,”Natal”], [“Aracaju”,”Salvador”],
//   [“Natal”,”Aracaju”], [“Goiânia”,”Cuiabá”], [“Cuiabá”,”Campo Grande”], [“Campo
//   Grande”,”Brasília”], [“Vitória”, “Cuiabá”], [“Vitória”,”Belo Horizonte”], [“Belo
//   Horizonte”,”São Paulo”], [“São Paulo”,”Rio de Janeiro”], [“Rio de Janeiro”,”Curitiba”],
//   [“Curitiba”,”Florianópolis”], [“Florianópolis”,”Porto Alegre”]
const rotas = (partida = 'Brasília', entrega = 'Brasília') => {
  // Norte já tem 1 rota direto para o Nordeste;
  // Sudeste já tem uma rota para o centro-oeste e para o sul;
  // totas as capitais da mesma região já se conectam (que é o que já tem nas rotas unidirecionais, bem como no exemplo dado);
  let totalRotas = 0;
  const capitaisNorte = ['Belém', 'Boa Vista', 'Macapá', 'Manaus', 'Palmas', 'Porto Velho', 'Rio Branco'];
  const capitaisNordeste = ['Aracaju', 'Fortaleza', 'João Pessoa', 'Natal', 'Maceió', 'Recife', 'Salvador', 'São Luís', 'Teresina'];
  const capitaisCentro = ['Brasília', 'Campo Grande', 'Cuiabá', 'Goiânia'];
  const capitaisSudeste = ['Belo Horizonte', 'Rio de Janeiro', 'São Paulo', 'Vitória'];
  const capitaisSul = ['Curitiba', 'Florienópolis', 'Porto Alegre'];
  const todasMenosCentro = capitaisNorte.concat(capitaisNordeste, capitaisSudeste, capitaisSul).sort();

  if (partida === entrega) totalRotas + 0;
  if (capitaisNorte.find(cidade => cidade === partida) && (capitaisNorte.find(cidade => cidade === entrega))) totalRotas + 0;
  if (capitaisNordeste.find(cidade => cidade === partida) && (capitaisNordeste.find(cidade => cidade === entrega))) totalRotas + 0;
  if (capitaisCentro.find(cidade => cidade === partida) && (capitaisCentro.find(cidade => cidade === entrega))) totalRotas + 0;
  if (capitaisSudeste.find(cidade => cidade === partida) && (capitaisSudeste.find(cidade => cidade === entrega))) totalRotas + 0;
  if (capitaisSul.find(cidade => cidade === partida) && (capitaisSul.find(cidade => cidade === entrega))) totalRotas + 0;
  if ((capitaisNorte.find(cidade => cidade === partida)) && capitaisNordeste.find(cidade => cidade === entrega)) totalRotas + 0; // rota unidirecional existente
  if (((capitaisSudeste.find(cidade => cidade === partida)) && capitaisCentro.find(cidade => cidade === entrega))) totalRotas + 0; // rota unidirecional existente
  if ((capitaisSudeste.find(cidade => cidade === partida)) && capitaisSul.find(cidade => cidade === entrega)) totalRotas + 0; // rota unidirecional existente
  if ((todasMenosCentro.find(cidade => cidade === partida) && !todasMenosCentro.find(cidade => cidade === entrega))) {
    if (capitaisCentro.find(entrega)) {
      totalRotas + 1;
    } else {
      totalRotas + 1;
    }
  }
  return `Adicionando ${totalRotas} rotas`;
};

console.log(rotas('Belém', 'Aracaju'));
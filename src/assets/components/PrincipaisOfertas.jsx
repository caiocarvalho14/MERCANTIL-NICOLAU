import ScrollContainer from "./ScrollCards/ScrollContainer";

const essenciais = [
  {
    titulo: "Gás",
    preco: 110,
    imagem:
      "https://www.distribuidorasalome.com.br/wp-content/uploads/sites/3165/2020/04/P13_VistaFrontal_SemMARCA.png",
  },
  {
    titulo: "Água 20l",
    preco: 7.5,
    imagem:
      "https://phygital-files.mercafacil.com/peruzzo/uploads/produto/agua_mineral_da_pedra_s_gas_20l_446646cc-98e6-4832-91ba-0e939774e195.png",
  },
];

const moveis = [
  {
    titulo: 'Cadeira e Mesa',
    preco: 110,
    imagem: ''
  }
]

function PrincipaisOfertas() {
  return (
    <>
      <div className="p-4 container position-relative">
        <h1 className="text-center w-100 ">Nossas Principais Ofertas:</h1>

        <hr />
        <ScrollContainer data={essenciais} secao="Essenciais:" icone="house"/>
        <hr />
        <ScrollContainer data={essenciais} secao="Essenciais:" icone="house"/>

      </div>
    </>
  );
}
export default PrincipaisOfertas;

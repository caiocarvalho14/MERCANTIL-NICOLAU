import ScrollContainer from "./ScrollCards/ScrollContainer";

const essenciais = [
  {
    titulo: "Gás",
    preco: 110,
    imagem:
      "gas.png",
  },
  {
    titulo: "Água 20l",
    preco: 7.5,
    imagem:
      "agua-mineral.png",
  },
]

const moveis = [
  {
    titulo: 'Criado Mudo - 2 Gavetas',
    preco: 150,
    imagem: 'criado-mudo1.jpg'
  },
  {
    titulo: 'Estante com 4 prateleiras',
    preco: 185,
    imagem: 'estante1.jpg'
  },
  {
    titulo: 'Mesa com 6 Cadeiras',
    preco: 800,
    imagem: 'mesa-6-cadeiras.jpg'
  },
  {
    titulo: 'Armário com 3 Prateleiras',
    preco: 250,
    imagem: 'armario1.jpg'
  },
  {
    titulo: 'Filtro de Barro',
    preco: 120,
    imagem: 'filtro-barro1.jpg'
  },
  {
    titulo: 'Fogão com 2 Bocas',
    preco: 110,
    imagem: 'fogao1.jpg'
  },
  {
    titulo: 'Pilão',
    preco: 150,
    imagem: 'pilao1.jpg'
  },
]

function PrincipaisOfertas() {
  return (
    <>
      <div className="p-4 container position-relative">
        <h1 className="text-center w-100 ">Nossas Principais Ofertas:</h1>

        <ScrollContainer data={essenciais} secao="Essenciais" icone="bucket"/>

        <ScrollContainer data={moveis} secao="Móveis" icone="house"/>

      </div>
    </>
  );
}
export default PrincipaisOfertas;

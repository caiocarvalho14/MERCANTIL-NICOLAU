import ScrollCards from "./ScrollCards";
function ScrollContainer({ data = [], secao = "Seção" , icone = ''}) {
  return (
    <div className="text-center p-1">
      <hr />
      <h2 className="text-start"><i className={`bi bi-${icone}`}></i> {secao}:</h2>
      <div className="d-flex overflow-x-auto gap-4 mb-4 py-3">
        {data.map((i, index) => (
          <ScrollCards key={index} titulo={i.titulo} preco={i.preco} imagem={i.imagem} />
        ))}
      </div>
    </div>
  );
}
export default ScrollContainer;

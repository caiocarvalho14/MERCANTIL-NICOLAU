import FormalCards from './FormalCards'
function FormalContainer({ cards , contagem }) {
    return (
        <div className="container text-center p-5">
            <div className='row align-items-stretch g-4 mb-4'>
                {cards.map((c, index) => (
                    <FormalCards
                        titulo={c.titulo}
                        descricao={c.descricao}
                        icones={c.icones}
                        key={index}
                        indice = {contagem ? '' : index + 1}
                        botoes = {(c.botoes)}
                        lista = {(c.lista)}
                    />
                ))}
            </div>
        </div>
    )
}
export default FormalContainer;
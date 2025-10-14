import CardsContainer from './Cards/CardsContainer'

const cards = [
    { titulo: 'Água e Gás na Hora!', descricao: 'Entrega prioritária de gás e água mineral. Sua urgência resolvida com instalação rápida e segura do botijão. Ligue pra gente!' , icones: ['telephone'] },
    {titulo : 'Compras Sem Sair de Casa ' , descricao: 'Realizamos a entrega do seu pedido no conforto da sua casa.' , icones:['cart3'] },
    {titulo : 'Seu Tempo é Ouro ' , descricao: 'Ganhe tempo e conforto com a agilidade do nosso delivery local.', icones:['clock']}
]

function Servicos() {
    return (
        <>
            <div className='p-4'>
                <h1 className='text-center w-100'>Nosso Diferencial:</h1>

                <CardsContainer
                    contagem={true}
                    cards={cards}
                />
            </div>
        </>
    )
}
export default Servicos;
import CardsContainer from './Cards/CardsContainer'

const cards=[
    {titulo:'Chame no Zap' , icones : ['whatsapp']},
    {titulo:'Confirmação Rápida' , icones : ['check-circle']},
    {titulo:'Receba e Pague' , icones : ['house']},
]

function ComoFunciona() {
    return (
        <>
            <div className='p-4'>
                <h1 className='text-center w-100'>Como Funciona:</h1>

                <CardsContainer
                    cards={cards}
                />
            </div>
        </>
    )
}

export default ComoFunciona;
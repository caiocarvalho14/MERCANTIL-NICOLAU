import FormalContainer from './FormalCards/FormalContainer'

const cards = [
    {
        titulo: 'Telefone/Whatsapp',
        descricao: 'Telefone: (86) 9 9477-9375',
        icones: ['telephone'],
        botoes: [{
            texto: 'Whatsapp',
            icone: 'whatsapp',
            link: 'https://wa.me//86994779375',
            cor: 'success'
        },
        ]
    },
    {
        titulo: 'Onde nos encontrar',
        descricao: 'Estamos localizados em frente à Praça Constantino Correia, Nº 938, Centro de Parnaíba.',
        icones: ['geo-alt-fill'],
        botoes: [{
            texto: 'Ver no Google Maps',
            icone: 'geo-alt-fill',
            link: 'https://maps.app.goo.gl/yJatvLvQhGgNmtG3A',
            cor: 'primary'
        }],
    },
    {
        titulo: 'Horário de funcionamento',
        icones: ['clock-history'],
        lista:[{
            nome:'Segunda a sexta',
            desc:'08h - 18:30h'
        },
        {
            nome:'Sábado',
            desc:'08h - 16h'
        },
        {
            nome:'Domingo e Feriados',
            desc:'Fechado'
        },
    ]
    }
]

function Contato() {
    return (
        <>
            <div className='p-4' id="contato">
                <h1 className='text-center w-100'>Contato</h1>

                <FormalContainer
                    contagem={false}
                    cards={cards}
                />
            </div>
        </>
    )
}

export default Contato;
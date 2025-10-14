import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './FormalCards.css'

function FormalCards({
    titulo,
    descricao,
    icones = [],
    emojis,
    indice,
    botoes,
    lista
}) {
    return (
        <div className='col-12 col-sm-6 col-lg-4'>
            <Card className='formal-cards shadow'>
                <Card.Body className='d-flex flex-column justify-content-evenly align-items-center'>
                    {icones.map((i, index) => {
                        return (
                            <i className={`bi bi-${i} formal-card-badge`}></i>
                        )
                    })}
                    <div>
                        <Card.Title className='fw-bold'>{titulo}</Card.Title>
                        {emojis}
                        <Card.Text>
                            {descricao}
                            {(descricao) ? (<br className='mb-4'></br>) : ''}

                            {(botoes) ? botoes.map(b => {
                                return (
                                    <a href={b.link} target='_blank' className={`btn btn-${b.cor} text-white`}>{b.texto}<i className={`bi bi-${b.icone} mx-3 formal-link-badge`}></i></a>

                                )
                            }) : ''}

                            <div className='text-center p-2 '>
                                {(lista) ? lista.map(l => {
                                    return (
                                        <>
                                            <h5>{l.nome}</h5>
                                            <h6>{l.desc}</h6>
                                        </>
                                    )
                                }) : ''}
                            </div>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FormalCards;
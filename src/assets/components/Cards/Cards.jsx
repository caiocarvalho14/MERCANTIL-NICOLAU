import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'

function Cards({
    titulo,
    descricao,
    icones = [],
    emojis,
    indice,
}) {
    return (
        <div className='col-12 col-sm-6 col-lg-4'>
            <Card className='cards bg-danger shadow'>
                <Card.Body className='d-flex flex-column justify-content-evenly'>
                    <h1 className='position-absolute'>{indice}</h1>
                    {icones.map((i, index) => {
                        return (
                            <i className={`bi bi-${i} card-badge`}></i>
                        )
                    })}
                    <div>
                        <Card.Title className='fw-bold'>{titulo}</Card.Title>
                        {emojis}
                        <Card.Text>
                            {descricao}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;
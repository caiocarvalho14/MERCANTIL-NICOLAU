import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ScrollCards.css";

function ScrollCards({ titulo, preco = '', imagem = 'placeholder.png', contain = false }) {
  let link = `https://wa.me/86994779375?text=Olá,%20gostaria%20de%20falar%20sobre:%20${titulo}`
  return (
    <div className="">
      <Card className="scroll-cards shadow-sm">
        <Card.Img
          variant="top"
          src={`images/${imagem}`}
          alt={titulo}
          style={{
            height: '150px',
            objectFit: contain ? 'contain' : 'cover',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
          }}
        />

        {/* Botão posicionado no canto superior direito */}
        <a
          href={link}
          target="_blank"
          className="btn btn-success position-absolute"
          style={{
            top: '8px',
            right: '8px',
            width: '36px',
            height: '36px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
        >
          <i className="bi bi-whatsapp fs-5 text-light"></i>
        </a>
        <Card.Body className="d-flex border-top flex-column justify-content-between align-items-center h-100">
          <Card.Title className="text-center w-100">{titulo}</Card.Title>
          <Card.Text>
            <small>Por Apenas:</small><br />
            <p className="fs-5 fw-bold">R$ {preco.toFixed(2).replace(".", ",")}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ScrollCards;

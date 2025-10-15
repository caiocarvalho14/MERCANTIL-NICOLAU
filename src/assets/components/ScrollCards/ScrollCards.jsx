import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ScrollCards.css";

function ScrollCards({ titulo, preco = '' , imagem = 'https://fortatacadista.vteximg.com.br/arquivos/ids/157864-800-800/Arroz-Branco-Catarinao-1kg.jpg?v=637400108666630000' }) {
    let link = `https://wa.me/86994779375?text=Olá,%20gostaria%20de%20falar%20sobre:%20${titulo}`
  return (
    <div className="">
      <Card className="scroll-cards shadow-sm">
        <Card.Body className="d-flex flex-column justify-content-between align-items-center h-100">
          <Card.Title className="text-center w-100">{titulo}</Card.Title>
          <img
            src={`images/${imagem}`}
          />
          <Card.Text>
            R$ {preco.toFixed(2).replace(".", ",")}
            <br />
            <a href={link} target="_blank" className="btn btn-success text-light mt-3 fs-9">
              Enviar Mensagem <i className="bi bi-whatsapp"></i>
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ScrollCards;

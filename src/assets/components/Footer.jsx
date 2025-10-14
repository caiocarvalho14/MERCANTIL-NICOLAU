function Footer(){
    const ano = new Date().getFullYear()
    return(
        <footer className="border p-4 text-center w-100">
            Desenvolvido por Caio Carvalho para Mercantil Nicolau Filho © {ano}. Todos os direitos reservados.
            <div>
                <a href="https://github.com/caiocarvalho14" className="p-1" target="_blank"><i className="bi bi-github"></i></a>
                <a href="https://instagram.com/caio.carvalho9" className="p-1" target="_blank"><i className="bi bi-instagram"></i></a>
            </div>
        </footer>
    )
}
export default Footer
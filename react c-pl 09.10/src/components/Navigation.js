
const Navigation = () => {
    return (
        <nav>
        <div className="fixed">
          <div className="fixed-head">
            <div className="logotipas">
              <a href="https://codeacademy.lt/"><img className="logo"
                  src="https://codeacademy.lt/wp-content/uploads/2021/05/CodeAcademy-visi_Logotipas-juodas.png"
                  alt="Code academy logotype" />
              </a>
            </div>
            <div className="navigacija"><a href="/#">Studentams</a></div>
            <div className="navigacija"><a href="/#">Karjeros centras</a></div>
            <div className="navigacija"><a href="/#">Programos</a></div>
            <div className="navigacija"><a href="/#">IT testas</a></div>
            <div className="navigacija"><a href="/#">Apie mus</a></div>
            <div className="navigacija"><a href="/#">Verslui</a></div>
            <div className="navigacija"><a href="/#">Kontaktai</a></div>
            <div className="navigacija"><a href="/#">EN</a></div>
            <button className="skambinti">Skambinti</button>
          </div>
        </div>
        </nav>
    )
}

export default Navigation
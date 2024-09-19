import "./NavigationElement/NavigationElement.js"
import NavigationElement from "./NavigationElement/NavigationElement.js"
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
           <NavigationElement
           text ="Studentams"
           />
            
            <NavigationElement
           text ="Karjeros centras"
           />
              <NavigationElement
           text ="Prigramos"
           />
              <NavigationElement
           text ="IT testas"
           />
              <NavigationElement
           text ="Apie mus"
           />
              <NavigationElement
           text ="Vrslui"
           />
              <NavigationElement
           text ="Kontaktai"
           />
              <NavigationElement
           text ="EU"
           />
            
            <button className="skambinti">Skambinti</button>
          </div>
        </div>
        </nav>
    )
}

export default Navigation

import PapildomaNavElement from "./PapildomaNavElements/PapildomaNavElement.js"

const PapildomaNav = () => {
  return (
   <div className="bandymas">
     <PapildomaNavElement
    text = "Apie mus"
    />
    <PapildomaNavElement
    text = "Naujienos"
    />
    <PapildomaNavElement
    text = "Karjera"
    />
    <PapildomaNavElement
    text = "ES parama"
    />
   </div>
  )
}

export default PapildomaNav
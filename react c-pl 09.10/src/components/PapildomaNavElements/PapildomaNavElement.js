import "./PapildomaNavElement.css"
const PapildomaNavElement = (props) => {

    const {text} = props
    
    return (
        <section >
        
          <div className="papildoma">
            <a href="/#">{text}</a>
          </div>
      </section>
    )
  }
  
  export default PapildomaNavElement
import "./NavigationElement.css"
const NavigationElement = (props) => {

    const {text} = props
    
    return (
      <div className="navigacija">
          <div className="navigacija"><a href="/#">{text}</a></div>
      </div>
    )
  }
  
  export default NavigationElement
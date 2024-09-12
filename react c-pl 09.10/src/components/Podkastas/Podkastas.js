import "./Podkastas.css"
const Podkastas = ({ image, length, title, date }) => {
    if (!title) {
      return ""
    }
  
    return (
      <div className="audio">
          <div className="podcast-controls">
              {image && <img src={image} alt="" className="ritmu" />}
              {length && <div className="juodas">Trukmė: {length}</div>}
              <button className="button">Play</button>
          </div>
          <div className="po-audio">
              <p className="podcast-title">{title}</p>
              {date && <p className="podcast-date">{date}</p>}
          </div>
      </div>
    )
  }
  
  export default Podkastas
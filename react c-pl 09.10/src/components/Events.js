const Events = (props) => {
    const { imageSrc, location, day, month, tittle} = props
  


    if ( !tittle) {
        return '';
    }


    return (
      <div className="renginys1 uppercase">
          <a href="/#">
              {imageSrc && (
                <div className="event-item-image-wrapper">
                  <img src={imageSrc} alt="" className="event-item-image" />
                </div>
              )}
      
              <div className="event-item-content-wrapper">
                <div className="event-date">
                  {(day && month) ? (
                    <>
                      <span className="data1 data">{day}</span>
                      <span className="menesis">{month}</span>
                    </>
                  ) : (
                    <span className="event-month">Soon</span>
                  )}
                </div>
                <div className="event-item-content">
                    <p className="event-location">{location ? location : 'Online'}</p>
                    <h3 className="event-title">{tittle}</h3>
                </div>
              </div>
          </a>
      </div>
    )
  }
  
  export default Events
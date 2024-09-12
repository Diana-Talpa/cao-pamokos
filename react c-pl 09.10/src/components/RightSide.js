import Podkastas from "./Podkastas"
import Events from "./Events"

const RightSide = () => {
  return (
    <div className="right-side">
              <section>
                <h1>Podcastai ir radijo laidos</h1>
                <Podkastas 
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB27xwO9ezWIv0Lbepyfbr1GZsQtjC_JU3OA&s"}
                length={"7:55"}
                title={"Elektrinių povandeninių dronų kompanija  pasirengusi tapti vandenynų SpaceX"}
                date={"2021-08-25"}
                
                />
                <Podkastas 
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB27xwO9ezWIv0Lbepyfbr1GZsQtjC_JU3OA&s"}
                length={"7:55"}
                title={"Elektrinių povandeninių dronų kompanija  pasirengusi tapti vandenynų SpaceX"}
                date={"2021-08-25"}
                
                />
                <Podkastas 
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB27xwO9ezWIv0Lbepyfbr1GZsQtjC_JU3OA&s"}
                length={"7:55"}
                title={"Elektrinių povandeninių dronų kompanija  pasirengusi tapti vandenynų SpaceX"}
                date={"2021-08-25"}
                
                />
                
                
                
              </section>
              <section>
                <div className="renginiu-skiltis">
                  <h1 className="renginys">Renginiai</h1>

                  <Events 
                  imageSrc= "https://codeacademy.lt/wp-content/uploads/2024/05/0515_CA_event-1-3-1024x576.png"
                  location= "Upes g. 21, Greenhall 1"
                  day= "13"
                  month= "GEG"
                  tittle= "COMIC CON BALTICS 2024"
                  />
                
                 <Events
                 location= "Upes g. 21, Greenhall 1"
                 day= "15"
                 month= "GEG"
                 tittle="CodeAcademy galimybes verslui"
                  />
                 <Events
                 location= "Upes g. 21, Greenhall 1"
                 day= "26"
                 month= "GEG"
                 tittle= " Pristatymas"
                  />
                </div>
              </section>
            </div>
  )
}

export default RightSide
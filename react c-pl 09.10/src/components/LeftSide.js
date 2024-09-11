import NaujienosDidesnes from "./NaujienosDidesnes"
import NaujienosMazesnes from "./NaujienosMazesnes"



const LeftSide = () => {
  return (
    <div className="left-side">
    <section>
      <h1>Naujienos</h1>
      <div className="naujienos">

      
                <NaujienosDidesnes 
                    title="Kaip junior'ui išnaudoti „LinkedIn“ savo naudai?" 
                    category="Karjera" 
                    url="/#" 
                    imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/315d4ed0-6067-11ed-8c07-f1146d90fed4-1-1024x607.jpg" 
                />
                <NaujienosDidesnes 
                    title="Sėkmės istorija – įsidarbinimas į Asteri" 
                    category="Sėkmės istorija 2" 
                    url="/#" 
                    imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" 
                />
                
                <NaujienosMazesnes
                title="Sėkmės istorija – įsidarbinimas į Asteri" 
                category="Sėkmės istorija 2" 
                url="/#" 
                imageSrc="https://codeacademy.lt/wp-content/uploads/2024/04/DSC_0903-Milda-N-1-scaled-e1714131896738-1024x899.jpg" 
                 />


      </div>
    </section>
    <section>
      <div className="visos-nauj">
        <a href="/#">Visos Naujienos</a>
        <img className="strele"
          src="png-transparent-black-arrow-illustration-greater-than-sign-computer-icons-mathematics-less-than-sign-simple-geometry-miscellaneous-angle-text-thumbnail.png"
          alt="" />
      </div>
      <h1>Vaizdo irasai</h1>
      <div className="video">
        <div className="vid1">
          <iframe width="740" height="390" src="https://www.youtube.com/embed/Rz6bswWbPqw?si=s1pUXiRnevlULzbf"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <p>/#6 Studentes istorija: sekme slypi disciplinoje</p>
        </div>
        <div className="vid2">
          <iframe width="350" height="180" src="https://www.youtube.com/embed/yovsPjuDElw?si=wKCP8Kb4FXle5BnI"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p>/#4 Ctrl+Alt+Defend: Kibernetinis saugumas siandien</p>
        </div>
        <div className="vid3">
          <iframe width="350" height="180" src="https://www.youtube.com/embed/7X4iX-D6ymQ?si=FeLoUd8qzPCyoRT7"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p>Susipažink su mūsų įdarbinimo partneriais - <br /> Danske Bank!</p>
        </div>
      </div>
      <div className="visos-nauj">
        <a href="/#">Visi vaizdo irasai</a>
        <img className="strele"
          src="png-transparent-black-arrow-illustration-greater-than-sign-computer-icons-mathematics-less-than-sign-simple-geometry-miscellaneous-angle-text-thumbnail.png"
          alt="" />
      </div>
    </section>
  </div>
  )
}

export default LeftSide
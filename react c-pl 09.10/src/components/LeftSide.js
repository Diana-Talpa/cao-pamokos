import NaujienosDidesnes from "./NaujienosDidesnes"
import NaujienosMazesnes from "./NaujienosMazesnes"
import Video from "./Video"



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
                    date= "2024-05-28"
                />
                <NaujienosDidesnes 
                    title="Sėkmės istorija – įsidarbinimas į Asteri" 
                    category="Sėkmės istorija 2" 
                    url="/#" 
                    imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" 
                    date= "2024-05-23"
                />
                
                <NaujienosMazesnes
                title="Sekmes istorija - isidarbinimas i  Bentlay Systems" 
                category="Sėkmės istorijos" 
                url="/#" 
                imageSrc="https://codeacademy.lt/wp-content/uploads/2024/04/Ovidijus-Zaborskis-1-3-1024x1024.jpeg" 
                 date= "2024-04-25"
                 />

                <NaujienosMazesnes
                title="Sekmes istorija - isidarbinimas i  Fresh media" 
                category="Sėkmės istorijos" 
                url="/#" 
                imageSrc="https://codeacademy.lt/wp-content/uploads/2024/04/DSC_0903-Milda-N-1-scaled-e1714131896738-1024x899.jpg" 
                 date= "2024-04-25"
                 />

                <NaujienosMazesnes
                title="Sekmes istorija - isidarbinimas i Visma Tech" 
                category="Sėkmės istorijos" 
                url="/#" 
                imageSrc="https://codeacademy.lt/wp-content/uploads/2024/04/portrait-Giedrius-Tumosa.jpg" 
                 date= "2024-04-25"
                 />
                  <NaujienosMazesnes
                title="Už verslo partnerystes „CodeAcademy“ programavimo akademijoje
                                                bus
                                                atsakingas IT ekspertas Marius Pareščius" 
                category="Sėkmės istorijos" 
                url="/#" 
                imageSrc="https://codeacademy.lt/wp-content/uploads/2024/04/mp_nuotrauka-1.jpeg" 
                date= "2024-04-25" 
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
        <Video title="#6 Studentes istorija: sekme slypi disciplinoje"
            src= "https://www.youtube.com/embed/Rz6bswWbPqw?si=s1pUXiRnevlULzbf"/>
        <Video title="#4 Ctrl+Alt+Defend: Kibernetinis saugumas siandien" 
        src="https://www.youtube.com/embed/yovsPjuDElw?si=wKCP8Kb4FXle5BnI" />
        <Video title="Susipažink su mūsų įdarbinimo partneriais - Danske Bank!" 
        src="https://www.youtube.com/embed/7X4iX-D6ymQ?si=FeLoUd8qzPCyoRT7"/>
        
       
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
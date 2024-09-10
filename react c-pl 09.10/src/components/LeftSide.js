

const LeftSide = () => {
  return (
    <div className="left-side">
    <section>
      <h1>Naujienos</h1>
      <div className="naujienos">

        <div className="box-1">
          <a href="/#">
            <img className="photo1"
              src="https://codeacademy.lt/wp-content/uploads/2024/05/315d4ed0-6067-11ed-8c07-f1146d90fed4-1-1024x607.jpg"
              alt="" />
          </a>
          <div className="aprasymas">
            <p className="blue">Karjera</p>
            <h2>Kaip junior'ui išnaudoti <br /> „LinkedIn“ savo naudai?</h2>
            <p>2024-05-28</p>
          </div>
        </div>
        <div className="box-2">
          <a href="/#">
            <img className="photo1"
              src="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png" alt="" />
          </a>
          <div className="aprasymas">
            <p className="blue">Sėkmės istorijos</p>

            <h2>Sėkmės istorija - <br /> įsidarbinimas į Asteri</h2>
            <p>2024-05-23</p>
          </div>
        </div>
        <div className="box-3 boxflex">
          <a href="/#">
            <img className="small-image"
              src="https://codeacademy.lt/wp-content/uploads/2024/04/Ovidijus-Zaborskis-1-3-1024x1024.jpeg"
              alt="" />
          </a>
          <div className="mall-aprasymas">
            <p className="blue">Sekmes istorijos</p>
            <p className="small-black-font">
              Sekmes istorija - isidarbinimas i <br /> Bentlay Systems
            </p>
            <p> 2024-04-25</p>
          </div>
        </div>
        <div className="box-4 boxflex">
          <a href="/#">
            <img className="small-image"
              src="https://codeacademy.lt/wp-content/uploads/2024/04/DSC_0903-Milda-N-1-scaled-e1714131896738-1024x899.jpg"
              alt="" />
          </a>
          <div className="mall-aprasymas">
            <p className="blue">Sekmes istorijos</p>
            <p className="small-black-font">
              Sekmes istorija - isidarbinimas i <br /> Fresh media
            </p>
            <p> 2024-04-25</p>
          </div>
        </div>
        <div className="box-5 boxflex">
          <a href="/#">
            <img className="small-image"
              src="https://codeacademy.lt/wp-content/uploads/2024/04/portrait-Giedrius-Tumosa.jpg" alt="" />
          </a>
          <div className="mall-aprasymas">
            <p className="blue">Sekmes istorijos</p>
            <p className="small-black-font">
              Sekmes istorija - isidarbinimas i <br /> Visma Tech
            </p>
            <p> 2024-04-25</p>
          </div>
        </div>
        <div className="box-6 boxflex">
          <a href="/#">
            <img className="small-image"
              src="https://codeacademy.lt/wp-content/uploads/2024/04/mp_nuotrauka-1.jpeg" alt="" />
          </a>
          <div className="mall-aprasymas">
            <p className="blue">Sekmes istorijos</p>
            <p className="small-black-font">
              Už verslo partnerystes <br /> „CodeAcademy“ programavimo <br />akademijoje
              bus
              atsakingas IT ekspertas Marius Pareščius
            </p>
            <p> 2024-04-25</p>
          </div>
        </div>
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
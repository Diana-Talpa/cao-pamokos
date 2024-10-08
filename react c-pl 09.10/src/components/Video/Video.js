import "./Video.css"
const Video = (props) => {

  const { title, src} = props

  if ( !src) {
    return '';
}

    return (
      <div className="vid1">
          <p ></p>
          <iframe title={title} width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" src={src} allowFullScreen></iframe>
      </div>
    )
  }
  
  export default Video
const NaujienosDidesnes = (props) => {

    const { title, date, category, url, imageSrc } = props

    if (!title || !url) {
        return ''
    }

    const categoryElement = category && <p className="box-1-category, blue">{category}</p>
    const dateElement = date && <p className="box-1-date">{date}</p>
    const imageElement = imageSrc && (
        <div className="box-1">
            <img src={imageSrc} alt="" className="box-1-image, photo1" />
        </div>
    )
    return (
        <div className="box-1">
            <a href={url}>
                {imageElement}
                <div className="box-1-content, aprasymas">
                    {categoryElement}
                    <h2 className="box-1-title,">{title}</h2>
                    {dateElement}
                </div>
            </a>
        </div>
    )
}

export default NaujienosDidesnes
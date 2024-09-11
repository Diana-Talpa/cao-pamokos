const NaujienosMazesnes = (props) => {

    const { title, date, category, url, imageSrc } = props;

    if (!title || !url) {
        return '';
    }

    const categoryElement = category && <p className="boxflex-category blue">{category}</p>;
    const dateElement = date && <p className="boxflex-date small-black-font">{date}</p>;
    const imageElement = imageSrc && (
        <div className="boxflex">
            <img src={imageSrc} alt="" className="boxflex-image small-image" />
        </div>
    );

    return (
        <div className="boxflex">
            <a href={url}>
                {imageElement}
                <div className="box-1-content mall-aprasymas">
                    {categoryElement}
                    <h2 className="box-1-title">{title}</h2>
                    {dateElement}
                </div>
            </a>
        </div>
    );
};

export default NaujienosMazesnes;

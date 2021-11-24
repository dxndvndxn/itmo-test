import classNames from "classnames";

type Props = {
    title: string,
    img: string,
    date: string,
    text: string,
    url: string,
    loaded: boolean
}

function TheNewsCard ({ img, title, date, text, url, loaded } :Props) {
    return (
        <div className="n-card">
            <a href={ url } className={classNames('n-card__img-wrap', {
                'skeleton': !loaded
            })
            }>
                {
                    img ? <img src={img} alt={title} className="n-card__img" />
                        :
                        img
                }
            </a>
            <div className="n-card__desk">
                <div className={classNames('', {
                    'n-card__date_passive skeleton': !loaded
                })
                }>
                   <span className='n-card__date'>  { date } </span>
                </div>
                <div
                    className={classNames('n-card__text', {
                        'n-card__text_passive skeleton': !loaded
                    })}
                    dangerouslySetInnerHTML={{ __html: text }}>
                </div>
            </div>
        </div>
    )
}

export default TheNewsCard

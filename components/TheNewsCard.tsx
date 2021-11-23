import classNames from "classnames";
interface date {
    day: string,
    month: string,
    year: string
}
type Props = {
    title: string,
    img: string,
    date: date,
    text: string,
    url: string
}

function TheNewsCard ({ img, title, date, text, url } :Props) {
    return (
        <div className="n-card">
            <a href={ url } className={classNames('n-card__img-wrap', {
                'skeleton': url === '#'
            })
            }>
                {
                    img ? <img src={img} alt={title} className="n-card__img"/>
                        :
                        img
                }
            </a>
            <div className="n-card__desk">
                <div className={classNames('n-card__date', {
                    'n-card__date_passive skeleton': !date
                })
                }>
                    {
                        date ? date.day + ' ' + date.month + ' ' + date.year
                            :
                            date
                    }
                </div>
                <div
                    className={classNames('', {
                        'n-card__text_passive skeleton': !text
                    })}
                    dangerouslySetInnerHTML={{ __html: text }}>
                </div>
            </div>
        </div>
    )
}

export default TheNewsCard

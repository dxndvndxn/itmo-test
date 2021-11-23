import TheTitle from "./TheTitle";
import TheNewsCard from "./TheNewsCard";
import { useEffect, useState } from "react";
import getCards from "../api/getCards";
import { connect } from "react-redux"

function News({ langId }) {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ]
    const [ news, setNews ] = useState(Array(3).fill({
        image_small: '',
        title: '',
        date: '',
        lead: '',
        url: '#'
    }))
    const getParams = `&lead=true&language_id=${langId}&per_page=9`

    useEffect(() => {
        // Чтобы показать заглушку
        setTimeout(() => {
            getCards('news/list/', getParams, 'news')
                .then(news => {
                    setNews(news)
                })
        }, 2000)
    }, [ langId ])

    const validDate = date => {
        const dateObj = new Date(date)
        const day = dateObj.getDate()
        const month = months[dateObj.getMonth()]
        const year = dateObj.getFullYear()

        return {
            day,
            month,
            year
        }
    }

    return (
        <div className="container">
            <TheTitle title="Новости и события"/>
            <div className="news">
                {
                    news.length && news.map((article, i) => (
                        <TheNewsCard
                            img={ article.image_small }
                            title={ article.title }
                            date={ article.date ? validDate(article.date) : article.date }
                            text={ article.lead }
                            url={ article.url }
                            key={ article.title + i }
                        />
                    ))
                }
            </div>
        </div>
    )
}

const state = state => {
    return {
        langId: state.language.langId
    }
}

export default connect(state)(News)

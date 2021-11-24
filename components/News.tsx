import TheTitle from "./TheTitle";
import TheNewsCard from "./TheNewsCard";
import { useEffect, useState } from "react";
import getCards from "../api/getCards";
import { connect } from "react-redux"

type Props = {
    langId: number,
}

type ReduxState = {
    language: langId
}

type langId = {
    langId: number
}

type CardNews = {
    image_small: string,
    title: string,
    date: string,
    lead: string,
    url: string,
    loaded: boolean
}

type monthsOptions = {
    [key: string]: Array<string>
}

function News({ langId } :Props) {
    const months :monthsOptions = {
        '1': [
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
        ],
        '2': [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
    }
    const [ news, setNews ] = useState(Array(3).fill({
        image_small: '',
        title: '',
        date: '',
        lead: '',
        url: '#'
    }))
    const [ newsLoaded, setLoaded ] = useState(false)
    const getParams: string = `&lead=true&language_id=${langId}&per_page=9`

    useEffect(() => {
        if (newsLoaded) setLoaded(false)
        // Чтобы показать заглушку
        setTimeout(() => {
            getCards('news/list/', getParams, 'news')
                .then((news: any) => {
                    setLoaded(true)
                    setNews(news)
                })
        }, 2000)
    }, [ langId ])

    const validDate = (date: string) => {
        const dateObj = new Date(date)
        const day: number = dateObj.getDate()
        const month: string = months[langId][dateObj.getMonth()]
        const year: number = dateObj.getFullYear()

        return day + ' ' + month + ' ' + year
    }

    return (
        <div className="container">
            <TheTitle title="Новости и события" />
            <div className="news">
                {
                    news.length && news.map((article: CardNews, i: number) => (
                        <TheNewsCard
                            img={ article.image_small }
                            title={ article.title }
                            date={ article.date ? validDate(article.date) : article.date }
                            text={ article.lead }
                            url={ article.url }
                            loaded={ newsLoaded }
                            key={ article.title + i }
                        />
                    ))
                }
            </div>
        </div>
    )
}

const state = (state: ReduxState) => {
    return {
        langId: state.language.langId
    }
}

export default connect(state)(News)

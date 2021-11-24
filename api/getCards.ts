import axios from "axios"

const getCards = (category: string, getParams: string, dynamicVar: string) => {
    const url: string = `${category}?ver=2.0${getParams}`

    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(({ data }) => {
                resolve(data[dynamicVar])
            })
            .catch(e => {
                console.log(e)
                reject(e)
            })
    })
}

export default getCards

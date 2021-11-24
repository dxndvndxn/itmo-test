import React, {useState, useEffect, useRef} from "react"
import classNames from "classnames"
import { connect } from "react-redux"
import setLang from "../redux/actions/setLang"

interface language {
    img: string,
    lang: string,
    id: number
}

interface languageList extends Array<language> {}

type Props = {
    langs: languageList,
    langId: number,
    setLang: Function
}

type ReduxState = {
    language: any
}


function SwitchLang({ langs, langId, setLang } :Props) {
    const [ activeLang, setActive ] = useState<language | undefined>(langs.find(lang => lang.id === langId))
    const [ showList, setShowList ] = useState(false)
    const refSwitch = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.body.addEventListener('click', handleOutside)
    }, [])

    const activeHandler = (id: number, i: number) => {
        if (id !== langId) {
            setLang(id)
            setActive(langs[i])
            setShowList(false)
        }
    }
    const handleOutside = ({ path } :any) => {
        const isSwitch = path.includes(refSwitch.current)
        if (!isSwitch) setShowList(false)
    }

    return (
        <div className="switch" ref={ refSwitch }>
            <div className="switch__lang">
                <img className="switch__img" src={ activeLang!.img || '' } alt={ activeLang!.img || '' } />
                <span> { activeLang!.lang } </span>
                <img src='/arrow.svg'
                     alt="Arrow"
                     onClick={() => setShowList(!showList)}
                     className={classNames('switch__arrow', {
                         'switch__arrow_active': showList
                     })}
                />
            </div>
            <ul className={classNames('switch__list', {
                'switch__list_active': showList
            })}>
                {
                    langs.map((lang, i) => {
                        return (
                            <li key={ lang.id }
                                onClick={ () => activeHandler(lang.id, i) }
                                className={ classNames('switch__item', {
                                    'switch__item_active': lang.id === langId
                                }) }
                            >
                                <img src={ lang.img } alt={ lang.lang } />
                                <span className="switch__item-lang"> { lang.lang } </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const state = (state: ReduxState) => {
    return {
        langId: state.language.langId
    }
}

const actions = {
    setLang
}

export default connect(state, actions)(SwitchLang)

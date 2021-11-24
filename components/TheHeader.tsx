import SwitchLang from "./SwitchLang";


interface language {
  img: string,
  lang: string,
  id: number
}

interface languageList extends Array<language> {}

function TheHeader() {
    const languages: languageList = [
        {
            img: '/Flag-RUS.svg',
            lang: 'Рус',
            id: 1
        },
        {
            img: '/Flag-ENG.svg',
            lang: 'Eng',
            id: 2
        }
    ]

    return (
        <header className="header">
            <nav className="header__nav container">
                <div>
                    <img src='/logo.svg' className='header__logo' alt="Логотип"/>
                </div>

                <SwitchLang langs={ languages } />
            </nav>
        </header>
    );
}


export default TheHeader

import type { AppProps } from 'next/app'
import '../styles/app.scss'
import axios from "axios"
axios.defaults.baseURL = 'https://news.itmo.ru/api/'
import { wrapper } from '../redux'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default  wrapper.withRedux(MyApp)

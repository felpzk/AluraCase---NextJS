import GlobalStyle from '@/styles/theme/GlobalStyle'


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

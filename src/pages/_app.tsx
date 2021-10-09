import '@styles/global.less';
import 'antd/dist/antd.less';
import { IntlProvider } from "react-intl";
import React, { useState, useEffect } from 'react';
import languageCofig from '@utils/i18n';
import { Header } from '@lib'

export default function App({ Component, pageProps }) {
  const { message } = languageCofig;
  const [lang, setLang] = useState("en-US");
  useEffect(() => {
    const language = window.localStorage.getItem("locale") || global["defaultLanguage"];
    setLang(language);
  }, []);
  return (
    <IntlProvider
      locale={lang}
      messages={message[lang]}
    >
      <Header />
      <Component {...pageProps} />
    </IntlProvider>
  )
}


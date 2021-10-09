import * as React from 'react';
import Head from 'next/head'

export default class Header extends React.Component {
  public render() {
    const head = (
      <Head>
          <title key="title">{global["documentTitle"]}</title>
          <meta charSet="utf-8" />
          <meta key="meta" name="viewport" content="initial-scale=1.0, width=device-width" />
          <script key="iconfont" async={false} src="./js/iconfont.js" />
          <script key="config" async={false} src="./js/config.js" />
          <link key="icon" rel="shortcut icon" href={global["favicon"]} type="image/x-icon"></link>
      </Head>
    )
    return head
  }
}

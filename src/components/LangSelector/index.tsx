import * as React from 'react'
import { Menu, Dropdown } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons';
import styles from './index.module.css'

const langMap = {
    "en-US": "En",
    "zh-CN": "简体",
    "zh-HK": "繁體"
}
const { defaultLanguage } = global as any
interface Props {
};

interface State {
    lang: string;
};

export default class LangSelect extends React.Component<Props, State> {
    public state = {
        lang: defaultLanguage
    }
    public componentDidMount() {
        this.getLanguage()
    }

    public getLanguage() {
        if(!global.localStorage.getItem("locale")){
            global.localStorage.setItem("locale", global["defaultLanguage"]) 
        }
        this.setState({
            lang: global.localStorage.getItem("locale") || defaultLanguage
        })
    }

    public render() {
        const { lang } = this.state
        const menu = (
            <Menu>
                {
                    Object.keys(langMap).map(v => {
                        return (
                            <Menu.Item
                                onClick={() => this.onChangeLanguage(v)}
                                key={v}
                            >
                                {langMap[v]}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
        return (
            <Dropdown
                overlay={menu}
            >
                <div className={styles.lang}>{langMap[lang]} <CaretDownOutlined /></div>
            </Dropdown>
        )
    }

    private onChangeLanguage(lang: string) {
        global.localStorage.setItem("locale", lang)
        global.location.reload()
    }
}

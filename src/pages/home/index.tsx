import { Layouts, LangSelector } from "@lib"
import { FormattedMessage } from "react-intl"
import styles from './index.module.less'

export function getContent() {
    return (
        <div className={styles.content}>
            <FormattedMessage id="hello_world"/>
            <LangSelector/>
        </div>
    )
}

export default function Home() {
    return (
        <Layouts content={getContent()} />
    )
}
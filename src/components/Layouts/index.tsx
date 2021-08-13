import * as React from 'react'
import styles from './layouts.module.less'
interface Props {
    content: React.ReactNode
};
export default class Layout extends React.Component<Props> {
    public render() {
        const { content } = this.props;
        return (
            <div>
                <div>header</div>
                <div
                    id="scroll-contanier"
                    className={styles.container}
                >
                    <div
                        className={styles.content}
                    >
                        {content}
                    </div>
                    <div>footer</div>
                </div>
            </div>
        )
    }
}

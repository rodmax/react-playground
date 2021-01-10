import './bars-spinner.scss'
import cn from 'classnames'

interface Props {
    isVisible: boolean
    fitContainer?: boolean
}

export const BarsSpinner: React.FC<Props> = props => {
    if (!props.isVisible) {
        return null
    }
    return (
        <div className={cn('bars-spinner', { 'mod-fit-container': props.fitContainer })}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

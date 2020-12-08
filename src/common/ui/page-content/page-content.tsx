import React from 'react'
import './page-content.scss'

export const PageContent: React.FC = props => {
    return <div className='page-content'>{props.children}</div>
}

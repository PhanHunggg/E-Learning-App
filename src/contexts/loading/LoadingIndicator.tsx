import React from 'react'
import "./loadingIndicator.scss"
export default function LoadingIndicator() {
    return (
        <div className='loading'>
            <span className="loader"></span>
            <h4>Vui lòng đợi trong giây lát...</h4>
        </div>
    )
}

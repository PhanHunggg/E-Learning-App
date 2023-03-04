import React from 'react'
import "./boxNumber.scss"

export default function BoxNumber() {
    return (
        <div className='boxNumber'>
            <div className="box py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 p-4 col-md-6">
                            <div className="boxNumber"></div>
                        </div>
                        <div className="col-lg-3 p-4 col-md-6">
                            <div className="boxNumber"></div>
                        </div>
                        <div className="col-lg-3 p-4 col-md-6">
                            <div className="boxNumber"></div>
                        </div>
                        <div className="col-lg-3 p-4 col-md-6">
                            <div className="boxNumber"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

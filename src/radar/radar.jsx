import React from "react";
import "./radar.css"

export default class Radar extends React.Component {

    render() {
        return (
            <div className="fullscreen">
                <div className='radar'>
                    <div className='sweep'></div>
                </div>
                <noscript>
                    <div className='radar'>
                        <div className='sweep'></div>
                    </div>
                </noscript>
            </div>
        )
    }

}
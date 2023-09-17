import React from 'react'
import './Notifications.css'

export  function Notifications(){
	    return(
		            <div className='Notifications'>
		                <p>Here is the list of notifications</p>
            <button
                aria-label='Close'
                type='button'
                style={{
                    position: 'absolute',
                    right: '18px',
                    top: '18px',
                    cursor: 'pointer',
                    Height: '20px',
                    background: 'transparent',
                    border: 'none'
                }}

            >
                <img
                    src={Closeicon}
                    alt='close-icon.png'
                    style={{
                        position: 'relative',
                        Height: '12px',
                        background: 'transparent',
                        border: 'none',
                    }}
                />
            </button>
												<ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li
                    data-priority='urgent'
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                ></li>
            </ul>
        </div>
		        );
}

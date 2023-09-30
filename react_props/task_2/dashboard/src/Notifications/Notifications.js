import React from 'react'
import '../Notifications/Notifications.css'
import NotificationItem from "./NotificationItem";
import Closeicon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
           <ul>
            <NotificationItem type="default" value="New course available"/>
            <NotificationItem type="urgent"  value="New course available"/>
            <NotificationItem type="urgent"  html={{ __html: getLatestNotification() }}/>
           </ul>
            <button
                aria-label='Close'
                type='button'
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    cursor: 'pointer',
                    background: 'transparent',
                }}

            >
                <img
                    src={Closeicon}
                    alt='close-icon'
                    style={{
                        position: 'relative',
                        background: 'transparent',
                    }}
                />
            </button>
        </div>

    );
}
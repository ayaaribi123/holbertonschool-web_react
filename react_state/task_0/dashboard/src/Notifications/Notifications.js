import React from 'react';
import closeIcon from '../assets/cancel.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css} from 'aphrodite'

class Notifications extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listNotifications: this.props.listNotifications,
        }
        this.markAsRead = this.markAsRead.bind(this)
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.state.listNotifications.length !== nextState.listNotifications.length
            || this.props.displayDrawer !== nextProps.displayDrawer
            );
      }

    render() {
        const {displayDrawer, handleDisplayDrawer, handleHideDrawer} = this.props
        if (this.state.listNotifications.length === 0) {
            return (
                <div className={css(styles.NotificationContainer)}>
                    <div className={css(styles.menuItem)}>
                        <p onClick={() => handleDisplayDrawer()}>Your notifications</p>
                    </div>
                    {displayDrawer && <div className={css(styles.Notifications)}>
                        <p>No new notification for now</p>
                    </div>}
                </div>
            )
        } else {
            return (
                <div className={css(styles.NotificationContainer)}>
                    <div className={css(styles.menuItem)}>
                        <p onClick={() => handleDisplayDrawer()}>Your notifications</p>
                    </div>
                    { displayDrawer && <div className={css(styles.Notifications)}>
                        <button className={css(styles.buttonStyle)} aria-label="Close" onClick={() => handleHideDrawer()}>
                            <img src={closeIcon} alt='Close'></img>
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul className={css(styles.ulist)}>
                            {this.state.listNotifications.map(notification => <NotificationItem 
                                key={notification.id}
                                idx={notification.id} 
                                type={notification.type} 
                                value={notification.value} 
                                html={notification.__html}
                                markAsRead={this.markAsRead}
                                />)}
                        </ul>
                    </div> }
                </div>
            )
        }
    }
} 

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
}
  
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {
        return
    },
    handleHideDrawer: () => {
        return
    },
}

const opacityKeyframes = {
    'from': {
        opacity: 0,
    },

    'to': {
        opacity: 1,
    }
};

const translateKeyframes = {
    '0%': {
        transform: 'translateY(0)',
    },

    '50%': {
        transform: 'translateY(-5px)',
    },

    '100%': {
        transform: 'translateY(5px)',
    },
};

const styles = StyleSheet.create({
    NotificationContainer: {
        width: "fit-content",
        position: "absolute",
        right: "10px",
        '@media (max-width: 900px)': {
            position: "unset",
            width: "100%",
            fontSize: "19px",
		},
    },
    
    menuItem: {
        marginLeft: "auto",
        textAlign: 'right',
        backgroundColor: "#fff8f8",
        cursor: 'pointer',
        ':hover': {
            animationName: [opacityKeyframes, translateKeyframes],
			animationDuration: '1s, .5s',
            animationIterationCount: '3',
        }
    },
    
    Notifications: {
        padding: "1rem",
        border: "2px dotted #e0354b",
        '@media (max-width: 900px)': {
            display: 'block'
		},
    },

    buttonStyle: {
        position: 'relative',
        float: 'right',
        backgroundColor: 'white',
        cursor: 'pointer',
        fontSize: '1rem'
    },

    ulist: {
        padding: "0"
    }
})

export default Notifications;
import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css} from 'aphrodite'

export default function Header(props) {
    return (
        <div className={props.className}>
            <img src={logo} alt="logo" className={css(styles.Header)}/>
            <h1>School dashboard</h1>
        </div>
    )
}

const styles = StyleSheet.create({
    Header: {
        width: "200px",
        height: "200px",
    }
})
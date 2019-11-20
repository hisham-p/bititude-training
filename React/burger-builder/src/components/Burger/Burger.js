import React from 'react';
import classes from './Burger.module.css'
import Burgeringrediant from './Burgeringrediant/Burgeringrediant'

const burger = (props) => {
    let transformaingrediants = Object
        .keys(props.ingrediants)
        .map(igkey => {
            return [...Array(props.ingrediants[igkey])].map((_, i) => {
                return <Burgeringrediant key={igkey + i} type={igkey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformaingrediants.length === 0) {
        transformaingrediants = <p>Please start adding some ingrediants!!</p>
    }
    return (
        <div className={classes.Burger}>
            <Burgeringrediant type="bread-top"/> {transformaingrediants}
            <Burgeringrediant type="bread-bottom"/>
        </div>
    );
}

export default burger;
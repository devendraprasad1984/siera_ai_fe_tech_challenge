import React from 'react'

const Logger = (Component: React.FC) => {
    const otherProps = {}
    console.log('logging to console or server', Component.name, Component.prototype)
    return (props: any) => <Component {...otherProps} {...props}/>
}
export default Logger
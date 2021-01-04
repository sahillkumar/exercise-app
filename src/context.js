import React from 'react';

export const {Provider, Consumer} = React.createContext();

export const withContext = Component=>
    props=>(<Consumer>
        {
            value=><Component {...value} {...props} />
        }
    </Consumer>)

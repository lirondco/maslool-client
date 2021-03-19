import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'

export default function AdminOnlyRoute({ component, ...props }) {
    const Component = component
    return (
        <Route 
            {...props}
            render={componentProps => (
                <UserContext.Consumer>
                    {userContext =>
                        !!userContext.user.admin
                        ? <Component {...componentProps} />
                        : (
                            <Redirect
                                to={{
                                    pathname: userContext.user.idle ? '/login' : '/trails',
                                    state: { from: componentProps.location },
                                }}
                            />
                        )
                    }
                </UserContext.Consumer>
            )}
        />
    )
}
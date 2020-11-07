import React from 'react'

export const AuthPage = () => {
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Learning Node/React</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Auth</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Type your email "
                                       id="email"
                                       type="email"
                                       name="email"
                                       className="validate yellow-input"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Type your password "
                                       id="password"
                                       type="password"
                                       name="password"
                                       className="validate yellow-input"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4"
                                style={{marginRight: 10}}>
                            Login
                        </button>
                        <button className="btn grey lighten-1 black-text">
                            Register
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
import React, {useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

export const AuthPage = () => {
    const message = useMessage()
    const {loading, error, request,clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: '', name: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message,clearError])
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message )

        } catch (e) {
        }
    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            message(data.message )
        } catch (e) {
        }
    }

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
                                       onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Type your password "
                                       id="password"
                                       type="password"
                                       name="password"
                                       className="validate yellow-input"
                                       onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Type your password "
                                       id="name"
                                       type="text"
                                       name="name"
                                       className="validate yellow-input"
                                       onChange={changeHandler}
                                />
                                <label htmlFor="name">Username</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{marginRight: 10}}
                            disabled={loading}
                            onClick={loginHandler}
                        >
                            Login
                        </button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Register
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
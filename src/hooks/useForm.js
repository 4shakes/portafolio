import React, { useState } from 'react'

const useForm = (initialState) => {
    const [state, setState] = useState(initialState)

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const reset = () => {
        setState(initialState)
    }

    const resetCustom = (reset) => {
        setState(reset ? reset : initialState)
    }

    return { ...state, onChange, reset, resetCustom }
}

export default useForm

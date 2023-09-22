import axios from "axios";
import {getApiLink} from "../hooks/getApiLink";

export const handleRegistration = (
    e,
    setIsLoading,
    firstName,
    secondName,
    email,
    phone,
    password,
    confirmPassword,
    setSuccess,
    setError,
    setFirstName,
    setSecondName,
    setEmail,
    setPhone,
    setPassword,
    setConfirmPassword,
    navigate,
) => {
    e.preventDefault()
    setIsLoading(true)

    axios.post(getApiLink('v1/public/auth/signup'), {
        firstName,
        secondName,
        email,
        phone,
        password,
        confirmPassword,
    }).then((res) => {
        setIsLoading(false)


        if (res.status === 200) {
            setSuccess('You have been registered. Wait for redirecting')
            setError('')

            setFirstName('')
            setSecondName('')
            setEmail('')
            setPhone('')
            setPassword('')
            setConfirmPassword('')

            setTimeout(() => {
                navigate('/auth')
            }, 2000)
        }
    }).catch(er => {
        setIsLoading(false)
        setError(er.response.data.message)
    })
}
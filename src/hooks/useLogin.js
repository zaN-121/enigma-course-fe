import {useState} from "react";

const useLogin = (mutation, opts) => {
    const [data, setData] = useState("")
    const [reload, setReload] = useState(false)
    const [error, setError] = useState(false)

    const onLogin = async (payload) => {
        try {
            setReload(true)
            const {data: response} = await mutation(payload)
            console.log(response)
            // setData(response.data)
            opts?.onSuccess?.(response)
        } catch (e) {
            setError(true)

            opts?.onError?.(e)
        } finally {
            setReload(false)
        }
    }

    return {
        data, loading: reload, onLogin, error
    }
}

export default useLogin
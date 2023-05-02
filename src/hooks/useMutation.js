import {useState} from "react";

const useMutation = (mutation, opts) => {
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)
    const [error, setError] = useState(false)

    const onMutation = async (payload) => {
        try {
            setReload(true)
            const response = await mutation(payload)
            setData(response.data)
            opts?.onSuccess?.()
        } catch (e) {
            setError(true)

            opts?.onError?.(e)
        } finally {
            setReload(false)
        }
    }

    return {
        data, loading: reload, onMutation, error
    }
}

export default useMutation
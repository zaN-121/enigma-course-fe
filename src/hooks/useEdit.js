import {useState} from "react";

const useEdit = (mutation, opts) => {
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)
    const [error, setError] = useState(false)

    const onEdit = async (payload, id) => {
        try {
            setReload(true)
            const response = await mutation(payload, id)
            setData(response.data)

            opts?.onSuccess?.()
        } catch (e) {
            setError(true)

            opts?.onError?.()
        } finally {
            setReload(false)
        }
    }

    return {
        data, loading: reload, onEdit, error
    }
}

export default useEdit
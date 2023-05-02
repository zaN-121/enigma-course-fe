import {useState} from "react";

const useDelete = (del, opts, ) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const onDelete = async (id) => {
        try {
            setLoading(true)
            const response = await del(id)
            console.log(response)

            opts?.onSuccess?.()
        } catch (e) {
            setError(true)
            opts?.onError?.(e)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading, error, onDelete
    }
}

export default useDelete;
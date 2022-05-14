import { useState } from 'react'

const useForm = () => {
    const [value, setValue] = useState("");

    function onChange(event) {
        setValue(event.target.value)
    }

    return {
        value,
        onChange
    }
}

export default useForm
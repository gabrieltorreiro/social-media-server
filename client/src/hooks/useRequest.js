import { useState } from 'react'
import axios from '../services/axios';

const useRequest = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = async (data) => {
        try {
            setLoading(true);
            const { url, options } = data;
            const response = await axios(url, options);
            return response.data;
        } catch (err) {
            setError(err.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    return {
        error,
        loading,
        request
    }
}

export default useRequest
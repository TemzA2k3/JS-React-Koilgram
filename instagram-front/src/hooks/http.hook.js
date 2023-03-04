import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json', 'Origin': 'http://localhost:3000' }) => {

        setLoading(true);

        try {
            const response = await fetch(url, { method, body, headers });
    
                if (!response.ok) {
                    const errRes = await response.json();            
                    throw new Error(errRes.details[0]);
                }
    
                const data = await response.json();
    
                setLoading(false);
                return data;

        } catch (e) {
            setLoading(false);
            setError(e.message);
            console.log(e.message)
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return { loading, request, error, clearError }
}
// errRes.details[0]
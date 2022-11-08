import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        
        setLoading(true);

        try { //пытаемся сделать запрос на сервер
            const response = await fetch (url, {method, body, headers});

            if (!response.ok) {
                throw new Error (`Could not fetch ${url}, status ${response.status}`);
            }

            const data = await response.json(); //await ждет ответа от responce

            setLoading(false); //загрузка завершилась
            return data; 
        } catch(e) {
            setLoading(false); //загрузка завершилась ошибкой
            setError(e.message);
            throw(e) //выкидываем ошибку
        }
    }, [])

    const clearError = useCallback(() => setError(null), []) // чтобы кнопка try it работала после ошибки в randomChar - меняем state снова на null

    return {loading, error, request, clearError};
}



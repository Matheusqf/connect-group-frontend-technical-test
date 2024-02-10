import { useState, useEffect } from 'react';
import getData from '../api';

export default function useData() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        const fetchVehicles = async () => {
            try {
                const response = await getData({ signal });
                setVehicles(response);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();

        return () => {
            controller.abort();
        };
    }, []);

    return [loading, error, vehicles];
}

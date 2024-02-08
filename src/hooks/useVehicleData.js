import { useState, useEffect } from 'react';
import getData from '../api';

export default function useData() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let isCancelled = false;

        const fetchVehicles = async () => {
            try {
                const response = await getData();
                if (!isCancelled) {
                    setVehicles(response);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(err.message);
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        fetchVehicles();

        return () => {
            isCancelled = true;
        };
    }, []);

    return [loading, error, vehicles];
}
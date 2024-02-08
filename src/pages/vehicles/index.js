import React from 'react';
import VehicleList from '../../components/vehicle-list';
import './style.module.scss';
import useData from '../../hooks/useVehicleData';

export default function VehiclesPage() {
    const [loading, error, vehicles] = useData();
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [currentVehicleDetails, setCurrentVehicleDetails] = React.useState(null);

    return (
        <div className="vehicles-page">
            <h1>Vehicles</h1>
            <VehicleList
                vehicles={vehicles}
                loading={loading}
                error={error}
                isDialogOpen={isDialogOpen}
                currentVehicleDetails={currentVehicleDetails}
                setIsDialogOpen={setIsDialogOpen}
                setCurrentVehicleDetails={setCurrentVehicleDetails}
            />
        </div>
    );
}

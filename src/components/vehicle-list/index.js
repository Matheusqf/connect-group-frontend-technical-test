import React from 'react';
import styles from './style.module.scss';
import VehicleCard from '../ui/card';
import VehicleCardDetailsDialog from '../vehicle-details-dialog';
import Skeleton from '../ui/skeleton';

const VehicleList = React.memo(function VehicleList(props) {
  const {
    vehicles,
    loading,
    error,
    isDialogOpen,
    currentVehicleDetails,
    setIsDialogOpen,
    setCurrentVehicleDetails,
  } = props;

  if (loading) {
    return <div data-testid="loading" className={styles['vehicle-list__loading']}>
      {Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} />)}
    </div>;
  }

  if (error) {
    return <div data-testid="error" className={styles['vehicle-list__error']}>{error}</div>;
  }

  return (
    <div data-testid="results" className={styles['vehicle-list']}>
      {vehicles.length > 0 ? (
        vehicles.map(vehicle => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            loading={loading}
            onClick={() => {
              setCurrentVehicleDetails(vehicle);
              setIsDialogOpen(true);
            }}
          />
        ))
      ) : (
        <div className={styles['vehicle-list__no-results']}>No vehicles found.</div>
      )}
      {currentVehicleDetails && (
        <VehicleCardDetailsDialog
          isOpen={isDialogOpen}
          onClose={() => {
            setCurrentVehicleDetails(null);
            setIsDialogOpen(false);
          }}
          details={currentVehicleDetails}
        />
      )}
    </div>
  );
});

export default VehicleList;
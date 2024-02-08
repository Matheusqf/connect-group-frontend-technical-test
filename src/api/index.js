import { request } from './helpers';

const VEHICLES_URL = '/api/vehicles.json';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData() {
  let initialData = [];
  try {
    initialData = await request(VEHICLES_URL);
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }

  const getDetails = initialData.map(async (vehicle) => {
    // Skip if no apiUrl
    if (!vehicle.apiUrl) {
      return null;
    }

    // Use the Promise.allSettled method instead of the try/catch block
    return Promise.allSettled([
      // Get the vehicle details
      request(vehicle.apiUrl),
      // Resolve the vehicle object
      Promise.resolve(vehicle),
    ]).then(([detailsResult, vehicleResult]) => {
      // Check the status of the detailsResult
      if (detailsResult.status === 'rejected') {
        // Ignore the rejected promise
        return null;
      }

      // Destructure the value of the detailsResult and the vehicleResult
      const { value: vehicleDetails } = detailsResult;
      const { value: vehicle } = vehicleResult;

      if (!vehicleDetails || !vehicleDetails.price) {
        return null;
      }

      return {
        ...vehicle,
        ...vehicleDetails,
      };
    });
  });

  try {
    const detailedVehicles = await Promise.all(getDetails);
    return detailedVehicles.filter(vehicle => vehicle !== null);
  } catch (error) {
    return [];
  }
}

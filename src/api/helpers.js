/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} $ {response.statusText}`
      );
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching content: ", err);
    throw err;
  }
}

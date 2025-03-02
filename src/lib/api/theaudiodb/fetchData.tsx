const BASE_URL = "https://www.theaudiodb.com/api/v1/json/2";

export async function fetchData<T>(endpoint: string): Promise<T | null> {
    const url = `${BASE_URL}/${endpoint}`;
    console.log("Fetching:", url);

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error fetching ${endpoint} - Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return null;
    }
}

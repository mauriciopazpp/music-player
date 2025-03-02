const BASE_URL = "https://www.theaudiodb.com/api/v1/json/2";

export async function fetchData<T>(endpoint: string): Promise<T | null> {
    const url = `${BASE_URL}/${endpoint}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 204) {
                return null;
            }
            throw new Error(`Error fetching ${endpoint} - Status: ${response.status}`);
        }

        const text = await response.text();

        if (!text.trim()) {
            return null;
        }

        try {
            const data: T = JSON.parse(text);
            return data;
        } catch (jsonError) {
            console.error(`Error parsing JSON for ${endpoint}:`, jsonError, "Response Text:", text);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return null;
    }
}

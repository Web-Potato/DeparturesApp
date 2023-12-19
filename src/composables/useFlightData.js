import { ref } from "vue";
import axios from "axios";

export default function useFlightData() {
    const allDepartures = ref([]);
    const loading = ref(false);
    const error = ref(null);
    
    const fetchData = async() => {
            try {
                loading.value = true;

                // const res = await axios.get("https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata");
                const res = await axios.get("https://b4a042cf-25ec-4e21-abb8-a67f5191582c.mock.pstmn.io/departures"); //postman test api
                allDepartures.value = res.data.allDepartures;
                // console.log(res.data)

                allDepartures.value = res.data.allDepartures.map(flight => ({
                    ...flight,
                    borderColor: getBorderColor(flight.status)
                }));
            } catch (e) {
                error.value = e;
            } finally {
                loading.value = false;
            }
    };

    // Function to determine the border color based on status
    const getBorderColor = (status) => {
        if (status.includes("Departed")) {
            return "#d67b27";
        } else if (status.includes("Go to Gate")) {
            return "#3677f5";
        } else if (status.includes("Wait in Lounge")) {
            return "#1ea945";
        } else if (status.includes("Final Call")) {
            return "#ea1e1e";
        } else if (status.includes("Scheduled") || status.includes("Departing at")) {
            return "#f5d836";
        } else {
            return "#cecaca";
        }
    };

    // allDepartures.value = res.data.allDepartures.map(flight => ({
    //     ...flight,
    //     borderColor: getBorderColor(flight.status)
    // }));

    return {
        allDepartures,
        loading,
        error,
        fetchData
    };

}
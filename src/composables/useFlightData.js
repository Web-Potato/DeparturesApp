import { ref } from "vue";
import axios from "axios";

//Function to get data from API
export default function useFlightData() {
    const allDepartures = ref([]);
    const loading = ref(false);
    const error = ref(null);
    
    const fetchData = async() => {
        return new Promise(async (resolve, reject) => {
            try {
                loading.value = true;

                const res = await axios.get("https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata"); // api from task
                // const res = await axios.get("https://b4a042cf-25ec-4e21-abb8-a67f5191582c.mock.pstmn.io/departures"); //postman test api
                allDepartures.value = res.data.allDepartures;
                console.log(res.data)

                allDepartures.value = res.data.allDepartures.map(flight => ({
                    ...flight,
                    //change colours of border on status
                    borderColor: getBorderColor(flight.status)
                }));
                resolve();
            } catch (e) {
                console.log("Error fetching data:", e);
                error.value = e;
                reject(e);
            } finally {
                loading.value = false;
            }
        });
    };

    // Function to determine the border colour based on allDepartures.status
    const getBorderColor = (status) => {
        if (status.includes("Departed")) {
            return "#D67B27";
        } else if (status.includes("Go to Gate")) {
            return "#3677F5";
        } else if (status.includes("Wait in Lounge")) {
            return "#1EA945";
        } else if (status.includes("Final Call")) {
            return "#EA1E1E";
        } else if (status.includes("Cancelled")) {
            return "#CECACA";
        } else if (status.includes("Scheduled") || status.includes("Departing at")) {
            return "#F5D836";
        } else if (status.includes("Delayed") || status.includes("Diverted")) {
            return "#5F0F40";
        } else {
            return "#52D3D8";
        }
    };
    //for updating status by user through form 
    const updateFlightStatus = (flightNumber, newStatus) => {
        console.log('Updating status for:', flightNumber, 'to', newStatus);
        const flightIndex = allDepartures.value.findIndex(flight => flight.flightNumber === flightNumber);
        if (flightIndex !== -1) {
          allDepartures.value[flightIndex].status = newStatus;
          allDepartures.value[flightIndex].borderColor = getBorderColor(newStatus);
          console.log('Updated flight:', allDepartures.value[flightIndex]);
        } else {
          // for when flight is not found
          console.error('Flight not found');
        }
      };

    return {
        allDepartures,
        loading,
        error,
        fetchData,
        updateFlightStatus
    };

}
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

    //object containing border colours for various statuses
    const statusBorderColour = {
        "Departed": "#D67B27",
        "Go to Gate": "#3677F5",
        "Wait in Lounge": "#1EA945",
        "Final Call": "#EA1E1E",
        "Cancelled": "#CECACA",
        "Scheduled": "#F5D836",
        "Departing at": "#F5D836",
        "Delayed": "#5F0F40",
        "Diverted": "#5F0F40"
    };

    // Function to determine the border colour based on allDepartures.status
    const getBorderColor = (status) => {
        for (let key in statusBorderColour) {
            if (status.includes(key)) {
                return statusBorderColour[key];
            }
        }
        return "#52D3D8";
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
import axios from 'axios'

const DATE_API_URL = 'http://localhost:8080/dates'

class DateDataService {

    retrieveAllDates() {
        return axios.get(DATE_API_URL)
    }
}

export default new DateDataService()
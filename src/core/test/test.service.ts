import axios from "axios";

export class TestService {
    async getTestData() {
        try {
            const { data } = await axios.get('https://api.github.com/users/jserv/repos');
            return data; 
        } catch (err) {
            console.error(err);
        }
    }
};
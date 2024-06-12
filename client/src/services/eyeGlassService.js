import axios from "axios";

export const useEyeGlassService = () => {
    const baseUrl = process.env.REACT_APP_API_URL;

    const fetchAllEyeGlass = async () => {
        return axios.get(`${baseUrl}/api/EyeGlass`)
            .then(response => {
                if (response.data) {
                    return response.data;
                } else {
                    console.log('No item found in response');
                    return null;
                }
            })
            .catch(error => {
                console.log(error);
                return null;
            });
    };

    const fetchEyeGlassById = async (id) => {
        return axios.get(`${baseUrl}/api/EyeGlass/${id}`)
            .then(response => {
                if (response.data) {
                    return response.data;
                } else {
                    console.log('No item found in response');
                    return null;
                }
            })
            .catch(error => {
                console.log(error);
                return null;
            });
    };

    const fetchAllEyeGlassTypes = async () => {
        return axios.get(`${baseUrl}/api/EyeGlassType`)
            .then(response => {
                if (response.data) {
                    return response.data;
                } else {
                    console.log('No item found in response');
                    return null;
                }
            })
            .catch(error => {
                console.log(error);
                return null;
            });
    };

    const fetchLensType = async () => {
        return axios.get(`${baseUrl}/api/LensType`)
            .then(response => {
                if (response.data) {
                    return response.data;
                } else {
                    console.log('No item found in response');
                    return null;
                }
            })
            .catch(error => {
                console.log(error);
                return null;
            });
    };

    const getAllLens = async () => {
        return axios.get(`${baseUrl}/api/Lens`)
            .then(response => {
                if (response.data) {
                    return response.data;
                } else {
                    console.log('No item found in response');
                    return null;
                }
            })
            .catch(error => {
                console.log(error);
                return null;
            });
    };

    return { fetchAllEyeGlass, fetchEyeGlassById, fetchAllEyeGlassTypes, fetchLensType, getAllLens };
};

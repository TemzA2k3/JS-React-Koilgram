import { useHttp } from "../hooks/http.hook";

const useRegistrationlogInService = () => {

	const { loading, request, error, clearError } = useHttp();

    // const _apiRegistrationBase = "http://localhost:8080/koilgram"

    const userRegistration = async (userData) => {
        const res = await request(`http://localhost:8080/koilgram/register`, 'POST', userData)
        console.log(res)
        return res.message
    }
	
	return {
		loading,
		error,
		clearError,
        userRegistration
	};
};


export default useRegistrationlogInService;
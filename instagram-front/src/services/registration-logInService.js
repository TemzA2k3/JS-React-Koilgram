import { useHttp } from "../hooks/http.hook";

const useRegistrationlogInService = () => {

	const { loading, request, error, clearError } = useHttp();

    const _apiRegistrationBase = "http://localhost:8080/koilgram"

    const userRegistration = async (userData) => {
        const res = await request(`${_apiRegistrationBase}/register`, 'POST', userData)
        return res
    }
	
	return {
		loading,
		error,
		clearError,
        userRegistration
	};
};


export default useRegistrationlogInService;
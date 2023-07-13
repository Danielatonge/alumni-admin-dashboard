import sendRequest from './sendRequest';

const BASE_USER_PATH = '/api/v1/user';

export const loginRegularUser = async ({ email, password }) => {

    const formData = new FormData()
    formData.append('username', email)
    formData.append('password', password)
    // { 'username': email, 'password': password };
    const options = {
        headers: {
            "accept": "application/json",
            'Remove-Content-Type': true,
        },
        body: formData
    }
    console.log(options);
    const userToken = await sendRequest(
        `${BASE_USER_PATH}/login`,
        options,
    );
    console.log(userToken)
    return userToken;
};


export const registerRegularUser = async ({ email, password, confirm_password }, options = {}) => {
    const registrationFeedback = await sendRequest(
        `${BASE_USER_PATH}/register`, { email, password, confirm_password },
        { ...options },
    );
    return registrationFeedback;
};


export const loginWithInnoSSO = async (options = {}) => {
    const redirectURL = await sendRequest(
        `${BASE_USER_PATH}/login_sso`,
        { method: 'GET', ...options },
    );
    return redirectURL;
};


const BASE_PASS_PATH = '/api/v1/request_pass';

const BASE_ELECTIVE_PATH = '/api/v1/elective_course';
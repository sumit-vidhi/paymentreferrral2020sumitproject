/**
 * @name appApiUrl
 * @description
 * This is config file, it include the api urls of the application
 * Define Settings the object way(based on requirement):
 * @example
 * {paramsName}:{value}
 * @constant appApiUrl
 * @type {CommonBase}
 */
import { CommonBase } from '@core/interfaces/common-base';
export const appApiUrl: CommonBase = {
    auth: {
        login: 'user/login',
        register: 'user/register',
        emailVerification: 'user/emailVerification',
        forgotPassword: 'user/forgotPassword',
        emailCheck: 'user/emailValidation',
        confirmToken: 'user/confirmToken',
        resetPassword: 'user/resetPassword',
        getRefferal: 'user/getRefferal',
        editProfile: 'user/updateProfile',
        getdata: 'user/getProfile',
        getdashboradData: 'user/getdashboradData',
        getSponserReferralData: 'user/getSponserReferralData',
        getReferralData: 'user/getReferralData',
        updatePassword: 'user/updatePassword',
        buyPlugin: 'user/buyplugin'
    },
    blog: {
        getBlog: 'user/getBlog'
    }
};

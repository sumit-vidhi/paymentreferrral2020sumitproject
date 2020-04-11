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
        buyPlugin: 'user/buyplugin',
        getSupportReply: 'user/getSupportReply',
        saveSupportTicket: 'user/saveSupportTicket',
        saveSupport: 'user/saveSupport',
        getReply: 'user/getReply',
        saveReply: 'user/saveReply',
        addUrl: 'user/addUrl',
        imageUpload: 'user/imageUpload',
        getWalletData: 'user/getWalletData',
        getWalletCredit: 'user/getWalletCredit',
        addWalletCredit: 'user/addWalletCredit',
        addCash: 'user/addCash',
        resendEmail: 'user/resendEmail'
    },
    blog: {
        getBlog: 'user/getBlog',
        getUrl: 'user/getUrl',
        getBlogById: 'user/getBlogById',
        getBlogPage: 'user/getBlogPage'
    }
};

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
        login: 'login',
		register:'user/register'
    }
};
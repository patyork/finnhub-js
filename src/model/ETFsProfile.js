/**
 * Finnhub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ETFProfileData from './ETFProfileData';

/**
 * The ETFsProfile model module.
 * @module model/ETFsProfile
 * @version 1.2.2
 */
class ETFsProfile {
    /**
     * Constructs a new <code>ETFsProfile</code>.
     * @alias module:model/ETFsProfile
     */
    constructor() { 
        
        ETFsProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ETFsProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFsProfile} obj Optional instance to populate.
     * @return {module:model/ETFsProfile} The populated <code>ETFsProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ETFsProfile();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = ETFProfileData.constructFromObject(data['profile']);
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} symbol
 */
ETFsProfile.prototype['symbol'] = undefined;

/**
 * @member {module:model/ETFProfileData} profile
 */
ETFsProfile.prototype['profile'] = undefined;






export default ETFsProfile;

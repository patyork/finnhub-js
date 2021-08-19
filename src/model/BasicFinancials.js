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

/**
 * The BasicFinancials model module.
 * @module model/BasicFinancials
 * @version 1.2.6
 */
class BasicFinancials {
    /**
     * Constructs a new <code>BasicFinancials</code>.
     * @alias module:model/BasicFinancials
     */
    constructor() { 
        
        BasicFinancials.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicFinancials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicFinancials} obj Optional instance to populate.
     * @return {module:model/BasicFinancials} The populated <code>BasicFinancials</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicFinancials();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('metricType')) {
                obj['metricType'] = ApiClient.convertToType(data['metricType'], 'String');
            }
            if (data.hasOwnProperty('series')) {
                obj['series'] = ApiClient.convertToType(data['series'], Object);
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = ApiClient.convertToType(data['metric'], Object);
            }
        }
        return obj;
    }


}

/**
 * Symbol of the company.
 * @member {String} symbol
 */
BasicFinancials.prototype['symbol'] = undefined;

/**
 * Metric type.
 * @member {String} metricType
 */
BasicFinancials.prototype['metricType'] = undefined;

/**
 * @member {Object} series
 */
BasicFinancials.prototype['series'] = undefined;

/**
 * @member {Object} metric
 */
BasicFinancials.prototype['metric'] = undefined;






export default BasicFinancials;


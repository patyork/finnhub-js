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
 * The KeyCustomersSuppliers model module.
 * @module model/KeyCustomersSuppliers
 * @version 1.2.2
 */
class KeyCustomersSuppliers {
    /**
     * Constructs a new <code>KeyCustomersSuppliers</code>.
     * @alias module:model/KeyCustomersSuppliers
     */
    constructor() { 
        
        KeyCustomersSuppliers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KeyCustomersSuppliers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyCustomersSuppliers} obj Optional instance to populate.
     * @return {module:model/KeyCustomersSuppliers} The populated <code>KeyCustomersSuppliers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyCustomersSuppliers();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], 'Boolean');
            }
            if (data.hasOwnProperty('supplier')) {
                obj['supplier'] = ApiClient.convertToType(data['supplier'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Symbol
 * @member {String} symbol
 */
KeyCustomersSuppliers.prototype['symbol'] = undefined;

/**
 * Name
 * @member {String} name
 */
KeyCustomersSuppliers.prototype['name'] = undefined;

/**
 * Whether the company is a customer.
 * @member {Boolean} customer
 */
KeyCustomersSuppliers.prototype['customer'] = undefined;

/**
 * Whether the company is a supplier
 * @member {Boolean} supplier
 */
KeyCustomersSuppliers.prototype['supplier'] = undefined;






export default KeyCustomersSuppliers;

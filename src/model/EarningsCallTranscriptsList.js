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
 * The EarningsCallTranscriptsList model module.
 * @module model/EarningsCallTranscriptsList
 * @version 1.1.0
 */
class EarningsCallTranscriptsList {
    /**
     * Constructs a new <code>EarningsCallTranscriptsList</code>.
     * @alias module:model/EarningsCallTranscriptsList
     */
    constructor() { 
        
        EarningsCallTranscriptsList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EarningsCallTranscriptsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningsCallTranscriptsList} obj Optional instance to populate.
     * @return {module:model/EarningsCallTranscriptsList} The populated <code>EarningsCallTranscriptsList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EarningsCallTranscriptsList();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('transcripts')) {
                obj['transcripts'] = ApiClient.convertToType(data['transcripts'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Company symbol.
 * @member {String} symbol
 */
EarningsCallTranscriptsList.prototype['symbol'] = undefined;

/**
 * Array of transcripts' metadata
 * @member {Array.<Object>} transcripts
 */
EarningsCallTranscriptsList.prototype['transcripts'] = undefined;






export default EarningsCallTranscriptsList;


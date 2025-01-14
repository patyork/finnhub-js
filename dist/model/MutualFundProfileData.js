"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MutualFundProfileData model module.
 * @module model/MutualFundProfileData
 * @version 1.2.7
 */
var MutualFundProfileData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MutualFundProfileData</code>.
   * @alias module:model/MutualFundProfileData
   */
  function MutualFundProfileData() {
    _classCallCheck(this, MutualFundProfileData);

    MutualFundProfileData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MutualFundProfileData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MutualFundProfileData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundProfileData} obj Optional instance to populate.
     * @return {module:model/MutualFundProfileData} The populated <code>MutualFundProfileData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MutualFundProfileData();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('investmentSegment')) {
          obj['investmentSegment'] = _ApiClient["default"].convertToType(data['investmentSegment'], 'String');
        }

        if (data.hasOwnProperty('totalNav')) {
          obj['totalNav'] = _ApiClient["default"].convertToType(data['totalNav'], 'Number');
        }

        if (data.hasOwnProperty('expenseRatio')) {
          obj['expenseRatio'] = _ApiClient["default"].convertToType(data['expenseRatio'], 'Number');
        }

        if (data.hasOwnProperty('benchmark')) {
          obj['benchmark'] = _ApiClient["default"].convertToType(data['benchmark'], 'String');
        }

        if (data.hasOwnProperty('inceptionDate')) {
          obj['inceptionDate'] = _ApiClient["default"].convertToType(data['inceptionDate'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('fundFamily')) {
          obj['fundFamily'] = _ApiClient["default"].convertToType(data['fundFamily'], 'String');
        }

        if (data.hasOwnProperty('manager')) {
          obj['manager'] = _ApiClient["default"].convertToType(data['manager'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('beta')) {
          obj['beta'] = _ApiClient["default"].convertToType(data['beta'], 'Number');
        }

        if (data.hasOwnProperty('deferredLoad')) {
          obj['deferredLoad'] = _ApiClient["default"].convertToType(data['deferredLoad'], 'Number');
        }

        if (data.hasOwnProperty('fee12b1')) {
          obj['fee12b1'] = _ApiClient["default"].convertToType(data['fee12b1'], 'Number');
        }

        if (data.hasOwnProperty('frontLoad')) {
          obj['frontLoad'] = _ApiClient["default"].convertToType(data['frontLoad'], 'Number');
        }

        if (data.hasOwnProperty('iraMinInvestment')) {
          obj['iraMinInvestment'] = _ApiClient["default"].convertToType(data['iraMinInvestment'], 'Number');
        }

        if (data.hasOwnProperty('isin')) {
          obj['isin'] = _ApiClient["default"].convertToType(data['isin'], 'String');
        }

        if (data.hasOwnProperty('cusip')) {
          obj['cusip'] = _ApiClient["default"].convertToType(data['cusip'], 'String');
        }

        if (data.hasOwnProperty('maxRedemptionFee')) {
          obj['maxRedemptionFee'] = _ApiClient["default"].convertToType(data['maxRedemptionFee'], 'Number');
        }

        if (data.hasOwnProperty('standardMinInvestment')) {
          obj['standardMinInvestment'] = _ApiClient["default"].convertToType(data['standardMinInvestment'], 'Number');
        }

        if (data.hasOwnProperty('turnover')) {
          obj['turnover'] = _ApiClient["default"].convertToType(data['turnover'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return MutualFundProfileData;
}();
/**
 * Name
 * @member {String} name
 */


MutualFundProfileData.prototype['name'] = undefined;
/**
 * Fund's category.
 * @member {String} category
 */

MutualFundProfileData.prototype['category'] = undefined;
/**
 * Investment Segment.
 * @member {String} investmentSegment
 */

MutualFundProfileData.prototype['investmentSegment'] = undefined;
/**
 * NAV.
 * @member {Number} totalNav
 */

MutualFundProfileData.prototype['totalNav'] = undefined;
/**
 * Expense ratio.
 * @member {Number} expenseRatio
 */

MutualFundProfileData.prototype['expenseRatio'] = undefined;
/**
 * Index benchmark.
 * @member {String} benchmark
 */

MutualFundProfileData.prototype['benchmark'] = undefined;
/**
 * Inception date.
 * @member {Date} inceptionDate
 */

MutualFundProfileData.prototype['inceptionDate'] = undefined;
/**
 * Fund's description.
 * @member {String} description
 */

MutualFundProfileData.prototype['description'] = undefined;
/**
 * Fund Family.
 * @member {String} fundFamily
 */

MutualFundProfileData.prototype['fundFamily'] = undefined;
/**
 * Fund's managers.
 * @member {String} manager
 */

MutualFundProfileData.prototype['manager'] = undefined;
/**
 * Status.
 * @member {String} status
 */

MutualFundProfileData.prototype['status'] = undefined;
/**
 * Beta.
 * @member {Number} beta
 */

MutualFundProfileData.prototype['beta'] = undefined;
/**
 * Deferred load.
 * @member {Number} deferredLoad
 */

MutualFundProfileData.prototype['deferredLoad'] = undefined;
/**
 * 12B-1 fee.
 * @member {Number} fee12b1
 */

MutualFundProfileData.prototype['fee12b1'] = undefined;
/**
 * Front Load.
 * @member {Number} frontLoad
 */

MutualFundProfileData.prototype['frontLoad'] = undefined;
/**
 * IRA minimum investment.
 * @member {Number} iraMinInvestment
 */

MutualFundProfileData.prototype['iraMinInvestment'] = undefined;
/**
 * ISIN.
 * @member {String} isin
 */

MutualFundProfileData.prototype['isin'] = undefined;
/**
 * CUSIP.
 * @member {String} cusip
 */

MutualFundProfileData.prototype['cusip'] = undefined;
/**
 * Max redemption fee.
 * @member {Number} maxRedemptionFee
 */

MutualFundProfileData.prototype['maxRedemptionFee'] = undefined;
/**
 * Minimum investment for standard accounts.
 * @member {Number} standardMinInvestment
 */

MutualFundProfileData.prototype['standardMinInvestment'] = undefined;
/**
 * Turnover.
 * @member {Number} turnover
 */

MutualFundProfileData.prototype['turnover'] = undefined;
var _default = MutualFundProfileData;
exports["default"] = _default;
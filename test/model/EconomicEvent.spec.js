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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.finnhub);
  }
}(this, function(expect, finnhub) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new finnhub.EconomicEvent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EconomicEvent', function() {
    it('should create an instance of EconomicEvent', function() {
      // uncomment below and update the code to test EconomicEvent
      //var instane = new finnhub.EconomicEvent();
      //expect(instance).to.be.a(finnhub.EconomicEvent);
    });

    it('should have the property actual (base name: "actual")', function() {
      // uncomment below and update the code to test the property actual
      //var instane = new finnhub.EconomicEvent();
      //expect(instance).to.be();
    });

    it('should have the property prev (base name: "prev")', function() {
      // uncomment below and update the code to test the property prev
      //var instane = new finnhub.EconomicEvent();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new finnhub.EconomicEvent();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instane = new finnhub.EconomicEvent();
      //expect(instance).to.be();
    });

    it('should have the property estimate (base name: "estimate")', function() {
      // uncomment below and update the code to test the property estimate
      //var instane = new finnhub.EconomicEvent();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instane = new finnhub.EconomicEvent();
      //expect(instance).to.be();
    });

    it('should have the property impact (base name: "impact")', function() {
      // uncomment below and update the code to test the property impact
      //var instane = new finnhub.EconomicEvent();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new finnhub.EconomicEvent();
      //expect(instance).to.be();
    });

  });

}));
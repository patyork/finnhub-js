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
    instance = new finnhub.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('aggregateIndicator', function() {
      it('should call aggregateIndicator successfully', function(done) {
        //uncomment below and update the code to test aggregateIndicator
        //instance.aggregateIndicator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyBasicFinancials', function() {
      it('should call companyBasicFinancials successfully', function(done) {
        //uncomment below and update the code to test companyBasicFinancials
        //instance.companyBasicFinancials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyEarnings', function() {
      it('should call companyEarnings successfully', function(done) {
        //uncomment below and update the code to test companyEarnings
        //instance.companyEarnings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyEpsEstimates', function() {
      it('should call companyEpsEstimates successfully', function(done) {
        //uncomment below and update the code to test companyEpsEstimates
        //instance.companyEpsEstimates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyExecutive', function() {
      it('should call companyExecutive successfully', function(done) {
        //uncomment below and update the code to test companyExecutive
        //instance.companyExecutive(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyNews', function() {
      it('should call companyNews successfully', function(done) {
        //uncomment below and update the code to test companyNews
        //instance.companyNews(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyPeers', function() {
      it('should call companyPeers successfully', function(done) {
        //uncomment below and update the code to test companyPeers
        //instance.companyPeers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyProfile', function() {
      it('should call companyProfile successfully', function(done) {
        //uncomment below and update the code to test companyProfile
        //instance.companyProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyProfile2', function() {
      it('should call companyProfile2 successfully', function(done) {
        //uncomment below and update the code to test companyProfile2
        //instance.companyProfile2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyRevenueEstimates', function() {
      it('should call companyRevenueEstimates successfully', function(done) {
        //uncomment below and update the code to test companyRevenueEstimates
        //instance.companyRevenueEstimates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('country', function() {
      it('should call country successfully', function(done) {
        //uncomment below and update the code to test country
        //instance.country(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('covid19', function() {
      it('should call covid19 successfully', function(done) {
        //uncomment below and update the code to test covid19
        //instance.covid19(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cryptoCandles', function() {
      it('should call cryptoCandles successfully', function(done) {
        //uncomment below and update the code to test cryptoCandles
        //instance.cryptoCandles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cryptoExchanges', function() {
      it('should call cryptoExchanges successfully', function(done) {
        //uncomment below and update the code to test cryptoExchanges
        //instance.cryptoExchanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cryptoSymbols', function() {
      it('should call cryptoSymbols successfully', function(done) {
        //uncomment below and update the code to test cryptoSymbols
        //instance.cryptoSymbols(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('earningsCalendar', function() {
      it('should call earningsCalendar successfully', function(done) {
        //uncomment below and update the code to test earningsCalendar
        //instance.earningsCalendar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('economicCode', function() {
      it('should call economicCode successfully', function(done) {
        //uncomment below and update the code to test economicCode
        //instance.economicCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('economicData', function() {
      it('should call economicData successfully', function(done) {
        //uncomment below and update the code to test economicData
        //instance.economicData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filings', function() {
      it('should call filings successfully', function(done) {
        //uncomment below and update the code to test filings
        //instance.filings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('financials', function() {
      it('should call financials successfully', function(done) {
        //uncomment below and update the code to test financials
        //instance.financials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('financialsReported', function() {
      it('should call financialsReported successfully', function(done) {
        //uncomment below and update the code to test financialsReported
        //instance.financialsReported(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forexCandles', function() {
      it('should call forexCandles successfully', function(done) {
        //uncomment below and update the code to test forexCandles
        //instance.forexCandles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forexExchanges', function() {
      it('should call forexExchanges successfully', function(done) {
        //uncomment below and update the code to test forexExchanges
        //instance.forexExchanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forexRates', function() {
      it('should call forexRates successfully', function(done) {
        //uncomment below and update the code to test forexRates
        //instance.forexRates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forexSymbols', function() {
      it('should call forexSymbols successfully', function(done) {
        //uncomment below and update the code to test forexSymbols
        //instance.forexSymbols(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fundOwnership', function() {
      it('should call fundOwnership successfully', function(done) {
        //uncomment below and update the code to test fundOwnership
        //instance.fundOwnership(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('generalNews', function() {
      it('should call generalNews successfully', function(done) {
        //uncomment below and update the code to test generalNews
        //instance.generalNews(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('investorsOwnership', function() {
      it('should call investorsOwnership successfully', function(done) {
        //uncomment below and update the code to test investorsOwnership
        //instance.investorsOwnership(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ipoCalendar', function() {
      it('should call ipoCalendar successfully', function(done) {
        //uncomment below and update the code to test ipoCalendar
        //instance.ipoCalendar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('majorDevelopments', function() {
      it('should call majorDevelopments successfully', function(done) {
        //uncomment below and update the code to test majorDevelopments
        //instance.majorDevelopments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newsSentiment', function() {
      it('should call newsSentiment successfully', function(done) {
        //uncomment below and update the code to test newsSentiment
        //instance.newsSentiment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patternRecognition', function() {
      it('should call patternRecognition successfully', function(done) {
        //uncomment below and update the code to test patternRecognition
        //instance.patternRecognition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('priceTarget', function() {
      it('should call priceTarget successfully', function(done) {
        //uncomment below and update the code to test priceTarget
        //instance.priceTarget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quote', function() {
      it('should call quote successfully', function(done) {
        //uncomment below and update the code to test quote
        //instance.quote(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recommendationTrends', function() {
      it('should call recommendationTrends successfully', function(done) {
        //uncomment below and update the code to test recommendationTrends
        //instance.recommendationTrends(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stockCandles', function() {
      it('should call stockCandles successfully', function(done) {
        //uncomment below and update the code to test stockCandles
        //instance.stockCandles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stockDividends', function() {
      it('should call stockDividends successfully', function(done) {
        //uncomment below and update the code to test stockDividends
        //instance.stockDividends(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stockSplits', function() {
      it('should call stockSplits successfully', function(done) {
        //uncomment below and update the code to test stockSplits
        //instance.stockSplits(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stockSymbols', function() {
      it('should call stockSymbols successfully', function(done) {
        //uncomment below and update the code to test stockSymbols
        //instance.stockSymbols(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stockTick', function() {
      it('should call stockTick successfully', function(done) {
        //uncomment below and update the code to test stockTick
        //instance.stockTick(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('supportResistance', function() {
      it('should call supportResistance successfully', function(done) {
        //uncomment below and update the code to test supportResistance
        //instance.supportResistance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('technicalIndicator', function() {
      it('should call technicalIndicator successfully', function(done) {
        //uncomment below and update the code to test technicalIndicator
        //instance.technicalIndicator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transcripts', function() {
      it('should call transcripts successfully', function(done) {
        //uncomment below and update the code to test transcripts
        //instance.transcripts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transcriptsList', function() {
      it('should call transcriptsList successfully', function(done) {
        //uncomment below and update the code to test transcriptsList
        //instance.transcriptsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('upgradeDowngrade', function() {
      it('should call upgradeDowngrade successfully', function(done) {
        //uncomment below and update the code to test upgradeDowngrade
        //instance.upgradeDowngrade(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

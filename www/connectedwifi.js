var argscheck = require('cordova/argscheck');
var channel = require('cordova/channel');
var utils = require('cordova/utils');
var exec = require('cordova/exec');
var cordova = require('cordova');

function ConnectedWifi () {
    this.SSID = null;
    this.BSSID = null;
    this.version = null;
    
    var me = this;

    channel.onCordovaReady.subscribe(function () {
        me.getWifiInfo(function (info) {
            me.SSID = info.SSID;
            me.BSSID = info.BSSID;
            me.version = info.version;
            channel.onCordovaInfoReady.fire();
        }, function (e) {
            utils.alert('[ERROR] Error initializing Cordova: ' + e);
        });
    });
}

/**
 * Get Connected Wifi info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
ConnectedWifi.prototype.getWifiInfo = function (successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'ConnectedWifi.getWifiInfo', arguments);
    exec(successCallback, errorCallback, 'ConnectedWifi', 'getConnectedWifiInfo', []);
};

module.exports = new ConnectedWifi();
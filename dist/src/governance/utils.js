Object.defineProperty(exports, "__esModule", { value: true });
exports.toPercentage = exports.decimalPlaces = void 0;
var decimalPlaces = function (numberString, decimals) {
    if (decimals === void 0) { decimals = 2; }
    var value = Number(Number.parseFloat(numberString).toFixed(decimals));
    if (isNaN(value)) {
        return '';
    }
    else {
        return value.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }
};
exports.decimalPlaces = decimalPlaces;
var toPercentage = function (decimalString) {
    var num = Number.parseFloat(decimalString) * 100;
    return exports.decimalPlaces(num.toString());
};
exports.toPercentage = toPercentage;
//# sourceMappingURL=utils.js.map
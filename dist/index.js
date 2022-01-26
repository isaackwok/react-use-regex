"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useRegex(regex, targetString) {
    const matches = (0, react_1.useMemo)(() => targetString.match(regex), [regex, targetString]);
    const isMatch = matches !== null;
    const indexOfFirstMatch = (0, react_1.useMemo)(() => (targetString.search(regex)), [regex, targetString]);
    function replace(replaceValue) {
        return (0, react_1.useCallback)(() => (targetString.replace(regex, replaceValue)), [regex, targetString, replaceValue]);
    }
    return [
        isMatch,
        matches,
        indexOfFirstMatch,
        replace,
    ];
}
exports.default = useRegex;

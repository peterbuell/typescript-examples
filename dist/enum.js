var ColorCode;
(function (ColorCode) {
    ColorCode[ColorCode["black"] = 0] = "black";
    ColorCode[ColorCode["brown"] = 1] = "brown";
    ColorCode[ColorCode["red"] = 2] = "red";
})(ColorCode || (ColorCode = {}));
const decodedValue = ([first, second]) => {
    return Number(`${ColorCode[first]}${ColorCode[second]}`);
};
export { decodedValue };
//# sourceMappingURL=enum.js.map
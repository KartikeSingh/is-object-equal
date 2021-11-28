"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An module to check if two objects are equal or not
 * @returns {true | false} true or false
 */
function isEqual(ob1, ob2, options = {}) {
    const { ignoreCase = false, allowExtra = false } = options;
    if (ob1 == null && ob2 == null)
        return true;
    else if (ob1 == null || ob2 == null)
        return false;
    if (typeof (ob1) !== "object" || typeof (ob2) !== 'object')
        throw new Error("First two paramter should be a object or array");
    let equals = true, keys = Object.keys(ob1);
    if (!allowExtra && Object.keys(ob2).length !== keys.length)
        return false;
    for (let i = 0; i < keys.length; i++) {
        let v1 = ob1[keys[i]], v2 = ob2[keys[i]];
        if (typeof (v1) !== typeof (v2)) {
            equals = false;
            break;
        }
        ;
        if (typeof (v1) === "object") {
            equals = isEqual(v1, v2, { ignoreCase, allowExtra });
            if (!equals)
                break;
        }
        else if (typeof (v1) === "string") {
            v1 = ignoreCase ? v1.toLowerCase() : v1;
            v2 = ignoreCase ? v2.toLowerCase() : v2;
            if (v1 !== v2) {
                equals = false;
                break;
            }
        }
        else {
            if (v1 !== v2) {
                equals = false;
                break;
            }
        }
    }
    return equals;
}
exports.default = isEqual;

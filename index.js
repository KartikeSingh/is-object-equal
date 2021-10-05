module.exports = function isEqual(ob1, ob2, {
    ignoreCase = false,
    allowExtra = false
}) {
    let equals = true, keys = Object.keys(ob1);

    if (!allowExtra && Object.keys(ob2).length !== keys.length);

    for (let i = 0; i < keys.length; i++) {
        let v1 = ob1[keys[i]], v2 = ob2[keys[i]];

        if (typeof (v1) !== typeof (v2)) { equals = false; break };

        if (typeof (v1) === "object") {
            equals = isEqual({ ignoreCase, allowExtra }, v1, v2);

            if (!equals) break;
        } else if (typeof (v1) === "string") {
            v1 = ignoreCase ? v1.toLowerCase() : v1;
            v2 = ignoreCase ? v2.toLowerCase() : v2;

            if (v1 !== v2) { equals = false; break }
        } else {
            if (v1 !== v2) { equals = false; break }
        }
    }

    return equals;
}
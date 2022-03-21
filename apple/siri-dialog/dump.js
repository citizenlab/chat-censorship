var locales = [];

(function () {
    for (var a = 0; a < 26; ++a) {
        var x = String.fromCharCode(0x61 + a);
        locales.push(x);
        for (var b = 0; b < 26; ++b) {
            var y = String.fromCharCode(0x61 + b);
            locales.push(x + y);
            for (var c = 0; c < 26; ++c) {
                var z = String.fromCharCode(0x61 + c);
                locales.push(x + y + z);
                var v = String.fromCharCode(0x41 + c);
                for (var d = 0; d < 26; ++d) {
                    var w = String.fromCharCode(0x41 + d);
                    locales.push(x + y + '_' + v + w);
                }
            }
        }
    }
})();

function strlen(start) {
    var addr = start;
    while (addr.readU8() != 0) {
        addr = addr.add(1);
    }
    return uint64(addr.sub(start).toString());
}

function readBasicString(addr) {
    var isLong = (addr.add(23).readU8() >>> 7) == 1;
    var str;
    if (isLong) {
        str = addr.readPointer().readUtf8String();
    } else {
        str = addr.readUtf8String();
    }
    return str;
}

function allocBasicString(str) {
    var cStr = Memory.allocUtf8String(str);
    var len = strlen(cStr);
    var isLong = len.compare(23) >= 0;
    var addr;
    if (isLong) {
        addr = Memory.alloc(len.add(24 + 1));
        addr.add(24).writeUtf8String(str);
        addr.writePointer(addr.add(24)); // ptr
        addr.add(8).writeU64(len); // size
        addr.add(16).writeU64(len.add(1)); // capacity
        addr.add(23).writeU8(addr.add(23).readU8() | 0x80); // isLong flag
    } else {
        addr = Memory.alloc(24);
        addr.writeUtf8String(str);
        addr.add(23).writeU8(len);
    }
    return addr;
}

function dump() {
    var getProfanityFilterAddress = Module.findExportByName('DialogEngine', '_ZN4siri12dialogengine18GetProfanityFilterERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE');
    var getProfanityFilter = new NativeFunction(getProfanityFilterAddress, ['pointer', 'pointer', 'pointer'], ['pointer']);
    var results = {};
    for (var i = 0; i < locales.length; ++i) {
        var locale = locales[i];
        var bs = allocBasicString(locale);
        var filterVec = getProfanityFilter(bs);
        var start = filterVec[0];
        var end = filterVec[1];
        //var endCapacity = filterVec[2];
        var result = [];
        for (var j = start; j.compare(end) < 0; j = j.add(48)) {
            var profanity = readBasicString(j);
            var replacement = readBasicString(j.add(24));
            result.push([profanity, replacement]);
        }
        if (result.length > 0) {
            results[locale] = result;
        }
    }
    return results;
}

rpc.exports = {
    dump: dump,
};


module.exports = (a, b) => ''.split.call(a,'').sort().join('') === ''.split.call(b, '').sort().join('');
//basically sorts each string, then compares them
//uses call as a cheap hack to force string conversion
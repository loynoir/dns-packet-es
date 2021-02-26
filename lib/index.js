"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name_encode = name_encode;
exports.name_decode = name_decode;
exports.name_encodingLength = name_encodingLength;
exports.string_encode = string_encode;
exports.string_decode = string_decode;
exports.string_encodingLength = string_encodingLength;
exports.header_encode = header_encode;
exports.header_decode = header_decode;
exports.header_encodingLength = header_encodingLength;
exports.runknown_encode = runknown_encode;
exports.runknown_decode = runknown_decode;
exports.runknown_encodingLength = runknown_encodingLength;
exports.rns_encode = rns_encode;
exports.rns_decode = rns_decode;
exports.rns_encodingLength = rns_encodingLength;
exports.rsoa_encode = rsoa_encode;
exports.rsoa_decode = rsoa_decode;
exports.rsoa_encodingLength = rsoa_encodingLength;
exports.rtxt_encode = rtxt_encode;
exports.rtxt_decode = rtxt_decode;
exports.rtxt_encodingLength = rtxt_encodingLength;
exports.rnull_encode = rnull_encode;
exports.rnull_decode = rnull_decode;
exports.rnull_encodingLength = rnull_encodingLength;
exports.rhinfo_encode = rhinfo_encode;
exports.rhinfo_decode = rhinfo_decode;
exports.rhinfo_encodingLength = rhinfo_encodingLength;
exports.rptr_encode = rptr_encode;
exports.rptr_decode = rptr_decode;
exports.rptr_encodingLength = rptr_encodingLength;
exports.rsrv_encode = rsrv_encode;
exports.rsrv_decode = rsrv_decode;
exports.rsrv_encodingLength = rsrv_encodingLength;
exports.rcaa_encode = rcaa_encode;
exports.rcaa_decode = rcaa_decode;
exports.rcaa_encodingLength = rcaa_encodingLength;
exports.rmx_encode = rmx_encode;
exports.rmx_decode = rmx_decode;
exports.rmx_encodingLength = rmx_encodingLength;
exports.ra_encode = ra_encode;
exports.ra_decode = ra_decode;
exports.ra_encodingLength = ra_encodingLength;
exports.raaaa_encode = raaaa_encode;
exports.raaaa_decode = raaaa_decode;
exports.raaaa_encodingLength = raaaa_encodingLength;
exports.roption_encode = roption_encode;
exports.roption_decode = roption_decode;
exports.roption_encodingLength = roption_encodingLength;
exports.ropt_encode = ropt_encode;
exports.ropt_decode = ropt_decode;
exports.ropt_encodingLength = ropt_encodingLength;
exports.rdnskey_encode = rdnskey_encode;
exports.rdnskey_decode = rdnskey_decode;
exports.rdnskey_encodingLength = rdnskey_encodingLength;
exports.rrrsig_encode = rrrsig_encode;
exports.rrrsig_decode = rrrsig_decode;
exports.rrrsig_encodingLength = rrrsig_encodingLength;
exports.rrp_encode = rrp_encode;
exports.rrp_decode = rrp_decode;
exports.rrp_encodingLength = rrp_encodingLength;
exports.typebitmap_encode = typebitmap_encode;
exports.typebitmap_decode = typebitmap_decode;
exports.typebitmap_encodingLength = typebitmap_encodingLength;
exports.rnsec_encode = rnsec_encode;
exports.rnsec_decode = rnsec_decode;
exports.rnsec_encodingLength = rnsec_encodingLength;
exports.rnsec3_encode = rnsec3_encode;
exports.rnsec3_decode = rnsec3_decode;
exports.rnsec3_encodingLength = rnsec3_encodingLength;
exports.rds_encode = rds_encode;
exports.rds_decode = rds_decode;
exports.rds_encodingLength = rds_encodingLength;
exports.answer_encode = answer_encode;
exports.answer_decode = answer_decode;
exports.answer_encodingLength = answer_encodingLength;
exports.question_encode = question_encode;
exports.question_decode = question_decode;
exports.question_encodingLength = question_encodingLength;
exports.encode = encode;
exports.decode = decode;
exports.encodingLength = encodingLength;
exports.streamEncode = streamEncode;
exports.streamDecode = streamDecode;
exports.encodingLengthList = encodingLengthList;
exports.encodeList = encodeList;
exports.decodeList = decodeList;
exports.question = exports.answer = exports.ds = exports.nsec3 = exports.nsec = exports.typebitmap = exports.rp = exports.rrsig = exports.dnskey = exports.opt = exports.option = exports.aaaa = exports.a = exports.mx = exports.caa = exports.srv = exports.dname = exports.cname = exports.ptr = exports.hinfo = exports.null = exports.txt = exports.soa = exports.ns = exports.unknown = exports.header = exports.string = exports.name = exports.DNSSEC_OK = exports.CHECKING_DISABLED = exports.AUTHENTIC_DATA = exports.RECURSION_AVAILABLE = exports.RECURSION_DESIRED = exports.TRUNCATED_RESPONSE = exports.AUTHORITATIVE_ANSWER = exports.record = exports.NOT_QU_MASK = exports.QU_MASK = exports.NOT_FLUSH_MASK = exports.FLUSH_MASK = exports.RESPONSE_FLAG = exports.QUERY_FLAG = void 0;

var _buffer = require("buffer");

var types = _interopRequireWildcard(require("./types"));

var rcodes = _interopRequireWildcard(require("./rcodes"));

var opcodes = _interopRequireWildcard(require("./opcodes"));

var classes = _interopRequireWildcard(require("./classes"));

var optioncodes = _interopRequireWildcard(require("./optioncodes"));

var _ipEs = require("ip-es");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const QUERY_FLAG = 0;
exports.QUERY_FLAG = QUERY_FLAG;
const RESPONSE_FLAG = 1 << 15;
exports.RESPONSE_FLAG = RESPONSE_FLAG;
const FLUSH_MASK = 1 << 15;
exports.FLUSH_MASK = FLUSH_MASK;
const NOT_FLUSH_MASK = ~FLUSH_MASK;
exports.NOT_FLUSH_MASK = NOT_FLUSH_MASK;
const QU_MASK = 1 << 15;
exports.QU_MASK = QU_MASK;
const NOT_QU_MASK = ~QU_MASK;
exports.NOT_QU_MASK = NOT_QU_MASK;

function name_encode(str, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(name_encodingLength(str));
  if (!offset) offset = 0;
  const oldOffset = offset; // strip leading and trailing .

  const n = str.replace(/^\.|\.$/gm, '');

  if (n.length) {
    const list = n.split('.');

    for (let i = 0; i < list.length; i++) {
      const len = buf.write(list[i], offset + 1);
      buf[offset] = len;
      offset += len + 1;
    }
  }

  buf[offset++] = 0;
  name_encode.bytes = offset - oldOffset;
  return buf;
}

name_encode.bytes = 0;

function name_decode(buf, offset) {
  if (!offset) offset = 0;
  const list = [];
  const oldOffset = offset;
  let len = buf[offset++];

  if (len === 0) {
    name_decode.bytes = 1;
    return '.';
  }

  if (len >= 0xc0) {
    const res = name_decode(buf, buf.readUInt16BE(offset - 1) - 0xc000);
    name_decode.bytes = 2;
    return res;
  }

  while (len) {
    if (len >= 0xc0) {
      list.push(name_decode(buf, buf.readUInt16BE(offset - 1) - 0xc000));
      offset++;
      break;
    }

    list.push(buf.toString('utf-8', offset, offset + len));
    offset += len;
    len = buf[offset++];
  }

  name_decode.bytes = offset - oldOffset;
  return list.join('.');
}

name_decode.bytes = 0;

function name_encodingLength(n) {
  if (n === '.') return 1;
  return _buffer.Buffer.byteLength(n) + 2;
}

function string_encode(s, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(string_encodingLength(s));
  if (!offset) offset = 0;
  const len = buf.write(s, offset + 1);
  buf[offset] = len;
  string_encode.bytes = len + 1;
  return buf;
}

string_encode.bytes = 0;

function string_decode(buf, offset) {
  if (!offset) offset = 0;
  const len = buf[offset];
  const s = buf.toString('utf-8', offset + 1, offset + 1 + len);
  string_decode.bytes = len + 1;
  return s;
}

string_decode.bytes = 0;

function string_encodingLength(s) {
  return _buffer.Buffer.byteLength(s) + 1;
}

function header_encode(h, buf, offset) {
  if (!buf) buf = header_encodingLength(h);
  if (!offset) offset = 0;
  const flags = (h.flags || 0) & 32767;
  const type = h.type === 'response' ? RESPONSE_FLAG : QUERY_FLAG;
  buf.writeUInt16BE(h.id || 0, offset);
  buf.writeUInt16BE(flags | type, offset + 2);
  buf.writeUInt16BE(h.questions.length, offset + 4);
  buf.writeUInt16BE(h.answers.length, offset + 6);
  buf.writeUInt16BE(h.authorities.length, offset + 8);
  buf.writeUInt16BE(h.additionals.length, offset + 10);
  return buf;
}

header_encode.bytes = 12;

function header_decode(buf, offset) {
  if (!offset) offset = 0;
  if (buf.length < 12) throw new Error('Header must be 12 bytes');
  const flags = buf.readUInt16BE(offset + 2);
  return {
    id: buf.readUInt16BE(offset),
    type: flags & RESPONSE_FLAG ? 'response' : 'query',
    flags: flags & 32767,
    flag_qr: (flags >> 15 & 0x1) === 1,
    opcode: opcodes.toString(flags >> 11 & 0xf),
    flag_aa: (flags >> 10 & 0x1) === 1,
    flag_tc: (flags >> 9 & 0x1) === 1,
    flag_rd: (flags >> 8 & 0x1) === 1,
    flag_ra: (flags >> 7 & 0x1) === 1,
    flag_z: (flags >> 6 & 0x1) === 1,
    flag_ad: (flags >> 5 & 0x1) === 1,
    flag_cd: (flags >> 4 & 0x1) === 1,
    rcode: rcodes.toString(flags & 0xf),
    questions: new Array(buf.readUInt16BE(offset + 4)),
    answers: new Array(buf.readUInt16BE(offset + 6)),
    authorities: new Array(buf.readUInt16BE(offset + 8)),
    additionals: new Array(buf.readUInt16BE(offset + 10))
  };
}

header_decode.bytes = 12;

function header_encodingLength(_) {
  return 12;
}

function runknown_encode(data, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(runknown_encodingLength(data));
  if (!offset) offset = 0;
  buf.writeUInt16BE(data.length, offset);
  data.copy(buf, offset + 2);
  runknown_encode.bytes = data.length + 2;
  return buf;
}

runknown_encode.bytes = 0;

function runknown_decode(buf, offset) {
  if (!offset) offset = 0;
  const len = buf.readUInt16BE(offset);
  const data = buf.slice(offset + 2, offset + 2 + len);
  runknown_decode.bytes = len + 2;
  return data;
}

runknown_decode.bytes = 0;

function runknown_encodingLength(data) {
  return data.length + 2;
}

function rns_encode(data, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rns_encodingLength(data));
  if (!offset) offset = 0;
  name_encode(data, buf, offset + 2);
  buf.writeUInt16BE(name_encode.bytes, offset);
  rns_encode.bytes = name_encode.bytes + 2;
  return buf;
}

rns_encode.bytes = 0;

function rns_decode(buf, offset) {
  if (!offset) offset = 0;
  const len = buf.readUInt16BE(offset);
  const dd = name_decode(buf, offset + 2);
  rns_decode.bytes = len + 2;
  return dd;
}

rns_decode.bytes = 0;

function rns_encodingLength(data) {
  return name_encodingLength(data) + 2;
}

function rsoa_encode(data, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rsoa_encodingLength(data));
  if (!offset) offset = 0;
  const oldOffset = offset;
  offset += 2;
  name_encode(data.mname, buf, offset);
  offset += name_encode.bytes;
  name_encode(data.rname, buf, offset);
  offset += name_encode.bytes;
  buf.writeUInt32BE(data.serial || 0, offset);
  offset += 4;
  buf.writeUInt32BE(data.refresh || 0, offset);
  offset += 4;
  buf.writeUInt32BE(data.retry || 0, offset);
  offset += 4;
  buf.writeUInt32BE(data.expire || 0, offset);
  offset += 4;
  buf.writeUInt32BE(data.minimum || 0, offset);
  offset += 4;
  buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
  rsoa_encode.bytes = offset - oldOffset;
  return buf;
}

rsoa_encode.bytes = 0;

function rsoa_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  const data = {};
  offset += 2;
  data.mname = name_decode(buf, offset);
  offset += name_decode.bytes;
  data.rname = name_decode(buf, offset);
  offset += name_decode.bytes;
  data.serial = buf.readUInt32BE(offset);
  offset += 4;
  data.refresh = buf.readUInt32BE(offset);
  offset += 4;
  data.retry = buf.readUInt32BE(offset);
  offset += 4;
  data.expire = buf.readUInt32BE(offset);
  offset += 4;
  data.minimum = buf.readUInt32BE(offset);
  offset += 4;
  rsoa_decode.bytes = offset - oldOffset;
  return data;
}

rsoa_decode.bytes = 0;

function rsoa_encodingLength(data) {
  return 22 + name_encodingLength(data.mname) + name_encodingLength(data.rname);
}

function rtxt_encode(data, buf, offset) {
  if (!Array.isArray(data)) data = [data];

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
      data[i] = _buffer.Buffer.from(data[i]);
    }

    if (!_buffer.Buffer.isBuffer(data[i])) {
      throw new Error('Must be a Buffer');
    }
  }

  if (!buf) buf = _buffer.Buffer.allocUnsafe(rtxt_encodingLength(data));
  if (!offset) offset = 0;
  const oldOffset = offset;
  offset += 2;
  data.forEach(function (d) {
    buf[offset++] = d.length;
    d.copy(buf, offset, 0, d.length);
    offset += d.length;
  });
  buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
  rtxt_encode.bytes = offset - oldOffset;
  return buf;
}

rtxt_encode.bytes = 0;

function rtxt_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  let remaining = buf.readUInt16BE(offset);
  offset += 2;
  let data = [];

  while (remaining > 0) {
    const len = buf[offset++];
    --remaining;

    if (remaining < len) {
      throw new Error('Buffer overflow');
    }

    data.push(buf.slice(offset, offset + len));
    offset += len;
    remaining -= len;
  }

  rtxt_decode.bytes = offset - oldOffset;
  return data;
}

rtxt_decode.bytes = 0;

function rtxt_encodingLength(data) {
  if (!Array.isArray(data)) data = [data];
  let length = 2;
  data.forEach(function (buf) {
    if (typeof buf === 'string') {
      length += _buffer.Buffer.byteLength(buf) + 1;
    } else {
      length += buf.length + 1;
    }
  });
  return length;
}

function rnull_encode(data, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rnull.encodingLength(data));
  if (!offset) offset = 0;
  if (typeof data === 'string') data = _buffer.Buffer.from(data);
  if (!data) data = _buffer.Buffer.allocUnsafe(0);
  const oldOffset = offset;
  offset += 2;
  const len = data.length;
  data.copy(buf, offset, 0, len);
  offset += len;
  buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
  rnull_encode.bytes = offset - oldOffset;
  return buf;
}

rnull_encode.bytes = 0;

function rnull_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  const len = buf.readUInt16BE(offset);
  offset += 2;
  const data = buf.slice(offset, offset + len);
  offset += len;
  rnull_decode.bytes = offset - oldOffset;
  return data;
}

rnull_decode.bytes = 0;

function rnull_encodingLength(data) {
  if (!data) return 2;
  return (_buffer.Buffer.isBuffer(data) ? data.length : _buffer.Buffer.byteLength(data)) + 2;
}

function rhinfo_encode(data, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rhinfo.encodingLength(data));
  if (!offset) offset = 0;
  const oldOffset = offset;
  offset += 2;
  string_encode(data.cpu, buf, offset);
  offset += string_encode.bytes;
  string_encode(data.os, buf, offset);
  offset += string_encode.bytes;
  buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
  rhinfo_encode.bytes = offset - oldOffset;
  return buf;
}

rhinfo_encode.bytes = 0;

function rhinfo_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  const data = {};
  offset += 2;
  data.cpu = string_decode(buf, offset);
  offset += string_decode.bytes;
  data.os = string_decode(buf, offset);
  offset += string_decode.bytes;
  rhinfo_decode.bytes = offset - oldOffset;
  return data;
}

rhinfo_decode.bytes = 0;

function rhinfo_encodingLength(data) {
  return string_encodingLength(data.cpu) + string_encodingLength(data.os) + 2;
}

function rptr_encode(data, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rptr.encodingLength(data));
  if (!offset) offset = 0;
  name_encode(data, buf, offset + 2);
  buf.writeUInt16BE(name_encode.bytes, offset);
  rptr_encode.bytes = name_encode.bytes + 2;
  return buf;
}

rptr_encode.bytes = 0;

function rptr_decode(buf, offset) {
  if (!offset) offset = 0;
  const data = name_decode(buf, offset + 2);
  rptr_decode.bytes = name_decode.bytes + 2;
  return data;
}

rptr_decode.bytes = 0;

function rptr_encodingLength(data) {
  return name_encodingLength(data) + 2;
}

function rsrv_encode(data, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rsrv.encodingLength(data));
  if (!offset) offset = 0;
  buf.writeUInt16BE(data.priority || 0, offset + 2);
  buf.writeUInt16BE(data.weight || 0, offset + 4);
  buf.writeUInt16BE(data.port || 0, offset + 6);
  name_encode(data.target, buf, offset + 8);
  const len = name_encode.bytes + 6;
  buf.writeUInt16BE(len, offset);
  rsrv_encode.bytes = len + 2;
  return buf;
}

rsrv_encode.bytes = 0;

function rsrv_decode(buf, offset) {
  if (!offset) offset = 0;
  const len = buf.readUInt16BE(offset);
  const data = {};
  data.priority = buf.readUInt16BE(offset + 2);
  data.weight = buf.readUInt16BE(offset + 4);
  data.port = buf.readUInt16BE(offset + 6);
  data.target = name_decode(buf, offset + 8);
  rsrv_decode.bytes = len + 2;
  return data;
}

rsrv_decode.bytes = 0;

function rsrv_encodingLength(data) {
  return 8 + name_encodingLength(data.target);
}

function rcaa_encode(data, buf, offset) {
  const len = rcaa.encodingLength(data);
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rcaa.encodingLength(data));
  if (!offset) offset = 0;

  if (data.issuerCritical) {
    data.flags = rcaa.ISSUER_CRITICAL;
  }

  buf.writeUInt16BE(len - 2, offset);
  offset += 2;
  buf.writeUInt8(data.flags || 0, offset);
  offset += 1;
  string_encode(data.tag, buf, offset);
  offset += string_encode.bytes;
  buf.write(data.value, offset);
  offset += _buffer.Buffer.byteLength(data.value);
  rcaa_encode.bytes = len;
  return buf;
}

rcaa_encode.bytes = 0;

function rcaa_decode(buf, offset) {
  if (!offset) offset = 0;
  const len = buf.readUInt16BE(offset);
  offset += 2;
  const oldOffset = offset;
  const data = {};
  data.flags = buf.readUInt8(offset);
  offset += 1;
  data.tag = string_decode(buf, offset);
  offset += string_decode.bytes;
  data.value = buf.toString('utf-8', offset, oldOffset + len);
  data.issuerCritical = !!(data.flags & rcaa.ISSUER_CRITICAL);
  rcaa_decode.bytes = len + 2;
  return data;
}

rcaa_decode.bytes = 0;

function rcaa_encodingLength(data) {
  return string_encodingLength(data.tag) + string_encodingLength(data.value) + 2;
}

function rmx_encode(data, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rmx.encodingLength(data));
  if (!offset) offset = 0;
  const oldOffset = offset;
  offset += 2;
  buf.writeUInt16BE(data.preference || 0, offset);
  offset += 2;
  name_encode(data.exchange, buf, offset);
  offset += name_encode.bytes;
  buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
  rmx_encode.bytes = offset - oldOffset;
  return buf;
}

rmx_encode.bytes = 0;

function rmx_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  const data = {};
  offset += 2;
  data.preference = buf.readUInt16BE(offset);
  offset += 2;
  data.exchange = name_decode(buf, offset);
  offset += name_decode.bytes;
  rmx_decode.bytes = offset - oldOffset;
  return data;
} // add here as ts complain


rmx_decode.bytes = undefined;

function rmx_encodingLength(data) {
  return 4 + name_encodingLength(data.exchange);
}

function ra_encode(host, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(ra_encodingLength(host));
  if (!offset) offset = 0;
  buf.writeUInt16BE(4, offset);
  offset += 2;
  (0, _ipEs.toBuffer)(host, buf, offset);
  ra_encode.bytes = 6;
  return buf;
}

ra_encode.bytes = 0;

function ra_decode(buf, offset) {
  if (!offset) offset = 0;
  offset += 2;
  const host = (0, _ipEs.toString)(buf, offset, 4);
  ra_decode.bytes = 6;
  return host;
}

ra_decode.bytes = 0;

function ra_encodingLength(_) {
  return 6;
}

function raaaa_encode(host, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(raaaa.encodingLength(host));
  if (!offset) offset = 0;
  buf.writeUInt16BE(16, offset);
  offset += 2;
  (0, _ipEs.toBuffer)(host, buf, offset);
  raaaa_encode.bytes = 18;
  return buf;
}

raaaa_encode.bytes = 0;

function raaaa_decode(buf, offset) {
  if (!offset) offset = 0;
  offset += 2;
  const host = (0, _ipEs.toString)(buf, offset, 16);
  raaaa_decode.bytes = 18;
  return host;
}

raaaa_decode.bytes = 0;

function raaaa_encodingLength(_) {
  return 18;
}

function roption_encode(option, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(roption.encodingLength(option));
  if (!offset) offset = 0;
  const oldOffset = offset;
  const code = optioncodes.toCode(option.code);
  buf.writeUInt16BE(code, offset);
  offset += 2;

  if (option.data) {
    buf.writeUInt16BE(option.data.length, offset);
    offset += 2;
    option.data.copy(buf, offset);
    offset += option.data.length;
  } else {
    switch (code) {
      // case 3: NSID.  No encode makes sense.
      // case 5,6,7: Not implementable
      case 8:
        // ECS
        // note: do IP math before calling
        const spl = option.sourcePrefixLength || 0;
        const fam = option.family || ((0, _ipEs.isV4Format)(option.ip) ? 1 : 2);
        const ipBuf = (0, _ipEs.toBuffer)(option.ip);
        const ipLen = Math.ceil(spl / 8);
        buf.writeUInt16BE(ipLen + 4, offset);
        offset += 2;
        buf.writeUInt16BE(fam, offset);
        offset += 2;
        buf.writeUInt8(spl, offset++);
        buf.writeUInt8(option.scopePrefixLength || 0, offset++);
        ipBuf.copy(buf, offset, 0, ipLen);
        offset += ipLen;
        break;
      // case 9: EXPIRE (experimental)
      // case 10: COOKIE.  No encode makes sense.

      case 11:
        // KEEP-ALIVE
        if (option.timeout) {
          buf.writeUInt16BE(2, offset);
          offset += 2;
          buf.writeUInt16BE(option.timeout, offset);
          offset += 2;
        } else {
          buf.writeUInt16BE(0, offset);
          offset += 2;
        }

        break;

      case 12:
        // PADDING
        const len = option.length || 0;
        buf.writeUInt16BE(len, offset);
        offset += 2;
        buf.fill(0, offset, offset + len);
        offset += len;
        break;
      // case 13:  CHAIN.  Experimental.

      case 14:
        // KEY-TAG
        const tagsLen = option.tags.length * 2;
        buf.writeUInt16BE(tagsLen, offset);
        offset += 2;

        for (const tag of option.tags) {
          buf.writeUInt16BE(tag, offset);
          offset += 2;
        }

        break;

      default:
        throw new Error(`Unknown roption code: ${option.code}`);
    }
  }

  roption_encode.bytes = offset - oldOffset;
  return buf;
}

roption_encode.bytes = 0;

function roption_decode(buf, offset) {
  if (!offset) offset = 0;
  const option = {};
  option.code = buf.readUInt16BE(offset);
  option.type = optioncodes.toString(option.code);
  offset += 2;
  const len = buf.readUInt16BE(offset);
  offset += 2;
  option.data = buf.slice(offset, offset + len);

  switch (option.code) {
    // case 3: NSID.  No decode makes sense.
    case 8:
      // ECS
      option.family = buf.readUInt16BE(offset);
      offset += 2;
      option.sourcePrefixLength = buf.readUInt8(offset++);
      option.scopePrefixLength = buf.readUInt8(offset++);

      const padded = _buffer.Buffer.alloc(option.family === 1 ? 4 : 16);

      buf.copy(padded, 0, offset, offset + len - 4);
      option.ip = (0, _ipEs.toString)(padded);
      break;
    // case 12: Padding.  No decode makes sense.

    case 11:
      // KEEP-ALIVE
      if (len > 0) {
        option.timeout = buf.readUInt16BE(offset);
        offset += 2;
      }

      break;

    case 14:
      option.tags = [];

      for (let i = 0; i < len; i += 2) {
        option.tags.push(buf.readUInt16BE(offset));
        offset += 2;
      }

    // don't worry about default.  caller will use data if desired
  }

  roption_decode.bytes = len + 4;
  return option;
}

roption_decode.bytes = 0;

function roption_encodingLength(option) {
  if (option.data) {
    return option.data.length + 4;
  }

  const code = optioncodes.toCode(option.code);

  switch (code) {
    case 8:
      // ECS
      const spl = option.sourcePrefixLength || 0;
      return Math.ceil(spl / 8) + 8;

    case 11:
      // KEEP-ALIVE
      return typeof option.timeout === 'number' ? 6 : 4;

    case 12:
      // PADDING
      return option.length + 4;

    case 14:
      // KEY-TAG
      return 4 + option.tags.length * 2;
  }

  throw new Error(`Unknown roption code: ${option.code}`);
}

function ropt_encode(options, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(ropt.encodingLength(options));
  if (!offset) offset = 0;
  const oldOffset = offset;
  const rdlen = encodingLengthList(options, roption);
  buf.writeUInt16BE(rdlen, offset);
  offset = encodeList(options, roption, buf, offset + 2);
  ropt_encode.bytes = offset - oldOffset;
  return buf;
}

ropt_encode.bytes = 0;

function ropt_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  const options = [];
  let rdlen = buf.readUInt16BE(offset);
  offset += 2;
  let o = 0;

  while (rdlen > 0) {
    options[o++] = roption.decode(buf, offset);
    offset += roption_decode.bytes;
    rdlen -= roption_decode.bytes;
  }

  ropt_decode.bytes = offset - oldOffset;
  return options;
}

ropt_decode.bytes = 0;

function ropt_encodingLength(options) {
  return 2 + encodingLengthList(options || [], roption);
}

function rdnskey_encode(key, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rdnskey.encodingLength(key));
  if (!offset) offset = 0;
  const oldOffset = offset;
  const keydata = key.key;

  if (!_buffer.Buffer.isBuffer(keydata)) {
    throw new Error('Key must be a Buffer');
  }

  offset += 2; // Leave space for length

  buf.writeUInt16BE(key.flags, offset);
  offset += 2;
  buf.writeUInt8(rdnskey.PROTOCOL_DNSSEC, offset);
  offset += 1;
  buf.writeUInt8(key.algorithm, offset);
  offset += 1;
  keydata.copy(buf, offset, 0, keydata.length);
  offset += keydata.length;
  rdnskey_encode.bytes = offset - oldOffset;
  buf.writeUInt16BE(rdnskey_encode.bytes - 2, oldOffset);
  return buf;
}

rdnskey_encode.bytes = 0;

function rdnskey_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  var key = {};
  var length = buf.readUInt16BE(offset);
  offset += 2;
  key.flags = buf.readUInt16BE(offset);
  offset += 2;

  if (buf.readUInt8(offset) !== rdnskey.PROTOCOL_DNSSEC) {
    throw new Error('Protocol must be 3');
  }

  offset += 1;
  key.algorithm = buf.readUInt8(offset);
  offset += 1;
  key.key = buf.slice(offset, oldOffset + length + 2);
  offset += key.key.length;
  rdnskey_decode.bytes = offset - oldOffset;
  return key;
}

rdnskey_decode.bytes = 0;

function rdnskey_encodingLength(key) {
  return 6 + _buffer.Buffer.byteLength(key.key);
}

function rrrsig_encode(sig, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rrrsig.encodingLength(sig));
  if (!offset) offset = 0;
  const oldOffset = offset;
  const signature = sig.signature;

  if (!_buffer.Buffer.isBuffer(signature)) {
    throw new Error('Signature must be a Buffer');
  }

  offset += 2; // Leave space for length

  buf.writeUInt16BE(types.toType(sig.typeCovered), offset);
  offset += 2;
  buf.writeUInt8(sig.algorithm, offset);
  offset += 1;
  buf.writeUInt8(sig.labels, offset);
  offset += 1;
  buf.writeUInt32BE(sig.originalTTL, offset);
  offset += 4;
  buf.writeUInt32BE(sig.expiration, offset);
  offset += 4;
  buf.writeUInt32BE(sig.inception, offset);
  offset += 4;
  buf.writeUInt16BE(sig.keyTag, offset);
  offset += 2;
  name_encode(sig.signersName, buf, offset);
  offset += name_encode.bytes;
  signature.copy(buf, offset, 0, signature.length);
  offset += signature.length;
  rrrsig_encode.bytes = offset - oldOffset;
  buf.writeUInt16BE(rrrsig_encode.bytes - 2, oldOffset);
  return buf;
}

rrrsig_encode.bytes = 0;

function rrrsig_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  var sig = {};
  var length = buf.readUInt16BE(offset);
  offset += 2;
  sig.typeCovered = types.toString(buf.readUInt16BE(offset));
  offset += 2;
  sig.algorithm = buf.readUInt8(offset);
  offset += 1;
  sig.labels = buf.readUInt8(offset);
  offset += 1;
  sig.originalTTL = buf.readUInt32BE(offset);
  offset += 4;
  sig.expiration = buf.readUInt32BE(offset);
  offset += 4;
  sig.inception = buf.readUInt32BE(offset);
  offset += 4;
  sig.keyTag = buf.readUInt16BE(offset);
  offset += 2;
  sig.signersName = name_decode(buf, offset);
  offset += name_decode.bytes;
  sig.signature = buf.slice(offset, oldOffset + length + 2);
  offset += sig.signature.length;
  rrrsig_decode.bytes = offset - oldOffset;
  return sig;
}

rrrsig_decode.bytes = 0;

function rrrsig_encodingLength(sig) {
  return 20 + name_encodingLength(sig.signersName) + _buffer.Buffer.byteLength(sig.signature);
}

function rrp_encode(data, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rrp.encodingLength(data));
  if (!offset) offset = 0;
  const oldOffset = offset;
  offset += 2; // Leave space for length

  name_encode(data.mbox || '.', buf, offset);
  offset += name_encode.bytes;
  name_encode(data.txt || '.', buf, offset);
  offset += name_encode.bytes;
  rrp_encode.bytes = offset - oldOffset;
  buf.writeUInt16BE(rrp_encode.bytes - 2, oldOffset);
  return buf;
}

rrp_encode.bytes = 0;

function rrp_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  const data = {};
  offset += 2;
  data.mbox = name_decode(buf, offset) || '.';
  offset += name_decode.bytes;
  data.txt = name_decode(buf, offset) || '.';
  offset += name_decode.bytes;
  rrp_decode.bytes = offset - oldOffset;
  return data;
}

rrp_decode.bytes = 0;

function rrp_encodingLength(data) {
  return 2 + name_encodingLength(data.mbox || '.') + name_encodingLength(data.txt || '.');
}

function typebitmap_encode(typelist, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(typebitmap.encodingLength(typelist));
  if (!offset) offset = 0;
  const oldOffset = offset;
  var typesByWindow = [];

  for (var i = 0; i < typelist.length; i++) {
    var typeid = types.toType(typelist[i]);

    if (typesByWindow[typeid >> 8] === undefined) {
      typesByWindow[typeid >> 8] = [];
    }

    typesByWindow[typeid >> 8][typeid >> 3 & 0x1F] |= 1 << 7 - (typeid & 0x7);
  }

  for (i = 0; i < typesByWindow.length; i++) {
    if (typesByWindow[i] !== undefined) {
      var windowBuf = _buffer.Buffer.from(typesByWindow[i]);

      buf.writeUInt8(i, offset);
      offset += 1;
      buf.writeUInt8(windowBuf.length, offset);
      offset += 1;
      windowBuf.copy(buf, offset);
      offset += windowBuf.length;
    }
  }

  typebitmap_encode.bytes = offset - oldOffset;
  return buf;
}

typebitmap_encode.bytes = 0;

function typebitmap_decode(buf, offset, length) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  var typelist = [];

  while (offset - oldOffset < length) {
    var window = buf.readUInt8(offset);
    offset += 1;
    var windowLength = buf.readUInt8(offset);
    offset += 1;

    for (var i = 0; i < windowLength; i++) {
      var b = buf.readUInt8(offset + i);

      for (var j = 0; j < 8; j++) {
        if (b & 1 << 7 - j) {
          var typeid = types.toString(window << 8 | i << 3 | j);
          typelist.push(typeid);
        }
      }
    }

    offset += windowLength;
  }

  typebitmap_decode.bytes = offset - oldOffset;
  return typelist;
}

typebitmap_decode.bytes = 0;

function typebitmap_encodingLength(typelist) {
  var extents = [];

  for (var i = 0; i < typelist.length; i++) {
    var typeid = types.toType(typelist[i]);
    extents[typeid >> 8] = Math.max(extents[typeid >> 8] || 0, typeid & 0xFF);
  }

  var len = 0;

  for (i = 0; i < extents.length; i++) {
    if (extents[i] !== undefined) {
      len += 2 + Math.ceil((extents[i] + 1) / 8);
    }
  }

  return len;
}

function rnsec_encode(record, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rnsec.encodingLength(record));
  if (!offset) offset = 0;
  const oldOffset = offset;
  offset += 2; // Leave space for length

  name_encode(record.nextDomain, buf, offset);
  offset += name_encode.bytes;
  typebitmap.encode(record.rrtypes, buf, offset);
  offset += typebitmap_encode.bytes;
  rnsec_encode.bytes = offset - oldOffset;
  buf.writeUInt16BE(rnsec_encode.bytes - 2, oldOffset);
  return buf;
}

rnsec_encode.bytes = 0;

function rnsec_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  var record = {};
  var length = buf.readUInt16BE(offset);
  offset += 2;
  record.nextDomain = name_decode(buf, offset);
  offset += name_decode.bytes;
  record.rrtypes = typebitmap.decode(buf, offset, length - (offset - oldOffset));
  offset += typebitmap_decode.bytes;
  rnsec_decode.bytes = offset - oldOffset;
  return record;
}

rnsec_decode.bytes = 0;

function rnsec_encodingLength(record) {
  return 2 + name_encodingLength(record.nextDomain) + typebitmap.encodingLength(record.rrtypes);
}

function rnsec3_encode(record, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rnsec3.encodingLength(record));
  if (!offset) offset = 0;
  const oldOffset = offset;
  const salt = record.salt;

  if (!_buffer.Buffer.isBuffer(salt)) {
    throw new Error('salt must be a Buffer');
  }

  const nextDomain = record.nextDomain;

  if (!_buffer.Buffer.isBuffer(nextDomain)) {
    throw new Error('nextDomain must be a Buffer');
  }

  offset += 2; // Leave space for length

  buf.writeUInt8(record.algorithm, offset);
  offset += 1;
  buf.writeUInt8(record.flags, offset);
  offset += 1;
  buf.writeUInt16BE(record.iterations, offset);
  offset += 2;
  buf.writeUInt8(salt.length, offset);
  offset += 1;
  salt.copy(buf, offset, 0, salt.length);
  offset += salt.length;
  buf.writeUInt8(nextDomain.length, offset);
  offset += 1;
  nextDomain.copy(buf, offset, 0, nextDomain.length);
  offset += nextDomain.length;
  typebitmap.encode(record.rrtypes, buf, offset);
  offset += typebitmap_encode.bytes;
  rnsec3_encode.bytes = offset - oldOffset;
  buf.writeUInt16BE(rnsec3_encode.bytes - 2, oldOffset);
  return buf;
}

rnsec3_encode.bytes = 0;

function rnsec3_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  var record = {};
  var length = buf.readUInt16BE(offset);
  offset += 2;
  record.algorithm = buf.readUInt8(offset);
  offset += 1;
  record.flags = buf.readUInt8(offset);
  offset += 1;
  record.iterations = buf.readUInt16BE(offset);
  offset += 2;
  const saltLength = buf.readUInt8(offset);
  offset += 1;
  record.salt = buf.slice(offset, offset + saltLength);
  offset += saltLength;
  const hashLength = buf.readUInt8(offset);
  offset += 1;
  record.nextDomain = buf.slice(offset, offset + hashLength);
  offset += hashLength;
  record.rrtypes = typebitmap.decode(buf, offset, length - (offset - oldOffset));
  offset += typebitmap_decode.bytes;
  rnsec3_decode.bytes = offset - oldOffset;
  return record;
}

rnsec3_decode.bytes = 0;

function rnsec3_encodingLength(record) {
  return 8 + record.salt.length + record.nextDomain.length + typebitmap.encodingLength(record.rrtypes);
}

function rds_encode(digest, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(rds.encodingLength(digest));
  if (!offset) offset = 0;
  const oldOffset = offset;
  const digestdata = digest.digest;

  if (!_buffer.Buffer.isBuffer(digestdata)) {
    throw new Error('Digest must be a Buffer');
  }

  offset += 2; // Leave space for length

  buf.writeUInt16BE(digest.keyTag, offset);
  offset += 2;
  buf.writeUInt8(digest.algorithm, offset);
  offset += 1;
  buf.writeUInt8(digest.digestType, offset);
  offset += 1;
  digestdata.copy(buf, offset, 0, digestdata.length);
  offset += digestdata.length;
  rds_encode.bytes = offset - oldOffset;
  buf.writeUInt16BE(rds_encode.bytes - 2, oldOffset);
  return buf;
}

rds_encode.bytes = 0;

function rds_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  var digest = {};
  var length = buf.readUInt16BE(offset);
  offset += 2;
  digest.keyTag = buf.readUInt16BE(offset);
  offset += 2;
  digest.algorithm = buf.readUInt8(offset);
  offset += 1;
  digest.digestType = buf.readUInt8(offset);
  offset += 1;
  digest.digest = buf.slice(offset, oldOffset + length + 2);
  offset += digest.digest.length;
  rds_decode.bytes = offset - oldOffset;
  return digest;
}

rds_decode.bytes = 0;

function rds_encodingLength(digest) {
  return 6 + _buffer.Buffer.byteLength(digest.digest);
}

const renc = function (type) {
  switch (type.toUpperCase()) {
    case 'A':
      return ra;

    case 'PTR':
      return rptr;

    case 'CNAME':
      return rcname;

    case 'DNAME':
      return rdname;

    case 'TXT':
      return rtxt;

    case 'NULL':
      return rnull;

    case 'AAAA':
      return raaaa;

    case 'SRV':
      return rsrv;

    case 'HINFO':
      return rhinfo;

    case 'CAA':
      return rcaa;

    case 'NS':
      return rns;

    case 'SOA':
      return rsoa;

    case 'MX':
      return rmx;

    case 'OPT':
      return ropt;

    case 'DNSKEY':
      return rdnskey;

    case 'RRSIG':
      return rrrsig;

    case 'RP':
      return rrp;

    case 'NSEC':
      return rnsec;

    case 'NSEC3':
      return rnsec3;

    case 'DS':
      return rds;
  }

  return runknown;
};

exports.record = renc;

function answer_encode(a, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(answer.encodingLength(a));
  if (!offset) offset = 0;
  const oldOffset = offset;
  name_encode(a.name, buf, offset);
  offset += name_encode.bytes;
  buf.writeUInt16BE(types.toType(a.type), offset);

  if (a.type.toUpperCase() === 'OPT') {
    if (a.name !== '.') {
      throw new Error('OPT name must be root.');
    }

    buf.writeUInt16BE(a.udpPayloadSize || 4096, offset + 2);
    buf.writeUInt8(a.extendedRcode || 0, offset + 4);
    buf.writeUInt8(a.ednsVersion || 0, offset + 5);
    buf.writeUInt16BE(a.flags || 0, offset + 6);
    offset += 8;
    ropt.encode(a.options || [], buf, offset);
    offset += ropt_encode.bytes;
  } else {
    let klass = classes.toClass(a.class === undefined ? 'IN' : a.class);
    if (a.flush) klass |= FLUSH_MASK; // the 1st bit of the class is the flush bit

    buf.writeUInt16BE(klass, offset + 2);
    buf.writeUInt32BE(a.ttl || 0, offset + 4);
    offset += 8;
    const enc = renc(a.type);
    enc.encode(a.data, buf, offset);
    offset += enc.encode.bytes;
  }

  answer_encode.bytes = offset - oldOffset;
  return buf;
}

answer_encode.bytes = 0;

function answer_decode(buf, offset) {
  if (!offset) offset = 0;
  const a = {};
  const oldOffset = offset;
  a.name = name_decode(buf, offset);
  offset += name_decode.bytes;
  a.type = types.toString(buf.readUInt16BE(offset));

  if (a.type === 'OPT') {
    a.udpPayloadSize = buf.readUInt16BE(offset + 2);
    a.extendedRcode = buf.readUInt8(offset + 4);
    a.ednsVersion = buf.readUInt8(offset + 5);
    a.flags = buf.readUInt16BE(offset + 6);
    a.flag_do = (a.flags >> 15 & 0x1) === 1;
    a.options = ropt.decode(buf, offset + 8);
    offset += 8 + ropt_decode.bytes;
  } else {
    const klass = buf.readUInt16BE(offset + 2);
    a.ttl = buf.readUInt32BE(offset + 4);
    a.class = classes.toString(klass & NOT_FLUSH_MASK);
    a.flush = !!(klass & FLUSH_MASK);
    const enc = renc(a.type);
    a.data = enc.decode(buf, offset + 8);
    offset += 8 + enc.decode.bytes;
  }

  answer_decode.bytes = offset - oldOffset;
  return a;
}

answer_decode.bytes = 0;

function answer_encodingLength(a) {
  const data = a.data !== null && a.data !== undefined ? a.data : a.options;
  return name_encodingLength(a.name) + 8 + renc(a.type).encodingLength(data);
}

function question_encode(q, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(question.encodingLength(q));
  if (!offset) offset = 0;
  const oldOffset = offset;
  name_encode(q.name, buf, offset);
  offset += name_encode.bytes;
  buf.writeUInt16BE(types.toType(q.type), offset);
  offset += 2;
  buf.writeUInt16BE(classes.toClass(q.class === undefined ? 'IN' : q.class), offset);
  offset += 2;
  question_encode.bytes = offset - oldOffset;
  return q;
}

question_encode.bytes = 0;

function question_decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  const q = {};
  q.name = name_decode(buf, offset);
  offset += name_decode.bytes;
  q.type = types.toString(buf.readUInt16BE(offset));
  offset += 2;
  q.class = classes.toString(buf.readUInt16BE(offset));
  offset += 2;
  const qu = !!(q.class & QU_MASK);
  if (qu) q.class &= NOT_QU_MASK;
  question_decode.bytes = offset - oldOffset;
  return q;
}

question_decode.bytes = 0;

function question_encodingLength(q) {
  return name_encodingLength(q.name) + 4;
}

const AUTHORITATIVE_ANSWER = 1 << 10;
exports.AUTHORITATIVE_ANSWER = AUTHORITATIVE_ANSWER;
const TRUNCATED_RESPONSE = 1 << 9;
exports.TRUNCATED_RESPONSE = TRUNCATED_RESPONSE;
const RECURSION_DESIRED = 1 << 8;
exports.RECURSION_DESIRED = RECURSION_DESIRED;
const RECURSION_AVAILABLE = 1 << 7;
exports.RECURSION_AVAILABLE = RECURSION_AVAILABLE;
const AUTHENTIC_DATA = 1 << 5;
exports.AUTHENTIC_DATA = AUTHENTIC_DATA;
const CHECKING_DISABLED = 1 << 4;
exports.CHECKING_DISABLED = CHECKING_DISABLED;
const DNSSEC_OK = 1 << 15;
exports.DNSSEC_OK = DNSSEC_OK;

function encode(result, buf, offset) {
  if (!buf) buf = _buffer.Buffer.allocUnsafe(encodingLength(result));
  if (!offset) offset = 0;
  const oldOffset = offset;
  if (!result.questions) result.questions = [];
  if (!result.answers) result.answers = [];
  if (!result.authorities) result.authorities = [];
  if (!result.additionals) result.additionals = [];
  header_encode(result, buf, offset);
  offset += header_encode.bytes;
  offset = encodeList(result.questions, question, buf, offset);
  offset = encodeList(result.answers, answer, buf, offset);
  offset = encodeList(result.authorities, answer, buf, offset);
  offset = encodeList(result.additionals, answer, buf, offset);
  encode.bytes = offset - oldOffset;
  return buf;
}

encode.bytes = 0;

function decode(buf, offset) {
  if (!offset) offset = 0;
  const oldOffset = offset;
  const result = header_decode(buf, offset);
  offset += header_decode.bytes;
  offset = decodeList(result.questions, question, buf, offset);
  offset = decodeList(result.answers, answer, buf, offset);
  offset = decodeList(result.authorities, answer, buf, offset);
  offset = decodeList(result.additionals, answer, buf, offset);
  decode.bytes = offset - oldOffset;
  return result;
}

decode.bytes = 0;

function encodingLength(result) {
  return header_encodingLength(result) + encodingLengthList(result.questions || [], question) + encodingLengthList(result.answers || [], answer) + encodingLengthList(result.authorities || [], answer) + encodingLengthList(result.additionals || [], answer);
}

function streamEncode(result) {
  const buf = encode(result);

  const sbuf = _buffer.Buffer.allocUnsafe(2);

  sbuf.writeUInt16BE(buf.byteLength);

  const combine = _buffer.Buffer.concat([sbuf, buf]);

  streamEncode.bytes = combine.byteLength;
  return combine;
}

streamEncode.bytes = 0;

function streamDecode(sbuf) {
  const len = sbuf.readUInt16BE(0);

  if (sbuf.byteLength < len + 2) {
    // not enough data
    return null;
  }

  const result = decode(sbuf.slice(2));
  streamDecode.bytes = decode.bytes;
  return result;
}

streamDecode.bytes = 0;

function encodingLengthList(list, enc) {
  let len = 0;

  for (let i = 0; i < list.length; i++) len += enc.encodingLength(list[i]);

  return len;
}

function encodeList(list, enc, buf, offset) {
  for (let i = 0; i < list.length; i++) {
    enc.encode(list[i], buf, offset);
    offset += enc.encode.bytes;
  }

  return offset;
}

function decodeList(list, enc, buf, offset) {
  for (let i = 0; i < list.length; i++) {
    list[i] = enc.decode(buf, offset);
    offset += enc.decode.bytes;
  }

  return offset;
}

const name = {
  encode: name_encode,
  decode: name_decode,
  encodingLength: name_encodingLength
};
exports.name = name;
const string = {
  encode: string_encode,
  decode: string_decode,
  encodingLength: string_encodingLength
};
exports.string = string;
const header = {
  encode: header_encode,
  decode: header_decode,
  encodingLength: header_encodingLength
};
exports.header = header;
const runknown = {
  encode: runknown_encode,
  decode: runknown_decode,
  encodingLength: runknown_encodingLength
};
exports.unknown = runknown;
const rns = {
  encode: rns_encode,
  decode: rns_decode,
  encodingLength: rns_encodingLength
};
exports.ns = rns;
const rsoa = {
  encode: rsoa_encode,
  decode: rsoa_decode,
  encodingLength: rsoa_encodingLength
};
exports.soa = rsoa;
const rtxt = {
  encode: rtxt_encode,
  decode: rtxt_decode,
  encodingLength: rtxt_encodingLength
};
exports.txt = rtxt;
const rnull = {
  encode: rnull_encode,
  decode: rnull_decode,
  encodingLength: rnull_encodingLength
};
exports.null = rnull;
const rhinfo = {
  encode: rhinfo_encode,
  decode: rhinfo_decode,
  encodingLength: rhinfo_encodingLength
};
exports.hinfo = rhinfo;
const rptr = {
  encode: rptr_encode,
  decode: rptr_decode,
  encodingLength: rptr_encodingLength
};
exports.dname = exports.cname = exports.ptr = rptr;
const rcname = rptr;
const rdname = rptr;
const rsrv = {
  encode: rsrv_encode,
  decode: rsrv_decode,
  encodingLength: rsrv_encodingLength
};
exports.srv = rsrv;
const rcaa = {
  ISSUER_CRITICAL: 1 << 7,
  encode: rcaa_encode,
  decode: rcaa_decode,
  encodingLength: rcaa_encodingLength
};
exports.caa = rcaa;
const rmx = {
  encode: rmx_encode,
  decode: rmx_decode,
  encodingLength: rmx_encodingLength
};
exports.mx = rmx;
const ra = {
  encode: ra_encode,
  decode: ra_decode,
  encodingLength: ra_encodingLength
};
exports.a = ra;
const raaaa = {
  encode: raaaa_encode,
  decode: raaaa_decode,
  encodingLength: raaaa_encodingLength
};
exports.aaaa = raaaa;
const roption = {
  encode: roption_encode,
  decode: roption_decode,
  encodingLength: roption_encodingLength
};
exports.option = roption;
const ropt = {
  encode: ropt_encode,
  decode: ropt_decode,
  encodingLength: ropt_encodingLength
};
exports.opt = ropt;
const rdnskey = {
  PROTOCOL_DNSSEC: 3,
  ZONE_KEY: 0x80,
  rSECURE_ENTRYPOINT: 0x8000,
  encode: rdnskey_encode,
  decode: rdnskey_decode,
  encodingLength: rdnskey_encodingLength
};
exports.dnskey = rdnskey;
const rrrsig = {
  encode: rrrsig_encode,
  decode: rrrsig_decode,
  encodingLength: rrrsig_encodingLength
};
exports.rrsig = rrrsig;
const rrp = {
  encode: rrp_encode,
  decode: rrp_decode,
  encodingLength: rrp_encodingLength
};
exports.rp = rrp;
const typebitmap = {
  encode: typebitmap_encode,
  decode: typebitmap_decode,
  encodingLength: typebitmap_encodingLength
};
exports.typebitmap = typebitmap;
const rnsec = {
  encode: rnsec_encode,
  decode: rnsec_decode,
  encodingLength: rnsec_encodingLength
};
exports.nsec = rnsec;
const rnsec3 = {
  encode: rnsec3_encode,
  decode: rnsec3_decode,
  encodingLength: rnsec3_encodingLength
};
exports.nsec3 = rnsec3;
const rds = {
  encode: rds_encode,
  decode: rds_decode,
  encodingLength: rds_encodingLength
};
exports.ds = rds;
const answer = {
  encode: answer_encode,
  decode: answer_decode,
  encodingLength: answer_encodingLength
};
exports.answer = answer;
const question = {
  encode: question_encode,
  decode: question_decode,
  encodingLength: question_encodingLength
};
exports.question = question;
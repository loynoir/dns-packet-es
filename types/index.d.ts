export declare const QUERY_FLAG = 0;
export declare const RESPONSE_FLAG: number;
export declare const FLUSH_MASK: number;
export declare const NOT_FLUSH_MASK: number;
export declare const QU_MASK: number;
export declare const NOT_QU_MASK: number;
export declare function name_encode(str: any, buf: any, offset: any): any;
export declare namespace name_encode {
    var bytes: number;
}
export declare function name_decode(buf: any, offset: any): any;
export declare namespace name_decode {
    var bytes: number;
}
export declare function name_encodingLength(n: any): any;
export declare function string_encode(s: any, buf: any, offset: any): any;
export declare namespace string_encode {
    var bytes: number;
}
export declare function string_decode(buf: any, offset: any): any;
export declare namespace string_decode {
    var bytes: number;
}
export declare function string_encodingLength(s: any): any;
export declare function header_encode(h: any, buf: any, offset: any): any;
export declare namespace header_encode {
    var bytes: number;
}
export declare function header_decode(buf: any, offset: any): {
    id: any;
    type: string;
    flags: number;
    flag_qr: boolean;
    opcode: string;
    flag_aa: boolean;
    flag_tc: boolean;
    flag_rd: boolean;
    flag_ra: boolean;
    flag_z: boolean;
    flag_ad: boolean;
    flag_cd: boolean;
    rcode: string;
    questions: any[];
    answers: any[];
    authorities: any[];
    additionals: any[];
};
export declare namespace header_decode {
    var bytes: number;
}
export declare function header_encodingLength(_?: any): number;
export declare function runknown_encode(data: any, buf: any, offset: any): any;
export declare namespace runknown_encode {
    var bytes: number;
}
export declare function runknown_decode(buf: any, offset: any): any;
export declare namespace runknown_decode {
    var bytes: number;
}
export declare function runknown_encodingLength(data: any): any;
export declare function rns_encode(data: any, buf: any, offset: any): any;
export declare namespace rns_encode {
    var bytes: number;
}
export declare function rns_decode(buf: any, offset: any): any;
export declare namespace rns_decode {
    var bytes: number;
}
export declare function rns_encodingLength(data: any): any;
export declare function rsoa_encode(data: any, buf: any, offset: any): any;
export declare namespace rsoa_encode {
    var bytes: number;
}
export declare function rsoa_decode(buf: any, offset: any): any;
export declare namespace rsoa_decode {
    var bytes: number;
}
export declare function rsoa_encodingLength(data: any): any;
export declare function rtxt_encode(data: any, buf: any, offset: any): any;
export declare namespace rtxt_encode {
    var bytes: number;
}
export declare function rtxt_decode(buf: any, offset: any): any[];
export declare namespace rtxt_decode {
    var bytes: number;
}
export declare function rtxt_encodingLength(data: any): number;
export declare function rnull_encode(data: any, buf: any, offset: any): any;
export declare namespace rnull_encode {
    var bytes: number;
}
export declare function rnull_decode(buf: any, offset: any): any;
export declare namespace rnull_decode {
    var bytes: number;
}
export declare function rnull_encodingLength(data: any): any;
export declare function rhinfo_encode(data: any, buf: any, offset: any): any;
export declare namespace rhinfo_encode {
    var bytes: number;
}
export declare function rhinfo_decode(buf: any, offset: any): any;
export declare namespace rhinfo_decode {
    var bytes: number;
}
export declare function rhinfo_encodingLength(data: any): any;
export declare function rptr_encode(data: any, buf: any, offset: any): any;
export declare namespace rptr_encode {
    var bytes: number;
}
export declare function rptr_decode(buf: any, offset: any): any;
export declare namespace rptr_decode {
    var bytes: number;
}
export declare function rptr_encodingLength(data: any): any;
export declare function rsrv_encode(data: any, buf: any, offset: any): any;
export declare namespace rsrv_encode {
    var bytes: number;
}
export declare function rsrv_decode(buf: any, offset: any): any;
export declare namespace rsrv_decode {
    var bytes: number;
}
export declare function rsrv_encodingLength(data: any): any;
export declare function rcaa_encode(data: any, buf: any, offset: any): any;
export declare namespace rcaa_encode {
    var bytes: number;
}
export declare function rcaa_decode(buf: any, offset: any): any;
export declare namespace rcaa_decode {
    var bytes: number;
}
export declare function rcaa_encodingLength(data: any): any;
export declare function rmx_encode(data: any, buf: any, offset: any): any;
export declare namespace rmx_encode {
    var bytes: number;
}
export declare function rmx_decode(buf: any, offset: any): any;
export declare namespace rmx_decode {
    var bytes: any;
}
export declare function rmx_encodingLength(data: any): any;
export declare function ra_encode(host: any, buf: any, offset: any): any;
export declare namespace ra_encode {
    var bytes: number;
}
export declare function ra_decode(buf: any, offset: any): any;
export declare namespace ra_decode {
    var bytes: number;
}
export declare function ra_encodingLength(_?: any): number;
export declare function raaaa_encode(host: any, buf: any, offset: any): any;
export declare namespace raaaa_encode {
    var bytes: number;
}
export declare function raaaa_decode(buf: any, offset: any): any;
export declare namespace raaaa_decode {
    var bytes: number;
}
export declare function raaaa_encodingLength(_?: any): number;
export declare function roption_encode(option: any, buf: any, offset: any): any;
export declare namespace roption_encode {
    var bytes: number;
}
export declare function roption_decode(buf: any, offset: any): any;
export declare namespace roption_decode {
    var bytes: number;
}
export declare function roption_encodingLength(option: any): any;
export declare function ropt_encode(options: any, buf: any, offset: any): any;
export declare namespace ropt_encode {
    var bytes: number;
}
export declare function ropt_decode(buf: any, offset: any): any[];
export declare namespace ropt_decode {
    var bytes: number;
}
export declare function ropt_encodingLength(options: any): number;
export declare function rdnskey_encode(key: any, buf: any, offset: any): any;
export declare namespace rdnskey_encode {
    var bytes: number;
}
export declare function rdnskey_decode(buf: any, offset: any): any;
export declare namespace rdnskey_decode {
    var bytes: number;
}
export declare function rdnskey_encodingLength(key: any): any;
export declare function rrrsig_encode(sig: any, buf: any, offset: any): any;
export declare namespace rrrsig_encode {
    var bytes: number;
}
export declare function rrrsig_decode(buf: any, offset: any): any;
export declare namespace rrrsig_decode {
    var bytes: number;
}
export declare function rrrsig_encodingLength(sig: any): any;
export declare function rrp_encode(data: any, buf: any, offset: any): any;
export declare namespace rrp_encode {
    var bytes: number;
}
export declare function rrp_decode(buf: any, offset: any): any;
export declare namespace rrp_decode {
    var bytes: number;
}
export declare function rrp_encodingLength(data: any): any;
export declare function typebitmap_encode(typelist: any, buf: any, offset: any): any;
export declare namespace typebitmap_encode {
    var bytes: number;
}
export declare function typebitmap_decode(buf: any, offset: any, length: any): any[];
export declare namespace typebitmap_decode {
    var bytes: number;
}
export declare function typebitmap_encodingLength(typelist: any): number;
export declare function rnsec_encode(record: any, buf: any, offset: any): any;
export declare namespace rnsec_encode {
    var bytes: number;
}
export declare function rnsec_decode(buf: any, offset: any): any;
export declare namespace rnsec_decode {
    var bytes: number;
}
export declare function rnsec_encodingLength(record: any): any;
export declare function rnsec3_encode(record: any, buf: any, offset: any): any;
export declare namespace rnsec3_encode {
    var bytes: number;
}
export declare function rnsec3_decode(buf: any, offset: any): any;
export declare namespace rnsec3_decode {
    var bytes: number;
}
export declare function rnsec3_encodingLength(record: any): any;
export declare function rds_encode(digest: any, buf: any, offset: any): any;
export declare namespace rds_encode {
    var bytes: number;
}
export declare function rds_decode(buf: any, offset: any): any;
export declare namespace rds_decode {
    var bytes: number;
}
export declare function rds_encodingLength(digest: any): any;
declare const renc: (type: any) => {
    encode: typeof rmx_encode;
    decode: typeof rmx_decode;
    encodingLength: typeof rmx_encodingLength;
} | {
    encode: typeof raaaa_encode;
    decode: typeof raaaa_decode;
    encodingLength: typeof raaaa_encodingLength;
};
export { renc as record };
export declare function answer_encode(a: any, buf: any, offset: any): any;
export declare namespace answer_encode {
    var bytes: number;
}
export declare function answer_decode(buf: any, offset: any): any;
export declare namespace answer_decode {
    var bytes: number;
}
export declare function answer_encodingLength(a: any): any;
export declare function question_encode(q: any, buf: any, offset: any): any;
export declare namespace question_encode {
    var bytes: number;
}
export declare function question_decode(buf: any, offset: any): any;
export declare namespace question_decode {
    var bytes: number;
}
export declare function question_encodingLength(q: any): any;
export declare const AUTHORITATIVE_ANSWER: number;
export declare const TRUNCATED_RESPONSE: number;
export declare const RECURSION_DESIRED: number;
export declare const RECURSION_AVAILABLE: number;
export declare const AUTHENTIC_DATA: number;
export declare const CHECKING_DISABLED: number;
export declare const DNSSEC_OK: number;
export declare function encode(result: any, buf?: any, offset?: any): any;
export declare namespace encode {
    var bytes: number;
}
export declare function decode(buf: any, offset?: any): {
    id: any;
    type: string;
    flags: number;
    flag_qr: boolean;
    opcode: string;
    flag_aa: boolean;
    flag_tc: boolean;
    flag_rd: boolean;
    flag_ra: boolean;
    flag_z: boolean;
    flag_ad: boolean;
    flag_cd: boolean;
    rcode: string;
    questions: any[];
    answers: any[];
    authorities: any[];
    additionals: any[];
};
export declare namespace decode {
    var bytes: number;
}
export declare function encodingLength(result: any): number;
export declare function streamEncode(result: any): any;
export declare namespace streamEncode {
    var bytes: number;
}
export declare function streamDecode(sbuf: any): {
    id: any;
    type: string;
    flags: number;
    flag_qr: boolean;
    opcode: string;
    flag_aa: boolean;
    flag_tc: boolean;
    flag_rd: boolean;
    flag_ra: boolean;
    flag_z: boolean;
    flag_ad: boolean;
    flag_cd: boolean;
    rcode: string;
    questions: any[];
    answers: any[];
    authorities: any[];
    additionals: any[];
};
export declare namespace streamDecode {
    var bytes: number;
}
export declare function encodingLengthList(list: any, enc: any): number;
export declare function encodeList(list: any, enc: any, buf: any, offset: any): any;
export declare function decodeList(list: any, enc: any, buf: any, offset: any): any;
declare const name: {
    encode: typeof name_encode;
    decode: typeof name_decode;
    encodingLength: typeof name_encodingLength;
};
export { name };
declare const string: {
    encode: typeof string_encode;
    decode: typeof string_decode;
    encodingLength: typeof string_encodingLength;
};
export { string };
declare const header: {
    encode: typeof header_encode;
    decode: typeof header_decode;
    encodingLength: typeof header_encodingLength;
};
export { header };
declare const runknown: {
    encode: typeof runknown_encode;
    decode: typeof runknown_decode;
    encodingLength: typeof runknown_encodingLength;
};
export { runknown as unknown };
declare const rns: {
    encode: typeof rns_encode;
    decode: typeof rns_decode;
    encodingLength: typeof rns_encodingLength;
};
export { rns as ns };
declare const rsoa: {
    encode: typeof rsoa_encode;
    decode: typeof rsoa_decode;
    encodingLength: typeof rsoa_encodingLength;
};
export { rsoa as soa };
declare const rtxt: {
    encode: typeof rtxt_encode;
    decode: typeof rtxt_decode;
    encodingLength: typeof rtxt_encodingLength;
};
export { rtxt as txt };
declare const rnull: {
    encode: typeof rnull_encode;
    decode: typeof rnull_decode;
    encodingLength: typeof rnull_encodingLength;
};
export { rnull as null };
declare const rhinfo: {
    encode: typeof rhinfo_encode;
    decode: typeof rhinfo_decode;
    encodingLength: typeof rhinfo_encodingLength;
};
export { rhinfo as hinfo };
declare const rptr: {
    encode: typeof rptr_encode;
    decode: typeof rptr_decode;
    encodingLength: typeof rptr_encodingLength;
};
export { rptr as ptr, rptr as cname, rptr as dname };
declare const rsrv: {
    encode: typeof rsrv_encode;
    decode: typeof rsrv_decode;
    encodingLength: typeof rsrv_encodingLength;
};
export { rsrv as srv };
declare const rcaa: {
    ISSUER_CRITICAL: number;
    encode: typeof rcaa_encode;
    decode: typeof rcaa_decode;
    encodingLength: typeof rcaa_encodingLength;
};
export { rcaa as caa };
declare const rmx: {
    encode: typeof rmx_encode;
    decode: typeof rmx_decode;
    encodingLength: typeof rmx_encodingLength;
};
export { rmx as mx };
declare const ra: {
    encode: typeof ra_encode;
    decode: typeof ra_decode;
    encodingLength: typeof ra_encodingLength;
};
export { ra as a };
declare const raaaa: {
    encode: typeof raaaa_encode;
    decode: typeof raaaa_decode;
    encodingLength: typeof raaaa_encodingLength;
};
export { raaaa as aaaa };
declare const roption: {
    encode: typeof roption_encode;
    decode: typeof roption_decode;
    encodingLength: typeof roption_encodingLength;
};
export { roption as option };
declare const ropt: {
    encode: typeof ropt_encode;
    decode: typeof ropt_decode;
    encodingLength: typeof ropt_encodingLength;
};
export { ropt as opt };
declare const rdnskey: {
    PROTOCOL_DNSSEC: number;
    ZONE_KEY: number;
    rSECURE_ENTRYPOINT: number;
    encode: typeof rdnskey_encode;
    decode: typeof rdnskey_decode;
    encodingLength: typeof rdnskey_encodingLength;
};
export { rdnskey as dnskey };
declare const rrrsig: {
    encode: typeof rrrsig_encode;
    decode: typeof rrrsig_decode;
    encodingLength: typeof rrrsig_encodingLength;
};
export { rrrsig as rrsig };
declare const rrp: {
    encode: typeof rrp_encode;
    decode: typeof rrp_decode;
    encodingLength: typeof rrp_encodingLength;
};
export { rrp as rp };
declare const typebitmap: {
    encode: typeof typebitmap_encode;
    decode: typeof typebitmap_decode;
    encodingLength: typeof typebitmap_encodingLength;
};
export { typebitmap };
declare const rnsec: {
    encode: typeof rnsec_encode;
    decode: typeof rnsec_decode;
    encodingLength: typeof rnsec_encodingLength;
};
export { rnsec as nsec };
declare const rnsec3: {
    encode: typeof rnsec3_encode;
    decode: typeof rnsec3_decode;
    encodingLength: typeof rnsec3_encodingLength;
};
export { rnsec3 as nsec3 };
declare const rds: {
    encode: typeof rds_encode;
    decode: typeof rds_decode;
    encodingLength: typeof rds_encodingLength;
};
export { rds as ds };
declare const answer: {
    encode: typeof answer_encode;
    decode: typeof answer_decode;
    encodingLength: typeof answer_encodingLength;
};
export { answer };
declare const question: {
    encode: typeof question_encode;
    decode: typeof question_decode;
    encodingLength: typeof question_encodingLength;
};
export { question };

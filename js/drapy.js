// import 'https://gitcode.net/qq_32394351/dr_py/-/raw/master/libs/es6py.js';
// import {鏄惁姝ｇ増,urlDeal,setResult,setResult2,setHomeResult,maoss,urlencode} from 'http://192.168.10.103:5705/libs/es6py.js';
// import 'http://192.168.1.124:5705/libs/es6py.js';
import cheerio from 'https://gitcode.net/qq_32394351/dr_py/-/raw/master/libs/cheerio.min.js';
// import cheerio from 'http://192.168.10.103:5705/libs/cheerio.min.js';
import 'https://gitcode.net/qq_32394351/dr_py/-/raw/master/libs/crypto-js.js';
import 'https://gitcode.net/qq_32394351/dr_py/-/raw/master/libs/drT.js';
// import 'http://192.168.10.103:5705/libs/drT.js';
// import muban from 'https://gitcode.net/qq_32394351/dr_py/-/raw/master/js/妯℃澘.js';
// import muban from 'http://192.168.10.103:5705/admin/view/妯℃澘.js';

// const key = 'drpy_zbk';
// eval(req('http://192.168.1.124:5705/libs/es6py.js').content);
function init_test(){
    // console.log(typeof(CryptoJS));
    console.log("init_test_start");
    console.log(RKEY);
    console.log(JSON.stringify(rule));
    // console.log('123456鐨刴d5鍊兼槸:'+md5('123456'));
    // let aa = base64Encode('缂栫爜娴嬭瘯涓€涓�')
    // log(aa);
    // let bb = base64Decode(aa);
    // log('bb:'+bb);
    // clearItem(RULE_CK);
    // console.log(JSON.stringify(rule));
    // console.log(request('https://www.baidu.com',{withHeaders:true}));
    // console.log(request('https://www.baidu.com/favicon.ico',{toBase64:true}));
    // require('http://192.168.10.99:5705/txt/pluto/drT.js');
    // console.log(typeof(drT));
    // console.log(drT.renderText('{{fl.cate}},hi, {{fl}}鍝堝搱.{{fl}}',{sort: 1,cate:'movie'},'fl'));
    console.log("init_test_end");
}

let rule = {};
/** 宸茬煡闂璁板綍
 * 1.褰遍瓟鐨刯injia2寮曟搸涓嶆敮鎸� {{fl}}瀵硅薄鐩存帴娓叉煋 (鏈夎兘鍔涜В鍐崇殑璇濆敖閲忚В鍐充笅锛屾敮鎸佸璞＄洿鎺ユ覆鏌撳瓧绗︿覆杞箟,濡傛灉鍔犱簡|safe灏变笉杞箟)[褰遍瓟鐗涢€硷紝鏈€鏂扮殑鏂囦欢鍙戠幇杩欓棶棰樺凡缁忚В鍐充簡]
 * Array.prototype.append = Array.prototype.push; 杩欑js鎵ц鍚庢湁姣涚梾,for in 寰幆鍒楄〃浼氭妸灞炴€х粰鎵撳嵃鍑烘潵 (杩欎釜澶ф瘺鐥呴渶瑕侀噸鐐规帓闄や竴涓�)
 * 2.import es6py.js浣嗘槸閲岄潰鐨勫嚱鏁版病鏈夎瑁呰浇杩涙潵.姣斿drpy瑙勫垯鎶ラ敊setResult2 is undefiend(鍚堝苟鏂囦欢浜嗗彲浠ヤ笉绠′簡)
 * 3.鏃犳硶閲嶅瀵煎叆cheerio(鎬庝箞瑙ｅ喅drpy鍜宲arseTag閲岄兘闇€瑕佸鍏heerio鐨勯棶棰�) 鏃犳硶鍦ㄥ壇鏂囦欢瀵煎叆cheerio (鐜板湪鏄叏閮ㄦ斁鍦╠rpy涓€涓枃浠堕噷浜�,鍑戝悎瑙ｅ喅?)
 * 4.鏈変釜閿欒涓嶇煡閬撳摢鍎挎潵鐨� executeScript: com.quickjs.JSObject$Undefined cannot be cast to java.lang.String 鍦� 鐐瑰嚮閫夐泦鎾斁鎵撳嵃init_test_end鍚庨潰鎵撳嵃(璨屼技涓嶅奖鍝嶄娇鐢�)
 * 5.闇€瑕佸疄鐜� stringify 鍑芥暟,姣旇捣JSON.stringify鍑芥暟,瀹冧細鍘熷皝涓嶅姩淇濈暀涓枃涓嶄細缂栫爜unicode
 * 6.base64Encode,base64Decode,md5鍑芥暟杩樻病鏈夊疄鐜� (鎶勫奖榄斾唬鐮佸疄鐜颁簡)
 * 7.eval(getCryptoJS());杩樻病鏈夊疄鐜� (鍙互绌哄疄鐜颁簡,浠ュ悗閬囧埌鑳藉拷鐣�)
 * done:  jsp:{pdfa,pdfh,pd},json:{pdfa,pdfh,pd},jq:{pdfa,pdfh,pd}
 *  * 鐢佃剳鐪嬫棩蹇楄皟璇�
 adb tcpip 5555
 adb connect 192.168.10.192
 adb devices -l
 adb logcat -c
 adb logcat | grep -i QuickJS
 * **/


/*** 浠ヤ笅鏄唴缃彉閲忓拰瑙ｆ瀽鏂规硶 **/
const MOBILE_UA = 'Mozilla/5.0 (Linux; Android 11; M2007J3SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045714 Mobile Safari/537.36';
const PC_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36';
const UA = 'Mozilla/5.0';
const UC_UA = 'Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI 9 Build/PKQ1.181121.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.5.5.1035 Mobile Safari/537.36';
const IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const RULE_CK = 'cookie'; // 婧恈ookie鐨刱ey鍊�
// const KEY = typeof(key)!=='undefined'&&key?key:'drpy_' + (rule.title || rule.host); // 婧愮殑鍞竴鏍囪瘑
const CATE_EXCLUDE = '棣栭〉|鐣欒█|APP|涓嬭浇|璧勮|鏂伴椈|鍔ㄦ€�';
const TAB_EXCLUDE = '鐚滀綘|鍠滄|APP|涓嬭浇|鍓ф儏|鐑挱';
const OCR_RETRY = 3;//ocr楠岃瘉閲嶈瘯娆℃暟
// const OCR_API = 'http://dm.mudery.com:10000';//ocr鍦ㄧ嚎璇嗗埆鎺ュ彛
// const OCR_API = 'http://192.168.3.239:5705/parse/ocr';//ocr鍦ㄧ嚎璇嗗埆鎺ュ彛
const OCR_API = 'http://cms.nokia.press/parse/ocr';//ocr鍦ㄧ嚎璇嗗埆鎺ュ彛
if(typeof(MY_URL)==='undefined'){
    var MY_URL; // 鍏ㄥ眬娉ㄥ叆鍙橀噺,pd鍑芥暟闇€瑕�
}
var RKEY; // 婧愮殑鍞竴鏍囪瘑
var fetch;
var print;
var log;
var rule_fetch_params;
var fetch_params; // 姣忎釜浣嶇疆鍗曠嫭鐨�
var oheaders;
var _pdfh;
var _pdfa;
var _pd;
// const DOM_CHECK_ATTR = ['url', 'src', 'href', 'data-original', 'data-src'];
const DOM_CHECK_ATTR = /(url|src|href|data-original|data-src)$/;
const SELECT_REGEX = /:eq|:lt|:gt|#/g;
const SELECT_REGEX_A = /:eq|:lt|:gt/g;

/**
es6py鎵╁睍
 */
if (typeof Object.assign != 'function') {
    Object.assign = function () {
        var target = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
}
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (searchElement, fromIndex) {

            if (this == null) {//this鏄┖鎴栬€呮湭瀹氫箟锛屾姏鍑洪敊璇�
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);//灏唗his杞彉鎴愬璞�
            var len = o.length >>> 0;//鏃犵鍙峰彸绉�0浣嶏紝鑾峰彇瀵硅薄length灞炴€э紝濡傛灉鏈畾涔夊氨浼氬彉鎴�0

            if (len === 0) {//length涓�0鐩存帴杩斿洖false鏈壘鍒扮洰鏍囧€�
                return false;
            }

            var n = fromIndex | 0;//鏌ユ壘璧峰绱㈠紩
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);//璁＄畻姝ｇ‘璧峰绱㈠紩锛屽洜涓烘湁鍙兘鏄礋鍊�

            while (k < len) {//浠庤捣濮嬬储寮曞寮€濮嬪惊鐜�
                if (o[k] === searchElement) {//濡傛灉鏌愪竴浣嶇疆涓庡鎵剧洰鏍囩浉绛夛紝杩斿洖true锛屾壘鍒颁簡
                    return true;
                }
                k++;
            }
            return false;//鏈壘鍒帮紝杩斿洖false
        }
    });
}
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (prefix){
        return this.slice(0, prefix.length) === prefix;
    };
}
if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}
Object.prototype.myValues=function(obj){
    if(obj ==null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }
    var res=[]
    for(var k in obj){
        if(obj.hasOwnProperty(k)){//闇€鍒ゆ柇鏄惁鏄湰韬殑灞炴€�
            res.push(obj[k]);
        }
    }
    return res;
}
if (typeof Object.prototype.values != 'function') {
    Object.prototype.values=function(obj){
        if(obj ==null) {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        var res=[]
        for(var k in obj){
            if(obj.hasOwnProperty(k)){//闇€鍒ゆ柇鏄惁鏄湰韬殑灞炴€�
                res.push(obj[k]);
            }
        }
        return res;
    }
}
if (typeof Array.prototype.join != 'function') {
    Array.prototype.join = function (emoji) {
        // emoji = emoji||',';
        emoji = emoji||'';
        let self = this;
        let str = "";
        let i = 0;
        if (!Array.isArray(self)) {throw String(self)+'is not Array'}
        if(self.length===0){return ''}
        if (self.length === 1){return String(self[0])}
        i = 1;
        str = this[0];
        for (; i < self.length; i++) {
            str += String(emoji)+String(self[i]);
        }
        return str;
    };
}

String.prototype.rstrip = function (chars) {
    let regex = new RegExp(chars + "$");
    return this.replace(regex, "");
};

Array.prototype.append = Array.prototype.push;
String.prototype.strip = String.prototype.trim;
function 鏄惁姝ｇ増(vipUrl){
    let flag = new RegExp('qq\.com|iqiyi\.com|youku\.com|mgtv\.com|bilibili\.com|sohu\.com|ixigua\.com|pptv\.com|miguvideo\.com|le\.com|1905\.com|fun\.tv');
    return  flag.test(vipUrl);
}
function urlDeal(vipUrl){
    if(!vipUrl){
        return ''
    }
    if(!鏄惁姝ｇ増(vipUrl)){
        return vipUrl
    }
    if(!/miguvideo/.test(vipUrl)){
        vipUrl=vipUrl.split('#')[0].split('?')[0];
    }
    return vipUrl
}
function setResult(d){
    if(!Array.isArray(d)){
        return []
    }
    VODS = [];
    // print(d);
    d.forEach(function (it){
        let obj = {
            vod_id:it.url||'',
            vod_name: it.title||'',
            vod_remarks: it.desc||'',
            vod_content: it.content||'',
            vod_pic: it.pic_url||it.img||'',
        };
        let keys = Object.keys(it);
        if(keys.includes('tname')){
            obj.type_name = it.tname||'';
        }
        if(keys.includes('tid')){
            obj.type_id = it.tid||'';
        }
        if(keys.includes('year')){
            obj.vod_year = it.year||'';
        }
        if(keys.includes('actor')){
            obj.vod_actor = it.actor||'';
        }
        if(keys.includes('director')){
            obj.vod_director = it.director||'';
        }
        if(keys.includes('area')){
            obj.vod_area = it.area||'';
        }
        VODS.push(obj);
    });
    return VODS
}
function setResult2(res){
    VODS = res.list||[];
    return VODS
}
function setHomeResult(res){
    if(!res||typeof(res)!=='object'){
        return []
    }
    return setResult(res.list);
}
// 鐚簡涓挭
function rc(js) {
    if (js === 'maomi_aes.js') {
        var a = CryptoJS.enc.Utf8.parse("625222f9149e961d");
        var t = CryptoJS.enc.Utf8.parse("5efdtf6060e2o330");
        return {
            De: function (word) {
                word = CryptoJS.enc.Hex.parse(word)
                return CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(word), a, {
                    iv: t,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }).toString(CryptoJS.enc.Utf8)
            },
            En: function (word) {
                // print(a);
                // print(word);
                var Encrypted = CryptoJS.AES.encrypt(word, a, {
                    iv: t,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                });
                return Encrypted.ciphertext.toString();
            }
        };
    }
    return {};
}

// 鍗冧竾涓嶈鐢╢or in 鎺ㄨ崘 forEach (for in 浼氭墦涔遍『搴�)
//鐚嚱鏁�
function maoss(jxurl, ref, key) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    eval(getCryptoJS());
    try {
        var getVideoInfo = function (text) {
            return CryptoJS.AES.decrypt(text, key, {iv: iv, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
        };
        var token_key = key == undefined ? 'dvyYRQlnPRCMdQSe' : key;
        if (ref) {
            var html = request(jxurl, {
                headers: {
                    'Referer': ref
                }
            });
        } else {
            var html = request(jxurl);
        }
        // print(html);
        if (html.indexOf('&btwaf=') != -1) {
            html = request(jxurl + '&btwaf' + html.match(/&btwaf(.*?)"/)[1], {
                headers: {
                    'Referer': ref
                }
            })
        }
        var token_iv = html.split('_token = "')[1].split('"')[0];
        var key = CryptoJS.enc.Utf8.parse(token_key);
        var iv = CryptoJS.enc.Utf8.parse(token_iv);
        // log("iv:"+iv);
        //  log(html);
        // print(key);
        // print(iv);
        eval(html.match(/var config = {[\s\S]*?}/)[0] + '');
        // config.url = config.url.replace(/,/g,'');
        // print(config.url);
        if (!config.url.startsWith('http')) {
            //config.url = decodeURIComponent(AES(config.url, key, iv));
            config.url = CryptoJS.AES.decrypt(config.url, key, {
                iv: iv,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8)
        }
        return config.url;
    } catch (e) {
        return '';
    }
}

function urlencode (str) {
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

function base64Encode(text){
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
    // return text
}

function base64Decode(text){
    return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(text));
    // return text
}

function md5(text) {
    return CryptoJS.MD5(text).toString();
}

function getCryptoJS(){
    // return request('https://gitcode.net/qq_32394351/dr_py/-/raw/master/libs/crypto-hiker.js');
    return 'console.log("CryptoJS宸茶杞�");'
}

let VODS = [];// 涓€绾ф垨鑰呮悳绱㈤渶瑕佺殑鏁版嵁鍒楄〃
let VOD = {};// 浜岀骇鐨勫崟涓暟鎹�
globalThis.encodeUrl = urlencode;
globalThis.urlencode = urlencode;



/**
 *  url鎷兼帴
 * @param fromPath 鍒濆褰撳墠椤甸潰url
 * @param nowPath 鐩稿褰撳墠椤甸潰url
 * @returns {*}
 */
function urljoin(fromPath, nowPath) {
    fromPath = fromPath||'';
    nowPath = nowPath||'';
    return joinUrl(fromPath, nowPath);
    // try {
    //     // import Uri from './uri.min.js';
    //     // var Uri = require('./uri.min.js');
    //     // eval(request('https://cdn.bootcdn.net/ajax/libs/URI.js/1.19.11/URI.min.js'));
    //     // let new_uri = URI(nowPath, fromPath);

    //     let new_uri = Uri(nowPath, fromPath);
    //     new_uri = new_uri.toString();
    //     // console.log(new_uri);
    //     // return fromPath + nowPath
    //     return new_uri
    // }
    // catch (e) {
    //     console.log('urljoin鍙戠敓閿欒:'+e.message);
    //     if(nowPath.startsWith('http')){
    //         return nowPath
    //     }if(nowPath.startsWith('/')){
    //         return getHome(fromPath)+nowPath
    //     }
    //     return fromPath+nowPath
    // }
}
var urljoin2 = urljoin;

// 鍐呯疆 pdfh,pdfa,pd
const defaultParser = {
    pdfh:pdfh,
    pdfa:pdfa,
    pd(html,parse,uri){
        let ret = this.pdfh(html,parse);
        if(typeof(uri)==='undefined'||!uri){
            uri = '';
        }
        if(DOM_CHECK_ATTR.test(parse)){
            if(/http/.test(ret)){
                ret = ret.substr(ret.indexOf('http'));
            }else{
                ret = urljoin(MY_URL,ret)
            }
        }
        return ret
    },
};


/**
 *  pdfh鍘熺増浼樺寲,鑳藉彇style灞炴€ч噷鐨勫浘鐗囬摼鎺�
 * @param html 婧愮爜
 * @param parse 瑙ｆ瀽琛ㄨ揪寮�
 * @returns {string|*}
 */
function pdfh2(html,parse){
    let result = defaultParser.pdfh(html,parse);
    let option = parse.includes('&&')?parse.split('&&').slice(-1)[0]:parse.split(' ').slice(-1)[0];
    if(/style/.test(option.toLowerCase())&&/url\(/.test(result)){
        try {
            result =  result.match(/url\((.*?)\)/)[1];
        }catch (e) {}
    }
    return result
}

/**
 * pd鍘熺増鏂规硶閲嶅啓-澧炲姞鑷姩urljoin
 * @param html
 * @param parse
 * @param uri
 * @returns {*}
 */
function pd2(html,parse,uri){
    let ret = pdfh2(html,parse);
    if(typeof(uri)==='undefined'||!uri){
        uri = '';
    }
    if(DOM_CHECK_ATTR.test(parse)){
        if(/http/.test(ret)){
            ret = ret.substr(ret.indexOf('http'));
        }else{
            ret = urljoin(MY_URL,ret)
        }
    }
    // MY_URL = getItem('MY_URL',MY_URL);
    // console.log(`瑙勫垯${RKEY}鎵撳嵃MY_URL:${MY_URL},uri:${uri}`);
    return ret
}

const parseTags = {
    jsp:{
        pdfh:pdfh2,
        pdfa:defaultParser.pdfa,
        pd:pd2,
    },
    json:{
        pdfh(html, parse) {
            if (!parse || !parse.trim()){
                return '';
            }
            if (typeof(html) === 'string'){
                // print('jsonpath:pdfh瀛楃涓茶浆dict');
                html = JSON.parse(html);
            }
            parse = parse.trim();
            if (!parse.startsWith('$.')){
                parse = '$.' + parse;
            }
            parse = parse.split('||');
            for (let ps of parse) {
                let ret = cheerio.jp(ps, html);
                if (Array.isArray(ret)){
                    ret = ret[0] || '';
                } else{
                    ret = ret || ''
                }
                if (ret && typeof (ret) !== 'string'){
                    ret = ret.toString();
                }
                if(ret){
                    return ret
                }
            }
            return '';
        },
        pdfa(html, parse) {
            if (!parse || !parse.trim()){
                return '';
            }
            if (typeof(html) === 'string'){
                // print('jsonpath:pdfa瀛楃涓茶浆dict');
                html = JSON.parse(html);
            }
            parse = parse.trim()
            if (!parse.startsWith('$.')){
                parse = '$.' + parse;
            }
            let ret = cheerio.jp(parse, html);
            if (Array.isArray(ret) && Array.isArray(ret[0]) && ret.length === 1){
                return ret[0] || []
            }
            return ret || []
        },
        pd(html,parse){
            let ret = parseTags.json.pdfh(html,parse);
            if(ret){
                return urljoin(MY_URL,ret);
            }
            return ret
        },
    },
    jq:{
        pdfh(html, parse, base_url) {
            if (!parse || !parse.trim()) {
                return ''
            }
            let eleFind = typeof html === 'object';
            let option = undefined;
            if (eleFind && parse.startsWith('body&&')) {
                parse = parse.substr(6);
                if (parse.indexOf('&&') < 0) {
                    option = parse.trim();
                    parse = '*=*';
                }
            }
            if (parse.indexOf('&&') > -1) {
                let sp = parse.split('&&');
                option = sp[sp.length - 1];
                sp.splice(sp.length - 1);
                if (sp.length > 1) {
                    for (let i in sp) {
                        if (!SELECT_REGEX.test(sp[i])) {
                            sp[i] = sp[i] + ':eq(0)';
                        }
                    }
                } else {
                    if (!SELECT_REGEX.test(sp[0])) {
                        sp[0] = sp[0] + ':eq(0)';
                    }
                }
                parse = sp.join(' ');
            }
            let result = '';
            const $ = eleFind ? html.rr : cheerio.load(html);
            let ret = eleFind ? ((parse === '*=*' || $(html.ele).is(parse)) ? html.ele : $(html.ele).find(parse)) : $(parse);
            if (option) {
                if (option === 'Text') {
                    result = $(ret).text();
                }
                else if (option === 'Html') {
                    result = $(ret).html();
                }
                else {
                    result = $(ret).attr(option);
                    if(/style/.test(option.toLowerCase())&&/url\(/.test(result)){
                        try {
                            result =  result.match(/url\((.*?)\)/)[1];
                        }catch (e) {}
                    }
                }
                if (result && base_url && DOM_CHECK_ATTR.test(option)) {
                    if (/http/.test(result)) {
                        result = result.substr(result.indexOf('http'));
                    } else {
                        result = urljoin(base_url, result)
                    }
                }
            } else {
                result = $(ret).toString();
            }
            return result;
        },
        pdfa(html, parse) {
            if (!parse || !parse.trim()) {
                return [];
            }
            let eleFind = typeof html === 'object';
            if (parse.indexOf('&&') > -1) {
                let sp = parse.split('&&');
                for (let i in sp) {
                    if (!SELECT_REGEX_A.test(sp[i]) && i < sp.length - 1) {
                        sp[i] = sp[i] + ':eq(0)';
                    }
                }
                parse = sp.join(' ');
            }
            const $ = eleFind ? html.rr : cheerio.load(html);
            let ret = eleFind ? ($(html.ele).is(parse) ? html.ele : $(html.ele).find(parse)) : $(parse);
            let result = [];
            if (ret) {
                ret.each(function (idx, ele) {
                    result.push({ rr: $, ele: ele });
                });
            }
            return result;
        },
        pd(html,parse,uri){
            return parseTags.jq.pdfh(html, parse, MY_URL);
        },
    },
    getParse(p0){//闈瀓s寮€澶寸殑鎯呭喌鑷姩鑾峰彇瑙ｆ瀽鏍囩
        if(p0.startsWith('jsp:')){
            return this.jsp
        }else if(p0.startsWith('json:')){
            return this.json
        }else if(p0.startsWith('jq:')){
            return this.jq
        }else {
            return this.jq
        }
    }
};

const stringify = JSON.stringify;
const jsp = parseTags.jsp;
const jq = parseTags.jq;

/*** 鍚庡彴闇€瑕佸疄鐜扮殑java鏂规硶骞舵敞鍏ュ埌js涓� ***/

/**
 * 璇诲彇鏈湴鏂囦欢->搴旂敤绋嬪簭鐩綍
 * @param filePath
 * @returns {string}
 */
function readFile(filePath){
    filePath = filePath||'./uri.min.js';
    var fd = os.open(filePath);
    var buffer = new ArrayBuffer(1024);
    var len = os.read(fd, buffer, 0, 1024);
    console.log(len);
    let text = String.fromCharCode.apply(null, new Uint8Array(buffer));
    console.log(text);
    return text
}

/**
 * 澶勭悊杩斿洖鐨刯son鏁版嵁
 * @param html
 * @returns {*}
 */
function dealJson(html) {
    try {
        // html = html.match(/[\w|\W|\s|\S]*?(\{[\w|\W|\s|\S]*\})/).group[1];
        html = '{'+html.match(/.*?\{(.*)\}/)[1]+'}';
    } catch (e) {
    }
    try {
        html = JSON.parse(html);
    }catch (e) {}
    // console.log(typeof(html));
    return html;
}

/**
 * 楠岃瘉鐮佽瘑鍒€昏緫,闇€瑕乯ava瀹炵幇(js娌℃湁bytes绫诲瀷,鏃犳硶璋冪敤鍚庣鐨勪紶閫掑浘鐗囦簩杩涘埗鑾峰彇楠岃瘉鐮佹枃鏈殑鎺ュ彛)
 * @type {{api: string, classification: (function(*=): string)}}
 */
var OcrApi={
    api:OCR_API,
    classification:function (img){ // img鏄痓yte绫诲瀷,杩欓噷涓嶆柟渚挎悶鍟�
        let code = '';
        try {
            let html = request(this.api,{data:{img:img},headers:{'User-Agent':PC_UA},'method':'POST'});
            html = JSON.parse(html);
            code = html.url||'';
        }catch (e) {}
        return code
    }
};
/**
 * 楠岃瘉鐮佽瘑鍒�,鏆傛湭瀹炵幇
 * @param url 楠岃瘉鐮佸浘鐗囬摼鎺�
 * @returns {string} 楠岃瘉鎴愬姛鍚庣殑cookie
 */
function verifyCode(url){
    let cnt = 0;
    let host = getHome(url);
    let cookie = '';
    while (cnt < OCR_RETRY){
        try{
            // let obj = {headers:headers,timeout:timeout};
            let yzm_url = `${host}/index.php/verify/index.html`;
            console.log(`楠岃瘉鐮侀摼鎺�:${yzm_url}`);
            let hhtml = request(yzm_url,{withHeaders:true,toBase64:true});
            let json = JSON.parse(hhtml);
            if(!cookie){
                cookie = json['set-cookie']?json['set-cookie'].split(';')[0]:'';
            }
            // console.log(hhtml);
            console.log('cookie:'+cookie);
            let img = json.body;
            // console.log(img);
            let code = OcrApi.classification(img);
            console.log(`绗�${cnt+1}娆￠獙璇佺爜璇嗗埆缁撴灉:${code}`);
            let submit_url = `${host}/index.php/ajax/verify_check?type=search&verify=${code}`;
            console.log(submit_url);
            let html = request(submit_url,{headers:{Cookie:cookie,'User-Agent':MOBILE_UA},'method':'POST'});
            // console.log(html);
            html = JSON.parse(html);
            if(html.msg === 'ok'){
                console.log(`绗�${cnt+1}娆￠獙璇佺爜鎻愪氦鎴愬姛`);
                return cookie // 闇€瑕佽繑鍥瀋ookie
            }else if(html.msg!=='ok'&&cnt+1>=OCR_RETRY){
                cookie = ''; // 闇€瑕佹竻绌鸿繑鍥瀋ookie
            }
        }catch (e) {
            console.log(`绗�${cnt+1}娆￠獙璇佺爜鎻愪氦澶辫触:${e.message}`);
            if(cnt+1>=OCR_RETRY){
                cookie = '';
            }
        }
        cnt+=1
    }
    return cookie
}

/**
 * 瀛樺湪鏁版嵁搴撻厤缃〃閲�, key瀛楁瀵瑰簲鍊紇alue,娌℃湁灏辨柊澧�,鏈夊氨鏇存柊,璋冪敤姝ゆ柟娉曚細娓呴櫎key瀵瑰簲鐨勫唴瀛樼紦瀛�
 * @param k 閿�
 * @param v 鍊�
 */
function setItem(k,v){
    local.set(RKEY,k,v);
    console.log(`瑙勫垯${RKEY}璁剧疆${k} => ${v}`)
}

/**
 *  鑾峰彇鏁版嵁搴撻厤缃〃瀵瑰簲鐨刱ey瀛楁鐨剉alue锛屾病鏈夎繖涓猭ey灏辫繑鍥瀡alue榛樿浼犲弬.闇€瑕佹湁缂撳瓨,绗竴娆¤幏鍙栧悗浼氬瓨鍦ㄥ唴瀛橀噷
 * @param k 閿�
 * @param v 鍊�
 * @returns {*}
 */
function getItem(k,v){
    return local.get(RKEY,k) || v;
}

/**
 *  鍒犻櫎鏁版嵁搴搆ey瀵瑰簲鐨勪竴鏉℃暟鎹�,骞舵竻闄ゆkey瀵瑰簲鐨勫唴瀛樼紦瀛�
 * @param k
 */
function clearItem(k){
    local.delete(RKEY,k);
}

/*** js鑷皝瑁呯殑鏂规硶 ***/

/**
 * 鑾峰彇閾炬帴鐨刪ost(甯ttp鍗忚鐨勫畬鏁撮摼鎺�)
 * @param url 浠绘剰涓€涓甯稿畬鏁寸殑Url,鑷姩鎻愬彇鏍�
 * @returns {string}
 */
function getHome(url){
    if(!url){
        return ''
    }
    let tmp = url.split('//');
    url = tmp[0] + '//' + tmp[1].split('/')[0];
    try {
        url = decodeURIComponent(url);
    }catch (e) {}
    return url
}

/**
 * get鍙傛暟缂栬瘧閾炬帴,绫讳技python params瀛楀吀鑷姩鎷兼帴
 * @param url 璁块棶閾炬帴
 * @param obj 鍙傛暟瀛楀吀
 * @returns {*}
 */
function buildUrl(url,obj){
    obj = obj||{};
    if(url.indexOf('?')<0){
        url += '?'
    }
    let param_list = [];
    let keys = Object.keys(obj);
    keys.forEach(it=>{
        param_list.push(it+'='+obj[it])
    });
    let prs = param_list.join('&');
    if(keys.length > 0 && !url.endsWith('?')){
        url += '&'
    }
    url+=prs;
    return url
}

/**
 * 杩滅▼渚濊禆鎵ц鍑芥暟
 * @param url 杩滅▼js鍦板潃
 */
function require(url){
    eval(request(url));
}
/**
 * 娴烽様缃戦〉璇锋眰鍑芥暟瀹屾暣灏佽
 * @param url 璇锋眰閾炬帴
 * @param obj 璇锋眰瀵硅薄 {headers:{},method:'',timeout:5000,body:'',withHeaders:false}
 * @returns {string|string|DocumentFragment|*}
 */
function request(url,obj){
    if(typeof(obj)==='undefined'||!obj||obj==={}){
        if(!fetch_params||!fetch_params.headers){
            let headers = {
                'User-Agent':MOBILE_UA,
            };
            if(rule.headers){
                Object.assign(headers,rule.headers);
            }
            fetch_params.headers = headers;
        }
        if(!fetch_params.headers.Referer){
            fetch_params.headers.Referer = getHome(url)
        }
        obj = fetch_params;
    }else{
        let headers = obj.headers||{};
        let keys = Object.keys(headers).map(it=>it.toLowerCase());
        if(!keys.includes('user-agent')){
            headers['User-Agent'] = MOBILE_UA;
        }if(!keys.includes('referer')){
            headers['Referer'] = getHome(url);
        }
        obj.headers = headers;
    }
    if(rule.encoding&&rule.encoding!=='utf-8'){
        obj.headers["Content-Type"] = 'text/html; charset='+rule.encoding;
    }
    if(typeof(obj.headers.body)!='undefined'&&obj.headers.body&&typeof (obj.headers.body)==='string'){
        let data = {};
        obj.headers.body.split('&').forEach(it=>{
            data[it.split('=')[0]] = it.split('=')[1]
        });
        obj.data = data;
        delete obj.headers.body
    }
    if(!url){
        return obj.withHeaders?'{}':''
    }
    if(obj.toBase64){ // 杩斿洖base64,鐢ㄤ簬璇锋眰鍥剧墖
        obj.buffer = 2;
        delete obj.toBase64
    }
    console.log(JSON.stringify(obj.headers));
    // console.log('request:'+url+' obj:'+JSON.stringify(obj));
    console.log('request:'+url);
    let res = req(url, obj);
    let html = res.content||'';
    // console.log(html);
    if(obj.withHeaders){
        let htmlWithHeaders = res.headers;
        htmlWithHeaders.body = html;
        return JSON.stringify(htmlWithHeaders);
    }else{
        return html
    }
}

fetch = request;
print = function (data){
    data = data||'';
    if(typeof(data)!=='string'){
        try {
            data = JSON.stringify(data);
        }catch (e) {
            console.log('print:'+e.message)
        }
    }
    console.log(data);
}
log = print;
/**
 * 妫€鏌ュ疂濉旈獙璇佸苟鑷姩璺宠繃鑾峰彇姝ｇ‘婧愮爜
 * @param html 涔嬪墠鑾峰彇鐨刪tml
 * @param url 涔嬪墠鐨勬潵婧恥rl
 * @param obj 鏉ユ簮obj
 * @returns {string|DocumentFragment|*}
 */
function checkHtml(html,url,obj){
    if(/\?btwaf=/.test(html)){
        let btwaf = html.match(/btwaf(.*?)"/)[1];
        url = url.split('#')[0]+'?btwaf'+btwaf;
        html = request(url,obj);
    }
    return html
}

/**
 *  甯︿竴娆″疂濉旈獙璇佺殑婧愮爜鑾峰彇
 * @param url 璇锋眰閾炬帴
 * @param obj 璇锋眰鍙傛暟
 * @returns {string|DocumentFragment}
 */
function getCode(url,obj){
    let html = request(url,obj);
    html = checkHtml(html,url,obj);
    return html
}

/**
 * 婧恟ule涓撶敤鐨勮姹傛柟娉�,鑷姩娉ㄥ叆cookie
 * @param url 璇锋眰閾炬帴
 * @returns {string|DocumentFragment}
 */
function getHtml(url){
    let obj = {};
    if(rule.headers){
        obj.headers = rule.headers;
    }
    let cookie = getItem(RULE_CK,'');
    if(cookie){
        if(obj.headers && ! Object.keys(obj.headers).map(it=>it.toLowerCase()).includes('cookie')){
            obj.headers['Cookie'] = cookie;
        }else if(!obj.headers){
            obj.headers = {Cookie:cookie};
        }
    }
    let html = getCode(url,obj);
    return html
}

/**
 * 棣栭〉鍒嗙被瑙ｆ瀽锛岀瓫閫夋殏鏈疄鐜�
 * @param homeObj 棣栭〉浼犲弬瀵硅薄
 * @returns {string}
 */
function homeParse(homeObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let classes = [];
    if (homeObj.class_name && homeObj.class_url) {
        let names = homeObj.class_name.split('&');
        let urls = homeObj.class_url.split('&');
        let cnt = Math.min(names.length, urls.length);
        for (let i = 0; i < cnt; i++) {
            classes.push({
                'type_id': urls[i],
                'type_name': names[i]
            });
        }
    }

    if (homeObj.class_parse) {
        let p = homeObj.class_parse.split(';');
        let _ps = parseTags.getParse(p[0]);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        MY_URL = rule.url;
        if (p.length >= 3) { // 鍙互涓嶅啓姝ｅ垯
            try {
                let html = getHtml(homeObj.MY_URL);
                if (html) {
                    homeHtmlCache = html;
                    let list = _pdfa(html, p[0]);
                    if (list && list.length > 0) {
                        list.forEach((it,idex) => {
                            try {
                                let name = _pdfh(it, p[1]);
                                if (homeObj.cate_exclude && (new RegExp(homeObj.cate_exclude).test(name))) {
                                    return;
                                }
                                // let url = pdfh(it, p[2]);
                                let url = _pd(it, p[2]);
                                if (p.length > 3 && p[3]) {
                                    let exp = new RegExp(p[3]);
                                    url = url.match(exp)[1];
                                }

                                classes.push({
                                    'type_id': url.trim(),
                                    'type_name': name.trim()
                                });
                            } catch (e) {
                                console.log(`鍒嗙被鍒楄〃瀹氫綅绗�${idex}涓厓绱犳甯告姤閿�:${e.message}`);
                            }
                        });
                    }
                }
            } catch (e) {
                console.log(e.message);
            }

        }
    }
    // 鎺掗櫎鍒嗙被
    classes = classes.filter(it=>!homeObj.cate_exclude || !(new RegExp(homeObj.cate_exclude).test(it.type_name)));
    let resp = {
        'class': classes
    };
    if(homeObj.filter){
        resp.filters = homeObj.filter;
    }
    console.log(JSON.stringify(resp));
    return JSON.stringify(resp);

}

/**
 *  棣栭〉鎺ㄨ崘鍒楄〃瑙ｆ瀽
 * @param homeVodObj
 * @returns {string}
 */
function homeVodParse(homeVodObj){
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let d = [];
    MY_URL = homeVodObj.homeUrl;
    // setItem('MY_URL',MY_URL);
    console.log(MY_URL);
    let p = homeVodObj.鎺ㄨ崘;
    if(p==='*' && rule.涓€绾�){
        p = rule.涓€绾�;
        homeVodObj.double = false;
    }
    if(!p||typeof(p)!=='string'){
        return '{}'
    }
    p = p.trim();
    if(p.startsWith('js:')){
        const TYPE = 'home';
        var input = MY_URL;
        const HOST = rule.host;
        eval(p.replace('js:',''));
        d = VODS;
    }else {
        p = p.split(';');
        if (!homeVodObj.double && p.length < 5) {
            return '{}'
        } else if (homeVodObj.double && p.length < 6) {
            return '{}'
        }
        let _ps = parseTags.getParse(p[0]);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p[0].startsWith('json:');
        p[0] = p[0].replace(/^(jsp:|json:|jq:)/,'');
        // print(p[0]);
        let html = homeHtmlCache || getHtml(MY_URL);
        homeHtmlCache = undefined;
        if(is_json){
            // print('鏄痡son,寮€濮嬪鐞�');
            html = dealJson(html);
        }
        try {
            console.log('double:' + homeVodObj.double);
            if (homeVodObj.double) {
                let items = _pdfa(html, p[0]);
                // console.log(items.length);
                for (let item of items) {
                    // console.log(p[1]);
                    let items2 = _pdfa(item, p[1]);
                    // console.log(items2.length);
                    for (let item2 of items2) {
                        try {
                            let title = _pdfh(item2, p[2]);
                            let img = '';
                            try {
                                img = _pd(item2, p[3])
                            } catch (e) {
                            }
                            let desc = _pdfh(item2, p[4]);
                            let links = [];
                            for (let p5 of p[5].split('+')) {
                                let link = !homeVodObj.detailUrl ? _pd(item2, p5, MY_URL) : _pdfh(item2, p5);
                                links.push(link);
                            }
                            let vod = {
                                vod_name: title,
                                vod_pic: img,
                                vod_remarks: desc,
                                vod_id: links.join('$')
                            };
                            // print(vod);
                            d.push(vod);
                        } catch (e) {
                            console.log('棣栭〉鍒楄〃澶勭悊鍙戠敓閿欒:'+e.message);
                        }

                    }


                }


            } else {
                let items = _pdfa(html, p[0]);
                for (let item of items) {
                    try {
                        let title = _pdfh(item, p[1]);
                        let img = '';
                        try {
                            img = _pd(item, p[2], MY_URL);
                        } catch (e) {

                        }
                        let desc = _pdfh(item, p[3]);
                        let links = [];
                        for (let p5 of p[4].split('+')) {
                            let link = !homeVodObj.detailUrl ? _pd(item, p5, MY_URL) : _pdfh(item, p5);
                            links.push(link);
                        }
                        let vod = {
                            vod_name: title,
                            vod_pic: img,
                            vod_remarks: desc,
                            vod_id: links.join('$')
                        };
                        d.push(vod);

                    } catch (e) {

                    }

                }

            }

        } catch (e) {

        }
    }
    // console.log(JSON.stringify(d));
    return JSON.stringify({
        list:d
    })
}

/**
 * 涓€绾у垎绫婚〉鏁版嵁瑙ｆ瀽
 * @param cateObj
 * @returns {string}
 */
function categoryParse(cateObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let p = cateObj.涓€绾�;
    if(!p||typeof(p)!=='string'){
        return '{}'
    }
    let d = [];
    // let url = cateObj.url.replaceAll('fyclass', cateObj.tid).replaceAll('fypage', cateObj.pg);
    let url = cateObj.url.replaceAll('fyclass', cateObj.tid);
    if(rule.filter_url){
        if(!/fyfilter/.test(url)){
            if(!url.endsWith('&')&&!rule.filter_url.startsWith('&')){
                url+='&'
            }
            url+=rule.filter_url;
        }else{
            url = url.replace('fyfilter', rule.filter_url);
        }
        // console.log('filter:'+cateObj.filter);
        let fl = cateObj.filter?cateObj.extend:{};
        let new_url;
        new_url = cheerio.jinja2(url,{fl:fl});
        // console.log('jinjia2鎵ц鍚庣殑new_url绫诲瀷涓�:'+typeof(new_url));
        if(/object Object/.test(new_url)){
            new_url = drT.renderText(url,fl);
        }
        url = new_url;
    }
    if(/fypage/.test(url)){
        if(url.includes('(')&&url.includes(')')){
            let url_rep = url.match(/.*?\((.*)\)/)[1];
            // console.log(url_rep);
            let cnt_page = url_rep.replaceAll('fypage', cateObj.pg);
            // console.log(cnt_page);
            let cnt_pg = eval(cnt_page);
            // console.log(cnt_pg);
            url = url.replaceAll(url_rep,cnt_pg).replaceAll('(','').replaceAll(')','');
        }else{
            url = url.replaceAll('fypage',cateObj.pg);
        }
    }
    if(cateObj.pg === 1 && url.includes('[')&&url.includes(']')){
        url = url.split('[')[1].split(']')[0];
    }
    MY_URL = url;
    // setItem('MY_URL',MY_URL);
    console.log(MY_URL);
    p = p.trim();
    const MY_CATE = cateObj.tid;
    if(p.startsWith('js:')){
        var MY_FL = cateObj.extend;
        const TYPE = 'cate';
        var input = MY_URL;
        const MY_PAGE = cateObj.pg;
        var desc = '';
        eval(p.trim().replace('js:',''));
        d = VODS;
    }else {
        p = p.split(';');
        if (p.length < 5) {
            return '{}'
        }
        let _ps = parseTags.getParse(p[0]);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p[0].startsWith('json:');
        p[0] = p[0].replace(/^(jsp:|json:|jq:)/,'');
        try {
            let html = getHtml(MY_URL);
            if (html) {
                if(is_json){
                    html = dealJson(html);
                }
                let list = _pdfa(html, p[0]);
                list.forEach(it => {
                    let links = p[4].split('+').map(p4=>{
                        return !rule.detailUrl?_pd(it, p4,MY_URL):_pdfh(it, p4);
                    });
                    let link = links.join('$');
                    let vod_id = rule.detailUrl?MY_CATE+'$'+link:link;
                    d.push({
                        'vod_id': vod_id,
                        'vod_name': _pdfh(it, p[1]).replace(/\n|\t/g,'').trim(),
                        'vod_pic': _pd(it, p[2],MY_URL),
                        'vod_remarks': _pdfh(it, p[3]).replace(/\n|\t/g,'').trim(),
                    });
                });
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    // print(d);
    return d.length<1?'{}':JSON.stringify({
        'page': parseInt(cateObj.pg),
        'pagecount': 999,
        'limit': 20,
        'total': 999,
        'list': d,
    });
}

/**
 * 鎼滅储鍒楄〃鏁版嵁瑙ｆ瀽
 * @param searchObj
 * @returns {string}
 */
function searchParse(searchObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let d = [];
    if(!searchObj.searchUrl){
        return '{}'
    }
    let p = searchObj.鎼滅储==='*'&&rule.涓€绾� ? rule.涓€绾� : searchObj.鎼滅储;
    if(!p||typeof(p)!=='string'){
        return '{}'
    }
    p = p.trim();
    let url = searchObj.searchUrl.replaceAll('**', searchObj.wd).replaceAll('fypage', searchObj.pg);
    MY_URL = url;
    console.log(MY_URL);
    // setItem('MY_URL',MY_URL);
    if(p.startsWith('js:')){
        const TYPE = 'search';
        const MY_PAGE = searchObj.pg;
        const KEY = searchObj.wd;
        var input = MY_URL;
        var detailUrl = rule.detailUrl||'';
        eval(p.trim().replace('js:',''));
        d = VODS;
    }else{
        p = p.split(';');
        if (p.length < 5) {
            return '{}'
        }
        let _ps = parseTags.getParse(p[0]);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p[0].startsWith('json:');
        p[0] = p[0].replace(/^(jsp:|json:|jq:)/,'');
        try {
            let html = getHtml(MY_URL);
            if (html) {
                if(/绯荤粺瀹夊叏楠岃瘉|杈撳叆楠岃瘉鐮�/.test(html)){
                    let cookie = verifyCode(MY_URL);
                    if(cookie){
                        console.log(`鏈鎴愬姛杩囬獙璇�,cookie:${cookie}`);
                        setItem(RULE_CK,cookie);
                    }else{
                        console.log(`鏈鑷姩杩囨悳绱㈤獙璇佸け璐�,cookie:${cookie}`);
                    }
                    // obj.headers['Cookie'] = cookie;
                    html = getHtml(MY_URL);
                }
                if(!html.includes(searchObj.wd)){
                    console.log('鎼滅储缁撴灉婧愮爜鏈寘鍚叧閿瓧,鐤戜技鎼滅储澶辫触,姝ｄ负鎮ㄦ墦鍗扮粨鏋滄簮鐮�');
                    console.log(html);
                }
                if(is_json){
                    html = dealJson(html);
                }
                let list = _pdfa(html, p[0]);
                list.forEach(it => {
                    let links = p[4].split('+').map(p4=>{
                        return !rule.detailUrl?_pd(it, p4,MY_URL):_pdfh(it, p4)
                    });

                    let link = links.join('$');
                    let ob = {
                        'vod_id': link,
                        'vod_name': _pdfh(it, p[1]).replace(/\n|\t/g,'').trim(),
                        'vod_pic': _pd(it, p[2],MY_URL),
                        'vod_remarks': _pdfh(it, p[3]).replace(/\n|\t/g,'').trim(),
                    };
                    if (p.length > 5 && p[5]) {
                        ob.vod_content = _pdfh(it, p[5]);
                    }
                    d.push(ob);
                });

            }
        } catch (e) {
            return '{}'
        }

    }
    return JSON.stringify({
        'page': parseInt(searchObj.pg),
        'pagecount': 10,
        'limit': 20,
        'total': 100,
        'list': d,
    });
}

/**
 * 浜岀骇璇︽儏椤垫暟鎹В鏋�
 * @param detailObj
 * @returns {string}
 */
function detailParse(detailObj){
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let vod = {
        vod_id: detailObj.orId, //"id",
        vod_name: "鐗囧悕",
        vod_pic: "",
        type_name: "鍓ф儏",
        vod_year: "骞翠唤",
        vod_area: "鍦板尯",
        vod_remarks: "鏇存柊淇℃伅",
        vod_actor: "涓绘紨",
        vod_director: "瀵兼紨",
        vod_content: "绠€浠�"
    };
    let p = detailObj.浜岀骇;
    let url = detailObj.url;
    let detailUrl = detailObj.detailUrl;
    let fyclass = detailObj.fyclass;
    let tab_exclude = detailObj.tab_exclude;
    let html = detailObj.html||'';
    MY_URL = url;
    console.log(MY_URL);
    // setItem('MY_URL',MY_URL);
    if(p==='*'){
        vod.vod_play_from = '閬撻暱鍦ㄧ嚎';
        vod.vod_remarks = detailUrl;
        vod.vod_actor = '娌℃湁浜岀骇,鍙湁涓€绾ч摼鎺ョ洿鎺ュ梾鎺㈡挱鏀�';
        vod.vod_content = MY_URL;
        vod.vod_play_url = '鍡呮帰鎾斁$' + MY_URL;
    }else if(typeof(p)==='string'&&p.trim().startsWith('js:')){
        const TYPE = 'detail';
        var input = MY_URL;
        eval(p.trim().replace('js:',''));
        vod = VOD;
        console.log(JSON.stringify(vod));
    }else if(p&&typeof(p)==='object'){
        if(!html){
            html = getHtml(MY_URL);
        }
        let _impJQP = true;
        let _ps;
        if(p.is_json){
            _ps = parseTags.json;
            html = dealJson(html);
            _impJQP = false;
        }else if(p.is_jsp){
            _ps = parseTags.jsp;
        }else if(p.is_jq){
            _ps = parseTags.jq;
        }else{
            _ps = parseTags.jq;
        }
        if (_impJQP) {
            let c$ = cheerio.load(html);
            html = { rr: c$, ele: c$('html')[0] }
        }
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        if(p.title){
            let p1 = p.title.split(';');
            vod.vod_name = _pdfh(html, p1[0]).replace(/\n|\t/g,'').trim();
            let type_name = p1.length > 1 ? _pdfh(html, p1[1]).replace(/\n|\t/g,'').replace(/ /g,'').trim():'';
            vod.type_name = type_name||vod.type_name;
        }
        if(p.desc){
            try{
                let p1 = p.desc.split(';');
                vod.vod_remarks =  _pdfh(html, p1[0]).replace(/\n|\t/g,'').trim();
                vod.vod_year = p1.length > 1 ? _pdfh(html, p1[1]).replace(/\n|\t/g,'').trim():'';
                vod.vod_area = p1.length > 2 ? _pdfh(html, p1[2]).replace(/\n|\t/g,'').trim():'';
                // vod.vod_actor = p1.length > 3 ? _pdfh(html, p1[3]).replaceAll('\n', ' ').trim():'';
                vod.vod_actor = p1.length > 3 ? _pdfh(html, p1[3]).replace(/\n|\t/g,'').trim():'';
                vod.vod_director = p1.length > 4 ? _pdfh(html, p1[4]).replace(/\n|\t/g,'').trim():'';
            }
            catch (e) {

            }
        }
        if(p.content){
            try{
                let p1 = p.content.split(';');
                vod.vod_content =  _pdfh(html, p1[0]).replace(/\n|\t/g,'').trim();
            }
            catch (e) {}
        }
        if(p.img){
            try{
                let p1 = p.img.split(';');
                vod.vod_pic =  _pd(html, p1[0],MY_URL);
            }
            catch (e) {}
        }

        let vod_play_from = '$$$';
        let playFrom = [];
        if(p.閲嶅畾鍚�&&p.閲嶅畾鍚�.startsWith('js:')){
            html = eval(p.閲嶅畾鍚�.replace('js:',''));
            if (_impJQP) {
                let c$ = cheerio.load(html);
                html = { rr: c$, ele: c$('html')[0] }
            }
        }
        
// console.log(2);
        if(p.tabs){
            let p_tab = p.tabs.split(';')[0];
            console.log(p_tab);
            let vHeader = _pdfa(html, p_tab);

            console.log(vHeader.length);
            for(let v of vHeader){
                let v_title = _pdfh(v,'body&&Text');
                console.log(v_title);
                if(tab_exclude&& (new RegExp(tab_exclude)).test(v_title)){
                    continue;
                }
                playFrom.push(v_title);
            }
            console.log(JSON.stringify(playFrom));
        }else{
            playFrom = ['閬撻暱鍦ㄧ嚎']
        }
        vod.vod_play_from = playFrom.join(vod_play_from);

// console.log(3);
        let vod_play_url = '$$$';
        let vod_tab_list = [];
        if(p.lists){
            for(let i=0;i<playFrom.length;i++){
                let tab_name = playFrom[i];
                let tab_ext =  p.tabs.split(';').length > 1 ? p.tabs.split(';')[1] : '';
                let p1 = p.lists.replaceAll('#idv', tab_name).replaceAll('#id', i);
                tab_ext = tab_ext.replaceAll('#idv', tab_name).replaceAll('#id', i);
                console.log(p1);
                // console.log(html);
                let vodList = [];
                try {
                    vodList =  _pdfa(html, p1);
                    console.log('len(vodList):'+vodList.length);
                }catch (e) {
                    // console.log(e.message);
                }
                let new_vod_list = [];
                let tabName = tab_ext?_pdfh(html, tab_ext):tab_name;
                console.log(tabName);
                // console.log('cheerio瑙ｆ瀽Text');
                vodList.forEach(it=>{
                    // 璇锋敞鎰�,杩欓噷瑕佸浐瀹歱dfh瑙ｆ瀽body&&Text,涓嶉渶瑕佷笅鍒掔嚎,娌″啓閿�
                    // new_vod_list.push(pdfh(it,'body&&Text')+'$'+_pd(it,'a&&href',MY_URL));
                    // new_vod_list.push(cheerio.load(it).text()+'$'+_pd(it,'a&&href',MY_URL));
                    new_vod_list.push(_pdfh(it, 'body&&Text') + '$' + _pd(it, 'a&&href', MY_URL));
                });
                let vlist = new_vod_list.join('#');
                vod_tab_list.push(vlist);
            }
        }
        vod.vod_play_url = vod_tab_list.join(vod_play_url);
    }
    // print(vod);
    return JSON.stringify({
        list: [vod]
    })
}

/**
 * 鍒ゆ柇鏄惁闇€瑕佽В鏋�
 * @param url
 * @returns {number|number}
 */
function tellIsJx(url){
    try {
        let is_vip = !/\.(m3u8|mp4|m4a)$/.test(url.split('?')[0]) && 鏄惁姝ｇ増(url);
        return is_vip?1:0
    }catch (e) {
        return 1
    }
}
/**
 * 閫夐泦鎾斁鐐瑰嚮浜嬩欢瑙ｆ瀽
 * @param playObj
 * @returns {string}
 */
function playParse(playObj){
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    MY_URL = playObj.url;
    if(!/http/.test(MY_URL)){
        try {
            MY_URL = base64Decode(MY_URL);
        }catch (e) {}
    }
    MY_URL = decodeURIComponent(MY_URL);
    var input = MY_URL;//娉ㄥ叆缁欏厤鍡卝s
    let common_play = {
        parse:1,
        url:input,
        jx:tellIsJx(input)
    };
    let lazy_play;
    if(!rule.play_parse||!rule.lazy){
        lazy_play =  common_play;
    }else if(rule.play_parse&&rule.lazy&&typeof(rule.lazy)==='string'){
        try {
            let lazy_code = rule.lazy.replace('js:','').trim();
            print('寮€濮嬫墽琛宩s鍏嶅梾=>'+lazy_code);
            eval(lazy_code);
            lazy_play = typeof(input) === 'object'?input:{
                parse:1,
                jx:tellIsJx(input),
                url:input
            };
        }catch (e) {
            print('js鍏嶅梾閿欒:'+e.message);
            lazy_play =  common_play;
        }
    }else{
        lazy_play =  common_play;
    }
    console.log(JSON.stringify(lazy_play));
    return JSON.stringify(lazy_play);
}

/**
 * js婧愰澶勭悊鐗瑰畾杩斿洖瀵硅薄涓殑鍑芥暟
 * @param ext
 */
 function init(ext) {
    console.log('init');
    try {
        // make shared jsContext happy muban涓嶈兘import,涓嶇劧浼氶€犳垚鎹㈡簮缁ф壙鍚庡彉閲忚绡℃敼
        if (typeof (globalThis.mubanJs) === 'undefined') {
            let mubanJs = request('https://gitcode.net/qq_32394351/dr_py/-/raw/master/js/妯℃澘.js', { 'User-Agent': MOBILE_UA });
            mubanJs = mubanJs.replace('export default', '(function() {return muban;}()) // export default');
            // console.log(mubanJs);
            globalThis.mubanJs = mubanJs;
        }
        let muban = eval(globalThis.mubanJs);
        if (typeof ext == 'object'){
            rule = ext;
            if (rule.template) {
                rule = Object.assign(muban[rule.template], rule);
            }
        } else if (typeof ext == 'string') {
            if (ext.startsWith('http')) {
                let js = request(ext,{'method':'GET'});
                if (js){
                    eval(js.replace('var rule', 'rule'));
                }
                }
            } else {
                eval(ext.replace('var rule', 'rule'));
            }
        /** 澶勭悊涓€涓� rule瑙勫垯鍏抽敭瀛楁娌′紶閫掔殑鎯呭喌 **/
        let rule_cate_excludes = (rule.cate_exclude||'').split('|').filter(it=>it.trim());
        let rule_tab_excludes = (rule.tab_exclude||'').split('|').filter(it=>it.trim());
        rule_cate_excludes = rule_cate_excludes.concat(CATE_EXCLUDE.split('|').filter(it=>it.trim()));
        rule_tab_excludes = rule_tab_excludes.concat(TAB_EXCLUDE.split('|').filter(it=>it.trim()));

        rule.cate_exclude = rule_cate_excludes.join('|');
        rule.tab_exclude = rule_tab_excludes.join('|');
        rule.host = (rule.host||'').rstrip('/');
        rule.url = rule.url||'';
        rule.double = rule.double||false;
        rule.homeUrl = rule.homeUrl||'';
        rule.detailUrl = rule.detailUrl||'';
        rule.searchUrl = rule.searchUrl||'';
        rule.homeUrl = rule.host&&rule.homeUrl?urljoin(rule.host,rule.homeUrl):(rule.homeUrl||rule.host);
        rule.detailUrl = rule.host&&rule.detailUrl?urljoin(rule.host,rule.detailUrl):rule.detailUrl;
        if(rule.url.includes('[')&&rule.url.includes(']')){
            let u1 = rule.url.split('[')[0]
            let u2 = rule.url.split('[')[1].split(']')[0]
            rule.url = rule.host && rule.url?urljoin(rule.host,u1)+'['+urljoin(rule.host,u2)+']':rule.url;
        }else{
            rule.url = rule.host && rule.url ? urljoin(rule.host,rule.url) : rule.url;
        }
        rule.searchUrl = rule.host && rule.searchUrl ? urljoin(rule.host,rule.searchUrl) : rule.searchUrl;

        rule.timeout = rule.timeout||5000;
        rule.encoding = rule.缂栫爜||rule.encoding||'utf-8';
        if(rule.headers && typeof(rule.headers) === 'object'){
            try {
                let header_keys = Object.keys(rule.headers);
                for(let k of header_keys){
                    if(k.toLowerCase() === 'user-agent'){
                        let v = rule.headers[k];
                        console.log(v);
                        if(['MOBILE_UA','PC_UA','UC_UA','IOS_UA','UA'].includes(v)){
                            rule.headers[k] = eval(v);
                        }
                    }
                }
            }catch (e) {
                console.log('澶勭悊headers鍙戠敓閿欒:'+e.message);
            }
        }
        // print(rule.headers);
        rule_fetch_params  = {'headers': rule.headers||false, 'timeout': rule.timeout, 'encoding': rule.encoding};
        oheaders = rule.headers||{};
        RKEY = typeof(key)!=='undefined'&&key?key:'drpy_' + (rule.title || rule.host);
        init_test();
    }catch (e) {
        console.log('init_test鍙戠敓閿欒:'+e.message);
    }
}

let homeHtmlCache = undefined;

/**
 * js婧愯幏鍙栭椤靛垎绫诲拰绛涢€夌壒瀹氳繑鍥炲璞′腑鐨勫嚱鏁�
 * @param filter 绛涢€夋潯浠跺瓧鍏稿璞�
 * @returns {string}
 */
function home(filter) {
    console.log("home");
    let homeObj = {
        filter:rule.filter||false,
        MY_URL: rule.homeUrl,
        class_name: rule.class_name || '',
        class_url: rule.class_url || '',
        class_parse: rule.class_parse || '',
        cate_exclude: rule.cate_exclude,
    };
    return homeParse(homeObj);
}

/**
 * js婧愯幏鍙栭椤垫帹鑽愭暟鎹垪琛ㄧ壒瀹氳繑鍥炲璞′腑鐨勫嚱鏁�
 * @param params
 * @returns {string}
 */
function homeVod(params) {
    let homeVodObj = {
        鎺ㄨ崘:rule.鎺ㄨ崘,
        double:rule.double,
        homeUrl:rule.homeUrl,
        detailUrl:rule.detailUrl
    };
    return homeVodParse(homeVodObj)
    // return "{}";
}

/**
 * js婧愯幏鍙栧垎绫婚〉涓€绾ф暟鎹垪琛ㄧ壒瀹氳繑鍥炲璞′腑鐨勫嚱鏁�
 * @param tid 鍒嗙被id
 * @param pg 椤垫暟
 * @param filter 褰撳墠閫変腑鐨勭瓫閫夋潯浠�
 * @param extend 鎵╁睍
 * @returns {string}
 */
function category(tid, pg, filter, extend) {
    let cateObj = {
        url: rule.url,
        涓€绾�: rule.涓€绾�,
        tid: tid,
        pg: parseInt(pg),
        filter: filter,
        extend: extend
    };
    // console.log(JSON.stringify(extend));
    return categoryParse(cateObj)
}

/**
 * js婧愯幏鍙栦簩绾ц鎯呴〉鏁版嵁鐗瑰畾杩斿洖瀵硅薄涓殑鍑芥暟
 * @param vod_url 涓€绾у垪琛ㄤ腑鐨剉od_id鎴栬€呮槸甯﹀垎绫荤殑鑷嫾鎺� vod_id 濡� fyclass$vod_id
 * @returns {string}
 */
function detail(vod_url) {
    let orId = vod_url;
    let fyclass = '';
    if(vod_url.indexOf('$')>-1){
        let tmp = vod_url.split('$');
        fyclass = tmp[0];
        vod_url = tmp[1];
    }
    let detailUrl = vod_url;
    let url;
    if(!detailUrl.startsWith('http')&&!detailUrl.includes('/')){
        url = rule.detailUrl.replaceAll('fyid', detailUrl).replaceAll('fyclass',fyclass);
    }else if(detailUrl.includes('/')){
        url = urljoin(rule.homeUrl,detailUrl);
    }else{
        url = detailUrl
    }
    let detailObj = {
        orId: orId,
        url:url,
        浜岀骇:rule.浜岀骇,
        detailUrl:detailUrl,
        fyclass:fyclass,
        tab_exclude:rule.tab_exclude,
    }
    return detailParse(detailObj)
}

/**
 * js婧愰€夐泦鎸夐挳鎾斁鐐瑰嚮浜嬩欢鐗瑰畾杩斿洖瀵硅薄涓殑鍑芥暟
 * @param flag 绾胯矾鍚�
 * @param id 鎾斁鎸夐挳鐨勯摼鎺�
 * @param flags 鍏ㄥ眬閰嶇疆鐨刦lags鏄惁闇€瑕佽В鏋愮殑鏍囪瘑鍒楄〃
 * @returns {string}
 */
function play(flag, id, flags) {
    let playObj = {
        url:id,
        flag:flag,
        flags:flags
    }
    return playParse(playObj);
}

/**
 * js婧愭悳绱㈣繑鍥炵殑鏁版嵁鍒楄〃鐗瑰畾杩斿洖瀵硅薄涓殑鍑芥暟
 * @param wd 鎼滅储鍏抽敭瀛�
 * @param quick 鏄惁鏉ヨ嚜蹇€熸悳绱�
 * @returns {string}
 */
function search(wd, quick) {
    let searchObj = {
        searchUrl: rule.searchUrl,
        鎼滅储: rule.鎼滅储,
        wd: wd,
        //pg: pg,
        pg: 1,
        quick: quick,
    };
    // console.log(JSON.stringify(searchObj));
    return searchParse(searchObj)
}

function DRPY(){//瀵煎嚭鍑芥暟
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search,
    }
}

// 瀵煎嚭鍑芥暟瀵硅薄
export default {
    init: init,
    home: home,
    homeVod: homeVod,
    category: category,
    detail: detail,
    play: play,
    search: search,
    DRPY:DRPY
}

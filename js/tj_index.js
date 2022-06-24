
if(document.getElementById('cse-search-box')){
document.getElementById('cse-search-box').action='/search';
}

$(function(){	
	var url = getCookie('firsturl');
	if(!url){
		setCookie('firsturl',location.href,999,true);
	}
	
	var infoid = $('#infoid').val();	
	if(infoid){
		var downbtn = $('.btn-down');	
		downbtn.on('click',function(){
			setCookie('ordertplid',infoid,999,true);
		});	
	}
	
	var tid = $('#tid').val();
	if(tid){
		var xcx_downbtn = $('.btn-down');
		xcx_downbtn.on('click',function(){
			setCookie('xcx_ordertplid',tid,999,true);
		});
	}
	
	$('#go').click(function(){
		var searchTxt=$('#q').val();
		if(searchTxt!=""&&searchTxt!=undefined)
		{
			setCookie('ssword',searchTxt,999,true);
		}
		_czc.push(['_trackEvent', 'ssword',searchTxt]);
	})
});




var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
   hm.src = "https://hm.baidu.com/hm.js?a5ba743d0ea57bb0c5a7ad25181e4f7b";   
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

// <script type="text/javascript" src="https://v1.cnzz.com/z_stat.php?id=1278890537&web_id=1278890537"></script>
document.write('<div style="display: none">');
document.write('<script type="text/javascript" src="https://v1.cnzz.com/z_stat.php?id=1278890537&web_id=1278890537"><\/script>');
document.write('</div>');


// var url = window.location.href;
// if (url.match(RegExp('/tags.asp'))){
//   $(".page-header").before('<div><a href="http://www.cssmoban.com/item/Getclick.asp?Action=Count&GetFlag=0&m=1&ID=4" rel="nofollow" target="_blank"><img src="http://img.cssmoban.com/uploadFiles/2020/2/20200204151049.jpg" title="" alt="" border="0" height="90" width="970"></a></div>')
// }

// 2020-09-03
// var url = window.location.href;
// if (url.match(RegExp('/tags.asp'))){
//   $(".page").prepend('<div><a href="http://www.cssmoban.com/item/Getclick.asp?Action=Count&GetFlag=0&m=1&ID=21" onclick="_czc.push([\'_trackEvent\', \'AD4\', \'AD4\'])" style="display: block;width: 100%;margin: 0px auto 10px;text-align: center;" rel="nofollow" target="_blank"><img src="http://www.cssmoban.com/images/ads/20190705.jpg" title="" alt="" border="0" height="90" width="970"></a></div>')
// }


// 2020-11-09
var tj_url = decodeURI(window.location.href);
if (tj_url.match(RegExp('/tags.asp'))){
	function geturl(keys, url) {
		var new_reg = new RegExp('(^|[&?])' + keys + '=([^&]*)(&|$)');
		var new_index = url.indexOf('?');
		var new_str = url.substring(new_index, url.length);
		var new_r = new_str.match(new_reg);
		if (new_r != null) return unescape(new_r[2]);
		return '';
	}

	if (!geturl("lang",tj_url) && geturl("n",tj_url)){
		var tag_n = geturl("n",tj_url);
		var tagNum = $("form[name=myform] font").eq(0).text();
		var tagNumP = $("form[name=myform] font").eq(1).text();

		_czc.push(['_trackEvent','Tags数量统计',tagNum,tag_n + "_" + tagNumP]);
	}
}

/*document.write('<script type="text/javascript" src="https://ykf-webchat.7moor.com/javascripts/7moorInit.js?accessId=7c4f1e30-c255-11ea-91a4-7f87f504790a&autoShow=true&language=ZHCN\" async="async"></script>');*/

/* 自己统计 */
(function () {

    function getQueryString(url) {

        var host = '';
        if (url) {
            host = url.split('/')[2];
            url = url.substr(url.indexOf("?") + 1);
        }

        var result = {},
            queryString = url || location.search.substring(1),
            re = /([^&=]+)=([^&]*)/g, m;

        while (m = re.exec(queryString)) {
            result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }

        result.host = host;
        return result;
    }

    var _nas = _nas || {};
    _nas.loadJs = function (url, params) {
        var query = _nas.getQuery(params);
        var ts = document.createElement("script");
        var s = document.getElementsByTagName("script")[0];
        ts.src = url + "?" + query;
        ts.charset = "utf-8";
        s.parentNode.insertBefore(ts, s);
    }
    _nas.getQuery = function (params) {
        var relustAry = [];
        for (var i in params) {
            relustAry.push(i + '=' + params[i]);
        }
        return relustAry.join('&');
    }
    _nas.nasLoad = function (host, params) {
        _nas.loadJs(host + "/", params)
    }

    var pathname = window.location.pathname;
    var numArr = pathname.match(/\d+/g);
    var article_id = numArr != null ? numArr[0] : 0;

    var userinfo=0;
    userinfo = getCookie("userinfo");
    if(!userinfo){
        userinfo=0;
    }
    //当前连接
    var land_url='';
    land_url=window.location.href;

    var nasParams = {
        source_url: encodeURIComponent(document.referrer),
        article_id: article_id,
        type:0,
        userinfo:userinfo,
        land_url:land_url
    };
    nasParams = $.extend(nasParams, getQueryString(document.referrer))
    var tj_url = '//web.720891.com/api/mobanstatistics';
    _nas.nasLoad(tj_url, nasParams);
})();


function tongji(type){
    function getQueryString(url) {
    
        var host = '';
        if (url) {
            host = url.split('/')[2];
            url = url.substr(url.indexOf("?") + 1);
        }
    
        var result = {},
            queryString = url || location.search.substring(1),
            re = /([^&=]+)=([^&]*)/g, m;
    
        while (m = re.exec(queryString)) {
            result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
    
        result.host = host;
        return result;
    }
    
    var _nas = _nas || {};
    _nas.loadJs = function (url, params) {
        var query = _nas.getQuery(params);
        var ts = document.createElement("script");
        var s = document.getElementsByTagName("script")[0];
        ts.src = url + "?" + query;
        ts.charset = "utf-8";
        s.parentNode.insertBefore(ts, s);
    }
    _nas.getQuery = function (params) {
        var relustAry = [];
        for (var i in params) {
            relustAry.push(i + '=' + params[i]);
        }
        return relustAry.join('&');
    }
    _nas.nasLoad = function (host, params) {
        _nas.loadJs(host + "/", params)
    }
    
    var pathname = window.location.pathname;
    var numArr = pathname.match(/\d+/g);
    var article_id = numArr != null ? numArr[0] : 0;
    
    var userinfo=0;
    userinfo = getCookie("userinfo");
    if(!userinfo || userinfo=='undefined' || typeof(userinfo)=='undefined'){
        userinfo=0;
    }
    //当前连接
    var land_url='';
    land_url=window.location.href;
    
    var nasParams = {
        source_url: encodeURIComponent(document.referrer),
        article_id: article_id,
        type:type,
        userinfo:userinfo,
        land_url:land_url
    };
    nasParams = $.extend(nasParams, getQueryString(document.referrer))
    var tj_url = '//web.720891.com/api/mobanstatistics';
    console.log(666);
    _nas.nasLoad(tj_url, nasParams);
}




$(".ajaxopen").click(function(event){
    var _href = $(this).data('action'),
        _w = $(this).data('w'),
        _h = $(this).data('h'),
        _title = $(this).data('title'),
        _w = _w?_w:'60%',
        _h = _h ?_h:'60%',
        _title = _title?_title:'操作窗口';

    $(".quick-login-ifr-box").css({"width":_w,"height":_h,});
    $("#quick-login-ifr").attr("src",_href);
    $(".quick-login-ifr-title .ifr-title").text(_title);

    var p_w = -$(".quick-login-ifr-box").width()/2  + "px";
    var p_h = -$(".quick-login-ifr-box").height()/2  + "px";
    var ifr_h = $(".quick-login-ifr-box").height() - 42 + "px";
    $(".quick-login-ifr-box").css({"margin-left": p_w,"margin-top": p_h}).show();
    $(".quick-login-ifr").css("height",ifr_h);
});

$(document).on('click','.ifr-close',function(event){
    $(".quick-login-ifr-box").hide();
});


$(".login").click(function (e) {
    e ? e.stopPropagation():event.cancelBubble = true;
});

$(".login-box").click(function () {
    $(this).hide();
});

$(".login-btn").click(function () {
    $(".login-box").show();
});

var userinfo = getCookie("userinfo");
userinfo=dealuserinfo(userinfo);
function dealuserinfo(value){
    if (value) {
        if(value.indexOf("%20") != -1){
            value=value.replace("%20","");
        }
        if(value.indexOf("+") != -1){
            value=value.replace("+","");
        }
        var userinfoArr = value.match(/\d+/g);
        if(userinfoArr.length>0){
            value=userinfoArr[0];
        }
    }
    return value;
}


$(".quick-l-qq").click(function () {
    var timer = setInterval(function () {
        if (getCookie("userinfo")) {
            clearInterval(timer);
            location.reload();
        }
    }, 800);
});

$(".user-tx").hover(
    function () {
        $(".user-msg").show();
    },
    function () {
        $(".user-msg").hide();
    }
);

var userVip = '';

if (userinfo) {
    $.ajax({
        url: "http://vip.cssmoban.com/apishenji/userinfo",
        type: "get",
        data: {
            id: userinfo
        },
        dataType: "json",
        success: function (json) {
            var downdata = json.downdata;
            //return;
            if (json) {
                userVip = json.myvip.vip;
                // setSession('screkey', json.screkey);
                window.localStorage.setItem('screkey', json.screkey);
            } else {

            }
        },
        error: function (err) {
            alert("登录失败");
        }
    })
}


$('body').addClass('active');
var url = window.location.href;
var pre_url = geturl("url",url);

var hosts = "demo.mxyhn.xyz";

var if_url = "";

var hosts = "demo.mxyhn.xyz";

var if_url = "";

if (pre_url.match("demo.qfpffmp.cn")){
    if_url = pre_url.replace("demo.qfpffmp.cn", hosts);
}
else if(pre_url.match("demo.kangjingept.com")){
    if_url = pre_url.replace("demo.kangjingept.com", hosts);
}
else if(pre_url.match(".demo.mxyhn.xyz")&&!pre_url.match(".demo.mxyhn.xyz:8020")){
    if_url = pre_url.replace("demo.mxyhn.xyz", hosts+":8020");

}
else {

    if_url = pre_url;

}


if_url = if_url.replace("demo.mxyhn.xyz", 'demo.cssmoban.com');
//if_url = if_url.replace(":8020", '');

// if (convertTemp(geturl("url",url)) == "demo.qfpffmp.cn"){
//     if_url = hosts + getLasturl(geturl("url",url))
// } else if(convertTemp(geturl("url",url)) == "demo.kangjingept.com:8020"){
//   if_url = hosts + getLasturl(geturl("url",url))
// } else {
//     if_url = geturl("url",url);
// }
setTimeout(function(){
    console.log(666);
    $("#iframe").attr("src",if_url);
},500);


var pos = if_url.lastIndexOf('/'); //'/所在的最后位置'
var _url = if_url.substr(0,pos); //截取路径字符串

var height = $(".demo-header").height();

// $(".preview-portrait-block").css({"padding-top":height});

$(".posti").click(function(){

    $(".posti").removeClass("arve");
    $(this).addClass("arve");

    if($(this).data('id')=="preview-pc"){
        $("body").css({"overflow-y":"hidden"});
        $("iframe").attr("id","iframe");
        $("#iframe").height($(window).height()-height);
        // $(".preview-portrait-block").css({"padding-top":height});
        $(".preview-portrait-block").css({"padding-top":"0px"});
    }else{
        $("body").css({"overflow-y":"inherit"});
        $("iframe").attr("id","preview");
        $("iframe").attr("style","height:100%");
        $(".preview-portrait-block").css({"padding-top":"80px"});
    }
    $(".podmk").removeClass().addClass($(this).data('id')+' podmk');
});

$("#iframe").height($(window).height()-height);

$(window).resize(function() {
    $("#iframe").height($(window).height()-height);
});

if(window.localStorage){
    var storage = window.localStorage;
    if (storage.getItem("navbar-tip")){
        $(".navbar-tip").hide();
    } else {
        $(".navbar-tip").show();
    }

}else{
    console.log("浏览器不支持localstorage");
}

$(".navbar-tip").click(function () {
    $(this).hide();
    window.localStorage.setItem("navbar-tip",1);
});

// 移除框架
function cols(){
    $(".demo-header").hide();
    if ($(".arve").hasClass("pc")){
        $("#iframe").height($(window).height());
        $(".preview-portrait-block").css("padding-top",$(".preview-portrait-block").css("padding-top").replace(/\s+|px/gi,"") - 56 + "px");
    } else {
        $(".preview-portrait-block").css("padding-top",$(".preview-portrait-block").css("padding-top").replace(/\s+|px/gi,"") - 56 + "px");
    }
}

$("head").append('<style>\n' +
    '    .download-hint{\n' +
    '      width: 100%;\n' +
    '      height: 100%;\n' +
    '      background-color: rgba(0,0,0,0.4);\n' +
    '      position: fixed;\n' +
    '      top: 0;\n' +
    '      left: 0;\n' +
    '      display: none;\n' +
    '    }\n' +
    '    .download-hint .hint-box{\n' +
    '      width: 500px;\n' +
    '      height: auto;\n' +
    '      background-color: #fff;\n' +
    '      position: absolute;\n' +
    '      left: 50%;\n' +
    '      top: 40%;\n' +
    '      margin-left: -250px;\n' +
    '      font-size: 16px;\n' +
    '      color: #333333;\n' +
    '    }\n' +
    '    .hint-box .hint-title{\n' +
    '      width: 100%;\n' +
    '      height: 40px;\n' +
    '      line-height: 40px;\n' +
    '      text-align: center;\n' +
    '      background-color: #2A5ABE;\n' +
    '      color: #ffffff;\n' +
    '    }\n' +
    '    .hint-box .hint-content{\n' +
    '      width: 100%;\n' +
    '      height: auto;\n' +
    '      box-sizing: border-box;\n' +
    '      padding: 20px;\n' +
    '    }\n' +
    '    .hint-box .hint-content p.hint-p2{\n' +
    '      margin-top: 10px;\n' +
    '    }\n' +
    '    .hint-box .hint-content p.hint-p3{\n' +
    '      margin-top: 10px;\n' +
    '    }\n' +
    '    .hint-box .hint-content p span{\n' +
    '      color: #E10A0A;\n' +
    '    }\n' +
    '    .hint-box .hint-footer{\n' +
    '      width: 100%;\n' +
    '      box-sizing: border-box;\n' +
    '      border-top: 1px solid #cccccc;\n' +
    '    }\n' +
    '    .hint-box .hint-footer .hint-btn{\n' +
    '      float: left;\n' +
    '      width: 50%;\n' +
    '      box-sizing: border-box;\n' +
    '      text-align: center;\n' +
    '      line-height: 40px;\n' +
    '      cursor: pointer;\n' +
    '    }\n' +
    '    .hint-box .hint-footer .affirm-down{\n' +
    '      border-right: 1px solid #cccccc;\n' +
    '      color: #F87814;\n' +
    '    }\n' +
    '  </style>');

var _mobanid = geturl("id",url);
var _mobantid = geturl("tid",url);
if(_mobanid == null || _mobanid == 'false' || _mobanid == undefined || _mobanid==''){
    _mobanid = $('#infoid').val();
}
if(_mobantid == null || _mobantid == 'false' || _mobantid == undefined || _mobantid==''){
    _mobantid = $('#tid').val();
}
var userinfo = getCookie("userinfo");
userinfo=dealuserinfo(userinfo);
var PuTongCoin,VipCoin;

var needCoin, // 下载需要的金币
    userCoin, // 用户有的金币
    isbuy, // 用户是否用金币购买过
    mobanname, // 模板名称
    moban_gold, // 模板是否需要金币下载
    screkey = window.localStorage.getItem("screkey");

// 获取模板价格
/*$.ajax({
    url:"http://vip.cssmoban.com/apijinbi/MbinfoByMbid",
    type:"get",
    data:{
        mobanid: _mobanid
    },
    dataType:"json",
    async: false,
    success:function (res) {
        PuTongCoin = res.PuTongCoin;
        VipCoin = res.VipCoin;
    }
});*/

// 获取模板价格以及用户所剩金币信息
/*$.ajax({
    url:"http://vip.cssmoban.com/apijinbi/mbinfo",
    type:"get",
    data:{
        mobanid: _mobanid,
        userid: userinfo,
        screkey: screkey
    },
    dataType:"json",
    async: false,
    success:function (res) {
        // console.log(res);
        needCoin = res.needCoin;
        userCoin = res.userCoin;
        isbuy = res.isbuy;
        mobanname = res.mobanname;
        if (needCoin == 0){
            // 非金币模板
            moban_gold = false
        } else {
            moban_gold = true
        }
    }
});*/

function dwonload() {
    if (userinfo != null && userinfo != 'false' && userinfo != undefined) {
        /*if (moban_gold){
            if (isbuy){
                downloads();
            }
            else {
                if ($(".download-hint").length){

                }
                else {
                    var download_html = '<div class="download-hint">\n' +
                        '    <div class="hint-box">\n' +
                        '      <div class="hint-title">提示</div>\n' +
                        '      <div class="hint-content">\n' +
                        '        <p class="hint-p1">当前模板需要支付<span></span>金币，您的当前余额为<span></span>金币</p>\n' +
                        '        <p class="hint-p2">您当前是普通用户，本次下载需要扣除<span></span>金币</p>\n' +
                        '        <p class="hint-p3">开通VIP后可享受金币下载3折优惠</p>\n' +
                        '      </div>\n' +
                        '      <div class="hint-footer clearfix">\n' +
                        '        <div class="affirm-down hint-btn">确认下载</div>\n' +
                        '        <div class="cancel-down hint-btn">取消下载</div>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>';
                    $("body").append(download_html);
                }
                if(userVip){
                    $(".hint-content .hint-p1").html('当前模板需要支付<span>'+ VipCoin +'</span>金币，您的当前余额为<span>'+ userCoin +'</span>金币');
                    $(".hint-content .hint-p2").html('您当前是VIP用户，本次下载需要扣除<span>'+ VipCoin +'</span>金币');
                    $(".hint-content .hint-p3").hide();
                }else {
                    $(".hint-content .hint-p1").html('当前模板需要支付<span>'+ PuTongCoin +'</span>金币，您的当前余额为<span>'+ userCoin +'</span>金币');
                    $(".hint-content .hint-p2").html('您当前是普通用户，本次下载需要扣除<span>'+ PuTongCoin +'</span>金币');
                }

                $(".download-hint").show();

                $(".affirm-down").click(function () {
                    /*$.ajax({
                        url:"http://vip.cssmoban.com/apijinbi/koujinbin",
                        type:"post",
                        data:{
                            mobanid: _mobanid,
                            userid: userinfo,
                            screkey: screkey
                        },
                        async: false,
                        dataType:"json",
                        success:function (data) {
                            // console.log(data);
                            if(data.code == 0){
                                $(".download-hint").hide();
                                if(data.data.match(RegExp('http'))){
                                    window.location.href = data.data
                                } else {
                                    window.location.href = data.data;
                                    //"http://down.qfpffmp.cn:8020" + data.data;
                                }
                            }else if (data.code == 10){
                                var r_url = encodeURI(window.location.href);

                                window.location.href = "http://www.cssmoban.com/kf_down/index.html?infoid="+ _mobanid +"&r_url=" + r_url;
                            } else {
                                window.open("http://www.cssmoban.com/statics/user/page/goldPay.html?mobanid=" + _mobanid);
                            }
                        }
                    })*/
                /*});
                $(".cancel-down").click(function () {
                    $(".download-hint").hide();
                })
            }
        } else {*/
            if(userVip){
                $.ajax({
                    type: "post",
                    url: "http://vip.cssmoban.com/apishenji/down",
                    data: {
                        userid: userinfo,
                        mobanid: _mobanid,
                        screkey: screkey
                    },
                    async: false,
                    dataType: "json",
                    success: function (res) {
                        // console.log(res);
                         
                        if (res.code == 0) {
                            res.data = res.data.replace("down.mxyhn.xyz", 'down.cssmoban.com');
                            //res.data = res.data.replace(":8020", '');
                            window.location.href = res.data;


                        } else if (res.code == -2) {
                            // alert(res.status);
                            window.open("http://www.cssmoban.com/statics/user/page/kt.html");

                            // 2021-01-26 跳转暂停
                            // if (_mobantid == '20209539500826'){
                            //     window.open("http://www.cssmoban.com/staticres/user/page/up-pay-zm.html");
                            // }else{
                            //     window.open("http://www.cssmoban.com/staticres/user/page/up-pay.html");
                            // }
                            // 2021-01-26 跳转暂停 end

                        } else if (res.code == 10) {
                            var r_url = encodeURI(window.location.href);

                            window.location.href = "http://www.cssmoban.com/kf_down/index.html?infoid="+ _mobanid +"&r_url=" + r_url;
                        } else {
                            window.open("http://www.cssmoban.com/statics/user/page/kt.html");

                            // 2021-01-26 跳转暂停
                            // if (_mobantid == '20209539500826'){
                            //     window.open("http://www.cssmoban.com/staticres/user/page/up-pay-zm.html");
                            // }else{
                            //     window.open("http://www.cssmoban.com/staticres/user/page/up-pay.html");
                            // }
                            // 2021-01-26 跳转暂停 end
                        }
                    }
                });
            } else {
                window.open("http://www.cssmoban.com/statics/user/page/kt.html");

                // 2021-01-26 跳转暂停
                // if (_mobantid == '20209539500826'){
                //     window.open("http://www.cssmoban.com/staticres/user/page/up-pay-zm.html");
                // }else{
                //     window.open("http://www.cssmoban.com/staticres/user/page/up-pay.html");
                // }
                // 2021-01-26 跳转暂停 end
            }
    } else {
        $(".login-box").show();
    }
}

function downloads(){

    if (_mobanid == '' || _mobanid == null || _mobanid == undefined) {
        var refer = document.referrer;
        var numArr = refer.match(/\d+/g);
        _mobanid = refer != null ? refer[0] : 0;
    }

    $.ajax({
        type: "post",
        url: "http://vip.cssmoban.com/apishenji/down",
        data: {
            mobanid: _mobanid,
            userid: userinfo,
            screkey: screkey
        },
        async: false,
        dataType: "json",
        success: function (res) {
            if (res.code == 0) {
                //"http://down.qfpffmp.cn:8020" + res.data;
                res.data = res.data.replace("down.mxyhn.xyz", 'down.cssmoban.com');
                //res.data = res.data.replace(":8020", '');
                window.location.href = res.data;
            } else if (res.code == 10) {
                var r_url = encodeURI(window.location.href);
                window.open("http://www.cssmoban.com/kf_down/index.html?infoid="+ _mobanid +"&r_url=" + r_url);
            } else if (res.code == 11) {

            } else if (res.code == 12) {
                window.location.href = res.data;//"http://down.qfpffmp.cn:8020" + res.data;
            } else {
                layer.msg("下载错误！", {
                    icon: 2,
                    time: 2500
                });
            }
        }
    });
}

function geturl(keys, url) {
    var new_reg = new RegExp('(^|[&?])' + keys + '=([^&]*)(&|$)');
    var new_index = url.indexOf('?');
    var new_str = url.substring(new_index, url.length);
    var new_r = new_str.match(new_reg);
    if (new_r != null) return unescape(new_r[2]);
    return '';
}

function getLasturl(value){
    if(value!==null || value !==''){
        var str = value.split("http://");
        if (str.length > 1){
            var index = str[1].indexOf("/")+1;
            return str[1].substring(index);
        } else {
            return null;
        }

    }
    return null;
}

function convertTemp(d)
{
    var the_url = d;

    var first_split = the_url.split("//");

    // alert(first_split[0]);

    var without_resource = first_split[1];

    var second_split = without_resource.split("/");

    var domain = second_split[0];

    return domain;
}

$.ajax({
    url:_url + '/_menu.json',
    type:'get',
    data:{},
    dataType:'json',
    success:function (res) {
        if (res){
            if (res.code == 'success'){
                if (res.data.length > 1) {
                    var nav_html = '';
                    var length = res.data.length > 50 ? 50 : res.data.length;
                    for (var i=0;i<length;i++){
                        if (res.data[i].dataSrc == "index.html"){
                            nav_html+='<span data-src="'+ res.data[i].dataSrc +'"  class="active">'+ res.data[i].dataName +'</span>'
                        } else {
                            nav_html+='<span data-src="'+ res.data[i].dataSrc +'">'+ res.data[i].dataName +'</span>'
                        }
                    }
                    $("#nav-html").html(nav_html);

                    $(".preview-nav-list-block span").click(function(){
                        $(".preview-nav-list-block span").removeClass();
                        $(this).addClass('active');

                        // $("iframe").attr('src',$(this).data('src'));
                        $("#iframe").attr("src",_url +"/"+ $(this).data('src'));
                        $("#preview").attr("src",_url +"/"+ $(this).data('src'));
                    })
                }
            }
        }
    }
});
if (userinfo) {
    if(userinfo.indexOf("%20") != -1){
        userinfo=userinfo.replace("%20","");
    }
    if(userinfo.indexOf("+") != -1){
        userinfo=userinfo.replace("+","");
    }
    var userinfoArr = userinfo.match(/\d+/g);
    if(userinfoArr.length>0){
        userinfo=userinfoArr[0];
    }
    var qimoClientId = userinfo;
}
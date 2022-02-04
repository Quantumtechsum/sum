// JavaScript Document
$(document).ready(function () {
    $(".btn-nav").on("click",(function(){
        $(this).toggleClass("cur");
        $(".s-header #menu ul").toggleClass("s-nav");
        $("body").toggleClass("s-body");
    }));

    $(".btn-language").on("click",(function(){
        $(".language-box").show();
    }));
    $('body').click(function(e) {
        var target = $(e.target);
        if(!target.is('.btn-language') && !target.is('.language-box')) {
            if ( $('.language-box').is(':visible') ) {
                $('.language-box').hide();
            }
        }
    });


    //eospark新增

    (function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    })(jQuery);

    var urlValue = $.getUrlParam('ref');
    if ( urlValue === "eospark" ) {
        $(".pic-business-eospark").show();
        $(".pic-business-web").hide();
    }



    $(".back-to-top").hide();

    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $(".back-to-top").fadeIn(1500);
        }
        else
        {
            $(".back-to-top").fadeOut(1500);
        }
    });
    $(".back-to-top").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });



    if ($.cookie('explain') === undefined){
        $.cookie('explain', 'yes', { expires: 1, path: '/'});
    }
    if ($.cookie('explain') === 'yes'){
        let cur = document.location.pathname;
        if (cur.indexOf("/en/") > -1){
            $("body").prepend("<div id='explainHistory'><p>[Statement] : According to China's regulatory requirements, cryptocurrency-related businesses are not allowed to carry out illegal financial activities in China. If your project has such content or behaviors, please do not submit for cooperation. SlowMist as a third-party independent security company in the blockchain ecosystem, focusing on Blockchain Ecosystem Security, do not endorse or stand for any project.</p><i class='btn-close'>I accept</i></div>");
            $(".btn-close").click(function(){
                $("#explainHistory").remove("#explainHistory");
                $.cookie('explain', 'no', { expires: 1, path: '/'});
            });
        } else {
            $("body").prepend("<div id='explainHistory'><p>【官方声明】依据中国监管相关要求，加密货币相关业务不可在中国境内开展非法金融活动，如您的项目有此类特征或行为，请勿提交合作。慢雾科技作为区块链生态中的第三方独立安全公司，专注区块链生态安全，不为任何项目背书或站台。一切打着慢雾科技背书或站台旗号的项目，都不是慢雾科技官方授权，我们将保留法律追究的权利！</p><i class='btn-close'>我已知晓</i></div>");
            $(".btn-close").click(function(){
                $("#explainHistory").remove("#explainHistory");
                $.cookie('explain', 'no', { expires: 1, path: '/'});
            });
        }
    }


});









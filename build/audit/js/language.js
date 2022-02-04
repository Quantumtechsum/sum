var L = {
	//默认语言
	defaultLang: 'zh',
	//url对应规则 lang=>path
	rules:{
		'zh': '/',
		'en': '/en/',
		'jp': '/jp/',
		'kr': '/kr/'
	},
	init: function() {
		nl = this.getMyLang();
		this.switch(nl);
	},
	redirect: function(lang) {
		urlLang = this.getUrlLang();
		// console.log("target language is "+lang+", url language is "+urlLang);
		if(urlLang==lang)
			return
		_href = document.location.pathname.replace(this.rules[urlLang], this.rules[lang]) + document.location.search;

		// console.log('_href',_href);

		var newHref = _href.split("?lang=");

		// console.log('newHref',newHref[0]);

		document.location.href = newHref[0]+'?lang='+lang
	},
	switch: function(lang) {
		this.setCookie(lang);
		this.redirect(lang);
	},
	getUrlLang: function(){
		try{
			cur = '/' + document.location.pathname.split("/")[1] + "/";
			for(k in this.rules){
				var v = this.rules[k];
				if (cur==v){
					return k;
				}
			}
		}catch(e){}
		return this.defaultLang;
	},
	getMyLang: function() {
		nl = this.getCookie();
		if(nl==null)
			nl = navigator.browserLanguage?navigator.browserLanguage:navigator.language;
		for(k in this.rules){
			if (nl.indexOf(k)>-1){
				return k;
			}
		}
		return this.defaultLang;
	},
	setCookie: function(lang) {
		document.cookie = 'setLang=' + lang + '; path=/; expires=Fri, 31 Dec 9999 23:59:59';
	},
	getCookie: function() { 
	    var arr,reg = new RegExp('(^| )setLang=([^;]*)(;|$)');
	    if(arr = document.cookie.match(reg))
	        return unescape(arr[2]); 
	    else 
	        return null; 
	}
};


//网页初始化时执行
// L.init();
//切换语言
// L.switch("en");
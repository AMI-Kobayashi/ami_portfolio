(function(d) {
    var config = {
      kitId: 'dhm6lzq',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

// ハンバーガー
    $('.sp_btn, .sp_nav li').on('click', function () {
        $('.sp_btn').toggleClass('open');
        $('.sp_nav').fadeToggle();
    })



  
    var config = {
      kitId: 'dhm6lzq',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  (document);



 

   
      var webStorage = function () {
         if (sessionStorage.getItem('access')) {
          //2回目以降アクセス時の処理
          console.log('2回目アクセス');
          $("#container").css("opacity","1");
          $("#splash").css("display", "none");
          $(".splash-logo").css("display", "none");
  
        } else {
          //初回アクセス時の処理
          sessionStorage.setItem('access', 0);
          console.log('初回アクセスです');
          $(window).on('load',function(){
            $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
          
            //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
            $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
            
                $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
          
            });
            //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
            
           //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
            $('.splashbg').on('animationend', function() {    
                //この中に動かしたいJSを記載
            });
            //=====ここまで背景が伸びた後に動かしたいJSをまとめる
                
          });
      }
      }

webStorage();
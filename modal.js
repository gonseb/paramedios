﻿(function(n){n(["jquery"],function(n,t){function ot(n){i.modal(nt).find(".modal-content").append(n)}function e(){var t,r;try{r=require("Q")}catch(u){r=window.Q}return r?t=r.defer():(t=n.Deferred(),t.promise=t.promise()),t.promise.element=i,t}function rt(t){var e,o,s,i,u,r,h;if(t===!1)return f;if(e=n(c).addClass("modal-footer").prop("id",et),t)for(o=0,s=t.length;o<s;o++){i=t[o];u=n("<button>").addClass("btn btn-"+(i.style||"primary"));for(r in i)if(i.hasOwnProperty(r))switch(r){case"close":i[r]&&u.attr("data-dismiss","modal").addClass("x");break;case b:h=i.click.bind(ut(!0).find(".modal-content"));u.click(h);break;case"text":u.html(i[r]);break;default:u.attr(r,i[r])}e.append(u)}else e.append('<button class="x btn btn-primary" data-dismiss=modal type=button>Close<\/button>');return e}function st(t){var i,u=t.loading?r.loadingHtml:t.message||t;return u.on||u.onclick?(i=t.clone===!0?n(u).clone():n(u),i.addClass(t.useBin&&!t.loading?w:it)):i=n(c).attr("style","position:relative;word-wrap:break-word;").addClass(p).html(u),t.css&&t.css!==i.css&&i.css(t.css),i}function ut(t){function r(){return n('<div class="modal fade" tabindex="-1"><style>.modal-xl{width:96%;}<\/style><div class=modal-dialog><div class=modal-content> <div class=modal-header><button type=button class="x close" data-dismiss=modal><span aria-hidden=true>&times;<\/span><span class=sr-only>Close<\/span><\/button><h4 class=modal-title><\/h4><\/div><\/div><\/div><\/div>').on("hidden.bs.modal",ft).on(b,"button.x",function(t){var r=n(t.currentTarget);if(r.prop("type")!==l)return i.modal(a);try{if(r.closest("form")[0].checkValidity())return s()}catch(u){return s()}return i})}return(i||(n("#"+h).length||n("body").append(n(c).prop("id",h).hide()),i=r()),t&&i)?i:i.on(v,function(){n(this).find(k).first().focus()})}function ft(){if(i){var n=i.find("."+w).removeClass(w).appendTo("#"+h);i.off(y).off(v).find(".modal-content > div:not(:first-child)").remove();(!r.allowContentRecycle||g.clone)&&n.remove()}}function ht(t,i){if(!t)throw new Error("Invalid parameters!");ft();g=t;var u=ut();u.find(".modal-dialog").removeClass("modal-sm modal-lg modal-xl").addClass(t.size?"modal-"+t.size:r.size);u.find(".modal-title").html((t.title||i||r.title)+" ").append(n("<small>").html(t.subtitle||f));u.on(y,t.onHide)}function ct(t,u){function h(n){return i.find("."+p).html(n),s.resolve(i)}function c(n){var t='<div class="alert alert-danger"><strong>XHR Fail: <\/strong>URL [ '+f.url+"] load fail.<\/div>";return i.find("."+p).html(t),s.reject(n)}var s=e(),f={async:!0,deferred:s,loading:!0,title:t.title||u||r.title,url:t.url||t};return t.url&&n.extend(f,t),n.ajax({url:f.url,dataType:"text"}).success(h).fail(c),o(f,u)}function o(t,r){ht(t,r);var u=t.deferred||e(),f=n(c).append(st(t),rt(t.buttons));if(ot(f),!t.async)i.on(v,u.resolve);return u.promise}function lt(t,i){function h(t){s();var i=n(t.currentTarget).html();return u[i]?f.resolve():f.reject()}var f=e();return o({async:!0,buttons:[{close:!0,click:h,text:u[t.label]?u[t.label]:u[r.confirmLabel],style:d},{close:!0,click:h,text:u[t.label]?t.label:r.confirmLabel}],deferred:f,message:t.message||t,onHide:h,size:t.size,title:t.title||i})}function at(t,i){function h(){return n(this).parent().find("div."+it).fadeOut(function(){n(this).remove()}),u.resolve()}var u=e(),f='<div class=modal-body style="position: absolute;width: 100%;background-color: rgba(255,255,255,0.8);height: 100%;">%1%<\/div><iframe class="embed-responsive-item" frameborder=0 src="%0%" style="width:100%;height:75vh;display:block;"/>'.replace("%0%",t.message||t.url||t).replace("%1%",r.loadingHtml),s=n(f).load(h);return o({async:!0,buttons:t.buttons||!1,deferred:u,message:s,size:t.size||tt.xl,title:t.title||i})}function vt(){return n("#"+h+" > *").remove()}function yt(t,h){function b(n){var t=i.find(k).val();return s(),n.type!==l?y.reject(t):y.resolve(t),!1}var y=e(),c={deferred:y},a,v,p,w;if(typeof t=="object"?n.extend(c,t):(c.message=t,c.title=h),c.async=!0,c.buttons)for(v=0,p=c.buttons.length;v<p;v++)a=c.buttons[v],a.style=(a.style||"default")+" pull-left",a.type=a.type||"button";return w=rt([{close:!0,type:"reset",text:u.OK,style:d},{close:!1,type:l,text:r.confirmLabel}].concat(c.buttons||[])),c.buttons=!1,c.onHide=b,c.message=n('<form role=form style="margin-bottom:0;"><div class=modal-body><label for=prompt-input class=control-label>'+(c.message||f)+'<\/label><input type=text class=form-control required autocomplete="on" value="'+(c.value||f)+(c.pattern?'" pattern="'+c.pattern:f)+'"><\/div><\/form>').append(w).on(l,b),o(c)}function pt(t){return n.extend(r,t)}function wt(t){return i&&i.remove(),n.extend(nt,t)}function s(){return i&&i.off(y).modal(a),i}var i,h="recycle-bin",c="<div>",f="",b="click",a="hide",v="shown.bs.modal",l="submit",et="eFooter",y=a+".bs.modal",k="input",d="danger",u={OK:"Cancel",True:"False",Yes:"No"},g={},p="modal-body",nt={},w="modal-rec",tt={sm:"sm",lg:"lg",xl:"xl"},it="modal-tmp",r={allowContentRecycle:!0,confirmLabel:Object.keys(u)[0],labels:u,loadingHtml:'<h5>Cargando...<\/h5><div class=progress><div class="progress-bar progress-bar-striped active" style="width: 100%"><\/div><\/div>',size:f,title:"Attention"};return t.ajax=ct,t.alert=o,t.close=s,t.confirm=lt,t.emptyBin=vt,t.iframe=at,t.prompt=yt,t.setEModalOptions=pt,t.setModalOptions=wt,t.size=tt,t.version="1.2.6",t})})(typeof define=="function"&&define.amd?define:function(n,t){this.eModal=typeof module!="undefined"&&module.exports?t(require(n[0]),module.exports):t(window.$,{})});
//# sourceMappingURL=eModal.min.js.map

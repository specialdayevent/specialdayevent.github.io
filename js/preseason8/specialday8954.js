(self.webpackChunk=self.webpackChunk||[]).push([[1375],{7596:function(e,t,r){"use strict";var a=r(9669),n=r.n(a),i={missionRewardProgress:!1,getMissionReward:function(e){i.missionRewardProgress||(i.missionRewardProgress=!0,n().post("/specialday/game/mission/reward",{mission_id:e}).then((function(t){var r=t.data;200===t.status?($("#daily_mission_reward_btn"+e).html(window.__i18n.preseason8.spd_wrap.sec3.mi_ta.btn_off),$("#daily_mission_reward_btn"+e).attr("disabled",!0),$("#sec2_candy").html(r.remainPoint),$("#sec2_candy").attr("data-candy",r.remainPoint)):r.error&&255===r.error?openFc("pop_alert6"):void 0!==window.__i18n.preseason8.alert[r.error]?alert(window.__i18n.preseason8.alert[r.error]):alert(window.__i18n.error.default),i.missionRewardProgress=!1})).catch((function(e){console.log(e),alert(window.__i18n.error.default),i.missionRewardProgress=!1})))},candyProgress:!1,useCandyToEva:function(){parseInt($("#sec2_candy").attr("data-candy"))<=0?alert(window.__i18n.preseason8.alert[216]):i.candyProgress||(i.candyProgress=!0,n().post("/specialday/game/eva/candy").then((function(e){var t=e.data;if(200===e.status){$("#m1_progress").val(t.totalRewardPointPercent),null!==i.heartStatusDebounce&&clearTimeout(i.heartStatusDebounce),i.heartStatusDebounce=setTimeout((function(){i.checkHeartReward()}),500),$("#sec2_heart").html(i.numberFormat(t.heartCount)),$("#sec2_heart").attr("data-heart",t.heartCount),$("#sec2_candy").html(t.remainPoint),$("#sec2_candy").attr("data-candy",t.remainPoint);var r=parseInt($("#used_candy").attr("data-used_candy"));r++,$("#used_candy").html(r),$("#used_candy").attr("data-used_candy",r),r>=20?$("#m2_progress").val(100):$("#m2_progress").val(5*r),4===r?$("#sec3_reward_btn1").attr("disabled",!1):8===r?$("#sec3_reward_btn2").attr("disabled",!1):12===r?$("#sec3_reward_btn3").attr("disabled",!1):16===r?$("#sec3_reward_btn4").attr("disabled",!1):20===r&&$("#sec3_reward_btn5").attr("disabled",!1);var a=window.__i18n.preseason8.spd_wrap.sec2.like_box.noti1;a=a.replace("[00]",t.reward_point),$("#pop_alert4_txt").html(a),openFc("pop_alert4")}else t.error&&255===t.error?openFc("pop_alert6"):void 0!==window.__i18n.preseason8.alert[t.error]?alert(window.__i18n.preseason8.alert[t.error]):alert(window.__i18n.error.default);i.candyProgress=!1})).catch((function(e){console.log(e),alert(window.__i18n.error.default),i.candyProgress=!1})))},heartStatusDebounce:null,checkHeartRewardProgress:!1,checkHeartReward:function(){i.checkHeartRewardProgress||(i.checkHeartRewardProgress=!0,n().post("/specialday/game/eva/heart").then((function(e){var t=e.data;200===e.status&&(t.totalRewardPointPercent>=25&&t.used_point>=3&&(void 0===t.specialRewardItemLog[6]||null===t.specialRewardItemLog[6])&&$("#sec2_reward_btn1").attr("disabled",!1),t.totalRewardPointPercent>=50&&t.used_point>=6&&(void 0===t.specialRewardItemLog[7]||null===t.specialRewardItemLog[7])&&$("#sec2_reward_btn2").attr("disabled",!1),t.totalRewardPointPercent>=75&&t.used_point>=9&&(void 0===t.specialRewardItemLog[8]||null===t.specialRewardItemLog[8])&&$("#sec2_reward_btn3").attr("disabled",!1),t.totalRewardPointPercent>=100&&t.used_point>=12&&(void 0===t.specialRewardItemLog[9]||null===t.specialRewardItemLog[9])&&$("#sec2_reward_btn4").attr("disabled",!1),$("#m1_progress").val(t.totalRewardPointPercent)),i.checkHeartRewardProgress=!1})).catch((function(e){console.log(e),i.checkHeartRewardProgress=!1})),null!==i.heartStatusDebounce&&clearTimeout(i.heartStatusDebounce),i.heartStatusDebounce=setTimeout((function(){i.checkHeartReward()}),6e5))},rewardProgress:!1,getReward:function(e){i.rewardProgress||(i.rewardProgress=!0,n().post("/specialday/game/reward",{reward_id:e}).then((function(t){var r=t.data;if(200===t.status){if(e>=6)$("#sec2_reward_btn"+(e-5)).html("...");else $("#sec3_reward_btn"+e).html("...");setTimeout(i.rewardStatus,1e3,e)}else{if(r.error&&255===r.error?openFc("pop_alert6"):void 0!==window.__i18n.preseason8.alert[r.error]?alert(window.__i18n.preseason8.alert[r.error]):alert(window.__i18n.error.default),i.rewardProgress=!1,e>=6)$("#sec2_reward_btn"+(e-5)).html(window.__i18n.preseason8["pajama-party"].button_title.receive);else $("#sec3_reward_btn"+e).html(window.__i18n.preseason8["pajama-party"].button_title.receive)}})).catch((function(e){console.log(e),alert(window.__i18n.error.default),i.rewardProgress=!1})))},rewardStatus:function(e){n().post("/specialday/game/reward-result",{reward_id:e}).then((function(t){var r=t.data;if(200===t.status){if(void 0!==r.retry_after)setTimeout(i.rewardStatus,r.retry_after,e);else if(void 0!==r.success){if(openFc("pop_alert3"),e>=6)$("#sec2_reward_btn"+(e-5)).html(window.__i18n.preseason8["pajama-party"].button_title.received).attr("disabled","disabled");else $("#sec3_reward_btn"+e).html(window.__i18n.preseason8["pajama-party"].button_title.received).attr("disabled","disabled"),20===parseInt($("#used_candy").attr("data-used_candy"))&&"disabled"===$("#sec3_reward_btn1").attr("disabled")&&"disabled"===$("#sec3_reward_btn2").attr("disabled")&&"disabled"===$("#sec3_reward_btn3").attr("disabled")&&"disabled"===$("#sec3_reward_btn4").attr("disabled")&&"disabled"===$("#sec3_reward_btn5").attr("disabled")&&($("#used_candy").html(0),$("#used_candy").attr("data-used_candy",0),$("#m2_progress").val(0),$("#sec3_reward_btn1").html(window.__i18n.preseason8["pajama-party"].button_title.receive),$("#sec3_reward_btn2").html(window.__i18n.preseason8["pajama-party"].button_title.receive),$("#sec3_reward_btn3").html(window.__i18n.preseason8["pajama-party"].button_title.receive),$("#sec3_reward_btn4").html(window.__i18n.preseason8["pajama-party"].button_title.receive),$("#sec3_reward_btn5").html(window.__i18n.preseason8["pajama-party"].button_title.receive))}else{if(e>=6)$("#sec2_reward_btn"+(e-5)).html(window.__i18n.preseason8["pajama-party"].button_title.receive);else $("#sec3_reward_btn"+e).html(window.__i18n.preseason8["pajama-party"].button_title.receive);alert(window.__i18n.error.default)}i.rewardProgress=!1}else{if(void 0!==window.__i18n.preseason8.alert[r.error]?alert(window.__i18n.preseason8.alert[r.error]):alert(window.__i18n.error.default),i.rewardProgress=!1,e>=6)$("#sec2_reward_btn"+(e-5)).html(window.__i18n.preseason8["pajama-party"].button_title.receive);else $("#sec3_reward_btn"+e).html(window.__i18n.preseason8["pajama-party"].button_title.receive)}})).catch((function(t){(alert(window.__i18n.error.default),i.rewardProgress=!1,e>=6)?$("#sec2_reward_btn"+(e-5)).html(window.__i18n.preseason8["pajama-party"].button_title.receive):$("#sec3_reward_btn"+e).html(window.__i18n.preseason8["pajama-party"].button_title.receive)}))},numberFormat:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}};i.heartStatusDebounce=setTimeout((function(){i.checkHeartReward()}),6e5),$("#daily_mission_reward_btn1").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getMissionReward(1)})),$("#daily_mission_reward_btn2").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getMissionReward(2)})),$("#daily_mission_reward_btn3").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getMissionReward(3)})),$("#daily_mission_reward_btn4").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getMissionReward(4)})),$("#sec2_candy_btn").on("click",(function(){i.useCandyToEva()})),$("#sec3_reward_btn1").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getReward(1)})),$("#sec3_reward_btn2").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getReward(2)})),$("#sec3_reward_btn3").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getReward(3)})),$("#sec3_reward_btn4").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getReward(4)})),$("#sec3_reward_btn5").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getReward(5)})),$("#sec2_reward_btn1").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getReward(6)})),$("#sec2_reward_btn2").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getReward(7)})),$("#sec2_reward_btn3").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getReward(8)})),$("#sec2_reward_btn4").on("click",(function(){"disabled"!==$(this).attr("disabled")&&i.getReward(9)}))},4155:function(e){var t,r,a=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===n||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:n}catch(e){t=n}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var o,d=[],c=!1,l=-1;function _(){c&&o&&(c=!1,o.length?d=o.concat(d):l=-1,d.length&&w())}function w(){if(!c){var e=s(_);c=!0;for(var t=d.length;t;){for(o=d,d=[];++l<t;)o&&o[l].run();l=-1,t=d.length}o=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function u(e,t){this.fun=e,this.array=t}function b(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];d.push(new u(e,t)),1!==d.length||c||s(w)},u.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}},0,[[7596,8929,8898]]]);
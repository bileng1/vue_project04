(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e484a6c4"],{"15bb":function(e,t,n){"use strict";var a=n("bc91"),r=n.n(a);r.a},"381b":function(e,t,n){},"504c":function(e,t,n){var a=n("0d58"),r=n("6821"),s=n("52a7").f;e.exports=function(e){return function(t){var n,i=r(t),o=a(i),u=o.length,c=0,l=[];while(u>c)s.call(i,n=o[c++])&&l.push(e?[n,i[n]]:i[n]);return l}}},"553c":function(e,t,n){},7369:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"deposit"},[n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"银行转账",name:"1"}},[n("depositBank")],1),e._l(e.payTypes,function(t,a){return n("el-tab-pane",{key:a,attrs:{label:t[0].name,name:""+(a+2)}},[n("depositThird",{attrs:{paytypes:t},on:{QRPay:e.QRPay}})],1)})],2)],1)},r=[],s=n("2b0e"),i=n("ee0f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.dataBanks?n("div",{staticClass:"sub"},[n("el-row",e._l(e.dataBanks,function(t,a){return n("dl",{key:a,class:{active:a===e.index},on:{click:function(t){return e.chooseBank(a)}}},[n("dt",[n("i",{class:"i-bank-"+a}),e._v(e._s(t.bank)+"\n            ")]),n("dd",[e._v("\n                支行：\n                "),n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.copy(a,"area")}}},[e._v("复制")]),n("span",[e._v(e._s(t.area))])]),n("dd",[e._v("\n                账户：\n                "),n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.copy(a,"holder")}}},[e._v("复制")]),n("span",[e._v(e._s(t.holder))])]),n("dd",[e._v("\n                卡号：\n                "),n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.copy(a,"account")}}},[e._v("复制")]),n("span",[e._v(e._s(t.account))])])])}),0),n("el-row",[n("el-radio-group",{model:{value:e.model.way,callback:function(t){e.$set(e.model,"way",t)},expression:"model.way"}},e._l(e.depositBankTypes,function(t,a){return n("el-radio-button",{key:a,attrs:{label:t.value}},[e._v(e._s(t.text))])}),1)],1),n("el-row",[n("ul",[n("li",[n("label",[e._v("存款姓名：")]),n("el-input",{attrs:{placeholder:"请输入存款姓名"},model:{value:e.model.depositer,callback:function(t){e.$set(e.model,"depositer",t)},expression:"model.depositer"}})],1),n("li",[n("label",[e._v("存入金额：")]),n("el-input",{attrs:{placeholder:"请输入存入金额"},model:{value:e.model.amount,callback:function(t){e.$set(e.model,"amount",t)},expression:"model.amount"}}),n("span",[e._v("最低存入金额"+e._s(e.currentBank.min)+"，最高存入金额"+e._s(e.currentBank.max))])],1)])]),n("el-row",[n("el-button",{directives:[{name:"loading",rawName:"v-loading.lock",value:e.loading,expression:"loading",modifiers:{lock:!0}}],attrs:{type:"danger",round:""},on:{click:e.post}},[e._v("确认提交")])],1)],1):n("div",{staticClass:"sub"},[e._v("\n    该支付通道暂未开放，如有疑问请联系客服！\n")])},u=[],c=(n("c5f6"),n("5c96")),l=s["default"].extend(i["a"]),d=new l,p={name:"depositBank",data:function(){return{loading:!1,index:0,model:{id:0,amount:0,depositer:"",way:"网银转账"}}},mounted:function(){d.getPayTypes(),this.currentBank&&(this.model.amount=this.currentBank.min)},computed:{dataBanks:function(){return d.payTypes.bank},currentBank:function(){if(this.dataBanks)return this.dataBanks[this.index]},inputRange:function(){if(this.currentBank)return"最小金额".concat(this.currentBank.min,",最大金额").concat(this.currentBank.max)}},methods:{chooseBank:function(e){this.index=e},copy:function(e,t){var n=this.dataBanks[e][t];this.common.copy(n),Object(c["Message"])("复制成功!")},post:function(){var e=this;return this.model.id=this.currentBank.id,0===this.model.id?(Object(c["Message"])("请选择银行卡"),!1):0===(this.model.amount||0)?(Object(c["Message"])("请输入存入金额"),!1):Number.isInt(this.model.amount)?this.model.amount>=this.currentBank.min&&this.model.amount<=this.currentBank.max?""===this.model.depositer?(Object(c["Message"])("请输入存款姓名"),!1):(this.loading=!0,void d.postUserBankPay(this.model).then(function(){e.loading=!1;var t="存款申请成功，请耐心等待财务上分";e.model.amount=e.currentBank.min,e.model.depositer="",c["Message"].success(t)},function(t){e.loading=!1,c["Message"].error(t)})):(Object(c["Message"])(this.inputRange),!1):(Object(c["Message"])("请输入整数金额"),!1)}}},f={mixins:[i["a"],p]},m=f,h=(n("cb4f"),n("2877")),g=Object(h["a"])(m,o,u,!1,null,"590cd416",null),y=g.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.dataPays?n("div",{staticClass:"sub"},[n("el-row",[n("el-radio-group",{model:{value:e.index,callback:function(t){e.index=t},expression:"index"}},e._l(e.dataPays,function(t,a){return n("el-radio-button",{key:a,attrs:{label:a}},[e._v(e._s(t.channel))])}),1)],1),n("el-row",[n("ul",[n("li",[n("label",[e._v("充值金额：")]),n("el-input",{attrs:{placeholder:"请输入充值金额"},model:{value:e.model.amount,callback:function(t){e.$set(e.model,"amount",t)},expression:"model.amount"}}),n("span",[e._v("最低充值金额"+e._s(e.currentPay.min)+"，最高充值金额"+e._s(e.currentPay.max))])],1)])]),n("el-row",[n("el-button",{directives:[{name:"loading",rawName:"v-loading.lock",value:e.loading,expression:"loading",modifiers:{lock:!0}}],attrs:{type:"danger",round:""},on:{click:e.post}},[e._v("确认提交")])],1)],1):e._e()},_=[],b=(n("ac6a"),n("8615"),n("7f7f"),s["default"].extend(i["a"])),k=new b,x={name:"depositThird",props:{paytypes:{type:Array}},data:function(){return{loading:!1,index:0,model:{pid:0,amount:0,name:"",code:""}}},mounted:function(){k.getPayTypes(),this.model.amount=this.currentPay.min},computed:{dataPays:function(){return this.paytypes},currentPay:function(){return this.dataPays[this.index]},inputRange:function(){return"最小金额".concat(this.currentPay.min,",最大金额").concat(this.currentPay.max)}},methods:{choosePay:function(e){this.index=e},qrcodePay:function(e,t,n){var a={url:e,platform:t,amount:n};this.$emit("QRPay",a)},post:function(){var e=this;return this.model.pid=this.currentPay.id,this.model.name=this.currentPay.name,this.model.code=Object.values(this.currentPay.banks)[0],0===this.model.pid?(Object(c["Message"])("请选择充值平台"),!1):0===(this.model.amount||0)?(Object(c["Message"])("请输入充值金额"),!1):Number.isInt(this.model.amount)?this.model.amount>=this.currentPay.min&&this.model.amount<=this.currentPay.max?(this.loading=!0,void k.postUserThirdPay(this.model).then(function(t){e.loading=!1;var n=t.msg||"存款申请成功，请耐心等待财务上分",a=e.currentPay.channel,r=e.model.amount,s=a.indexOf("[H5]")>-1,i=n.indexOf("<form ")>-1,o=n;i&&(o="/submit.html?q="+window.btoa(encodeURIComponent(n))),s||i?c["MessageBox"].confirm("您即将离开本站，前往支付平台，确定该操作吗？").then(function(){window.open(o)}):e.qrcodePay(o,a,r),e.model.amount=e.currentPay.min},function(t){e.loading=!1,c["Message"].error(t)})):(Object(c["Message"])(this.inputRange),!1):(Object(c["Message"])("请输入整数金额"),!1)}}},w={mixins:[x]},P=w,T=(n("ec5f"),Object(h["a"])(P,v,_,!1,null,"44d7f1a8",null)),B=T.exports,O=s["default"].extend({mixins:[i["a"]]}),M=new O,j={data:function(){return{activeName:"1"}},computed:{payTypes:function(){var e=[];for(var t in M.payTypes)"bank"!==t&&e.push(M.payTypes[t]);return e}},methods:{QRPay:function(e){window.console.log(e)}},components:{depositBank:y,depositThird:B}},S=j,U=(n("15bb"),n("bc4d"),Object(h["a"])(S,a,r,!1,null,"a18f3afa",null));t["default"]=U.exports},8615:function(e,t,n){var a=n("5ca1"),r=n("504c")(!1);a(a.S,"Object",{values:function(e){return r(e)}})},bc4d:function(e,t,n){"use strict";var a=n("c5a5"),r=n.n(a);r.a},bc91:function(e,t,n){},c5a5:function(e,t,n){},cb4f:function(e,t,n){"use strict";var a=n("381b"),r=n.n(a);r.a},ec5f:function(e,t,n){"use strict";var a=n("553c"),r=n.n(a);r.a},ee0f:function(e,t,n){"use strict";n("a481");var a=n("2b0e"),r={post_bankpay:"~/user/BankPay",post_thirdpay:"~/user/ThirdPay",get_user_card:"~/user/GetMyCards",post_withdraw:"~/user/Withdraw",get_team_billlogs:"~/billlog/teambilllogload",get_billlogdetail:"~/billlog/billlogdetail",get_user_paytypes:"~/user/GetPayTypes",get_user_billlogs:"~/user/GetBillLogs",get_user_transfers:"~/user/GetTransfers",get_user_transfer:"~/user/GetTransfer",get_user_recharges:"~/user/GetRecharges",get_user_recharge:"~/user/GetRecharge",get_user_withdraws:"~/user/GetWithdraws",get_user_withdraw:"~/user/GetWithdraw"};for(var s in r)r[s]=r[s].replace("~",baseUrl);var i=new a["default"]({methods:{POST:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(a,r){t.axios.post(e,n).then(function(e){var t="",n=parseInt(e.code);if(n){for(var s in t+=e.msg||"",e.errors)t+=e.errors[s]+"\n";r(t)}else a(e)}).catch(function(e){window.console.log(e)})})}}}),o=function(){return i.POST(r.get_user_paytypes)},u=function(e){return i.POST(r.post_bankpay,e)},c=function(e){return i.POST(r.post_thirdpay,e)},l=function(){return i.POST(r.get_user_card)},d=function(e){return i.POST(r.post_withdraw,e)},p=function(e){return i.POST(r.get_billlogdetail,e)},f=function(e){return i.POST(r.get_team_billlogs,e)},m=function(e){return i.POST(r.get_user_billlogs,e)},h=function(e){return i.POST(r.get_user_transfers,e)},g=function(e){return i.POST(r.get_user_transfer,e)},y=function(e){return i.POST(r.get_user_recharges,e)},v=function(e){return i.POST(r.get_user_recharge,e)},_=function(e){return i.POST(r.get_user_withdraws,e)},b=function(e){return i.POST(r.get_user_withdraw,e)};t["a"]={name:"account",data:function(){return{billtypes:[{text:"全部",value:""},{text:"入账",value:"入账"},{text:"投注",value:"投注"},{text:"彩票派奖",value:"彩票派奖"},{text:"信用额度调整",value:"信用额度调整"},{text:"余额调整",value:"余额调整"},{text:"结算",value:"结算"},{text:"充值",value:"充值"},{text:"提现",value:"提现"}],deposittypes:[{text:"全部",value:""},{text:"转账汇款",value:"1"},{text:"在线充值",value:"2"},{text:"系统充值",value:"3"}],depositbanktypes:[{text:"网银转账",value:"网银转账"},{text:"支付宝",value:"支付宝"},{text:"微信",value:"微信"},{text:"ATM转账",value:"ATM转账"},{text:"ATM现金入款",value:"ATM现金入款"},{text:"银行柜台转账",value:"银行柜台转账"},{text:"手机银行转账",value:"手机银行转账"}],paytypes:[]}},computed:{billTypes:function(){return this.billtypes},depositTypes:function(){return this.deposittypes},depositBankTypes:function(){return this.depositbanktypes},payTypes:function(){var e={};for(var t in this.paytypes.types){var n=this.paytypes.types[t],a=e[t];a||(e[t]=a=n)}return e}},created:function(){this.getPayTypes()},methods:{getNowFormatDate:function(e){var t=new Date;"endTime"==e&&t.setDate(t.getDate()+1);var n="-",a=t.getFullYear(),r=t.getMonth()+1,s=t.getDate();r>=1&&r<=9&&(r="0"+r),s>=0&&s<=9&&(s="0"+s);var i=a+n+r+n+s+" 08:00:00";return i},getPayTypes:function(){var e=this;o().then(function(t){e.paytypes=t})},postUserWithdraw:function(e){return d(e)},postUserBankPay:function(e){return u(e)},postUserThirdPay:function(e){return c(e)},getUserCard:function(){return l()},getUserBillLogs:function(e){return m(e)},getTeamBillLogs:function(e){return f(e)},getBillLog:function(e){return p(e)},getUserTransfers:function(e){return h(e)},getUserTransfer:function(e){return g(e)},getUserWithdraws:function(e){return _(e)},getUserWithdraw:function(e){return b(e)},getUserRecharges:function(e){return y(e)},getUserRecharge:function(e){return v(e)}}}}}]);
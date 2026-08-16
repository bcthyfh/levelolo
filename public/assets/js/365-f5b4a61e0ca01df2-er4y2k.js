(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[365,3691],{77530:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67251),i=n(36506),o=n(45113),a=n(13328),s=n(1295);function l(e){var t;let{children:n,isExpanded:l}=e,d=(0,o.useRef)(null),c=l?`${null==(t=d.current)?void 0:t.scrollHeight}px`:"0px",u=(0,i.c)(s.s.description,{[s.s.expanded]:l});return(0,r.jsx)("div",{className:u,style:{maxHeight:c},ref:d,children:(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{component:"div",variant:"regular",weight:"medium",color:"text-body-1",children:n})})})}},14177:function(e,t,n){"use strict";n.d(t,{UQ:function(){return d}});var r=n(67251),i=n(45113),o=n(98791),a=n(60812),s=n(77530),l=n(1295);let d=e=>{let{children:t,expandedIndex:n=-1,onToggleItem:o,fullWidth:a}=e,[s,d]=(0,i.useState)(n);(0,i.useEffect)(()=>{d(n)},[n]);let c=e=>{let t=s===e?null:e;d(t),o&&o(e,t===e)};return(0,r.jsx)("div",{className:l.s.accordion,children:i.Children.map(t,(e,t)=>i.cloneElement(e,{isExpanded:s===t,onToggle:()=>c(t),fullWidth:a}))})};d.Item=o.Z,d.Title=a.Z,d.Description=s.Z},98791:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67251),i=n(45113),o=n(1295),a=n(36506);function s(e){let{children:t,isExpanded:n,onToggle:s,fullWidth:l}=e;return(0,r.jsx)("div",{className:(0,a.c)(o.s.item,{[o.s.fullWidth]:l}),children:i.Children.map(t,e=>i.cloneElement(e,{isExpanded:n,onToggle:s}))})}},60812:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67251),i=n(1295),o=n(13328);let a=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",className:i.s.smallArrow,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.2762 8.65125C6.6345 8.30673 7.20424 8.3179 7.54875 8.6762L12 13.4015L16.4513 8.6762C16.7958 8.3179 17.3655 8.30673 17.7238 8.65125C18.0821 8.99576 18.0933 9.5655 17.7487 9.92379L12.6488 15.3238C12.4791 15.5003 12.2448 15.6 12 15.6C11.7552 15.6 11.5209 15.5003 11.3513 15.3238L6.25125 9.92379C5.90674 9.5655 5.91791 8.99576 6.2762 8.65125Z"})}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",className:i.s.largeArrow,children:(0,r.jsx)("path",{d:"M19.5 8.25L12 15.75L4.5 8.25",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]});var s=n(36506);let l=e=>{let{children:t,onToggle:n,isExpanded:l}=e,d=(0,s.c)(i.s.icon,{[i.s.expanded]:l}),c=(0,s.c)(i.s.title,{[i.s.expanded]:l});return(0,r.jsxs)("div",{className:c,onClick:n,children:[(0,r.jsx)(o.Z,{variant:"subHeading",weight:"semi-bold",color:"text-heading",children:t}),(0,r.jsx)("div",{className:d,children:a()})]})}},54274:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67251),i=n(72454),o=n(45113),a=n(13328);let s=e=>"small"===e?"label":"tiny",l=e=>{switch(e){case"error":return"error";case"neutral":default:return"static-black";case"primary":return"primary";case"success":return"success";case"warning":return"warning-800";case"grey":return"text-heading";case"blue":return"blue";case"yellow":return"yellow-700";case"orange":return"secondary-700"}};n(86149);let d={badge:"_badge_weptd_2",pillShape:"_pillShape_weptd_5",low:"_low_weptd_13",primary:"_primary_weptd_15",error:"_error_weptd_18",success:"_success_weptd_21",neutral:"_neutral_weptd_24",warning:"_warning_weptd_27",grey:"_grey_weptd_30",blue:"_blue_weptd_33",yellow:"_yellow_weptd_36",orange:"_orange_weptd_39",high:"_high_weptd_44",small:"_small_weptd_76",medium:"_medium_weptd_79",large:"_large_weptd_82",icon:"_icon_weptd_88"};function c(e){let{size:t="medium",label:n,intent:c="primary",emphasis:u="low",leftIcon:p,pillShape:h=!0}=e,f=(0,i.Z)(d.badge,d[c],d[t],d[u],{[d.pillShape]:h}),m=(0,i.Z)(d.icon,d[c],d[t],d[u]),g=(0,o.useMemo)(()=>l(c),[c]),v="low"===u?g:"warning"===c||"yellow"===c||"orange"===c?"static-black":"static-white",b=(0,o.useMemo)(()=>s(t),[t]);return(0,r.jsxs)("div",{className:f,children:[p&&(0,r.jsx)("div",{className:m,children:p}),(0,r.jsx)(a.Z,{color:v,variant:b,weight:"semi-bold",children:n})]})}},72543:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(67251),i=n(36506),o=n(45113);let a=e=>{let{fill:t="none",...n}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:t,viewBox:"0 0 24 24",...n,children:(0,r.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})})};var s=n(88865),l=n(13328);let d=()=>"u">typeof window?window.location.pathname.split("/").filter(e=>e):[],c=e=>{switch(e){case"primary":default:return"primary";case"neutral":return"text-body-1";case"white":return"grey-10"}},u=e=>decodeURI(e).split("-").join(" ").split(" ").map(e=>e[0].toUpperCase()+e.substring(1)).join(" "),p=e=>"u">typeof window?window.location.pathname.split("/").slice(0,e+2).join("/"):"/";n(36769);let h={wrapper:"_wrapper_m2pz2_1",homeIcon:"_homeIcon_m2pz2_6",primary:"_primary_m2pz2_9",neutral:"_neutral_m2pz2_17",white:"_white_m2pz2_25",direction:"_direction_m2pz2_35",listItem:"_listItem_m2pz2_52",listItemText:"_listItemText_m2pz2_57"},f=({name:e,link:t,variant:n,onClick:a})=>{let d=(0,o.useMemo)(()=>c(n),[n]);return(0,r.jsxs)("li",{className:h.listItem,children:[(0,r.jsx)(s.Z,{className:(0,i.c)(h.direction,h[n])}),(0,r.jsx)("a",{href:t,onClick:a,children:(0,r.jsx)(l.Z,{color:d,children:(0,r.jsx)("span",{className:(0,i.c)(h.listItemText,h[n]),children:e})})})]})},m=({name:e,link:t,variant:n,onClickEllipsis:a,onClick:d})=>{let u=(0,o.useMemo)(()=>c(n),[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("li",{onClick:a,className:(0,i.c)(h.listItem),children:[(0,r.jsx)(s.Z,{className:(0,i.c)(h.direction,h[n])}),(0,r.jsx)(l.Z,{color:u,children:(0,r.jsx)("span",{className:(0,i.c)(h.listItemText,h[n]),children:"..."})})]}),(0,r.jsx)(f,{name:e,link:t,variant:n,onClick:d})]})},g=({customPaths:e,variant:t="primary",onItemClick:n})=>{let[s,l]=(0,o.useState)(!1),c=d();function g(){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/",onClick:e=>null==n?void 0:n({name:"Home",link:"/"},-1,e),children:(0,r.jsx)(a,{className:(0,i.c)(h.homeIcon,h[t])})})})}function v(){if(e&&e.length)return(0,r.jsx)(m,{name:e[e.length-1].name,link:e[e.length-1].link,onClickEllipsis:()=>l(!1),onClick:t=>null==n?void 0:n(e[e.length-1],e.length-1,t),variant:t});let i=u(c[c.length-1]),o=p(c.length-1);return(0,r.jsx)(m,{name:i,link:o,onClickEllipsis:()=>l(!1),onClick:e=>null==n?void 0:n({name:i,link:o},c.length-1,e),variant:t})}return(0,o.useEffect)(()=>{(e&&e.length>5||!e&&c.length>5)&&l(!0)},[]),e&&e.length?(0,r.jsx)("nav",{children:(0,r.jsxs)("ol",{className:h.wrapper,children:[g(),s?v():e.map((e,i)=>(0,r.jsx)(f,{name:e.name,link:e.link,variant:t,onClick:t=>null==n?void 0:n(e,i,t)},`custom-breadcrumb-${e.link}-${i}`))]})}):c.length?(0,r.jsx)("nav",{children:(0,r.jsxs)("ol",{className:h.wrapper,children:[g(),s?v():c.map((e,i)=>{let o=u(e),a=p(i);return(0,r.jsx)(f,{name:o,link:a,variant:t,onClick:e=>null==n?void 0:n({name:o,link:a},i,e)},`breadcrumb-${a}-${i}`)})]})}):(0,r.jsx)(r.Fragment,{})}},50424:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(67251),i=n(36506),o=n(45113),a=n(62230),s=n(13328);n(33244);let l={base:"_base_1mkcs_1","full-width":"_full-width_1mkcs_4",small:"_small_1mkcs_7",tiny:"_tiny_1mkcs_10",animation:"_animation_1mkcs_13","child-wrapper":"_child-wrapper_1mkcs_18",loading:"_loading_1mkcs_21",medium:"_medium_1mkcs_33",large:"_large_1mkcs_36",link:"_link_1mkcs_39",loader:"_loader_1mkcs_43",disabled:"_disabled_1mkcs_48",primary:"_primary_1mkcs_53",premium:"_premium_1mkcs_63",secondary:"_secondary_1mkcs_73",tertiary:"_tertiary_1mkcs_84",lowFocus:"_lowFocus_1mkcs_94",dark:"_dark_1mkcs_111",cool:"_cool_1mkcs_121","responsive-large-icon":"_responsive-large-icon_1mkcs_131","responsive-medium-icon":"_responsive-medium-icon_1mkcs_134","responsive-small-icon":"_responsive-small-icon_1mkcs_137","responsive-tiny-icon":"_responsive-tiny-icon_1mkcs_140",svg:"_svg_1mkcs_144",spin:"_spin_1mkcs_1",typography:"_typography_1mkcs_156",btnAnimation:"_btnAnimation_1mkcs_163",shine:"_shine_1mkcs_1"},d=({className:e,...t})=>(0,r.jsxs)("svg",{className:(0,i.c)(l.svg,e),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...t,children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),c=e=>{switch(e){case"primary":case"dark":default:return"static-white";case"secondary":case"tertiary":case"link":return"primary";case"lowFocus":return"static-grey-1"}},u=e=>{switch(e){case"large":return"subHeading";case"medium":return"regular";case"small":case"tiny":return"small"}},p=e=>{switch(e){case"primary":case"dark":return"var(--static-white-color)";case"secondary":case"tertiary":return"var(--primary-color)";case"lowFocus":return"var(--static-color-grey-1)";default:return"var(--static-color-white)"}},h=({onClick:e,children:t,variant:n="primary",size:h="medium",loading:f,disabled:m,preIcon:g,postIcon:v,fullWidth:b,className:y,animation:x,...w})=>{let[_,C]=(0,o.useState)(!1),$=(0,i.c)(l.base,y,{[l[h]]:"link"!=n,[l[n]]:!0,[l.loading]:f,[l.disabled]:m,[l["full-width"]]:b,[l.animation]:x}),k=(0,i.c)(l.typography,{[l.animation]:x}),S=(0,i.c)(l["child-wrapper"],{[l.loading]:f}),j=(0,o.useMemo)(()=>p(n),[n]);(0,o.useMemo)(()=>c(n),[n]);let E=(0,o.useMemo)(()=>"link"===n?"regular":u(h),[h]),O="link"===n?"medium":"semi-bold";function P(e){return(0,r.jsx)("div",{className:l[`responsive-${h}-icon`],children:e})}function N(e){"link"!==n||f||m||C(!!e)}return(0,r.jsxs)("button",{onClick:function(t){e&&e(t)},className:$,disabled:m,...w,children:[(0,r.jsxs)("span",{className:S,children:[g&&P(g),(0,r.jsx)(s.Z,{style:{color:"inherit"},variant:E,weight:O,decoration:_?"underLine":"none",onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1),className:k,children:t}),v&&P(v)]}),x&&(0,r.jsx)("div",{className:l.btnAnimation}),f&&(0,r.jsx)("div",{className:l.loader,children:"link"!==n?(0,r.jsx)(d,{color:j,className:l[`responsive-${h}-icon`]}):(0,r.jsx)(a.Z,{color:"primary",message:"",size:"extra-small"})})]})}},45097:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67251),i=n(50424),o=n(45113),a=n(99871),s=n(88865);function l(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",...e,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"})})}var d=n(72454);n(23393);let c={base:"_base_yhkqh_1",dayCalender:"_dayCalender_yhkqh_5",captionContainer:"_captionContainer_yhkqh_10",captionToggleContainer:"_captionToggleContainer_yhkqh_13",captionToggleText:"_captionToggleText_yhkqh_16",captionIconContainer:"_captionIconContainer_yhkqh_19",captionButtonContainer:"_captionButtonContainer_yhkqh_22",captionHidden:"_captionHidden_yhkqh_25",captionResetButtonIcon:"_captionResetButtonIcon_yhkqh_28",captionNavButtonIcon:"_captionNavButtonIcon_yhkqh_31",captionNavButtonIconRotate:"_captionNavButtonIconRotate_yhkqh_34",months:"_months_yhkqh_39",month:"_month_yhkqh_39",caption:"_caption_yhkqh_10",caption_label:"_caption_label_yhkqh_48",nav:"_nav_yhkqh_51",nav_button:"_nav_button_yhkqh_54",nav_button_previous:"_nav_button_previous_yhkqh_57",nav_button_next:"_nav_button_next_yhkqh_60",table:"_table_yhkqh_63",table_invisible:"_table_invisible_yhkqh_66",table_visible:"_table_visible_yhkqh_69",head:"_head_yhkqh_72",head_row:"_head_row_yhkqh_74",head_cell:"_head_cell_yhkqh_77",row:"_row_yhkqh_80",cell:"_cell_yhkqh_83",day:"_day_yhkqh_5",day_today:"_day_today_yhkqh_89",day_selected:"_day_selected_yhkqh_92",day_outside:"_day_outside_yhkqh_95",day_range_start:"_day_range_start_yhkqh_98",day_range_middle:"_day_range_middle_yhkqh_101",day_range_end:"_day_range_end_yhkqh_104",tbody:"_tbody_yhkqh_107",yearModeBase:"_yearModeBase_yhkqh_112",yearModeBase_visible:"_yearModeBase_visible_yhkqh_115",yearModeBase_invisible:"_yearModeBase_invisible_yhkqh_118",year:"_year_yhkqh_112",current:"_current_yhkqh_125",present:"_present_yhkqh_128",iconPath:"_iconPath_yhkqh_132",fullWidth:"_fullWidth_yhkqh_137",rigidCell:"_rigidCell_yhkqh_140"},u=()=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",children:(0,r.jsx)("path",{d:"M6.33334 9L12.3333 15L18.3333 9H6.33334Z",className:c.iconPath})});var p=n(29542);let h=e=>e.toString().slice(0,1),f=({selectedStateArray:e,showOutsideDays:t=!1,mode:n="single",required:f=!1,rangeReset:m=!1,onSelectDate:g,onSelectYear:v,resetToToday:b,noOfPastYears:y=100,latestYear:x=new Date().getFullYear(),fullWidth:w=!1,resetDate:_=!1})=>{let C=y<=0,$=new Date().getFullYear(),k=x>1900?x:$,S=Array.from({length:y},(e,t)=>k-t),[j,E]=(0,o.useState)((0,a.s)(new Date,k)),[O,P]=e,[N,M]=(0,o.useState)(!1),T=()=>{C||M(e=>!e)},L=(0,d.Z)(c.base,{[c.fullWidth]:w}),D=(0,d.Z)(c.dayCalender,{[c.fullWidth]:w}),A={months:(0,d.Z)(c.months,{[c.fullWidth]:w}),month:(0,d.Z)(c.month,{[c.fullWidth]:w}),caption:c.caption,caption_label:c.caption_label,nav:c.nav,nav_button:(0,d.Z)(c.nav_button),nav_button_previous:c.nav_button_previous,nav_button_next:c.nav_button_next,table:(0,d.Z)(c.table,{[c.table_invisible]:N,[c.table_visible]:!N}),head:c.head,head_row:c.head_row,head_cell:(0,d.Z)(c.head_cell,{[c.rigidCell]:!w}),row:c.row,cell:(0,d.Z)(c.cell,{[c.rigidCell]:!w}),day:(0,d.Z)(c.day,{[c.rigidCell]:!(w&&"range"===n)}),day_today:c.day_today,day_selected:c.day_selected,day_outside:(0,d.Z)("day-outside",c.day_outside),day_range_start:(0,d.Z)("day-range-start",c.day_range_start),day_range_middle:c.day_range_middle,day_range_end:(0,d.Z)("day-range-end",c.day_range_end),tbody:c.tbody},I=(e,t)=>{P(p.T),e(p.T),t(p.T),b&&b()},B=(0,o.useMemo)(()=>e=>{let{goToMonth:t,nextMonth:o,previousMonth:h,goToDate:f}=(0,a.u)();return(0,r.jsxs)("div",{className:c.captionContainer,children:[(0,r.jsxs)("div",{className:c.captionToggleContainer,onClick:T,children:[(0,r.jsx)("div",{className:c.captionToggleText,children:(0,a.f)(e.displayMonth,"MMMM yyyy")}),!C&&(0,r.jsx)("div",{className:c.captionIconContainer,children:(0,r.jsx)(u,{})})]}),(0,r.jsxs)("div",{className:(0,d.Z)(c.captionButtonContainer,{[c.captionHidden]:N}),children:[n===p.R&&m&&(0,r.jsx)("button",{disabled:!h,onClick:()=>{P(p.I),t(p.I.from)},children:(0,r.jsx)(l,{className:c.captionResetButtonIcon})}),n===p.S&&_&&(0,r.jsx)(i.Z,{variant:"tertiary",size:"tiny",onClick:()=>I(t,f),children:"Today"}),(0,r.jsx)("button",{disabled:!h,onClick:()=>h&&t(h),children:(0,r.jsx)(s.Z,{className:c.captionNavButtonIconRotate})}),(0,r.jsx)("button",{disabled:!o,onClick:()=>o&&t(o),children:(0,r.jsx)(s.Z,{className:c.captionNavButtonIcon})})]})]})},[N,n,m,_]);return(0,r.jsxs)("div",{className:L,children:[(0,r.jsx)(a.D,{required:f,captionLayout:"dropdown-buttons",showOutsideDays:t,weekStartsOn:1,formatters:{formatWeekdayName:h},className:D,classNames:A,components:{Caption:B},mode:n,month:j,onMonthChange:E,selected:O,onSelect:e=>{e&&((0,a.i)(e)?(P(e),E(e),null==g||g(e)):e.from&&e.to&&e.from!==e.to&&(P(e),E(e.from),null==g||g(e)))}}),(0,r.jsx)("div",{className:(0,d.Z)(c.yearModeBase,{[c.yearModeBase_invisible]:!N,[c.yearModeBase_visible]:N,[c.fullWidth]:w}),children:S.map(e=>{var t;let i,o;return"single"===n?(i=O?new Date(O):new Date,o=(0,a.s)(i,e)):(i=null!=O&&O.from?new Date(O.from):new Date,o={from:(0,a.s)(new Date(i),e),to:(0,a.s)(new Date((null==O?void 0:O.to)||(0,p.a)(i,1)),e)}),(0,r.jsx)("div",{className:(0,d.Z)(c.year,{[c.current]:$===e,[c.present]:(t=i,(0,p.t)(t).getFullYear()===e)}),onClick:()=>{E((0,a.s)(i,e)),P(o),M(!1),null==v||v(o)},children:e},e)})})]})}},78189:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67251),i=n(72454),o=n(45113),a=n(13328);n(13303);let s={wrapper:"_wrapper_d8fel_1",large:"_large_d8fel_4",small:"_small_d8fel_7",focus:"_focus_d8fel_10",removable:"_removable_d8fel_13",singleSelect:"_singleSelect_d8fel_16",dropdown:"_dropdown_d8fel_22",section:"_section_d8fel_27",iconPath:"_iconPath_d8fel_31","dropdown-preIcon":"_dropdown-preIcon_d8fel_35",preIcon:"_preIcon_d8fel_42",chevron:"_chevron_d8fel_49",text:"_text_d8fel_56",icon:"_icon_d8fel_31",dropdownCountText:"_dropdownCountText_d8fel_71"},l=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M6.33334 9L12.3333 15L18.3333 9H6.33334Z",className:s.iconPath})}),d=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M7.9205 6.3295C7.48116 5.89017 6.76884 5.89017 6.3295 6.3295C5.89017 6.76884 5.89017 7.48116 6.3295 7.9205L10.409 12L6.3295 16.0795C5.89017 16.5188 5.89017 17.2312 6.3295 17.6705C6.76884 18.1098 7.48116 18.1098 7.9205 17.6705L12 13.591L16.0795 17.6705C16.5188 18.1098 17.2312 18.1098 17.6705 17.6705C18.1098 17.2312 18.1098 16.5188 17.6705 16.0795L13.591 12L17.6705 7.9205C18.1098 7.48116 18.1098 6.76884 17.6705 6.3295C17.2312 5.89017 16.5188 5.89017 16.0795 6.3295L12 10.409L7.9205 6.3295Z",className:s.iconPath})});function c(e){let{children:t,postIcon:n,preIcon:c,variant:u="singleSelect",focused:p,onDelete:h,dropdownCount:f,onClick:m,onBlur:g,className:v,size:b="large",...y}=e,[x,w]=(0,o.useState)(p);function _(){h&&h()}(0,o.useEffect)(()=>{w(p)},[p]);let C=(0,o.useMemo)(()=>"dropdown"===u?f&&(0,r.jsx)("div",{className:(0,i.Z)(s["dropdown-preIcon"],{[s[b]]:!0}),children:(0,r.jsx)(a.Z,{color:"static-white",variant:"small",className:s.dropdownCountText,children:f})}):c?(0,r.jsx)("div",{className:(0,i.Z)(s.preIcon,{[s[b]]:!0}),children:c}):null,[u,x]),$=(0,i.Z)(s.chevron,{[s.focus]:x}),k=(0,o.useMemo)(()=>{switch(u){case"dropdown":return(0,r.jsx)("div",{className:$,children:(0,r.jsx)(l,{className:(0,i.Z)(s.icon,{[s[b]]:!0})})});case"removable":return(0,r.jsx)(d,{onClick:_,className:(0,i.Z)(s.icon,{[s[b]]:!0})});default:return n}},[u,x]),S=(0,i.Z)(s.wrapper,{[s[b]]:!0,[s.focus]:x},[s[u]],v),j=x&&"singleSelect"===u?"primary":"static-grey-1";return(0,r.jsxs)("button",{onClick:function(){m&&m()},className:S,onBlur:function(){g&&g()},...y,children:[C,(0,r.jsx)("div",{className:s.section,children:(0,r.jsx)(a.Z,{className:s.text,variant:"small",weight:"medium",color:j,children:t})}),k]})}},44421:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(67251),i=n(45113),o=n(72454),a=n(45097),s=n(29542),l=n(39321);n(23108);let d={datePickerContainer:"_datePickerContainer_htrq4_1",triggerContainer:"_triggerContainer_htrq4_4",popoverContainer:"_popoverContainer_htrq4_7",popoverVisible:"_popoverVisible_htrq4_10",popoverHidden:"_popoverHidden_htrq4_13",positionAbove:"_positionAbove_htrq4_16",positionBelow:"_positionBelow_htrq4_19",chevronIcon:"_chevronIcon_htrq4_22",iconPath:"_iconPath_htrq4_25",fullWidth:"_fullWidth_htrq4_28"},c=()=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",children:(0,r.jsx)("path",{d:"M6.33334 9L12.3333 15L18.3333 9H6.33334Z",className:d.iconPath})}),u=e=>new Promise(t=>setTimeout(t,e));var p=n(99871);let h=e=>{let{selectedStateArray:t,mode:n="single",required:h=!1,fullWidth:f,onSelectDate:m,shouldCloseOnSelect:g,inputBoxProps:v={}}=e,[b,y]=i.useState(!1),[x,w]=i.useState(!1),[_,C]=i.useState(!1),$=i.useRef(null),k=i.useRef(null),S=i.useState(s.I),j=i.useState(s.I.from),[E,O]=t||("single"===n?j:S),P=(0,o.Z)(d.popoverContainer,x?d.popoverVisible:d.popoverHidden,_?d.positionAbove:d.positionBelow),N=()=>{w(!x)},M=e=>{$.current&&!$.current.contains(e.target)&&k.current&&!k.current.contains(e.target)&&w(!1)},T=()=>{if(k.current&&$.current){let e=k.current.getBoundingClientRect(),t=$.current.getBoundingClientRect(),n=window.innerHeight-e.bottom,r=e.top;n<t.height&&r>t.height?C(!0):C(!1)}};i.useEffect(()=>(document.addEventListener("mousedown",M),()=>{document.removeEventListener("mousedown",M)}),[]),i.useEffect(()=>(x?(T(),window.addEventListener("resize",T)):window.removeEventListener("resize",T),()=>{window.removeEventListener("resize",T)}),[x]);let L=async e=>{null==m||m(e),(void 0===g?"single"===n:g)&&(await u(50),N())};return(0,r.jsxs)("div",{className:(0,o.Z)(d.datePickerContainer,{[d.fullWidth]:f}),ref:$,children:[(0,r.jsx)("div",{onClick:N,ref:k,className:(0,o.Z)(d.triggerContainer,{[d.fullWidth]:f}),children:(0,r.jsx)(l.Z,{label:"Date",placeholder:"DD/MM/YYYY",postIcon:(0,r.jsx)("div",{onClick:N,className:d.chevronIcon,children:(0,r.jsx)(c,{})}),value:n===s.S?E&&(0,p.f)(E,"dd/MM/yyyy"):(null==E?void 0:E.from)&&(null==E?void 0:E.to)&&`${(0,p.f)((null==E?void 0:E.from)||"","dd/MM/yyyy")} - ${(0,p.f)((null==E?void 0:E.to)||"","dd/MM/yyyy")}`,fullWidth:f,required:h,onBlur:e=>{var t;null==(t=null==v?void 0:v.onBlur)||t.call(v,e)},asChild:b,...v})}),(0,r.jsx)("div",{ref:$,className:P,onMouseDown:()=>{y(!0)},onMouseUp:()=>{setTimeout(()=>y(!1),0)},children:(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{...e,selectedStateArray:[E,O],onSelectDate:L,onSelectYear:m})})})]})}},69577:function(e,t,n){"use strict";n.d(t,{dy:function(){return p}});var r=n(67251),i=n(72454),o=n(45113),a=n(52509),s=n(71318),l=n(66630),d=n(25446),c=n(8395);let u=0;function p(e){let{screenPosition:t="left",variant:n="overlay",children:l,open:d=!1,onClose:c,enableBackgroundScrolling:p=!1,closeOnOutsideClick:h=!0,showCloseIcon:f=!0,className:m}=e,[g,v]=(0,o.useState)(d);(0,o.useEffect)(()=>{v(d)},[d]);let[b,y]=(0,o.useState)(1200),x=(0,o.useRef)(null),w=(0,o.useRef)(!1);function _(){v(!1),c&&c()}(0,o.useEffect)(()=>(g&&(y(1200+10*++u),w.current=!0),()=>{g&&u>0&&u--}),[g]),(0,o.useEffect)(()=>{g&&!p?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[g,p]);let C={[s.s.open]:g},$={[s.s[t]]:!0};(0,o.useEffect)(()=>{let e=e=>{var t;if(g&&h&&!(null==(t=x.current)?void 0:t.contains(e.target))){let t=document.querySelectorAll(".drawer-backdrop"),n=!0;t.forEach(e=>{Number.parseInt(e.getAttribute("data-z-index")||"0")>b&&(n=!1)}),n&&(_(),e.stopPropagation())}};return g&&document.addEventListener("mousedown",e,!0),()=>{document.removeEventListener("mousedown",e,!0)}},[h,g,b]);let k=e=>{if(o.isValidElement(e)){let{children:t,...n}=e.props||{};return o.cloneElement(e,{...n,handleClose:_,open:g,showCloseIcon:f})}return e},S=(0,i.Z)(s.s.wrapper,C,$,m),j=(0,i.Z)(s.s[n],{[s.s.open]:g},"drawer-backdrop");return a.createPortal((0,r.jsx)("div",{className:j,style:{zIndex:b},"data-z-index":b,children:(0,r.jsx)("div",{className:S,ref:x,onClick:e=>{e.stopPropagation()},children:o.Children.map(l,e=>k(e))})}),document.body)}p.Header=c.Z,p.Footer=d.Z,p.Body=l.Z},66630:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67251),i=n(72454),o=n(71318);function a(e){let{children:t,className:n}=e;return(0,r.jsx)("div",{className:(0,i.Z)(o.s.body,n),children:t})}},25446:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67251),i=n(72454),o=n(71318);function a(e){let{children:t,className:n}=e;return(0,r.jsx)("div",{className:(0,i.Z)(o.s.footer,n),children:t})}},8395:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67251),i=n(72454),o=n(71318);function a(e){let{children:t,handleClose:n,showCloseIcon:a=!0,className:s}=e;return(0,r.jsxs)("div",{className:(0,i.Z)(o.s.header,s),children:[t,a&&(0,r.jsx)("div",{className:o.s.crossIcon,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",onClick:n,children:(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L12 10.9393L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L12 13.0607L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"})})})]})}},47130:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67251),i=n(72454);n(8e3);let o={},a=({className:e})=>(0,r.jsx)("hr",{className:(0,i.Z)(o.separator,e)})},33870:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67251),i=n(36506);n(22523);let o=({animate:e=!0,className:t})=>{let n=(0,i.c)("_wrapper_1kb6h_1",{_animate_1kb6h_4:e},t);return(0,r.jsx)("div",{className:n})}},57614:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67251),i=n(36506),o=n(45113),a=n(54274),s=n(13328);n(32695);let l={parentTab:"_parentTab_1bzkh_1",filled:"_filled_1bzkh_4",bordered:"_bordered_1bzkh_8",tabItemWrapper:"_tabItemWrapper_1bzkh_13",isActiveFilledVariant:"_isActiveFilledVariant_1bzkh_20",preIcon:"_preIcon_1bzkh_25",active:"_active_1bzkh_28",activeBar:"_activeBar_1bzkh_33",borderless:"_borderless_1bzkh_37",tabItem:"_tabItem_1bzkh_13",bottomBar:"_bottomBar_1bzkh_50"};function d(e){let{activeTab:t=0,children:n,variant:a,onTabChange:s}=e,[d,c]=(0,o.useState)(t);(0,o.useEffect)(()=>{c(t)},[t]);let u=(e,t)=>{e!==d&&(c(e),s)&&s({...t,activeTabIndex:e})},p=(0,i.c)(l.parentTab,{[l[a]]:a});return(0,r.jsx)("div",{className:p,children:(()=>{var e;let t=o.Children.count(n),r=(null==(e=o.Children.map(n,e=>{var t;return null==(t=null==e?void 0:e.props)?void 0:t.preIcon}))?void 0:e.length)||0;if(r>0&&t!==r)throw Error("Use icons for all tabs consistently");return o.Children.map(n,(e,t)=>{let n=t===d;return o.cloneElement(e,{index:t,isSelected:n,onClick:()=>u(t,e.props),variant:a})})})()})}d.Item=function(e){let{variant:t="borderless",isSelected:n,onClick:d,label:c,index:u}=e,{badgeLabel:p=null,preIcon:h}=e;"filled"===t&&(p=null,h=null);let f=(0,i.c)(l.tabItem,{[l.active]:!0===n}),m=(0,i.c)(l.bottomBar,{[l.active]:!0===n,[l[t]]:t}),g=(0,i.c)(l.activeBar,{[l[t]]:t,[l.active]:!0===n}),v=(0,i.c)(l.tabItemWrapper,{[l[t]]:t,[l.isActiveFilledVariant]:"filled"===t&&!0===n}),b=(0,i.c)(l.preIcon,{[l.active]:!0===n}),y=(0,r.jsx)("div",{className:g}),[x,w]=(0,o.useState)(!1);return(0,r.jsxs)("div",{className:v,onClick:d,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:[(0,r.jsxs)("div",{className:f,children:[h&&(0,r.jsx)("div",{className:b,children:h}),(0,r.jsx)(s.Z,{variant:"regular",color:n?"primary":x&&"filled"===t?"static-grey-1":"static-grey-2",weight:n?"semi-bold":"medium",children:c}),p&&(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{emphasis:"low",intent:"primary",label:p,size:"small"})})]}),(0,r.jsx)("div",{className:m,children:y})]},u)}},22550:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67251),i=n(36506),o=n(45113),a=n(13328);n(39623);let s={wrapper:"_wrapper_1pvbu_1",inside:"_inside_1pvbu_4",outside:"_outside_1pvbu_7",fullWidth:"_fullWidth_1pvbu_11",label:"_label_1pvbu_16",required:"_required_1pvbu_19",focus:"_focus_1pvbu_23",filled:"_filled_1pvbu_33",textArea:"_textArea_1pvbu_42",error:"_error_1pvbu_56",section:"_section_1pvbu_67",messageSection:"_messageSection_1pvbu_71",icon:"_icon_1pvbu_75",exclaimationCircle:"_exclaimationCircle_1pvbu_79",exclaimationTriangle:"_exclaimationTriangle_1pvbu_82",resizeContainer:"_resizeContainer_1pvbu_86",bottomMessage:"_bottomMessage_1pvbu_89",resizeIcon:"_resizeIcon_1pvbu_94"},l=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,r.jsx)("path",{d:"M8 6V8.5M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM8 10.5H8.005V10.505H8V10.5Z",strokeLinecap:"round",strokeLinejoin:"round",...e})}),d=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,r.jsx)("path",{d:"M8.00034 5.99833V8.49833M1.79817 10.7487C1.22125 11.7487 1.94296 12.9983 3.09745 12.9983H12.9032C14.0577 12.9983 14.7794 11.7488 14.2025 10.7488L9.29961 2.25042C8.72237 1.24986 7.2783 1.24986 6.70106 2.25042L1.79817 10.7487ZM8.00034 10.4983H8.00534V10.5033H8.00034V10.4983Z",strokeLinecap:"round",strokeLinejoin:"round",...e})}),c=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:s.resizeIcon,onMouseDown:e.handleMouseDown,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2328 6.8727L6.87255 13.234L6.0293 12.3906L12.3895 6.0293L13.2328 6.8727ZM14.0293 10.0534L10.0542 14.0292L9.21091 13.1858L13.186 9.20997L14.0293 10.0534Z",fill:"#C1C6CE"})});function u(e){var t,n;let{label:u="",placeholder:p="",message:h="",value:f,maxLength:m,disabled:g=!1,error:v=!1,readOnly:b=!1,required:y=!1,focused:x=!1,variant:w="inside",fullWidth:_=!1,onChange:C,...$}=e,[k,S]=o.useState(x),j=(0,o.useRef)(null);(0,o.useEffect)(()=>{S(x)},[x]);let E=(0,i.c)(s.textArea,{[s.filled]:N(),[s.error]:v,[s[w]]:!0,[s.fullWidth]:_,[s.focus]:k}),O=(0,i.c)(s.wrapper,{[s[w]]:!0,[s.fullWidth]:_}),P=(0,i.c)(s.label,{[s.required]:y,[s[w]]:!0,[s.focus]:k,[s.filled]:N()});function N(){var e;return!!(f||null!=(e=null==j?void 0:j.current)&&e.value)}function M(e){if(j.current){let t=j.current,n=e.clientY-t.getBoundingClientRect().top;t.style.height=`${n}px`}}function T(){document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",T)}let L={...null!=f&&{value:f}};return(0,r.jsxs)("div",{className:O,children:[u?(0,r.jsx)("label",{htmlFor:"text-area",className:P,children:(0,r.jsx)(a.Z,{color:g?"text-disabled":"text-body-2",variant:"outside"===w||"inside"===w&&k||N()?"tiny":"inside"===w?"regular":void 0,weight:"medium",children:u})}):null,(0,r.jsx)("textarea",{id:"text-area",className:E,placeholder:p,onChange:function(e){C&&C(e)},maxLength:m,disabled:g,readOnly:b,autoFocus:k,onFocus:function(){S(!0)},onBlur:function(){S(!1)},ref:j,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:"false",...L,...$}),(0,r.jsx)("div",{className:(0,i.c)(s.resizeContainer,{[s.bottomMessage]:!!h||!!m}),children:(0,r.jsx)(c,{handleMouseDown:function(e){document.addEventListener("mousemove",M),document.addEventListener("mouseup",T)}})}),(0,r.jsx)("div",{className:s.section,children:(0,r.jsxs)(r.Fragment,{children:[h?(0,r.jsxs)("div",{className:s.messageSection,children:[v?(0,r.jsx)(d,{className:(0,i.c)(s.icon,s.exclaimationTriangle)}):(0,r.jsx)(l,{className:(0,i.c)(s.icon,s.exclaimationCircle)}),(0,r.jsx)(a.Z,{color:v?"error":"text-body-1",variant:"tiny",weight:"medium",children:h})]}):null,m?(0,r.jsxs)(a.Z,{color:v?"error":"text-disabled",variant:"tiny",weight:"medium",children:[null!=(t=null==j?void 0:j.current)&&t.value?null==(n=null==j?void 0:j.current)?void 0:n.value.toString().length:0,"/",m]}):null]})})]})}},44603:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(67251),i=n(36506),o=n(45113),a=n(52509);let s=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M7.9205 6.3295C7.48116 5.89017 6.76884 5.89017 6.3295 6.3295C5.89017 6.76884 5.89017 7.48116 6.3295 7.9205L10.409 12L6.3295 16.0795C5.89017 16.5188 5.89017 17.2312 6.3295 17.6705C6.76884 18.1098 7.48116 18.1098 7.9205 17.6705L12 13.591L16.0795 17.6705C16.5188 18.1098 17.2312 18.1098 17.6705 17.6705C18.1098 17.2312 18.1098 16.5188 17.6705 16.0795L13.591 12L17.6705 7.9205C18.1098 7.48116 18.1098 6.76884 17.6705 6.3295C17.2312 5.89017 16.5188 5.89017 16.0795 6.3295L12 10.409L7.9205 6.3295Z"})});var l=n(13328);function d(){return(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("circle",{cx:"8.57171",cy:"8.57366",r:"7.71429",fill:"#1B7938"}),(0,r.jsx)("path",{d:"M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM7.87886 10.7756L5.87957 8.775C5.8079 8.70333 5.72281 8.64647 5.62916 8.60768C5.53552 8.56889 5.43515 8.54893 5.33379 8.54893C5.23242 8.54893 5.13205 8.56889 5.03841 8.60768C4.94476 8.64647 4.85967 8.70333 4.788 8.775C4.64325 8.91975 4.56193 9.11608 4.56193 9.32079C4.56193 9.5255 4.64325 9.72182 4.788 9.86657L7.33371 12.4123C7.40519 12.4843 7.49021 12.5415 7.58388 12.5805C7.67756 12.6195 7.77803 12.6396 7.8795 12.6396C7.98097 12.6396 8.08144 12.6195 8.17512 12.5805C8.26879 12.5415 8.35381 12.4843 8.42529 12.4123L13.6967 7.13957C13.7693 7.06819 13.8271 6.98314 13.8667 6.88933C13.9063 6.79551 13.927 6.69478 13.9274 6.59295C13.9279 6.49111 13.9082 6.3902 13.8695 6.29601C13.8308 6.20183 13.7738 6.11625 13.7018 6.0442C13.6298 5.97215 13.5443 5.91506 13.4502 5.87623C13.3561 5.83739 13.2552 5.81758 13.1533 5.81793C13.0515 5.81829 12.9507 5.8388 12.8569 5.87829C12.763 5.91777 12.6779 5.97545 12.6064 6.048L7.87886 10.7756Z",fill:"#DFF1E4"})]})}function c(){return(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("circle",{cx:"9",cy:"9",r:"7",fill:"#C94A54"}),(0,r.jsx)("path",{d:"M9 0C10.1819 -1.76116e-08 11.3522 0.232792 12.4442 0.685084C13.5361 1.13738 14.5282 1.80031 15.364 2.63604C16.1997 3.47177 16.8626 4.46392 17.3149 5.55585C17.7672 6.64778 18 7.8181 18 9C18 10.1819 17.7672 11.3522 17.3149 12.4442C16.8626 13.5361 16.1997 14.5282 15.364 15.364C14.5282 16.1997 13.5361 16.8626 12.4442 17.3149C11.3522 17.7672 10.1819 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 3.55683e-08 9 0ZM9 12C8.70163 12 8.41548 12.1185 8.2045 12.3295C7.99353 12.5405 7.875 12.8266 7.875 13.125C7.875 13.4234 7.99353 13.7095 8.2045 13.9205C8.41548 14.1315 8.70163 14.25 9 14.25C9.29837 14.25 9.58452 14.1315 9.79549 13.9205C10.0065 13.7095 10.125 13.4234 10.125 13.125C10.125 12.8266 10.0065 12.5405 9.79549 12.3295C9.58452 12.1185 9.29837 12 9 12ZM9 3.75C8.82446 3.74994 8.65446 3.81146 8.51961 3.92383C8.38476 4.03621 8.2936 4.19233 8.262 4.365L8.25 4.5V9.75L8.262 9.885C8.29331 10.0579 8.38435 10.2144 8.51923 10.327C8.65411 10.4397 8.82426 10.5014 9 10.5014C9.17574 10.5014 9.34589 10.4397 9.48077 10.327C9.61565 10.2144 9.70669 10.0579 9.738 9.885L9.75 9.75V4.5L9.738 4.365C9.7064 4.19233 9.61524 4.03621 9.48039 3.92383C9.34554 3.81146 9.17554 3.74994 9 3.75Z",fill:"#FEE7E9"})]})}let u=e=>{switch(e){case"error":return(0,r.jsx)(c,{});case"success":return(0,r.jsx)(d,{});default:return null}};n(20584);let p={wrapper:"_wrapper_1lc1a_1",light:"_light_1lc1a_4",dark:"_dark_1lc1a_7",top:"_top_1lc1a_12",bottom:"_bottom_1lc1a_15",right:"_right_1lc1a_19",left:"_left_1lc1a_22",center:"_center_1lc1a_25",upward:"_upward_1lc1a_29",downward:"_downward_1lc1a_32",open:"_open_1lc1a_36",cross:"_cross_1lc1a_45",icon:"_icon_1lc1a_54"},h=({message:e="",open:t=!1,onClose:n,autoHideDuration:d=3e3,variant:c="success",background:h="dark",anchorOrigin:f={horizontal:"right",vertical:"bottom"}})=>{let m=(0,o.useMemo)(()=>u(c),[c]);(0,o.useEffect)(()=>{if(t){let e=setTimeout(()=>{n&&n()},d);return()=>{clearTimeout(e)}}},[t,d,n]);let{horizontal:g,vertical:v}=f,b={[p.upward]:"top"===v,[p.downward]:"bottom"===v},y=(0,i.c)(p.wrapper,{[p[h]]:!0,[p.open]:t,[p[g]]:!0,[p[v]]:!0,...b});return a.createPortal((0,r.jsxs)("div",{className:y,role:"alert",children:[(0,r.jsxs)("div",{children:[m&&(0,r.jsx)("div",{className:p.icon,children:m}),(0,r.jsx)(l.Z,{variant:"regular",weight:"medium",color:"dark"===h?"static-white":"static-black",children:e})]}),(0,r.jsx)(s,{className:(0,i.c)(p.cross,p[h]),onClick:function(){n&&n()}})]}),document.body)}},78468:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67251);let i=e=>{let{fill:t,...n}=e;return(0,r.jsx)("svg",{viewBox:"0 0 10 5",xmlns:"http://www.w3.org/2000/svg",fill:t,...n,children:(0,r.jsx)("path",{d:"M0 0L5 5L10 0H0Z"})})}},25939:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67251),i=n(45113),o=n(13328);n(52509);let a=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",...e,children:[(0,r.jsx)("circle",{cx:"23.9988",cy:"23.3992",r:"13.2",fill:"white"}),(0,r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.79883 24.0008C4.79883 13.3969 13.395 4.80078 23.9988 4.80078C34.6027 4.80078 43.1988 13.3969 43.1988 24.0008C43.1988 34.6046 34.6027 43.2008 23.9988 43.2008C13.395 43.2008 4.79883 34.6046 4.79883 24.0008ZM20.1363 17.0209C20.7142 16.7054 21.4183 16.7306 21.9722 17.0867L30.3722 22.4867C30.8874 22.8179 31.1988 23.3883 31.1988 24.0008C31.1988 24.6133 30.8874 25.1837 30.3722 25.5149L21.9722 30.9149C21.4183 31.271 20.7142 31.2962 20.1363 30.9807C19.5584 30.6651 19.1988 30.0592 19.1988 29.4008V18.6008C19.1988 17.9423 19.5584 17.3364 20.1363 17.0209Z",fill:"#1B2124"})]});n(9975);let s={cardWrapper:"_cardWrapper_pg7ep_1",contentWrapper:"_contentWrapper_pg7ep_6",orientationVideoWrapper:"_orientationVideoWrapper_pg7ep_14",playIcon:"_playIcon_pg7ep_19",imageWrapper:"_imageWrapper_pg7ep_23",imageContent:"_imageContent_pg7ep_27",image:"_image_pg7ep_23",imageBottomTitle:"_imageBottomTitle_pg7ep_34",imageBottomSubTitle:"_imageBottomSubTitle_pg7ep_38",moreButton:"_moreButton_pg7ep_42",aboutVideoTitleSection:"_aboutVideoTitleSection_pg7ep_46"},l=({title:e,description:t,orientationVideo:n,customVideoSection:l})=>{let[d,c]=(0,i.useState)(!1),[u,p]=(0,i.useState)(!1),h=()=>{let e=document.getElementById("content-wrapper"),t=document.getElementById("content-section");e&&t&&(e.style.height=t.offsetHeight+"px"),p(!u)};return(0,i.useEffect)(()=>{let e=document.getElementById("content-wrapper"),t=document.getElementById("content-section");e&&t&&((null==t?void 0:t.offsetHeight)<198&&c(!1),(null==t?void 0:t.offsetHeight)>208&&c(!0))},[]),(0,r.jsxs)("div",{className:s.cardWrapper,children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(o.Z,{color:"#09090B",weight:"bold",variant:"heading2",children:e})}),(0,r.jsx)("div",{id:"content-wrapper",className:s.contentWrapper,children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t},id:"content-section"})})]}),d&&!u&&(0,r.jsx)("button",{className:s.moreButton,onClick:()=>h(),children:"More Features"}),n&&(null==n?void 0:n.title)&&null==l&&(0,r.jsxs)("div",{className:s.orientationVideoWrapper,children:[(0,r.jsxs)("div",{className:s.aboutVideoTitleSection,children:[(0,r.jsx)(o.Z,{className:s.heading,variant:"subHeading",color:"#000000",weight:"semi-bold",children:n.title}),(0,r.jsx)("div",{children:(0,r.jsx)(o.Z,{className:s.subHeading,weight:"medium",variant:"small",children:"Know important details and get oriented with your batch teachers. Click here to watch the video"})})]}),(0,r.jsxs)("div",{className:s.imageWrapper,children:[(0,r.jsxs)("div",{className:s.imageContent,children:[(0,r.jsx)("img",{src:"https://static.pw.live/images/alakhsir_20241022100126.webp",alt:"alakh-sir-image",className:s.image}),(null==n?void 0:n.isIntroSectionEnabled)&&(0,r.jsx)("div",{className:s.playIcon,onClick:n.clickHandler,children:(0,r.jsx)(a,{})})]}),(0,r.jsx)("div",{className:s.imageBottomTitle,children:(0,r.jsx)(o.Z,{variant:"small",weight:"medium",color:"#09090B",children:"Orientation Video"})}),(0,r.jsx)("div",{className:s.imageBottomSubTitle,children:(0,r.jsx)(o.Z,{variant:"label",weight:"medium",color:"#09090B",children:"Click to watch"})})]})]}),l]})}},95226:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(67251),i=n(36506);n(45113);var o=n(13328),a=n(54274);function s(e){let{fill:t,...n}=e;return(0,r.jsxs)("svg",{width:"14",height:"20",viewBox:"0 0 14 20",xmlns:"http://www.w3.org/2000/svg",fill:t,...n,children:[(0,r.jsx)("path",{d:"M7 4C3.68661 4 1 6.68661 1 10C1 13.3134 3.68661 16 7 16C10.3134 16 13 13.3134 13 10C13 6.68661 10.3134 4 7 4ZM7 14.9821C4.24911 14.9821 2.01786 12.7509 2.01786 10C2.01786 7.24911 4.24911 5.01786 7 5.01786C9.75089 5.01786 11.9821 7.24911 11.9821 10C11.9821 12.7509 9.75089 14.9821 7 14.9821Z"}),(0,r.jsx)("path",{d:"M6.35742 7.64286C6.35742 7.81335 6.42515 7.97687 6.54571 8.09743C6.66627 8.21799 6.82978 8.28571 7.00028 8.28571C7.17078 8.28571 7.33429 8.21799 7.45485 8.09743C7.57541 7.97687 7.64314 7.81335 7.64314 7.64286C7.64314 7.47236 7.57541 7.30885 7.45485 7.18829C7.33429 7.06773 7.17078 7 7.00028 7C6.82978 7 6.66627 7.06773 6.54571 7.18829C6.42515 7.30885 6.35742 7.47236 6.35742 7.64286ZM7.32171 9.14286H6.67885C6.61992 9.14286 6.57171 9.19107 6.57171 9.25V12.8929C6.57171 12.9518 6.61992 13 6.67885 13H7.32171C7.38064 13 7.42885 12.9518 7.42885 12.8929V9.25C7.42885 9.19107 7.38064 9.14286 7.32171 9.14286Z"})]})}n(52509);var l=n(17726),d=n(14402);let c=["Students are required to login using their name and phone number to access free batches.","Students who do not wish to submit their details may access free content on our youtube channel."],u=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",...e,children:(0,r.jsx)("path",{d:"M4.5 2V3.5M11.5 2V3.5M2 12.5V5C2 4.17157 2.67157 3.5 3.5 3.5H12.5C13.3284 3.5 14 4.17157 14 5V12.5M2 12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5M2 12.5V7.5C2 6.67157 2.67157 6 3.5 6H12.5C13.3284 6 14 6.67157 14 7.5V12.5M8 8.5H8.005V8.505H8V8.5ZM8 10H8.005V10.005H8V10ZM8 11.5H8.005V11.505H8V11.5ZM6.5 10H6.505V10.005H6.5V10ZM6.5 11.5H6.505V11.505H6.5V11.5ZM5 10H5.005V10.005H5V10ZM5 11.5H5.005V11.505H5V11.5ZM9.5 8.5H9.505V8.505H9.5V8.5ZM9.5 10H9.505V10.005H9.5V10ZM9.5 11.5H9.505V11.505H9.5V11.5ZM11 8.5H11.005V8.505H11V8.5ZM11 10H11.005V10.005H11V10Z",stroke:"#7B7F86","stroke-linecap":"round","stroke-linejoin":"round"})}),p=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"28",viewBox:"0 0 11 24",fill:"none",...e,children:(0,r.jsx)("path",{d:"M1.07059 12.6562C0.743397 12.2799 0.743397 11.7201 1.07059 11.3438L10.5 0.5L10.5 23.5L1.07059 12.6562Z",fill:"#DFF1E4"})}),h=e=>(0,r.jsx)("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("g",{id:"heroicons-mini/tag",children:(0,r.jsx)("path",{id:"Subtract","fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.5 3.5C4.11929 3.5 3 4.61929 3 6V8.87868C3 9.54172 3.26339 10.1776 3.73223 10.6464L10.2322 17.1464C11.2085 18.1228 12.7915 18.1228 13.7678 17.1464L16.6464 14.2678C17.6228 13.2915 17.6228 11.7085 16.6464 10.7322L10.1464 4.23223C9.67761 3.76339 9.04172 3.5 8.37868 3.5H5.5ZM6 7.5C6.55228 7.5 7 7.05228 7 6.5C7 5.94772 6.55228 5.5 6 5.5C5.44772 5.5 5 5.94772 5 6.5C5 7.05228 5.44772 7.5 6 7.5Z",fill:"#1B7938"})})}),f=e=>(0,r.jsxs)("svg",{width:"85",height:"32",viewBox:"0 0 85 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsxs)("g",{id:"Frame 1000003718",opacity:"0.8",filter:"url(#filter0_d_12147_5633)",children:[(0,r.jsx)("path",{id:"Rectangle 3463958",d:"M9.84799 8.33775C10.3841 6.33943 12.1885 4.94503 14.2574 4.93025L69.5041 4.53542C71.4972 4.52118 73.2727 5.79233 73.9015 7.68373L77.2825 17.8538C78.2724 20.8314 76.0558 23.9042 72.9179 23.9042L11.6678 23.904C8.64305 23.9039 6.44179 21.0343 7.22556 18.1128L9.84799 8.33775Z",fill:"url(#paint0_linear_12147_5633)",stroke:"url(#paint1_linear_12147_5633)","stroke-width":"1.02209"}),(0,r.jsxs)("g",{id:"INFINITY",children:[(0,r.jsxs)("mask",{id:"path-2-outside-1_12147_5633",maskUnits:"userSpaceOnUse",x:"15.9814",y:"9.50977",width:"52",height:"10",fill:"black",children:[(0,r.jsx)("rect",{fill:"white",x:"15.9814",y:"9.50977",width:"52",height:"10"}),(0,r.jsx)("path",{d:"M18.0306 16.1946L18.0306 12.3833L17.2705 12.3833C17.1492 12.3833 17.0635 12.2298 17.0136 11.9229C16.9922 11.7731 16.9814 11.6196 16.9814 11.4626C16.9814 11.3056 16.9922 11.1521 17.0136 11.0022C17.0635 10.6953 17.1492 10.5419 17.2705 10.5419L20.8677 10.5419C20.989 10.5419 21.0711 10.6953 21.1139 11.0022C21.1425 11.1521 21.1567 11.3056 21.1567 11.4626C21.1567 11.6196 21.1425 11.7731 21.1139 11.9229C21.0711 12.2298 20.989 12.3833 20.8677 12.3833L20.1504 12.3833L20.1504 16.1946L20.8998 16.1946C21.0211 16.1946 21.1068 16.348 21.1567 16.6549C21.1853 16.8048 21.1996 16.9583 21.1996 17.1153C21.1996 17.2723 21.1853 17.4258 21.1567 17.5756C21.1068 17.8825 21.0211 18.036 20.8998 18.036L17.2919 18.036C17.1706 18.036 17.0885 17.8825 17.0457 17.5756C17.0171 17.4258 17.0029 17.2723 17.0029 17.1153C17.0029 16.9583 17.0171 16.8048 17.0457 16.6549C17.0885 16.348 17.1706 16.1946 17.2919 16.1946L18.0306 16.1946Z"}),(0,r.jsx)("path",{d:"M28.6041 17.8005C28.6041 17.9504 28.2687 18.0253 27.5978 18.0253C26.9269 18.0253 26.5629 17.9718 26.5058 17.8647L24.7179 14.5245L24.7179 17.854C24.7179 17.9825 24.386 18.0467 23.7222 18.0467C23.0656 18.0467 22.7373 17.9825 22.7373 17.854L22.7373 10.6918C22.7373 10.5847 23.0192 10.5312 23.5831 10.5312C23.8043 10.5312 24.0613 10.5526 24.3539 10.5954C24.6536 10.6311 24.8356 10.7025 24.8999 10.8095L26.6128 14.1069L26.6128 10.7453C26.6128 10.6097 26.9447 10.5419 27.6085 10.5419C28.2722 10.5419 28.6041 10.6097 28.6041 10.7453L28.6041 17.8005Z"}),(0,r.jsx)("path",{d:"M34.5069 10.5419C34.6283 10.5419 34.6889 10.8595 34.6889 11.4947C34.6889 12.1228 34.6283 12.4368 34.5069 12.4368L32.5477 12.4368L32.5477 13.6573L33.8539 13.6573C33.9752 13.6573 34.0359 13.9356 34.0359 14.4924C34.0359 15.0419 33.9788 15.3167 33.8646 15.3167L32.5477 15.3167L32.5477 17.8968C32.5477 17.9967 32.4121 18.061 32.1409 18.0895C31.8768 18.1252 31.6556 18.1431 31.4772 18.1431L30.974 18.1216C30.6242 18.0788 30.4494 18.0075 30.4494 17.9075L30.4494 10.8202C30.4494 10.706 30.4708 10.6311 30.5136 10.5954C30.5636 10.5597 30.635 10.5419 30.7277 10.5419L34.5069 10.5419Z"}),(0,r.jsx)("path",{d:"M37.0828 16.1946L37.0828 12.3833L36.3227 12.3833C36.2013 12.3833 36.1157 12.2298 36.0657 11.9229C36.0443 11.7731 36.0336 11.6196 36.0336 11.4626C36.0336 11.3056 36.0443 11.1521 36.0657 11.0022C36.1157 10.6953 36.2013 10.5419 36.3227 10.5419L39.9198 10.5419C40.0412 10.5419 40.1233 10.6953 40.1661 11.0022C40.1946 11.1521 40.2089 11.3056 40.2089 11.4626C40.2089 11.6196 40.1946 11.7731 40.1661 11.9229C40.1233 12.2298 40.0412 12.3833 39.9198 12.3833L39.2025 12.3833L39.2025 16.1946L39.952 16.1946C40.0733 16.1946 40.1589 16.348 40.2089 16.6549C40.2374 16.8048 40.2517 16.9583 40.2517 17.1153C40.2517 17.2723 40.2374 17.4258 40.2089 17.5756C40.1589 17.8825 40.0733 18.036 39.952 18.036L36.3441 18.036C36.2227 18.036 36.1407 17.8825 36.0978 17.5756C36.0693 17.4258 36.055 17.2723 36.055 17.1153C36.055 16.9583 36.0693 16.8048 36.0978 16.6549C36.1407 16.348 36.2227 16.1946 36.3441 16.1946L37.0828 16.1946Z"}),(0,r.jsx)("path",{d:"M47.6563 17.8005C47.6563 17.9504 47.3208 18.0253 46.6499 18.0253C45.979 18.0253 45.615 17.9718 45.5579 17.8647L43.77 14.5245L43.77 17.854C43.77 17.9825 43.4382 18.0467 42.7744 18.0467C42.1178 18.0467 41.7895 17.9825 41.7895 17.854L41.7895 10.6918C41.7895 10.5847 42.0714 10.5312 42.6352 10.5312C42.8565 10.5312 43.1134 10.5526 43.406 10.5954C43.7058 10.6311 43.8878 10.7025 43.952 10.8095L45.665 14.1069L45.665 10.7453C45.665 10.6097 45.9969 10.5419 46.6606 10.5419C47.3244 10.5419 47.6563 10.6097 47.6563 10.7453L47.6563 17.8005Z"}),(0,r.jsx)("path",{d:"M50.2617 16.1946L50.2617 12.3833L49.5015 12.3833C49.3802 12.3833 49.2946 12.2298 49.2446 11.9229C49.2232 11.7731 49.2125 11.6196 49.2125 11.4626C49.2125 11.3056 49.2232 11.1521 49.2446 11.0022C49.2946 10.6953 49.3802 10.5419 49.5015 10.5419L53.0987 10.5419C53.2201 10.5419 53.3021 10.6953 53.345 11.0022C53.3735 11.1521 53.3878 11.3056 53.3878 11.4626C53.3878 11.6196 53.3735 11.7731 53.345 11.9229C53.3021 12.2298 53.2201 12.3833 53.0987 12.3833L52.3814 12.3833L52.3814 16.1946L53.1308 16.1946C53.2522 16.1946 53.3378 16.348 53.3878 16.6549C53.4163 16.8048 53.4306 16.9583 53.4306 17.1153C53.4306 17.2723 53.4163 17.4258 53.3878 17.5756C53.3378 17.8825 53.2522 18.036 53.1308 18.036L49.523 18.036C49.4016 18.036 49.3195 17.8825 49.2767 17.5756C49.2482 17.4258 49.2339 17.2723 49.2339 17.1153C49.2339 16.9583 49.2482 16.8048 49.2767 16.6549C49.3195 16.348 49.4016 16.1946 49.523 16.1946L50.2617 16.1946Z"}),(0,r.jsx)("path",{d:"M58.1908 17.8647C58.1908 18.0075 57.8375 18.0788 57.1309 18.0788C56.4243 18.0788 56.071 18.0075 56.071 17.8647L56.071 12.4904L54.7863 12.4904C54.665 12.4904 54.5794 12.3262 54.5294 11.9979C54.508 11.8409 54.4973 11.6803 54.4973 11.5161C54.4973 11.352 54.508 11.1914 54.5294 11.0344C54.5794 10.706 54.665 10.5419 54.7863 10.5419L59.4434 10.5419C59.5647 10.5419 59.6504 10.706 59.7003 11.0344C59.7217 11.1914 59.7325 11.352 59.7325 11.5161C59.7325 11.6803 59.7217 11.8409 59.7003 11.9979C59.6504 12.3262 59.5647 12.4904 59.4434 12.4904L58.1908 12.4904L58.1908 17.8647Z"}),(0,r.jsx)("path",{d:"M64.8914 10.8952C64.9841 10.6454 65.4409 10.5205 66.2617 10.5205C66.4687 10.5205 66.7114 10.5347 66.9897 10.5633C67.2752 10.5918 67.4072 10.6275 67.3858 10.6704L65.159 15.1454L65.159 17.7576C65.159 17.879 64.9627 17.9646 64.5702 18.0146C64.3703 18.0431 64.1741 18.0574 63.9814 18.0574C63.7887 18.0574 63.596 18.0467 63.4032 18.0253C63.0107 17.9753 62.8144 17.8861 62.8144 17.7576L62.8144 15.2096L60.5127 10.6918C60.4841 10.6489 60.6304 10.6097 60.9516 10.574C61.2728 10.5312 61.544 10.5098 61.7652 10.5098C62.6431 10.5098 63.1249 10.6382 63.2105 10.8952L63.9921 13.0792L64.8914 10.8952Z"})]}),(0,r.jsx)("path",{d:"M18.0306 16.1946L18.0306 12.3833L17.2705 12.3833C17.1492 12.3833 17.0635 12.2298 17.0136 11.9229C16.9922 11.7731 16.9814 11.6196 16.9814 11.4626C16.9814 11.3056 16.9922 11.1521 17.0136 11.0022C17.0635 10.6953 17.1492 10.5419 17.2705 10.5419L20.8677 10.5419C20.989 10.5419 21.0711 10.6953 21.1139 11.0022C21.1425 11.1521 21.1567 11.3056 21.1567 11.4626C21.1567 11.6196 21.1425 11.7731 21.1139 11.9229C21.0711 12.2298 20.989 12.3833 20.8677 12.3833L20.1504 12.3833L20.1504 16.1946L20.8998 16.1946C21.0211 16.1946 21.1068 16.348 21.1567 16.6549C21.1853 16.8048 21.1996 16.9583 21.1996 17.1153C21.1996 17.2723 21.1853 17.4258 21.1567 17.5756C21.1068 17.8825 21.0211 18.036 20.8998 18.036L17.2919 18.036C17.1706 18.036 17.0885 17.8825 17.0457 17.5756C17.0171 17.4258 17.0029 17.2723 17.0029 17.1153C17.0029 16.9583 17.0171 16.8048 17.0457 16.6549C17.0885 16.348 17.1706 16.1946 17.2919 16.1946L18.0306 16.1946Z",fill:"white"}),(0,r.jsx)("path",{d:"M28.6041 17.8005C28.6041 17.9504 28.2687 18.0253 27.5978 18.0253C26.9269 18.0253 26.5629 17.9718 26.5058 17.8647L24.7179 14.5245L24.7179 17.854C24.7179 17.9825 24.386 18.0467 23.7222 18.0467C23.0656 18.0467 22.7373 17.9825 22.7373 17.854L22.7373 10.6918C22.7373 10.5847 23.0192 10.5312 23.5831 10.5312C23.8043 10.5312 24.0613 10.5526 24.3539 10.5954C24.6536 10.6311 24.8356 10.7025 24.8999 10.8095L26.6128 14.1069L26.6128 10.7453C26.6128 10.6097 26.9447 10.5419 27.6085 10.5419C28.2722 10.5419 28.6041 10.6097 28.6041 10.7453L28.6041 17.8005Z",fill:"white"}),(0,r.jsx)("path",{d:"M34.5069 10.5419C34.6283 10.5419 34.6889 10.8595 34.6889 11.4947C34.6889 12.1228 34.6283 12.4368 34.5069 12.4368L32.5477 12.4368L32.5477 13.6573L33.8539 13.6573C33.9752 13.6573 34.0359 13.9356 34.0359 14.4924C34.0359 15.0419 33.9788 15.3167 33.8646 15.3167L32.5477 15.3167L32.5477 17.8968C32.5477 17.9967 32.4121 18.061 32.1409 18.0895C31.8768 18.1252 31.6556 18.1431 31.4772 18.1431L30.974 18.1216C30.6242 18.0788 30.4494 18.0075 30.4494 17.9075L30.4494 10.8202C30.4494 10.706 30.4708 10.6311 30.5136 10.5954C30.5636 10.5597 30.635 10.5419 30.7277 10.5419L34.5069 10.5419Z",fill:"white"}),(0,r.jsx)("path",{d:"M37.0828 16.1946L37.0828 12.3833L36.3227 12.3833C36.2013 12.3833 36.1157 12.2298 36.0657 11.9229C36.0443 11.7731 36.0336 11.6196 36.0336 11.4626C36.0336 11.3056 36.0443 11.1521 36.0657 11.0022C36.1157 10.6953 36.2013 10.5419 36.3227 10.5419L39.9198 10.5419C40.0412 10.5419 40.1233 10.6953 40.1661 11.0022C40.1946 11.1521 40.2089 11.3056 40.2089 11.4626C40.2089 11.6196 40.1946 11.7731 40.1661 11.9229C40.1233 12.2298 40.0412 12.3833 39.9198 12.3833L39.2025 12.3833L39.2025 16.1946L39.952 16.1946C40.0733 16.1946 40.1589 16.348 40.2089 16.6549C40.2374 16.8048 40.2517 16.9583 40.2517 17.1153C40.2517 17.2723 40.2374 17.4258 40.2089 17.5756C40.1589 17.8825 40.0733 18.036 39.952 18.036L36.3441 18.036C36.2227 18.036 36.1407 17.8825 36.0978 17.5756C36.0693 17.4258 36.055 17.2723 36.055 17.1153C36.055 16.9583 36.0693 16.8048 36.0978 16.6549C36.1407 16.348 36.2227 16.1946 36.3441 16.1946L37.0828 16.1946Z",fill:"white"}),(0,r.jsx)("path",{d:"M47.6563 17.8005C47.6563 17.9504 47.3208 18.0253 46.6499 18.0253C45.979 18.0253 45.615 17.9718 45.5579 17.8647L43.77 14.5245L43.77 17.854C43.77 17.9825 43.4382 18.0467 42.7744 18.0467C42.1178 18.0467 41.7895 17.9825 41.7895 17.854L41.7895 10.6918C41.7895 10.5847 42.0714 10.5312 42.6352 10.5312C42.8565 10.5312 43.1134 10.5526 43.406 10.5954C43.7058 10.6311 43.8878 10.7025 43.952 10.8095L45.665 14.1069L45.665 10.7453C45.665 10.6097 45.9969 10.5419 46.6606 10.5419C47.3244 10.5419 47.6563 10.6097 47.6563 10.7453L47.6563 17.8005Z",fill:"white"}),(0,r.jsx)("path",{d:"M50.2617 16.1946L50.2617 12.3833L49.5015 12.3833C49.3802 12.3833 49.2946 12.2298 49.2446 11.9229C49.2232 11.7731 49.2125 11.6196 49.2125 11.4626C49.2125 11.3056 49.2232 11.1521 49.2446 11.0022C49.2946 10.6953 49.3802 10.5419 49.5015 10.5419L53.0987 10.5419C53.2201 10.5419 53.3021 10.6953 53.345 11.0022C53.3735 11.1521 53.3878 11.3056 53.3878 11.4626C53.3878 11.6196 53.3735 11.7731 53.345 11.9229C53.3021 12.2298 53.2201 12.3833 53.0987 12.3833L52.3814 12.3833L52.3814 16.1946L53.1308 16.1946C53.2522 16.1946 53.3378 16.348 53.3878 16.6549C53.4163 16.8048 53.4306 16.9583 53.4306 17.1153C53.4306 17.2723 53.4163 17.4258 53.3878 17.5756C53.3378 17.8825 53.2522 18.036 53.1308 18.036L49.523 18.036C49.4016 18.036 49.3195 17.8825 49.2767 17.5756C49.2482 17.4258 49.2339 17.2723 49.2339 17.1153C49.2339 16.9583 49.2482 16.8048 49.2767 16.6549C49.3195 16.348 49.4016 16.1946 49.523 16.1946L50.2617 16.1946Z",fill:"white"}),(0,r.jsx)("path",{d:"M58.1908 17.8647C58.1908 18.0075 57.8375 18.0788 57.1309 18.0788C56.4243 18.0788 56.071 18.0075 56.071 17.8647L56.071 12.4904L54.7863 12.4904C54.665 12.4904 54.5794 12.3262 54.5294 11.9979C54.508 11.8409 54.4973 11.6803 54.4973 11.5161C54.4973 11.352 54.508 11.1914 54.5294 11.0344C54.5794 10.706 54.665 10.5419 54.7863 10.5419L59.4434 10.5419C59.5647 10.5419 59.6504 10.706 59.7003 11.0344C59.7217 11.1914 59.7325 11.352 59.7325 11.5161C59.7325 11.6803 59.7217 11.8409 59.7003 11.9979C59.6504 12.3262 59.5647 12.4904 59.4434 12.4904L58.1908 12.4904L58.1908 17.8647Z",fill:"white"}),(0,r.jsx)("path",{d:"M64.8914 10.8952C64.9841 10.6454 65.4409 10.5205 66.2617 10.5205C66.4687 10.5205 66.7114 10.5347 66.9897 10.5633C67.2752 10.5918 67.4072 10.6275 67.3858 10.6704L65.159 15.1454L65.159 17.7576C65.159 17.879 64.9627 17.9646 64.5702 18.0146C64.3703 18.0431 64.1741 18.0574 63.9814 18.0574C63.7887 18.0574 63.596 18.0467 63.4032 18.0253C63.0107 17.9753 62.8144 17.8861 62.8144 17.7576L62.8144 15.2096L60.5127 10.6918C60.4841 10.6489 60.6304 10.6097 60.9516 10.574C61.2728 10.5312 61.544 10.5098 61.7652 10.5098C62.6431 10.5098 63.1249 10.6382 63.2105 10.8952L63.9921 13.0792L64.8914 10.8952Z",fill:"white"}),(0,r.jsx)("path",{d:"M18.0306 16.1946L18.0306 12.3833L17.2705 12.3833C17.1492 12.3833 17.0635 12.2298 17.0136 11.9229C16.9922 11.7731 16.9814 11.6196 16.9814 11.4626C16.9814 11.3056 16.9922 11.1521 17.0136 11.0022C17.0635 10.6953 17.1492 10.5419 17.2705 10.5419L20.8677 10.5419C20.989 10.5419 21.0711 10.6953 21.1139 11.0022C21.1425 11.1521 21.1567 11.3056 21.1567 11.4626C21.1567 11.6196 21.1425 11.7731 21.1139 11.9229C21.0711 12.2298 20.989 12.3833 20.8677 12.3833L20.1504 12.3833L20.1504 16.1946L20.8998 16.1946C21.0211 16.1946 21.1068 16.348 21.1567 16.6549C21.1853 16.8048 21.1996 16.9583 21.1996 17.1153C21.1996 17.2723 21.1853 17.4258 21.1567 17.5756C21.1068 17.8825 21.0211 18.036 20.8998 18.036L17.2919 18.036C17.1706 18.036 17.0885 17.8825 17.0457 17.5756C17.0171 17.4258 17.0029 17.2723 17.0029 17.1153C17.0029 16.9583 17.0171 16.8048 17.0457 16.6549C17.0885 16.348 17.1706 16.1946 17.2919 16.1946L18.0306 16.1946Z",stroke:"#5F544D",mask:"url(#path-2-outside-1_12147_5633)"}),(0,r.jsx)("path",{d:"M28.6041 17.8005C28.6041 17.9504 28.2687 18.0253 27.5978 18.0253C26.9269 18.0253 26.5629 17.9718 26.5058 17.8647L24.7179 14.5245L24.7179 17.854C24.7179 17.9825 24.386 18.0467 23.7222 18.0467C23.0656 18.0467 22.7373 17.9825 22.7373 17.854L22.7373 10.6918C22.7373 10.5847 23.0192 10.5312 23.5831 10.5312C23.8043 10.5312 24.0613 10.5526 24.3539 10.5954C24.6536 10.6311 24.8356 10.7025 24.8999 10.8095L26.6128 14.1069L26.6128 10.7453C26.6128 10.6097 26.9447 10.5419 27.6085 10.5419C28.2722 10.5419 28.6041 10.6097 28.6041 10.7453L28.6041 17.8005Z",stroke:"#5F544D",mask:"url(#path-2-outside-1_12147_5633)"}),(0,r.jsx)("path",{d:"M34.5069 10.5419C34.6283 10.5419 34.6889 10.8595 34.6889 11.4947C34.6889 12.1228 34.6283 12.4368 34.5069 12.4368L32.5477 12.4368L32.5477 13.6573L33.8539 13.6573C33.9752 13.6573 34.0359 13.9356 34.0359 14.4924C34.0359 15.0419 33.9788 15.3167 33.8646 15.3167L32.5477 15.3167L32.5477 17.8968C32.5477 17.9967 32.4121 18.061 32.1409 18.0895C31.8768 18.1252 31.6556 18.1431 31.4772 18.1431L30.974 18.1216C30.6242 18.0788 30.4494 18.0075 30.4494 17.9075L30.4494 10.8202C30.4494 10.706 30.4708 10.6311 30.5136 10.5954C30.5636 10.5597 30.635 10.5419 30.7277 10.5419L34.5069 10.5419Z",stroke:"#5F544D",mask:"url(#path-2-outside-1_12147_5633)"}),(0,r.jsx)("path",{d:"M37.0828 16.1946L37.0828 12.3833L36.3227 12.3833C36.2013 12.3833 36.1157 12.2298 36.0657 11.9229C36.0443 11.7731 36.0336 11.6196 36.0336 11.4626C36.0336 11.3056 36.0443 11.1521 36.0657 11.0022C36.1157 10.6953 36.2013 10.5419 36.3227 10.5419L39.9198 10.5419C40.0412 10.5419 40.1233 10.6953 40.1661 11.0022C40.1946 11.1521 40.2089 11.3056 40.2089 11.4626C40.2089 11.6196 40.1946 11.7731 40.1661 11.9229C40.1233 12.2298 40.0412 12.3833 39.9198 12.3833L39.2025 12.3833L39.2025 16.1946L39.952 16.1946C40.0733 16.1946 40.1589 16.348 40.2089 16.6549C40.2374 16.8048 40.2517 16.9583 40.2517 17.1153C40.2517 17.2723 40.2374 17.4258 40.2089 17.5756C40.1589 17.8825 40.0733 18.036 39.952 18.036L36.3441 18.036C36.2227 18.036 36.1407 17.8825 36.0978 17.5756C36.0693 17.4258 36.055 17.2723 36.055 17.1153C36.055 16.9583 36.0693 16.8048 36.0978 16.6549C36.1407 16.348 36.2227 16.1946 36.3441 16.1946L37.0828 16.1946Z",stroke:"#5F544D",mask:"url(#path-2-outside-1_12147_5633)"}),(0,r.jsx)("path",{d:"M47.6563 17.8005C47.6563 17.9504 47.3208 18.0253 46.6499 18.0253C45.979 18.0253 45.615 17.9718 45.5579 17.8647L43.77 14.5245L43.77 17.854C43.77 17.9825 43.4382 18.0467 42.7744 18.0467C42.1178 18.0467 41.7895 17.9825 41.7895 17.854L41.7895 10.6918C41.7895 10.5847 42.0714 10.5312 42.6352 10.5312C42.8565 10.5312 43.1134 10.5526 43.406 10.5954C43.7058 10.6311 43.8878 10.7025 43.952 10.8095L45.665 14.1069L45.665 10.7453C45.665 10.6097 45.9969 10.5419 46.6606 10.5419C47.3244 10.5419 47.6563 10.6097 47.6563 10.7453L47.6563 17.8005Z",stroke:"#5F544D",mask:"url(#path-2-outside-1_12147_5633)"}),(0,r.jsx)("path",{d:"M50.2617 16.1946L50.2617 12.3833L49.5015 12.3833C49.3802 12.3833 49.2946 12.2298 49.2446 11.9229C49.2232 11.7731 49.2125 11.6196 49.2125 11.4626C49.2125 11.3056 49.2232 11.1521 49.2446 11.0022C49.2946 10.6953 49.3802 10.5419 49.5015 10.5419L53.0987 10.5419C53.2201 10.5419 53.3021 10.6953 53.345 11.0022C53.3735 11.1521 53.3878 11.3056 53.3878 11.4626C53.3878 11.6196 53.3735 11.7731 53.345 11.9229C53.3021 12.2298 53.2201 12.3833 53.0987 12.3833L52.3814 12.3833L52.3814 16.1946L53.1308 16.1946C53.2522 16.1946 53.3378 16.348 53.3878 16.6549C53.4163 16.8048 53.4306 16.9583 53.4306 17.1153C53.4306 17.2723 53.4163 17.4258 53.3878 17.5756C53.3378 17.8825 53.2522 18.036 53.1308 18.036L49.523 18.036C49.4016 18.036 49.3195 17.8825 49.2767 17.5756C49.2482 17.4258 49.2339 17.2723 49.2339 17.1153C49.2339 16.9583 49.2482 16.8048 49.2767 16.6549C49.3195 16.348 49.4016 16.1946 49.523 16.1946L50.2617 16.1946Z",stroke:"#5F544D",mask:"url(#path-2-outside-1_12147_5633)"}),(0,r.jsx)("path",{d:"M58.1908 17.8647C58.1908 18.0075 57.8375 18.0788 57.1309 18.0788C56.4243 18.0788 56.071 18.0075 56.071 17.8647L56.071 12.4904L54.7863 12.4904C54.665 12.4904 54.5794 12.3262 54.5294 11.9979C54.508 11.8409 54.4973 11.6803 54.4973 11.5161C54.4973 11.352 54.508 11.1914 54.5294 11.0344C54.5794 10.706 54.665 10.5419 54.7863 10.5419L59.4434 10.5419C59.5647 10.5419 59.6504 10.706 59.7003 11.0344C59.7217 11.1914 59.7325 11.352 59.7325 11.5161C59.7325 11.6803 59.7217 11.8409 59.7003 11.9979C59.6504 12.3262 59.5647 12.4904 59.4434 12.4904L58.1908 12.4904L58.1908 17.8647Z",stroke:"#5F544D",mask:"url(#path-2-outside-1_12147_5633)"}),(0,r.jsx)("path",{d:"M64.8914 10.8952C64.9841 10.6454 65.4409 10.5205 66.2617 10.5205C66.4687 10.5205 66.7114 10.5347 66.9897 10.5633C67.2752 10.5918 67.4072 10.6275 67.3858 10.6704L65.159 15.1454L65.159 17.7576C65.159 17.879 64.9627 17.9646 64.5702 18.0146C64.3703 18.0431 64.1741 18.0574 63.9814 18.0574C63.7887 18.0574 63.596 18.0467 63.4032 18.0253C63.0107 17.9753 62.8144 17.8861 62.8144 17.7576L62.8144 15.2096L60.5127 10.6918C60.4841 10.6489 60.6304 10.6097 60.9516 10.574C61.2728 10.5312 61.544 10.5098 61.7652 10.5098C62.6431 10.5098 63.1249 10.6382 63.2105 10.8952L63.9921 13.0792L64.8914 10.8952Z",stroke:"#5F544D",mask:"url(#path-2-outside-1_12147_5633)"})]})]}),(0,r.jsxs)("defs",{children:[(0,r.jsxs)("filter",{id:"filter0_d_12147_5633",x:"0.5",y:"-0.492188",width:"83.5322",height:"33.9922",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,r.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,r.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,r.jsx)("feOffset",{dy:"2"}),(0,r.jsx)("feGaussianBlur",{stdDeviation:"3"}),(0,r.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,r.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.210449 0 0 0 0 0.187481 0 0 0 0 0.148106 0 0 0 1 0"}),(0,r.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_12147_5633"}),(0,r.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_12147_5633",result:"shape"})]}),(0,r.jsxs)("linearGradient",{id:"paint0_linear_12147_5633",x1:"11.501",y1:"9.54908",x2:"66.2997",y2:"26.9689",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{"stop-color":"#6E4C0C"}),(0,r.jsx)("stop",{offset:"0.28","stop-color":"#BE903E"}),(0,r.jsx)("stop",{offset:"0.48","stop-color":"#EEB626"}),(0,r.jsx)("stop",{offset:"0.675","stop-color":"#E8B65C"}),(0,r.jsx)("stop",{offset:"0.943813","stop-color":"#B57F24"})]}),(0,r.jsxs)("linearGradient",{id:"paint1_linear_12147_5633",x1:"41.5259",y1:"4.22394",x2:"41.672",y2:"24.6652",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{"stop-color":"#9B701C"}),(0,r.jsx)("stop",{offset:"1","stop-color":"#EEDEB4","stop-opacity":"0.82"})]})]})]}),m=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",...e,children:(0,r.jsx)("path",{d:"M12.0004 12.4794C12.1655 12.4931 12.3323 12.5 12.5009 12.5C13.1998 12.5 13.8707 12.3805 14.4945 12.1608C14.4987 12.1078 14.5009 12.0541 14.5009 12C14.5009 10.8954 13.6054 10 12.5009 10C12.0825 10 11.6941 10.1285 11.373 10.3482M12.0004 12.4794C12.0005 12.4863 12.0005 12.4931 12.0005 12.5C12.0005 12.65 11.9922 12.7981 11.9761 12.9438C10.805 13.6158 9.4476 14 8.00049 14C6.55337 14 5.196 13.6158 4.02483 12.9438C4.00874 12.7981 4.00049 12.65 4.00049 12.5C4.00049 12.4932 4.00051 12.4863 4.00054 12.4795M12.0004 12.4794C11.9965 11.6951 11.7668 10.9641 11.373 10.3482M11.373 10.3482C10.6624 9.23679 9.41747 8.5 8.00049 8.5C6.58368 8.5 5.33892 9.23661 4.62828 10.3477M4.62828 10.3477C4.30731 10.1283 3.91913 10 3.50098 10C2.39641 10 1.50098 10.8954 1.50098 12C1.50098 12.0541 1.50313 12.1078 1.50735 12.1608C2.13111 12.3805 2.80209 12.5 3.50098 12.5C3.6692 12.5 3.83582 12.4931 4.00054 12.4795M4.62828 10.3477C4.23429 10.9638 4.00448 11.6949 4.00054 12.4795M10.0005 4.5C10.0005 5.60457 9.10506 6.5 8.00049 6.5C6.89592 6.5 6.00049 5.60457 6.00049 4.5C6.00049 3.39543 6.89592 2.5 8.00049 2.5C9.10506 2.5 10.0005 3.39543 10.0005 4.5ZM14.0005 6.5C14.0005 7.32843 13.3289 8 12.5005 8C11.6721 8 11.0005 7.32843 11.0005 6.5C11.0005 5.67157 11.6721 5 12.5005 5C13.3289 5 14.0005 5.67157 14.0005 6.5ZM5.00049 6.5C5.00049 7.32843 4.32892 8 3.50049 8C2.67206 8 2.00049 7.32843 2.00049 6.5C2.00049 5.67157 2.67206 5 3.50049 5C4.32892 5 5.00049 5.67157 5.00049 6.5Z",stroke:"#7B7F86","stroke-linecap":"round","stroke-linejoin":"round"})});n(35283);let g={batchCardWrapper:"_batchCardWrapper_1xu4n_1",batchCardWrapperOnline:"_batchCardWrapperOnline_1xu4n_7",batchCardWrapperTabImagePosition:"_batchCardWrapperTabImagePosition_1xu4n_11",batchCardImageContainer:"_batchCardImageContainer_1xu4n_15",batchCardDetailsBody:"_batchCardDetailsBody_1xu4n_19",batchCardDetailsHeading:"_batchCardDetailsHeading_1xu4n_23",batchCardDetailsHeadingDetailsHide:"_batchCardDetailsHeadingDetailsHide_1xu4n_27",batchCardDetailsHeadingDetailsShow:"_batchCardDetailsHeadingDetailsShow_1xu4n_31",batchCardDetailsSubSectionsWrapper:"_batchCardDetailsSubSectionsWrapper_1xu4n_35",batchCardDetailsSubSections:"_batchCardDetailsSubSections_1xu4n_35",batchCardDetailsDates:"_batchCardDetailsDates_1xu4n_43",batchCardFeaturesWrapper:"_batchCardFeaturesWrapper_1xu4n_47",batchCardWrapperOffline:"_batchCardWrapperOffline_1xu4n_51",batchCardWrapperMahapack:"_batchCardWrapperMahapack_1xu4n_55",infinityBadgeContainer:"_infinityBadgeContainer_1xu4n_59",infinityBadgeHeading:"_infinityBadgeHeading_1xu4n_64",batchCardBody:"_batchCardBody_1xu4n_68",priceWrapper:"_priceWrapper_1xu4n_72",price:"_price_1xu4n_72",loginRequiredWrapper:"_loginRequiredWrapper_1xu4n_80",loginInfoIcon:"_loginInfoIcon_1xu4n_84",loginInfoTooltip:"_loginInfoTooltip_1xu4n_88",loginInfoTooltipLine:"_loginInfoTooltipLine_1xu4n_92",priceStrike:"_priceStrike_1xu4n_96",priceDiscoutWrapper:"_priceDiscoutWrapper_1xu4n_100",discount:"_discount_1xu4n_104",notisSticky:"_notisSticky_1xu4n_108",isSticky:"_isSticky_1xu4n_112",isStickyDescription:"_isStickyDescription_1xu4n_116",discountBox:"_discountBox_1xu4n_120",discountLeftIcon:"_discountLeftIcon_1xu4n_124",calenderIcon:"_calenderIcon_1xu4n_128",exploreNowBtnDiv:"_exploreNowBtnDiv_1xu4n_132",batchCardImageContainerImg:"_batchCardImageContainerImg_1xu4n_136",priceDisplayDiv:"_priceDisplayDiv_1xu4n_140",batchPlusLastDiv:"_batchPlusLastDiv_1xu4n_144",featuresMapDiv:"_featuresMapDiv_1xu4n_148",featuresMapDivDiv:"_featuresMapDivDiv_1xu4n_152",priceDiv:"_priceDiv_1xu4n_156",pricePriceLabelDiv:"_pricePriceLabelDiv_1xu4n_160",priceBottomLabel:"_priceBottomLabel_1xu4n_172",batchDateTime:"_batchDateTime_1xu4n_175",featuresLineClamp:"_featuresLineClamp_1xu4n_178",infinityIcon:"_infinityIcon_1xu4n_184",included:"_included_1xu4n_187",itemText:"_itemText_1xu4n_191",secondaryBtn:"_secondaryBtn_1xu4n_195",primaryBtn:"_primaryBtn_1xu4n_198"},v=e=>{let{premiumFeature:t,thumbnail:n,title:v,usedFor:b,meta:y,startDate:x,endDate:w,label:_,shareLink:C,price:$,salePrice:k,priceLabel:S,discount:j,tag:E,isDescriptionPage:O,isSticky:P,ctas:N,fromDetails:M,exploreNowLink:T,batchType:L="default",batchSource:D="landing",fomoIcon:A=""}=e;if("power"===L)return(0,r.jsx)(d.Z,{language:null==_?void 0:_[0],cardImg:n||"",ctas:N,batchSource:D,salePrice:k});let I=y&&y.length>0&&(null==y?void 0:y.filter(e=>(null==e?void 0:e.icon)||(null==e?void 0:e.text)).slice(0,2))||[],B=(0,i.c)(g.batchCardDetailsHeading,{[g.batchCardDetailsHeadingDetailsHide]:!0===M,[g.batchCardDetailsHeadingDetailsShow]:!1===M}),R=(0,i.c)(g.batchCardWrapper,{[g.batchCardWrapperOnline]:"online"===E,[g.batchCardWrapperOffline]:"offline"===E,[g.batchCardWrapperMahapack]:"mahapack"===E}),F=(0,i.c)(g.batchCardDetailsSubSectionsWrapper,{[g.notisSticky]:!P&&O,[g.isStickyDescription]:P&&O,[g.isSticky]:!P&&!O}),z=()=>(0,r.jsxs)("div",{className:g.loginRequiredWrapper,children:[(0,r.jsx)(o.Z,{variant:"tiny",weight:"semi-bold",color:"#757575",className:g.itemText,children:"(Login required)"}),(0,r.jsx)(l.u,{label:(0,r.jsx)(s,{fill:"#757575",className:g.loginInfoIcon}),position:"top",origin:"center",variant:"light",fullWidth:!0,style:{width:"min(240px, calc(100vw - 32px))"},children:(0,r.jsx)("div",{className:g.loginInfoTooltip,children:c.map((e,t)=>(0,r.jsx)(o.Z,{component:"div",variant:"small",color:"#1B2124",className:g.loginInfoTooltipLine,children:e},t))})})]});return(0,r.jsx)("div",{className:R,children:(0,r.jsxs)("div",{className:g.batchCardBody,children:[(0,r.jsx)("img",{src:"mahapack"===E?"https://static.pw.live/images/mahapack_20250224120619.webp":"online"===E?"https://static.pw.live/images/onlineTag_20241022124328.webp":"https://static.pw.live/images/offlineTag_20241022124218.webp",alt:"online",className:g.batchCardWrapperTabImagePosition}),(0,r.jsx)("div",{className:g.batchCardImageContainer,children:(0,r.jsx)("img",{src:n||"",className:g.batchCardImageContainerImg,alt:"batchCardTag"})}),(0,r.jsxs)("div",{className:g.batchCardDetailsBody,children:[(0,r.jsx)(o.Z,{variant:"subHeading",component:"h4",weight:"semi-bold",className:B,children:v}),(()=>{let e=null==C?void 0:C[0];return(0,r.jsxs)(r.Fragment,{children:[_&&_.map((e,t)=>(0,r.jsx)(a.Z,{emphasis:e.emphasis,intent:e.variant,label:e.text,size:"large"},t)),C&&(0,r.jsx)("a",{href:null==e?void 0:e.url,target:"_blank",onClick:()=>(null==e?void 0:e.onClick)&&e.onClick(),children:null==e?void 0:e.icon})]})})()]}),(0,r.jsxs)("div",{className:F,children:[(0,r.jsxs)(r.Fragment,{children:[b&&(null==b?void 0:b.length)<50&&(0,r.jsxs)("div",{className:g.batchCardDetailsSubSections,children:[(0,r.jsx)(m,{}),(0,r.jsx)(o.Z,{variant:"tiny",color:"#1B2124",className:g.batchDateTime,children:b})]}),x&&w&&(0,r.jsxs)("div",{className:g.batchCardDetailsDates,children:[(0,r.jsx)(u,{className:g.calenderIcon}),(0,r.jsxs)("p",{className:g.itemText,children:[(0,r.jsx)(o.Z,{className:g.itemText,variant:"tiny",color:"#757575",children:"Starts on "}),(0,r.jsx)(o.Z,{className:g.itemText,variant:"tiny",color:"#1b2124",children:x})]}),(0,r.jsxs)("p",{className:g.itemText,children:[(0,r.jsx)(o.Z,{className:g.itemText,variant:"tiny",color:"#757575",children:"Ends on "}),(0,r.jsx)(o.Z,{className:g.itemText,variant:"tiny",color:"#1b2124",children:w})]})]})]}),(0,r.jsx)(r.Fragment,{children:(null==I?void 0:I.length)>0&&(0,r.jsx)("div",{className:g.batchCardFeaturesWrapper,children:I.map((e,t)=>(0,r.jsxs)("div",{className:g.featuresMapDiv,children:[e.icon,(0,r.jsx)(o.Z,{className:g.featuresLineClamp,component:"span",variant:"tiny",color:"#3D3D3D",weight:"semi-bold",children:(0,r.jsx)("div",{className:g.featuresMapDivDiv,dangerouslySetInnerHTML:{__html:e.text}})},t)]},t))})})]}),(0,r.jsxs)(r.Fragment,{children:[!O&&t&&(0,r.jsx)(r.Fragment,{children:(null==A?void 0:A.length)>0?(0,r.jsx)("img",{src:A,alt:"infinity-strip",className:"h-[34px] w-full"}):(0,r.jsxs)("div",{className:g.infinityBadgeContainer,children:[(0,r.jsxs)("div",{className:g.infinityBadgeHeading,children:[(0,r.jsx)(o.Z,{variant:"tiny",weight:"bold",color:"#D9D9DA",children:"Premium Features"}),(0,r.jsx)(o.Z,{variant:"tiny",color:"#D9D9DA",component:"span",className:g.included,children:"Included"})]}),(0,r.jsx)("div",{className:g.infinityIcon,children:(0,r.jsx)(f,{})})]})}),!O&&!t&&(0,r.jsx)("div",{className:g.batchPlusLastDiv})]}),(0,r.jsx)("div",{className:g.priceDisplayDiv,children:(()=>{let e=!(k&&0!==k);return(0,r.jsxs)("div",{className:g.priceWrapper,children:[(0,r.jsxs)("div",{className:g.pricePriceLabelDiv,children:[(0,r.jsxs)("div",{className:g.priceDiv,children:[(0,r.jsxs)("div",{className:g.price,children:[e?"FREE":k,e&&(0,r.jsx)(z,{})]}),k&&0!==k?(0,r.jsx)("div",{className:g.priceStrike,children:(0,r.jsx)(o.Z,{variant:"small",color:"#71717a",decoration:"strikeThrough",children:$&&0!==j?$:""})}):(0,r.jsx)(r.Fragment,{})]}),S&&""!==S&&(0,r.jsx)("div",{className:g.priceBottomLabel,children:(0,r.jsx)(o.Z,{variant:"label",weight:"medium",color:"#757575",className:g.itemText,children:S})})]}),j?(0,r.jsxs)("div",{className:g.discountBox,children:[(0,r.jsx)(p,{className:g.discountLeftIcon}),(0,r.jsxs)("div",{className:g.priceDiscoutWrapper,children:[(0,r.jsx)(h,{width:14,height:15}),(0,r.jsxs)(o.Z,{variant:"tiny",color:"#1B7938",className:g.itemText,weight:"semi-bold",children:["Discount of ",j,"% applied"]}),(0,r.jsx)("span",{className:g.discount})]})]}):(0,r.jsx)(r.Fragment,{})]})})()}),(0,r.jsx)("div",{className:g.exploreNowBtnDiv,children:N.slice(0,2).map((e,t)=>T&&(null==e?void 0:e.text)==="EXPLORE"?(0,r.jsx)("a",{href:T,className:g.secondaryBtn,onClick:t=>{e.clickHandler()},children:(0,r.jsx)(o.Z,{color:"#5A4BDA",variant:"regular",weight:"semi-bold",children:null==e?void 0:e.text})},t):(0,r.jsx)("div",{className:g.primaryBtn,onClick:e.clickHandler,children:(0,r.jsx)(o.Z,{color:"#ffffff",variant:"regular",weight:"semi-bold",children:k&&0!==k?null==e?void 0:e.text:"ENROLL NOW"})},t))})]})})}},64432:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67251),i=n(45113),o=n(50424),a=n(13328),s=n(72454);n(52509),n(25816);let l={cardWrapper:"_cardWrapper_1gmyl_1",leftBorder:"_leftBorder_1gmyl_6",showDateBorder:"_showDateBorder_1gmyl_10",dateWrapper:"_dateWrapper_1gmyl_14",bottomContentWrapper:"_bottomContentWrapper_1gmyl_18",scheduleContent:"_scheduleContent_1gmyl_22",scheduleContentBox:"_scheduleContentBox_1gmyl_26",bgLightBlue:"_bgLightBlue_1gmyl_30",bgBlue:"_bgBlue_1gmyl_34",bgLightPurple:"_bgLightPurple_1gmyl_38",bgPurple:"_bgPurple_1gmyl_42",bgLightYellow:"_bgLightYellow_1gmyl_46",bgYellow:"_bgYellow_1gmyl_50",animationFromBottom:"_animationFromBottom_1gmyl_54",scheduleLeftBar:"_scheduleLeftBar_1gmyl_58",teacherPadding:"_teacherPadding_1gmyl_62"},d=({title:e,cardItems:t})=>{let[n,d]=(0,i.useState)(!1);return(0,r.jsxs)("div",{className:l.cardWrapper,children:[(0,r.jsx)(a.Z,{component:"h2",variant:"heading2",weight:"bold",children:e}),(n?t:null==t?void 0:t.slice(0,3)).map((e,t)=>{var n;let i=e.startDate&&e.startDate,d=e.endDate&&e.endDate,c=i!==d,u=null==(n=e.teacherName)?void 0:n.map(e=>e).join(" & "),p=(0,s.Z)({[l.leftBorder]:u,[l.showDateBorder]:c}),h=(0,s.Z)(l.animationFromBottom,{[l.bgLightBlue]:t%3==0,[l.bgLightPurple]:t%3==1,[l.bgLightYellow]:t%3==2}),f=(0,s.Z)(l.scheduleLeftBar,{[l.bgBlue]:t%3==0,[l.bgPurple]:t%3==1,[l.bgYellow]:t%3==2});return(0,r.jsx)("div",{className:h,children:(0,r.jsxs)("div",{className:l.scheduleContent,children:[(0,r.jsxs)("div",{className:l.scheduleContentBox,children:[(0,r.jsx)("div",{className:f}),(0,r.jsx)(a.Z,{component:"div",variant:"heading4",weight:"semi-bold",children:e.title}),(0,r.jsxs)("div",{className:l.bottomContentWrapper,children:[c&&(0,r.jsxs)(a.Z,{variant:"small",color:"#757575",className:l.dateWrapper,children:[i," to ",d]}),(0,r.jsxs)(a.Z,{variant:"small",color:"#757575",className:p,component:"div",children:[e.lectureCount," Lectures"]}),(0,r.jsx)(a.Z,{variant:"small",color:"#757575",className:l.teacherPadding,component:"div",children:u})]})]}),e.btn&&(0,r.jsx)(o.Z,{onClick:()=>{var t;null==(t=e.btn)||t.clickHandler()},variant:"dark",children:"Download"})]})},t)}),t.length>3&&(0,r.jsx)(o.Z,{size:"large",onClick:()=>d(!n),variant:"secondary",children:n?"Show Less":`+${t.length-3} more subject${t.length-3>1?"s":""}`})]})}},82985:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67251),i=n(36506),o=n(50424),a=n(13328);n(45113),n(52509);var s=n(86622),l=n(44188);n(84471);let d="_viewBlogButton_d23nh_101",c=({heading:e,subHeading:t,blogImages:n,ViewBlogClickUrl:c})=>{var u,p,h,f,m,g;let v,b;let y=(e,t,n)=>(0,r.jsx)("div",{className:(0,i.c)(n,"relative"),children:(0,r.jsx)("img",{src:e,alt:t})});return(0,r.jsx)(l.Z,{className:"_bgColor_d23nh_81",children:(0,r.jsxs)("div",{className:"_secContainer_d23nh_85",children:[(0,r.jsxs)("div",{className:"_leftSection_d23nh_89",children:[(0,r.jsx)(s.Z,{topToBottomDelay:2,children:(0,r.jsxs)("div",{className:"_leftSectionContent_d23nh_97",children:[(v=e.prefixText,b=e.highlightedText,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{variant:"heading2",weight:"semi-bold",color:"#1B2124",children:v}),(0,r.jsx)(a.Z,{variant:"display1",weight:"semi-bold",color:"#1B2124",children:b}),(0,r.jsx)(a.Z,{variant:"subHeading",weight:"medium",color:"#3D3D3D",children:t})]})),(0,r.jsx)(r.Fragment,{children:c&&(0,r.jsx)("a",{href:c,target:"_blank",children:(0,r.jsx)(o.Z,{size:"large",variant:"dark",className:d,children:"View Blog"})})})]})}),(0,r.jsx)(s.Z,{delay:2,children:y(null==(u=n[0])?void 0:u.src,null==(p=n[0])?void 0:p.alt,"_blogBg_d23nh_1")})]}),(0,r.jsx)("div",{className:"_rightSection_d23nh_93",children:(0,r.jsxs)("div",{className:"_blogImagesWrapper_d23nh_113",children:[(0,r.jsx)(s.Z,{topToBottomDelay:3,children:y(null==(h=n[1])?void 0:h.src,null==(f=n[1])?void 0:f.alt,"_blogBg2_d23nh_12")}),(0,r.jsx)(s.Z,{delay:1,children:y(null==(m=n[2])?void 0:m.src,null==(g=n[2])?void 0:g.alt,"_blogBg3_d23nh_23")}),(0,r.jsx)("a",{href:c,target:"_blank",children:(0,r.jsx)(o.Z,{size:"large",variant:"dark",className:d,children:"View Blog"})})]})})]})})}},14172:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67251),i=n(36506),o=n(45113),a=n(13328);n(52509);var s=n(86622);n(22586);let l={secContainer:"_secContainer_8xg28_5",active:"_active_8xg28_10",inactive:"_inactive_8xg28_14",initialHeading:"_initialHeading_8xg28_18",hidden:"_hidden_8xg28_22",visible:"_visible_8xg28_26",contentWrapper:"_contentWrapper_8xg28_30",animated:"_animated_8xg28_38",mainHeading:"_mainHeading_8xg28_41",titleBx:"_titleBx_8xg28_44",customGradient:"_customGradient_8xg28_50",subHeading:"_subHeading_8xg28_59"},d=({initialHeading:e,mainHeading:t,description:n,delay:d})=>{let[c,u]=(0,o.useState)(!1),[p,h]=(0,o.useState)(!1),f=(0,i.c)(l.secContainer,{[l.active]:c,[l.inactive]:!c}),m=(0,i.c)(l.initialHeading,{[l.hidden]:c,[l.visible]:!c}),g=(0,i.c)(l.contentWrapper,{[l.animated]:p});return(0,o.useEffect)(()=>{let e=setTimeout(()=>{u(!0)},d);return()=>clearTimeout(e)},[d]),(0,o.useEffect)(()=>{let e=setTimeout(()=>{h(!0)},3500);return()=>clearTimeout(e)},[]),(0,r.jsx)(s.Z,{delay:3,children:(0,r.jsxs)("section",{className:f,children:[!c&&(0,r.jsx)(a.Z,{variant:"heading3",weight:"semi-bold",color:"static-black",className:m,children:e}),c&&(0,r.jsxs)("div",{className:g,children:[(0,r.jsx)(a.Z,{component:"h2",variant:"heading1",weight:"semi-bold",color:"static-black",className:l.mainHeading,children:null==t?void 0:t.title}),(0,r.jsxs)("div",{className:l.titleBx,children:[(0,r.jsx)(a.Z,{variant:"display2",weight:"semi-bold",color:"static-black",className:l.customGradient,component:"h2",children:null==t?void 0:t.highlight}),(0,r.jsx)(a.Z,{variant:"display2",weight:"semi-bold",color:"static-black",component:"h2",children:null==t?void 0:t.suffix})]}),(0,r.jsx)(a.Z,{variant:"heading3",weight:"medium",color:"static-grey-1",className:l.subHeading,children:n})]})]})})}},59384:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67251),i=n(50424),o=n(13328);n(45113),n(52509);var a=n(86622),s=n(44188);n(89003);let l={careerLine:"_careerLine_1fs5q_1",secContainer:"_secContainer_1fs5q_5",title:"_title_1fs5q_9",span:"_span_1fs5q_13",subtitle:"_subtitle_1fs5q_17",imgWrapper:"_imgWrapper_1fs5q_21",arrowImg:"_arrowImg_1fs5q_25",button:"_button_1fs5q_29",bgColor:"_bgColor_1fs5q_33"},d=({title:e,subtitle:t,buttonText:n,arrowImgSrc:d,buttonClickUrl:c})=>{let u;let p=(e,t)=>(0,r.jsx)("img",{src:e,className:t,alt:"Arrow Animation"});return(0,r.jsx)(s.Z,{className:l.bgColor,children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{className:l.secContainer,children:[(0,r.jsxs)(o.Z,{variant:"display2",weight:"semi-bold",color:"static-white",className:l.title,children:[e," ",(0,r.jsx)("span",{className:l.span,children:"at PW"})]}),(0,r.jsx)("div",{className:l.careerLine,children:p("https://static.pw.live/images/42d285fa-50dd-49ca-b441-ee09e1bf878433_20241107133651.webp","")}),(0,r.jsxs)(o.Z,{variant:"subHeading",weight:"medium",color:"static-white",className:l.subtitle,children:[t,c&&(0,r.jsx)("div",{className:l.imgWrapper,children:p(d,l.arrowImg)})]}),(u=l.button,(0,r.jsx)(r.Fragment,{children:c&&(0,r.jsx)("a",{href:c,target:"_blank",children:(0,r.jsx)(i.Z,{size:"large",variant:"lowFocus",className:u,children:n})})}))]})})})}},98413:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67251),i=n(45113),o=n(13328);n(52509);var a=n(86622),s=n(44188),l=n(30206),d=n(36506);n(92132);let c=({children:e,bgColor:t,className:n})=>(0,r.jsx)("div",{className:(0,d.c)("_card_jxgpj_1",t,n),style:{background:t},children:e}),u=`
.coreValueSlider .slick-track {
  display: flex !important;
  gap: 0px !important;
  justify-content: center !important;
  align-items: center !important;
}

.slick-disabled {
  display: none !important;
}
.scrollbar-hide {
  -ms-overflow-style: none !important;
  scrollbar-width: none !important;
}
.coreValueSlider .slick-slide {
margin:0 10px
}
  
@media (max-width: 639px) {
  .custom-prev-arrow,
  .custom-next-arrow {
    display: none !important;
  }
  
  
  .coreValueSlider .slick-slide {
margin:0 6px!important
}

}

@media (min-width: 768px) and (max-width: 820px) {
  .custom-prev-arrow,
  .custom-next-arrow {
    display: none !important;
  }
}
`;n(7364);let p=({title:e,titleSize:t,values:n,cardBgColor:d,autoPlay:p})=>{(0,i.useEffect)(()=>{let e=document.createElement("style");return e.innerHTML=u,document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]);let h=(e,t,n)=>(0,r.jsx)("div",{className:n,children:(0,r.jsx)("img",{src:e,alt:t})}),f=(e,t,n,i,a)=>(0,r.jsx)(o.Z,{variant:e,weight:t,color:n,className:i,children:a}),m={dots:!1,infinite:!!p,centerMode:!1,...p?{autoplay:!0,autoplaySpeed:3e3}:{},centerPadding:"0px",speed:500,slidesToShow:3.2,slidesToScroll:1,responsive:[{breakpoint:820,settings:{slidesToShow:3,slidesToScroll:3,centerPadding:"10px"}},{breakpoint:480,settings:{slidesToScroll:1,centerMode:!0,centerPadding:"20px",slidesToShow:1.3,speed:500,infinite:!!p}}]};return(0,r.jsx)(s.Z,{className:"_backgroundWrapper_1o6rc_36",children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{className:"_secContainer_1o6rc_1",children:[f(t||"display2","semi-bold","text-heading","_heading_1o6rc_5",e),(0,r.jsx)("div",{className:"_sliderWrapper_1o6rc_9",children:(0,r.jsx)(l.Z,{customSettings:m,className:"coreValueSlider",children:n.map((e,t)=>(0,r.jsxs)(c,{bgColor:d,className:"_card_1o6rc_13",children:[f("regular","medium","#3D3D3D","_badge_1o6rc_17",e.badge),f("heading3","semi-bold","blue-900","_cardTitle_1o6rc_21",e.title),f("regular","medium","#3D3D3D","_description_1o6rc_25",e.description),h(e.imgSrc,e.title,"_imageWrapper_1o6rc_32")]},t))})})]})})})}},41466:function(e,t,n){"use strict";let r;n.d(t,{Z:function(){return u}});var i=n(67251),o=n(36506),a=n(50424),s=n(13328);n(45113),n(52509);let l={"--d1image":"url(https://static.pw.live/images/d1_20241112103248.png)","--d2image":"url(https://static.pw.live/images/d2_20241112103644.png)","--d3image":"url(https://static.pw.live/images/d3_20241112103457.png)","--m1image":"url(https://static.pw.live/images/m1_20241112103537.png)","--m2image":"url(https://static.pw.live/images/m2_20241112103817.png)","--m3image":"url(https://static.pw.live/images/m3_20241112103544.png)"};var d=((r=d||{}).PRIMARY="primary",r.LOWFOCUS="lowFocus",r.DARK="dark",r);n(82433);let c={cardWrapper:"_cardWrapper_1nxgd_1",cardContent:"_cardContent_1nxgd_5",marginConent:"_marginConent_1nxgd_9",buttonMargin:"_buttonMargin_1nxgd_13",imageOne:"_imageOne_1nxgd_17",imageTwo:"_imageTwo_1nxgd_22",imageThree:"_imageThree_1nxgd_27"},u=e=>{let{title:t,description:n,variant:r,cta:u}=e,p=(0,o.c)(c.cardWrapper,{[c.imageOne]:r===d.PRIMARY,[c.imageTwo]:r===d.LOWFOCUS,[c.imageThree]:r===d.DARK});return(0,i.jsx)("div",{className:p,style:l,children:(0,i.jsxs)("div",{className:c.cardContent,children:[(0,i.jsxs)("div",{children:[t&&(0,i.jsx)(s.Z,{color:r===d.LOWFOCUS?"#FFFFFF":"#1B2124",variant:"heading4",weight:"bold",component:"h4",children:t}),n&&(0,i.jsx)(s.Z,{color:r===d.LOWFOCUS?"#FFFFFF":"#000000",variant:"small",weight:"medium",component:"p",className:c.marginConent,children:n})]}),(0,i.jsx)("div",{children:u&&null!=u&&u.isAuth?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.Z,{size:"medium",variant:r,onClick:null==u?void 0:u.clickHandler,className:c.buttonMargin,children:null==u?void 0:u.label})}):(0,i.jsx)("a",{href:null==u?void 0:u.url,target:"_blank",onClick:e=>{null==u||u.clickHandler()},children:(0,i.jsx)(a.Z,{size:"medium",variant:r,className:c.buttonMargin,children:null==u?void 0:u.label})})})]})})}},47111:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67251);n(45113);var i=n(13328);n(52509);let o=e=>(0,r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("g",{id:"Group 20988",children:(0,r.jsxs)("g",{id:"Group 20987",children:[(0,r.jsx)("path",{id:"Vector",d:"M2.1 8C2.1 4.74683 4.74683 2.1 8 2.1C11.2532 2.1 13.9 4.74683 13.9 8C13.9 11.2532 11.2532 13.9 8 13.9C4.74683 13.9 2.1 11.2532 2.1 8ZM3.1 8C3.1 10.7018 5.29817 12.9 8 12.9C10.7018 12.9 12.9 10.7018 12.9 8C12.9 5.29817 10.7018 3.1 8 3.1C5.29817 3.1 3.1 5.29817 3.1 8Z",fill:"#757575",stroke:"white","stroke-width":"0.2"}),(0,r.jsx)("path",{id:"Vector_2",d:"M8.50039 7.7516V7.79302L8.52968 7.82231L10.0832 9.3758L9.37619 10.0828L7.50039 8.20698V5.1H8.50039V7.7516Z",fill:"#757575",stroke:"white","stroke-width":"0.2"})]})})});n(82238);let a=({title:e,cardImage:t,time:n,redirectionUrl:a,isAuthEnabled:s})=>{let l=()=>(0,r.jsxs)("div",{className:"_card_78w95_1",children:[(0,r.jsx)("div",{className:"_videoRatio_78w95_14",children:(0,r.jsx)("div",{className:"_cardImageContainer_78w95_6",children:(0,r.jsx)("img",{src:t||"https://static.pw.live/images/4853cafa-26a6-49d4-94d9-8fb0bb8a4848_20241022113429.webp",alt:e,className:"_cardImage_78w95_6"})})}),(0,r.jsx)("div",{className:"_dateTime_78w95_22",children:(0,r.jsxs)("div",{className:"_iconSpace_78w95_26",children:[(0,r.jsx)(o,{className:"_icon_78w95_26"}),(0,r.jsx)(i.Z,{variant:"tiny",color:"#757575",weight:"medium",children:n})]})}),(0,r.jsx)("div",{className:"_title_78w95_10",children:(0,r.jsx)(i.Z,{variant:"small",color:"#09090b",weight:"semi-bold",children:e})})]});return(0,r.jsx)(r.Fragment,{children:s?l():(0,r.jsx)("a",{href:a,target:"_blank",children:l()})})}},51385:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67251),i=n(50424),o=n(13328);n(45113),n(52509);var a=n(86622),s=n(44188),l=n(36506);n(73957);let d=({images:e})=>(0,r.jsx)(a.Z,{scale:!0,children:(0,r.jsxs)("div",{className:"_collageContainer_1dokj_5",children:[" ",e.map((e,t)=>(0,r.jsx)("img",{src:e.src,alt:e.alt,className:(0,l.c)("_image_1dokj_1",{"col-span-2":2===t})},t))]})});n(82515);let c={sectionContainer:"_sectionContainer_vcikr_1",textContainer:"_textContainer_vcikr_5",headingHighlight:"_headingHighlight_vcikr_12",subheading:"_subheading_vcikr_21",button:"_button_vcikr_25",imageContainer:"_imageContainer_vcikr_29"};function u({images:e,heading:t,highlight:n,description:l,buttonLabel:u,buttonActionUrl:p}){let h;let f=(e,t,n,i,a)=>(0,r.jsx)(o.Z,{variant:e,weight:t,color:n,className:i,children:a});return(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:c.sectionContainer,children:[(0,r.jsx)("div",{className:c.textContainer,children:(0,r.jsxs)(a.Z,{delay:1,children:[f("display2","semi-bold","#1B2124",c.heading,t),f("display2","semi-bold","#1B2124",c.headingHighlight,n),f("subHeading","medium","#1B2124",c.subheading,l),(h=c.button,(0,r.jsx)(r.Fragment,{children:p&&(0,r.jsx)("a",{href:p,target:"_blank",children:(0,r.jsx)(i.Z,{size:"large",variant:"dark",className:h,children:u})})}))]})}),(0,r.jsx)("div",{className:c.imageContainer,children:(0,r.jsx)(d,{images:e})})]})})}},7525:function(e,t,n){"use strict";let r,i;n.d(t,{Z:function(){return y}});var o=n(67251),a=n(50424),s=n(13328),l=n(45113);n(52509);var d=n(44188),c=n(16223),u=((r=u||{}).IMAGE="image",r.VIDEO="video",r),p=n(36506),h=((i=h||{}).IMAGE="image",i.VIDEO="video",i);let f=e=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",...e,children:(0,o.jsx)("path",{d:"M19.5938 12.375V20.625M13.4062 20.625V12.375M28.875 16.5C28.875 23.3345 23.3345 28.875 16.5 28.875C9.66548 28.875 4.125 23.3345 4.125 16.5C4.125 9.66548 9.66548 4.125 16.5 4.125C23.3345 4.125 28.875 9.66548 28.875 16.5Z",stroke:"white",strokeWidth:"2.0625",strokeLinecap:"round",strokeLinejoin:"round"})}),m=e=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 33 33",fill:"none",...e,children:[(0,o.jsx)("path",{d:"M13 10L22 16.5L13 23V10Z",fill:"white"}),(0,o.jsx)("circle",{cx:"16.5",cy:"16.5",r:"14.5",stroke:"white",strokeWidth:"2"})]});n(79391);let g={banner:"_banner_1vrxw_1",videoWrapper:"_videoWrapper_1vrxw_4",overlay:"_overlay_1vrxw_12",playPauseButton:"_playPauseButton_1vrxw_20",baseStyle:"_baseStyle_1vrxw_24"},v=({type:e,src:t,alt:n,className:r,autoplay:i=!0,playsInline:a=!0,loop:s=!0})=>{let d=(0,l.useRef)(null),[c,u]=(0,l.useState)(i);return(0,l.useEffect)(()=>{i&&d.current&&d.current.play().catch(e=>{console.error("Failed to autoplay video:",e)})},[i,t]),(0,o.jsx)("div",{className:(0,p.c)(g.baseStyle,r),children:e===h.IMAGE?(0,o.jsx)("img",{src:t,alt:n||"Banner image"}):(0,o.jsxs)("div",{className:g.videoWrapper,children:[(0,o.jsx)("button",{onClick:()=>{d.current&&(d.current.paused?(d.current.play(),u(!0)):(d.current.pause(),u(!1)))},className:g.playPauseButton,"aria-label":c?"Pause video":"Play video",children:c?(0,o.jsx)(f,{}):(0,o.jsx)(m,{})}),(0,o.jsx)("div",{className:g.overlay}),(0,o.jsx)("video",{ref:d,src:t,autoPlay:i,muted:i,playsInline:a,loop:s,className:g.banner,style:{pointerEvents:"none"}})]})})};n(74081);let b={sectionDiv:"_sectionDiv_7bg54_1",contentWrapper:"_contentWrapper_7bg54_6",innerWrapper:"_innerWrapper_7bg54_10",pwLifeWrapper:"_pwLifeWrapper_7bg54_14",pwLifeText:"_pwLifeText_7bg54_18",title:"_title_7bg54_22",displaySubtext:"_displaySubtext_7bg54_26",customGradient:"_customGradient_7bg54_30",descriptionWrapper:"_descriptionWrapper_7bg54_39",button:"_button_7bg54_43"},y=({videoSrc:e,title:t,subtitle:n,description:r,buttonText:i,buttonClickUrl:l})=>(0,o.jsxs)(d.Z,{className:b.sectionDiv,children:[(0,o.jsx)(v,{type:u.VIDEO,src:e||"",autoplay:!0,playsInline:!0,loop:!0,alt:""}),(0,o.jsx)("div",{className:b.contentWrapper,children:(0,o.jsxs)("div",{className:b.innerWrapper,children:[(0,o.jsx)("h3",{className:b.pwLifeWrapper,children:(0,o.jsx)(s.Z,{variant:"regular",weight:"semi-bold",color:"static-white",className:b.pwLifeText,children:t})}),(0,o.jsxs)(s.Z,{component:"h1",variant:"display2",weight:"semi-bold",color:"static-white",className:b.title,children:[null==n?void 0:n.main," ",(0,o.jsxs)("span",{className:b.displaySubtext,children:[null==n?void 0:n.subtext," ",(0,o.jsx)("span",{className:b.customGradient,children:null==n?void 0:n.highlight})]})]}),(0,o.jsx)("div",{className:b.descriptionWrapper,children:(0,o.jsx)(s.Z,{variant:"subHeading",weight:"medium",color:"static-white",children:(0,o.jsx)(c.Z,{content:r||""})})}),l&&(0,o.jsx)("a",{href:l,target:"_blank",children:(0,o.jsx)(a.Z,{size:"large",variant:"lowFocus",className:b.button,children:i})})]})})]})},16223:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67251);n(46775);let i={content:"_content_65doc_1"},o=({content:e,className:t})=>e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:`${i.content} ${t}`,dangerouslySetInnerHTML:{__html:e||""}})}):null},18056:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67251),i=n(45113),o=n(50424),a=n(13328);n(52509);var s=n(86622),l=n(44188);let d=`
@media (max-width: 639px) {
      .flip-img {
        width: 100px;
        height: 100px;
      }
      .flipimg-m {
        width: 60px;
        height: 60px;
      }
      
    }
    @media (min-width: 768px) and (max-width: 820px) {
      .flip-img {
        width: 130px;
        height: 130px;
      }
    
      
    }
`;var c=n(36506);n(46350);let u={flipWrapper:"_flipWrapper_17p9u_1",flipImg:"_flipImg_17p9u_8",front:"_front_17p9u_13",back:"_back_17p9u_17",flipped:"_flipped_17p9u_21"},p=({isFlipped:e,frontImage:t,backImage:n,altFront:i,altBack:o,customClass:a})=>(0,r.jsx)("div",{className:(0,c.c)(u.flipWrapper,e&&u.flipped,a),children:(0,r.jsxs)(s.Z,{scale:!0,children:[(0,r.jsx)("img",{src:t,alt:i,className:(0,c.c)(u.flipImg,u.front)}),(0,r.jsx)("img",{src:n,alt:o,className:(0,c.c)(u.flipImg,u.back)})]})});n(12484);let h="_imageColumn_1hh8p_35",f=({images:e,staticImages:t,heading:n,buttonText:c,buttonClickUrl:u})=>{let f;let[m,g]=(0,i.useState)(0);(0,i.useEffect)(()=>{let e=setInterval(()=>{g(e=>(e+1)%3)},4e3),t=document.createElement("style");return t.innerHTML=d,document.head.appendChild(t),()=>{document.head.removeChild(t),clearInterval(e)}},[]);let v=1===m||2===m,b=2===m,y=e.map((e,t)=>({...e,isFlipped:t<2&&v||t>=2&&b})),x=(e,t,n,i,o)=>(0,r.jsx)(a.Z,{component:"h2",variant:e,weight:t,color:n,className:i,children:o}),w=(e,t,n)=>(0,r.jsx)("div",{className:n,children:(0,r.jsx)(s.Z,{scale:!0,children:(0,r.jsx)("img",{src:e,alt:t})})});return(0,r.jsx)(l.Z,{className:"_bgColor_1hh8p_60",children:(0,r.jsxs)("div",{className:"_wrapper_1hh8p_31",children:[(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("div",{className:"_storiesBg2_1hh8p_8"}),y.slice(0,2).map(e=>(0,r.jsx)(p,{...e},e.id)),t.slice(0,3).map((e,t)=>(0,r.jsx)("div",{className:e.className,children:(0,r.jsx)(s.Z,{scale:!0,children:(0,r.jsx)("img",{src:e.src??"",alt:e.alt??""},t)})}))]}),(0,r.jsx)("div",{className:"_textColumn_1hh8p_39",children:(0,r.jsx)(s.Z,{delay:1,children:(0,r.jsxs)("div",{children:[x("heading1","semi-bold","#1B2124",void 0,"Empowering"),x("display2","semi-bold","#1B2124","_gradientText_1hh8p_43",n),x("heading1","semi-bold","#1B2124",void 0,"Student"),x("heading3","medium","#3D3D3D","_subText_1hh8p_52","& Counting..."),(f="_button_1hh8p_56",(0,r.jsx)(r.Fragment,{children:u&&(0,r.jsx)("a",{href:u,target:"_blank",children:(0,r.jsx)(o.Z,{size:"large",variant:"dark",className:f,children:c})})}))]})})}),(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("div",{className:"_storiesBg_1hh8p_1"}),y.slice(2).map((e,t)=>(0,r.jsx)(p,{...e},e.id)),t.slice(3).map((e,t)=>w(e.src??"",e.alt??"",e.className))]})]})})}},12699:function(e,t,n){"use strict";let r,i,o,a;n.d(t,{Z:function(){return E}});var s=n(67251),l=n(36506),d=n(45113),c=n(13328);n(52509),n(33926);let u={card:"_card_ip7e6_1",cardBackground:"_cardBackground_ip7e6_33",topSection:"_topSection_ip7e6_37",selectBtn:"_selectBtn_ip7e6_41",recommendedTag:"_recommendedTag_ip7e6_45",popularTag:"_popularTag_ip7e6_48",checkedCircle:"_checkedCircle_ip7e6_56",infinityCardBackground:"_infinityCardBackground_ip7e6_60",basicCardBackground:"_basicCardBackground_ip7e6_68",infinityCardProBackground:"_infinityCardProBackground_ip7e6_76",basicCardBorder:"_basicCardBorder_ip7e6_84",infinityCardBorder:"_infinityCardBorder_ip7e6_88",infinityCardBorderProPlan:"_infinityCardBorderProPlan_ip7e6_93",singleCardSection:"_singleCardSection_ip7e6_97",multipleCardSection:"_multipleCardSection_ip7e6_101",Opacity0:"_Opacity0_ip7e6_105",Opacity100:"_Opacity100_ip7e6_108"};var p=((r=p||{}).BASIC="basic",r.INFINITY="infinity",r.INFINITY_PRO="infinityPro",r),h=((i=h||{}).BASIC="#9387FF",i.INFINITY="#FAC515",i.INFINITY_PRO_PLAN="#3CCB7F",i),f=((o=f||{}).BASIC="#B2A9FF",o.INFINITY="#FEEE95",o),m=((a=m||{}).Center="center",a.Right="end",a);let g={basic:{background:u.basicCardBackground,checkColor:"#9387FF",border:u.basicCardBorder},infinity:{background:u.infinityCardBackground,checkColor:"#FAC515",border:u.infinityCardBorder},infinityPro:{background:u.infinityCardBackground,checkColor:"#FAC515",border:u.infinityCardBorder}},v={basic:{background:u.basicCardBackground,checkColor:"#9387FF",border:u.basicCardBorder},infinity:{background:u.infinityCardProBackground,checkColor:"#3CCB7F",border:u.infinityCardBorderProPlan},infinityPro:{background:u.infinityCardBackground,checkColor:"#FAC515",border:u.infinityCardBorder}},b=e=>(0,s.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,s.jsx)("g",{id:"heroicons-outline/information-circle",children:(0,s.jsx)("path",{id:"Vector",d:"M9.375 9.375L9.40957 9.35771C9.88717 9.11891 10.4249 9.55029 10.2954 10.0683L9.70458 12.4317C9.57507 12.9497 10.1128 13.3811 10.5904 13.1423L10.625 13.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10ZM10 6.875H10.0063V6.88125H10V6.875Z",stroke:"white",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}),y=e=>(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,s.jsxs)("g",{id:"heroicons-solid/check-circle",children:[(0,s.jsx)("rect",{width:"24",height:"24",rx:"12",fill:"#1B2124"}),(0,s.jsx)("path",{id:"Subtract","fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM15.6103 10.1859C15.8511 9.84887 15.773 9.38046 15.4359 9.1397C15.0989 8.89894 14.6305 8.97701 14.3897 9.31407L11.1543 13.8436L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L10.7197 15.5303C10.8756 15.6862 11.0921 15.7656 11.3119 15.7474C11.5316 15.7293 11.7322 15.6153 11.8603 15.4359L15.6103 10.1859Z",fill:"white"})]})}),x=e=>(0,s.jsxs)("svg",{width:"97",height:"29",viewBox:"0 0 97 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,s.jsx)("path",{d:"M0 22.361C0 20.8198 1.24944 19.5703 2.7907 19.5703V28.9989C1.24944 28.9989 0 27.7494 0 26.2082V22.361Z",fill:"#A15C07"}),(0,s.jsx)("path",{d:"M0 10C0 5.58173 3.58172 2 8 2L10.5 2V8.77143V20H5.36735C2.64801 20 0.350837 22.0177 0 24.7143V19.5714V10Z",fill:"url(#paint0_linear_14701_9270)"}),(0,s.jsx)("rect",{width:"76",height:"18",transform:"translate(10.5 2)",fill:"url(#paint1_linear_14701_9270)"}),(0,s.jsx)("g",{filter:"url(#filter0_d_14701_9270)",children:(0,s.jsx)("path",{d:"M16.2734 12.2754V11.2695H17.665C17.9255 11.2695 18.1533 11.2207 18.3486 11.123C18.5472 11.0221 18.7002 10.8822 18.8076 10.7031C18.9183 10.5208 18.9736 10.3092 18.9736 10.0684C18.9736 9.69727 18.8483 9.40755 18.5977 9.19922C18.347 8.98763 18.0166 8.88184 17.6064 8.88184H16.2734V7.80273H17.792C18.2412 7.80273 18.6432 7.88737 18.998 8.05664C19.3561 8.22266 19.6393 8.46517 19.8477 8.78418C20.056 9.09993 20.1602 9.48242 20.1602 9.93164C20.1602 10.3678 20.0544 10.7633 19.8428 11.1182C19.6344 11.4697 19.3333 11.7513 18.9395 11.9629C18.5488 12.1712 18.0817 12.2754 17.5381 12.2754H16.2734ZM15.4482 15V7.80273H16.6494V15H15.4482ZM19.3887 15L17.6309 12.0947L18.5391 11.3818L20.7559 15H19.3887ZM23.5684 15.0781C23.041 15.0781 22.5804 14.9658 22.1865 14.7412C21.7926 14.5133 21.485 14.1976 21.2637 13.7939C21.0423 13.3903 20.9316 12.9248 20.9316 12.3975C20.9316 11.8506 21.0423 11.377 21.2637 10.9766C21.485 10.5762 21.7829 10.2669 22.1572 10.0488C22.5316 9.82747 22.9466 9.7168 23.4023 9.7168C23.8385 9.7168 24.2324 9.81771 24.584 10.0195C24.9388 10.2214 25.2204 10.5029 25.4287 10.8643C25.637 11.2223 25.7412 11.6423 25.7412 12.124C25.7412 12.2477 25.7347 12.3633 25.7217 12.4707C25.7087 12.5781 25.6924 12.6855 25.6729 12.793H21.7959V11.9775H24.6621C24.6621 11.7301 24.61 11.5104 24.5059 11.3184C24.4017 11.123 24.2552 10.9701 24.0664 10.8594C23.8776 10.7454 23.6562 10.6885 23.4023 10.6885C23.1159 10.6885 22.8652 10.7601 22.6504 10.9033C22.4388 11.0433 22.2728 11.2402 22.1523 11.4941C22.0352 11.7448 21.9766 12.0378 21.9766 12.373C21.9766 12.7148 22.04 13.016 22.167 13.2764C22.2972 13.5368 22.4795 13.7402 22.7139 13.8867C22.9515 14.0332 23.2331 14.1064 23.5586 14.1064C23.7441 14.1064 23.9199 14.0837 24.0859 14.0381C24.252 13.9925 24.4033 13.9339 24.54 13.8623C24.6768 13.7874 24.7939 13.7093 24.8916 13.6279L25.2871 14.5752C25.082 14.7217 24.8298 14.8421 24.5303 14.9365C24.234 15.0309 23.9134 15.0781 23.5684 15.0781ZM29.1494 15.0586C28.7751 15.0586 28.4251 14.9902 28.0996 14.8535C27.7741 14.7168 27.4876 14.528 27.2402 14.2871C26.9961 14.043 26.804 13.7581 26.6641 13.4326C26.5273 13.1038 26.459 12.749 26.459 12.3682C26.459 11.984 26.529 11.6309 26.6689 11.3086C26.8089 10.9831 27.001 10.7015 27.2451 10.4639C27.4893 10.223 27.7708 10.0374 28.0898 9.90723C28.4121 9.77376 28.7539 9.70703 29.1152 9.70703C29.4147 9.70703 29.7061 9.7526 29.9893 9.84375C30.2725 9.93164 30.5215 10.0521 30.7363 10.2051L30.3066 11.1523C30.2122 11.0645 30.1016 10.9896 29.9746 10.9277C29.8477 10.8659 29.7126 10.8187 29.5693 10.7861C29.4261 10.7503 29.2845 10.7324 29.1445 10.7324C28.8451 10.7324 28.5781 10.8024 28.3438 10.9424C28.1126 11.0824 27.9287 11.2777 27.792 11.5283C27.6585 11.7757 27.5918 12.0589 27.5918 12.3779C27.5918 12.6904 27.6585 12.972 27.792 13.2227C27.9255 13.4733 28.1094 13.6719 28.3438 13.8184C28.5781 13.9616 28.8467 14.0332 29.1494 14.0332C29.3903 14.0332 29.6165 13.9925 29.8281 13.9111C30.043 13.8265 30.209 13.7288 30.3262 13.6182L30.751 14.5801C30.5622 14.7135 30.3294 14.8275 30.0527 14.9219C29.776 15.013 29.4749 15.0586 29.1494 15.0586ZM33.7344 15.0781C33.2396 15.0781 32.7952 14.9642 32.4014 14.7363C32.0075 14.5052 31.695 14.1878 31.4639 13.7842C31.2327 13.3773 31.1172 12.9085 31.1172 12.3779C31.1172 11.8506 31.2327 11.3867 31.4639 10.9863C31.695 10.5859 32.0075 10.2734 32.4014 10.0488C32.7952 9.82422 33.2396 9.71191 33.7344 9.71191C34.2357 9.71191 34.6833 9.82422 35.0771 10.0488C35.471 10.2734 35.7819 10.5859 36.0098 10.9863C36.2376 11.3867 36.3516 11.8506 36.3516 12.3779C36.3516 12.9085 36.236 13.3773 36.0049 13.7842C35.777 14.1878 35.4645 14.5052 35.0674 14.7363C34.6735 14.9642 34.2292 15.0781 33.7344 15.0781ZM33.7344 14.0576C34.0208 14.0576 34.2764 13.9876 34.501 13.8477C34.7256 13.7077 34.9014 13.5124 35.0283 13.2617C35.1585 13.0078 35.2236 12.7132 35.2236 12.3779C35.2236 12.0492 35.1602 11.7611 35.0332 11.5137C34.9062 11.2663 34.7305 11.0742 34.5059 10.9375C34.2845 10.8008 34.029 10.7324 33.7393 10.7324C33.4528 10.7324 33.1973 10.8008 32.9727 10.9375C32.748 11.0742 32.5706 11.2663 32.4404 11.5137C32.3135 11.7611 32.25 12.0492 32.25 12.3779C32.25 12.7132 32.3135 13.0078 32.4404 13.2617C32.5706 13.5124 32.7464 13.7077 32.9678 13.8477C33.1924 13.9876 33.4479 14.0576 33.7344 14.0576ZM37.2744 15V9.79004H38.3926V10.4297H38.5732L38.1533 10.9375C38.2998 10.5469 38.5179 10.2458 38.8076 10.0342C39.0973 9.81934 39.4375 9.71191 39.8281 9.71191C40.1927 9.71191 40.5003 9.80469 40.751 9.99023C41.0049 10.1725 41.1839 10.4183 41.2881 10.7275L40.9805 10.4443H41.4004L41.0244 10.7275C41.1872 10.3857 41.4264 10.1318 41.7422 9.96582C42.0579 9.79655 42.4014 9.71191 42.7725 9.71191C43.0882 9.71191 43.3568 9.76562 43.5781 9.87305C43.8027 9.98047 43.9834 10.1253 44.1201 10.3076C44.2601 10.4899 44.3626 10.6966 44.4277 10.9277C44.4961 11.1556 44.5303 11.3916 44.5303 11.6357V15H43.373V11.8164C43.373 11.4551 43.2917 11.1816 43.1289 10.9961C42.9661 10.8073 42.7448 10.7129 42.4648 10.7129C42.2858 10.7129 42.1214 10.7536 41.9717 10.835C41.8219 10.9163 41.7015 11.0384 41.6104 11.2012C41.5225 11.3639 41.4785 11.569 41.4785 11.8164V15H40.3262V11.8164C40.3262 11.4551 40.2432 11.1816 40.0771 10.9961C39.9144 10.8073 39.693 10.7129 39.4131 10.7129C39.1429 10.7129 38.9102 10.8073 38.7148 10.9961C38.5228 11.1849 38.4268 11.4665 38.4268 11.8408V15H37.2744ZM45.6826 15V9.79004H46.8008V10.4297H46.9814L46.5615 10.9375C46.708 10.5469 46.9261 10.2458 47.2158 10.0342C47.5055 9.81934 47.8457 9.71191 48.2363 9.71191C48.6009 9.71191 48.9085 9.80469 49.1592 9.99023C49.4131 10.1725 49.5921 10.4183 49.6963 10.7275L49.3887 10.4443H49.8086L49.4326 10.7275C49.5954 10.3857 49.8346 10.1318 50.1504 9.96582C50.4661 9.79655 50.8096 9.71191 51.1807 9.71191C51.4964 9.71191 51.765 9.76562 51.9863 9.87305C52.2109 9.98047 52.3916 10.1253 52.5283 10.3076C52.6683 10.4899 52.7708 10.6966 52.8359 10.9277C52.9043 11.1556 52.9385 11.3916 52.9385 11.6357V15H51.7812V11.8164C51.7812 11.4551 51.6999 11.1816 51.5371 10.9961C51.3743 10.8073 51.153 10.7129 50.873 10.7129C50.694 10.7129 50.5296 10.7536 50.3799 10.835C50.2301 10.9163 50.1097 11.0384 50.0186 11.2012C49.9307 11.3639 49.8867 11.569 49.8867 11.8164V15H48.7344V11.8164C48.7344 11.4551 48.6514 11.1816 48.4854 10.9961C48.3226 10.8073 48.1012 10.7129 47.8213 10.7129C47.5511 10.7129 47.3184 10.8073 47.123 10.9961C46.931 11.1849 46.835 11.4665 46.835 11.8408V15H45.6826ZM56.4199 15.0781C55.8926 15.0781 55.432 14.9658 55.0381 14.7412C54.6442 14.5133 54.3366 14.1976 54.1152 13.7939C53.8939 13.3903 53.7832 12.9248 53.7832 12.3975C53.7832 11.8506 53.8939 11.377 54.1152 10.9766C54.3366 10.5762 54.6344 10.2669 55.0088 10.0488C55.3831 9.82747 55.7982 9.7168 56.2539 9.7168C56.6901 9.7168 57.084 9.81771 57.4355 10.0195C57.7904 10.2214 58.0719 10.5029 58.2803 10.8643C58.4886 11.2223 58.5928 11.6423 58.5928 12.124C58.5928 12.2477 58.5863 12.3633 58.5732 12.4707C58.5602 12.5781 58.5439 12.6855 58.5244 12.793H54.6475V11.9775H57.5137C57.5137 11.7301 57.4616 11.5104 57.3574 11.3184C57.2533 11.123 57.1068 10.9701 56.918 10.8594C56.7292 10.7454 56.5078 10.6885 56.2539 10.6885C55.9674 10.6885 55.7168 10.7601 55.502 10.9033C55.2904 11.0433 55.1243 11.2402 55.0039 11.4941C54.8867 11.7448 54.8281 12.0378 54.8281 12.373C54.8281 12.7148 54.8916 13.016 55.0186 13.2764C55.1488 13.5368 55.3311 13.7402 55.5654 13.8867C55.8031 14.0332 56.0846 14.1064 56.4102 14.1064C56.5957 14.1064 56.7715 14.0837 56.9375 14.0381C57.1035 13.9925 57.2549 13.9339 57.3916 13.8623C57.5283 13.7874 57.6455 13.7093 57.7432 13.6279L58.1387 14.5752C57.9336 14.7217 57.6813 14.8421 57.3818 14.9365C57.0856 15.0309 56.765 15.0781 56.4199 15.0781ZM59.5449 15V9.79004H60.6729V10.4492H60.8877L60.4873 10.8936C60.5654 10.6331 60.6924 10.4167 60.8682 10.2441C61.0472 10.0684 61.2572 9.93652 61.498 9.84863C61.7422 9.75749 62.0042 9.71191 62.2842 9.71191C62.6813 9.71191 63.0101 9.80143 63.2705 9.98047C63.5342 10.1595 63.7311 10.3939 63.8613 10.6836C63.9915 10.9733 64.0566 11.2874 64.0566 11.626V15H62.9043V11.875C62.9043 11.4909 62.8099 11.2012 62.6211 11.0059C62.4323 10.8105 62.1751 10.7129 61.8496 10.7129C61.6348 10.7129 61.4395 10.7585 61.2637 10.8496C61.0879 10.9375 60.9495 11.0677 60.8486 11.2402C60.7477 11.4128 60.6973 11.626 60.6973 11.8799V15H59.5449ZM69.9355 15.0781C69.7174 14.9935 69.5368 14.904 69.3936 14.8096C69.2536 14.7119 69.1462 14.6061 69.0713 14.4922C68.9997 14.375 68.9557 14.2464 68.9395 14.1064L69.1299 14.209H68.6611L68.9053 13.6133V10.8594L68.6611 10.332H68.7832V7.48047H69.9355V13.3936C69.9355 13.5986 69.9648 13.7484 70.0234 13.8428C70.082 13.9339 70.1927 14.0137 70.3555 14.082L69.9355 15.0781ZM67.2109 15.0781C66.9115 15.0781 66.6217 15.0195 66.3418 14.9023C66.0651 14.7819 65.8161 14.6077 65.5947 14.3799C65.3766 14.152 65.2041 13.8721 65.0771 13.54C64.9535 13.2048 64.8932 12.8239 64.8965 12.3975C64.89 11.8245 64.9958 11.3379 65.2139 10.9375C65.4352 10.5371 65.7249 10.2311 66.083 10.0195C66.4411 9.80794 66.8236 9.70215 67.2305 9.70215C67.6699 9.70215 68.0589 9.81771 68.3975 10.0488C68.7393 10.2799 69.0062 10.5973 69.1982 11.001C69.3936 11.4014 69.4928 11.8571 69.4961 12.3682C69.4928 12.8792 69.3919 13.3398 69.1934 13.75C68.9948 14.1602 68.723 14.484 68.3779 14.7217C68.0361 14.9593 67.6471 15.0781 67.2109 15.0781ZM67.4502 14.082C67.7236 14.082 67.9661 14.0088 68.1777 13.8623C68.3893 13.7158 68.5553 13.5156 68.6758 13.2617C68.7962 13.0046 68.8581 12.7116 68.8613 12.3828C68.8581 12.0312 68.7946 11.7301 68.6709 11.4795C68.5472 11.2288 68.3796 11.0368 68.168 10.9033C67.9564 10.7666 67.722 10.6999 67.4648 10.7031C67.1882 10.6999 66.9408 10.7682 66.7227 10.9082C66.5078 11.0482 66.3402 11.2451 66.2197 11.499C66.0993 11.7497 66.0407 12.0443 66.0439 12.3828C66.0407 12.7116 66.0977 13.0046 66.2148 13.2617C66.3353 13.5156 66.5029 13.7158 66.7178 13.8623C66.9326 14.0088 67.1768 14.082 67.4502 14.082ZM73.6172 15.0781C73.0898 15.0781 72.6292 14.9658 72.2354 14.7412C71.8415 14.5133 71.5339 14.1976 71.3125 13.7939C71.0911 13.3903 70.9805 12.9248 70.9805 12.3975C70.9805 11.8506 71.0911 11.377 71.3125 10.9766C71.5339 10.5762 71.8317 10.2669 72.2061 10.0488C72.5804 9.82747 72.9954 9.7168 73.4512 9.7168C73.8874 9.7168 74.2812 9.81771 74.6328 10.0195C74.9876 10.2214 75.2692 10.5029 75.4775 10.8643C75.6859 11.2223 75.79 11.6423 75.79 12.124C75.79 12.2477 75.7835 12.3633 75.7705 12.4707C75.7575 12.5781 75.7412 12.6855 75.7217 12.793H71.8447V11.9775H74.7109C74.7109 11.7301 74.6589 11.5104 74.5547 11.3184C74.4505 11.123 74.304 10.9701 74.1152 10.8594C73.9264 10.7454 73.7051 10.6885 73.4512 10.6885C73.1647 10.6885 72.9141 10.7601 72.6992 10.9033C72.4876 11.0433 72.3216 11.2402 72.2012 11.4941C72.084 11.7448 72.0254 12.0378 72.0254 12.373C72.0254 12.7148 72.0889 13.016 72.2158 13.2764C72.346 13.5368 72.5283 13.7402 72.7627 13.8867C73.0003 14.0332 73.2819 14.1064 73.6074 14.1064C73.793 14.1064 73.9688 14.0837 74.1348 14.0381C74.3008 13.9925 74.4521 13.9339 74.5889 13.8623C74.7256 13.7874 74.8428 13.7093 74.9404 13.6279L75.3359 14.5752C75.1309 14.7217 74.8786 14.8421 74.5791 14.9365C74.2829 15.0309 73.9622 15.0781 73.6172 15.0781ZM81.5469 15.0781C81.3288 14.9935 81.1481 14.904 81.0049 14.8096C80.8649 14.7119 80.7575 14.6061 80.6826 14.4922C80.611 14.375 80.5671 14.2464 80.5508 14.1064L80.7412 14.209H80.2725L80.5166 13.6133V10.8594L80.2725 10.332H80.3945V7.48047H81.5469V13.3936C81.5469 13.5986 81.5762 13.7484 81.6348 13.8428C81.6934 13.9339 81.804 14.0137 81.9668 14.082L81.5469 15.0781ZM78.8223 15.0781C78.5228 15.0781 78.2331 15.0195 77.9531 14.9023C77.6764 14.7819 77.4274 14.6077 77.2061 14.3799C76.988 14.152 76.8154 13.8721 76.6885 13.54C76.5648 13.2048 76.5046 12.8239 76.5078 12.3975C76.5013 11.8245 76.6071 11.3379 76.8252 10.9375C77.0465 10.5371 77.3363 10.2311 77.6943 10.0195C78.0524 9.80794 78.4349 9.70215 78.8418 9.70215C79.2812 9.70215 79.6702 9.81771 80.0088 10.0488C80.3506 10.2799 80.6175 10.5973 80.8096 11.001C81.0049 11.4014 81.1042 11.8571 81.1074 12.3682C81.1042 12.8792 81.0033 13.3398 80.8047 13.75C80.6061 14.1602 80.3343 14.484 79.9893 14.7217C79.6475 14.9593 79.2585 15.0781 78.8223 15.0781ZM79.0615 14.082C79.335 14.082 79.5775 14.0088 79.7891 13.8623C80.0007 13.7158 80.1667 13.5156 80.2871 13.2617C80.4076 13.0046 80.4694 12.7116 80.4727 12.3828C80.4694 12.0312 80.4059 11.7301 80.2822 11.4795C80.1585 11.2288 79.9909 11.0368 79.7793 10.9033C79.5677 10.7666 79.3333 10.6999 79.0762 10.7031C78.7995 10.6999 78.5521 10.7682 78.334 10.9082C78.1191 11.0482 77.9515 11.2451 77.8311 11.499C77.7106 11.7497 77.652 12.0443 77.6553 12.3828C77.652 12.7116 77.709 13.0046 77.8262 13.2617C77.9466 13.5156 78.1143 13.7158 78.3291 13.8623C78.5439 14.0088 78.7881 14.082 79.0615 14.082Z",fill:"white"})}),(0,s.jsx)("path",{d:"M86.5 2H96.5L92 11L96.5 20H86.5V2Z",fill:"url(#paint2_linear_14701_9270)"}),(0,s.jsxs)("defs",{children:[(0,s.jsxs)("filter",{id:"filter0_d_14701_9270",x:"8.44922",y:"0.480469",width:"80.5176",height:"21.5977",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,s.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,s.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,s.jsx)("feOffset",{}),(0,s.jsx)("feGaussianBlur",{stdDeviation:"3.5"}),(0,s.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,s.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,s.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_14701_9270"}),(0,s.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_14701_9270",result:"shape"})]}),(0,s.jsxs)("linearGradient",{id:"paint0_linear_14701_9270",x1:"5.25",y1:"2",x2:"5.25",y2:"24.7143",gradientUnits:"userSpaceOnUse",children:[(0,s.jsx)("stop",{"stop-color":"#A15C07"}),(0,s.jsx)("stop",{offset:"1","stop-color":"#CA8504"})]}),(0,s.jsxs)("linearGradient",{id:"paint1_linear_14701_9270",x1:"38",y1:"0",x2:"38",y2:"18",gradientUnits:"userSpaceOnUse",children:[(0,s.jsx)("stop",{"stop-color":"#A15C07"}),(0,s.jsx)("stop",{offset:"1","stop-color":"#CA8504"})]}),(0,s.jsxs)("linearGradient",{id:"paint2_linear_14701_9270",x1:"91.5",y1:"2",x2:"91.5",y2:"20",gradientUnits:"userSpaceOnUse",children:[(0,s.jsx)("stop",{"stop-color":"#A15C07"}),(0,s.jsx)("stop",{offset:"1","stop-color":"#CA8504"})]})]})]}),w=e=>(0,s.jsxs)("svg",{width:"64",height:"29",viewBox:"0 0 64 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,s.jsx)("path",{d:"M0 22.361C0 20.8198 1.24944 19.5703 2.7907 19.5703V28.9989C1.24944 28.9989 0 27.7494 0 26.2082V22.361Z",fill:"#912018"}),(0,s.jsx)("path",{d:"M0 10C0 5.58173 3.58172 2 8 2L10.5 2V8.77143V20H5.36735C2.64801 20 0.350837 22.0177 0 24.7143V19.5714V10Z",fill:"url(#paint0_linear_14701_9184)"}),(0,s.jsx)("rect",{width:"43",height:"18",transform:"translate(10.5 2)",fill:"url(#paint1_linear_14701_9184)"}),(0,s.jsx)("g",{filter:"url(#filter0_d_14701_9184)",children:(0,s.jsx)("path",{d:"M16.2334 12.3682V11.2988H17.5225C17.7861 11.2988 18.0156 11.2467 18.2109 11.1426C18.4062 11.0384 18.556 10.8936 18.6602 10.708C18.7676 10.5225 18.8213 10.3092 18.8213 10.0684C18.8213 9.69727 18.6992 9.40755 18.4551 9.19922C18.2109 8.98763 17.8805 8.88184 17.4639 8.88184H16.2334V7.80273H17.542C18.0465 7.80273 18.4827 7.89551 18.8506 8.08105C19.2217 8.26335 19.5065 8.52214 19.7051 8.85742C19.9069 9.18945 20.0078 9.58171 20.0078 10.0342C20.0078 10.4899 19.9069 10.8936 19.7051 11.2451C19.5065 11.5967 19.2266 11.8717 18.8652 12.0703C18.5039 12.2689 18.0791 12.3682 17.5908 12.3682H16.2334ZM15.3057 15V7.80273H16.5068V15H15.3057ZM22.9277 15.0781C22.4329 15.0781 21.9886 14.9642 21.5947 14.7363C21.2008 14.5052 20.8883 14.1878 20.6572 13.7842C20.4261 13.3773 20.3105 12.9085 20.3105 12.3779C20.3105 11.8506 20.4261 11.3867 20.6572 10.9863C20.8883 10.5859 21.2008 10.2734 21.5947 10.0488C21.9886 9.82422 22.4329 9.71191 22.9277 9.71191C23.429 9.71191 23.8766 9.82422 24.2705 10.0488C24.6644 10.2734 24.9753 10.5859 25.2031 10.9863C25.431 11.3867 25.5449 11.8506 25.5449 12.3779C25.5449 12.9085 25.4294 13.3773 25.1982 13.7842C24.9704 14.1878 24.6579 14.5052 24.2607 14.7363C23.8669 14.9642 23.4225 15.0781 22.9277 15.0781ZM22.9277 14.0576C23.2142 14.0576 23.4697 13.9876 23.6943 13.8477C23.9189 13.7077 24.0947 13.5124 24.2217 13.2617C24.3519 13.0078 24.417 12.7132 24.417 12.3779C24.417 12.0492 24.3535 11.7611 24.2266 11.5137C24.0996 11.2663 23.9238 11.0742 23.6992 10.9375C23.4779 10.8008 23.2223 10.7324 22.9326 10.7324C22.6462 10.7324 22.3906 10.8008 22.166 10.9375C21.9414 11.0742 21.764 11.2663 21.6338 11.5137C21.5068 11.7611 21.4434 12.0492 21.4434 12.3779C21.4434 12.7132 21.5068 13.0078 21.6338 13.2617C21.764 13.5124 21.9398 13.7077 22.1611 13.8477C22.3857 13.9876 22.6413 14.0576 22.9277 14.0576ZM26.4775 17.0508V9.79004H27.5957V10.3955H27.7471L27.4932 10.9131V13.7939L27.8203 14.3896H27.6299V17.0508H26.4775ZM29.207 15.0781C28.7708 15.0781 28.3802 14.9593 28.0352 14.7217C27.6934 14.484 27.4232 14.1602 27.2246 13.75C27.026 13.3398 26.9251 12.8792 26.9219 12.3682C26.9251 11.8571 27.0228 11.4014 27.2148 11.001C27.4102 10.5973 27.6771 10.2799 28.0156 10.0488C28.3574 9.81771 28.748 9.70215 29.1875 9.70215C29.5944 9.70215 29.9769 9.80794 30.335 10.0195C30.693 10.2311 30.9811 10.5371 31.1992 10.9375C31.4206 11.3379 31.528 11.8245 31.5215 12.3975C31.5247 12.8239 31.4629 13.2048 31.3359 13.54C31.209 13.8721 31.0365 14.152 30.8184 14.3799C30.6003 14.6077 30.3512 14.7819 30.0713 14.9023C29.7946 15.0195 29.5065 15.0781 29.207 15.0781ZM28.9678 14.082C29.2412 14.082 29.4854 14.0088 29.7002 13.8623C29.915 13.7158 30.0811 13.5156 30.1982 13.2617C30.3187 13.0046 30.3773 12.7116 30.374 12.3828C30.3773 12.0443 30.3187 11.7497 30.1982 11.499C30.0778 11.2451 29.9085 11.0482 29.6904 10.9082C29.4756 10.7682 29.2298 10.6999 28.9531 10.7031C28.6927 10.6999 28.4567 10.7666 28.2451 10.9033C28.0368 11.0368 27.8691 11.2288 27.7422 11.4795C27.6185 11.7301 27.5566 12.0312 27.5566 12.3828C27.5566 12.7116 27.6169 13.0046 27.7373 13.2617C27.861 13.5156 28.0286 13.7158 28.2402 13.8623C28.4518 14.0088 28.6943 14.082 28.9678 14.082ZM34.3584 15.0781C33.984 15.0781 33.6504 14.9984 33.3574 14.8389C33.0645 14.6794 32.8333 14.4482 32.6641 14.1455C32.498 13.8395 32.415 13.4684 32.415 13.0322V9.79004H33.5674V12.915C33.5674 13.2959 33.6699 13.5824 33.875 13.7744C34.0801 13.9665 34.3275 14.0625 34.6172 14.0625C34.8418 14.0625 35.0371 14.0137 35.2031 13.916C35.3724 13.8151 35.5042 13.6784 35.5986 13.5059C35.6963 13.3333 35.7451 13.1364 35.7451 12.915V9.79004H36.8975V13.3691C36.8975 13.5775 36.9251 13.7321 36.9805 13.833C37.0358 13.9339 37.1481 14.0169 37.3174 14.082L36.8926 15.0781C36.5898 14.9707 36.3571 14.834 36.1943 14.668C36.0316 14.4987 35.9502 14.3099 35.9502 14.1016L36.3164 14.3555H35.6621L36.2236 13.9941C36.0576 14.2936 35.8184 14.5492 35.5059 14.7607C35.1934 14.9723 34.8109 15.0781 34.3584 15.0781ZM39.4023 15.0781C39.1289 15.0781 38.9027 15.0195 38.7236 14.9023C38.5479 14.7852 38.416 14.6224 38.3281 14.4141C38.2402 14.2057 38.1963 13.9648 38.1963 13.6914V7.48047H39.3486V13.5986C39.3486 13.6735 39.3568 13.7467 39.373 13.8184C39.3893 13.89 39.4219 13.9502 39.4707 13.999C39.5228 14.0446 39.6042 14.0674 39.7148 14.0674C39.7604 14.0674 39.8011 14.0641 39.8369 14.0576C39.876 14.0479 39.9102 14.0381 39.9395 14.0283V14.9902C39.8711 15.0195 39.7881 15.0407 39.6904 15.0537C39.596 15.07 39.5 15.0781 39.4023 15.0781ZM42.3027 15.0781C41.9642 15.0781 41.6631 15.0114 41.3994 14.8779C41.1357 14.7412 40.929 14.5557 40.7793 14.3213C40.6296 14.0837 40.5547 13.8102 40.5547 13.501C40.5547 13.1755 40.6426 12.8939 40.8184 12.6562C40.9941 12.4154 41.2546 12.2298 41.5996 12.0996C41.9447 11.9661 42.3662 11.8994 42.8643 11.8994H43.9922V12.7051H42.8936C42.5029 12.7051 42.2002 12.7686 41.9854 12.8955C41.7705 13.0225 41.6631 13.2113 41.6631 13.4619C41.6631 13.6117 41.7005 13.7386 41.7754 13.8428C41.8503 13.9469 41.9528 14.0267 42.083 14.082C42.2165 14.1374 42.3646 14.165 42.5273 14.165C42.6966 14.165 42.8822 14.1276 43.084 14.0527C43.2858 13.9779 43.46 13.8623 43.6064 13.7061C43.7529 13.5498 43.8262 13.3512 43.8262 13.1104V12.5732L43.7627 12.2949V11.6553C43.7627 11.5544 43.7497 11.4486 43.7236 11.3379C43.7008 11.2272 43.6536 11.1247 43.582 11.0303C43.5137 10.9326 43.4144 10.8545 43.2842 10.7959C43.154 10.734 42.9847 10.7031 42.7764 10.7031C42.6104 10.7031 42.4362 10.7227 42.2539 10.7617C42.0716 10.7975 41.8958 10.848 41.7266 10.9131C41.5605 10.9782 41.4157 11.0514 41.292 11.1328L40.8965 10.2002C41.0462 10.1156 41.2269 10.0358 41.4385 9.96094C41.6533 9.88607 41.8877 9.82585 42.1416 9.78027C42.3955 9.7347 42.6543 9.71191 42.918 9.71191C43.3477 9.71191 43.6911 9.77214 43.9482 9.89258C44.2087 10.013 44.404 10.1709 44.5342 10.3662C44.6644 10.5583 44.7507 10.7666 44.793 10.9912C44.8385 11.2126 44.8613 11.4274 44.8613 11.6357V13.3398C44.8613 13.5449 44.8825 13.7028 44.9248 13.8135C44.9704 13.9242 45.0534 14.0007 45.1738 14.043L45.2812 14.082L44.8613 15.0781L44.71 15.0195C44.4626 14.9219 44.2738 14.7998 44.1436 14.6533C44.0133 14.5068 43.9434 14.3604 43.9336 14.2139L44.1533 14.3359H43.7627L44.0264 14.1992C43.9092 14.4368 43.6943 14.6436 43.3818 14.8193C43.0693 14.9919 42.7096 15.0781 42.3027 15.0781ZM46.1748 15V9.79004H47.3076V10.5566H47.4541L47.1367 10.8984C47.2246 10.7096 47.3483 10.5241 47.5078 10.3418C47.6673 10.1595 47.8643 10.0098 48.0986 9.89258C48.333 9.77214 48.6032 9.71191 48.9092 9.71191C49.0329 9.71191 49.1452 9.72168 49.2461 9.74121C49.3503 9.75749 49.4235 9.77702 49.4658 9.7998L49.002 10.9033C48.9759 10.8903 48.9255 10.8773 48.8506 10.8643C48.779 10.8512 48.696 10.8447 48.6016 10.8447C48.4648 10.8447 48.3216 10.8724 48.1719 10.9277C48.0254 10.9831 47.887 11.0661 47.7568 11.1768C47.6299 11.2874 47.5257 11.4258 47.4443 11.5918C47.3662 11.7546 47.3271 11.9434 47.3271 12.1582V15H46.1748Z",fill:"white"})}),(0,s.jsx)("path",{d:"M53.5 2H63.5L59 11L63.5 20H53.5V2Z",fill:"url(#paint2_linear_14701_9184)"}),(0,s.jsxs)("defs",{children:[(0,s.jsxs)("filter",{id:"filter0_d_14701_9184",x:"8.30469",y:"0.480469",width:"48.1602",height:"23.5703",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,s.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,s.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,s.jsx)("feOffset",{}),(0,s.jsx)("feGaussianBlur",{stdDeviation:"3.5"}),(0,s.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,s.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,s.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_14701_9184"}),(0,s.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_14701_9184",result:"shape"})]}),(0,s.jsxs)("linearGradient",{id:"paint0_linear_14701_9184",x1:"5.25",y1:"2",x2:"5.25",y2:"24.7143",gradientUnits:"userSpaceOnUse",children:[(0,s.jsx)("stop",{"stop-color":"#D92D20"}),(0,s.jsx)("stop",{offset:"1","stop-color":"#F04438"})]}),(0,s.jsxs)("linearGradient",{id:"paint1_linear_14701_9184",x1:"21.5",y1:"0",x2:"21.5",y2:"18",gradientUnits:"userSpaceOnUse",children:[(0,s.jsx)("stop",{"stop-color":"#D92D20"}),(0,s.jsx)("stop",{offset:"1","stop-color":"#F04438"})]}),(0,s.jsxs)("linearGradient",{id:"paint2_linear_14701_9184",x1:"58.5",y1:"2",x2:"58.5",y2:"20",gradientUnits:"userSpaceOnUse",children:[(0,s.jsx)("stop",{"stop-color":"#D92D20"}),(0,s.jsx)("stop",{offset:"1","stop-color":"#F04438"})]})]})]});var _=n(17726);let C=(e,t)=>t?v[e]:g[e];var $=n(54894);let k=({checkmarkColor:e})=>(0,s.jsx)("div",{children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:e,children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9983C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z",fill:e})})});n(37175);let S={CardWrapper:"_CardWrapper_l82zy_1",CardWrapperFlex:"_CardWrapperFlex_l82zy_5",CardWrapperHidden:"_CardWrapperHidden_l82zy_9",CardDescription:"_CardDescription_l82zy_13",ToolTip:"_ToolTip_l82zy_17",ToolTipText:"_ToolTipText_l82zy_21"},j=({itemData:e,index:t,variant:n,isRecommended:r,containerWidth:i,isSinglePlan:o,isProPlan:a})=>{var u;let[p]=(0,$.Z)(),f=(0,d.useRef)(null),[g,v]=(0,d.useState)(m.Center);(0,d.useEffect)(()=>{if(i&&f.current){let e=f.current.offsetWidth,t=f.current.offsetLeft;e>=.4*i||t>=.7*i?v(m.Right):v(m.Center)}},[i,e.description]);let y=(0,l.c)(S.CardWrapper,{[S.CardWrapperFlex]:e.enabled,[S.CardWrapperHidden]:!e.enabled}),x=o?h.INFINITY:null==(u=C(n,a))?void 0:u.checkColor;return(0,s.jsxs)("div",{className:y,children:[(0,s.jsx)(k,{checkmarkColor:x}),(0,s.jsx)("div",{ref:f,children:(0,s.jsx)(c.Z,{component:"div",color:"#FFFFFF",variant:"small",weight:"infinity"===n&&0===t?"bold":"medium",children:e.item})}),e.description&&(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("div",{className:S.CardDescription,"data-tooltip-id":`anchor-${t}`,"data-tooltip-delay-show":400,children:(0,s.jsx)(_.u,{label:(0,s.jsx)(b,{}),onClose:function(){},open:!1,origin:g,position:"bottom",showCloseIcon:!1,variant:"light",style:{maxWidth:p<=640?"214px":"270px",overflow:"hidden"},children:(0,s.jsx)("div",{className:S.ToolTip,children:(0,s.jsx)(c.Z,{color:"text-body-1",component:"div",variant:"small",className:S.ToolTipText,children:e.description})})})})})]},e.item)},E=({variant:e,index:t,data:n,price:r,total:i,discount:o,planName:a,planId:h,planVideoId:f,isRecommended:m,selectedPlan:g,isSinglePlan:v,planBadges:b,isProPlan:_,handlePlanSelect:$})=>{let k=(0,d.useRef)(null),[S,E]=(0,d.useState)(void 0);(0,d.useEffect)(()=>{k.current&&E(k.current.offsetWidth)},[k]);let O=()=>{let t=(0,l.c)(v?u.singleCardSection:u.multipleCardSection);return(0,s.jsx)("div",{className:t,ref:k,children:n.map((t,n)=>(0,s.jsx)(j,{itemData:t,index:n,variant:e,isRecommended:!!v||m,containerWidth:S,isSinglePlan:v,isProPlan:_},n))})};if(v)return(0,s.jsx)(O,{});let P={price:r,total:i,discount:o,planName:a,planId:h,planVideoId:f,isRecommended:m};return(0,s.jsxs)("div",{className:u.card,ref:k,role:"button",onClick:()=>$(P),children:[(0,s.jsx)("div",{className:(()=>{let e=C(0===t?p.BASIC:1===t?p.INFINITY:p.INFINITY_PRO,_);return(0,l.c)(u.cardBackground,null==e?void 0:e.background,null==e?void 0:e.border,{[u.Opacity0]:(null==g?void 0:g.planId)!==h,[u.Opacity100]:(null==g?void 0:g.planId)===h})})()}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:u.topSection,children:[(0,s.jsx)(c.Z,{component:"div",color:"#FFFFFF",variant:"heading4",children:null==a?void 0:a.slice(0,20)}),(0,s.jsx)(c.Z,{component:"div",color:"#FFFFFF",variant:"heading3",weight:"bold",children:new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0,minimumFractionDigits:0}).format(isNaN(i)?0:Math.floor(i))})]}),(0,s.jsx)(O,{})]}),(0,s.jsx)("div",{className:u.selectBtn,children:"Select"}),"Recommended"===b&&(0,s.jsx)(x,{className:u.recommendedTag}),"Popular"===b&&(0,s.jsx)(w,{className:u.popularTag}),(null==g?void 0:g.planId)===h&&(0,s.jsx)(y,{className:u.checkedCircle})]})}},49726:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(67251),i=n(36506),o=n(45113),a=n(13328);n(52509);let s=e=>(0,r.jsx)("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.73017 7.20938C6.02875 6.92228 6.50353 6.93159 6.79063 7.23017L10.5 11.1679L14.2094 7.23017C14.4965 6.93159 14.9713 6.92228 15.2698 7.20938C15.5684 7.49647 15.5777 7.97125 15.2906 8.26983L11.0406 12.7698C10.8992 12.9169 10.704 13 10.5 13C10.296 13 10.1008 12.9169 9.95938 12.7698L5.70938 8.26983C5.42228 7.97125 5.43159 7.49647 5.73017 7.20938Z",fill:"#5A4BDA"})}),l=[{color:"#E0EAFF",iconShadow:"rgba(97, 114, 243, 0.20)",iconBackground:"#EEF4FF"},{color:"#FEE4E2",iconShadow:"rgba(227, 27, 77, 0.20)",iconBackground:"#FEF3F2"},{color:"#D3F8DF",iconShadow:"rgba(22, 179, 100, 0.20)",iconBackground:"#EDFCF2"},{color:"#D1E9FF",iconShadow:"rgba(3, 124, 191, 0.20)",iconBackground:"#EFF8FF"},{color:"#FFF6ED",iconShadow:"rgba(251, 101, 20, 0.20)",iconBackground:"#FFF6ED"},{color:"#F4F3FF",iconShadow:"rgba(122, 90, 248, 0.20)",iconBackground:"#F4F3FF"},{color:"#FEFBE8",iconShadow:"rgba(234, 170, 8, 0.20)",iconBackground:"#FEFBE8"},{color:"#FEF3F2",iconShadow:"rgba(240, 68, 56, 0.20)",iconBackground:"#FEF3F2"}],d=e=>(0,r.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",fill:"#1B2124"})}),c=e=>isNaN(e)?{color:"#ffffff",iconShadow:"rgba(0, 0, 0, 0.08)",iconBackground:"#ffffff"}:l[e%l.length];n(30493);let u={card:"_card_1dgb3_1",arrowIconContainer:"_arrowIconContainer_1dgb3_6",topSectionCard:"_topSectionCard_1dgb3_10",bottomSectionCard:"_bottomSectionCard_1dgb3_14",cardContentContainer:"_cardContentContainer_1dgb3_18",topSectionContainerClass:"_topSectionContainerClass_1dgb3_22",bottomSectionContainerClass:"_bottomSectionContainerClass_1dgb3_26",topSectionIconClass:"_topSectionIconClass_1dgb3_30",bottomSectionIconClass:"_bottomSectionIconClass_1dgb3_34",rightIconContainer:"_rightIconContainer_1dgb3_38",rightIconBox:"_rightIconBox_1dgb3_42",rightIcon:"_rightIcon_1dgb3_38",cardContent:"_cardContent_1dgb3_18",cardContentSection:"_cardContentSection_1dgb3_54",iconContainer:"_iconContainer_1dgb3_58",title:"_title_1dgb3_64",description:"_description_1dgb3_68",arrowIcon:"_arrowIcon_1dgb3_6",topSectionIcon:"_topSectionIcon_1dgb3_30",topSectionIconBox:"_topSectionIconBox_1dgb3_84",centerIcon:"_centerIcon_1dgb3_90",hubCardIcon:"_hubCardIcon_1dgb3_94"},p=({icon:e,iconBackground:t,iconShadow:n,isTopSection:o})=>(0,r.jsx)("div",{className:(0,i.c)(u.iconContainer,{[u.topSectionIconClass]:o,[u.bottomSectionIconClass]:!o}),style:{"--icon-background":t,"--icon-shadow":n},children:(0,r.jsx)("img",{src:e,alt:"hubCardIcon",className:u.centerIcon})}),h=({icon:e,iconBackground:t,iconShadow:n})=>(0,r.jsx)("div",{className:u.topSectionIcon,children:(0,r.jsx)("div",{className:u.topSectionIconBox,style:{"--icon-background":t,"--icon-shadow":n},children:(0,r.jsx)("img",{src:e||"https://static.pw.live/images/046b026b4582249e9bdd7213e2cedf8b_20241023070641.png",alt:"hubCardCenterIcon",className:u.hubCardIcon})})}),f=()=>(0,r.jsx)("div",{className:`${u.arrowIconContainer}`,children:(0,r.jsx)(d,{className:u.arrowIcon})}),m=({card:e,id:t,isTopSection:n})=>{let{color:o,iconShadow:s,iconBackground:l}=c(t),{title:d,description:m,icon:g,url:v}=e,b=(0,i.c)(u.card,{[u.topSectionCard]:n,[u.bottomSectionCard]:!n}),y=(0,i.c)(u.cardContentContainer,{[u.topSectionContainerClass]:n,[u.bottomSectionContainerClass]:!n});return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)(h,{icon:g,iconBackground:l,iconShadow:s}),(0,r.jsx)("a",{href:v,target:"_blank",children:(0,r.jsxs)("div",{className:b,style:{"--color":o},children:[n&&g&&(0,r.jsx)("div",{className:u.rightIconContainer,children:(0,r.jsx)("div",{className:u.rightIconBox,children:(0,r.jsx)("img",{src:g,alt:"hubCardIcon",className:u.rightIcon})})}),(0,r.jsxs)("div",{className:y,children:[(0,r.jsxs)("div",{className:u.cardContent,children:[(0,r.jsxs)("div",{className:u.cardContentSection,children:[g&&(0,r.jsx)(p,{icon:g,iconBackground:l,iconShadow:s,isTopSection:n}),(0,r.jsx)(a.Z,{variant:"regular",component:"div",weight:"bold",color:"#1b2124",className:u.title,children:d})]}),(0,r.jsx)(f,{})]}),n&&(0,r.jsx)(a.Z,{variant:"tiny",component:"div",weight:"medium",color:"#3d3d3d",className:u.description,children:m||""})]})]},d)})]})};n(22655);let g={cardsSection:"_cardsSection_pl513_1",cardSectionDetails:"_cardSectionDetails_pl513_4",cardSectionOfferings:"_cardSectionOfferings_pl513_7",cardsContainer:"_cardsContainer_pl513_11",cardsContainerClassRegular:"_cardsContainerClassRegular_pl513_14",cardsContainerClassDetails:"_cardsContainerClassDetails_pl513_17",showCardsParentContainer:"_showCardsParentContainer_pl513_21",showCardsContainer:"_showCardsContainer_pl513_25",showMoreTextContainer:"_showMoreTextContainer_pl513_31",showMoreText:"_showMoreText_pl513_31",showMoreIcon:"_showMoreIcon_pl513_39",showMore:"_showMore_pl513_31",showLess:"_showLess_pl513_46"},v=({cards:e,variant:t,clickCardHandler:n})=>{let[l,d]=(0,o.useState)(!1),c=(0,o.useRef)(null),[u,p]=(0,o.useState)(null),h=(0,o.useMemo)(()=>l?e:e.slice(0,4),[l,e]),f=e=>n(e),v=()=>{if("details"!==t)return;let e=c.current;e&&e&&(l?e.style.height=`${null==e?void 0:e.scrollHeight}px`:u&&!l&&(e.style.height=u))};(0,o.useEffect)(()=>{e&&(null==e?void 0:e.length)>=4&&v()},[l,e]),(0,o.useEffect)(()=>{if("details"!==t)return;let n=c.current;n&&(null==e?void 0:e.length)>=4&&setTimeout(()=>{p(`${n.offsetHeight}px`),n.style.height=`${n.offsetHeight}px`},500)},[e]);let b=(0,i.c)(g.showMoreIcon,{[g.showMore]:!l,[g.showLess]:l}),y=(0,i.c)(g.cardsSection,{[g.cardSectionDetails]:"details"===t,[g.cardSectionOfferings]:"details"!==t});return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:y,children:(()=>{let n="details"===t?h:e,o=(0,i.c)(g.cardsContainer,{[g.cardsContainerClassRegular]:"details"!==t,[g.cardsContainerClassDetails]:"details"===t});return(0,r.jsx)("div",{className:o,ref:c,children:n.map((e,n)=>(0,r.jsx)("div",{onClick:()=>f(n),children:(0,r.jsx)(m,{card:e,id:n,isTopSection:"details"===t&&n<4})},e.title))})})()}),e.length>4&&"details"===t&&(0,r.jsx)("div",{className:g.showCardsParentContainer,children:(0,r.jsx)("div",{className:g.showCardsContainer,onClick:()=>d(e=>!e),children:(0,r.jsxs)("div",{className:g.showMoreTextContainer,children:[(0,r.jsx)(a.Z,{component:"div",variant:"small",weight:"semi-bold",color:"#5a4bda",className:g.showMoreText,children:l?"Show Less":"Show More"}),(0,r.jsx)("div",{className:b,children:(0,r.jsx)(s,{})})]})})})]})};n(45570);let b={offeringContainer:"_offeringContainer_dvfqn_1",heading:"_heading_dvfqn_5",regularOffering:"_regularOffering_dvfqn_9",detailsOffering:"_detailsOffering_dvfqn_13"},y=({heading:e,cards:t,variant:n,clickCardHandler:o})=>{let s=(0,i.c)(b.offeringContainer,{[b.regularOffering]:"regular"===n,[b.detailsOffering]:"details"===n});return(0,r.jsxs)("div",{className:s,children:[e&&(0,r.jsx)(a.Z,{color:"#1B2124",component:"h2",variant:"heading2",weight:"bold",className:b.heading,children:e}),t&&(null==t?void 0:t.length)>0&&(0,r.jsx)(v,{cards:t,variant:n,clickCardHandler:e=>{o(e)}})]})}},94664:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(67251),i=n(36506),o=n(45113),a=n(50424),s=n(13328),l=n(54274);n(52509);var d=n(86622),c=n(44188),u=n(30206);let p=`
 
        .slick-slide .news-box {
         
          transform: scale(0.90); 
  transition: transform 0.3s ease-in-out;
        }
        .slick-current .news-box  {
         
          transform: scale(1);
  transition: transform 0.2s ease-in-out;
        }
      
        .custom-prev-arrow,
        .custom-next-arrow {
          display: none !important;
        }
        
          @media (max-width: 639px) {
.newsSectionSlider .slick-slide {
  margin: 0px!important; 
}
}
  
      

      @media (min-width: 768px) and (max-width: 860px) {
        
        .slick-current .news-box img {
          height: auto !important;
          transition: height 0.9s ease !important;
        }
        .custom-prev-arrow,
        .customNextArrow {
          display: none !important;
        }
          
      }

       @media (min-width: 861px) and (max-width: 1023px) {
       .newsSectionSlider .slick-arrow
        {
          display: none !important;
        }}
`;n(19929);let h={newsCard:"_newsCard_pvib8_1",cardImg:"_cardImg_pvib8_5",cardTitle:"_cardTitle_pvib8_9",cardButton:"_cardButton_pvib8_13",badgeBox:"_badgeBox_pvib8_24",cardBg:"_cardBg_pvib8_27"},f=({imageSrc:e,imageAlt:t,title:n,buttonLabel:o,titleSize:d,badge:c,url:u})=>(0,r.jsxs)("div",{className:h.newsCard,children:[(0,r.jsx)("div",{className:h.badgeBox,children:(0,r.jsx)(l.Z,{emphasis:"low",intent:"neutral",label:c,size:"large"})}),(0,r.jsx)("img",{src:e,alt:t,className:h.cardImg}),(0,r.jsx)("div",{className:h.cardBg}),(0,r.jsx)(s.Z,{variant:"heading3",weight:"semi-bold",color:"static-white",className:(0,i.c)(h.cardTitle,d),children:n}),u&&(0,r.jsx)("a",{href:u,target:"_blank",children:(0,r.jsx)(a.Z,{size:"small",variant:"lowFocus",className:h.cardButton,children:o})})]});n(18180);let m={secContainer:"_secContainer_e9sfs_1",bgColor:"_bgColor_e9sfs_6",textSection:"_textSection_e9sfs_10",newsIcon:"_newsIcon_e9sfs_14",heading1:"_heading1_e9sfs_18",heading2:"_heading2_e9sfs_22",subHeading:"_subHeading_e9sfs_26",viewNewsButton:"_viewNewsButton_e9sfs_30",sliderSection:"_sliderSection_e9sfs_34",desktopGrid:"_desktopGrid_e9sfs_38",largeNewsroomCard:"_largeNewsroomCard_e9sfs_42",smallNewsroomGrid:"_smallNewsroomGrid_e9sfs_46",mobileSlider:"_mobileSlider_e9sfs_50",badgeBox:"_badgeBox_e9sfs_54",sliderItem:"_sliderItem_e9sfs_58",sliderImage:"_sliderImage_e9sfs_62",sliderContent:"_sliderContent_e9sfs_66",readMoreButton:"_readMoreButton_e9sfs_74",rightCardTitle:"_rightCardTitle_e9sfs_78"},g=({heading:e,subheading:t,description:n,buttonLabel:h,buttonActionUrl:g,newsIconSrc:v,articles:b})=>{let y=b.map(e=>({src:e.src,alt:e.alt,title:e.title,url:e.url,badge:e.badge}));return(0,o.useEffect)(()=>{let e=document.createElement("style");return e.innerHTML=p,document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]),(0,r.jsx)(c.Z,{className:m.bgColor,children:(0,r.jsxs)("div",{className:m.secContainer,children:[(0,r.jsx)(d.Z,{delay:1,children:(0,r.jsxs)("div",{className:m.textSection,children:[(0,r.jsx)("img",{src:v,className:m.newsIcon,alt:"News Icon"}),(0,r.jsx)(s.Z,{component:"h2",variant:"heading1",weight:"semi-bold",color:"#1B2124",className:m.heading1,children:t}),(0,r.jsx)(s.Z,{variant:"display2",weight:"semi-bold",color:"#1B2124",className:m.heading2,children:e}),(0,r.jsx)(s.Z,{variant:"subHeading",weight:"medium",color:"#1B2124",className:m.subHeading,children:n}),g&&(0,r.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(a.Z,{size:"large",variant:"dark",className:m.viewNewsButton,children:h})})]})}),(0,r.jsxs)("div",{className:m.sliderSection,children:[(0,r.jsxs)("div",{className:m.desktopGrid,children:[(0,r.jsx)("div",{className:m.largeNewsroomCard,children:(0,r.jsx)(d.Z,{delay:2,children:(0,r.jsx)(f,{imageSrc:b[0].src,imageAlt:b[0].alt,title:b[0].title,buttonLabel:"Read More",url:b[0].url,badge:b[0].badge})})}),(0,r.jsx)("div",{className:m.smallNewsroomGrid,children:b.slice(1).map((e,t)=>(0,r.jsx)(d.Z,{delay:3,children:(0,r.jsx)(f,{imageSrc:e.src,imageAlt:e.alt,title:e.title,buttonLabel:"Read More",url:e.url,titleSize:m.rightCardTitle,badge:e.badge},t)}))})]}),(0,r.jsx)("div",{className:m.mobileSlider,children:(0,r.jsx)(u.Z,{customSettings:{responsive:[{breakpoint:1023,settings:{slidesToScroll:1,centerMode:!1,centerPadding:"200px",slidesToShow:1,speed:500,infinite:!0}},{breakpoint:860,settings:{slidesToScroll:1,centerMode:!0,centerPadding:"100px",slidesToShow:1,speed:500,infinite:!0}},{breakpoint:640,settings:{slidesToScroll:1,centerMode:!0,centerPadding:"60px",slidesToShow:1,speed:500,infinite:!0}}]},className:"newsSectionSlider",children:y.map((e,t)=>(0,r.jsxs)("div",{className:(0,i.c)("news-box",m.sliderItem),children:[(0,r.jsx)("div",{className:m.badgeBox,children:(0,r.jsx)(l.Z,{emphasis:"low",intent:"neutral",label:e.badge,size:"large"})}),(0,r.jsx)("img",{src:e.src,alt:e.alt,className:m.sliderImage}),(0,r.jsxs)("div",{className:m.sliderContent,children:[(0,r.jsx)(s.Z,{component:"h2",variant:"heading1",weight:"semi-bold",color:"static-white",className:m.sliderText,children:e.title}),e.url&&(0,r.jsx)("a",{href:e.url,target:"_blank",children:(0,r.jsx)(a.Z,{size:"large",variant:"primary",className:m.readMoreButton,children:"Read More"})})]})]},t))})})]})]})})}},84671:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67251),i=n(36506),o=n(50424);n(45113),n(52509),n(57320);let a={container:"_container_ptxyl_1",center:"_center_ptxyl_5",start:"_start_ptxyl_9",end:"_end_ptxyl_13"},s=({ctas:e,align:t="center",className:n,parentClassName:s})=>{let l=(0,i.c)(null==a?void 0:a.container,[a[t]]);return(0,r.jsx)("div",{className:l,children:e.map((e,t)=>(0,r.jsx)("a",{href:null==e?void 0:e.link,className:s,children:(0,r.jsx)(o.Z,{onClick:t=>{null==t||t.preventDefault(),null==e||e.clickHandler(t)},variant:null==e?void 0:e.variant,className:n,disabled:(null==e?void 0:e.isDisabled)??!1,children:null==e?void 0:e.text})},t))})}},25762:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67251),i=n(50424),o=n(13328);n(45113),n(52509),n(1004);let a=({ctaText:e,textAfter:t,textBefore:n,phoneNumber:a,bgImgUrlDweb:s,bgImgUrlMweb:l,clickHandler:d})=>{let c=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"_text_5rb8p_9",children:(0,r.jsxs)(o.Z,{children:[n,"\xa0",(0,r.jsx)(o.Z,{weight:"bold",children:a}),"\xa0",t]})}),(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{variant:"premium",size:"small",className:"_btnHover_5rb8p_17",onClick:d,preIcon:(0,r.jsx)("img",{src:"https://static.pw.live/images/LeftSideIcons_20241212060130.svg"}),children:e})})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"_baseWeb_5rb8p_1",style:{backgroundImage:s},children:(0,r.jsx)(c,{})}),(0,r.jsx)("div",{className:"_baseMweb_5rb8p_5",style:{backgroundImage:l},children:(0,r.jsx)(c,{})})]})}},30206:function(e,t,n){"use strict";n.d(t,{Z:function(){return tH}});var r,i,o,a,s,l,d,c,u,p=n(67251),h=n(36506),f=n(27832),m=n(45113);n(29392);var g={},v={},b={},y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0,y.default={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};var x=NaN,w=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,$=/^0o[0-7]+$/i,k=parseInt,S="object"==typeof f.c&&f.c&&f.c.Object===Object&&f.c,j="object"==typeof self&&self&&self.Object===Object&&self,E=S||j||Function("return this")(),O=Object.prototype.toString,P=Math.max,N=Math.min,M=function(){return E.Date.now()};function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==O.call(t))return x;if(T(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=T(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var r=C.test(e);return r||$.test(e)?k(e.slice(2),r?2:8):_.test(e)?x:+e}var D={exports:{}};!function(){var e={}.hasOwnProperty;function t(){for(var r="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(r=n(r,function(r){if("string"==typeof r||"number"==typeof r)return r;if("object"!=typeof r)return"";if(Array.isArray(r))return t.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var i="";for(var o in r)e.call(r,o)&&r[o]&&(i=n(i,o));return i}(o)))}return r}function n(e,t){return t?e?e+" "+t:e+t:e}D.exports?(t.default=t,D.exports=t):window.classNames=t}();var A=D.exports,I={},B={};Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0,tT=m&&m.__esModule?m:{default:m},B.default={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return tT.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return tT.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null,unslick:!1},Object.defineProperty(I,"__esModule",{value:!0}),I.checkSpecKeys=I.checkNavigable=I.changeSlide=I.canUseDOM=I.canGoNext=void 0,I.clamp=V,I.extractObject=void 0,I.filterSettings=function(e){return em.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})},I.validSettings=I.swipeStart=I.swipeMove=I.swipeEnd=I.slidesOnRight=I.slidesOnLeft=I.slideHandler=I.siblingDirection=I.safePreventDefault=I.lazyStartIndex=I.lazySlidesOnRight=I.lazySlidesOnLeft=I.lazyEndIndex=I.keyHandler=I.initializedState=I.getWidth=I.getTrackLeft=I.getTrackCSS=I.getTrackAnimateCSS=I.getTotalSlides=I.getSwipeDirection=I.getSlideCount=I.getRequiredLazySlides=I.getPreClones=I.getPostClones=I.getOnDemandLazySlides=I.getNavigableIndexes=I.getHeight=void 0;var R=z(m),F=z(B);function z(e){return e&&e.__esModule?e:{default:e}}function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=Z(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=Z(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Z(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function V(e,t,n){return Math.max(t,Math.min(e,n))}var U=I.safePreventDefault=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()},q=I.getOnDemandLazySlides=function(e){for(var t=[],n=Y(e),r=G(e),i=n;i<r;i++)0>e.lazyLoadedList.indexOf(i)&&t.push(i);return t};I.getRequiredLazySlides=function(e){for(var t=[],n=Y(e),r=G(e),i=n;i<r;i++)t.push(i);return t};var Y=I.lazyStartIndex=function(e){return e.currentSlide-X(e)},G=I.lazyEndIndex=function(e){return e.currentSlide+K(e)},X=I.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},K=I.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},J=I.getWidth=function(e){return e&&e.offsetWidth||0},Q=I.getHeight=function(e){return e&&e.offsetHeight||0},ee=I.getSwipeDirection=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,(n=Math.round(180*Math.atan2(e.startY-e.curY,t)/Math.PI))<0&&(n=360-Math.abs(n)),n<=45&&n>=0||n<=360&&n>=315?"left":n>=135&&n<=225?"right":!0===r?n>=35&&n<=135?"up":"down":"vertical"},et=I.canGoNext=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t};I.extractObject=function(e,t){var n={};return t.forEach(function(t){return n[t]=e[t]}),n},I.initializedState=function(e){var t,n=R.default.Children.count(e.children),r=e.listRef,i=Math.ceil(J(r)),o=Math.ceil(J(e.trackRef&&e.trackRef.node));if(e.vertical)t=i;else{var a=e.centerMode&&2*parseInt(e.centerPadding);"string"==typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(a*=i/100),t=Math.ceil((i-a)/e.slidesToShow)}var s=r&&Q(r.querySelector('[data-index="0"]')),l=s*e.slidesToShow,d=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(d=n-1-e.initialSlide);var c=e.lazyLoadedList||[],u=q(W(W({},e),{},{currentSlide:d,lazyLoadedList:c})),p={slideCount:n,slideWidth:t,listWidth:i,trackWidth:o,currentSlide:d,slideHeight:s,listHeight:l,lazyLoadedList:c=c.concat(u)};return null===e.autoplaying&&e.autoplay&&(p.autoplaying="playing"),p},I.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,i=e.infinite,o=e.index,a=e.slideCount,s=e.lazyLoad,l=e.currentSlide,d=e.centerMode,c=e.slidesToScroll,u=e.slidesToShow,p=e.useCSS,h=e.lazyLoadedList;if(t&&n)return{};var f,m,g,v=o,b={},y={},x=i?o:V(o,0,a-1);if(r){if(!i&&(o<0||o>=a))return{};o<0?v=o+a:o>=a&&(v=o-a),s&&0>h.indexOf(v)&&(h=h.concat(v)),b={animating:!0,currentSlide:v,lazyLoadedList:h,targetSlide:v},y={animating:!1,targetSlide:v}}else f=v,v<0?(f=v+a,i?a%c!=0&&(f=a-a%c):f=0):!et(e)&&v>l?v=f=l:d&&v>=a?(v=i?a:a-1,f=i?0:a-1):v>=a&&(f=v-a,i?a%c!=0&&(f=0):f=a-u),!i&&v+u>=a&&(f=a-u),m=el(W(W({},e),{},{slideIndex:v})),g=el(W(W({},e),{},{slideIndex:f})),i||(m===g&&(v=f),m=g),s&&(h=h.concat(q(W(W({},e),{},{currentSlide:v})))),p?(b={animating:!0,currentSlide:f,trackStyle:es(W(W({},e),{},{left:m})),lazyLoadedList:h,targetSlide:x},y={animating:!1,currentSlide:f,trackStyle:ea(W(W({},e),{},{left:g})),swipeLeft:null,targetSlide:x}):b={currentSlide:f,trackStyle:ea(W(W({},e),{},{left:g})),lazyLoadedList:h,targetSlide:x};return{state:b,nextState:y}},I.changeSlide=function(e,t){var n,r,i,o,a=e.slidesToScroll,s=e.slidesToShow,l=e.slideCount,d=e.currentSlide,c=e.targetSlide,u=e.lazyLoad,p=e.infinite;if(n=l%a!=0?0:(l-d)%a,"previous"===t.message)o=d-(i=0===n?a:s-n),u&&!p&&(o=-1==(r=d-i)?l-1:r),p||(o=c-a);else if("next"===t.message)o=d+(i=0===n?a:n),u&&!p&&(o=(d+a)%l+n),p||(o=c+a);else if("dots"===t.message)o=t.index*t.slidesToScroll;else if("children"===t.message){if(o=t.index,p){var h=ep(W(W({},e),{},{targetSlide:o}));o>t.currentSlide&&"left"===h?o-=l:o<t.currentSlide&&"right"===h&&(o+=l)}}else"index"===t.message&&(o=Number(t.index));return o},I.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""},I.swipeStart=function(e,t,n){return"IMG"===e.target.tagName&&U(e),t&&(n||-1===e.type.indexOf("mouse"))?{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}:""},I.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,i=t.vertical,o=t.swipeToSlide,a=t.verticalSwiping,s=t.rtl,l=t.currentSlide,d=t.edgeFriction,c=t.edgeDragged,u=t.onEdge,p=t.swiped,h=t.swiping,f=t.slideCount,m=t.slidesToScroll,g=t.infinite,v=t.touchObject,b=t.swipeEvent,y=t.listHeight,x=t.listWidth;if(!n){if(r)return U(e);i&&o&&a&&U(e);var w,_={},C=el(t);v.curX=e.touches?e.touches[0].pageX:e.clientX,v.curY=e.touches?e.touches[0].pageY:e.clientY,v.swipeLength=Math.round(Math.sqrt(Math.pow(v.curX-v.startX,2)));var $=Math.round(Math.sqrt(Math.pow(v.curY-v.startY,2)));if(!a&&!h&&$>10)return{scrolling:!0};a&&(v.swipeLength=$);var k=(s?-1:1)*(v.curX>v.startX?1:-1);a&&(k=v.curY>v.startY?1:-1);var S=ee(t.touchObject,a),j=v.swipeLength;return g||(0===l&&("right"===S||"down"===S)||l+1>=Math.ceil(f/m)&&("left"===S||"up"===S)||!et(t)&&("left"===S||"up"===S))&&(j=v.swipeLength*d,!1===c&&u&&(u(S),_.edgeDragged=!0)),!p&&b&&(b(S),_.swiped=!0),w=i?C+y/x*j*k:s?C-j*k:C+j*k,a&&(w=C+j*k),_=W(W({},_),{},{touchObject:v,swipeLeft:w,trackStyle:ea(W(W({},t),{},{left:w}))}),Math.abs(v.curX-v.startX)<.8*Math.abs(v.curY-v.startY)||v.swipeLength>10&&(_.swiping=!0,U(e)),_}},I.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,i=t.touchObject,o=t.listWidth,a=t.touchThreshold,s=t.verticalSwiping,l=t.listHeight,d=t.swipeToSlide,c=t.scrolling,u=t.onSwipe,p=t.targetSlide,h=t.currentSlide,f=t.infinite;if(!n)return r&&U(e),{};var m=s?l/a:o/a,g=ee(i,s),v={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!i.swipeLength)return v;if(i.swipeLength>m){U(e),u&&u(g);var b,y,x=f?h:p;switch(g){case"left":case"up":y=x+ei(t),b=d?er(t,y):y,v.currentDirection=0;break;case"right":case"down":y=x-ei(t),b=d?er(t,y):y,v.currentDirection=1;break;default:b=x}v.triggerSlideHandler=b}else{var w=el(t);v.trackStyle=es(W(W({},t),{},{left:w}))}return v};var en=I.getNavigableIndexes=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,r=e.infinite?-1*e.slidesToShow:0,i=[];n<t;)i.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return i},er=I.checkNavigable=function(e,t){var n=en(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var i in n){if(t<n[i]){t=r;break}r=n[i]}return t},ei=I.getSlideCount=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(!e.swipeToSlide)return e.slidesToScroll;var n,r=e.listRef;if(Array.from(r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[]).every(function(r){if(e.vertical){if(r.offsetTop+Q(r)/2>-1*e.swipeLeft)return n=r,!1}else if(r.offsetLeft-t+J(r)/2>-1*e.swipeLeft)return n=r,!1;return!0}),!n)return 0;var i=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-i)||1},eo=I.checkSpecKeys=function(e,t){return t.reduce(function(t,n){return t&&e.hasOwnProperty(n)},!0)?null:console.error("Keys Missing:",e)},ea=I.getTrackCSS=function(e){eo(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var t,n,r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=eu(e)*e.slideWidth;var i={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";i=W(W({},i),{},{WebkitTransform:o,transform:a,msTransform:s})}else e.vertical?i.top=e.left:i.left=e.left;return e.fade&&(i={opacity:1}),t&&(i.width=t),n&&(i.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?i.marginTop=e.left+"px":i.marginLeft=e.left+"px"),i},es=I.getTrackAnimateCSS=function(e){eo(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=ea(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},el=I.getTrackLeft=function(e){if(e.unslick)return 0;eo(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,r=e.slideIndex,i=e.trackRef,o=e.infinite,a=e.centerMode,s=e.slideCount,l=e.slidesToShow,d=e.slidesToScroll,c=e.slideWidth,u=e.listWidth,p=e.variableWidth,h=e.slideHeight,f=e.fade,m=e.vertical,g=0,v=0;if(f||1===e.slideCount)return 0;var b=0;if(o?(b=-ed(e),s%d!=0&&r+d>s&&(b=-(r>s?l-(r-s):s%d)),a&&(b+=parseInt(l/2))):(s%d!=0&&r+d>s&&(b=l-s%d),a&&(b=parseInt(l/2))),g=b*c,v=b*h,t=m?-(r*h*1)+v:-(r*c*1)+g,!0===p){var y,x=i&&i.node;if(y=r+ed(e),t=(n=x&&x.childNodes[y])?-1*n.offsetLeft:0,!0===a){y=o?r+ed(e):r,n=x&&x.children[y],t=0;for(var w=0;w<y;w++)t-=x&&x.children[w]&&x.children[w].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(u-n.offsetWidth)/2}}return t},ed=I.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},ec=I.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},eu=I.getTotalSlides=function(e){return 1===e.slideCount?1:ed(e)+e.slideCount+ec(e)},ep=I.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+eh(e)?"left":"right":e.targetSlide<e.currentSlide-ef(e)?"right":"left"},eh=I.slidesOnRight=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r&&t%2==0&&(o+=1),o}return r?0:t-1},ef=I.slidesOnLeft=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r||t%2!=0||(o+=1),o}return r?t-1:0};I.canUseDOM=function(){return!!("u">typeof window&&window.document&&window.document.createElement)};var em=I.validSettings=Object.keys(F.default),eg={};Object.defineProperty(eg,"__esModule",{value:!0}),eg.Track=void 0;var ev=ey(m),eb=ey(A);function ey(e){return e&&e.__esModule?e:{default:e}}function ex(e){return(ex="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ew(){return(ew=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function e_(e,t){return(e_=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function eC(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function e$(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(e$=function(){return!!e})()}function ek(e){return(ek=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function eS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ej(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eS(Object(n),!0).forEach(function(t){eE(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eS(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function eE(e,t,n){return(t=eO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eO(e){var t=function(e,t){if("object"!=ex(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=ex(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==ex(t)?t:String(t)}var eP=function(e){var t,n,r,i,o;return r=(o=e.rtl?e.slideCount-1-e.index:e.index)<0||o>=e.slideCount,e.centerMode?(i=Math.floor(e.slidesToShow/2),n=(o-e.currentSlide)%e.slideCount==0,o>e.currentSlide-i-1&&o<=e.currentSlide+i&&(t=!0)):t=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":o===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},eN=function(e){var t={};return(void 0===e.variableWidth||!1===e.variableWidth)&&(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,t.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t},eM=function(e,t){return e.key||t},eT=function(e){var t,n=[],r=[],i=[],o=ev.default.Children.count(e.children),a=(0,I.lazyStartIndex)(e),s=(0,I.lazyEndIndex)(e);return ev.default.Children.forEach(e.children,function(l,d){var c,u={message:"children",index:d,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};c=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(d)>=0?l:ev.default.createElement("div",null);var p=eN(ej(ej({},e),{},{index:d})),h=c.props.className||"",f=eP(ej(ej({},e),{},{index:d}));if(n.push(ev.default.cloneElement(c,{key:"original"+eM(c,d),"data-index":d,className:(0,eb.default)(f,h),tabIndex:"-1","aria-hidden":!f["slick-active"],style:ej(ej({outline:"none"},c.props.style||{}),p),onClick:function(t){c.props&&c.props.onClick&&c.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(u)}})),e.infinite&&!1===e.fade){var m=o-d;m<=(0,I.getPreClones)(e)&&((t=-m)>=a&&(c=l),f=eP(ej(ej({},e),{},{index:t})),r.push(ev.default.cloneElement(c,{key:"precloned"+eM(c,t),"data-index":t,tabIndex:"-1",className:(0,eb.default)(f,h),"aria-hidden":!f["slick-active"],style:ej(ej({},c.props.style||{}),p),onClick:function(t){c.props&&c.props.onClick&&c.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(u)}}))),(t=o+d)<s&&(c=l),f=eP(ej(ej({},e),{},{index:t})),i.push(ev.default.cloneElement(c,{key:"postcloned"+eM(c,t),"data-index":t,tabIndex:"-1",className:(0,eb.default)(f,h),"aria-hidden":!f["slick-active"],style:ej(ej({},c.props.style||{}),p),onClick:function(t){c.props&&c.props.onClick&&c.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(u)}}))}}),e.rtl?r.concat(n,i).reverse():r.concat(n,i)};eg.Track=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&e_(e,t)}(i,e);var t,n,r=(t=e$(),function(){var e,n=ek(i);return e=t?Reflect.construct(n,arguments,ek(this).constructor):n.apply(this,arguments),function(e,t){if(t&&("object"===ex(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return eC(e)}(this,e)});function i(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return eE(eC(e=r.call.apply(r,[this].concat(n))),"node",null),eE(eC(e),"handleRef",function(t){e.node=t}),e}return n=[{key:"render",value:function(){var e=eT(this.props),t=this.props,n=t.onMouseEnter,r=t.onMouseOver,i=t.onMouseLeave;return ev.default.createElement("div",ew({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},{onMouseEnter:n,onMouseOver:r,onMouseLeave:i}),e)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eO(r.key),r)}}(i.prototype,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(ev.default.PureComponent);var eL={};function eD(e){return(eD="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(eL,"__esModule",{value:!0}),eL.Dots=void 0;var eA=eB(m),eI=eB(A);function eB(e){return e&&e.__esModule?e:{default:e}}function eR(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function eF(e){var t=function(e,t){if("object"!=eD(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=eD(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==eD(t)?t:String(t)}function ez(e,t){return(ez=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function eZ(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(eZ=function(){return!!e})()}function eH(e){return(eH=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}eL.Dots=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ez(e,t)}(i,e);var t,n,r=(t=eZ(),function(){var e,n=eH(i);return e=t?Reflect.construct(n,arguments,eH(this).constructor):n.apply(this,arguments),function(e,t){if(t&&("object"===eD(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(){return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),r.apply(this,arguments)}return n=[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,r=t.onMouseOver,i=t.onMouseLeave,o=t.infinite,a=t.slidesToScroll,s=t.slidesToShow,l=t.slideCount,d=t.currentSlide,c=(e={slideCount:l,slidesToScroll:a,slidesToShow:s,infinite:o}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,u=[],p=0;p<c;p++){var h=(p+1)*a-1,f=o?h:(0,I.clamp)(h,0,l-1),m=f-(a-1),g=o?m:(0,I.clamp)(m,0,l-1),v=(0,eI.default)({"slick-active":o?d>=g&&d<=f:d===g}),b={message:"dots",index:p,slidesToScroll:a,currentSlide:d},y=this.clickHandler.bind(this,b);u=u.concat(eA.default.createElement("li",{key:p,className:v},eA.default.cloneElement(this.props.customPaging(p),{onClick:y})))}return eA.default.cloneElement(this.props.appendDots(u),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eR(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=eF(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eR(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({className:this.props.dotsClass},{onMouseEnter:n,onMouseOver:r,onMouseLeave:i}))}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eF(r.key),r)}}(i.prototype,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(eA.default.PureComponent);var eW={};function eV(e){return(eV="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(eW,"__esModule",{value:!0}),eW.PrevArrow=eW.NextArrow=void 0;var eU=eY(m),eq=eY(A);function eY(e){return e&&e.__esModule?e:{default:e}}function eG(){return(eG=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function eX(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function eK(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eX(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=e1(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eX(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function eJ(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function eQ(e,t,n){return t&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,e1(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function e1(e){var t=function(e,t){if("object"!=eV(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=eV(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==eV(t)?t:String(t)}function e0(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&e2(e,t)}function e2(e,t){return(e2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function e3(e){var t=e5();return function(){var n,r=e4(e);return n=t?Reflect.construct(r,arguments,e4(this).constructor):r.apply(this,arguments),function(e,t){if(t&&("object"===eV(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function e5(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(e5=function(){return!!e})()}function e4(e){return(e4=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}eW.PrevArrow=function(e){e0(n,e);var t=e3(n);function n(){return eJ(this,n),t.apply(this,arguments)}return eQ(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,eq.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?eU.default.cloneElement(this.props.prevArrow,eK(eK({},n),r)):eU.default.createElement("button",eG({key:"0",type:"button"},n)," ","Previous")}}]),n}(eU.default.PureComponent),eW.NextArrow=function(e){e0(n,e);var t=e3(n);function n(){return eJ(this,n),t.apply(this,arguments)}return eQ(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,I.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,eq.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?eU.default.cloneElement(this.props.nextArrow,eK(eK({},n),r)):eU.default.createElement("button",eG({key:"1",type:"button"},n)," ","Next")}}]),n}(eU.default.PureComponent);var e7=function(){if("u">typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),e6="u">typeof window&&"u">typeof document&&window.document===document,e8="u">typeof global&&global.Math===Math?global:"u">typeof self&&self.Math===Math?self:"u">typeof window&&window.Math===Math?window:Function("return this")(),e9="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(e8):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},te=["top","right","bottom","left","width","height","size","weight"],tt="u">typeof MutationObserver,tn=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function a(){e9(o)}function s(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,20);i=e}return s}(this.refresh.bind(this),0)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){!e6||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),tt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){e6&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;te.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),tr=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},ti=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||e8},to=td(0,0,0,0);function ta(e){return parseFloat(e)||0}function ts(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){return t+ta(e["border-"+n+"-width"])},0)}var tl="u">typeof SVGGraphicsElement?function(e){return e instanceof ti(e).SVGGraphicsElement}:function(e){return e instanceof ti(e).SVGElement&&"function"==typeof e.getBBox};function td(e,t,n,r){return{x:e,y:t,width:n,height:r}}var tc=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=td(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e,t,n=(e=this.target,e6?tl(e)?td(0,0,(t=e.getBBox()).width,t.height):function(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return to;var r=ti(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=ta(o)}return t}(r),o=i.left+i.right,a=i.top+i.bottom,s=ta(r.width),l=ta(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==t&&(s-=ts(r,"left","right")+o),Math.round(l+a)!==n&&(l-=ts(r,"top","bottom")+a)),e!==ti(e).document.documentElement){var d=Math.round(s+o)-t,c=Math.round(l+a)-n;1!==Math.abs(d)&&(s-=d),1!==Math.abs(c)&&(l-=c)}return td(i.left,i.top,s,l)}(e):to);return this.contentRect_=n,n.width!==this.broadcastWidth||n.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),tu=function(e,t){var n,r,i,o,a,s=(n=t.x,r=t.y,i=t.width,o=t.height,tr(a=Object.create(("u">typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:n,y:r,width:i,height:o,top:r,right:n+i,bottom:o+r,left:n}),a);tr(this,{target:e,contentRect:s})},tp=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new e7,"function"!=typeof e)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof ti(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new tc(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof ti(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new tu(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),th="u">typeof WeakMap?new WeakMap:new e7,tf=function e(t){if(!(this instanceof e))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var n=new tp(t,tn.getInstance(),this);th.set(this,n)};["observe","unobserve","disconnect"].forEach(function(e){tf.prototype[e]=function(){var t;return(t=th.get(this))[e].apply(t,arguments)}});let tm=Object.freeze(Object.defineProperty({__proto__:null,default:"u">typeof e8.ResizeObserver?e8.ResizeObserver:tf},Symbol.toStringTag,{value:"Module"})),tg=(0,f.a)(tm);Object.defineProperty(b,"__esModule",{value:!0}),b.InnerSlider=void 0;var tv=t_(m),tb=t_(y),ty=t_(function(e,t,n){var r,i,o,a,s,l,d=0,c=!1,u=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function h(t){var n=r,o=i;return r=i=void 0,d=t,a=e.apply(o,n)}function f(e){var n=e-l,r=e-d;return void 0===l||n>=t||n<0||u&&r>=o}function m(){var e,n,r,i=M();if(f(i))return g(i);s=setTimeout(m,(e=i-l,n=i-d,r=t-e,u?N(r,o-n):r))}function g(e){return s=void 0,p&&r?h(e):(r=i=void 0,a)}function v(){var e,n=M(),o=f(n);if(r=arguments,i=this,l=n,o){if(void 0===s)return d=e=l,s=setTimeout(m,t),c?h(e):a;if(u)return s=setTimeout(m,t),h(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=L(t)||0,T(n)&&(c=!!n.leading,o=(u="maxWait"in n)?P(L(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),v.cancel=function(){void 0!==s&&clearTimeout(s),d=0,r=l=i=s=void 0},v.flush=function(){return void 0===s?a:g(M())},v}),tx=t_(A),tw=t_(tg);function t_(e){return e&&e.__esModule?e:{default:e}}function tC(e){return(tC="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t$(){return(t$=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function tk(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function tS(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tk(Object(n),!0).forEach(function(t){tN(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tk(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function tj(e,t){return(tj=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function tE(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tO=function(){return!!e})()}function tP(e){return(tP=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function tN(e,t,n){return(t=tM(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tM(e){var t=function(e,t){if("object"!=tC(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=tC(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==tC(t)?t:String(t)}b.InnerSlider=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&tj(e,t)}(i,e);var t,n,r=(t=tO(),function(){var e,n=tP(i);return e=t?Reflect.construct(n,arguments,tP(this).constructor):n.apply(this,arguments),function(e,t){if(t&&("object"===tC(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return tE(e)}(this,e)});function i(e){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),tN(tE(t=r.call(this,e)),"listRefHandler",function(e){return t.list=e}),tN(tE(t),"trackRefHandler",function(e){return t.track=e}),tN(tE(t),"adaptHeight",function(){if(t.props.adaptiveHeight&&t.list){var e=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,I.getHeight)(e)+"px"}}),tN(tE(t),"componentDidMount",function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var e=(0,I.getOnDemandLazySlides)(tS(tS({},t.props),t.state));e.length>0&&(t.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),t.props.onLazyLoad&&t.props.onLazyLoad(e))}var n=tS({listRef:t.list,trackRef:t.track},t.props);t.updateState(n,!0,function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")}),"progressive"===t.props.lazyLoad&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new tw.default(function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout(function(){return t.onWindowResized()},t.props.speed))):t.onWindowResized()}),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(e){e.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,e.onblur=t.props.pauseOnFocus?t.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)}),tN(tE(t),"componentWillUnmount",function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach(function(e){return clearTimeout(e)}),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()}),tN(tE(t),"componentDidUpdate",function(e){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var n=(0,I.getOnDemandLazySlides)(tS(tS({},t.props),t.state));n.length>0&&(t.setState(function(e){return{lazyLoadedList:e.lazyLoadedList.concat(n)}}),t.props.onLazyLoad&&t.props.onLazyLoad(n))}t.adaptHeight();var r=tS(tS({listRef:t.list,trackRef:t.track},t.props),t.state),i=t.didPropsChange(e);i&&t.updateState(r,i,function(){t.state.currentSlide>=tv.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:tv.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")})}),tN(tE(t),"onWindowResized",function(e){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,ty.default)(function(){return t.resizeWindow(e)},50),t.debouncedResize()}),tN(tE(t),"resizeWindow",function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];if(t.track&&t.track.node){var n=tS(tS({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(n,e,function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")}),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}}),tN(tE(t),"updateState",function(e,n,r){var i=(0,I.initializedState)(e);e=tS(tS(tS({},e),i),{},{slideIndex:i.currentSlide});var o=(0,I.getTrackLeft)(e);e=tS(tS({},e),{},{left:o});var a=(0,I.getTrackCSS)(e);(n||tv.default.Children.count(t.props.children)!==tv.default.Children.count(e.children))&&(i.trackStyle=a),t.setState(i,r)}),tN(tE(t),"ssrInit",function(){if(t.props.variableWidth){var e=0,n=0,r=[],i=(0,I.getPreClones)(tS(tS(tS({},t.props),t.state),{},{slideCount:t.props.children.length})),o=(0,I.getPostClones)(tS(tS(tS({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach(function(t){r.push(t.props.style.width),e+=t.props.style.width});for(var a=0;a<i;a++)n+=r[r.length-1-a],e+=r[r.length-1-a];for(var s=0;s<o;s++)e+=r[s];for(var l=0;l<t.state.currentSlide;l++)n+=r[l];var d={width:e+"px",left:-n+"px"};if(t.props.centerMode){var c="".concat(r[t.state.currentSlide],"px");d.left="calc(".concat(d.left," + (100% - ").concat(c,") / 2 ) ")}return{trackStyle:d}}var u=tv.default.Children.count(t.props.children),p=tS(tS(tS({},t.props),t.state),{},{slideCount:u}),h=(0,I.getPreClones)(p)+(0,I.getPostClones)(p)+u,f=100/t.props.slidesToShow*h,m=100/h,g=-m*((0,I.getPreClones)(p)+t.state.currentSlide)*f/100;return t.props.centerMode&&(g+=(100-m*f/100)/2),{slideWidth:m+"%",trackStyle:{width:f+"%",left:g+"%"}}}),tN(tE(t),"checkImagesLoad",function(){var e=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],n=e.length,r=0;Array.prototype.forEach.call(e,function(e){var i=function(){return++r&&r>=n&&t.onWindowResized()};if(e.onclick){var o=e.onclick;e.onclick=function(t){o(t),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(t.props.lazyLoad?e.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(e.onload=i,e.onerror=function(){i(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))})}),tN(tE(t),"progressiveLazyLoad",function(){for(var e=[],n=tS(tS({},t.props),t.state),r=t.state.currentSlide;r<t.state.slideCount+(0,I.getPostClones)(n);r++)if(0>t.state.lazyLoadedList.indexOf(r)){e.push(r);break}for(var i=t.state.currentSlide-1;i>=-(0,I.getPreClones)(n);i--)if(0>t.state.lazyLoadedList.indexOf(i)){e.push(i);break}e.length>0?(t.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),t.props.onLazyLoad&&t.props.onLazyLoad(e)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)}),tN(tE(t),"slideHandler",function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.props,i=r.asNavFor,o=r.beforeChange,a=r.onLazyLoad,s=r.speed,l=r.afterChange,d=t.state.currentSlide,c=(0,I.slideHandler)(tS(tS(tS({index:e},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!n})),u=c.state,p=c.nextState;if(u){o&&o(d,u.currentSlide);var h=u.lazyLoadedList.filter(function(e){return 0>t.state.lazyLoadedList.indexOf(e)});a&&h.length>0&&a(h),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),l&&l(d),delete t.animationEndCallback),t.setState(u,function(){i&&t.asNavForIndex!==e&&(t.asNavForIndex=e,i.innerSlider.slideHandler(e)),p&&(t.animationEndCallback=setTimeout(function(){var e=p.animating,n=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(p,["animating"]);t.setState(n,function(){t.callbackTimers.push(setTimeout(function(){return t.setState({animating:e})},10)),l&&l(u.currentSlide),delete t.animationEndCallback})},s))})}}),tN(tE(t),"changeSlide",function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=tS(tS({},t.props),t.state),i=(0,I.changeSlide)(r,e);if(!(0!==i&&!i)&&(!0===n?t.slideHandler(i,n):t.slideHandler(i),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var o=t.list.querySelectorAll(".slick-current");o[0]&&o[0].focus()}}),tN(tE(t),"clickHandler",function(e){!1===t.clickable&&(e.stopPropagation(),e.preventDefault()),t.clickable=!0}),tN(tE(t),"keyHandler",function(e){var n=(0,I.keyHandler)(e,t.props.accessibility,t.props.rtl);""!==n&&t.changeSlide({message:n})}),tN(tE(t),"selectHandler",function(e){t.changeSlide(e)}),tN(tE(t),"disableBodyScroll",function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}}),tN(tE(t),"enableBodyScroll",function(){window.ontouchmove=null}),tN(tE(t),"swipeStart",function(e){t.props.verticalSwiping&&t.disableBodyScroll();var n=(0,I.swipeStart)(e,t.props.swipe,t.props.draggable);""!==n&&t.setState(n)}),tN(tE(t),"swipeMove",function(e){var n=(0,I.swipeMove)(e,tS(tS(tS({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));n&&(n.swiping&&(t.clickable=!1),t.setState(n))}),tN(tE(t),"swipeEnd",function(e){var n=(0,I.swipeEnd)(e,tS(tS(tS({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(n){var r=n.triggerSlideHandler;delete n.triggerSlideHandler,t.setState(n),void 0!==r&&(t.slideHandler(r),t.props.verticalSwiping&&t.enableBodyScroll())}}),tN(tE(t),"touchEnd",function(e){t.swipeEnd(e),t.clickable=!0}),tN(tE(t),"slickPrev",function(){t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"previous"})},0))}),tN(tE(t),"slickNext",function(){t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"next"})},0))}),tN(tE(t),"slickGoTo",function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(isNaN(e=Number(e)))return"";t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"index",index:e,currentSlide:t.state.currentSlide},n)},0))}),tN(tE(t),"play",function(){var e;if(t.props.rtl)e=t.state.currentSlide-t.props.slidesToScroll;else{if(!(0,I.canGoNext)(tS(tS({},t.props),t.state)))return!1;e=t.state.currentSlide+t.props.slidesToScroll}t.slideHandler(e)}),tN(tE(t),"autoPlay",function(e){t.autoplayTimer&&clearInterval(t.autoplayTimer);var n=t.state.autoplaying;if("update"===e){if("hovered"===n||"focused"===n||"paused"===n)return}else if("leave"===e){if("paused"===n||"focused"===n)return}else if("blur"===e&&("paused"===n||"hovered"===n))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})}),tN(tE(t),"pause",function(e){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var n=t.state.autoplaying;"paused"===e?t.setState({autoplaying:"paused"}):"focused"===e?("hovered"===n||"playing"===n)&&t.setState({autoplaying:"focused"}):"playing"===n&&t.setState({autoplaying:"hovered"})}),tN(tE(t),"onDotsOver",function(){return t.props.autoplay&&t.pause("hovered")}),tN(tE(t),"onDotsLeave",function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")}),tN(tE(t),"onTrackOver",function(){return t.props.autoplay&&t.pause("hovered")}),tN(tE(t),"onTrackLeave",function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")}),tN(tE(t),"onSlideFocus",function(){return t.props.autoplay&&t.pause("focused")}),tN(tE(t),"onSlideBlur",function(){return t.props.autoplay&&"focused"===t.state.autoplaying&&t.autoPlay("blur")}),tN(tE(t),"render",function(){var e=(0,tx.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),n=tS(tS({},t.props),t.state),r=(0,I.extractObject)(n,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),i=t.props.pauseOnHover;if(r=tS(tS({},r),{},{onMouseEnter:i?t.onTrackOver:null,onMouseLeave:i?t.onTrackLeave:null,onMouseOver:i?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null}),!0===t.props.dots&&t.state.slideCount>=t.props.slidesToShow){var o=(0,I.extractObject)(n,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),a=t.props.pauseOnDotsHover;o=tS(tS({},o),{},{clickHandler:t.changeSlide,onMouseEnter:a?t.onDotsLeave:null,onMouseOver:a?t.onDotsOver:null,onMouseLeave:a?t.onDotsLeave:null}),s=tv.default.createElement(eL.Dots,o)}var s,l,d,c=(0,I.extractObject)(n,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);c.clickHandler=t.changeSlide,t.props.arrows&&(l=tv.default.createElement(eW.PrevArrow,c),d=tv.default.createElement(eW.NextArrow,c));var u=null;t.props.vertical&&(u={height:t.state.listHeight});var p=null;!1===t.props.vertical?!0===t.props.centerMode&&(p={padding:"0px "+t.props.centerPadding}):!0===t.props.centerMode&&(p={padding:t.props.centerPadding+" 0px"});var h=tS(tS({},u),p),f=t.props.touchMove,m={className:"slick-list",style:h,onClick:t.clickHandler,onMouseDown:f?t.swipeStart:null,onMouseMove:t.state.dragging&&f?t.swipeMove:null,onMouseUp:f?t.swipeEnd:null,onMouseLeave:t.state.dragging&&f?t.swipeEnd:null,onTouchStart:f?t.swipeStart:null,onTouchMove:t.state.dragging&&f?t.swipeMove:null,onTouchEnd:f?t.touchEnd:null,onTouchCancel:t.state.dragging&&f?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},g={className:e,dir:"ltr",style:t.props.style};return t.props.unslick&&(m={className:"slick-list"},g={className:e}),tv.default.createElement("div",g,t.props.unslick?"":l,tv.default.createElement("div",t$({ref:t.listRefHandler},m),tv.default.createElement(eg.Track,t$({ref:t.trackRefHandler},r),t.props.children)),t.props.unslick?"":d,t.props.unslick?"":s)}),t.list=null,t.track=null,t.state=tS(tS({},tb.default),{},{currentSlide:t.props.initialSlide,targetSlide:t.props.initialSlide?t.props.initialSlide:0,slideCount:tv.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var t,n=t.ssrInit();return t.state=tS(tS({},t.state),n),t}return n=[{key:"didPropsChange",value:function(e){for(var t=!1,n=0,r=Object.keys(this.props);n<r.length;n++){var i=r[n];if(!e.hasOwnProperty(i)||!("object"===tC(e[i])||"function"==typeof e[i]||isNaN(e[i]))&&e[i]!==this.props[i]){t=!0;break}}return t||tv.default.Children.count(this.props.children)!==tv.default.Children.count(e.children)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,tM(r.key),r)}}(i.prototype,n),Object.defineProperty(i,"prototype",{writable:!1}),i}(tv.default.Component);var tT,tL,tD,tA=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o,a=e[r];o=r=r.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase(),/[height|width]$/.test(o)&&"number"==typeof a&&(a+="px"),!0===a?t+=r:!1===a?t+="not "+r:t+="("+r+": "+a+")",i<n.length-1&&(t+=" and ")}),t},tI=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,r){t+=tA(n),r<e.length-1&&(t+=", ")}),t):tA(e)};function tB(){return o?i:(o=1,i={isFunction:function(e){return"function"==typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}})}!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(m),n=i(tI),r=i(B);function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){w(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e,t){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(y=function(){return!!e})()}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return(t=_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=o(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}var C=(0,I.canUseDOM)()&&(u?c:(u=1,c=new(function(){if(d)return l;d=1;var e=function(){if(s)return a;s=1;var e=function(){if(tD)return tL;function e(e){this.options=e,e.deferSetup||this.setup()}return tD=1,e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){this.initialised||this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},tL=e}(),t=tB().each;function n(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(t){var n=new e(t);this.handlers.push(n),this.matches()&&n.on()},removeHandler:function(e){var n=this.handlers;t(n,function(t,r){if(t.equals(e))return t.destroy(),!n.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";t(this.handlers,function(t){t[e]()})}},a=n}(),t=tB(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(t,o,a){var s=this.queries,l=a&&this.browserIsIncapable;return s[t]||(s[t]=new e(t,l)),r(o)&&(o={match:o}),i(o)||(o=[o]),n(o,function(e){r(e)&&(e={match:e}),s[t].addHandler(e)}),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},l=o}())));e.default=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(l,e);var i,a,s=(i=y(),function(){var e,t=x(l);return e=i?Reflect.construct(t,arguments,x(this).constructor):t.apply(this,arguments),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return v(e)}(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,l),w(v(t=s.call(this,e)),"innerSliderRefHandler",function(e){return t.innerSlider=e}),w(v(t),"slickPrev",function(){return t.innerSlider.slickPrev()}),w(v(t),"slickNext",function(){return t.innerSlider.slickNext()}),w(v(t),"slickGoTo",function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.innerSlider.slickGoTo(e,n)}),w(v(t),"slickPause",function(){return t.innerSlider.pause("paused")}),w(v(t),"slickPlay",function(){return t.innerSlider.autoPlay("play")}),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return a=[{key:"media",value:function(e,t){C.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map(function(e){return e.breakpoint});t.sort(function(e,t){return e-t}),t.forEach(function(r,i){var o;o=0===i?(0,n.default)({minWidth:0,maxWidth:r}):(0,n.default)({minWidth:t[i-1]+1,maxWidth:r}),(0,I.canUseDOM)()&&e.media(o,function(){e.setState({breakpoint:r})})});var r=(0,n.default)({minWidth:t.slice(-1)[0]});(0,I.canUseDOM)()&&this.media(r,function(){e.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(e){C.unregister(e.query,e.handler)})}},{key:"render",value:function(){var e,n,i=this;(e=this.state.breakpoint?"unslick"===(n=this.props.responsive.filter(function(e){return e.breakpoint===i.state.breakpoint}))[0].settings?"unslick":f(f(f({},r.default),this.props),n[0].settings):f(f({},r.default),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var o=t.default.Children.toArray(this.props.children);o=o.filter(function(e){return"string"==typeof e?!!e.trim():!!e}),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var a=[],s=null,l=0;l<o.length;l+=e.rows*e.slidesPerRow){for(var d=[],c=l;c<l+e.rows*e.slidesPerRow;c+=e.slidesPerRow){for(var u=[],h=c;h<c+e.slidesPerRow&&(e.variableWidth&&o[h].props.style&&(s=o[h].props.style.width),!(h>=o.length));h+=1)u.push(t.default.cloneElement(o[h],{key:100*l+10*c+h,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));d.push(t.default.createElement("div",{key:10*l+c},u))}e.variableWidth?a.push(t.default.createElement("div",{key:l,style:{width:s}},d)):a.push(t.default.createElement("div",{key:l},d))}if("unslick"===e){var m="regular slider "+(this.props.className||"");return t.default.createElement("div",{className:m},o)}return a.length<=e.slidesToShow&&!e.infinite&&(e.unslick=!0),t.default.createElement(b.InnerSlider,p({style:this.props.style,ref:this.innerSliderRefHandler},(0,I.filterSettings)(e)),a)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}(l.prototype,a),Object.defineProperty(l,"prototype",{writable:!1}),l}(t.default.Component)}(v),Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0,r=v&&v.__esModule?v:{default:v},g.default=r.default;let tR=(0,f.g)(g);n(37506);let tF={customNextArrow:"_customNextArrow_v2tzk_1",customPrevArrow:"_customPrevArrow_v2tzk_15",prevArrowTransparant:"_prevArrowTransparant_v2tzk_27",nextArrowTransparant:"_nextArrowTransparant_v2tzk_72"},tz=({className:e,onClick:t,iconBackground:n})=>(0,p.jsx)("div",{className:(0,h.c)(e,n?tF.customNextArrow:tF.nextArrowTransparant),onClick:t}),tZ=({className:e,onClick:t,iconBackground:n})=>(0,p.jsx)("div",{className:(0,h.c)(e,n?tF.customPrevArrow:tF.prevArrowTransparant),onClick:t}),tH=({children:e,customSettings:t,className:n,iconBackground:r=!0})=>{let i={dots:!1,infinite:!1,centerMode:!1,centerPadding:"0px",speed:500,slidesToShow:3.2,slidesToScroll:2,nextArrow:(0,p.jsx)(tz,{iconBackground:r}),prevArrow:(0,p.jsx)(tZ,{iconBackground:r}),responsive:[{breakpoint:820,settings:{slidesToShow:3,slidesToScroll:1,centerPadding:"0px"}},{breakpoint:480,settings:{slidesToScroll:1,className:"center",centerMode:!0,centerPadding:"20px",slidesToShow:1.3,speed:500,infinite:!1}}],...t};return(0,p.jsx)(tR,{...i,className:n,iconBackground:r,children:e})}},13829:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67251);n(45113);var i=n(13328);function o(e){return(0,r.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44771 7 9 6.55228 9 6C9 5.44772 9.44771 5 10 5C10.5523 5 11 5.44772 11 6ZM9 9C8.58579 9 8.25 9.33579 8.25 9.75C8.25 10.1642 8.58579 10.5 9 10.5H9.25338C9.41332 10.5 9.53213 10.6481 9.49743 10.8042L9.03829 12.8704C8.79542 13.9633 9.62706 15 10.7466 15H11C11.4142 15 11.75 14.6642 11.75 14.25C11.75 13.8358 11.4142 13.5 11 13.5H10.7466C10.5867 13.5 10.4679 13.3519 10.5026 13.1958L10.9617 11.1296C11.2046 10.0367 10.3729 9 9.25338 9H9Z"})})}n(52509),n(45449);let a={container:"_container_1rfza_1",infoContainer:"_infoContainer_1rfza_5",infoIcon:"_infoIcon_1rfza_9",valueContainer:"_valueContainer_1rfza_13",subContainer:"_subContainer_1rfza_17"},s=({title:e,value:t,index:n,subTitle:s,isPrice:l,infoClickHandler:d,subValue:c,info:u})=>(0,r.jsxs)("div",{className:null==a?void 0:a.container,children:[(0,r.jsx)(i.Z,{variant:"small",color:"#1D3378",children:e}),(0,r.jsxs)("div",{className:null==a?void 0:a.subContainer,children:[(0,r.jsxs)("div",{className:null==a?void 0:a.valueContainer,children:[t&&(0,r.jsx)(i.Z,{variant:"heading4",color:"#1B2124",weight:"bold",children:t}),c&&(0,r.jsx)(i.Z,{variant:"small",color:"#3D3D3D",decoration:l?"strikeThrough":"none",children:c})]}),s&&(0,r.jsx)(i.Z,{color:"#3D3D3D",variant:"small",children:s})]}),u&&(0,r.jsxs)("div",{className:null==a?void 0:a.infoContainer,onClick:()=>d&&d(n||0),children:[(0,r.jsx)(i.Z,{variant:"tiny",children:u}),(0,r.jsx)(o,{className:null==a?void 0:a.infoIcon,fill:!0})]})]});n(94744);let l={rootContainer:"_rootContainer_1rcqk_9",title:"_title_1rcqk_13",container:"_container_1rcqk_1",cardContainer:"_cardContainer_1rcqk_5"},d=({title:e,courseDetails:t,infoClickHandler:n})=>(0,r.jsxs)("div",{className:l.rootContainer,children:[(0,r.jsx)("div",{className:l.title,children:(0,r.jsx)(i.Z,{variant:"heading2",color:"#1B2124",weight:"semi-bold",children:e})}),(0,r.jsx)("div",{className:null==l?void 0:l.container,children:(0,r.jsx)("div",{className:null==l?void 0:l.cardContainer,children:t.map((e,t)=>(0,r.jsx)(s,{index:t,title:null==e?void 0:e.title,value:null==e?void 0:e.value,subTitle:null==e?void 0:e.subTitle,subValue:null==e?void 0:e.subValue,info:null==e?void 0:e.info,infoClickHandler:n,isPrice:null==e?void 0:e.isPrice},t))})})]})},17088:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67251),i=n(45113),o=n(13328);n(52509);let a="https://static.pw.live/images/Vector_20241208214714.png";n(78930);let s={rootContainer:"_rootContainer_558tr_4",featuresContainer:"_featuresContainer_558tr_8",image:"_image_558tr_12",inclusion:"_inclusion_558tr_16",more:"_more_558tr_19"},l=({title:e,features:t,ImgUrl:n=a})=>{var l;let[d,c]=(0,i.useState)(!1),[u,p]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=()=>{c(window.matchMedia("(max-width: 767px)").matches)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let h=d?5:99;return(0,r.jsxs)("div",{className:null==s?void 0:s.rootContainer,children:[(0,r.jsx)(o.Z,{variant:"heading2",color:"#1B2124",weight:"semi-bold",children:e}),(0,r.jsxs)("div",{className:s.featuresContainer,children:[null==(l=null==t?void 0:t.slice(0,u?99:h))?void 0:l.map((e,t)=>(0,r.jsxs)("div",{className:s.inclusion,children:[(0,r.jsx)("img",{src:n,alt:"Check Mark",width:d?16:20,className:s.image}),(0,r.jsx)(o.Z,{variant:"regular",weight:d?"medium":"semi-bold",color:"#3d3d3d",children:e})]},t)),(null==t?void 0:t.length)>h&&(0,r.jsx)(o.Z,{className:s.more,variant:"regular",onClick:()=>p(e=>!e),children:u?"see less":"see more"})]})]})}},10127:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67251);n(45113);var i=n(13328),o=n(72454);n(52509),n(67140);let a={base:"_base_1tesl_1",flat:"_flat_1tesl_5",border:"_border_1tesl_8",outlined:"_outlined_1tesl_11",image:"_image_1tesl_21",cardText:"_cardText_1tesl_24",center:"_center_1tesl_28"},s=({cardText:e,cardImg:t,cardType:n,title:s,titleColor:l="#1B2124"})=>{let d=(0,o.Z)(a.base,{[a[n]]:!0}),c=(0,o.Z)({[a.border]:"outlined"===n});return(0,r.jsx)("div",{className:c,children:(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)("img",{src:t,alt:"Feature",className:a.image}),s&&(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{variant:"heading4",color:l,weight:"bold",children:s})}),(0,r.jsx)("div",{className:null==a?void 0:a.center,children:(0,r.jsx)(i.Z,{variant:"flat"===n?"subHeading":"regular",color:"#3D3D3D",component:"div",className:a.cardText,children:e})})]})})};n(4350);let l={parentContainer:"_parentContainer_72ebf_1",base:"_base_72ebf_4",whiteBg:"_whiteBg_72ebf_8",outlined:"_outlined_72ebf_12",subTitleContainer:"_subTitleContainer_72ebf_16",horizontalRuleLeft:"_horizontalRuleLeft_72ebf_20",horizontalRuleRight:"_horizontalRuleRight_72ebf_24",cardsContainer:"_cardsContainer_72ebf_28",cardsContainerFlat:"_cardsContainerFlat_72ebf_32",animatedBorder:"_animatedBorder_72ebf_36"},d=({title:e,titleColor:t,subTitle:n,cards:a,type:d,titleBold:c,className:u,source:p="landing_page"})=>{let h=(0,o.Z)(l.base,{[l.whiteBg]:"outlined"===d}),f=(0,o.Z)("scrollbar-hide",{[l.cardsContainerFlat]:"demo_page"===p,[l.cardsContainer]:"landing_page"===p});return(0,r.jsx)("div",{className:l.parentContainer,children:(0,r.jsx)("div",{className:(0,o.Z)({[l.outlined]:"outlined"===d,[l.animatedBorder]:"outlined"===d}),children:(0,r.jsxs)("div",{className:h,children:[e&&(0,r.jsx)(i.Z,{variant:"landing_page"===p?"heading2":"heading1",weight:c?"bold":"semi-bold",color:t||"#3D3D3D",className:u,component:"landing_page"===p?"h2":"h1",children:e}),n&&(0,r.jsxs)("div",{className:l.subTitleContainer,children:[(0,r.jsx)("hr",{className:l.horizontalRuleLeft}),(0,r.jsx)(i.Z,{variant:"heading4",color:"#3D3D3D",children:n}),(0,r.jsx)("hr",{className:l.horizontalRuleRight})]}),(0,r.jsx)("div",{className:f,children:a.map(e=>(0,r.jsx)(s,{cardText:null==e?void 0:e.cardText,cardImg:null==e?void 0:e.cardImg,cardType:"outlined"===d?"flat":"outlined"}))})]})})})}},3734:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67251),i=n(50424),o=n(13328);n(45113),n(52509);let a=e=>{switch(e){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},s=e=>{switch(e){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Aug";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec"}};n(73404);let l={base:"_base_12tit_1",container:"_container_12tit_5",centerText:"_centerText_12tit_9",breakupContainer:"_breakupContainer_12tit_13",totalFee:"_totalFee_12tit_17",installmentContainer:"_installmentContainer_12tit_21",installmentContainer2:"_installmentContainer2_12tit_25",installmentContainer3:"_installmentContainer3_12tit_29",installmentNumber:"_installmentNumber_12tit_33",installmentPriceContainer:"_installmentPriceContainer_12tit_37",installmentPrice:"_installmentPrice_12tit_37",priceDateIcon:"_priceDateIcon_12tit_45",installmentDateContainer:"_installmentDateContainer_12tit_49",installmentDate:"_installmentDate_12tit_49",paymentText:"_paymentText_12tit_57",feeStructureBtn:"_feeStructureBtn_12tit_65"},d=({title:e,installments:t,bgColor:n,totalFees:d,perYearFees:c,counsellingNumber:u,clickCTA:p})=>{let h=e=>{if(e){let t=new Date(e),n=t.getDate(),r=s(t.getMonth()),i=String(t.getFullYear()).substring(2);return`${n}-${r}-${i}`}};return(0,r.jsxs)("div",{className:l.base,style:{backgroundColor:n},children:[(0,r.jsxs)("div",{className:l.container,children:[(0,r.jsx)("div",{className:l.centerText,children:(0,r.jsx)(o.Z,{variant:"heading2",color:"#1B2124",weight:"semi-bold",children:e})}),(0,r.jsxs)("div",{className:l.breakupContainer,children:[(0,r.jsxs)("div",{className:l.totalFee,children:[(0,r.jsxs)(o.Z,{color:"#143CB6",weight:"bold",variant:"regular",children:["Total ₹ ",d]}),c&&(0,r.jsxs)(o.Z,{variant:"tiny",color:"#1B2124",children:["₹",c," fees per year"]})]}),(0,r.jsxs)("div",{className:l.installmentContainer,children:[(0,r.jsxs)("div",{className:l.installmentContainer2,children:[(0,r.jsxs)(o.Z,{color:"#3D3D3D",weight:"semi-bold",variant:"regular",children:["Make Payment in"," ",(null==t?void 0:t.length)>1?(null==t?void 0:t.length)-1:0," simple installments"]}),(0,r.jsxs)("div",{className:l.installmentContainer3,children:[(0,r.jsx)("div",{className:l.installmentNumber,children:null==t?void 0:t.map((e,t)=>(0,r.jsx)(o.Z,{weight:"semi-bold",color:"#143CB6",children:0===t?"Registration Fee":(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)("sup",{children:a(t)})," Installment"]})},t))}),(0,r.jsx)("div",{className:l.installmentPriceContainer,children:t&&(null==t?void 0:t.length)>0&&(null==t?void 0:t.map((e,t)=>(0,r.jsxs)("div",{className:l.installmentPrice,children:[(0,r.jsx)("img",{src:"https://static.pw.live/images/Subtract_20241209041248.svg",alt:"Rupee Icon",className:l.priceDateIcon}),(0,r.jsx)(o.Z,{color:"#1B2124",children:null==e?void 0:e.price},t)]})))}),(0,r.jsx)("div",{className:l.installmentDateContainer,children:t&&(null==t?void 0:t.length)>0&&(null==t?void 0:t.map((e,t)=>(0,r.jsxs)("div",{className:l.installmentDate,children:[0!==t&&(0,r.jsx)("img",{src:"https://static.pw.live/images/calendar_20241209041431.svg",alt:"Calender Icon",className:l.priceDateIcon}),(0,r.jsx)(o.Z,{color:"#1B2124",children:0===t?"Instant Deduction":h((null==e?void 0:e.date)||"")},t)]})))})]})]}),(0,r.jsxs)("div",{className:l.paymentText,children:[(0,r.jsxs)(o.Z,{color:"#3D3D3D",variant:"label",children:["Secured payments via"," "]}),(0,r.jsx)(o.Z,{color:"#24D5D5",weight:"bold",variant:"label",children:"EZPay"})]})]})]})]}),(0,r.jsx)(i.Z,{variant:"secondary",onClick:p,className:l.feeStructureBtn,children:(0,r.jsx)(o.Z,{color:"#143CB6",children:"See Fee Structure"})})]})}},56141:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67251),i=n(45113),o=n(13328);n(52509);var a=n(30206),s=n(10934),l=n(45191);let d=`
.slick-dots li button:before {
    font-size: 15px !important;
}
    .slick-dots li {
    margin: 0 !important;
    }
@media (max-width: 820px) {
    .slick-dots {
    display: none !important;
}
}
`;n(47511);let c={mainWrapper:"_mainWrapper_1yuki_1",wrapper:"_wrapper_1yuki_5",carouselContainer:"_carouselContainer_1yuki_9",cardsContainer:"_cardsContainer_1yuki_13",arrowIcon:"_arrowIcon_1yuki_29",note:"_note_1yuki_33",viewMoreContainer:"_viewMoreContainer_1yuki_37"},u=({title:e,bgColor:t="#F8F8F899",teacherCards:n,note:u,cardButtonClickHandler:p,viewMoreCTA:h})=>((0,i.useEffect)(()=>{let e=document.createElement("style");return e.innerHTML=d,document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]),(0,r.jsx)("div",{className:c.mainWrapper,children:(0,r.jsxs)("div",{className:c.wrapper,children:[(0,r.jsx)(o.Z,{variant:"heading2",color:"#1B2124",weight:"semi-bold",children:e}),(0,r.jsxs)("div",{className:c.carouselContainer,children:[(0,r.jsxs)(a.Z,{iconBackground:!1,customSettings:{dots:!0,infinite:!1,centerMode:!1,centerPadding:"0px",speed:500,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1e3,settings:{slidesToScroll:1,className:"center",centerPadding:"20px",slidesToShow:2.1,speed:500,infinite:!1}},{breakpoint:820,settings:{slidesToShow:2.1,slidesToScroll:1,centerPadding:"20px",speed:500,infinite:!1}},{breakpoint:600,settings:{slidesToScroll:1,className:"center",centerMode:!0,centerPadding:"20px",slidesToShow:1.7,speed:500,infinite:!1}},{breakpoint:500,settings:{slidesToScroll:1,className:"center",centerMode:!0,centerPadding:"20px",slidesToShow:1.2,speed:500,infinite:!1}}]},children:[n.map((e,t)=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:c.cardsContainer,children:(0,r.jsx)(l.Z,{name:null==e?void 0:e.name,teacherImage:null==e?void 0:e.teacherImage,about:null==e?void 0:e.about,subject:null==e?void 0:e.subject,variant:"power",index:t,cardButtonClickHandler:p})})})),(null==n?void 0:n.length)>7&&(0,r.jsxs)("div",{className:c.viewMoreContainer,onClick:h,children:[(0,r.jsx)(o.Z,{weight:"semi-bold",color:"#3D3D3D",children:"View More"}),(0,r.jsx)("div",{className:c.arrowIcon,children:(0,r.jsx)("img",{src:s.I,alt:"Arrow Icon"})})]})]}),(0,r.jsxs)("div",{className:c.note,children:[(0,r.jsx)(o.Z,{variant:"small",color:"#3D3D3D",weight:"semi-bold",children:"Note:"}),(0,r.jsx)(o.Z,{variant:"small",color:"#3D3D3D",children:u})]})]})]})}))},94357:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67251);let i=({direction:e,color:t="#FB6514",className:n=""})=>"left"===e?(0,r.jsx)("svg",{width:"15",height:"27",viewBox:"0 0 15 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`-ml-[1px] h-full ${n}`,color:t,children:(0,r.jsx)("path",{d:"M15 0.03125H0V26.0312H1.0914C4.60344 26.0312 7.70479 23.7407 8.73763 20.3839L15 0.03125Z",fill:t})}):(0,r.jsx)("svg",{width:"15",height:"27",viewBox:"0 0 15 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`-mr-[1px] h-full ${n}`,color:t,children:(0,r.jsx)("path",{d:"M0 0.03125H15V26.0312H13.9086C10.3966 26.0312 7.29521 23.7407 6.26237 20.3839L0 0.03125Z",fill:t})})},10934:function(e,t,n){"use strict";n.d(t,{I:function(){return r}});let r="https://static.pw.live/images/arrow_20241210001706.svg"},91152:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67251);n(45113);var i=n(72454);n(52509),n(78546);let o={overlayContainer:"_overlayContainer_n11lz_1",overlay:"_overlay_n11lz_1",sidebarContainer:"_sidebarContainer_n11lz_9",open:"_open_n11lz_13",closed:"_closed_n11lz_17"},a=({isOpen:e,setIsOpen:t,children:n})=>(0,r.jsxs)("div",{className:o.overlayContainer,children:[e&&(0,r.jsx)("div",{onClick:()=>t(!e),className:o.overlay}),(0,r.jsx)("div",{className:(0,i.Z)(o.sidebarContainer,{[o.open]:e,[o.closed]:!e}),children:n})]})},5514:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67251),i=n(45113),o=n(13328),a=n(72454);n(52509),n(4253);let s={sliderBox:"_sliderBox_1glvk_1",dateDayChipsWrapper:"_dateDayChipsWrapper_1glvk_17",dateDayChips:"_dateDayChips_1glvk_17",activeChips:"_activeChips_1glvk_25",date:"_date_1glvk_17",day:"_day_1glvk_38",arrowRight:"_arrowRight_1glvk_41",arrowLeft:"_arrowLeft_1glvk_44"},l=({dateDetails:e,onClick:t,activeDateIndex:n})=>{let l=(0,i.useRef)(null),[d,c]=(0,i.useState)(!1),[u,p]=(0,i.useState)(0),[h,f]=(0,i.useState)(0),[m,g]=(0,i.useState)(!1),[v,b]=(0,i.useState)(!1),y=e=>{l.current&&l.current.scrollBy({left:"left"===e?-500:500,behavior:"smooth"})},x=()=>{if(l.current){let{scrollWidth:e,clientWidth:t,scrollLeft:n}=l.current;g(n>0),b(n+t<e)}};(0,i.useEffect)(()=>{x()},[e]);let w=()=>{c(!1)};return(0,r.jsx)("section",{className:s.sliderBox,children:e.length>0&&(0,r.jsxs)(r.Fragment,{children:[m&&(0,r.jsx)("img",{src:"https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/1872163c-6250-45e5-9c3d-4ee1d9d01fbd.svg",className:s.arrowLeft,onClick:()=>y("left")}),(0,r.jsx)("div",{ref:l,className:(0,a.Z)(s.dateDayChipsWrapper,{[s.dragging]:d}),onMouseDown:e=>{l.current&&(c(!0),p(e.pageX-l.current.offsetLeft),f(l.current.scrollLeft))},onMouseMove:e=>{if(!d||!l.current)return;e.preventDefault();let t=e.pageX-l.current.offsetLeft-u;l.current.scrollLeft=h-t},onMouseUp:w,onMouseLeave:w,onTouchStart:e=>{l.current&&(c(!0),p(e.touches[0].pageX-l.current.offsetLeft),f(l.current.scrollLeft))},onTouchMove:e=>{if(!d||!l.current)return;let t=e.touches[0].pageX-l.current.offsetLeft-u;l.current.scrollLeft=h-t},onTouchEnd:()=>{c(!1)},onScroll:()=>{x()},children:e.map((e,i)=>{let l=(0,a.Z)({[s.dateDayChips]:i!==n,[s.activeChips]:i===n});return(0,r.jsxs)("div",{className:l,onClick:()=>t(e.date),children:[(0,r.jsx)(o.Z,{color:"static-black",decoration:"none",variant:"regular",weight:"medium",component:"h4",className:s.date,children:e.date}),(0,r.jsx)(o.Z,{color:"static-grey-1",decoration:"none",variant:"small",weight:"medium",component:"h4",className:s.day,children:e.day})]},i)})}),v&&(0,r.jsx)("img",{src:"https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/ff21dc9c-9a0f-47de-bb6a-ebc01cb91281.svg",className:s.arrowRight,onClick:()=>y("right")})]})})}},93975:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67251);n(45113);var i=n(13328);n(52509);var o=n(72454),a=n(10934);n(66711);let s=({title:e,subTitle:t,bgImgUrl:n,clickCTA:s})=>(0,r.jsx)("div",{className:(0,o.Z)("_base_1h7q2_1"),onClick:s,style:{backgroundImage:`url(${n})`,backgroundSize:"cover",backgroundPosition:"right",backgroundOrigin:"border-box"},children:(0,r.jsxs)("div",{className:"_container_1h7q2_13",children:[(0,r.jsxs)("div",{className:"_subContainer_1h7q2_17",children:[(0,r.jsx)(i.Z,{variant:"heading4",weight:"semi-bold",color:"#3D3D3D",children:e}),t&&(0,r.jsx)(i.Z,{color:"#757575",children:t})]}),(0,r.jsx)("div",{className:"_arrow_1h7q2_21",children:(0,r.jsx)("img",{src:a.I,alt:"Right Arrow"})})]})});n(54552);let l=({title:e,cardsData:t})=>(0,r.jsxs)("div",{className:"_base_1047o_1",children:[(0,r.jsx)(i.Z,{variant:"heading2",color:"#1B2124",weight:"semi-bold",children:e}),(0,r.jsx)("div",{className:"_cardContainer_1047o_5",children:t.map((e,t)=>(0,r.jsx)("div",{className:"_card_1047o_5",children:(0,r.jsx)(s,{title:null==e?void 0:e.title,subTitle:null==e?void 0:e.subTitle,clickCTA:null==e?void 0:e.clickCTA,bgImgUrl:null==e?void 0:e.bgImgUrl},t)}))})]})},29409:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67251);n(45113);var i=n(13328);n(52509);let o="#FFF6ED",a="https://static.pw.live/images/fi-rr-book-alt_20241209230115.svg";n(24419);let s={container:"_container_1msys_1",subjectContainer:"_subjectContainer_1msys_5",iconContainer:"_iconContainer_1msys_9",dataContainer:"_dataContainer_1msys_13",data:"_data_1msys_13",dotContainer:"_dotContainer_1msys_21",dot:"_dot_1msys_21",twoLine:"_twoLine_1msys_29",pattern1:"_pattern1_1msys_33",pattern2:"_pattern2_1msys_37",patternImg1:"_patternImg1_1msys_41"},l=({name:e,subjectData:t,bgImgUrl:n,iconsImgUrl:l=a,bgColor:d=o})=>(0,r.jsxs)("div",{className:s.container,children:[(0,r.jsxs)("div",{className:s.subjectContainer,style:{backgroundImage:n,backgroundColor:d},children:[(0,r.jsx)("div",{className:s.pattern1,children:(0,r.jsx)("img",{src:"https://static.pw.live/images/1171275242_20241227084700.svg",alt:"Pattern1",width:20,className:s.patternImg1})}),(0,r.jsx)("div",{className:s.iconContainer,children:(0,r.jsx)("img",{src:l,alt:"Subject Icon"})}),(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{color:"#1B2124",weight:"semi-bold",className:s.twoLine,children:e})}),(0,r.jsx)("div",{className:s.pattern2,children:(0,r.jsx)("img",{src:"https://static.pw.live/images/1171275241_20241227084553.svg",alt:"Pattern2",width:20})})]}),(0,r.jsx)("div",{className:s.dataContainer,children:null!=t&&t.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:s.data,children:(0,r.jsx)(i.Z,{variant:"label",color:"#3D3D3D",children:(null==t?void 0:t[0].value)+(null==t?void 0:t[0].label)})}),(0,r.jsx)("div",{className:s.dotContainer,children:(0,r.jsx)("span",{className:s.dot})}),(0,r.jsx)("div",{className:s.data,children:(0,r.jsx)(i.Z,{variant:"label",color:"#3D3D3D",children:(null==t?void 0:t[1].value)+(null==t?void 0:t[1].label)})})]}):(0,r.jsx)(i.Z,{variant:"label",color:"#3D3D3D",children:"No data available"})})]})},63352:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67251);n(45113);var i=n(13328),o=n(72454);n(52509),n(30623);let a={cardBx:"_cardBx_1epfj_1",slotTimeBx:"_slotTimeBx_1epfj_11",divider:"_divider_1epfj_15",totalTime:"_totalTime_1epfj_19",totalTimeSelected:"_totalTimeSelected_1epfj_22",totalTimeDefault:"_totalTimeDefault_1epfj_25"},s=({subjectName:e,teacherName:t,slotStartTime:n,slotTotalTime:s,className:l,dividerClassName:d,onClick:c,slotTimeColor:u,isSelected:p})=>{let h=(0,o.Z)(a.totalTime,{[a.totalTimeSelected]:p,[a.totalTimeDefault]:!p});return(0,r.jsxs)("div",{className:(0,o.Z)(a.cardBx,l),onClick:c,children:[(0,r.jsxs)("div",{className:a.slotTimeBx,children:[(0,r.jsx)(i.Z,{color:u||"static-grey-1",decoration:"none",variant:"regular",weight:"semi-bold",component:"h4",children:n}),(0,r.jsx)(i.Z,{color:u||"static-grey-2",decoration:"none",variant:"tiny",weight:"medium",component:"h3",className:h,children:s})]}),(0,r.jsx)("div",{className:(0,o.Z)(a.divider,d)}),(0,r.jsxs)("div",{className:a.subTeacherBx,children:[(0,r.jsx)(i.Z,{color:"text-heading",decoration:"none",variant:"subHeading",weight:"semi-bold",component:"h2",children:e}),(0,r.jsx)(i.Z,{color:"text-body-1",decoration:"none",variant:"small",weight:"medium",component:"h3",children:t})]})]})}},26676:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67251),i=n(50424),o=n(13328),a=n(72454);n(45113),n(52509);let s=e=>(0,r.jsxs)("svg",{width:"154",height:"10",viewBox:"0 0 154 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("line",{x1:"0.112305",y1:"3.88867",x2:"66.1123",y2:"3.88867",stroke:"url(#paint0_radial_4495_137640)","stroke-width":"2"}),(0,r.jsx)("rect",{x:"72.1123",y:"4.88867",width:"6.91221",height:"6.91221",rx:"2",transform:"rotate(-45 72.1123 4.88867)",fill:"#84CAFF"}),(0,r.jsx)("line",{x1:"87.8877",y1:"3.88867",x2:"153.888",y2:"3.88867",stroke:"url(#paint1_radial_4495_137640)","stroke-width":"2"}),(0,r.jsxs)("defs",{children:[(0,r.jsxs)("radialGradient",{id:"paint0_radial_4495_137640",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(0.112305 4.88867) scale(66 13.7742)",children:[(0,r.jsx)("stop",{"stop-color":"#EFF8FF"}),(0,r.jsx)("stop",{offset:"1","stop-color":"#84CAFF"})]}),(0,r.jsxs)("radialGradient",{id:"paint1_radial_4495_137640",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(87.8877 4.88867) scale(66 13.7742)",children:[(0,r.jsx)("stop",{"stop-color":"#84CAFF"}),(0,r.jsx)("stop",{offset:"1","stop-color":"#EFF8FF"})]})]})]});n(29235);let l=({title:e,subTitle:t,showBreakLine:n,ctaLabel:l,ctaType:d,clickHandler:c,ctaLink:u})=>{let p=(0,a.Z)("_titleBarContainer_kj630_1",{_gap24_kj630_12:!n,_gap4_kj630_16:n});return(0,r.jsxs)("div",{className:p,children:[(0,r.jsxs)("div",{className:"_titlesContainer_kj630_5",children:[(0,r.jsx)(o.Z,{weight:"bold",variant:"heading1",component:"h1",color:"#1570EF",className:"_title_kj630_1",children:e}),!n&&(0,r.jsx)(o.Z,{color:"#3D3D3D",variant:"heading4",children:t})]}),!n&&l&&(0,r.jsx)("a",{href:u,children:(0,r.jsx)(i.Z,{variant:d,animation:!0,onClick:e=>{null==e||e.preventDefault(),window.location.replace(u||"/"),c&&c()},children:l})}),n&&(0,r.jsx)(s,{})]})}},9047:function(e,t,n){"use strict";let r;n.d(t,{Z:function(){return p}});var i=n(67251);n(45113);var o=n(13328),a=n(72454);n(52509);let s=/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)/;var l=((r=l||{}).SINGLE="Single",r.CAROUSEL="Carousel",r);let d=(e,t)=>t.test(e),c=(e,t)=>`${e}?controls=1&showinfo=0&rel=0&loop=1${t?"&mute=1&autoplay=1":""}`;n(8623);let u={videoCardParentContainer:"_videoCardParentContainer_171qr_1",videoContainer:"_videoContainer_171qr_4",videoContainerSingleCard:"_videoContainerSingleCard_171qr_7",videoContainerMultipleCards:"_videoContainerMultipleCards_171qr_11",videoPlayer:"_videoPlayer_171qr_16",contentSection:"_contentSection_171qr_30",topContent:"_topContent_171qr_33",bottomContent:"_bottomContent_171qr_36"},p=({title:e,teacher:t,subject:n,videoUrl:r,thumbnail:p,autoPlay:h=!1,variant:f=l.SINGLE})=>{let m=(0,a.Z)(u.videoContainer,{[u.videoContainerSingleCard]:f===l.SINGLE,[u.videoContainerMultipleCards]:f===l.CAROUSEL}),g=(e,t,n,r)=>(0,i.jsx)(o.Z,{variant:e,weight:t,color:n,children:r});return(0,i.jsxs)("div",{className:u.videoCardParentContainer,children:[(0,i.jsx)("div",{className:m,children:(()=>{if(!r)return null;if(d(r,s)){let e=c(r,h);return(0,i.jsx)("iframe",{className:u.videoPlayer,src:e,allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade"})}return(0,i.jsx)("div",{className:u.videoPlayer,children:(0,i.jsx)("video",{...p&&{poster:p},playsInline:!0,loop:!0,controlsList:"nodownload",className:u.video,controls:!0,autoPlay:h,muted:h,children:(0,i.jsx)("source",{src:r})})})})()}),f===l.CAROUSEL&&(0,i.jsxs)("div",{className:u.contentSection,children:[(0,i.jsxs)("div",{className:u.topContent,children:[g("heading4","bold","#1B2124",e),g("subHeading","medium","#1B2124",n)]}),(0,i.jsx)("div",{className:u.bottomContent,children:g("subHeading","medium","#1B2124",t)})]})]})}},29329:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67251),i=n(36506);n(45113);var o=n(13328);n(52509);var a=n(86622),s=n(44188);n(59765);let l=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"31",height:"22",viewBox:"0 0 31 22",fill:"none",...e,children:(0,r.jsx)("path",{opacity:"0.4",d:"M11.0205 2.56348C8.70801 4.611 7.55176 7.20052 7.55176 10.332L7.62402 11.3076C10.346 11.8617 11.707 13.5117 11.707 16.2578C11.707 17.7513 11.1771 18.9798 10.1172 19.9434C9.08138 20.8828 7.80469 21.3525 6.28711 21.3525C4.36003 21.3525 2.8304 20.6299 1.69824 19.1846C0.566081 17.7152 0 15.8242 0 13.5117C0 10.4284 1.03581 7.6582 3.10742 5.20117C5.20312 2.72005 7.84082 1.20247 11.0205 0.648438V2.56348ZM29.4482 2.56348C27.1357 4.611 25.9795 7.20052 25.9795 10.332L26.0518 11.3076C28.7497 11.8376 30.0986 13.4876 30.0986 16.2578C30.0986 17.7513 29.5807 18.9798 28.5449 19.9434C27.5091 20.8828 26.2324 21.3525 24.7148 21.3525C22.7878 21.3525 21.2581 20.6419 20.126 19.2207C18.9938 17.7995 18.4277 15.8965 18.4277 13.5117C18.4277 10.5247 19.4515 7.77865 21.499 5.27344C23.5706 2.74414 26.2204 1.20247 29.4482 0.648438V2.56348Z",fill:"black",className:"_quotesIcon_lnx41_49"})}),d=({name:e,title:t,image:n,quote:a,bgColor:s,textOverlay:d,textColor:c})=>{let u=(0,i.c)("_founderBx_lnx41_1","_founderBx1_lnx41_68","group");return(0,r.jsxs)("div",{className:u,style:{backgroundColor:s},children:[(0,r.jsx)(o.Z,{variant:"display2",weight:"semi-bold",className:(0,i.c)("_textOverlay_lnx41_5"),children:d}),(0,r.jsx)(o.Z,{variant:"heading2",weight:"bold",color:c,className:"_name_lnx41_16",children:e}),(0,r.jsx)(o.Z,{variant:"subHeading",weight:"medium",color:"static-grey-1",className:"_title_lnx41_13",children:t}),(0,r.jsx)("div",{className:"_cardImgBox_lnx41_28",children:(0,r.jsx)("img",{src:n,alt:e,className:"_cardImg_lnx41_28","aria-label":`${e}'s photo`})}),(0,r.jsxs)("div",{className:"_cardQuotes_lnx41_39",children:[(0,r.jsx)(l,{}),(0,r.jsx)(o.Z,{variant:"heading4",weight:"semi-bold",className:"_quoteClasses_lnx41_19",children:(0,r.jsx)("span",{className:"_quoteText_lnx41_53",children:a})})]})]})};n(41647);let c="_heading_b9mqu_9",u=({founders:e,title:t,highlight:n})=>{let l=(e,t)=>(0,r.jsx)("img",{src:e,className:t,alt:"Card Shadow"});return(0,r.jsxs)(s.Z,{className:"_bgColor_b9mqu_21",children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(o.Z,{component:"h2",variant:"heading1",weight:"semi-bold",color:"static-white",className:c,children:t}),(0,r.jsx)(o.Z,{variant:"display2",weight:"semi-bold",className:(0,i.c)(c,"_customGradient_b9mqu_13"),children:n})]}),(0,r.jsx)("div",{className:"_secContainer_b9mqu_1",children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{className:"_founderCardsWrapper_b9mqu_5",children:[l("https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/aada56ae-9a3a-47eb-b7a8-6f6950b09432.webp","_imgWrapper1_b9mqu_25"),l("https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/3772b68f-2d14-445f-b4a4-d208c5db6f4b.webp","_imgWrapper2_b9mqu_29"),e.map((e,t)=>(0,r.jsx)(d,{name:null==e?void 0:e.name,title:null==e?void 0:e.title,quote:null==e?void 0:e.quote,image:null==e?void 0:e.image,bgColor:null==e?void 0:e.bgColor,textOverlay:null==e?void 0:e.textOverlay,textColor:null==e?void 0:e.textColor},t))]})})})]})}},44573:function(e,t,n){"use strict";let r;n.d(t,{Z:function(){return w}});var i=n(67251),o=n(36506),a=n(45113),s=n(13328);n(52509);var l=n(86622),d=n(44188),c=((r=c||{}).NEXT="next",r.PREV="prev",r);n(47264);let u={secContainer:"_secContainer_hkvso_1",prevButton:"_prevButton_hkvso_5",prevButtonActive:"_prevButtonActive_hkvso_9",prevButtonDisabled:"_prevButtonDisabled_hkvso_13",nextButton:"_nextButton_hkvso_17",nextButtonActive:"_nextButtonActive_hkvso_21",nextButtonDisabled:"_nextButtonDisabled_hkvso_25",svgIcon:"_svgIcon_hkvso_29"},p=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:u.svgIcon,viewBox:"0 0 20 20",fill:"none",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 10C3 9.58579 3.33579 9.25 3.75 9.25L14.3879 9.25L10.2302 5.29062C9.93159 5.00353 9.92228 4.52875 10.2094 4.23017C10.4965 3.93159 10.9713 3.92228 11.2698 4.20937L16.7698 9.45937C16.9169 9.60078 17 9.79599 17 10C17 10.204 16.9169 10.3992 16.7698 10.5406L11.2698 15.7906C10.9713 16.0777 10.4965 16.0684 10.2094 15.7698C9.92228 15.4713 9.93159 14.9965 10.2302 14.7094L14.3879 10.75L3.75 10.75C3.33579 10.75 3 10.4142 3 10Z",fill:"white"})}),h=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:u.svgIcon,viewBox:"0 0 20 20",fill:"none",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 10C17 10.4142 16.6642 10.75 16.25 10.75L5.61208 10.75L9.76983 14.7094C10.0684 14.9965 10.0777 15.4713 9.79062 15.7698C9.50353 16.0684 9.02875 16.0777 8.73017 15.7906L3.23017 10.5406C3.08311 10.3992 3 10.204 3 10C3 9.79599 3.08311 9.60078 3.23017 9.45938L8.73017 4.20938C9.02875 3.92228 9.50353 3.93159 9.79062 4.23017C10.0777 4.52875 10.0684 5.00353 9.76983 5.29063L5.61208 9.25L16.25 9.25C16.6642 9.25 17 9.58579 17 10Z",fill:"#5A4BDA"})}),f=({activeStep:e,stepsLength:t,onPrev:n,onNext:r})=>(0,i.jsxs)("div",{className:u.secContainer,children:[(0,i.jsx)("button",{className:(0,o.c)(u.prevButton,0===e?u.prevButtonDisabled:u.prevButtonActive),onClick:n,disabled:0===e,children:(0,i.jsx)(h,{})}),(0,i.jsx)("button",{className:(0,o.c)(u.nextButton,e===t-1?u.nextButtonDisabled:u.nextButtonActive),onClick:r,disabled:e===t-1,children:(0,i.jsx)(p,{})})]});n(53953);let m={journeyContainer:"_journeyContainer_14uku_1",step:"_step_14uku_5",stepIconPosition:"_stepIconPosition_14uku_8",yearText:"_yearText_14uku_12",iconContainer:"_iconContainer_14uku_16",completedIconBg:"_completedIconBg_14uku_20",incompleteIconBg:"_incompleteIconBg_14uku_24",iconBorder:"_iconBorder_14uku_28",completedBorder:"_completedBorder_14uku_34",incompleteBorder:"_incompleteBorder_14uku_38",connector:"_connector_14uku_42",connectorLine:"_connectorLine_14uku_46",completedConnector:"_completedConnector_14uku_51",incompleteConnector:"_incompleteConnector_14uku_55"},g=({steps:e,activeStep:t,setActiveStep:n})=>{let r=(0,a.useRef)(null),l=(0,a.useRef)([]);return(0,a.useEffect)(()=>{let e=r.current,n=l.current[t];if(e&&n){let t=n.offsetLeft,r=n.offsetWidth,i=e.offsetWidth;e.scrollTo({left:t-(i-r)/2,behavior:"smooth"})}},[t]),(0,i.jsx)("div",{ref:r,className:(0,o.c)("scroll-snap-x-mandatory","scrollbar-hide",m.journeyContainer),children:e.map((r,d)=>(0,i.jsxs)(a.Fragment,{children:[(0,i.jsxs)("div",{ref:e=>l.current[d]=e,className:(0,o.c)(m.step,d<=t?m.active:""),onClick:()=>n(d),children:[(0,i.jsx)("div",{className:m.yearText,children:(0,i.jsx)(s.Z,{variant:"subHeading",weight:"semi-bold",color:d<=t?"#5925DC":"#C1C6CE",children:r.year})}),(0,i.jsx)("div",{className:m.stepIconPosition,children:(0,i.jsxs)("div",{className:(0,o.c)(m.iconContainer,d<=t?m.completedIconBg:m.incompleteIconBg),children:[(0,i.jsx)("img",{src:r.icon,alt:`Icon for ${r.year}`}),(0,i.jsx)("div",{className:(0,o.c)(m.iconBorder,d<=t?m.completedBorder:m.incompleteBorder)})]})})]}),d<e.length-1&&(0,i.jsx)("div",{className:m.connector,children:(0,i.jsx)("div",{className:(0,o.c)(m.connectorLine,d<t?m.completedConnector:m.incompleteConnector)})})]},d))})};var v=n(16223);n(97047);let b={transitionBox:"_transitionBox_1abtu_1",opacity100:"_opacity100_1abtu_4",opacityOhidden:"_opacityOhidden_1abtu_7",journeyCard:"_journeyCard_1abtu_10",listItemWrapper:"_listItemWrapper_1abtu_31",imageWrapper:"_imageWrapper_1abtu_35",subHeading:"_subHeading_1abtu_39",listItem:"_listItem_1abtu_31",svgIcon:"_svgIcon_1abtu_47"},y=({step:e,isActive:t})=>(0,i.jsx)("div",{className:(0,o.c)(b.transitionBox,t?b.opacity100:b.opacityOhidden),children:(0,i.jsxs)("div",{className:b.journeyCard,children:[(0,i.jsx)("div",{className:b.imageWrapper,children:(0,i.jsx)("img",{src:e.image,alt:`Icon for ${e.year}`})}),(0,i.jsxs)("ul",{className:b.listItemWrapper,children:[(0,i.jsxs)(s.Z,{variant:"heading3",weight:"medium",color:"static-black",children:["In",(0,i.jsx)("span",{className:b.subHeading,children:e.year})]}),e.items.map((e,t)=>(0,i.jsxs)("li",{className:b.listItem,children:[(0,i.jsx)("img",{src:"https://static.pw.live/images/493fc9f7-b787-4674-8fa1-7c3a138684a2_20241107134105.webp",alt:"step details",className:(0,o.c)(b.svgIcon,"mr-1")}),(0,i.jsx)(s.Z,{variant:"subHeading",weight:"medium",color:"static-black",className:"leading-7",children:(0,i.jsx)(v.Z,{content:e.item||""})})]},t))]})]})});n(70626);let x="_heading_sb5ox_1";function w({steps:e,heading:t,subheading:n}){var r;let[u,p]=(0,a.useState)(0),[h,m]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let t=setInterval(()=>{u<e.length-1?p(e=>e+1):(m(!1),p(0))},4e3);return m(!0),()=>clearInterval(t)},[u,e.length]);let v=t=>{p(n=>t===c.NEXT?(n+1)%e.length:(n-1+e.length)%e.length)};return(0,i.jsx)(d.Z,{className:"overflow-hidden",children:(0,i.jsx)(l.Z,{children:(0,i.jsxs)("div",{className:"_secContainer_sb5ox_4",children:[(0,i.jsx)(s.Z,{component:"h2",variant:"heading1",weight:"semi-bold",color:"text-heading",className:x,children:(0,i.jsx)("span",{className:"_headingSpan_sb5ox_7",children:t})}),(0,i.jsx)(s.Z,{variant:"display2",weight:"semi-bold",color:"text-heading",className:(0,o.c)("_customGradient_sb5ox_30",x),children:n}),(0,i.jsxs)("div",{className:"_journeyContainer_sb5ox_10",children:[(0,i.jsx)(g,{steps:e,activeStep:u,setActiveStep:p,isAnimating:h}),(0,i.jsx)("div",{className:"_yearDisplay_sb5ox_14",children:(0,i.jsx)(s.Z,{color:"primary-100",weight:"semi-bold",className:"_activeStep_sb5ox_26",children:(null==(r=e[u])?void 0:r.year)??"N/A"})})]}),(0,i.jsxs)("div",{className:"_journeyDetails_sb5ox_18",children:[(0,i.jsx)("div",{className:(0,o.c)("_journeyContent_sb5ox_22","_forBgIcon_sb5ox_39","_journeyBg_sb5ox_48"),children:e.map((e,t)=>(0,i.jsx)(y,{step:e,isActive:t===u},t))}),(0,i.jsx)(f,{activeStep:u,stepsLength:e.length,onPrev:()=>v("prev"),onNext:()=>v("next")})]})]})})})}},3639:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(67251),i=n(36506),o=n(45113),a=n(13328);n(52509);var s=n(86622),l=n(44188),d=n(30206),c=n(16223);let u=`
 
        
      
        .custom-prev-arrow,
        .custom-next-arrow {
          display: none !important;
        }
        
          @media (max-width: 639px) {
          .ourMissionSlider {
          padding:0 5px
          }
.ourMissionSlider .slick-slide {
  margin:0 0px!important; 
}
  .ourMissionSlider .slick-track {
  display:flex
  gap:4px
  }
}
  
      

      @media (min-width: 768px) and (max-width: 860px) {
        
        .ourMissionSiderCss .slick-arrow
        {
          display: none !important;
        }
          
      }

       @media (min-width: 861px) and (max-width: 1023px) {
       .ourMissionSiderCss .slick-arrow
        {
          display: none !important;
        }}
`;n(1826);let p={title:"_title_1msxo_1",titleSpan:"_titleSpan_1msxo_5",cardSubtitle:"_cardSubtitle_1msxo_9",card:"_card_1msxo_9",cardWithSubtitle:"_cardWithSubtitle_1msxo_18",subtitle:"_subtitle_1msxo_22",secContainer:"_secContainer_1msxo_31",desktopWrapper:"_desktopWrapper_1msxo_35",mobileWrapper:"_mobileWrapper_1msxo_39",cardTitle:"_cardTitle_1msxo_43",cardTitleWithSubtitle:"_cardTitleWithSubtitle_1msxo_48",cardTitleLineClamp2:"_cardTitleLineClamp2_1msxo_54",cardTitleLineClamp3:"_cardTitleLineClamp3_1msxo_61",cardImage:"_cardImage_1msxo_68",imgBx:"_imgBx_1msxo_71",cardWrapper:"_cardWrapper_1msxo_74",cardWrapperMob:"_cardWrapperMob_1msxo_78",headingWrapper:"_headingWrapper_1msxo_82",gridWrapper:"_gridWrapper_1msxo_86"},h=["#FEF3F2","#FEFBE8","#EFF8FF"],f=["#7A271A","#542C0D","#194185"],m=({title:e,subtitle:t,cardData:n})=>{let m=(e,t)=>t[e%t.length];(0,o.useEffect)(()=>{let e=document.createElement("style");return e.innerHTML=u,document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]);let g=(e,t)=>(0,r.jsxs)("div",{className:e.subtitle?p.cardWithSubtitle:p.card,style:{backgroundColor:(null==e?void 0:e.bgColor)||m(t,h)},children:[(0,r.jsxs)("div",{className:e.subtitle?p.cardTitleWithSubtitle:p.cardTitle,children:[(0,r.jsx)(a.Z,{variant:e.subtitle?"heading4":"heading3",weight:"medium",color:(null==e?void 0:e.headingColor)||m(t,f),className:e.subtitle?p.cardTitleLineClamp2:p.cardTitleLineClamp3,children:(0,r.jsx)(c.Z,{content:e.title||""})}),e.subtitle&&(0,r.jsx)(a.Z,{variant:"subHeading",weight:"medium",color:(null==e?void 0:e.headingColor)||m(t,f),className:p.cardSubtitle,children:(0,r.jsx)(c.Z,{content:e.subtitle||""})})]}),(0,r.jsx)("div",{className:p.imgBx,children:(0,r.jsx)("img",{src:e.imageSrc??"",alt:e.imageAlt??"Our mission Vision",className:p.cardImage})})]});return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:p.headingWrapper,children:[(0,r.jsx)(a.Z,{component:"h2",variant:"heading1",weight:"semi-bold",color:"#1B2124",className:p.title,children:(0,r.jsx)("span",{className:p.titleSpan,children:e})}),(0,r.jsx)(a.Z,{variant:"display2",weight:"semi-bold",color:"#1B2124",className:(0,i.c)(p.subtitle),children:t})]})}),(0,r.jsxs)("div",{className:p.secContainer,children:[(0,r.jsx)("div",{className:p.desktopWrapper,children:(0,r.jsx)("div",{className:p.gridWrapper,children:n.map((e,t)=>(0,r.jsx)("div",{className:p.cardWrapper,children:0===t?g(e,t):(0,r.jsx)(s.Z,{delay:t,children:g(e,t)})},t))})}),(0,r.jsx)("div",{className:p.mobileWrapper,children:(0,r.jsx)(d.Z,{customSettings:{responsive:[{breakpoint:640,settings:{slidesToScroll:3,centerMode:!1,centerPadding:"0px",slidesToShow:1.5,speed:500,infinite:!1}}]},className:"ourMissionSlider",children:n.map((e,t)=>(0,r.jsx)("div",{className:p.cardWrapperMob,children:g(e,t)},t))})})]})]})}},44188:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67251),i=n(36506);n(95638);let o=({className:e="",children:t})=>{let n=(0,i.c)("_bgWhite_aetuq_1","_paddingDefault_aetuq_5",e);return(0,r.jsx)("section",{className:n,children:t})}},28407:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(67251),i=n(45113),o=n(72454);n(52509);var a=n(13328),s=n(86622);n(51024);let l={imgCollageBox:"_imgCollageBox_15uav_1",imgBox:"_imgBox_15uav_7",titleBox:"_titleBox_15uav_14",collageTitle:"_collageTitle_15uav_18",titleInView:"_titleInView_15uav_22",subTitle:"_subTitle_15uav_27"},d=({imageCollage:e,title:t,subtitle:n,isInView:i})=>{let d=Math.floor(((null==e?void 0:e.length)||0)/2),c=(0,o.Z)(l.collageTitle,{[l.titleInView]:i});return(0,r.jsxs)("div",{className:l.imgCollageBox,children:[null==e?void 0:e.map((e,t)=>(0,r.jsx)("div",{className:l.imgBox,children:(0,r.jsx)(s.Z,{scaleOut:1===t||6===t,scale:1!==t&&6!==t,children:(0,r.jsx)("img",{src:null==e?void 0:e.imgUrl,alt:(null==e?void 0:e.alt)||"Image"})},t)},(null==e?void 0:e.imgUrl)||t)),t&&(0,r.jsxs)("div",{className:l.titleBox,style:{gridColumn:`${d%3+1}`,gridRow:`${Math.floor(d/3)+1}`},children:[(0,r.jsx)(a.Z,{decoration:"none",variant:"heading1",weight:"semi-bold",component:"h4",color:"static-black",className:c,children:t}),(0,r.jsx)(a.Z,{decoration:"none",variant:"heading1",weight:"semi-bold",component:"h4",className:l.subTitle,color:"static-black",children:n})]})]})},c=({children:e,speed:t=35,direction:n="left",className:o="",autoPlayDelay:a=0,shouldPlay:s=!0})=>{let l=(0,i.useRef)(null),d=(0,i.useRef)(null),[c,u]=(0,i.useState)(0),[p,h]=(0,i.useState)(0),[f,m]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(!d.current)return;let e=()=>{if(d.current){let e=d.current.offsetWidth;u(e),h(e/(t||35))}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[e,t]),(0,i.useEffect)(()=>{let e;return s&&a>0?e=setTimeout(()=>{m(!0)},a):m(s),()=>{e&&clearTimeout(e)}},[s,a]);let g={display:"flex",whiteSpace:"nowrap",willChange:"transform",animation:f?`marquee-${n} ${p}s linear infinite`:"none",transform:"left"===n||f?"translateX(0)":`translateX(-${c}px)`},v=i.Children.toArray(e),b=`
    @keyframes marquee-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${c}px); }
    }
    @keyframes marquee-right {
      0% { transform: translateX(-${c}px); }
      100% { transform: translateX(0); }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:b}),(0,r.jsx)("div",{ref:l,className:o,style:{width:"100%",overflow:"hidden",position:"relative"},children:(0,r.jsxs)("div",{ref:d,style:g,children:[v,v]})})]})};n(51802);let u={imgBox:"_imgBox_1rvbc_1",horizontalSlider:"_horizontalSlider_1rvbc_9",titleBox:"_titleBox_1rvbc_18",collageTitle:"_collageTitle_1rvbc_22",titleInView:"_titleInView_1rvbc_27",subTitle:"_subTitle_1rvbc_32"},p=({imageCollage:e,title:t,subtitle:n,isInView:i})=>{var l,d;let p=(0,o.Z)(u.collageTitle,{[u.titleInView]:i});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{topToBottomDelay:5,children:(0,r.jsx)(c,{speed:35,className:u.horizontalSlider,shouldPlay:i,autoPlayDelay:1e3,children:null==(l=null==e?void 0:e.slice(0,4))?void 0:l.map((e,t)=>(0,r.jsx)("div",{className:u.imgBox,children:(0,r.jsx)("img",{src:null==e?void 0:e.imgUrl,alt:(null==e?void 0:e.alt)||"Image"})},null==e?void 0:e.imgUrl))})}),(0,r.jsxs)("div",{className:u.titleBox,children:[(0,r.jsx)(a.Z,{decoration:"none",variant:"heading1",weight:"semi-bold",component:"h4",className:p,color:"static-black",children:t}),(0,r.jsx)(a.Z,{decoration:"none",variant:"heading1",weight:"semi-bold",component:"h4",className:u.subTitle,color:"static-black",children:n})]}),(0,r.jsx)(s.Z,{delay:5,children:(0,r.jsx)(c,{speed:35,direction:"right",className:u.horizontalSlider,shouldPlay:i,autoPlayDelay:1e3,children:null==(d=null==e?void 0:e.slice(4))?void 0:d.map((e,t)=>(0,r.jsx)("div",{className:u.imgBox,children:(0,r.jsx)("img",{src:null==e?void 0:e.imgUrl,alt:(null==e?void 0:e.alt)||"Image",className:u.collageImage})},null==e?void 0:e.imgUrl))})})]})};n(8621);let h=({imageCollage:e,title:t,subtitle:n})=>{let a=(0,i.useRef)(null),[s,l]=(0,i.useState)(!1),[c,u]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=()=>u(window.innerWidth<=767);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,i.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&l(!0)},{threshold:c?.5:.1});return a.current&&e.observe(a.current),()=>{a.current&&e.unobserve(a.current)}},[]);let h=(0,o.Z)("_section_1fenv_1",{_inView_1fenv_11:s});return(0,r.jsx)("section",{ref:a,className:h,children:(0,r.jsx)("div",{className:"_secContainer_1fenv_15",children:c?(0,r.jsx)(p,{imageCollage:e,title:t,subtitle:n,isInView:s}):(0,r.jsx)(d,{imageCollage:e,title:t,subtitle:n,isInView:s})})})}},45191:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67251),i=n(36506);n(45113);var o=n(13328);n(52509),n(36902);let a={container:"_container_f58a8_1",imageContainer:"_imageContainer_f58a8_5",image:"_image_f58a8_5",infoContainer:"_infoContainer_f58a8_13",nameAndSubject:"_nameAndSubject_f58a8_17",subject:"_subject_f58a8_21",aboutContainer:"_aboutContainer_f58a8_25",aboutText:"_aboutText_f58a8_29",starImage:"_starImage_f58a8_33",imageWrapper:"_imageWrapper_f58a8_37",imageOverlay:"_imageOverlay_f58a8_41",playButton:"_playButton_f58a8_45",teacherName:"_teacherName_f58a8_49"},s=({name:e,subject:t,index:n,about:i,teacherImage:s,cardButtonClickHandler:l})=>(0,r.jsxs)("div",{className:a.container,children:[(0,r.jsxs)("div",{className:a.imageContainer,children:[(0,r.jsx)("img",{src:"https://static.pw.live/images/bkg_20241218182927.png",alt:"Teacher Background"}),(0,r.jsxs)("div",{className:a.imageWrapper,children:[(0,r.jsx)("div",{className:a.imageOverlay}),(0,r.jsx)("img",{src:"https://static.pw.live/images/play_20250108091348.svg",alt:"Teacher Video Icon",onClick:()=>l&&l(n||0),className:a.playButton}),(0,r.jsx)("img",{src:s,alt:"Teacher Image",className:a.image})]})]}),(0,r.jsxs)("div",{className:a.infoContainer,children:[(0,r.jsxs)("div",{className:a.nameAndSubject,children:[(0,r.jsx)(o.Z,{variant:"subHeading",weight:"semi-bold",className:a.teacherName,children:e}),t&&(0,r.jsx)("div",{className:a.subject,children:(0,r.jsx)(o.Z,{color:"#037CBF",weight:"semi-bold",variant:"small",children:t})})]}),(0,r.jsx)("div",{className:a.aboutContainer,children:i&&(null==i?void 0:i.length)>0&&(null==i?void 0:i.slice(0,3).map((e,t)=>(0,r.jsxs)("div",{className:a.aboutText,children:[(0,r.jsx)("img",{src:"https://static.pw.live/images/Star_20241208234443.svg",alt:"Star",className:null==a?void 0:a.starImage}),(0,r.jsx)(o.Z,{variant:"tiny",color:"#757575",children:e})]},t)))})]})]});n(57028);let l={cardWrapper:"_cardWrapper_zfjeu_1",teacherImage:"_teacherImage_zfjeu_6",bottomCard:"_bottomCard_zfjeu_10",teacherName:"_teacherName_zfjeu_15",teacherSubject:"_teacherSubject_zfjeu_19",experienceWrapper:"_experienceWrapper_zfjeu_23",experienceType:"_experienceType_zfjeu_27"},d=({name:e,subject:t,experience:n,teacherImage:a,variant:d,cardButtonClickHandler:c,index:u,about:p})=>{let h=(0,i.c)(l.bottomCard),f=(0,i.c)(l.teacherSubject);return"power"===d?(0,r.jsx)(s,{name:e,teacherImage:a,subject:t,about:p,index:u,cardButtonClickHandler:c}):(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:l.cardWrapper,children:(0,r.jsx)("img",{src:a,className:l.teacherImage,alt:"teacherImage"})}),(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)(o.Z,{variant:"regular",component:"div",color:"#1B2124",weight:"semi-bold",className:l.teacherName,children:e}),(0,r.jsx)(o.Z,{variant:"small",component:"div",color:"#3D3D3D",className:f,children:t}),n?(0,r.jsx)("div",{className:l.experienceWrapper,children:(0,r.jsxs)(o.Z,{variant:"small",color:"#1B2124",weight:"semi-bold",children:[n,"+ Years Exp"]})}):(0,r.jsx)("div",{className:l.experienceType})]})]})}},22785:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67251);n(45113);var i=n(13328),o=n(72454);n(52509);let a="video",s=e=>(0,r.jsxs)("svg",{width:"40",height:"39",viewBox:"0 0 40 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("circle",{cx:"19.9992",cy:"20.965",r:"10.8",fill:"white"}),(0,r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.800781 19.7654C0.800781 9.16156 9.39692 0.56543 20.0008 0.56543C30.6046 0.56543 39.2008 9.16156 39.2008 19.7654C39.2008 30.3693 30.6046 38.9654 20.0008 38.9654C9.39692 38.9654 0.800781 30.3693 0.800781 19.7654ZM16.1382 12.7855C16.7162 12.47 17.4203 12.4952 17.9741 12.8513L26.3741 18.2513C26.8893 18.5825 27.2008 19.153 27.2008 19.7654C27.2008 20.3779 26.8893 20.9484 26.3741 21.2796L17.9741 26.6796C17.4203 27.0356 16.7162 27.0608 16.1382 26.7453C15.5603 26.4298 15.2008 25.8239 15.2008 25.1654V14.3654C15.2008 13.707 15.5603 13.1011 16.1382 12.7855Z",fill:"#5A4BDA"})]});n(58317);let l={cardWrapper:"_cardWrapper_18e1l_1",potraitModeCardWrapper:"_potraitModeCardWrapper_18e1l_5",cardDescription:"_cardDescription_18e1l_9",commaIcon:"_commaIcon_18e1l_13",potraitModeCommaIcon:"_potraitModeCommaIcon_18e1l_17",testimonialSectionWrapper:"_testimonialSectionWrapper_18e1l_21",videoContainer:"_videoContainer_18e1l_25",potraitModeVideoContainer:"_potraitModeVideoContainer_18e1l_29",videoWrapper:"_videoWrapper_18e1l_33",potraitModeVideoWrapper:"_potraitModeVideoWrapper_18e1l_37",decriptionContainer:"_decriptionContainer_18e1l_41",videoImage:"_videoImage_18e1l_45",playIcon:"_playIcon_18e1l_49",metaText:"_metaText_18e1l_53",hrBorder:"_hrBorder_18e1l_57",videoDescription:"_videoDescription_18e1l_61",authorImageWrapper:"_authorImageWrapper_18e1l_65",authorImage:"_authorImage_18e1l_65",primary:"_primary_18e1l_72",secondary:"_secondary_18e1l_75"},d=({variant:e,description:t,authorName:n,authorImage:d,videoImage:c,metaData:u,videoClickHandler:p,type:h="primary",potraitMode:f=!1})=>{let m=(0,o.Z)(l.cardDescription,"scrollbar-hide");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:(0,o.Z)(l.cardWrapper,{[l.primary]:"primary"===h,[l.secondary]:"secondary"===h,[l.cardWrapper]:!f,[l.potraitModeCardWrapper]:f}),children:(0,r.jsx)("div",{className:l.testimonialSectionWrapper,children:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:(0,o.Z)({[null==l?void 0:l.potraitModeVideoContainer]:f,[null==l?void 0:l.videoContainer]:!f}),children:[e===a&&e===a&&(0,r.jsxs)("div",{className:(0,o.Z)({[null==l?void 0:l.potraitModeVideoWrapper]:f,[l.videoWrapper]:!f}),children:[(0,r.jsx)("img",{onClick:p,src:c,alt:"webBanner",className:l.videoImage}),(0,r.jsx)(s,{className:l.playIcon,onClick:p})]}),(0,r.jsxs)("div",{className:null==l?void 0:l.decriptionContainer,children:[t&&(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:"primary"===h?"https://static.pw.live/images/comma_20241022095801.webp":"https://static.pw.live/images/Comma_20241202002128.png",alt:"comma",className:(0,o.Z)({[l.potraitModeCommaIcon]:f,[null==l?void 0:l.commaIcon]:!f})}),(0,r.jsx)("div",{className:m,children:(0,r.jsx)(i.Z,{color:"#3D3D3D",weight:"medium",variant:"regular",children:t})})]}),(0,r.jsxs)("div",{className:l.videoDescription,children:[(0,r.jsx)("div",{className:l.authorImageWrapper,children:(0,r.jsx)("img",{src:d,alt:"author image",className:l.authorImage})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:l.authorText,children:(0,r.jsx)(i.Z,{weight:"bold",variant:"regular",color:"#1B2124",children:n})}),(0,r.jsx)("div",{className:l.metaText,children:u.map((e,t)=>(0,r.jsxs)(r.Fragment,{children:[0!=t&&(0,r.jsx)("hr",{className:l.hrBorder}),(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{weight:"semi-bold",color:"#5A4BDA",variant:"tiny",children:e})},t)]}))})]})]})]})]})})})})})}},54894:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(45113);let i=()=>{let[e,t]=(0,r.useState)("u">typeof window?window.innerWidth:1024),[n,i]=(0,r.useState)("u">typeof window?window.innerHeight:768);return(0,r.useEffect)(()=>{if(typeof window>"u")return;let e=()=>{t(window.innerWidth),i(window.innerHeight)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),[e,n]}},27702:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67251),i=n(45113),o=n(13328),a=n(72454),s=n(72543);n(52509);var l=n(16223),d=n(54894);n(82243);let c=({backgroundImage:e,backgroundImageMobile:t})=>(0,r.jsx)("div",{className:"_bgContainer_1ra1g_9",children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:t,media:"(max-width: 767px)"}),(0,r.jsx)("img",{src:e,alt:"",className:"_responsiveImage_1ra1g_16",loading:"eager",decoding:"async"})]})});n(85382);let u={title:"_title_b08mc_1",description:"_description_b08mc_5",restrictedWidth:"_restrictedWidth_b08mc_9",breadcrumbsDiv:"_breadcrumbsDiv_b08mc_13",descriptionTruncate:"_descriptionTruncate_b08mc_17"},p=e=>{let{title:t,description:n,descriptionContent:p,breadcrumbs:h,onItemClick:f,backgroundImage:m,backgroundImageMobile:g,inverted:v,centered:b,children:y,isRestrictedWidth:x,textColorTitle:w,textColorDescription:_,truncateDescription:C=!1,customPadding:$,customPaddingMobile:k}=e,S=(null==w?void 0:w.trim())||"#3D3D3D",j=(null==_?void 0:_.trim())||"#3D3D3D",[E]=(0,d.Z)(),[O,P]=(0,i.useState)(E>758),N="number"==typeof $;return(0,r.jsxs)("div",{className:"relative",children:[(m||g)&&(0,r.jsx)(c,{backgroundImage:m,backgroundImageMobile:g}),(0,r.jsxs)("div",{className:u.breadcrumbsDiv,style:N&&"number"==typeof $?{paddingTop:E>640?$:k,paddingBottom:E>640?$:k}:void 0,children:[h&&(null==h?void 0:h.length)>0&&(0,r.jsx)(s.Z,{customPaths:h,variant:"#FFFFFF"!==w?"neutral":"white",onItemClick:f}),(()=>{let e=(0,a.Z)({"text-white":v,"text-headings":!v,"text-center":b,[u.restrictedWidth]:x});return(0,r.jsxs)("div",{className:e,children:[t&&(0,r.jsx)(o.Z,{variant:"heading1",weight:"bold",className:u.title,color:S,children:t}),n&&(0,r.jsx)(o.Z,{variant:"regular",component:"div",color:j,className:u.description,children:!C||E>768||(null==n?void 0:n.length)<=90?n:O&&E<=768?(0,r.jsxs)(r.Fragment,{children:[n," ",(0,r.jsx)("span",{className:u.descriptionTruncate,onClick:()=>P(!1),children:"Show Less"})]}):(0,r.jsxs)(r.Fragment,{children:[n.length>90?(null==n?void 0:n.slice(0,90))+"...":n,(0,r.jsx)("span",{className:u.descriptionTruncate,onClick:()=>P(!0),children:"more"})]})}),p&&(0,r.jsx)(l.Z,{content:p})]})})(),y]})]})}},86622:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67251),i=n(45113);n(22444);let o={wrapper:"_wrapper_1lcgt_1",transition:"_transition_1lcgt_7",delay:"_delay_1lcgt_1",transition1:"_transition1_1lcgt_11",transition2:"_transition2_1lcgt_15",transition3:"_transition3_1lcgt_19",scaleIn:"_scaleIn_1lcgt_35",scaleAnimation:"_scaleAnimation_1lcgt_1",scaleOut1:"_scaleOut1_1lcgt_50",scaleOutAnimation:"_scaleOutAnimation_1lcgt_1",scaleOut2:"_scaleOut2_1lcgt_54",scaleOut3:"_scaleOut3_1lcgt_58",topToBottom:"_topToBottom_1lcgt_73",topToBottomAnimation:"_topToBottomAnimation_1lcgt_1",topToBottomDelay1:"_topToBottomDelay1_1lcgt_77",topToBottomDelay2:"_topToBottomDelay2_1lcgt_81",topToBottomDelay3:"_topToBottomDelay3_1lcgt_85"},a=(0,i.memo)(({children:e,delay:t=0,scale:n=!1,scaleOut:a=!1,index:s,topToBottomDelay:l})=>{let[d,c]=(0,i.useState)(!1),u=(0,i.useRef)(null),p=e=>{e.forEach(e=>{e.isIntersecting&&requestAnimationFrame(()=>c(!0))})},h=(0,i.useMemo)(()=>({threshold:.1,rootMargin:"0px"}),[]);(0,i.useEffect)(()=>{if(IntersectionObserver){let e=new IntersectionObserver(p,h),t=u.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}}c(!0)},[h]);let f=d?`${o[`transition${t}`]||o.transition} 
       ${n?o.scaleIn:""} 
       ${a?`${o[`scaleOut${s}`]||o.scaleOut}`:""} 
       ${void 0!==l?`${o.topToBottom} ${o[`topToBottomDelay${l}`]}`:""}`:"";return(0,r.jsx)("div",{ref:u,className:`${o.wrapper} ${f}`,children:e})})},94734:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67251);n(45113);var i=n(13328);n(52509);let o=e=>(0,r.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.75 4.71023C3.75 3.52179 5.02417 2.76841 6.0655 3.34115L15.6827 8.63058C16.762 9.22422 16.762 10.7751 15.6827 11.3688L6.0655 16.6582C5.02416 17.2309 3.75 16.4775 3.75 15.2891V4.71023Z",fill:"white"})});n(60196);let a={videoBar:"_videoBar_14s6u_1",videoBarContent:"_videoBarContent_14s6u_6",videoUrlContainer:"_videoUrlContainer_14s6u_10",cardWrapper:"_cardWrapper_14s6u_14",moreCTA:"_moreCTA_14s6u_22"},s=({videoTitle:e,videoDescription:t,videoUrl:n,handleVideoClick:s,isAuthEnabled:l})=>{let d=()=>(0,r.jsxs)("div",{className:a.videoBar,children:[(0,r.jsxs)("div",{className:a.videoBarContent,children:[e&&(0,r.jsx)(i.Z,{component:"div",variant:"subHeading",color:"#FFFFFF",weight:"semi-bold",children:e}),t&&(0,r.jsx)(i.Z,{component:"div",variant:"small",color:"#FFFFFF",weight:"medium",children:t})]}),(0,r.jsx)("div",{className:a.videoUrlContainer,children:(0,r.jsxs)("div",{className:a.moreCTA,children:[(0,r.jsx)(o,{className:a.PlayIcon}),(0,r.jsx)(i.Z,{component:"div",variant:"small",color:"#FFFFFF",weight:"semi-bold",children:"Watch Now"})]})})]});return(0,r.jsx)("div",{className:a.cardWrapper,children:l?(0,r.jsx)("div",{onClick:()=>s(),children:d()}):(0,r.jsx)("a",{href:n,target:"_blank",onClick:()=>s(),children:d()})})}},19808:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67251),i=n(45113);let o=["#84CAFF","#FECDCA","#FEEE95"];var a=n(72454);n(52509),n(32991);let s={sliderBox:"_sliderBox_1kj5z_1",sliderWrapper:"_sliderWrapper_1kj5z_5",slide:"_slide_1kj5z_1",active:"_active_1kj5z_21",left:"_left_1kj5z_32",right:"_right_1kj5z_38",video:"_video_1kj5z_43"},l=({videoSrc:e,activeSlide:t})=>{let n=(0,i.useRef)([]);return(0,i.useEffect)(()=>{n.current.forEach((e,n)=>{e&&(n===t?e.play().catch(e=>{console.warn(`Video play interrupted for slide ${n}:`,e)}):e.pause())})},[t]),(0,r.jsx)("div",{className:s.sliderBox,children:(0,r.jsx)("div",{className:s.sliderWrapper,children:null==e?void 0:e.map((i,o)=>{let l=o===(t-1+(null==e?void 0:e.length))%(null==e?void 0:e.length),d=o===(t+1)%(null==e?void 0:e.length),c=(0,a.Z)(s.slide,{[s.active]:o===t,[s.left]:l,[s.right]:d});return(0,r.jsx)("div",{className:c,children:(0,r.jsx)("video",{ref:e=>n.current[o]=e,src:(null==i?void 0:i.videoSrc)||"",className:s.video,autoPlay:!1,muted:!0,loop:!0,playsInline:!0,controls:!1})},`${null==i?void 0:i.videoSrc}-${o}`)})})})};var d=n(13328);n(27061);let c={videoSection:"_videoSection_12v6a_1",secContainer:"_secContainer_12v6a_4",mt12:"_mt12_12v6a_8"},u=({title:e,description:t,backgroundColor:n})=>(0,r.jsx)("section",{className:c.videoSection,style:{backgroundColor:n},children:(0,r.jsx)("div",{className:c.secContainer,children:(0,r.jsxs)("div",{className:c.titleBox,children:[(0,r.jsx)(d.Z,{color:"static-black",decoration:"none",variant:"display2",weight:"semi-bold",component:"h1",children:e}),(0,r.jsx)(d.Z,{color:"static-black",decoration:"none",variant:"subHeading",weight:"medium",component:"p",className:c.mt12,children:t})]})})});n(95258);let p=({videoSrc:e,title:t,description:n})=>{let[a,s]=(0,i.useState)(0),[d,c]=(0,i.useState)("#84CAFF");(0,i.useEffect)(()=>{let t=(null==e?void 0:e.length)||0;if(t>0){let e=setInterval(()=>{s(e=>{let n=(e+1)%t;return p(n),n})},8e3);return()=>clearInterval(e)}},[null==e?void 0:e.length]);let p=e=>{let t=o||[];c(t[e%t.length]||"#84CAFF")};return(0,r.jsxs)("div",{className:"_secWrapper_eanln_1",children:[(0,r.jsx)(u,{title:t,description:n,backgroundColor:d}),(0,r.jsx)(l,{videoSrc:e,activeSlide:a})]})}},19462:function(e,t,n){var r=n(28070);function i(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}(t=e.exports=n(64783)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var i=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(i++,"%c"===e&&(o=i))}),e.splice(o,0,r)}},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=i,t.useColors=function(){return"undefined"!=typeof window&&!!window.process&&"renderer"===window.process.type||"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(i())},64783:function(e,t,n){var r;function i(e){function n(){if(n.enabled){var e=+new Date,i=e-(r||e);n.diff=i,n.prev=r,n.curr=e,r=e;for(var o=Array(arguments.length),a=0;a<o.length;a++)o[a]=arguments[a];o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var s=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,function(e,r){if("%%"===e)return e;s++;var i=t.formatters[r];if("function"==typeof i){var a=o[s];e=i.call(n,a),o.splice(s,1),s--}return e}),t.formatArgs.call(n,o),(n.log||t.log||console.log.bind(console)).apply(n,o)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n)|0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=i.debug=i.default=i).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,i=0;i<r;i++)n[i]&&("-"===(e=n[i].replace(/\*/g,".*?"))[0]?t.skips.push(RegExp("^"+e.substr(1)+"$")):t.names.push(RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(91365),t.names=[],t.skips=[],t.formatters={}},81503:function(e){"use strict";var t=function(e){var t;return!!e&&"object"==typeof e&&"[object RegExp]"!==(t=Object.prototype.toString.call(e))&&"[object Date]"!==t&&e.$$typeof!==n},n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s(Array.isArray(e)?[]:{},e,t):e}function i(e,t,n){return e.concat(t).map(function(e){return r(e,n)})}function o(e){return Object.keys(e).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[])}function a(e,t){try{return t in e}catch(e){return!1}}function s(e,n,l){(l=l||{}).arrayMerge=l.arrayMerge||i,l.isMergeableObject=l.isMergeableObject||t,l.cloneUnlessOtherwiseSpecified=r;var d,c,u=Array.isArray(n);return u!==Array.isArray(e)?r(n,l):u?l.arrayMerge(e,n,l):(c={},(d=l).isMergeableObject(e)&&o(e).forEach(function(t){c[t]=r(e[t],d)}),o(n).forEach(function(t){(!a(e,t)||Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))&&(a(e,t)&&d.isMergeableObject(n[t])?c[t]=(function(e,t){if(!t.customMerge)return s;var n=t.customMerge(e);return"function"==typeof n?n:s})(t,d)(e[t],n[t],d):c[t]=r(n[t],d))}),c)}s.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,n){return s(e,n,t)},{})},e.exports=s},75861:function(e,t,n){var r=n(36870),i=n(57792).each;function o(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}o.prototype={constuctor:o,addHandler:function(e){var t=new r(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;i(t,function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){i(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";i(this.handlers,function(t){t[e]()})}},e.exports=o},66336:function(e,t,n){var r=n(75861),i=n(57792),o=i.each,a=i.isFunction,s=i.isArray;function l(){if(!window.matchMedia)throw Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(e,t,n){var i=this.queries,l=n&&this.browserIsIncapable;return i[e]||(i[e]=new r(e,l)),a(t)&&(t={match:t}),s(t)||(t=[t]),o(t,function(t){a(t)&&(t={match:t}),i[e].addHandler(t)}),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=l},36870:function(e){function t(e){this.options=e,e.deferSetup||this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){this.initialised||this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=t},57792:function(e){e.exports={isFunction:function(e){return"function"==typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}},2779:function(e,t,n){var r=n(66336);e.exports=new r},52533:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!=i--;){var r,i,o,a=o[i];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},73421:function(e,t,n){var r,i,o;i=[],void 0!==(o="function"==typeof(r=function(){"use strict";function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){s(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(e,n,a){var s=o.URL||o.webkitURL,l=document.createElement("a");n=n||e.name||"download",l.download=n,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):r(l.href)?t(e,n,a):i(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(l.href)},4e4),setTimeout(function(){i(l)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e){var a;navigator.msSaveOrOpenBlob((void 0===(a=o)?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),n)}else if(r(e))t(e,n,o);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout(function(){i(s)})}}:function(e,n,r,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var s="application/octet-stream"===e.type,l=/constructor/i.test(o.HTMLElement)||o.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||s&&l||a)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=d?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},c.readAsDataURL(e)}else{var u=o.URL||o.webkitURL,p=u.createObjectURL(e);i?i.location=p:location.href=p,i=null,setTimeout(function(){u.revokeObjectURL(p)},4e4)}});o.saveAs=s.saveAs=s,e.exports=s})?r.apply(t,i):r)&&(e.exports=o)},32045:function(e,t,n){var r=n(21485),i=function(e){var t="",n=Object.keys(e);return n.forEach(function(i,o){var a,s=e[i];a=i=r(i),/[height|width]$/.test(a)&&"number"==typeof s&&(s+="px"),!0===s?t+=i:!1===s?t+="not "+i:t+="("+i+": "+s+")",o<n.length-1&&(t+=" and ")}),t};e.exports=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,r){t+=i(n),r<e.length-1&&(t+=", ")}),t):i(e)}},2910:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(Error("Failed to load "+this.src),e)}}e.exports=function(e,n,r){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof n&&(r=n,n={}),n=n||{},r=r||function(){},o.type=n.type||"text/javascript",o.charset=n.charset||"utf8",o.async=!("async"in n)||!!n.async,o.src=e,n.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(o,n.attrs),n.text&&(o.text=""+n.text),("onload"in o?t:function(e,t){e.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,t(null,e))}})(o,r),o.onload||t(o,r),i.appendChild(o)}},22264:function(e,t,n){var r=0/0,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,u=d||c||Function("return this")(),p=Object.prototype.toString,h=Math.max,f=Math.min,m=function(){return u.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return r;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var d=a.test(e);return d||s.test(e)?l(e.slice(2),d?2:8):o.test(e)?r:+e}e.exports=function(e,t,n){var r,i,o,a,s,l,d=0,c=!1,u=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,d=t,a=e.apply(o,n)}function y(e){var n=e-l,r=e-d;return void 0===l||n>=t||n<0||u&&r>=o}function x(){var e,n,r,i=m();if(y(i))return w(i);s=setTimeout(x,(e=i-l,n=i-d,r=t-e,u?f(r,o-n):r))}function w(e){return(s=void 0,p&&r)?b(e):(r=i=void 0,a)}function _(){var e,n=m(),o=y(n);if(r=arguments,i=this,l=n,o){if(void 0===s)return d=e=l,s=setTimeout(x,t),c?b(e):a;if(u)return s=setTimeout(x,t),b(l)}return void 0===s&&(s=setTimeout(x,t)),a}return t=v(t)||0,g(n)&&(c=!!n.leading,o=(u="maxWait"in n)?h(v(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),_.cancel=function(){void 0!==s&&clearTimeout(s),d=0,r=l=i=s=void 0},_.flush=function(){return void 0===s?a:w(m())},_}},3691:function(e,t,n){!function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(t),o=r(n);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.includes(n)||({}).propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],u=function(e,t){var r,s=e.animationData,u=e.loop,p=e.autoplay,h=e.initialSegment,f=e.onComplete,m=e.onLoopComplete,g=e.onEnterFrame,v=e.onSegmentStart,b=e.onConfigReady,y=e.onDataReady,x=e.onDataFailed,w=e.onLoadedImages,_=e.onDOMLoaded,C=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var $=d(e,c),k=function(e){if(Array.isArray(e))return e}(r=n.useState(!1))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],l=!0,d=!1;try{for(o=(n=n.call(e)).next;!(l=(r=o.call(n)).done)&&(s.push(r.value),2!==s.length);l=!0);}catch(e){d=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(d)throw i}}return s}}(r,2)||function(e,t){if(e){if("string"==typeof e)return a(e,2);var n=({}).toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,2):void 0}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),S=k[0],j=k[1],E=n.useRef(),O=n.useRef(null),P=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(O.current){null===(t=E.current)||void 0===t||t.destroy();var r=l(l(l({},e),n),{},{container:O.current});return E.current=i.default.loadAnimation(r),j(!!E.current),function(){var e;null===(e=E.current)||void 0===e||e.destroy(),E.current=void 0}}};return n.useEffect(function(){var e=P();return function(){return null==e?void 0:e()}},[s,u]),n.useEffect(function(){E.current&&(E.current.autoplay=!!p)},[p]),n.useEffect(function(){if(E.current){if(!h){E.current.resetSegments(!0);return}Array.isArray(h)&&h.length&&((E.current.currentRawFrame<h[0]||E.current.currentRawFrame>h[1])&&(E.current.currentRawFrame=h[0]),E.current.setSegment(h[0],h[1]))}},[h]),n.useEffect(function(){var e=[{name:"complete",handler:f},{name:"loopComplete",handler:m},{name:"enterFrame",handler:g},{name:"segmentStart",handler:v},{name:"config_ready",handler:b},{name:"data_ready",handler:y},{name:"data_failed",handler:x},{name:"loaded_images",handler:w},{name:"DOMLoaded",handler:_},{name:"destroy",handler:C}].filter(function(e){return null!=e.handler});if(e.length){var t=e.map(function(e){var t;return null===(t=E.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=E.current)||void 0===t||t.removeEventListener(e.name,e.handler)}});return function(){t.forEach(function(e){return e()})}}},[f,m,g,v,b,y,x,w,_,C]),{View:o.default.createElement("div",l({style:t,ref:O},$)),play:function(){var e;null===(e=E.current)||void 0===e||e.play()},stop:function(){var e;null===(e=E.current)||void 0===e||e.stop()},pause:function(){var e;null===(e=E.current)||void 0===e||e.pause()},setSpeed:function(e){var t;null===(t=E.current)||void 0===t||t.setSpeed(e)},goToAndStop:function(e,t){var n;null===(n=E.current)||void 0===n||n.goToAndStop(e,t)},goToAndPlay:function(e,t){var n;null===(n=E.current)||void 0===n||n.goToAndPlay(e,t)},setDirection:function(e){var t;null===(t=E.current)||void 0===t||t.setDirection(e)},playSegments:function(e,t){var n;null===(n=E.current)||void 0===n||n.playSegments(e,t)},setSubframe:function(e){var t;null===(t=E.current)||void 0===t||t.setSubframe(e)},getDuration:function(e){var t;return null===(t=E.current)||void 0===t?void 0:t.getDuration(e)},destroy:function(){var e;null===(e=E.current)||void 0===e||e.destroy(),E.current=void 0},animationContainerRef:O,animationLoaded:S,animationItem:E.current}},p=function(e){var t=e.wrapperRef,r=e.animationItem,i=e.mode,o=e.actions;n.useEffect(function(){var e,n,a,s,l,d=t.current;if(d&&r&&o.length)switch(r.stop(),i){case"scroll":return e=null,n=function(){var t,n,i,a=(n=(t=d.getBoundingClientRect()).top,i=t.height,(window.innerHeight-n)/(window.innerHeight+i)),s=o.find(function(e){var t=e.visibility;return t&&a>=t[0]&&a<=t[1]});if(s){if("seek"===s.type&&s.visibility&&2===s.frames.length){var l=s.frames[0]+Math.ceil((a-s.visibility[0])/(s.visibility[1]-s.visibility[0])*s.frames[1]);r.goToAndStop(l-r.firstFrame-1,!0)}"loop"===s.type&&(null===e?(r.playSegments(s.frames,!0),e=s.frames):e!==s.frames?(r.playSegments(s.frames,!0),e=s.frames):r.isPaused&&(r.playSegments(s.frames,!0),e=s.frames)),"play"===s.type&&r.isPaused&&(r.resetSegments(!0),r.play()),"stop"===s.type&&r.goToAndStop(s.frames[0]-r.firstFrame-1,!0)}},document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)};case"cursor":return a=function(e,t){var n=e,i=t;if(-1!==n&&-1!==i){var a,s,l,c,u=(a=n,s=i,c=(l=d.getBoundingClientRect()).top,{x:(a-l.left)/l.width,y:(s-c)/l.height});n=u.x,i=u.y}var p=o.find(function(e){var t=e.position;return t&&Array.isArray(t.x)&&Array.isArray(t.y)?n>=t.x[0]&&n<=t.x[1]&&i>=t.y[0]&&i<=t.y[1]:!(!t||Number.isNaN(t.x)||Number.isNaN(t.y))&&n===t.x&&i===t.y});if(p){if("seek"===p.type&&p.position&&Array.isArray(p.position.x)&&Array.isArray(p.position.y)&&2===p.frames.length){var h=(n-p.position.x[0])/(p.position.x[1]-p.position.x[0]),f=(i-p.position.y[0])/(p.position.y[1]-p.position.y[0]);r.playSegments(p.frames,!0),r.goToAndStop(Math.ceil((h+f)/2*(p.frames[1]-p.frames[0])),!0)}"loop"===p.type&&r.playSegments(p.frames,!0),"play"===p.type&&(r.isPaused&&r.resetSegments(!1),r.playSegments(p.frames)),"stop"===p.type&&r.goToAndStop(p.frames[0],!0)}},s=function(e){a(e.clientX,e.clientY)},l=function(){a(-1,-1)},d.addEventListener("mousemove",s),d.addEventListener("mouseout",l),function(){d.removeEventListener("mousemove",s),d.removeEventListener("mouseout",l)}}},[i,r])},h=function(e){var t=e.actions,n=e.mode,r=e.lottieObj,i=r.animationItem,o=r.View;return p({actions:t,animationItem:i,mode:n,wrapperRef:r.animationContainerRef}),o},f=["style","interactivity"];Object.defineProperty(e,"LottiePlayer",{enumerable:!0,get:function(){return i.default}}),e.default=function(e){var t,r,i,o=e.style,a=e.interactivity,s=u(d(e,f),o),l=s.View,c=s.play,p=s.stop,m=s.pause,g=s.setSpeed,v=s.goToAndStop,b=s.goToAndPlay,y=s.setDirection,x=s.playSegments,w=s.setSubframe,_=s.getDuration,C=s.destroy,$=s.animationContainerRef,k=s.animationLoaded,S=s.animationItem;return n.useEffect(function(){e.lottieRef&&(e.lottieRef.current={play:c,stop:p,pause:m,setSpeed:g,goToAndPlay:b,goToAndStop:v,setDirection:y,playSegments:x,setSubframe:w,getDuration:_,destroy:C,animationContainerRef:$,animationLoaded:k,animationItem:S})},[null===(t=e.lottieRef)||void 0===t?void 0:t.current]),h({lottieObj:{View:l,play:c,stop:p,pause:m,setSpeed:g,goToAndStop:v,goToAndPlay:b,setDirection:y,playSegments:x,setSubframe:w,getDuration:_,destroy:C,animationContainerRef:$,animationLoaded:k,animationItem:S},actions:null!==(r=null==a?void 0:a.actions)&&void 0!==r?r:[],mode:null!==(i=null==a?void 0:a.mode)&&void 0!==i?i:"scroll"})},e.useLottie=u,e.useLottieInteractivity=h,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(44191),n(45113))},44542:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(45113);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:d="",children:c,iconNode:u,...p}=e;return(0,r.createElement)("svg",{ref:t,...a,width:i,height:i,stroke:n,strokeWidth:l?24*Number(s)/Number(i):s,className:o("lucide",d),...p},[...u.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),l=(e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:l,...d}=n;return(0,r.createElement)(s,{ref:a,iconNode:t,className:o("lucide-".concat(i(e)),l),...d})});return n.displayName="".concat(e),n}},16982:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]])},42765:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},98292:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]])},18593:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},19119:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},17287:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},14957:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},53481:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},93194:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},68656:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},16086:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]])},93689:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},7387:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},10789:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},42803:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("MoveRight",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]])},48173:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("NotebookText",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]])},13269:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]])},50698:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]])},93567:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]])},50973:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},95661:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]])},70340:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]])},58352:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]])},90793:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(44542).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},87569:function(e,t,n){"use strict";n.r(t);var r=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function i(e,t){if(e.length!==t.length)return!1;for(var n,i,o=0;o<e.length;o++)if(!((n=e[o])===(i=t[o])||r(n)&&r(i)))return!1;return!0}t.default=function(e,t){void 0===t&&(t=i);var n,r,o=[],a=!1;return function(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return a&&n===this&&t(i,o)||(r=e.apply(this,i),a=!0,n=this,o=i),r}}},91365:function(e){function t(e,t,n){return e<t?void 0:e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,n){n=n||{};var r=typeof e;if("string"===r&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*n;case"days":case"day":case"d":return 864e5*n;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*n;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*n;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}(e);if("number"===r&&!1===isNaN(e))return n.long?t(e,864e5,"day")||t(e,36e5,"hour")||t(e,6e4,"minute")||t(e,1e3,"second")||e+" ms":e>=864e5?Math.round(e/864e5)+"d":e>=36e5?Math.round(e/36e5)+"h":e>=6e4?Math.round(e/6e4)+"m":e>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},89640:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(5581),i=n.n(r)},95455:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92454:function(){},5581:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(44463);n(67251),n(45113);let i=r._(n(47002));function o(e,t){var n;let r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let o={...r,...t};return(0,i.default)({...o,modules:null==(n=o.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},11972:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let r=n(35237);function i(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},47002:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let r=n(67251),i=n(45113),o=n(11972),a=n(55714);function s(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},d=function(e){let t={...l,...e},n=(0,i.lazy)(()=>t.loader().then(s)),d=t.loading;function c(e){let s=d?(0,r.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(a.PreloadCss,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(i.Suspense,{fallback:s,children:l})}return c.displayName="LoadableComponent",c}},55714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return o}});let r=n(67251),i=n(59942);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,i.getExpectedRequestStore)("next/dynamic css"),o=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,r.jsx)(r.Fragment,{children:o.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},39118:function(e,t,n){"use strict";var r=n(92206);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},39063:function(e,t,n){e.exports=n(39118)()},92206:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},73975:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,o){try{return function e(o,a){if(o===a)return!0;if(o&&a&&"object"==typeof o&&"object"==typeof a){var s,l,d,c;if(o.constructor!==a.constructor)return!1;if(Array.isArray(o)){if((s=o.length)!=a.length)return!1;for(l=s;0!=l--;)if(!e(o[l],a[l]))return!1;return!0}if(n&&o instanceof Map&&a instanceof Map){if(o.size!==a.size)return!1;for(c=o.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;for(c=o.entries();!(l=c.next()).done;)if(!e(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&o instanceof Set&&a instanceof Set){if(o.size!==a.size)return!1;for(c=o.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(o)&&ArrayBuffer.isView(a)){if((s=o.length)!=a.length)return!1;for(l=s;0!=l--;)if(o[l]!==a[l])return!1;return!0}if(o.constructor===RegExp)return o.source===a.source&&o.flags===a.flags;if(o.valueOf!==Object.prototype.valueOf&&"function"==typeof o.valueOf&&"function"==typeof a.valueOf)return o.valueOf()===a.valueOf();if(o.toString!==Object.prototype.toString&&"function"==typeof o.toString&&"function"==typeof a.toString)return o.toString()===a.toString();if((s=(d=Object.keys(o)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,d[l]))return!1;if(t&&o instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==d[l]&&"__v"!==d[l]&&"__o"!==d[l]||!o.$$typeof)&&!e(o[d[l]],a[d[l]]))return!1;return!0}return o!=o&&a!=a}(e,o)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},1027:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(45113),i=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let o=r.forwardRef(function(e,t){let{style:n={},className:o="",autoFill:a=!1,play:s=!0,pauseOnHover:l=!1,pauseOnClick:d=!1,direction:c="left",speed:u=50,delay:p=0,loop:h=0,gradient:f=!1,gradientColor:m="white",gradientWidth:g=200,onFinish:v,onCycleComplete:b,onMount:y,children:x}=e,[w,_]=r.useState(0),[C,$]=r.useState(0),[k,S]=r.useState(1),[j,E]=r.useState(!1),O=r.useRef(null),P=t||O,N=r.useRef(null),M=r.useCallback(()=>{if(N.current&&P.current){let e=P.current.getBoundingClientRect(),t=N.current.getBoundingClientRect(),n=e.width,r=t.width;("up"===c||"down"===c)&&(n=e.height,r=t.height),a&&n&&r?S(r<n?Math.ceil(n/r):1):S(1),_(n),$(r)}},[a,P,c]);r.useEffect(()=>{if(j&&(M(),N.current&&P.current)){let e=new ResizeObserver(()=>M());return e.observe(P.current),e.observe(N.current),()=>{e&&e.disconnect()}}},[M,P,j]),r.useEffect(()=>{M()},[M,x]),r.useEffect(()=>{E(!0)},[]),r.useEffect(()=>{"function"==typeof y&&y()},[]);let T=r.useMemo(()=>a?C*k/u:C<w?w/u:C/u,[a,w,C,k,u]),L=r.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!s||l?"paused":"running","--pause-on-click":!s||l&&!d||d?"paused":"running","--width":"up"===c||"down"===c?"100vh":"100%","--transform":"up"===c?"rotate(-90deg)":"down"===c?"rotate(90deg)":"none"}),[n,s,l,d,c]),D=r.useMemo(()=>({"--gradient-color":m,"--gradient-width":"number"==typeof g?"".concat(g,"px"):g}),[m,g]),A=r.useMemo(()=>({"--play":s?"running":"paused","--direction":"left"===c?"normal":"reverse","--duration":"".concat(T,"s"),"--delay":"".concat(p,"s"),"--iteration-count":h?"".concat(h):"infinite","--min-width":a?"auto":"100%"}),[s,c,T,p,h,a]),I=r.useMemo(()=>({"--transform":"up"===c?"rotate(90deg)":"down"===c?"rotate(-90deg)":"none"}),[c]),B=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>i.default.createElement(r.Fragment,{key:t},r.Children.map(x,e=>i.default.createElement("div",{style:I,className:"rfm-child"},e)))),[I,x]);return j?i.default.createElement("div",{ref:P,style:L,className:"rfm-marquee-container "+o},f&&i.default.createElement("div",{style:D,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:A,onAnimationIteration:b,onAnimationEnd:v},i.default.createElement("div",{className:"rfm-initial-child-container",ref:N},r.Children.map(x,e=>i.default.createElement("div",{style:I,className:"rfm-child"},e))),B(k-1)),i.default.createElement("div",{className:"rfm-marquee",style:A},B(k))):null});t.default=o},69517:function(e,t,n){"use strict";t.Z=void 0;var r=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==g(e)&&"function"!=typeof e)return{default:e};var n=o(void 0);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(45113)),i=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function c(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=f(e);return n=t?Reflect.construct(r,arguments,f(this).constructor):r.apply(this,arguments),n&&("object"===g(n)||"function"==typeof n)?n:h(this)}}function h(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var v=function(e){return"object"===g(e)},b=function(e){c(n,e);var t=p(n);function n(e){var i;return s(this,n),m(h(i=t.call(this,e)),"getClasses",function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return!v(e)&&!1!==e}).join(" ")}),m(h(i),"getType",function(){var e=i.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"}),i.input=r.default.createRef(),i}return d(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,r=this.input.current;r&&t&&n&&r.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,o=e.isLastChild,s=e.inputStyle,l=e.focus,d=e.isDisabled,c=e.hasErrored,u=e.errorStyle,p=e.focusStyle,h=e.disabledStyle,f=(e.shouldAutoFocus,e.isInputNum),m=e.index,g=e.value,b=e.className,y=(e.isInputSecure,function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,i));return r.default.createElement("div",{className:b,style:{display:"flex",alignItems:"center"}},r.default.createElement("input",a({"aria-label":"".concat(0===m?"Please enter verification code. ":"").concat(f?"Digit":"Character"," ").concat(m+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},v(s)&&s,l&&v(p)&&p,d&&v(h)&&h,c&&v(u)&&u),placeholder:t,className:this.getClasses(s,l&&p,d&&h,c&&u),type:this.getType(),maxLength:"1",ref:this.input,disabled:d,value:g||""},y)),!o&&n)}}]),n}(r.PureComponent),y=function(e){c(n,e);var t=p(n);function n(){var e;s(this,n);for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];return m(h(e=t.call.apply(t,[this].concat(o))),"state",{activeInput:0}),m(h(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),m(h(e),"getPlaceholderValue",function(){var t=e.props,n=t.placeholder,r=t.numInputs;if("string"==typeof n){if(n.length===r)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),m(h(e),"handleOtpChange",function(t){(0,e.props.onChange)(t.join(""))}),m(h(e),"isInputValueValid",function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"==typeof t)&&1===t.trim().length}),m(h(e),"focusInput",function(t){var n=e.props.numInputs;e.setState({activeInput:Math.max(Math.min(n-1,t),0)})}),m(h(e),"focusNextInput",function(){var t=e.state.activeInput;e.focusInput(t+1)}),m(h(e),"focusPrevInput",function(){var t=e.state.activeInput;e.focusInput(t-1)}),m(h(e),"changeCodeAtFocus",function(t){var n=e.state.activeInput,r=e.getOtpValue();r[n]=t[0],e.handleOtpChange(r)}),m(h(e),"handleOnPaste",function(t){t.preventDefault();var n=e.state.activeInput,r=e.props,i=r.numInputs;if(!r.isDisabled){for(var o=e.getOtpValue(),a=n,s=t.clipboardData.getData("text/plain").slice(0,i-n).split(""),l=0;l<i;++l)l>=n&&s.length>0&&(o[l]=s.shift(),a++);e.setState({activeInput:a},function(){e.focusInput(a),e.handleOtpChange(o)})}}),m(h(e),"handleOnChange",function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)}),m(h(e),"handleOnKeyDown",function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):(32===t.keyCode||" "===t.key||"Spacebar"===t.key||"Space"===t.key)&&t.preventDefault()}),m(h(e),"handleOnInput",function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}),m(h(e),"renderInputs",function(){for(var t=e.state.activeInput,n=e.props,i=n.numInputs,o=n.inputStyle,a=n.focusStyle,s=n.separator,l=n.isDisabled,d=n.disabledStyle,c=n.hasErrored,u=n.errorStyle,p=n.shouldAutoFocus,h=n.isInputNum,f=n.isInputSecure,m=n.className,g=[],v=e.getOtpValue(),y=e.getPlaceholderValue(),x=e.props["data-cy"],w=e.props["data-testid"],_=function(n){g.push(r.default.createElement(b,{placeholder:y&&y[n],key:n,index:n,focus:t===n,value:v&&v[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:s,inputStyle:o,focusStyle:a,isLastChild:n===i-1,isDisabled:l,disabledStyle:d,hasErrored:c,errorStyle:u,shouldAutoFocus:p,isInputNum:h,isInputSecure:f,className:m,"data-cy":x&&"".concat(x,"-").concat(n),"data-testid":w&&"".concat(w,"-").concat(n)}))},C=0;C<i;C++)_(C);return g}),e}return d(n,[{key:"render",value:function(){var e=this.props.containerStyle;return r.default.createElement("div",{style:Object.assign({display:"flex"},v(e)&&e),className:v(e)?"":e},this.renderInputs())}}]),n}(r.Component);m(y,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1}),t.Z=y},90036:function(e,t,n){var r=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))l.call(e,s)||s===n||i(e,s,{get:()=>t[s],enumerable:!(r=o(t,s))||r.enumerable});return e},u=(e,t,n)=>(n=null!=e?r(s(e)):{},c(!t&&e&&e.__esModule?n:i(n,"default",{value:e,enumerable:!0}),e)),p=(e,t,n)=>(d(e,"symbol"!=typeof t?t+"":t,n),n),h={};((e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})})(h,{default:()=>b}),e.exports=c(i({},"__esModule",{value:!0}),h);var f=u(n(45113)),m=u(n(73975)),g=n(87437),v=n(63130);class b extends f.Component{constructor(){super(...arguments),p(this,"mounted",!1),p(this,"isReady",!1),p(this,"isPlaying",!1),p(this,"isLoading",!0),p(this,"loadOnReady",null),p(this,"startOnPlay",!0),p(this,"seekOnPlay",null),p(this,"onDurationCalled",!1),p(this,"handlePlayerMount",e=>{if(this.player){this.progress();return}this.player=e,this.player.load(this.props.url),this.progress()}),p(this,"getInternalPlayer",e=>this.player?this.player[e]:null),p(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){let e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),n=this.getDuration();if(n){let r={playedSeconds:e,played:e/n};null!==t&&(r.loadedSeconds=t,r.loaded=t/n),(r.playedSeconds!==this.prevPlayed||r.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(r),this.prevPlayed=r.playedSeconds,this.prevLoaded=r.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),p(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;let{onReady:e,playing:t,volume:n,muted:r}=this.props;e(),r||null===n||this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()}),p(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;let{onStart:e,onPlay:t,playbackRate:n}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==n&&this.player.setPlaybackRate(n),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),p(this,"handlePause",e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)}),p(this,"handleEnded",()=>{let{activePlayer:e,loop:t,onEnded:n}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,n())}),p(this,"handleError",(...e)=>{this.isLoading=!1,this.props.onError(...e)}),p(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),p(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;let{url:t,playing:n,volume:r,muted:i,playbackRate:o,pip:a,loop:s,activePlayer:l,disableDeferredLoading:d}=this.props;if(!(0,m.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!d&&!(0,v.isMediaStream)(t)){console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),this.loadOnReady=t;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!n||this.isPlaying||this.player.play(),e.playing&&!n&&this.isPlaying&&this.player.pause(),!e.pip&&a&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!a&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==r&&null!==r&&this.player.setVolume(r),e.muted!==i&&(i?this.player.mute():(this.player.unmute(),null!==r&&setTimeout(()=>this.player.setVolume(r)))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,n){if(!this.isReady){0!==e&&(this.seekOnPlay=e,setTimeout(()=>{this.seekOnPlay=null},5e3));return}if(t?"fraction"===t:e>0&&e<1){let t=this.player.getDuration();if(!t){console.warn("ReactPlayer: could not seek using fraction –\xa0duration not yet available");return}this.player.seekTo(t*e,n);return}this.player.seekTo(e,n)}render(){let e=this.props.activePlayer;return e?f.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}p(b,"displayName","Player"),p(b,"propTypes",g.propTypes),p(b,"defaultProps",g.defaultProps)},18138:function(e,t,n){var r=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))l.call(e,s)||s===n||i(e,s,{get:()=>t[s],enumerable:!(r=o(t,s))||r.enumerable});return e},u=(e,t,n)=>(n=null!=e?r(s(e)):{},c(!t&&e&&e.__esModule?n:i(n,"default",{value:e,enumerable:!0}),e)),p=(e,t,n)=>(d(e,"symbol"!=typeof t?t+"":t,n),n),h={};((e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})})(h,{createReactPlayer:()=>j}),e.exports=c(i({},"__esModule",{value:!0}),h);var f=u(n(45113)),m=u(n(81503)),g=u(n(87569)),v=u(n(73975)),b=n(87437),y=n(63130),x=u(n(90036));let w=(0,y.lazy)(()=>n.e(7664).then(n.t.bind(n,81402,23))),_="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,C=void 0!==n.g&&n.g.window&&n.g.window.document,$=Object.keys(b.propTypes),k=_||C?f.Suspense:()=>null,S=[],j=(e,t)=>{var n;return n=class extends f.Component{constructor(){super(...arguments),p(this,"state",{showPreview:!!this.props.light}),p(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),p(this,"handleClickPreview",e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)}),p(this,"showPreview",()=>{this.setState({showPreview:!0})}),p(this,"getDuration",()=>this.player?this.player.getDuration():null),p(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),p(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),p(this,"getInternalPlayer",(e="player")=>this.player?this.player.getInternalPlayer(e):null),p(this,"seekTo",(e,t,n)=>{if(!this.player)return null;this.player.seekTo(e,t,n)}),p(this,"handleReady",()=>{this.props.onReady(this)}),p(this,"getActivePlayer",(0,g.default)(n=>{for(let t of[...S,...e])if(t.canPlay(n))return t;return t||null})),p(this,"getConfig",(0,g.default)((e,t)=>{let{config:n}=this.props;return m.default.all([b.defaultProps.config,b.defaultProps.config[t]||{},n,n[t]||{}])})),p(this,"getAttributes",(0,g.default)(e=>(0,y.omit)(this.props,$))),p(this,"renderActivePlayer",e=>{if(!e)return null;let t=this.getActivePlayer(e);if(!t)return null;let n=this.getConfig(e,t.key);return f.default.createElement(x.default,{...this.props,key:t.key,ref:this.references.player,config:n,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})})}shouldComponentUpdate(e,t){return!(0,v.default)(this.props,e)||!(0,v.default)(this.state,t)}componentDidUpdate(e){let{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;let{light:t,playIcon:n,previewTabIndex:r,oEmbedUrl:i,previewAriaLabel:o}=this.props;return f.default.createElement(w,{url:e,light:t,playIcon:n,previewTabIndex:r,previewAriaLabel:o,oEmbedUrl:i,onClick:this.handleClickPreview})}render(){let{url:e,style:t,width:n,height:r,fallback:i,wrapper:o}=this.props,{showPreview:a}=this.state,s=this.getAttributes(e),l="string"==typeof o?this.references.wrapper:void 0;return f.default.createElement(o,{ref:l,style:{...t,width:n,height:r},...s},f.default.createElement(k,{fallback:i},a?this.renderPreview(e):this.renderActivePlayer(e)))}},p(n,"displayName","ReactPlayer"),p(n,"propTypes",b.propTypes),p(n,"defaultProps",b.defaultProps),p(n,"addCustomPlayer",e=>{S.push(e)}),p(n,"removeCustomPlayers",()=>{S.length=0}),p(n,"canPlay",t=>{for(let n of[...S,...e])if(n.canPlay(t))return!0;return!1}),p(n,"canEnablePIP",t=>{for(let n of[...S,...e])if(n.canEnablePIP&&n.canEnablePIP(t))return!0;return!1}),n}},8160:function(e,t,n){let r,i,o;var a=Object.create,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,c=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of d(t))u.call(e,i)||i===n||s(e,i,{get:()=>t[i],enumerable:!(r=l(t,i))||r.enumerable});return e},h={};((e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})})(h,{default:()=>v}),e.exports=p(s({},"__esModule",{value:!0}),h);var f=(o=null!=(r=n(7986))?a(c(r)):{},p(!i&&r&&r.__esModule?o:s(o,"default",{value:r,enumerable:!0}),r)),m=n(18138);let g=f.default[f.default.length-1];var v=(0,m.createReactPlayer)(f.default,g)},30054:function(e,t,n){var r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,s={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(s,{AUDIO_EXTENSIONS:()=>C,DASH_EXTENSIONS:()=>S,FLV_EXTENSIONS:()=>j,HLS_EXTENSIONS:()=>k,MATCH_URL_DAILYMOTION:()=>y,MATCH_URL_FACEBOOK:()=>h,MATCH_URL_FACEBOOK_WATCH:()=>f,MATCH_URL_KALTURA:()=>_,MATCH_URL_MIXCLOUD:()=>x,MATCH_URL_MUX:()=>p,MATCH_URL_SOUNDCLOUD:()=>c,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>b,MATCH_URL_TWITCH_VIDEO:()=>v,MATCH_URL_VIDYARD:()=>w,MATCH_URL_VIMEO:()=>u,MATCH_URL_WISTIA:()=>g,MATCH_URL_YOUTUBE:()=>d,VIDEO_EXTENSIONS:()=>$,canPlay:()=>O}),e.exports=((e,t,n,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))a.call(e,l)||l===n||r(e,l,{get:()=>t[l],enumerable:!(s=i(t,l))||s.enumerable});return e})(r({},"__esModule",{value:!0}),s);var l=n(63130);let d=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,c=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,u=/vimeo\.com\/(?!progressive_redirect).+/,p=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,h=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,f=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,g=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,v=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,b=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,y=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,x=/mixcloud\.com\/([^/]+\/[^/]+)/,w=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,_=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,C=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,$=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,k=/\.(m3u8)($|\?)/i,S=/\.(mpd)($|\?)/i,j=/\.(flv)($|\?)/i,E=e=>{if(e instanceof Array){for(let t of e)if("string"==typeof t&&E(t)||E(t.src))return!0;return!1}return!!((0,l.isMediaStream)(e)||(0,l.isBlobUrl)(e))||C.test(e)||$.test(e)||k.test(e)||S.test(e)||j.test(e)},O={youtube:e=>e instanceof Array?e.every(e=>d.test(e)):d.test(e),soundcloud:e=>c.test(e)&&!C.test(e),vimeo:e=>u.test(e)&&!$.test(e)&&!k.test(e),mux:e=>p.test(e),facebook:e=>h.test(e)||f.test(e),streamable:e=>m.test(e),wistia:e=>g.test(e),twitch:e=>v.test(e)||b.test(e),dailymotion:e=>y.test(e),mixcloud:e=>x.test(e),vidyard:e=>w.test(e),kaltura:e=>_.test(e),file:E}},7986:function(e,t,n){var r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,s={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(s,{default:()=>c}),e.exports=((e,t,n,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))a.call(e,l)||l===n||r(e,l,{get:()=>t[l],enumerable:!(s=i(t,l))||s.enumerable});return e})(r({},"__esModule",{value:!0}),s);var l=n(63130),d=n(30054),c=[{key:"youtube",name:"YouTube",canPlay:d.canPlay.youtube,lazyPlayer:(0,l.lazy)(()=>n.e(4439).then(n.t.bind(n,80932,23)))},{key:"soundcloud",name:"SoundCloud",canPlay:d.canPlay.soundcloud,lazyPlayer:(0,l.lazy)(()=>n.e(6125).then(n.t.bind(n,14058,23)))},{key:"vimeo",name:"Vimeo",canPlay:d.canPlay.vimeo,lazyPlayer:(0,l.lazy)(()=>n.e(3743).then(n.t.bind(n,76126,23)))},{key:"mux",name:"Mux",canPlay:d.canPlay.mux,lazyPlayer:(0,l.lazy)(()=>n.e(4258).then(n.t.bind(n,39145,23)))},{key:"facebook",name:"Facebook",canPlay:d.canPlay.facebook,lazyPlayer:(0,l.lazy)(()=>n.e(2121).then(n.t.bind(n,27541,23)))},{key:"streamable",name:"Streamable",canPlay:d.canPlay.streamable,lazyPlayer:(0,l.lazy)(()=>n.e(2546).then(n.t.bind(n,89659,23)))},{key:"wistia",name:"Wistia",canPlay:d.canPlay.wistia,lazyPlayer:(0,l.lazy)(()=>n.e(8055).then(n.t.bind(n,99355,23)))},{key:"twitch",name:"Twitch",canPlay:d.canPlay.twitch,lazyPlayer:(0,l.lazy)(()=>n.e(6216).then(n.t.bind(n,65666,23)))},{key:"dailymotion",name:"DailyMotion",canPlay:d.canPlay.dailymotion,lazyPlayer:(0,l.lazy)(()=>n.e(7596).then(n.t.bind(n,83158,23)))},{key:"mixcloud",name:"Mixcloud",canPlay:d.canPlay.mixcloud,lazyPlayer:(0,l.lazy)(()=>n.e(4667).then(n.t.bind(n,57218,23)))},{key:"vidyard",name:"Vidyard",canPlay:d.canPlay.vidyard,lazyPlayer:(0,l.lazy)(()=>n.e(8888).then(n.t.bind(n,2880,23)))},{key:"kaltura",name:"Kaltura",canPlay:d.canPlay.kaltura,lazyPlayer:(0,l.lazy)(()=>n.e(261).then(n.t.bind(n,89847,23)))},{key:"file",name:"FilePlayer",canPlay:d.canPlay.file,canEnablePIP:e=>d.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,l.supportsWebKitPresentationMode)())&&!d.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,l.lazy)(()=>n.e(6011).then(n.t.bind(n,26242,23)))}]},87437:function(e,t,n){let r,i,o;var a=Object.create,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,c=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of d(t))u.call(e,i)||i===n||s(e,i,{get:()=>t[i],enumerable:!(r=l(t,i))||r.enumerable});return e},h={};((e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})})(h,{defaultProps:()=>k,propTypes:()=>C}),e.exports=p(s({},"__esModule",{value:!0}),h);let{string:f,bool:m,number:g,array:v,oneOfType:b,shape:y,object:x,func:w,node:_}=(o=null!=(r=n(39063))?a(c(r)):{},p(!i&&r&&r.__esModule?o:s(o,"default",{value:r,enumerable:!0}),r)).default,C={url:b([f,v,x]),playing:m,loop:m,controls:m,volume:g,muted:m,playbackRate:g,width:b([f,g]),height:b([f,g]),style:x,progressInterval:g,playsinline:m,pip:m,stopOnUnmount:m,light:b([m,f,x]),playIcon:_,previewTabIndex:g,previewAriaLabel:f,fallback:_,oEmbedUrl:f,wrapper:b([f,w,y({render:w.isRequired})]),config:y({soundcloud:y({options:x}),youtube:y({playerVars:x,embedOptions:x,onUnstarted:w}),facebook:y({appId:f,version:f,playerId:f,attributes:x}),dailymotion:y({params:x}),vimeo:y({playerOptions:x,title:f}),mux:y({attributes:x,version:f}),file:y({attributes:x,tracks:v,forceVideo:m,forceAudio:m,forceHLS:m,forceSafariHLS:m,forceDisableHls:m,forceDASH:m,forceFLV:m,hlsOptions:x,hlsVersion:f,dashVersion:f,flvVersion:f}),wistia:y({options:x,playerId:f,customControls:v}),mixcloud:y({options:x}),twitch:y({options:x,playerId:f}),vidyard:y({options:x})}),onReady:w,onStart:w,onPlay:w,onPause:w,onBuffer:w,onBufferEnd:w,onEnded:w,onError:w,onDuration:w,onSeek:w,onPlaybackRateChange:w,onPlaybackQualityChange:w,onProgress:w,onClickPreview:w,onEnablePIP:w,onDisablePIP:w},$=()=>{},k={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:$},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:$,onStart:$,onPlay:$,onPause:$,onBuffer:$,onBufferEnd:$,onEnded:$,onError:$,onDuration:$,onSeek:$,onPlaybackRateChange:$,onPlaybackQualityChange:$,onProgress:$,onClickPreview:$,onEnablePIP:$,onDisablePIP:$}},63130:function(e,t,n){var r=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))l.call(e,s)||s===n||i(e,s,{get:()=>t[s],enumerable:!(r=o(t,s))||r.enumerable});return e},c=(e,t,n)=>(n=null!=e?r(s(e)):{},d(!t&&e&&e.__esModule?n:i(n,"default",{value:e,enumerable:!0}),e)),u={};((e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})})(u,{callPlayer:()=>P,getConfig:()=>E,getSDK:()=>j,isBlobUrl:()=>M,isMediaStream:()=>N,lazy:()=>m,omit:()=>O,parseEndTime:()=>_,parseStartTime:()=>w,queryString:()=>$,randomString:()=>C,supportsWebKitPresentationMode:()=>T}),e.exports=d(i({},"__esModule",{value:!0}),u);var p=c(n(45113)),h=c(n(2910)),f=c(n(81503));let m=e=>p.default.lazy(async()=>{let t=await e();return"function"==typeof t.default?t:t.default}),g=/[?&#](?:start|t)=([0-9hms]+)/,v=/[?&#]end=([0-9hms]+)/,b=/(\d+)(h|m|s)/g,y=/^\d+$/;function x(e,t){if(e instanceof Array)return;let n=e.match(t);if(n){let e=n[1];if(e.match(b))return function(e){let t=0,n=b.exec(e);for(;null!==n;){let[,r,i]=n;"h"===i&&(t+=3600*parseInt(r,10)),"m"===i&&(t+=60*parseInt(r,10)),"s"===i&&(t+=parseInt(r,10)),n=b.exec(e)}return t}(e);if(y.test(e))return parseInt(e)}}function w(e){return x(e,g)}function _(e){return x(e,v)}function C(){return Math.random().toString(36).substr(2,5)}function $(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function k(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}let S={},j=function(e,t,n=null,r=()=>!0,i=h.default){let o=k(t);return o&&r(o)?Promise.resolve(o):new Promise((r,o)=>{if(S[e]){S[e].push({resolve:r,reject:o});return}S[e]=[{resolve:r,reject:o}];let a=t=>{S[e].forEach(e=>e.resolve(t))};if(n){let e=window[n];window[n]=function(){e&&e(),a(k(t))}}i(e,r=>{r?(S[e].forEach(e=>e.reject(r)),S[e]=null):n||a(k(t))})})};function E(e,t){return(0,f.default)(t.config,e.config)}function O(e,...t){let n=[].concat(...t),r={};for(let t of Object.keys(e))-1===n.indexOf(t)&&(r[t]=e[t]);return r}function P(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function N(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function M(e){return/^blob:/.test(e)}function T(e=document.createElement("video")){let t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},71691:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PrevArrow=t.NextArrow=void 0;var i=s(n(45113)),o=s(n(23706)),a=n(93683);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=f(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function h(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function m(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=b();return function(){var n,i=y(e);return n=t?Reflect.construct(i,arguments,y(this).constructor):i.apply(this,arguments),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(b=function(){return!!e})()}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.PrevArrow=function(e){m(n,e);var t=v(n);function n(){return u(this,n),t.apply(this,arguments)}return h(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,o.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?i.default.cloneElement(this.props.prevArrow,c(c({},n),r)):i.default.createElement("button",l({key:"0",type:"button"},n)," ","Previous")}}]),n}(i.default.PureComponent),t.NextArrow=function(e){m(n,e);var t=v(n);function n(){return u(this,n),t.apply(this,arguments)}return h(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,a.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,o.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?i.default.cloneElement(this.props.nextArrow,c(c({},n),r)):i.default.createElement("button",l({key:"1",type:"button"},n)," ","Next")}}]),n}(i.default.PureComponent)},14687:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(45113))&&r.__esModule?r:{default:r};t.default={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return i.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return i.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null,unslick:!1}},3080:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Dots=void 0;var i=s(n(45113)),o=s(n(23706)),a=n(93683);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function c(e,t){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function u(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(u=function(){return!!e})()}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.Dots=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(h,e);var t,n,s=(t=u(),function(){var e,n=p(h);return e=t?Reflect.construct(n,arguments,p(this).constructor):n.apply(this,arguments),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function h(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,h),s.apply(this,arguments)}return n=[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,r=t.onMouseOver,s=t.onMouseLeave,c=t.infinite,u=t.slidesToScroll,p=t.slidesToShow,h=t.slideCount,f=t.currentSlide,m=(e={slideCount:h,slidesToScroll:u,slidesToShow:p,infinite:c}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,g=[],v=0;v<m;v++){var b=(v+1)*u-1,y=c?b:(0,a.clamp)(b,0,h-1),x=y-(u-1),w=c?x:(0,a.clamp)(x,0,h-1),_=(0,o.default)({"slick-active":c?f>=w&&f<=y:f===w}),C={message:"dots",index:v,slidesToScroll:u,currentSlide:f},$=this.clickHandler.bind(this,C);g=g.concat(i.default.createElement("li",{key:v,className:_},i.default.cloneElement(this.props.customPaging(v),{onClick:$})))}return i.default.cloneElement(this.props.appendDots(g),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=d(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({className:this.props.dotsClass},{onMouseEnter:n,onMouseOver:r,onMouseLeave:s}))}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}(h.prototype,n),Object.defineProperty(h,"prototype",{writable:!1}),h}(i.default.PureComponent)},29791:function(e,t,n){"use strict";t.Z=void 0;var r,i=(r=n(95822))&&r.__esModule?r:{default:r};t.Z=i.default},74544:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0}},36147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InnerSlider=void 0;var r=p(n(45113)),i=p(n(74544)),o=p(n(22264)),a=p(n(23706)),s=n(93683),l=n(59828),d=n(3080),c=n(71691),u=p(n(9299));function p(e){return e&&e.__esModule?e:{default:e}}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){w(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(e,t){return(v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(y=function(){return!!e})()}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return(t=_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=h(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==h(t)?t:String(t)}t.InnerSlider=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(m,e);var t,n,p=(t=y(),function(){var e,n=x(m);return e=t?Reflect.construct(n,arguments,x(this).constructor):n.apply(this,arguments),function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return b(e)}(this,e)});function m(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,m),w(b(t=p.call(this,e)),"listRefHandler",function(e){return t.list=e}),w(b(t),"trackRefHandler",function(e){return t.track=e}),w(b(t),"adaptHeight",function(){if(t.props.adaptiveHeight&&t.list){var e=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,s.getHeight)(e)+"px"}}),w(b(t),"componentDidMount",function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var e=(0,s.getOnDemandLazySlides)(g(g({},t.props),t.state));e.length>0&&(t.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),t.props.onLazyLoad&&t.props.onLazyLoad(e))}var n=g({listRef:t.list,trackRef:t.track},t.props);t.updateState(n,!0,function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")}),"progressive"===t.props.lazyLoad&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new u.default(function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout(function(){return t.onWindowResized()},t.props.speed))):t.onWindowResized()}),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(e){e.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,e.onblur=t.props.pauseOnFocus?t.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)}),w(b(t),"componentWillUnmount",function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach(function(e){return clearTimeout(e)}),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()}),w(b(t),"componentDidUpdate",function(e){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var n=(0,s.getOnDemandLazySlides)(g(g({},t.props),t.state));n.length>0&&(t.setState(function(e){return{lazyLoadedList:e.lazyLoadedList.concat(n)}}),t.props.onLazyLoad&&t.props.onLazyLoad(n))}t.adaptHeight();var i=g(g({listRef:t.list,trackRef:t.track},t.props),t.state),o=t.didPropsChange(e);o&&t.updateState(i,o,function(){t.state.currentSlide>=r.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:r.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")})}),w(b(t),"onWindowResized",function(e){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,o.default)(function(){return t.resizeWindow(e)},50),t.debouncedResize()}),w(b(t),"resizeWindow",function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];if(t.track&&t.track.node){var n=g(g({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(n,e,function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")}),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}}),w(b(t),"updateState",function(e,n,i){var o=(0,s.initializedState)(e);e=g(g(g({},e),o),{},{slideIndex:o.currentSlide});var a=(0,s.getTrackLeft)(e);e=g(g({},e),{},{left:a});var l=(0,s.getTrackCSS)(e);(n||r.default.Children.count(t.props.children)!==r.default.Children.count(e.children))&&(o.trackStyle=l),t.setState(o,i)}),w(b(t),"ssrInit",function(){if(t.props.variableWidth){var e=0,n=0,i=[],o=(0,s.getPreClones)(g(g(g({},t.props),t.state),{},{slideCount:t.props.children.length})),a=(0,s.getPostClones)(g(g(g({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach(function(t){i.push(t.props.style.width),e+=t.props.style.width});for(var l=0;l<o;l++)n+=i[i.length-1-l],e+=i[i.length-1-l];for(var d=0;d<a;d++)e+=i[d];for(var c=0;c<t.state.currentSlide;c++)n+=i[c];var u={width:e+"px",left:-n+"px"};if(t.props.centerMode){var p="".concat(i[t.state.currentSlide],"px");u.left="calc(".concat(u.left," + (100% - ").concat(p,") / 2 ) ")}return{trackStyle:u}}var h=r.default.Children.count(t.props.children),f=g(g(g({},t.props),t.state),{},{slideCount:h}),m=(0,s.getPreClones)(f)+(0,s.getPostClones)(f)+h,v=100/t.props.slidesToShow*m,b=100/m,y=-b*((0,s.getPreClones)(f)+t.state.currentSlide)*v/100;return t.props.centerMode&&(y+=(100-b*v/100)/2),{slideWidth:b+"%",trackStyle:{width:v+"%",left:y+"%"}}}),w(b(t),"checkImagesLoad",function(){var e=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],n=e.length,r=0;Array.prototype.forEach.call(e,function(e){var i=function(){return++r&&r>=n&&t.onWindowResized()};if(e.onclick){var o=e.onclick;e.onclick=function(t){o(t),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(t.props.lazyLoad?e.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(e.onload=i,e.onerror=function(){i(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))})}),w(b(t),"progressiveLazyLoad",function(){for(var e=[],n=g(g({},t.props),t.state),r=t.state.currentSlide;r<t.state.slideCount+(0,s.getPostClones)(n);r++)if(0>t.state.lazyLoadedList.indexOf(r)){e.push(r);break}for(var i=t.state.currentSlide-1;i>=-(0,s.getPreClones)(n);i--)if(0>t.state.lazyLoadedList.indexOf(i)){e.push(i);break}e.length>0?(t.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),t.props.onLazyLoad&&t.props.onLazyLoad(e)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)}),w(b(t),"slideHandler",function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.props,i=r.asNavFor,o=r.beforeChange,a=r.onLazyLoad,l=r.speed,d=r.afterChange,c=t.state.currentSlide,u=(0,s.slideHandler)(g(g(g({index:e},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!n})),p=u.state,h=u.nextState;if(p){o&&o(c,p.currentSlide);var f=p.lazyLoadedList.filter(function(e){return 0>t.state.lazyLoadedList.indexOf(e)});a&&f.length>0&&a(f),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),d&&d(c),delete t.animationEndCallback),t.setState(p,function(){i&&t.asNavForIndex!==e&&(t.asNavForIndex=e,i.innerSlider.slideHandler(e)),h&&(t.animationEndCallback=setTimeout(function(){var e=h.animating,n=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(h,["animating"]);t.setState(n,function(){t.callbackTimers.push(setTimeout(function(){return t.setState({animating:e})},10)),d&&d(p.currentSlide),delete t.animationEndCallback})},l))})}}),w(b(t),"changeSlide",function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=g(g({},t.props),t.state),i=(0,s.changeSlide)(r,e);if((0===i||i)&&(!0===n?t.slideHandler(i,n):t.slideHandler(i),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var o=t.list.querySelectorAll(".slick-current");o[0]&&o[0].focus()}}),w(b(t),"clickHandler",function(e){!1===t.clickable&&(e.stopPropagation(),e.preventDefault()),t.clickable=!0}),w(b(t),"keyHandler",function(e){var n=(0,s.keyHandler)(e,t.props.accessibility,t.props.rtl);""!==n&&t.changeSlide({message:n})}),w(b(t),"selectHandler",function(e){t.changeSlide(e)}),w(b(t),"disableBodyScroll",function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}}),w(b(t),"enableBodyScroll",function(){window.ontouchmove=null}),w(b(t),"swipeStart",function(e){t.props.verticalSwiping&&t.disableBodyScroll();var n=(0,s.swipeStart)(e,t.props.swipe,t.props.draggable);""!==n&&t.setState(n)}),w(b(t),"swipeMove",function(e){var n=(0,s.swipeMove)(e,g(g(g({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));n&&(n.swiping&&(t.clickable=!1),t.setState(n))}),w(b(t),"swipeEnd",function(e){var n=(0,s.swipeEnd)(e,g(g(g({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(n){var r=n.triggerSlideHandler;delete n.triggerSlideHandler,t.setState(n),void 0!==r&&(t.slideHandler(r),t.props.verticalSwiping&&t.enableBodyScroll())}}),w(b(t),"touchEnd",function(e){t.swipeEnd(e),t.clickable=!0}),w(b(t),"slickPrev",function(){t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"previous"})},0))}),w(b(t),"slickNext",function(){t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"next"})},0))}),w(b(t),"slickGoTo",function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(isNaN(e=Number(e)))return"";t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"index",index:e,currentSlide:t.state.currentSlide},n)},0))}),w(b(t),"play",function(){var e;if(t.props.rtl)e=t.state.currentSlide-t.props.slidesToScroll;else{if(!(0,s.canGoNext)(g(g({},t.props),t.state)))return!1;e=t.state.currentSlide+t.props.slidesToScroll}t.slideHandler(e)}),w(b(t),"autoPlay",function(e){t.autoplayTimer&&clearInterval(t.autoplayTimer);var n=t.state.autoplaying;if("update"===e){if("hovered"===n||"focused"===n||"paused"===n)return}else if("leave"===e){if("paused"===n||"focused"===n)return}else if("blur"===e&&("paused"===n||"hovered"===n))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})}),w(b(t),"pause",function(e){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var n=t.state.autoplaying;"paused"===e?t.setState({autoplaying:"paused"}):"focused"===e?("hovered"===n||"playing"===n)&&t.setState({autoplaying:"focused"}):"playing"===n&&t.setState({autoplaying:"hovered"})}),w(b(t),"onDotsOver",function(){return t.props.autoplay&&t.pause("hovered")}),w(b(t),"onDotsLeave",function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")}),w(b(t),"onTrackOver",function(){return t.props.autoplay&&t.pause("hovered")}),w(b(t),"onTrackLeave",function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")}),w(b(t),"onSlideFocus",function(){return t.props.autoplay&&t.pause("focused")}),w(b(t),"onSlideBlur",function(){return t.props.autoplay&&"focused"===t.state.autoplaying&&t.autoPlay("blur")}),w(b(t),"render",function(){var e,n,i,o=(0,a.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),u=g(g({},t.props),t.state),p=(0,s.extractObject)(u,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),h=t.props.pauseOnHover;if(p=g(g({},p),{},{onMouseEnter:h?t.onTrackOver:null,onMouseLeave:h?t.onTrackLeave:null,onMouseOver:h?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null}),!0===t.props.dots&&t.state.slideCount>=t.props.slidesToShow){var m=(0,s.extractObject)(u,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),v=t.props.pauseOnDotsHover;m=g(g({},m),{},{clickHandler:t.changeSlide,onMouseEnter:v?t.onDotsLeave:null,onMouseOver:v?t.onDotsOver:null,onMouseLeave:v?t.onDotsLeave:null}),e=r.default.createElement(d.Dots,m)}var b=(0,s.extractObject)(u,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);b.clickHandler=t.changeSlide,t.props.arrows&&(n=r.default.createElement(c.PrevArrow,b),i=r.default.createElement(c.NextArrow,b));var y=null;t.props.vertical&&(y={height:t.state.listHeight});var x=null;!1===t.props.vertical?!0===t.props.centerMode&&(x={padding:"0px "+t.props.centerPadding}):!0===t.props.centerMode&&(x={padding:t.props.centerPadding+" 0px"});var w=g(g({},y),x),_=t.props.touchMove,C={className:"slick-list",style:w,onClick:t.clickHandler,onMouseDown:_?t.swipeStart:null,onMouseMove:t.state.dragging&&_?t.swipeMove:null,onMouseUp:_?t.swipeEnd:null,onMouseLeave:t.state.dragging&&_?t.swipeEnd:null,onTouchStart:_?t.swipeStart:null,onTouchMove:t.state.dragging&&_?t.swipeMove:null,onTouchEnd:_?t.touchEnd:null,onTouchCancel:t.state.dragging&&_?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},$={className:o,dir:"ltr",style:t.props.style};return t.props.unslick&&(C={className:"slick-list"},$={className:o}),r.default.createElement("div",$,t.props.unslick?"":n,r.default.createElement("div",f({ref:t.listRefHandler},C),r.default.createElement(l.Track,f({ref:t.trackRefHandler},p),t.props.children)),t.props.unslick?"":i,t.props.unslick?"":e)}),t.list=null,t.track=null,t.state=g(g({},i.default),{},{currentSlide:t.props.initialSlide,targetSlide:t.props.initialSlide?t.props.initialSlide:0,slideCount:r.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var t,n=t.ssrInit();return t.state=g(g({},t.state),n),t}return n=[{key:"didPropsChange",value:function(e){for(var t=!1,n=0,i=Object.keys(this.props);n<i.length;n++){var o=i[n];if(!e.hasOwnProperty(o)||!("object"===h(e[o])||"function"==typeof e[o]||isNaN(e[o]))&&e[o]!==this.props[o]){t=!0;break}}return t||r.default.Children.count(this.props.children)!==r.default.Children.count(e.children)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}(m.prototype,n),Object.defineProperty(m,"prototype",{writable:!1}),m}(r.default.Component)},95822:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(45113)),i=n(36147),o=l(n(32045)),a=l(n(14687)),s=n(93683);function l(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){v(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function h(e,t){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(m=function(){return!!e})()}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=d(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==d(t)?t:String(t)}var y=(0,s.canUseDOM)()&&n(2779);t.default=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,l=(t=m(),function(){var e,n=g(u);return e=t?Reflect.construct(n,arguments,g(this).constructor):n.apply(this,arguments),function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function u(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,u),v(f(t=l.call(this,e)),"innerSliderRefHandler",function(e){return t.innerSlider=e}),v(f(t),"slickPrev",function(){return t.innerSlider.slickPrev()}),v(f(t),"slickNext",function(){return t.innerSlider.slickNext()}),v(f(t),"slickGoTo",function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.innerSlider.slickGoTo(e,n)}),v(f(t),"slickPause",function(){return t.innerSlider.pause("paused")}),v(f(t),"slickPlay",function(){return t.innerSlider.autoPlay("play")}),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return n=[{key:"media",value:function(e,t){y.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map(function(e){return e.breakpoint});t.sort(function(e,t){return e-t}),t.forEach(function(n,r){var i;i=0===r?(0,o.default)({minWidth:0,maxWidth:n}):(0,o.default)({minWidth:t[r-1]+1,maxWidth:n}),(0,s.canUseDOM)()&&e.media(i,function(){e.setState({breakpoint:n})})});var n=(0,o.default)({minWidth:t.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(n,function(){e.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(e){y.unregister(e.query,e.handler)})}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter(function(e){return e.breakpoint===n.state.breakpoint}))[0].settings?"unslick":p(p(p({},a.default),this.props),t[0].settings):p(p({},a.default),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var o=r.default.Children.toArray(this.props.children);o=o.filter(function(e){return"string"==typeof e?!!e.trim():!!e}),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var l=[],d=null,u=0;u<o.length;u+=e.rows*e.slidesPerRow){for(var h=[],f=u;f<u+e.rows*e.slidesPerRow;f+=e.slidesPerRow){for(var m=[],g=f;g<f+e.slidesPerRow&&(e.variableWidth&&o[g].props.style&&(d=o[g].props.style.width),!(g>=o.length));g+=1)m.push(r.default.cloneElement(o[g],{key:100*u+10*f+g,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));h.push(r.default.createElement("div",{key:10*u+f},m))}e.variableWidth?l.push(r.default.createElement("div",{key:u,style:{width:d}},h)):l.push(r.default.createElement("div",{key:u},h))}if("unslick"===e){var v="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:v},o)}return l.length<=e.slidesToShow&&!e.infinite&&(e.unslick=!0),r.default.createElement(i.InnerSlider,c({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(e)),l)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}(u.prototype,n),Object.defineProperty(u,"prototype",{writable:!1}),u}(r.default.Component)},59828:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Track=void 0;var r=a(n(45113)),i=a(n(23706)),o=n(93683);function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(u=function(){return!!e})()}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=s(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:String(t)}var v=function(e){var t,n,r,i,o;return r=(o=e.rtl?e.slideCount-1-e.index:e.index)<0||o>=e.slideCount,e.centerMode?(i=Math.floor(e.slidesToShow/2),n=(o-e.currentSlide)%e.slideCount==0,o>e.currentSlide-i-1&&o<=e.currentSlide+i&&(t=!0)):t=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":o===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},b=function(e){var t={};return(void 0===e.variableWidth||!1===e.variableWidth)&&(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,t.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t},y=function(e,t){return e.key||t},x=function(e){var t,n=[],a=[],s=[],l=r.default.Children.count(e.children),d=(0,o.lazyStartIndex)(e),c=(0,o.lazyEndIndex)(e);return(r.default.Children.forEach(e.children,function(u,p){var h,m={message:"children",index:p,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};h=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(p)>=0?u:r.default.createElement("div",null);var g=b(f(f({},e),{},{index:p})),x=h.props.className||"",w=v(f(f({},e),{},{index:p}));if(n.push(r.default.cloneElement(h,{key:"original"+y(h,p),"data-index":p,className:(0,i.default)(w,x),tabIndex:"-1","aria-hidden":!w["slick-active"],style:f(f({outline:"none"},h.props.style||{}),g),onClick:function(t){h.props&&h.props.onClick&&h.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}})),e.infinite&&!1===e.fade){var _=l-p;_<=(0,o.getPreClones)(e)&&((t=-_)>=d&&(h=u),w=v(f(f({},e),{},{index:t})),a.push(r.default.cloneElement(h,{key:"precloned"+y(h,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(w,x),"aria-hidden":!w["slick-active"],style:f(f({},h.props.style||{}),g),onClick:function(t){h.props&&h.props.onClick&&h.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}}))),(t=l+p)<c&&(h=u),w=v(f(f({},e),{},{index:t})),s.push(r.default.cloneElement(h,{key:"postcloned"+y(h,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(w,x),"aria-hidden":!w["slick-active"],style:f(f({},h.props.style||{}),g),onClick:function(t){h.props&&h.props.onClick&&h.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}}))}}),e.rtl)?a.concat(n,s).reverse():a.concat(n,s)};t.Track=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(o,e);var t,n,i=(t=u(),function(){var e,n=p(o);return e=t?Reflect.construct(n,arguments,p(this).constructor):n.apply(this,arguments),function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return c(e)}(this,e)});function o(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(c(e=i.call.apply(i,[this].concat(n))),"node",null),m(c(e),"handleRef",function(t){e.node=t}),e}return n=[{key:"render",value:function(){var e=x(this.props),t=this.props,n=t.onMouseEnter,i=t.onMouseOver,o=t.onMouseLeave;return r.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},{onMouseEnter:n,onMouseOver:i,onMouseLeave:o}),e)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),o}(r.default.PureComponent)},93683:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkSpecKeys=t.checkNavigable=t.changeSlide=t.canUseDOM=t.canGoNext=void 0,t.clamp=d,t.extractObject=void 0,t.filterSettings=function(e){return T.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})},t.validSettings=t.swipeStart=t.swipeMove=t.swipeEnd=t.slidesOnRight=t.slidesOnLeft=t.slideHandler=t.siblingDirection=t.safePreventDefault=t.lazyStartIndex=t.lazySlidesOnRight=t.lazySlidesOnLeft=t.lazyEndIndex=t.keyHandler=t.initializedState=t.getWidth=t.getTrackLeft=t.getTrackCSS=t.getTrackAnimateCSS=t.getTotalSlides=t.getSwipeDirection=t.getSlideCount=t.getRequiredLazySlides=t.getPreClones=t.getPostClones=t.getOnDemandLazySlides=t.getNavigableIndexes=t.getHeight=void 0;var r=o(n(45113)),i=o(n(14687));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t,n){return Math.max(t,Math.min(e,n))}var c=t.safePreventDefault=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()},u=t.getOnDemandLazySlides=function(e){for(var t=[],n=p(e),r=h(e),i=n;i<r;i++)0>e.lazyLoadedList.indexOf(i)&&t.push(i);return t};t.getRequiredLazySlides=function(e){for(var t=[],n=p(e),r=h(e),i=n;i<r;i++)t.push(i);return t};var p=t.lazyStartIndex=function(e){return e.currentSlide-f(e)},h=t.lazyEndIndex=function(e){return e.currentSlide+m(e)},f=t.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},m=t.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},g=t.getWidth=function(e){return e&&e.offsetWidth||0},v=t.getHeight=function(e){return e&&e.offsetHeight||0},b=t.getSwipeDirection=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(t=e.startX-e.curX,(n=Math.round(180*Math.atan2(e.startY-e.curY,t)/Math.PI))<0&&(n=360-Math.abs(n)),n<=45&&n>=0||n<=360&&n>=315)?"left":n>=135&&n<=225?"right":!0===r?n>=35&&n<=135?"up":"down":"vertical"},y=t.canGoNext=function(e){var t=!0;return!e.infinite&&(e.centerMode&&e.currentSlide>=e.slideCount-1?t=!1:(e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1)),t};t.extractObject=function(e,t){var n={};return t.forEach(function(t){return n[t]=e[t]}),n},t.initializedState=function(e){var t,n=r.default.Children.count(e.children),i=e.listRef,o=Math.ceil(g(i)),a=Math.ceil(g(e.trackRef&&e.trackRef.node));if(e.vertical)t=o;else{var s=e.centerMode&&2*parseInt(e.centerPadding);"string"==typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(s*=o/100),t=Math.ceil((o-s)/e.slidesToShow)}var d=i&&v(i.querySelector('[data-index="0"]')),c=d*e.slidesToShow,p=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(p=n-1-e.initialSlide);var h=e.lazyLoadedList||[],f=u(l(l({},e),{},{currentSlide:p,lazyLoadedList:h})),m={slideCount:n,slideWidth:t,listWidth:o,trackWidth:a,currentSlide:p,slideHeight:d,listHeight:c,lazyLoadedList:h=h.concat(f)};return null===e.autoplaying&&e.autoplay&&(m.autoplaying="playing"),m},t.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,i=e.infinite,o=e.index,a=e.slideCount,s=e.lazyLoad,c=e.currentSlide,p=e.centerMode,h=e.slidesToScroll,f=e.slidesToShow,m=e.useCSS,g=e.lazyLoadedList;if(t&&n)return{};var v,b,x,w=o,_={},C={},j=i?o:d(o,0,a-1);if(r){if(!i&&(o<0||o>=a))return{};o<0?w=o+a:o>=a&&(w=o-a),s&&0>g.indexOf(w)&&(g=g.concat(w)),_={animating:!0,currentSlide:w,lazyLoadedList:g,targetSlide:w},C={animating:!1,targetSlide:w}}else v=w,w<0?(v=w+a,i?a%h!=0&&(v=a-a%h):v=0):!y(e)&&w>c?w=v=c:p&&w>=a?(w=i?a:a-1,v=i?0:a-1):w>=a&&(v=w-a,i?a%h!=0&&(v=0):v=a-f),!i&&w+f>=a&&(v=a-f),b=S(l(l({},e),{},{slideIndex:w})),x=S(l(l({},e),{},{slideIndex:v})),i||(b===x&&(w=v),b=x),s&&(g=g.concat(u(l(l({},e),{},{currentSlide:w})))),m?(_={animating:!0,currentSlide:v,trackStyle:k(l(l({},e),{},{left:b})),lazyLoadedList:g,targetSlide:j},C={animating:!1,currentSlide:v,trackStyle:$(l(l({},e),{},{left:x})),swipeLeft:null,targetSlide:j}):_={currentSlide:v,trackStyle:$(l(l({},e),{},{left:x})),lazyLoadedList:g,targetSlide:j};return{state:_,nextState:C}},t.changeSlide=function(e,t){var n,r,i,o,a=e.slidesToScroll,s=e.slidesToShow,d=e.slideCount,c=e.currentSlide,u=e.targetSlide,p=e.lazyLoad,h=e.infinite;if(n=d%a!=0?0:(d-c)%a,"previous"===t.message)o=c-(i=0===n?a:s-n),p&&!h&&(o=-1==(r=c-i)?d-1:r),h||(o=u-a);else if("next"===t.message)o=c+(i=0===n?a:n),p&&!h&&(o=(c+a)%d+n),h||(o=u+a);else if("dots"===t.message)o=t.index*t.slidesToScroll;else if("children"===t.message){if(o=t.index,h){var f=P(l(l({},e),{},{targetSlide:o}));o>t.currentSlide&&"left"===f?o-=d:o<t.currentSlide&&"right"===f&&(o+=d)}}else"index"===t.message&&(o=Number(t.index));return o},t.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""},t.swipeStart=function(e,t,n){return("IMG"===e.target.tagName&&c(e),t&&(n||-1===e.type.indexOf("mouse")))?{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}:""},t.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,i=t.vertical,o=t.swipeToSlide,a=t.verticalSwiping,s=t.rtl,d=t.currentSlide,u=t.edgeFriction,p=t.edgeDragged,h=t.onEdge,f=t.swiped,m=t.swiping,g=t.slideCount,v=t.slidesToScroll,x=t.infinite,w=t.touchObject,_=t.swipeEvent,C=t.listHeight,k=t.listWidth;if(!n){if(r)return c(e);i&&o&&a&&c(e);var j,E={},O=S(t);w.curX=e.touches?e.touches[0].pageX:e.clientX,w.curY=e.touches?e.touches[0].pageY:e.clientY,w.swipeLength=Math.round(Math.sqrt(Math.pow(w.curX-w.startX,2)));var P=Math.round(Math.sqrt(Math.pow(w.curY-w.startY,2)));if(!a&&!m&&P>10)return{scrolling:!0};a&&(w.swipeLength=P);var N=(s?-1:1)*(w.curX>w.startX?1:-1);a&&(N=w.curY>w.startY?1:-1);var M=b(t.touchObject,a),T=w.swipeLength;return!x&&(0===d&&("right"===M||"down"===M)||d+1>=Math.ceil(g/v)&&("left"===M||"up"===M)||!y(t)&&("left"===M||"up"===M))&&(T=w.swipeLength*u,!1===p&&h&&(h(M),E.edgeDragged=!0)),!f&&_&&(_(M),E.swiped=!0),j=i?O+C/k*T*N:s?O-T*N:O+T*N,a&&(j=O+T*N),E=l(l({},E),{},{touchObject:w,swipeLeft:j,trackStyle:$(l(l({},t),{},{left:j}))}),Math.abs(w.curX-w.startX)<.8*Math.abs(w.curY-w.startY)||w.swipeLength>10&&(E.swiping=!0,c(e)),E}},t.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,i=t.touchObject,o=t.listWidth,a=t.touchThreshold,s=t.verticalSwiping,d=t.listHeight,u=t.swipeToSlide,p=t.scrolling,h=t.onSwipe,f=t.targetSlide,m=t.currentSlide,g=t.infinite;if(!n)return r&&c(e),{};var v=s?d/a:o/a,y=b(i,s),x={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p||!i.swipeLength)return x;if(i.swipeLength>v){c(e),h&&h(y);var C,$,j=g?m:f;switch(y){case"left":case"up":$=j+_(t),C=u?w(t,$):$,x.currentDirection=0;break;case"right":case"down":$=j-_(t),C=u?w(t,$):$,x.currentDirection=1;break;default:C=j}x.triggerSlideHandler=C}else{var E=S(t);x.trackStyle=k(l(l({},t),{},{left:E}))}return x};var x=t.getNavigableIndexes=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,r=e.infinite?-1*e.slidesToShow:0,i=[];n<t;)i.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return i},w=t.checkNavigable=function(e,t){var n=x(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var i in n){if(t<n[i]){t=r;break}r=n[i]}return t},_=t.getSlideCount=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(!e.swipeToSlide)return e.slidesToScroll;var n,r=e.listRef;if(Array.from(r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[]).every(function(r){if(e.vertical){if(r.offsetTop+v(r)/2>-1*e.swipeLeft)return n=r,!1}else if(r.offsetLeft-t+g(r)/2>-1*e.swipeLeft)return n=r,!1;return!0}),!n)return 0;var i=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-i)||1},C=t.checkSpecKeys=function(e,t){return t.reduce(function(t,n){return t&&e.hasOwnProperty(n)},!0)?null:console.error("Keys Missing:",e)},$=t.getTrackCSS=function(e){C(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var t,n,r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=O(e)*e.slideWidth;var i={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";i=l(l({},i),{},{WebkitTransform:o,transform:a,msTransform:s})}else e.vertical?i.top=e.left:i.left=e.left;return e.fade&&(i={opacity:1}),t&&(i.width=t),n&&(i.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?i.marginTop=e.left+"px":i.marginLeft=e.left+"px"),i},k=t.getTrackAnimateCSS=function(e){C(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=$(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},S=t.getTrackLeft=function(e){if(e.unslick)return 0;C(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t=e.slideIndex,n=e.trackRef,r=e.infinite,i=e.centerMode,o=e.slideCount,a=e.slidesToShow,s=e.slidesToScroll,l=e.slideWidth,d=e.listWidth,c=e.variableWidth,u=e.slideHeight,p=e.fade,h=e.vertical,f=0,m=0;if(p||1===e.slideCount)return 0;var g=0;if(r?(g=-j(e),o%s!=0&&t+s>o&&(g=-(t>o?a-(t-o):o%s)),i&&(g+=parseInt(a/2))):(o%s!=0&&t+s>o&&(g=a-o%s),i&&(g=parseInt(a/2))),f=g*l,m=g*u,v=h?-(t*u*1)+m:-(t*l*1)+f,!0===c){var v,b,y,x=n&&n.node;if(y=t+j(e),v=(b=x&&x.childNodes[y])?-1*b.offsetLeft:0,!0===i){y=r?t+j(e):t,b=x&&x.children[y],v=0;for(var w=0;w<y;w++)v-=x&&x.children[w]&&x.children[w].offsetWidth;v-=parseInt(e.centerPadding),v+=b&&(d-b.offsetWidth)/2}}return v},j=t.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},E=t.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},O=t.getTotalSlides=function(e){return 1===e.slideCount?1:j(e)+e.slideCount+E(e)},P=t.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+N(e)?"left":"right":e.targetSlide<e.currentSlide-M(e)?"right":"left"},N=t.slidesOnRight=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r&&t%2==0&&(o+=1),o}return r?0:t-1},M=t.slidesOnLeft=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r||t%2!=0||(o+=1),o}return r?t-1:0};t.canUseDOM=function(){return!!("undefined"!=typeof window&&window.document&&window.document.createElement)};var T=t.validSettings=Object.keys(i.default)},13065:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(39063),i=n.n(r),o=n(45113),a=n(52533),s=n.n(a),l=n(14468),d=n.n(l),c=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&g(e,n,t[n]);if(h)for(var n of h(t))m.call(t,n)&&g(e,n,t[n]);return e},b=(e,t)=>u(e,p(t)),y=(e,t,n)=>new Promise((r,i)=>{var o=e=>{try{s(n.next(e))}catch(e){i(e)}},a=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,a);s((n=n.apply(e,t)).next())});function x(e={}){return b(v({},e),{height:0,width:0,playerVars:b(v({},e.playerVars),{autoplay:0,start:0,end:0})})}var w={videoId:i().string,id:i().string,className:i().string,iframeClassName:i().string,style:i().object,title:i().string,loading:i().oneOf(["lazy","eager"]),opts:i().objectOf(i().any),onReady:i().func,onError:i().func,onPlay:i().func,onPause:i().func,onEnd:i().func,onStateChange:i().func,onPlaybackRateChange:i().func,onPlaybackQualityChange:i().func},_=class extends o.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,n;return null==(n=(t=this.props).onReady)?void 0:n.call(t,e)},this.onPlayerError=e=>{var t,n;return null==(n=(t=this.props).onError)?void 0:n.call(t,e)},this.onPlayerStateChange=e=>{var t,n,r,i,o,a,s,l;switch(null==(n=(t=this.props).onStateChange)||n.call(t,e),e.data){case _.PlayerState.ENDED:null==(i=(r=this.props).onEnd)||i.call(r,e);break;case _.PlayerState.PLAYING:null==(a=(o=this.props).onPlay)||a.call(o,e);break;case _.PlayerState.PAUSED:null==(l=(s=this.props).onPause)||l.call(s,e)}},this.onPlayerPlaybackRateChange=e=>{var t,n;return null==(n=(t=this.props).onPlaybackRateChange)?void 0:n.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,n;return null==(n=(t=this.props).onPlaybackQualityChange)?void 0:n.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if("undefined"==typeof document)return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}let e=b(v({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=d()(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(e=>{this.props.title&&e.setAttribute("title",this.props.title),this.props.loading&&e.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;null==(e=this.internalPlayer)||e.getIframe().then(e=>{this.props.id?e.setAttribute("id",this.props.id):e.removeAttribute("id"),this.props.iframeClassName?e.setAttribute("class",this.props.iframeClassName):e.removeAttribute("class"),this.props.opts&&this.props.opts.width?e.setAttribute("width",this.props.opts.width.toString()):e.removeAttribute("width"),this.props.opts&&this.props.opts.height?e.setAttribute("height",this.props.opts.height.toString()):e.removeAttribute("height"),this.props.title?e.setAttribute("title",this.props.title):e.setAttribute("title","YouTube video player"),this.props.loading?e.setAttribute("loading",this.props.loading):e.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,n,r;if(void 0===this.props.videoId||null===this.props.videoId){null==(e=this.internalPlayer)||e.stopVideo();return}let i=!1,o={videoId:this.props.videoId};if((null==(t=this.props.opts)?void 0:t.playerVars)&&(i=1===this.props.opts.playerVars.autoplay,"start"in this.props.opts.playerVars&&(o.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(o.endSeconds=this.props.opts.playerVars.end)),i){null==(n=this.internalPlayer)||n.loadVideoById(o);return}null==(r=this.internalPlayer)||r.cueVideoById(o)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return y(this,null,function*(){var t,n,r,i,o,a;t=this.props,(e.id!==t.id||e.className!==t.className||(null==(n=e.opts)?void 0:n.width)!==(null==(r=t.opts)?void 0:r.width)||(null==(i=e.opts)?void 0:i.height)!==(null==(o=t.opts)?void 0:o.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title)&&this.updatePlayer(),a=this.props,e.videoId===a.videoId&&s()(x(e.opts),x(a.opts))||(yield this.resetPlayer()),function(e,t){var n,r;if(e.videoId!==t.videoId)return!0;let i=(null==(n=e.opts)?void 0:n.playerVars)||{},o=(null==(r=t.opts)?void 0:r.playerVars)||{};return i.start!==o.start||i.end!==o.end}(e,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return o.createElement("div",{className:this.props.className,style:this.props.style},o.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}};_.propTypes=w,_.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},_.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var C=_},9299:function(e,t,n){"use strict";n.r(t);var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},s=["top","right","bottom","left","width","height","size","weight"],l="undefined"!=typeof MutationObserver,d=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&l()}function s(){a(o)}function l(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,20);i=e}return l}(this.refresh.bind(this),0)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),l?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;s.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),c=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},u=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},p=g(0,0,0,0);function h(e){return parseFloat(e)||0}function f(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){return t+h(e["border-"+n+"-width"])},0)}var m="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof u(e).SVGGraphicsElement}:function(e){return e instanceof u(e).SVGElement&&"function"==typeof e.getBBox};function g(e,t,n,r){return{x:e,y:t,width:n,height:r}}var v=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=g(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=function(e){if(!i)return p;if(m(e)){var t;return g(0,0,(t=e.getBBox()).width,t.height)}return function(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=u(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=h(o)}return t}(r),o=i.left+i.right,a=i.top+i.bottom,s=h(r.width),l=h(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==t&&(s-=f(r,"left","right")+o),Math.round(l+a)!==n&&(l-=f(r,"top","bottom")+a)),e!==u(e).document.documentElement){var d=Math.round(s+o)-t,c=Math.round(l+a)-n;1!==Math.abs(d)&&(s-=d),1!==Math.abs(c)&&(l-=c)}return g(i.left,i.top,s,l)}(e)}(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),b=function(e,t){var n,r,i,o,a,s=(n=t.x,r=t.y,i=t.width,o=t.height,c(a=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:n,y:r,width:i,height:o,top:r,right:n+i,bottom:o+r,left:n}),a);c(this,{target:e,contentRect:s})},y=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof u(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new v(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof u(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new b(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),x="undefined"!=typeof WeakMap?new WeakMap:new r,w=function e(t){if(!(this instanceof e))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var n=new y(t,d.getInstance(),this);x.set(this,n)};["observe","unobserve","disconnect"].forEach(function(e){w.prototype[e]=function(){var t;return(t=x.get(this))[e].apply(t,arguments)}});var _=void 0!==o.ResizeObserver?o.ResizeObserver:w;t.default=_},86419:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,i=t[e];if(i)for(r=i.length;r--;)i[r].handler(n)},e},e.exports=t},21485:function(e){e.exports=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}},49083:function(e,t,n){"use strict";var r=n(28070);n(92454);var i=n(45113),o=i&&"object"==typeof i&&"default"in i?i:{default:i},a=void 0!==r&&r.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,o=void 0===i?a:i;d(s(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",d("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l="undefined"!=typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){d("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,"undefined"!=typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(d(s(e),"`insertRule` accepts only strings"),"undefined"==typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(e){return -1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed||"undefined"==typeof window){var n="undefined"!=typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(t){n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];d(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},t.deleteRule=function(e){if("undefined"==typeof window){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,"undefined"!=typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},t.cssRules=function(){var e=this;return"undefined"==typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,n){t&&d(s(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function d(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var c=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},u={};function p(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return u[r]||(u[r]="jsx-"+c(e+"-"+n)),u[r]}function h(e,t){"undefined"==typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var n=e+t;return u[n]||(u[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),u[n]}var f=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i;this._sheet=r||new l({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"undefined"==typeof window||this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=o,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=p(r,n);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return h(i,e)}):[h(i,t)]}}return{styleId:p(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=i.createContext(null);m.displayName="StyleSheetContext";var g=o.default.useInsertionEffect||o.default.useLayoutEffect,v="undefined"!=typeof window?new f:void 0;function b(e){var t=v||i.useContext(m);return t&&("undefined"==typeof window?t.add(e):g(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}b.dynamic=function(e){return e.map(function(e){return p(e[0],e[1])}).join(" ")},t.style=b},5558:function(e,t,n){"use strict";e.exports=n(49083).style},7759:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});for(var r,i={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},o=new Uint8Array(16),a=[],s=0;s<256;++s)a.push((s+256).toString(16).slice(1));var l=function(e,t,n){if(i.randomUUID&&!t&&!e)return i.randomUUID();var s=(e=e||{}).random||(e.rng||function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)})();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(var l=0;l<16;++l)t[n+l]=s[l];return t}return function(e,t=0){return(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase()}(s)}},91898:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=(r=n(30904))&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[i.default.ENDED,i.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[i.default.ENDED,i.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[i.default.ENDED,i.default.PLAYING,i.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},27290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(19462)),i=s(n(88640)),o=s(n(55014)),a=s(n(91898));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)("youtube-player"),d={};d.proxyEvents=function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){l('event "%s"',r,t),e.trigger(n,t)}},r=!0,i=!1,a=void 0;try{for(var s,d=o.default[Symbol.iterator]();!(r=(s=d.next()).done);r=!0){var c=s.value;n(c)}}catch(e){i=!0,a=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw a}}return t},d.promisifyPlayer=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&a.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.then(function(e){var t=a.default[r],i=e.getPlayerState(),o=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(i)?new Promise(function(n){e.addEventListener("onStateChange",function r(){var i=e.getPlayerState(),o=void 0;"number"==typeof t.timeout&&(o=setTimeout(function(){e.removeEventListener("onStateChange",r),n()},t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(i)&&(e.removeEventListener("onStateChange",r),clearTimeout(o),n())})}).then(function(){return o}):o})}:n[r]=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.then(function(e){return e[r].apply(e,n)})}},o=!0,s=!1,l=void 0;try{for(var d,c=i.default[Symbol.iterator]();!(o=(d=c.next()).done);o=!0){var u=d.value;r(u)}}catch(e){s=!0,l=e}finally{try{!o&&c.return&&c.return()}finally{if(s)throw l}}return n},t.default=d,e.exports=t.default},30904:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},55014:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},88640:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},14468:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=s(n(86419)),o=s(n(46509)),a=s(n(27290));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,i.default)();if(l||(l=(0,o.default)(s)),t.events)throw Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw Error('Element "'+e+'" does not exist.');t.events=a.default.proxyEvents(s);var d=new Promise(function(n){(void 0===e?"undefined":r(e))==="object"&&e.playVideo instanceof Function?n(e):l.then(function(r){var i=new r.Player(e,t);return s.on("ready",function(){n(i)}),null})}),c=a.default.promisifyPlayer(d,n);return c.on=s.on,c.off=s.off,c},e.exports=t.default},46509:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=(r=n(2910))&&r.__esModule?r:{default:r};t.default=function(e){return new Promise(function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){t(window.YT);return}var n="http:"===window.location.protocol?"http:":"https:";(0,i.default)(n+"//www.youtube.com/iframe_api",function(t){t&&e.trigger("error",t)});var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}})},e.exports=t.default},83500:function(){},82811:function(){},86149:function(){},36769:function(){},33244:function(){},80982:function(){},59765:function(){},8e3:function(){},22523:function(){},32695:function(){},20584:function(){},23393:function(){},13303:function(){},23108:function(){},39623:function(){},22586:function(){},89003:function(){},7364:function(){},82433:function(){},82238:function(){},82515:function(){},74081:function(){},47264:function(){},46775:function(){},12484:function(){},45570:function(){},18180:function(){},57320:function(){},1004:function(){},22444:function(){},37506:function(){},45449:function(){},94744:function(){},78930:function(){},67140:function(){},4350:function(){},73404:function(){},47511:function(){},78546:function(){},4253:function(){},54552:function(){},24419:function(){},30623:function(){},29235:function(){},8623:function(){},41647:function(){},70626:function(){},9975:function(){},1826:function(){},8621:function(){},57028:function(){},58317:function(){},85382:function(){},60196:function(){},95258:function(){},95638:function(){},92132:function(){},73957:function(){},79391:function(){},46350:function(){},35283:function(){},33926:function(){},37175:function(){},22655:function(){},19929:function(){},66711:function(){},53953:function(){},97047:function(){},51024:function(){},51802:function(){},36902:function(){},25816:function(){},82243:function(){},32991:function(){},27061:function(){},30493:function(){},84471:function(){},51029:function(){},29392:function(){},35246:function(){},56082:function(){},66750:function(e){e.exports={style:{fontFamily:"'__Nunito_Sans_d68ca8'",fontStyle:"normal"},className:"__className_d68ca8"}},23706:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}(n)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()},50589:function(e,t,n){"use strict";n.r(t),n.d(t,{Select:function(){return h}});var r=n(95336),i=n(39090),o=n(92697),a=n(45113),s=n(10823),l=n(55155),d=n(92842),c=n(92426),u=n(61447),p=n(23934);let h=(0,c.yV)(function(e,t){let n=(0,a.useId)(),h=(0,d.Q)(),f=(0,l.B)(),{id:m=h||"headlessui-select-".concat(n),disabled:g=f||!1,invalid:v=!1,autoFocus:b=!1,...y}=e,x=(0,p.wp)(),w=(0,u.z)(),{isFocusVisible:_,focusProps:C}=(0,r.F)({autoFocus:b}),{isHovered:$,hoverProps:k}=(0,i.X)({isDisabled:g}),{pressed:S,pressProps:j}=(0,o.x)({disabled:g}),E=(0,c.dG)({ref:t,id:m,"aria-labelledby":x,"aria-describedby":w,"aria-invalid":v?"true":void 0,disabled:g||void 0,autoFocus:b},C,k,j),O=(0,s.x)({disabled:g,invalid:v,hover:$,focus:_,active:S,autofocus:b});return(0,c.L6)()({ourProps:E,theirProps:y,slot:O,defaultTag:"select",name:"Select"})})},65068:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{d:"M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"}),r.createElement("path",{d:"M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"}))});t.Z=i},52622:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z",clipRule:"evenodd"}))});t.Z=i},96358:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",clipRule:"evenodd"}))});t.Z=i},37097:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z",clipRule:"evenodd"}))});t.Z=i},81127:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{d:"M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A6.985 6.985 0 0 0 1.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546V3.75ZM16.45 5.05a.75.75 0 0 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.899Z"}),r.createElement("path",{d:"M14.329 7.172a.75.75 0 0 0-1.061 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 0 0 1.06 1.06 4 4 0 0 0 0-5.656Z"}))});t.Z=i},72135:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{d:"M10.047 3.062a.75.75 0 0 1 .453.688v12.5a.75.75 0 0 1-1.264.546L5.203 13H2.667a.75.75 0 0 1-.7-.48A6.985 6.985 0 0 1 1.5 10c0-.887.165-1.737.468-2.52a.75.75 0 0 1 .7-.48h2.535l4.033-3.796a.75.75 0 0 1 .811-.142ZM13.78 7.22a.75.75 0 1 0-1.06 1.06L14.44 10l-1.72 1.72a.75.75 0 0 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L16.56 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L15.5 8.94l-1.72-1.72Z"}))});t.Z=i},88174:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"}))});t.Z=i},86179:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=i},17915:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))});t.Z=i},47138:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"}))});t.Z=i},8949:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"}))});t.Z=i},5811:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=i},82728:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"}))});t.Z=i},52035:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"}))});t.Z=i},88306:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"}))});t.Z=i},27500:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))});t.Z=i},19076:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"}))});t.Z=i},10816:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))});t.Z=i},76161:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))});t.Z=i},20299:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"}))});t.Z=i},66058:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))});t.Z=i},86810:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"}))});t.Z=i},24564:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"}))});t.Z=i},34597:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))});t.Z=i},991:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))});t.Z=i},1e3:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"}))});t.Z=i},86346:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))});t.Z=i},52009:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"}))});t.Z=i},27195:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=i},37059:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"}))});t.Z=i},89910:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))});t.Z=i},27132:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"}))});t.Z=i},63384:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"}))});t.Z=i},89438:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"}))});t.Z=i},21255:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"}))});t.Z=i},14705:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))});t.Z=i},68613:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))});t.Z=i},20535:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{d:"M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"}))});t.Z=i},47991:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"}))});t.Z=i},27831:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z",clipRule:"evenodd"}))});t.Z=i},30855:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))});t.Z=i},33360:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z",clipRule:"evenodd"}))});t.Z=i},87675:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z",clipRule:"evenodd"}))});t.Z=i},87987:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))});t.Z=i},34149:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z",clipRule:"evenodd"}))});t.Z=i},39279:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"}))});t.Z=i},97916:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))});t.Z=i},22776:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",clipRule:"evenodd"}))});t.Z=i},5047:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",clipRule:"evenodd"}))});t.Z=i},27018:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z",clipRule:"evenodd"}),r.createElement("path",{d:"M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"}))});t.Z=i},94645:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{d:"M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"}),r.createElement("path",{d:"m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"}))});t.Z=i},50911:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",clipRule:"evenodd"}))});t.Z=i},26326:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",clipRule:"evenodd"}))});t.Z=i},32425:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z",clipRule:"evenodd"}))});t.Z=i},74715:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",clipRule:"evenodd"}))});t.Z=i},9512:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"}),r.createElement("path",{d:"M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"}))});t.Z=i},97127:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z"}))});t.Z=i},14138:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",clipRule:"evenodd"}))});t.Z=i},8989:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",clipRule:"evenodd"}))});t.Z=i},92150:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{d:"M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z"}))});t.Z=i},37318:function(e,t,n){"use strict";var r=n(45113);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))});t.Z=i},89166:function(e,t,n){"use strict";n.d(t,{lr:function(){return p},KI:function(){return h},d$:function(){return f},Pz:function(){return g},am:function(){return m}});var r=n(67251),i=n(77157),o=n(45113),a=n(10186),s=n(10468);function l(...e){return(0,s.m6)((0,a.W)(e))}n(83500);let d={carousel:"_carousel_1jfir_3",carouselContent:"_carouselContent_1jfir_7",carouselContentInner:"_carouselContentInner_1jfir_11",carouselContentInnerHorizontal:"_carouselContentInnerHorizontal_1jfir_15",carouselContentInnerVertical:"_carouselContentInnerVertical_1jfir_19",carouselItem:"_carouselItem_1jfir_23",carouselItemHorizontal:"_carouselItemHorizontal_1jfir_27",carouselItemVertical:"_carouselItemVertical_1jfir_31",carouselBtn:"_carouselBtn_1jfir_37",carouselBtnHorizontalLeft:"_carouselBtnHorizontalLeft_1jfir_41",carouselBtnHorizontalRight:"_carouselBtnHorizontalRight_1jfir_44",carouselBtnVerticalTop:"_carouselBtnVerticalTop_1jfir_48",carouselBtnVerticalBottom:"_carouselBtnVerticalBottom_1jfir_51",myPoint:"_myPoint_1jfir_55",li:"_li_1jfir_72",active:"_active_1jfir_82",navigationBar:"_navigationBar_1jfir_87",navigationBarProgress:"_navigationBarProgress_1jfir_90"},c=o.createContext(null);function u(){let e=o.useContext(c);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let p=o.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:a,className:s,children:u,...p},h)=>{let[f,m]=(0,i.Z)({...t,axis:"horizontal"===e?"x":"y"},a),[g,v]=o.useState(!1),[b,y]=o.useState(!1),[x,w]=o.useState(0),[_,C]=o.useState([]),$=o.useCallback(e=>{e&&(C(e.slideNodes),w(e.scrollProgress),v(e.canScrollPrev()),y(e.canScrollNext()))},[]),k=o.useCallback(()=>{null==m||m.scrollPrev()},[m]),S=o.useCallback(()=>{null==m||m.scrollNext()},[m]),j=o.useCallback(e=>{null==m||m.scrollTo(e)},[m]),E=o.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),k()):"ArrowRight"===e.key&&(e.preventDefault(),S())},[k,S]);return o.useEffect(()=>{m&&n&&n(m)},[m,n]),o.useEffect(()=>{if(m)return $(m),m.on("reInit",$),m.on("select",$),()=>{null==m||m.off("select",$)}},[m,$]),(0,r.jsx)(c.Provider,{value:{carouselRef:f,api:m,opts:t,orientation:e||((null==t?void 0:t.axis)==="y"?"vertical":"horizontal"),scrollPrev:k,scrollNext:S,canScrollPrev:g,canScrollNext:b,scrollTo:j,slidesNodes:_,scrollProgress:x},children:(0,r.jsx)("div",{ref:h,onKeyDownCapture:E,className:l(d.carousel,s),role:"region","aria-roledescription":"carousel",...p,children:u})})});p.displayName="Carousel";let h=o.forwardRef(({className:e,...t},n)=>{let{carouselRef:i,orientation:o}=u();return(0,r.jsx)("div",{ref:i,className:d.carouselContent,children:(0,r.jsx)("div",{ref:n,className:l(d.carouselContentInner,"horizontal"===o?d.carouselContentInnerHorizontal:d.carouselContentInnerVertical,e),...t})})});h.displayName="CarouselContent";let f=o.forwardRef(({className:e,...t},n)=>{let{orientation:i}=u();return(0,r.jsx)("div",{ref:n,role:"group","aria-roledescription":"slide",className:l(d.carouselItem,"horizontal"===i?d.carouselItemHorizontal:d.carouselItemVertical,e),...t})});f.displayName="CarouselItem";let m=o.forwardRef(({className:e,children:t,...n},i)=>{let{orientation:o,scrollPrev:a,canScrollPrev:s}=u();return(0,r.jsx)("button",{ref:i,className:l(d.carouselBtn,"horizontal"===o?d.carouselBtnHorizontalLeft:d.carouselBtnVerticalTop,e),disabled:!s,onClick:a,...n,children:t})});m.displayName="CarouselPrevious";let g=o.forwardRef(({className:e,children:t,...n},i)=>{let{orientation:o,scrollNext:a,canScrollNext:s}=u();return(0,r.jsx)("button",{ref:i,className:l(d.carouselBtn,"horizontal"===o?d.carouselBtnHorizontalRight:d.carouselBtnVerticalBottom,e),disabled:!s,onClick:a,...n,children:t})});g.displayName="CarouselNext",o.forwardRef(({className:e,...t},n)=>{let{scrollTo:i,slidesNodes:a,api:s}=u(),[c,p]=o.useState(0),h=null==s?void 0:s.selectedScrollSnap();return o.useEffect(()=>{s&&(p(s.selectedScrollSnap()),s.on("select",()=>{p(s.selectedScrollSnap())}))},[h]),(0,r.jsx)("ul",{className:l(d.myPoint,e),ref:n,...t,children:a.map((e,t)=>(0,r.jsx)("li",{onClick:()=>i(t),className:l(d.li,{[d.active]:t===c})},t))})}).displayName="CarouselDotNavigation",o.forwardRef(({className:e,...t},n)=>{let{slidesNodes:i,api:a}=u(),[s,c]=o.useState(0),p=null==a?void 0:a.selectedScrollSnap();o.useEffect(()=>{a&&(c(a.selectedScrollSnap()),a.on("select",()=>{c(a.selectedScrollSnap())}))},[p]);let h=(s+1)/i.length*100;return(0,r.jsx)("div",{className:l(d.navigationBar,e),ref:n,...t,children:(0,r.jsx)("span",{className:l(d.navigationBarProgress),style:{transform:`translateX(-${100-(h||0)}%)`}})})}).displayName="CarouselBarNavigation"},2465:function(e,t,n){"use strict";n.d(t,{_H:function(){return e$}});let r=globalThis,i=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let n=void 0!==t&&1===t.length;n&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,o),d=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1],e[0]),e,o),c=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement("style"),i=r.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=n.cssText,e.appendChild(t)}},u=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return l(t)})(e):e,{is:p,defineProperty:h,getOwnPropertyDescriptor:f,getOwnPropertyNames:m,getOwnPropertySymbols:g,getPrototypeOf:v}=Object,b=globalThis,y=b.trustedTypes,x=y?y.emptyScript:"",w=b.reactiveElementPolyfillSupport,_=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},$=(e,t)=>!p(e,t),k={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&h(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let o=r?.call(this);i?.call(this,t),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;let e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){let e=this.properties;for(let t of[...m(e),...g(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,n]of t)this.elementProperties.set(e,n)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let n of new Set(e.flat(1/0).reverse()))t.unshift(u(n));else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(void 0!==r&&!0===n.reflect){let i=(void 0!==n.converter?.toAttribute?n.converter:C).toAttribute(t,n.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=n.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=r;let o=i.fromAttribute(t,e.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(void 0!==e){let o=this.constructor;if(!1===r&&(i=this[e]),!(((n??=o.getPropertyOptions(e)).hasChanged??$)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==i||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[_("elementProperties")]=new Map,S[_("finalized")]=new Map,w?.({ReactiveElement:S}),(b.reactiveElementVersions??=[]).push("2.1.2");let j=globalThis,E=e=>e,O=j.trustedTypes,P=O?O.createPolicy("lit-html",{createHTML:e=>e}):void 0,N="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+M,L=`<${T}>`,D=document,A=()=>D.createComment(""),I=e=>null===e||"object"!=typeof e&&"function"!=typeof e,B=Array.isArray,R=e=>B(e)||"function"==typeof e?.[Symbol.iterator],F="[ 	\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,H=/>/g,W=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,U=/"/g,q=/^(?:script|style|textarea|title)$/i,Y=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),G=Y(1),X=(Y(2),Y(3),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),J=new WeakMap,Q=D.createTreeWalker(D,129);function ee(e,t){if(!B(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(t):t}let et=(e,t)=>{let n=e.length-1,r=[],i,o=2===t?"<svg>":3===t?"<math>":"",a=z;for(let t=0;t<n;t++){let n=e[t],s,l,d=-1,c=0;for(;c<n.length&&(a.lastIndex=c,null!==(l=a.exec(n)));)c=a.lastIndex,a===z?"!--"===l[1]?a=Z:void 0!==l[1]?a=H:void 0!==l[2]?(q.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=W):void 0!==l[3]&&(a=W):a===W?">"===l[0]?(a=i??z,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?W:'"'===l[3]?U:V):a===U||a===V?a=W:a===Z||a===H?a=z:(a=W,i=void 0);let u=a===W&&e[t+1].startsWith("/>")?" ":"";o+=a===z?n+L:d>=0?(r.push(s),n.slice(0,d)+N+n.slice(d)+M+u):n+M+(-2===d?t:u)}return[ee(e,o+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class en{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,o=0,a=e.length-1,s=this.parts,[l,d]=et(e,t);if(this.el=en.createElement(l,n),Q.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=Q.nextNode())&&s.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(N)){let t=d[o++],n=r.getAttribute(e).split(M),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:a[2],strings:n,ctor:"."===a[1]?es:"?"===a[1]?el:"@"===a[1]?ed:ea}),r.removeAttribute(e)}else e.startsWith(M)&&(s.push({type:6,index:i}),r.removeAttribute(e));if(q.test(r.tagName)){let e=r.textContent.split(M),t=e.length-1;if(t>0){r.textContent=O?O.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],A()),Q.nextNode(),s.push({type:2,index:++i});r.append(e[t],A())}}}else if(8===r.nodeType){if(r.data===T)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(M,e+1));)s.push({type:7,index:i}),e+=M.length-1}}i++}}static createElement(e,t){let n=D.createElement("template");return n.innerHTML=e,n}}function er(e,t,n=e,r){if(t===X)return t;let i=void 0!==r?n._$Co?.[r]:n._$Cl,o=I(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e))._$AT(e,n,r),void 0!==r?(n._$Co??=[])[r]=i:n._$Cl=i),void 0!==i&&(t=er(e,i._$AS(e,t.values),i,r)),t}class ei{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??D).importNode(t,!0);Q.currentNode=r;let i=Q.nextNode(),o=0,a=0,s=n[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new eo(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new ec(i,this,e)),this._$AV.push(t),s=n[++a]}o!==s?.index&&(i=Q.nextNode(),o++)}return Q.currentNode=D,r}p(e){let t=0;for(let n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class eo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){I(e=er(this,e,t))?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==X&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):R(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=en.createElement(ee(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ei(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new en(e)),t}k(e){B(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new eo(this.O(A()),this.O(A()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=E(e).nextSibling;E(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ea{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=K}_$AI(e,t=this,n,r){let i=this.strings,o=!1;if(void 0===i)(o=!I(e=er(this,e,t,0))||e!==this._$AH&&e!==X)&&(this._$AH=e);else{let r,a;let s=e;for(e=i[0],r=0;r<i.length-1;r++)(a=er(this,s[n+r],t,r))===X&&(a=this._$AH[r]),o||=!I(a)||a!==this._$AH[r],a===K?e=K:e!==K&&(e+=(a??"")+i[r+1]),this._$AH[r]=a}o&&!r&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class es extends ea{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class el extends ea{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class ed extends ea{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=er(this,e,t,0)??K)===X)return;let n=this._$AH,r=e===K&&n!==K||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==K&&(n===K||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ec{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){er(this,e)}}let eu=j.litHtmlPolyfillSupport;eu?.(en,eo),(j.litHtmlVersions??=[]).push("3.3.3");let ep=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(void 0===i){let e=n?.renderBefore??null;r._$litPart$=i=new eo(t.insertBefore(A(),e),e,void 0,n??{})}return i._$AI(e),i},eh=globalThis;class ef extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ep(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}}ef._$litElement$=!0,ef.finalized=!0,eh.litElementHydrateSupport?.({LitElement:ef});let em=eh.litElementPolyfillSupport;em?.({LitElement:ef}),(eh.litElementVersions??=[]).push("4.2.2");let eg=(e,t,n)=>({"chevron-right":G`<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
      width="${t}"
      height="${n}"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg> `,"play-solid-dark":G`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
      width="${t}"
      height="${n}"
    >
      <path
        fill-rule="evenodd"
        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
        clip-rule="evenodd"
      />
    </svg> `,"right-arrow":G`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
        stroke="#F1EFFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`})[e]||"",ev=d`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }
  .batch-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .batch-wrapper.clickable {
    cursor: pointer;
  }

  .batch-nudge {
    padding: 0 16px;
    background-color: #f0f0f0;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -18px;
    z-index: 10;
    font-size: 14px;
    color: #1b2124;
    border: 1.2px solid #FD853A;
    background: linear-gradient(270deg, #FFF 0.23%, #F7E0B4 126.42%);
    overflow: hidden;
    font-weight: 600;
    max-width: calc(100% - 32px);
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .nudge-inner {
    display: flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 14px;
    height: 32px;
  }

  .batch-nudge.no-animation {
    color: white;
    border-color: #FEB273;
    background: linear-gradient(180deg, #403115 0%, #110900 100%);
  }

  .batch-nudge::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -100%;
    width: 24px;
    height: 200%;
    background: #FFFFFF99;
    transform: skewX(-30deg);
    animation: nudgeShimmer 3.5s infinite;
  }

  .batch-nudge.no-animation::after {
    animation: none;
  }

  @keyframes nudgeShimmer {
    0% {
      left: -100%;
      opacity: 1;
    }
    60% {
      left: 100%;
      opacity: 1;
    }
    61% {
      left: 100%;
      opacity: 0;
    }
    100% {
      left: 100%;
      opacity: 0;
    }
  }

  .batch-nudge span {
    display: inline-block;
    flex-shrink: 0;
    transition: transform 0.6s ease-in-out;
  }

  .batch-nudge .nudge-secondary-text {
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  .batch-nudge span:first-child {
    animation: nudgeSpanFirst 3.5s infinite;
  }

  .batch-nudge.no-animation span:first-child {
    animation: none;
  }

  .batch-nudge span:last-child {
    animation: nudgeSpanSecond 3.5s infinite;
  }

  .batch-nudge.no-animation span:last-child {
    animation: none;
  }

  @keyframes nudgeSpanFirst {
    0%, 65% {
      transform: translateY(0);
    }
    70%, 75% {
      transform: translateY(-4px);
    }
    80%, 100% {
      transform: translateY(0);
    }
  }

  @keyframes nudgeSpanSecond {
    0%, 75% {
      transform: translateY(0);
    }
    80%, 85% {
      transform: translateY(-4px);
    }
    90%, 100% {
      transform: translateY(0);
    }
  }

  .nudge-secondary-text {
    color: #EC4A0A;
    font-weight: 700;
  }

  .batch-nudge.no-animation .nudge-secondary-text {
    color: #FDDCAB;
  }

  .batch-card {
    background-color: #ffffff;
    border-radius: 1rem;
    border: 1px solid #d9dce1;
    position: relative;
    width: 100%;
    min-width: 328px;
    display: flex;
    flex-direction: column;
    transition: border 0.5s ease;
    height: 100%;

    &:not(.allow-hover):hover {
      border: 1px solid #3d3d3d;
    }

    &.border-dashed:not(.dark-theme):not(.allow-hover):hover {
      border: 1px solid #3d3d3d;
      border-bottom: 1px dashed #3d3d3d;
    }
  }

  .batch-card.border-dashed:not(.allow-hover) {
    z-index: 2;
    border-bottom: 1px dashed #d9dce1;
  }

  .batch-wrapper:hover .batch-card.allow-hover {
    border: 1px solid #3d3d3d;
  }

  .batch-card.dark-theme {
    border: 1px solid #3d3d3d;
    background-color: #1b2124;
  }

   .batch-card.border-dashed-dark {
     z-index: 2;
     border-bottom: 1px dashed #3d3d3d;
   }

  .remove-min-width {
    min-width: 0px;
  }

  .offering-strip-new {
    padding: 12px 16px 16px;
    color: #1b2124;
    position: relative;
    background: white;
    bottom: 1px;
    width: 100%;
    border-radius: 14px;
    z-index: 1;
    border: 1px solid rgb(217, 220, 225);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  
  }

  .offering-strip {
    padding: 8px 16px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #1b2124;
    position: relative;
    background: white;
    bottom: 1px;
    width: 100%;
    border-radius: 14px;
    z-index: 1;
  }

  .offering-strip::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: linear-gradient(90deg, var(--gradient-colors));
    border-radius: 12px;
    overflow: hidden;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .offering-strip.dark-theme {
    color: #d9dce1;
    background: #1b2124;
  }

  .offering-amount {
    font-weight: bold;
  }

  .offering-icon {
    height: 16px;
    width: 16px;
    min-width: 16px;
    display: inline-block;
  }

  .offering-icon > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .offering-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .footer-strip {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 16px 16px;
    font-size: 12px;
    color: #1b2124;
    position: relative;
    background: white;
    bottom: 1px;
    width: 100%;
    border-radius: 14px;
    z-index: 2;
    border: 1px solid rgb(217, 220, 225);
    border-top: none;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    margin-top: -12px;
    transition: border 0.5s ease;
  }

  .batch-wrapper:hover .footer-strip {
    border: 1px solid #3d3d3d;
    border-top: none;
  }

  .footer-strip::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: linear-gradient(90deg, var(--gradient-colors));
    border-radius: 12px;
    overflow: hidden;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .footer-strip.dark-theme {
    background: #1b2124;
    border-color: #3d3d3d;
  }

  .bottom-strip {
    display: flex;
    align-items: center;
    padding-top: 12px;
    position: relative;
  }

  .bottom-strip:before {
    content: '';
    top: 0px;
    height: 0;
    border-top: 1px dashed #D9DCE1;
    position: absolute;
    left: -15px;
    right: -15px;
  }

  .bottom-strip.dark-theme:before {
    border-top: 1px dashed #3d3d3d;
  }

  .bottom-strip-container {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
  }

  .bottom-icon-wrapper {
    height: 14px;
    width: 14px;
  }

  .bottom-icon-wrapper > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .bottom-value {
    font-size: 14px;
    color: #3D3D3D;
  }

  .phone-number {
    text-decoration: underline;
    font-weight: 600;
  }

  .bottom-value.dark-theme {
    color: #d9dce1;
  }

  .bottom-value-container {
    font-size: 14px;
    color: #3D3D3D;
    display: flex;
    width: 100%;
  }

  .bottom-value-container.dark-theme {
    color: #d9dce1;
  }

  .bottom-value-container.space-between {
    justify-content: space-between;
  }

  .bottom-value-part {
    flex-shrink: 0;
  }

  .triangle {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    position: absolute;
    top: -12px;
    left: 10px;

  }

  .offer-strip-container {
    position: relative;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }

  .offering-label {
    line-height: 18px;
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 600; 
    color: white;
    text-align: center;
    flex-shrink: 0;
  }

  .batch-thumbnail {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    aspect-ratio: 2 / 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
  }

  .corner {
    position: absolute;
    width: 138px;
    height: 26px;
    z-index: 1;
  }

  .corner.top-left {
    top: 8px;
    left: 8px;
  }

  .corner.top-right {
    top: 8px;
    right: 8px;
  }

  .corner.bottom-left {
    bottom: 8px;
    left: 8px;
  }

  .corner.bottom-right {
    bottom: 8px;
    right: 8px;
  }

  .corner > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .top-title {
    font-size: 14px;
    color: #3d3d3d;
    height: 28px;
    padding: 4px 8px;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  .bottom-title {
    font-size: 14px;
    color: #3d3d3d;
    height: fit-content;
    padding: 4px 8px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  .icon-wrapper {
    height: 15px;
    width: 15px;
  }

  .icon-wrapper > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .title-wrapper {
    max-width: calc(100% - 21px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .files-wrapper {
    position: relative;
    display: flex;
    width: 100%;
  }

  .files-wrapper.image-placement {
    gap: 12px;
    bottom: 12px;
    align-items: flex-end;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    overflow-y: hidden;
    overflow-x: auto;
    padding: 0 16px;
  }

  .bottom_26 {
    bottom: 26px !important;
  }

  .justify-center {
    justify-content: center;
  }

  .files-container {
    display: flex;
    height: 100%;
  }

  .files-container.auto-scroll {
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .files-container.auto-scroll::-webkit-scrollbar {
    display: none;
  }

  .file-item {
    aspect-ratio: 2 / 1;
    min-width: 100%;
      overflow: hidden;
  }

  .file-item iframe {
    width: 100%;
    height: 100%;
    border: none;
    object-fit: cover;
  }

  .file-item.medium {
    height: 100px;
    width: 272px;
    min-width: 272px;
    border-radius: 12px;
  }

  /* Small size */
  .file-item.small {
    height: 84px;
    width: 84px;
    min-width: 84px;
  }

  .file-item.medium img,
  .file-item.small img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .file-item > img {
    height: 100%;
    width: 100%;
    position: relative;
      display: block;
  }

  .pulse-dot-shadow {
    width: 10px;
    min-width: 10px;
    height: 10px;
    background-color: #bf2734;
    border-radius: 50%;
    display: inline-block;
    animation: pulseShadow 2s infinite;
  }

  @keyframes pulseShadow {
    0% {
      box-shadow: 0 0 0 0 rgba(191, 39, 52, 0.7);
    }
    70% {
      box-shadow: 0 0 0 5px rgba(191, 39, 52, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(191, 39, 52, 0);
    }
  }

  /* Shimmer Effect Styles */
  .shimmer {
    position: relative;
    overflow: hidden;
    background-color: #f6f7f8;
  }

  .shimmer::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    animation: shimmerMove 1.5s infinite;
  }

  .shimmer.dark-theme {
    background-color: #2a2a2a;
  }

  .shimmer.dark-theme::before {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }

  @keyframes shimmerMove {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  /* Shimmer variants for different elements */
  .shimmer-text {
    height: 16px;
    border-radius: 4px;
  }

  .shimmer-title {
    height: 24px;
    border-radius: 6px;
  }

  .shimmer-button {
    height: 48px;
    border-radius: 6px;
  }

  .shimmer-image {
    border-radius: 8px;
  }

  .shimmer-card {
    border-radius: 16px;
  }

  .teacher-images-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    background-color: #fff;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    box-sizing: border-box;
    padding: 0;
    display: flex;
    gap: 12px;
  }

  .teacher-images-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  .video-thumbnail {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #000;
  }

  .video-thumbnail video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .youtube-embed {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #000;
  }

  .youtube-embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .play-button {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .play-button:before {
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 18px solid #1b2124;
    border-bottom: 10px solid transparent;
    margin-left: 4px;
  }

  .batch-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -3px;
    font-weight: 500;
    font-size: 51px;
    color: #ffffff;
    text-align: center;
    opacity: 0.5;
    width: 328px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 1rem 0.5rem 1rem;
    flex-grow: 1;
  }

  .header.dark-theme {
    background-color: #1b2124;
  }

  .title-section {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 100%;
  }

  .tags {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .category {
    color: #fb6514;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }

  .category.dark-theme {
    color: #feb273;
  }

  .language-wrapper {
    display: flex;
    align-items: center;
  }

  .language-badge {
    background-color: #f8f8f8;
    border: 1px solid #b7b7b7;
    border-radius: 0.25rem;
    padding: 4px 0.625rem;
    font-weight: 600;
    line-height: 16px;
    color: #1b2124;
    font-size: 12px;
  }

  .language-wrapper > *:not(:first-child) {
    margin-left: -5px;
  }

  .language-badge.dark-theme {
    border: 1px solid #b7b7b7;
    background-color: #1b2124;
    color: #d9dce1;
  }

  .multilingual-badge {
    width: 24px;
    min-width: 24px;
    height: 24px;
    background-color: #f1f5fe;
    border-radius: 50%;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    border: 1px solid #bcd8f1;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    color: #1b2124;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title.dark-theme {
    color: #ffffff;
  }

  .pointers {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }

  .description-pointer {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .pointer-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }

  .pointer-text {
    color: #3d3d3d;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100% - 28px);
    display: block;
  }

  .pointer-text.dark-theme {
    color: #d9dce1;
  }

  .pointer-text > * {
    margin: 0;
    display: inline;
  }

  .ongoing-text {
    font-weight: 600;
  }

  .ongoing-separator {
    color: #b7b7b7;
    margin: 0 4px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    gap: 0.625rem;
    align-items: center;
    padding: 0.5rem 1rem 1rem 1rem;
    border-radius: 0px 0px 16px 16px;
  }

  .footer.dark-theme {
    background-color: #1b2124;
  }

  .card-description {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    flex-grow: 1;
  }

  .price-wrapper.hidden {
    display: none;
  }

  .amounts {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    align-items: center;
  }

  .current-price {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: #1b2124;
  }

  .current-price.dark-theme {
    color: #ffffff;
  }

  .original-price {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #757575;
    text-decoration: line-through;
  }

  .discount-tag {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #1b7938;
  }

  .price-label {
    color: #757575;
    font-size: 14px;
  }

  .price-label.dark-theme {
    color: #757575;
  }

  .cta-group {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  .cta-group.webinar-full-width {
    width: 100%;
  }

  .buy-btn.webinar-type {
    padding-left: 4px;
    padding-right: 4px;
  }

  .cta-group.full-width {
    width: 100% !important;
  }

  .buy-btn {
    background-color: #1b2124;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    border-radius: 0.375rem;
    padding: 0.625rem 1.25rem;
    width: 100%;
    border: 1px solid #1b2124;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 48px;
   font-family: "RedditSans", sans-serif;
  }

  .secondary-btn {
    background-color: white;
    color: #3D3D3D;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    border-radius: 0.375rem;
    padding: 0.625rem 1.25rem;
    width: 100%;
    border: 1px solid #D9DCE1;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 48px;
    font-family: "RedditSans", sans-serif;
    &:hover {
      border: 1px solid #b7b7b7;
      background: #f8f8f8;
    }
  }

  .buy-btn.dark-theme, .secondary-btn.dark-theme {
    background-color: #ffffff;
    color: #3d3d3d;
    border: 1px solid #d9dce1;
  }

  .buy-btn.dark-theme:hover, .secondary-btn.dark-theme:hover {
    background-color: #f0f0f0 !important;
  }

  .buy-btn:hover{
    background-color: #2d3639 !important;
  }

  .cta-group.with-arrow {
    width: auto;
    gap: 6px;
  }

   .cta-group.with-secondary {
     gap: 8px;
     align-items: stretch;
   }

  .arrow-btn {
    height: 48px;
    min-width: 48px;
    border-radius: 0.375rem;
    background-color: #ffffff;
    border: 1px solid #d9dce1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #1b2124;

    &:hover {
      border: 1px solid #b7b7b7;
      background: #f8f8f8;
    }
  }

  .arrow-btn.dark-theme {
    background-color: #1b2124;
    color: #ffffff;
  }

  .icon-gray {
    filter: brightness(0) saturate(100%) invert(89%) sepia(7%) saturate(219%) hue-rotate(183deg) brightness(97%) contrast(92%);
  }

  .manual-scroll {
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .know-more-strip {
    padding: 18px 0px 6px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F1EFFF;
    position: relative;
    background: #1B1916;
    bottom: 0px;
    margin-top: -13px;
    z-index: -1;
    width: 100%;
    border-radius: 0px 0px 12px 12px;
    border: 1px solid #FD853A;
    gap: 4px;
    line-height: 20px;
    cursor: pointer;
  }
  .know-more-strip > span {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .know-more-strip > .redirection-title {
    font-weight: 600;
    transition: transform 0.3s ease;
  }

  .know-more-icon {
    margin-left: 4px;
    transition: transform 0.3s ease;
  }

  .know-more-strip:hover span:not(.know-more-icon) {
    transform: translateX(-4px);
  }

  .know-more-strip:hover .redirection-title {
    transform: translateX(-4px);
  }

  .know-more-strip:hover .know-more-icon {
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    .original-price,
    .offering-strip,
    .top-title,
    .bottom-title {
      font-size: 12px;
    }

    .file-item {
      position: relative;
    }

    .header {
      padding: 12px 1rem 0.5rem 1rem;
    }

    .title {
      font-size: 16px;
      line-height: 24px;
    }

    .language-badge {
      font-size: 10px;
      padding: 0.125rem 0.625rem;
    }

    .discount-tag,
    .category,
    .pointer-text {
      font-size: 14px;
    }

    .current-price {
      font-size: 14px;
      line-height: 20px;
    }

    .buy-btn, .secondary-btn {
      font-size: 14px;
      min-height: 40px;
    }

    .cta-group.with-secondary {
      flex-direction: column;
    }
    
    .arrow-btn {
      height: 40px;
      min-width: 40px;
    }

    .files-wrapper.image-placement {
     padding: 0px 12px;
    }

    .footer-strip {
      font-size: 10px;
    }
    .batch-nudge {
      font-size: 12px;
      padding: 0 8px;
      top: -14px;
    }
    .nudge-inner {
      height: 28px;
    }
`;class eb{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class ey extends eb{constructor(e){if(super(e),this.it=K,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===K||null==e)return this._t=void 0,this.it=e;if(e===X)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ey.directiveName="unsafeHTML",ey.resultType=1;let ex=(...e)=>({_$litDirective$:ey,values:e});var ew=n(10186);let e_={type:Boolean,converter:{fromAttribute:e=>null!==e&&"false"!==e&&!!e}},eC={batchName:{type:String},category:{type:String},language:{type:String},price:{type:Number},total:{type:Number},totalLabel:{type:String},discount:{type:Number},discountLabel:{type:String},priceWithLabel:{type:String},showArrowButton:e_,buttonText:{type:String},secondaryButtonText:{type:String},isCombo:{type:Boolean,attribute:"is-combo"},isFree:{type:Boolean,attribute:"is-free"},videoSrc:{type:String,attribute:"video-src"},descriptionPointers:{type:Array,attribute:"description-pointers",converter:{fromAttribute:e=>e?JSON.parse(e):[],toAttribute:e=>JSON.stringify(e)}},offeringStrip:{type:Object,attribute:"offering-strip",converter:{fromAttribute:e=>e?JSON.parse(e):{},toAttribute:e=>JSON.stringify(e)}},bottomStrip:{type:Object,attribute:"bottom-strip",converter:{fromAttribute:e=>e?JSON.parse(e):{},toAttribute:e=>JSON.stringify(e)}},files:{type:Array,attribute:"files",converter:{fromAttribute:e=>e?JSON.parse(e):[],toAttribute:e=>JSON.stringify(e)}},videoUrls:{type:Array,attribute:"video-urls",converter:{fromAttribute:e=>e?JSON.parse(e):[],toAttribute:e=>JSON.stringify(e)}},multiLingualSymbols:{type:Array,attribute:"multi-lingual-symbols",converter:{fromAttribute:e=>e?JSON.parse(e):[],toAttribute:e=>JSON.stringify(e)}},topTitle:{type:Object,attribute:"top-title",converter:{fromAttribute:e=>e?JSON.parse(e):{},toAttribute:e=>JSON.stringify(e)}},bottomTitle:{type:Object,attribute:"bottom-title",converter:{fromAttribute:e=>e?JSON.parse(e):{},toAttribute:e=>JSON.stringify(e)}},backgroundImage:{type:String},imageSize:{type:String},carousel:{type:String},batchType:{type:String},hideThumbnail:{type:Boolean},cardDescription:{type:String},darkMode:e_,corners:{type:Object,attribute:"corners",converter:{fromAttribute:e=>e?JSON.parse(e):{},toAttribute:e=>JSON.stringify(e)}},enableCardClick:{type:Boolean},onBuyNowClick:{type:Function},onArrowClick:{type:Function},onExploreClick:{type:Function},onSecondaryClick:{type:Function},onKnowMoreStripClick:{type:Function},isVernacular:e_,isMultilingual:e_,removeMinWidth:e_,buttonColor:{type:String},backgroundSizeContain:e_,pricelabel:{type:String},shouldFixHeight:{type:String},showNewStrip:e_,showBatchCardNudge:e_,isWebinarType:e_,showBatchRedirectionStrip:e_,cardNudgePrimaryText:{type:String},cardNudgeSecondaryText:{type:String},isMoreThanOneClassAttended:e_};class e$ extends ef{static get styles(){return ev}static get properties(){return eC}constructor(){super(),this.getOfferingText=e=>e.replace(/#([^#]+)#/g,"<strong>$1</strong>"),this.batchName="",this.category="",this.language="",this.showArrowButton=!1,this.isCombo=!1,this.isFree=!1,this.videoSrc="",this.descriptionPointers=[],this.buttonText="",this.secondaryButtonText="",this.backgroundImage="",this.files=[],this.videoUrls=[],this.multiLingualSymbols=[],this.batchType="",this.hideThumbnail=!1,this.corners={},this.enableCardClick=!1,this.onBuyNowClick=()=>{},this.onArrowClick=()=>{},this.onExploreClick=()=>{},this.onSecondaryClick=()=>{},this.onKnowMoreStripClick=()=>{},this.isVernacular=!1,this.isMultilingual=!1,this.removeMinWidth=!1,this.buttonColor="",this.backgroundSizeContain=!1,this.darkMode=!1,this.pricelabel="",this.cardDescription="",this.shouldFixHeight="",this.showNewStrip=!1,this.showBatchCardNudge=!1,this.isWebinarType=!1,this.showBatchRedirectionStrip=!1,this.cardNudgePrimaryText="",this.cardNudgeSecondaryText="",this.isMoreThanOneClassAttended=!1}connectedCallback(){super.connectedCallback()}_setupAutoScroll(){"AUTO"===this.carousel&&this.files?.length>0&&setTimeout(()=>{let e=this.shadowRoot?.querySelector(".files-container.auto-scroll");if(e){let t=0;setInterval(()=>{let n=e.querySelectorAll(".file-item");if(n.length>0){let r=n[t],i=r?.offsetLeft;e.scrollTo({left:i,behavior:"smooth"}),t=(t+1)%this.files?.length}},2e3)}},100)}updated(e){super.updated(e),this._setupAutoScroll()}_handleExploreClick(e){let t=new CustomEvent("bl-explore",{detail:{originalEvent:e},bubbles:!0,composed:!0});this.onExploreClick&&"function"==typeof this.onExploreClick&&this.onExploreClick(),this.dispatchEvent(t)}_handleBuyNowClick(e){e.stopPropagation();let t=new CustomEvent("bl-buy-now",{detail:{originalEvent:e},bubbles:!0,composed:!0});this.onBuyNowClick&&"function"==typeof this.onBuyNowClick&&this.onBuyNowClick(),this.dispatchEvent(t)}_handleArrowClick(e){e.stopPropagation(),e.preventDefault();let t=new CustomEvent("bl-arrow",{detail:{originalEvent:e},bubbles:!0,composed:!0});this.onArrowClick&&"function"==typeof this.onArrowClick&&this.onArrowClick(),this.dispatchEvent(t)}_handleSecondaryClick(e){e.preventDefault(),e.stopPropagation(),this.onSecondaryClick&&"function"==typeof this.onSecondaryClick&&this.onSecondaryClick()}_handleKnowMoreClick(e){e.preventDefault(),e.stopPropagation(),this.onKnowMoreStripClick&&"function"==typeof this.onKnowMoreStripClick&&this.onKnowMoreStripClick()}_handleIframeClick(e){e.preventDefault(),e.stopPropagation(),this._handleExploreClick(e)}_renderBottomStripText(){if(!this.bottomStrip?.text)return G``;let e=this.bottomStrip.text;if(e.includes("<U>")){let t=e.split("<U>").filter(e=>""!==e.trim());if(t.length>=2)return G`
          <div
            class="bottom-value-container space-between ${this.darkMode?"dark-theme":""}"
          >
            <span class="bottom-value-part">${ex(t[0])}</span>
            <span class="bottom-value-part phone-number"
              >${ex(t[1])}</span
            >
          </div>
        `}return G`
      <span class="bottom-value ${this.darkMode?"dark-theme":""}"
        >${ex(e)}</span
      >
    `}_renderCurrentPrice(){return this.totalLabel?G`
        <div class="current-price ${this.darkMode?"dark-theme":""}">
          ${this.totalLabel}
        </div>
      `:void 0!==this.total&&this.total>0?G`
        <div class="current-price ${this.darkMode?"dark-theme":""}">
          ₹${this.total?.toLocaleString("en-IN")}
        </div>
      `:void 0}_renderDiscount(){return this.discountLabel?G` <div class="discount-tag">(${this.discountLabel})</div> `:void 0!==this.discount&&this.discount>0?G` <div class="discount-tag">${this.discount}% OFF</div>`:void 0}_renderTotalPrice(){return this.priceWithLabel?G`
        <div class="original-price ${this.darkMode?"dark-theme":""}">
          ${this.priceWithLabel}
        </div>
      `:void 0!==this.price?G`
        <div class="original-price ${this.darkMode?"dark-theme":""}">
          ${this.price<=0?"Free":`₹${this.price?.toLocaleString("en-IN")}`}
        </div>
      `:void 0}render(){return G`<div
      class="batch-wrapper ${this.enableCardClick?"clickable":""}"
      @click=${this.enableCardClick?this._handleExploreClick:null}
    >
      <div
        class="${(0,ew.Z)("batch-card",{mb_57:this.offeringStrip?.text,"remove-min-width":this.removeMinWidth,"border-dashed":this.offeringStrip?.text&&!this.darkMode,"border-dashed-dark":this.offeringStrip?.text&&this.darkMode,"dark-theme":this.darkMode,"allow-hover":this.showNewStrip})}"
        style="${this.shouldFixHeight?`min-height: ${this.shouldFixHeight}; max-height: ${this.shouldFixHeight};`:""}"
      >
        ${this.showBatchCardNudge?G`<div
              class="batch-nudge ${this.isMoreThanOneClassAttended?"no-animation":""}"
            >
              <div class="nudge-inner">
                <span>${this.cardNudgePrimaryText}</span>
                <span class="nudge-secondary-text"
                  >${this.cardNudgeSecondaryText}</span
                >
              </div>
            </div>`:""}
        ${this.hideThumbnail?"":G`
              <div
                class="batch-thumbnail"
                style="${(0,ew.Z)({[`background-image: url(${this.backgroundImage});`]:this.backgroundImage,"background-color: #FEFDF0;":"MAHAPACK"===this.batchType,"background-size: contain;":this.backgroundSizeContain})}"
              >
                ${this.corners.topLeft||this.corners.topRight||this.corners.bottomLeft||this.corners.bottomRight?G`
                      ${this.corners.topLeft?G`<div class="corner top-left">
                            <img src="${this.corners.topLeft}" alt="" />
                          </div>`:""}
                      ${this.corners.topRight?G`<div class="corner top-right">
                            <img src="${this.corners.topRight}" alt="" />
                          </div>`:""}
                      ${this.corners.bottomLeft?G`<div class="corner bottom-left">
                            <img src="${this.corners.bottomLeft}" alt="" />
                          </div>`:""}
                      ${this.corners.bottomRight?G`<div class="corner bottom-right">
                            <img src="${this.corners.bottomRight}" alt="" />
                          </div>`:""}
                    `:""}
                ${this.topTitle?.primaryText?G`
                      <div class="top-title">
                        <div class="icon-wrapper">
                          <img src="${this.topTitle?.icon||""}" />
                        </div>
                        <div class="title-wrapper">
                          ${this.topTitle?.primaryBold?G`<strong
                                >${this.topTitle?.primaryText}</strong
                              >`:G`<span>${this.topTitle?.primaryText}</span>`}
                          ${this.topTitle?.secondaryText?this.topTitle?.secondaryBold?G`<strong
                                  >${this.topTitle?.secondaryText}</strong
                                >`:G`<span
                                  >${this.topTitle?.secondaryText}</span
                                >`:""}
                        </div>
                      </div>
                    `:""}
                ${this.bottomTitle?.primaryText?G`
                      <div class="bottom-title">
                        <div class="icon-wrapper">
                          <img src="${this.bottomTitle?.icon||""}" />
                        </div>
                        <div class="title-wrapper">
                          ${this.bottomTitle?.primaryBold?G`<strong
                                >${this.bottomTitle?.primaryText}</strong
                              >`:G`<span
                                >${this.bottomTitle?.primaryText}</span
                              >`}
                          ${this.bottomTitle?.secondaryText?this.bottomTitle?.secondaryBold?G`<strong
                                  >${this.bottomTitle?.secondaryText}</strong
                                >`:G`<span
                                  >${this.bottomTitle?.secondaryText}</span
                                >`:""}
                        </div>
                      </div>
                    `:""}
                ${this.files?.length>0?G`<div
                      class=${(0,ew.Z)("files-container",{"auto-scroll":"AUTO"===this.carousel&&this.files?.length>1,"manual-scroll":"MANUAL"===this.carousel&&this.files?.length>1})}
                    >
                      <div
                        class=${(0,ew.Z)("files-wrapper",{"image-placement":["small","medium"].includes(this.imageSize?.toLowerCase()),bottom_26:["small","medium"].includes(this.imageSize?.toLowerCase())&&this.bottomTitle?.primaryText,"justify-center":this.files?.length===1})}
                      >
                        ${this.files?.map((e,t)=>["IMAGE","IMG"].includes(e.type)?G`
                              <div
                                class="file-item ${this.imageSize?.toLowerCase()}"
                              >
                                <img src="${e.url}" alt="" />
                              </div>
                            `:"VIDEO"===e.type?G`
                              <div
                                class="file-item ${this.imageSize?.toLowerCase()}"
                              >
                                <iframe
                                  id="pw-video-player"
                                  src="${this.videoUrls[t]||""}"
                                  allow="autoplay; accelerometer; fullscreen; encrypted-media; gyroscope; picture-in-picture; local-network-access;"
                                  @click=${this._handleIframeClick}
                                  style="pointer-events: none;"
                                  tabindex="-1"
                                ></iframe>
                              </div>
                            `:null)}
                      </div>
                    </div>`:""}
              </div>
            `}

        <div class="header ${this.darkMode?"dark-theme":""}">
          <div class="title-section">
            ${this.isWebinarType?"":G`<div class="tags">
                  ${this.category?G`<div class="badge-wrapper">
                        <div
                          class="category ${this.darkMode?"dark-theme":""}"
                        >
                          ${this.category}
                        </div>
                      </div>`:""}
                  ${this.isVernacular&&this.isMultilingual&&this.multiLingualSymbols.length>0?G`
                        <div class="language-wrapper">
                          ${this.multiLingualSymbols?.slice(0,3).map(e=>G`<div class="multilingual-badge">
                                  ${e}
                                </div>`)}
                          ${this.multiLingualSymbols.length>3?G`<div class="multilingual-badge">
                                +${this.multiLingualSymbols.length-3}
                              </div>`:""}
                        </div>
                      `:""!==this.language?G`<div
                          class="language-badge ${this.darkMode?"dark-theme":""}"
                        >
                          ${this.language}
                        </div>`:""}
                </div>`}
            <div class="title ${this.darkMode?"dark-theme":""}">
              ${this.batchName||"NA"}
            </div>
          </div>

          ${this.descriptionPointers?.length>0?G`
                <div class="pointers">
                  ${this.descriptionPointers.map(e=>G`
                      <div class="description-pointer">
                        <span class="pointer-icon-wrapper">
                          ${e?.isOngoing?G`<span class="pulse-dot-shadow"></span>`:G` <img
                                src="${e.image}"
                                alt=""
                                class=${(0,ew.Z)("pointer-icon",{"icon-gray":this.darkMode})}
                              />`}
                        </span>
                        <span
                          class="pointer-text ${this.darkMode?"dark-theme":""}"
                          >${ex(e?.isOngoing?`<span class="ongoing-text">Ongoing</span><span class="ongoing-separator"> | </span>${e.text}`:e.text)}</span
                        >
                      </div>
                    `)}
                </div>
              `:""}
        </div>
        <div class="footer ${this.darkMode?"dark-theme":""}">
          ${this.isWebinarType?"":G`<div class="price-wrapper ${this.isFree?"hidden":""}">
                <div class="amounts">
                  ${this.cardDescription?G` <div
                        class="card-description ${this.darkMode?"dark-theme":""}"
                      >
                        ${this.cardDescription}
                      </div>`:""}
                  ${this._renderCurrentPrice()} ${this._renderTotalPrice()}
                </div>
                ${this._renderDiscount()}
              </div>`}
          <div
            class=${(0,ew.Z)("cta-group",{"with-arrow":this.showArrowButton,"full-width":this.isFree,"with-secondary":this.secondaryButtonText?.length>0,"webinar-full-width":this.isWebinarType})}
          >
            ${this.buttonText?.length>0?G`
                  <button
                    class="buy-btn ${this.darkMode?"dark-theme":""} ${this.isWebinarType?"webinar-type":""}"
                    @click=${this._handleBuyNowClick}
                    size="medium"
                    variant="primary"
                    style="${this.buttonColor?`background-color: ${this.buttonColor};`:""}"
                  >
                    ${this.buttonText}
                  </button>
                  ${this.showArrowButton?G` <button
                        class="arrow-btn ${this.darkMode?"dark-theme":""}"
                        @click=${this._handleArrowClick}
                        size="medium"
                        variant="secondary"
                      >
                        ${eg("chevron-right",24,24)}
                      </button>`:""}
                  ${this.secondaryButtonText?.length>0?G`
                        <button
                          class="secondary-btn ${this.darkMode?"dark-theme":""}"
                          @click=${this._handleSecondaryClick}
                          size="medium"
                          variant="secondary"
                        >
                          ${this.secondaryButtonText}
                        </button>
                      `:""}
                `:G`
                  <button
                    class="buy-btn ${this.darkMode?"dark-theme":""}"
                    .onClick=${this._handleExploreClick}
                    size="medium"
                    variant="primary"
                  >
                    ${this.isFree?"Enroll Now":"Explore"}
                  </button>
                `}
          </div>
        </div>
      </div>

      ${this.offeringStrip?.text&&!this.showNewStrip?G`<div
            class="${this.showNewStrip?"offering-strip-new":"offering-strip"} ${this.darkMode?"dark-theme":""}"
            style="--gradient-colors: ${this.offeringStrip.gradient?.join(", ")}"
          >
            ${this.offeringStrip.icon?G`<span class="offering-icon">
                  <img src="${this.offeringStrip.icon}" alt="" />
                </span>`:""}

            <span class="offering-text"
              >${ex(this.getOfferingText(this.offeringStrip.text))}</span
            >
          </div>`:""}
      ${this.showNewStrip&&(this.offeringStrip||this.bottomStrip)?G`<div class="footer-strip ${this.darkMode?"dark-theme":""}">
            ${this.offeringStrip?.text?G`<div
                  style="${this.offeringStrip?.bgColor?`background-color: ${this.offeringStrip.bgColor};`:""}"
                  class="offer-strip-container"
                >
                  <div
                    style="border-bottom: 12px solid ${this.offeringStrip?.bgColor};"
                    class="triangle"
                  ></div>
                  ${this.offeringStrip?.label?G`<span
                        style="${this.offeringStrip?.labelBgColor?`background-color: ${this.offeringStrip.labelBgColor};`:""}"
                        class="offering-label"
                        >${this.offeringStrip.label}</span
                      >`:""}
                  ${this.offeringStrip?.text?G`<span
                        class="offering-text ${this.darkMode?"dark-theme":""}"
                        >${this.offeringStrip?.text}</span
                      >`:""}
                </div>`:""}
            ${this.bottomStrip?.text?G`<div
                  class="bottom-strip ${this.darkMode?"dark-theme":""}"
                >
                  <div class="bottom-strip-container">
                    <div class="bottom-icon-wrapper">
                      <img src="${this.bottomStrip.icon}" />
                    </div>
                    ${this._renderBottomStripText()}
                  </div>
                </div>`:""}
          </div>`:""}
      ${this.showBatchRedirectionStrip?G` <div
            class="know-more-strip"
            @click=${this._handleKnowMoreClick}
          >
            <span>Know More about</span
            ><span class="redirection-title">Master Course</span
            ><span class="know-more-icon">${eg("right-arrow")}</span>
          </div>`:""}
    </div>`}}customElements.define("batch-card",e$);let ek=d`
  .wrapper {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 16px;
    background: #fff;
    border: 1.5px solid #d9dce1;
    border-radius: 16px;
    width: 236px;
    min-width: 236px;
    cursor: pointer;
    position: relative;
    transition: border 0.5s ease;

    &:hover {
      border: 1.5px solid #3d3d3d;
    }
  }

  .wrapper > img {
    width: 64px;
    height: 64px;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #3d3d3d;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .combo-badge {
    background: #fac515;
    border-radius: 7px;
    font-size: 14px;
    padding: 4px 16px;
    font-weight: 600;
    position: absolute;
    top: -25%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 640px) {
    .wrapper {
      width: 95px;
      min-width: 95px;
      border-radius: 12px;
      padding: 12px;
      gap: 8px;
      flex-direction: column;
      text-align: center;
    }

    .wrapper > img {
      width: 40px;
      height: 40px;
    }

    .title {
      font-size: 14px;
      max-width: 65px;
    }

    .combo-badge {
      top: -15%;
    }

    .title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
  }
`,eS={name:{type:String},imageUrl:{type:String},tag:{type:String}};class ej extends ef{static get styles(){return ek}static get properties(){return eS}constructor(){super(),this.name="",this.imageUrl="",this.tag=""}connectedCallback(){super.connectedCallback()}render(){return G`
      <div class="wrapper">
        ${this.imageUrl?G`<img src="${this.imageUrl}" alt="" />`:""}
        <div class="title">${this.name}</div>

        ${this.tag?G`<div class="combo-badge">${this.tag}</div>`:""}
      </div>
    `}}customElements.define("quick-access-tile",ej);let eE=d`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  .card_khazana {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
  }
  .thumbnail {
    aspect-ratio: 256/121;
    background: #decef0;
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .khazana_title {
    font-weight: 600;
    font-size: 16px;
    color: #3d3d3d;
    line-height: 24px;
    margin: 0;
  }
  .khazana_teacher {
    font-weight: 400;
    font-size: 14px;
    color: #757575;
    line-height: 20px;
    margin: 0;
  }

  .chip {
    position: absolute;
    top: 0;
    left: 0;
    background: #f97066;
    color: #fff;
    font-weight: 600;
    font-size: 10px;
    line-height: 16px;
    padding: 0.25rem 0.5rem;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }
`,eO={thumbnail:{type:String},cardTitle:{type:String},teacher:{type:String},chip:{type:String},customHtmlElementThumbnail:{type:String}};class eP extends ef{static get styles(){return eE}static get properties(){return eO}constructor(){super(),this.thumbnail="",this.cardTitle="",this.teacher="",this.chip="",this.customHtmlElementThumbnail=void 0}_onCardClick(e){let t=new CustomEvent("card-click",{detail:{originalEvent:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return G`
      <div class="card_khazana" @click="${this._onCardClick}">
        <div class="thumbnail">
          ${this.chip?G`<div class="chip">${this.chip}</div>`:""}
          ${this.customHtmlElementThumbnail?G`<div class="teacher-img custom-html-thumbnail">
                ${"string"==typeof this.customHtmlElementThumbnail?ex(this.customHtmlElementThumbnail):this.customHtmlElementThumbnail}
              </div>`:G`<img
                src="${this.thumbnail}"
                alt="thumbnail"
                style="width:100%;height:auto;object-fit:cover;"
              />`}
        </div>
        <div>
          <p class="khazana_title">${this.cardTitle}</p>
          <p class="khazana_teacher">By ${this.teacher}</p>
        </div>
      </div>
    `}}customElements.define("khazana-card",eP);let eN=d`
  .teacher-card-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }

  .teacher-card {
    background-image: url("https://static.pw.live/react-batches/assets/images/teacher_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    aspect-ratio: 16 / 12;
  }

  .teacher-details {
    display: flex;
    flex-direction: column;
    height: 20px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    flex-shrink: 0;
  }

  .teacher-name {
    font-family: "Reddit Sans", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #1b2124;
    text-align: center;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .teacher-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;class eM extends ef{static get styles(){return eN}static get properties(){return{thumbnail:{type:String},name:{type:String}}}constructor(){super(),this.thumbnail="",this.name=""}_onCardClick(e){let t=new CustomEvent("card-click",{detail:{originalEvent:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return G`
      <div class="teacher-card-container" @click="${this._onCardClick}">
        <div class="teacher-card">
          <img
            class="teacher-thumbnail"
            src="${this.thumbnail}"
            alt="${this.name}"
          />
        </div>
        <div class="teacher-details">
          <div class="teacher-name">${this.name}</div>
        </div>
      </div>
    `}}customElements.define("teacher-card",eM);let eT=d`
  .video-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: "Reddit Sans", sans-serif;
    position: relative;
  }

  .video-main-body {
    background: #fff;
    border-radius: 12px 12px 6px 6px;
    border: 1px solid #efefef;
    overflow: hidden;
    margin-bottom: -1px;
    position: relative;
  }

  .video-content-wrapper {
    padding: 12px 16px 8px 16px;
  }

  .video-content-info {
    padding: 0 16px 8px 16px;
  }

  .video-thumbnail {
    width: 100%;
    height: 116px;
    border-radius: 8px;
    position: relative;
    background: #decef0;
    overflow: hidden;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .video-background-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(37, 35, 35, 0.15) 0%,
      rgba(21, 19, 19, 0.54) 100%
    );
    border-radius: 8px;
    z-index: 2;
  }

  .teacher-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .teacher-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .teacher-img.custom-html-thumbnail {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
  }

  .teacher-img.custom-html-thumbnail * {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .play-button {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    z-index: 3;
  }

  .play-icon {
    width: 100%;
    height: 100%;
  }

  .video-meta {
    position: absolute;
    left: 8px;
    bottom: 8px;
    background: #eaecef;
    border-radius: 4px;
    padding: 6px 8px;
    font-size: 10px;
    color: #3d3d3d;
    display: flex;
    align-items: center;
    gap: 2px;
    font-weight: 400;
    z-index: 3;
  }

  .video-duration-pill {
    background: #f1efff;
    color: #3d3d3d;
    border-radius: 56px;
    padding: 2px 8px;
    font-size: 10px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .video-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .video-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .video-title {
    font-size: 14px;
    font-weight: 700;
    color: #3d3d3d;
    line-height: 20px;
    flex: 1;
    margin-right: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .video-teacher {
    font-size: 12px;
    color: #3d3d3d;
    font-weight: 400;
    line-height: 18px;
  }

  .video-batch {
    font-size: 12px;
    color: #757575;
    line-height: 18px;
  }

  .video-footer {
    background: #fff;
    border: 1px solid #efefef;
    border-top: none;
    border-radius: 6px 6px 12px 12px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3d3d3d;
    position: relative;
  }

  .video-footer::before {
    content: "";
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: repeating-linear-gradient(
      90deg,
      #d9dce1 0 10px,
      #0000 10px 14px
    );
    width: 98%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 2px;
  }

  .video-count {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    min-width: 0;
  }

  .video-count span {
    font-family: "Reddit Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #3d3d3d;
  }

  .video-icon {
    width: 12px;
    height: 12px;
    padding: 4px;
    box-sizing: content-box;
    flex-shrink: 0;
  }

  .video-link {
    background: none;
    border: none;
    color: #3d3d3d;
    font-family: "Reddit Sans", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    padding: 0;
    white-space: nowrap;
  }

  .arrow-icon {
    width: 12px;
    height: 12px;
    padding: 4px;
    box-sizing: content-box;
    flex-shrink: 0;
  }
`,eL={cardTitle:{type:String},thumbnailUrl:{type:String},videoCount:{type:String},duration:{type:String},views:{type:String},teacherName:{type:String},batchName:{type:String},onVideoClick:{type:Function},onChapterLinkClick:{type:Function},playIconUrl:{type:String},backgroundImage:{type:String},teacherImage:{type:String},customHtmlElementThumbnail:{type:String}};class eD extends ef{static get styles(){return eT}static get properties(){return eL}constructor(){super(),this.thumbnailUrl="",this.views="",this.cardTitle="",this.teacherName="",this.batchName="",this.duration="",this.videoCount="",this.playIcon="",this.onVideoClick=()=>{},this.onChapterLinkClick=()=>{},this.customHtmlElementThumbnail=void 0}_onChapterLinkClick(e){let t=new CustomEvent("chapter-link-click",{detail:{originalEvent:e},bubbles:!0,composed:!0});this.onChapterLinkClick&&"function"==typeof this.onChapterLinkClick&&this.onChapterLinkClick(),this.dispatchEvent(t)}_onVideoClick(e){let t=new CustomEvent("video-click",{detail:{originalEvent:e},bubbles:!0,composed:!0});this.onVideoClick&&"function"==typeof this.onVideoClick&&this.onVideoClick(),this.dispatchEvent(t)}render(){return G`
      <div class="video-card">
      <div class="video-main-body">
        <div class="video-content-wrapper" >
        <div class="video-thumbnail" @click="${this._onVideoClick}">
          <div class="video-background-overlay"></div>

          <div class="teacher-image">
           ${this.customHtmlElementThumbnail?G`<div class="teacher-img custom-html-thumbnail">
                   ${"string"==typeof this.customHtmlElementThumbnail?ex(this.customHtmlElementThumbnail):this.customHtmlElementThumbnail}
                 </div>`:G`<div
                   class="teacher-img"
                   style="background-image: url('${this.thumbnailUrl}');"
                 ></div>`}
          </div>

          <div class="play-button">
          ${this.playIcon?G`<img
                  class="play-icon"
                  src="${this.playIcon}"
                  alt="play"
                />`:G`<svg class="play-icon" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10.8"
                    fill="white"
                    fill-opacity="0.8"
                  />
                  <path d="M10 8l6 4-6 4V8z" fill="#3d3d3d" />
                </svg>`}
          </div>

          ${this.views?G`
                  <div class="video-meta">
                    <img
                      src="https://static.pw.live/react-batches/assets/images/eye.svg"
                      alt="views"
                    />
                    <span>${this.views}</span>
                  </div>
                `:""}
        </div>
        </div>

        <div class="video-content-info">
        <div class="video-info">
          <div class="video-title-row">
          <div class="video-title">${this.cardTitle}</div>
          <div class="video-duration-pill">${this.duration}</div>
          </div>
          <div class="video-teacher">By ${this.teacherName}</div>
          <div class="video-batch">${this.batchName}</div>
        </div>
        </div>
      </div>

        
         <div class="video-footer">
          <div class="video-count">
            <img
            class="video-icon"
            src="https://static.pw.live/react-batches/assets/images/video_camera.svg"
            alt="videos"
            />
            <span>${this.videoCount} Videos</span>
          </div>
          <button class="video-link" @click="${this._onChapterLinkClick}">
            <span>View Chapter</span>
            <img
            class="arrow-icon"
            src="https://static.pw.live/react-batches/assets/images/arrow_right_icon.svg"
            alt="arrow"
            />
          </button>
        </div>
      </div>
      </div>
    `}}customElements.define("khazana-video-card",eD);let eA=d`
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 12px;
    padding: 20px;
    background-color: white;
    border: 1px solid #d9dce1;
  }

  .heading {
    color: #1b2124;
    font-size: 24px;
    font-weight: 600;
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }

  .heading.fade-out {
    opacity: 0;
  }

  .heading.fade-in {
    opacity: 1;
  }

  .pointers {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .description-pointer {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .pointer-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 24px;
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
  }

  .pointer-icon {
    display: block;
    width: 24px;
    height: 24px;
  }

  .pointer-text {
    color: #3d3d3d;
    white-space: nowrap;
    overflow: hidden;
    font-size: 18px;
    text-overflow: ellipsis;
    width: calc(100% - 28px);
    display: block;
  }

  .pointer-text-bold {
    font-weight: 600;
  }

  .clickable-exam-text {
    cursor: pointer;
    color: #3d3d3d;
    text-decoration: underline;
  }

  .price-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .separator {
    height: 1px;
    background-color: #d9dce1;
    width: 100%;
  }

  .price-label {
    font-size: 16px;
    color: #757575;
  }

  .free-label {
    font-size: 20px;
    color: #1b2124;
    font-weight: 700;
  }

  .price-wrapper {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }

  .total {
    font-size: 32px;
    color: #1b2124;
    line-height: 1;
    font-weight: 600;
  }

  .price {
    font-size: 16px;
    color: #757575;
    line-height: 1;
    text-decoration: line-through;
  }

  .discount {
    line-height: 1;
    color: #1b7938;
    font-weight: 600;
  }

  .course-tag {
    text-decoration: underline;
    cursor: pointer;
    color: #3d3d3d;
    margin-top: 2px;
  }

  .cta-button {
    font-family: "RedditSans", sans-serif;
    background: #1b2124;
    border-radius: 6px;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 28px;
    padding: 14px 28px;
    cursor: pointer;

    &:hover {
      background-color: #2d3639 !important;
    }
  }

  .cta-button.disabled {
    background: #a0a0a0;
    cursor: not-allowed;

    &:hover {
      background: #a0a0a0 !important;
    }
  }

  @media (max-width: 640px) {
    .pointer-text {
      font-size: 14px;
    }

    .pointer-icon-wrapper {
      width: 20px;
      height: 20px;
    }

    .pointer-icon {
      width: 20px;
      height: 20px;
    }

    .total {
      font-size: 20px;
      line-height: 1;
    }

    .price {
      font-size: 14px;
      line-height: 1;
    }

    .discount {
      font-size: 14px;
      line-height: 1;
    }

    .description-pointer {
      gap: 4px;
    }
    .cta-button {
      font-size: 16px;
        padding: 12px 24px;
    }

    .card-container {
      gap: 12px;
      padding: 20px 16px;
      line-height: 20px;
    }

    .course-tag {
      font-size: 14px;
    }

    .free-label {
      font-size: 16px;
    }

    .price-label {
      font-size: 14px;
    }
      .separator {
          visibility: hidden;
          
      }
  }
`,eI={type:Boolean,converter:{fromAttribute:e=>null!==e&&"false"!==e&&!!e}},eB={price:{type:Number},total:{type:Number},discount:{type:Number},buttonText:{type:String,attribute:"button-text"},descriptionPointers:{type:Array,attribute:"description-pointers",converter:{fromAttribute:e=>e?JSON.parse(e):[],toAttribute:e=>JSON.stringify(e)}},showMahapackExamModal:eI,examCount:{type:Number},showStartTag:eI,showCourseFeeTag:eI,showBatchName:eI,batchName:{type:String},isBatchPurchased:eI,hideBatchName:eI};class eR extends ef{static get styles(){return eA}static get properties(){return eB}constructor(){super(),this._previousShowBatchName=!1,this._headingAnimationClass="",this._isAnimating=!1,this.descriptionPointers=[],this.price,this.total,this.discount,this.buttonText="",this.showMahapackExamModal=!1,this.examCount=0,this.handleOnButtonClick=()=>{},this.handleCourseFeeClick=()=>{},this.showStartTag=!1,this.showCourseFeeTag=!1,this.showBatchName=!1,this.batchName="",this._previousShowBatchName=!1,this._headingAnimationClass="",this._isAnimating=!1,this.isBatchPurchased=!1,this.hideBatchName=!1}updated(e){if(super.updated(e),e.has("showBatchName")&&!this._isAnimating){let e=!!this.showBatchName;this._previousShowBatchName!==e&&this._animateHeadingChange(),this._previousShowBatchName=e}}_animateHeadingChange(){this._isAnimating=!0,this._headingAnimationClass="fade-out",this.requestUpdate(),setTimeout(()=>{this._headingAnimationClass="fade-in",this.requestUpdate(),setTimeout(()=>{this._headingAnimationClass="",this._isAnimating=!1,this.requestUpdate()},300)},300)}processPointerText(e){let t=e.split("#"),n="",r=e=>this.showMahapackExamModal?e.replace(`${this.examCount} other exams`,`<span class="clickable-exam-text" onclick="this.getRootNode().host.handleExamClick()">${this.examCount} other exams</span>`):e;for(let e=0;e<t.length;e++)if(e%2==0)n+=r(t[e]);else{let i=r(t[e]);n+=`<span class="pointer-text-bold">${i}</span>`}return n}handleExamClick(){this.dispatchEvent(new CustomEvent("exam-click",{detail:{action:"mahapack-exam-modal"},bubbles:!0,composed:!0}))}_handleButtonClick(e){e.preventDefault(),this.isBatchPurchased||this.handleOnButtonClick()}_handleCourseFeeClick(e){e.preventDefault(),this.handleCourseFeeClick()}render(){return G`
      <div class="card-container">
        ${this.hideBatchName?"":G`<div class="heading ${this._headingAnimationClass}">
              ${this.showBatchName?this.batchName:"Batch Overview"}
            </div>`}
        ${this.descriptionPointers?.length>0?G`
              <div class="pointers">
                ${this.descriptionPointers.map(e=>{let t=this.processPointerText(e.text);return G`
                    <div class="description-pointer">
                      <span class="pointer-icon-wrapper">
                        ${G` <img
                          src="${e.image}"
                          alt=""
                          class="pointer-icon"
                        />`}
                      </span>
                      <span class="pointer-text"
                        >${ex(t)}</span
                      >
                    </div>
                  `})}
              </div>
            `:""}
        ${void 0!==this.total?G`<div class="price-section">
              <div class="separator"></div>
              <div>
                ${this.showStartTag?G`<div class="price-label">Starts at</div>`:""}
                ${0===this.total?G`<div class="free-label">Free</div>`:""}
                <div class="price-wrapper">
                  ${this.total>0?G`<span class="total">₹${this.total}</span>`:""}
                  ${void 0!==this.price&&this.price>0?G`<span class="price">₹${this.price}</span>`:""}
                  ${this.discount>0?G`<span class="discount"
                        >(${this.discount}% OFF)</span
                      >`:""}
                </div>
                ${this.showCourseFeeTag?G`<div
                      @click="${this._handleCourseFeeClick}"
                      class="course-tag"
                    >
                      View Course Fee
                    </div>`:""}
              </div>
            </div>`:""}
        ${this.buttonText?.length>0?G`<button
              class="cta-button ${this.isBatchPurchased?"disabled":""}"
              @click="${this._handleButtonClick}"
            >
              ${this.buttonText}
            </button>`:""}
      </div>
    `}}customElements.define("batch-overview-price-card",eR);let eF=d`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  .chip-card {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    width: fit-content;
    gap: 4px;
    height: 100%;
  }

  .chip-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
    display: inline-block;
  }
`,ez={text:{type:String},bgColor:{type:String},textColor:{type:String},preIcon:{type:String},postIcon:{type:String}};class eZ extends ef{static get styles(){return eF}static get properties(){return ez}constructor(){super(),this.text="",this.bgColor="#e0e0e0",this.textColor="#000000",this.preIcon="",this.postIcon=""}render(){return G`
      <div
        class="chip-card"
        style="background-color: ${this.bgColor}; color: ${this.textColor};"
      >
        ${this.preIcon?G`<img class="chip-icon" src="${this.preIcon}" alt="" />`:""}
        ${this.text}
        ${this.postIcon?G`<img class="chip-icon" src="${this.postIcon}" alt="" />`:""}
      </div>
    `}}customElements.define("chip-card",eZ);let eH=d`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  .carousel-container {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .carousel-container.auto-scroll {
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .carousel-container.auto-scroll::-webkit-scrollbar {
    display: none;
  }

  .carousel-container.manual-scroll {
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin;
  }

  .carousel-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    gap: 16px;
  }

  .carousel-wrapper.image-placement {
    gap: 12px;
    align-items: flex-end;
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow-y: hidden;
    overflow-x: auto;
  }

  .carousel-wrapper.justify-center {
    justify-content: center;
  }

  .pl_10 {
    padding-left: 10px;
  }

  .pr_10 {
    padding-right: 10px;
  }

  .file-item {
    aspect-ratio: 2 / 1;
    min-width: 100%;
    overflow: hidden;
    border-radius: 18px;
  }

  .file-item iframe {
    width: 100%;
    height: 100%;
    border: none;
    object-fit: cover;
  }

  .file-item.medium {
    width: 516px;
    min-width: 516px;
    aspect-ratio: 2 / 1;
  }

  .file-item.small {
    height: 84px;
    width: 84px;
    min-width: 84px;
  }

  .file-item.medium img,
  .file-item.small img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .file-item > img {
    height: 100%;
    width: 100%;
    position: relative;
    display: block;
  }

  .video-thumbnail-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .video-thumbnail-wrapper.clickable {
    cursor: pointer;
  }

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    pointer-events: none;
  }

  .play-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .file-item {
      border-radius: 0px;
    }

    .pl_10 {
      padding-left: 0px;
    }
  }
`,eW={files:{type:Array},videoUrls:{type:Array},carousel:{type:String},imageSize:{type:String},playIcon:{type:String}};class eV extends ef{static get styles(){return eH}static get properties(){return eW}constructor(){super(),this._autoScrollInterval=null,this._isHovered=!1,this._playingVideos=new Set,this._autoPlayTimeouts=[],this.files=[],this.videoUrls=[],this.carousel=void 0,this.imageSize=void 0,this.playIcon=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._clearAutoScroll(),this._clearAutoPlayTimeouts()}_clearAutoScroll(){null!==this._autoScrollInterval&&(clearInterval(this._autoScrollInterval),this._autoScrollInterval=null)}_clearAutoPlayTimeouts(){this._autoPlayTimeouts.forEach(e=>clearTimeout(e)),this._autoPlayTimeouts=[]}_setupAutoPlayVideos(){this._clearAutoPlayTimeouts(),this.files.forEach((e,t)=>{if("VIDEO"===e.type&&e.isAutoPlayEnabled&&!this._playingVideos.has(t)){let e=setTimeout(()=>{this._playingVideos.add(t),this.requestUpdate()},1e3);this._autoPlayTimeouts.push(e)}})}_setupAutoScroll(){"AUTO"===this.carousel&&this.files.length>0&&setTimeout(()=>{let e=this.shadowRoot?.querySelector(".carousel-container.auto-scroll");if(e){let t=0;this._clearAutoScroll(),this._autoScrollInterval=setInterval(()=>{if(!this._isHovered){let n=e.querySelectorAll(".file-item");if(n.length>0){let r=n[0].offsetWidth,i=parseInt(getComputedStyle(e).gap)||16,o=t*(r+i);e.scrollTo({left:o,behavior:"smooth"}),t=(t+1)%this.files.length}}},2e3)}},100)}_handleMouseEnter(){this._isHovered=!0}_handleMouseLeave(){this._isHovered=!1}_handleThumbnailClick(e){this._playingVideos.add(e),this.requestUpdate();let t=new CustomEvent("carousel-video-play",{detail:{index:e,videoUrl:this.videoUrls?.[e]},bubbles:!0,composed:!0});this.dispatchEvent(t)}updated(e){super.updated(e),this._setupAutoScroll(),e.has("files")&&this._setupAutoPlayVideos()}_handleIframeClick(e){e.preventDefault(),e.stopPropagation();let t=new CustomEvent("carousel-video-click",{detail:{originalEvent:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return 0===this.files.length?G``:G`
      <div
        class=${(0,ew.Z)("carousel-container",{"auto-scroll":"AUTO"===this.carousel&&this.files.length>1,"manual-scroll":"MANUAL"===this.carousel&&this.files.length>1})}
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
      >
        <div
          class=${(0,ew.Z)("carousel-wrapper",{"image-placement":["small","medium"].includes(this.imageSize?.toLowerCase()||""),"justify-center":1===this.files.length})}
        >
          ${this.files.map((e,t)=>{let n=0===t&&this.files.length>1?"pl_10":t===this.files.length-1&&this.files.length>1?"pr_10":"";if(["IMAGE","IMG"].includes(e.type))return G`
                <div
                  class="file-item ${this.imageSize?.toLowerCase()} ${n}"
                >
                  <img src="${e.url}" alt="" />
                </div>
              `;if("VIDEO"===e.type){let r=this._playingVideos.has(t);return G`
                <div
                  class="file-item ${this.imageSize?.toLowerCase()} ${n}"
                >
                  ${e.thumbnail&&!r?G`<div
                        class="video-thumbnail-wrapper clickable"
                        @click=${()=>this._handleThumbnailClick(t)}
                      >
                        <img src="${e.thumbnail}" alt="Video thumbnail" />
                        ${this.playIcon?G`<div class="play-icon">
                              <img src="${this.playIcon}" alt="Play" />
                            </div>`:""}
                      </div>`:G`<iframe
                        src="${this.files[t].url||""}"
                        allow="autoplay; accelerometer; fullscreen; encrypted-media; gyroscope; picture-in-picture; local-network-access;"
                        @click=${this._handleIframeClick}
                        tabindex="-1"
                      ></iframe>`}
                </div>
              `}return null})}
        </div>
      </div>
    `}}customElements.define("video-image-carousel",eV);let eU=d`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  .group-carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    touch-action: pan-y;
  }

  .group-carousel-track {
    display: flex;
    gap: 2px;
    will-change: transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .group-carousel-track.animated {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .carousel-item {
    flex-shrink: 0;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .carousel-item.exiting {
    animation: exitShrink 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    transform-origin: center center;
  }

  @keyframes exitShrink {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.75);
      opacity: 0;
    }
  }

  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .placeholder {
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    border-radius: 4px;
  }
`,eq={items:{type:Array},visibleCount:{type:Number},autoScroll:{type:Boolean},scrollSpeed:{type:Number},aspectRatio:{type:String}};class eY extends ef{static get styles(){return eU}static get properties(){return eq}constructor(){super(),this._position=0,this._isTransitioning=!1,this._enableTransition=!1,this._autoScrollInterval=null,this._isHovered=!1,this._shiftPx=0,this._itemWidthPx=0,this.items=[],this.visibleCount=1,this.autoScroll=!1,this.scrollSpeed=3e3,this.aspectRatio="16 / 9"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._clearAutoScroll()}firstUpdated(){this._measure(),this._position=this.items.length,this.requestUpdate()}updated(e){super.updated(e),(e.has("items")||e.has("visibleCount"))&&(this._measure(),e.has("items")&&(this._position=this.items.length)),(e.has("autoScroll")||e.has("scrollSpeed")||e.has("items")||e.has("visibleCount"))&&this._setupAutoScroll()}_measure(){let e=this.shadowRoot?.querySelector(".group-carousel-container");if(!e)return;let t=e.clientWidth;0!==t&&(this._itemWidthPx=(t-(this.visibleCount-1)*2)/this.visibleCount,this._shiftPx=this._itemWidthPx+2)}_clearAutoScroll(){null!==this._autoScrollInterval&&(clearInterval(this._autoScrollInterval),this._autoScrollInterval=null)}_setupAutoScroll(){this._clearAutoScroll(),this.autoScroll&&this.items.length>this.visibleCount&&(this._autoScrollInterval=window.setInterval(()=>{this._isHovered||this._scrollNext()},this.scrollSpeed))}_scrollNext(){this._isTransitioning||this.items.length<=this.visibleCount||(this._measure(),this._isTransitioning=!0,this._enableTransition=!0,this._position--,this.requestUpdate(),this._onSlideEnd())}_onSlideEnd(){let e=this.shadowRoot?.querySelector(".group-carousel-track"),t=!1,n=()=>{t||(t=!0,e?.removeEventListener("transitionend",r),this._isTransitioning=!1,this._position<=0&&(this._enableTransition=!1,this._position+=this.items.length),this.requestUpdate())},r=e=>{"transform"===e.propertyName&&n()};e?.addEventListener("transitionend",r),setTimeout(n,800)}_handleMouseEnter(){this._isHovered=!0}_handleMouseLeave(){this._isHovered=!1}render(){if(0===this.items.length)return G``;if(this.items.length<=this.visibleCount)return G`
        <div class="group-carousel-container">
          <div class="group-carousel-track">
            ${this.items.map(e=>this._renderItem(e,!1))}
          </div>
        </div>
      `;let e=[...this.items,...this.items],t=this._shiftPx>0?this._position*this._shiftPx:0;return G`
      <div
        class="group-carousel-container"
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
      >
        <div
          class="group-carousel-track ${this._enableTransition?"animated":""}"
          style="transform:translate3d(${-t}px,0,0)"
        >
          ${e.map((e,t)=>{let n=this._isTransitioning&&t===this._position+this.visibleCount;return this._renderItem(e,n)})}
        </div>
      </div>
    `}_renderItem(e,t){let n=this._itemWidthPx>0?`${this._itemWidthPx}px`:`calc((100% - ${(this.visibleCount-1)*2}px) / ${this.visibleCount})`,r=e.backgroundImage?`background-image:url(${e.backgroundImage});`:e.backgroundColor?`background-color:${e.backgroundColor};`:"";return G`
      <div
        class="carousel-item ${t?"exiting":""}"
        style="width:${n};min-width:${n};aspect-ratio:${this.aspectRatio};${r}"
      >
        ${e.imageUrl?G`<img src="${e.imageUrl}" alt="" />`:G`<div class="placeholder"></div>`}
      </div>
    `}}customElements.define("group-wise-image-carousel",eY);let eG=d`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  .schedule-card {
    background: #ffffff;
    border: 1px solid #efefef;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100%;
  }

  .day-header {
    background: #eff8ff;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    margin: -16px -16px 0 -16px;
  }

  .day-text {
    font-family: "DM Serif Display", serif;
    font-size: 24px;
    font-weight: 400;
    color: #175cd3;
    margin: 0;
    line-height: normal;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .schedule-item {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
  }

  .status-indicator {
    width: 16px;
    height: 16px;
    border: 1px solid #b7b7b7;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .schedule-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .time-text {
    font-family: "Reddit Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #757575;
    margin: 0;
    white-space: nowrap;
  }

  .subject-text {
    font-family: "Reddit Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #3d3d3d;
    margin: 0;
    white-space: nowrap;
  }

  .progression {
    height: 28px;
    padding: 0 8px;
    display: flex;
    align-items: center;
  }

  .progression-line {
    width: 1px;
    height: 100%;
    background: #d9dce1;
  }
`,eX={day:{type:String},schedules:{type:Array,converter:e=>{if(null===e)return[];if("string"==typeof e)try{return JSON.parse(e)}catch(e){return[]}return e}}};class eK extends ef{static get styles(){return eG}static get properties(){return eX}constructor(){super(),this.day="MON",this.schedules=[]}render(){return G`
      <div class="schedule-card">
        <div class="day-header">
          <p class="day-text">${this.day}</p>
        </div>

        <div class="timeline">
          ${this.schedules.map((e,t)=>G`
              <div class="schedule-item">
                <div class="status-indicator"></div>
                <div class="schedule-info">
                  <p class="time-text">${e.time}</p>
                  <p class="subject-text">${e.subject}</p>
                </div>
              </div>

              ${t<this.schedules.length-1?G`<div class="progression">
                    <div class="progression-line"></div>
                  </div>`:""}
            `)}
        </div>
      </div>
    `}}customElements.define("schedule-card",eK);let eJ=d`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  .table-wrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .tabular-schedule {
    border: 1px solid #d9dce1;
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    min-width: 400px;
  }

  .table-row {
    display: flex;
    width: 100%;
    min-width: max-content;
  }

  .table-cell {
    border: 1px solid #d9dce1;
    display: flex;
    align-items: center;
  }

  .header-cell {
    background: #d1e9ff;
    padding: 8px 6px;
    justify-content: center;
    flex: 1;
    min-width: 80px;
  }

  .header-cell:first-child {
    flex: 2;
    min-width: 120px;
    padding-left: 12px;
    padding-right: 12px;
    justify-content: flex-start;
  }

  .header-text {
    font-family: "Reddit Sans", sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    color: #1b2124;
    margin: 0;
    text-align: center;
  }

  .header-cell:first-child .header-text {
    text-align: left;
  }

  .body-cell {
    background: #ffffff;
    padding: 10px 6px;
    flex: 1;
    justify-content: center;
    min-width: 80px;
  }

  .body-cell:first-child {
    flex: 2;
    min-width: 120px;
    padding-left: 12px;
    padding-right: 12px;
    justify-content: flex-start;
  }

  .body-text {
    font-family: "Reddit Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #3d3d3d;
    margin: 0;
    text-align: center;
    width: 100%;
  }

  .body-cell:first-child .body-text {
    text-align: left;
  }

  /* Desktop styles */
  @media (min-width: 768px) {
    .header-cell {
      padding: 10px 8px;
      min-width: 100px;
    }

    .header-cell:first-child {
      min-width: 204px;
      padding-left: 16px;
      padding-right: 16px;
    }

    .header-text {
      font-size: 14px;
      line-height: 20px;
    }

    .body-cell {
      padding: 12px 8px;
      min-width: 100px;
    }

    .body-cell:first-child {
      min-width: 204px;
      padding-left: 16px;
      padding-right: 16px;
    }

    .body-text {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .divider {
    height: 1px;
    background: #d9dce1;
    width: 100%;
  }
`,eQ={rows:{type:Array,converter:e=>null===e?[]:"string"==typeof e?JSON.parse(e):e},columns:{type:Array,converter:e=>null===e?[]:"string"==typeof e?JSON.parse(e):e}};class e1 extends ef{static get styles(){return eJ}static get properties(){return eQ}constructor(){super(),this.rows=[],this.columns=["SUBJECT","START","END"]}render(){return G`
      <div class="table-wrapper">
        <div class="tabular-schedule">
          <!-- Header Row -->
          <div class="table-row">
            ${this.columns?.map(e=>G`
                <div class="table-cell header-cell">
                  <p class="header-text">${e}</p>
                </div>
              `)}
          </div>

          <!-- Body Rows -->
          ${this.rows.map(e=>G`
              <div class="table-row">
                <div class="table-cell body-cell">
                  <p class="body-text">${e.subject}</p>
                </div>
                <div class="table-cell body-cell">
                  <p class="body-text">${e.start}</p>
                </div>
                <div class="table-cell body-cell">
                  <p class="body-text">${e.end}</p>
                </div>
              </div>
            `)}
        </div>
      </div>
    `}}customElements.define("tabular-schedule-card",e1);let e0=d`
  .teacher-card-container {
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    background-size: cover;
    background-position: bottom;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .teacher-card-img {
    height: 164px;
    width: 100%;
  }

  .teacher-card-info {
    margin: 0px 12px 12px;
    background: #ffffff;
    padding: 16px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  }

  .personal-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .teacher-name {
    font-size: 20px;
    font-weight: 600;
    color: #1b2124;
    margin: 0;
    text-decoration: underline;
  }

  .teacher-exp {
    font-size: 12px;
    font-weight: 600;
    color: #1b2124;
    background: #eaecef;
    border-radius: 4px;
    padding: 4px 8px;
  }

  .teacher-subject {
    color: #3d3d3d;
    white-space: normal;
    word-break: normal;
    overflow-wrap: normal;
  }

  .teacher-subject-separator {
    display: inline-block;
    margin: 0 6px;
  }

  .teacher-demo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid #1b2124;
    background-color: transparent;
    cursor: pointer;
    font-family: "Reddit Sans", sans-serif;
    padding: 12px 24px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    text-align: center;
    border-radius: 6px;
    margin-top: 12px;

    svg {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }

    &:hover {
      background-color: #f8f8f8;
    }

    @media (max-width: 640px) {
      .teacher-name {
        font-size: 18px;
      }

      .teacher-subject {
        font-size: 14px;
      } 

        padding: 10px 20px;
        font-family: "Reddit Sans", sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: center;
    
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`,e2={thumbnailBg:{type:String},thumbnailTop:{type:String},name:{type:String},exp:{type:String},subject:{type:String},qualification:{type:String},showDemo:eI,onExploreClick:{type:Function}};class e3 extends ef{static get styles(){return e0}static get properties(){return e2}constructor(){super(),this.thumbnailBg="",this.thumbnailTop="",this.name="",this.exp="",this.subject="",this.qualification="",this.showDemo=!1,this.onExploreClick=()=>{},this.onWatchDemoClick=()=>{}}_onCardClick(e){e.preventDefault(),e.stopPropagation(),this.onExploreClick&&"function"==typeof this.onExploreClick&&this.onExploreClick()}_onDemoClick(e){e.preventDefault(),e.stopPropagation(),this.onWatchDemoClick&&"function"==typeof this.onWatchDemoClick&&this.onWatchDemoClick()}render(){return G`
      <div
        class="teacher-card-container"
        style="background-image: ${this.thumbnailBg?`url(${this.thumbnailBg})`:"none"}; background-color: ${this.thumbnailBg?"transparent":"#f8f8f8"};"
        @click="${this._onCardClick}"
      >
        <div
          class="teacher-card-img"
          style="background-image: url(${this.thumbnailTop}); background-size: contain; background-repeat: no-repeat; background-position: bottom;"
        ></div>

        <div class="teacher-card-info">
          <div class="personal-info">
            <div class="teacher-name">${this.name}</div>
            ${this.exp?G`<div class="teacher-exp">${this.exp}</div>`:""}
          </div>
          <div class="teacher-subject">
            ${this.subject}${this.subject&&this.qualification?G`<span class="teacher-subject-separator">&middot;</span>`:""}${this.qualification}
          </div>
          <div ?hidden="${!this.showDemo}">
            <button
              class="teacher-demo"
              @click="${this._onDemoClick}"
              size="medium"
              variant="secondary"
            >
              ${eg("play-solid-dark",24,24)} Watch Demo
            </button>
          </div>
        </div>
      </div>
    `}}customElements.define("teacher-card-desc-page",e3);let e5={icon:{type:String},heading:{type:String},mobile:{type:String}},e4=d`
  .callStripContainer {
    border: 1px solid #b2ddff;
    border-radius: 8px;
    background: #eff8ff;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .iconWrapper {
    flex: 0 0 20px;
    height: 20px;
    min-height: 20px;
    min-width: 20px;
    width: 20px;
  }

  .iconWrapper > img {
    display: block;
    height: 20px;
    width: 20px;
  }

  .callDetails {
    display: flex;
    color: #1b2124;
    width: 100%;
    justify-content: space-between;
  }

  .callAction {
    font-weight: 600;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    .callStripContainer {
      font-size: 14px;
      padding: 12px 16px;
      gap: 6px;
      border-radius: 0px;
    }
  }
`;class e7 extends ef{static get styles(){return e4}static get properties(){return e5}constructor(){super(),this.icon="",this.heading="",this.mobile="",this.handleOnCallClick=()=>{}}render(){return G`
      <div class="callStripContainer">
        <div class="iconWrapper">
          <img src="${this.icon}" alt="${this.heading}" />
        </div>
        <div class="callDetails">
          <span>${this.heading}</span>
          <span class="callAction" @click="${this._handleCallClick}">Call ${this.mobile}</span>
        </div>
      </div>
    `}_handleCallClick(e){e.preventDefault(),this.handleOnCallClick()}}customElements.define("call-strip",e7);let e6={batchName:{type:String},startDate:{type:String},nudgeText:{type:String},thumbnail:{type:String},chevronColor:{type:String},onCardClick:{type:Function}},e8=d`
  .container {
    display: flex;
    padding: 20px 18px;
    border: 1px solid #d9dce1;
    border-radius: 12px;
    cursor: pointer;
    gap: 12px;
    transition: border 0.5s ease;

    &:hover {
      border: 1px solid #b5bbc5;
    }
  }

  .thumbnail {
    height: 88px;
    width: 88px;
    flex-shrink: 0;
    border-radius: 8px;
  }

  .thumbnail > img {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  .contentWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
    width: 100%;
    overflow: hidden;
  }

  .nudgeText {
    color: #fb6514;
    font-weight: 600;
  }

  .batchName {
    font-size: 18px;
    font-weight: 600;
    color: #1b2124;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .startDate {
    color: #757575;
    display: flex;
    align-items: center;
  }

  .dot {
    height: 4px;
    width: 4px;
    background-color: #d9d9d9;
    border-radius: 50%;
    display: inline-block;
    margin: 0 6px;
  }

  .chevron-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .container:hover .chevron-icon {
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    .thumbnail {
      height: 80px;
      width: 80px;
    }

    .nudgeText {
      font-size: 12px;
    }
    .batchName {
      font-size: 16px;
    }
    .startDate {
      font-size: 14px;
    }
    .chevron-icon {
      display: none;
    }
    .container {
      padding: 16px;
    }
  }
`;class e9 extends ef{static get styles(){return e8}static get properties(){return e6}constructor(){super(),this.batchName="",this.startDate="",this.nudgeText="",this.thumbnail="",this.chevronColor="#1B2124",this.onCardClick=()=>{}}_onCardClick(e){e.preventDefault(),this.onCardClick()}render(){return G`
      <div class="container" @click=${this._onCardClick}>
        <div
          class="thumbnail"
          style="background-color: ${this.thumbnail?"transparent":"#f8f8f8"};"
        >
          ${this.thumbnail?G`<img src="${this.thumbnail}" />`:""}
        </div>
        <div class="contentWrapper">
          <div class="content">
            <span class="nudgeText">${this.nudgeText}</span>
            <span class="batchName">${this.batchName}</span>
            <span class="startDate"
              >Live classes <span class="dot"></span> ${this.startDate}</span
            >
          </div>
          <div class="chevron-icon" style="color: ${this.chevronColor}">
            ${eg("chevron-right",24,24)}
          </div>
        </div>
      </div>
    `}}customElements.define("horizontal-batch-card",e9);let te=d`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  .feature-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px 12px;
    border-radius: 12px;
    width: 100%;
    height: 100%;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }

  .icon-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    margin: 0;
  }

  @media (max-width: 640px) {
    .feature-card {
      padding: 12px 8px;
      gap: 12px;
      border-radius: 12px;
    }

    .icon-container {
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }

    .icon-container img {
      width: 32px;
      height: 32px;
    }

    .title {
      font-size: 12px;
      line-height: 24px;
    }
  }
`,tt={icon:{type:String},name:{type:String},backgroundColor:{type:String},titleColor:{type:String},borderColor:{type:String},showBorderBottom:{type:Boolean},titleWeight:{type:String},onClick:{type:Function}};class tn extends ef{static get styles(){return te}static get properties(){return tt}constructor(){super(),this.icon="",this.name="",this.backgroundColor="",this.titleColor="#3D3D3D",this.borderColor="",this.showBorderBottom=!1,this.titleWeight="600"}_getCardStyle(){let e=[];return this.backgroundColor&&e.push(`background-color: ${this.backgroundColor}`),this.borderColor&&e.push(`border: 1px solid ${this.borderColor}`),this.onClick&&e.push("cursor: pointer !important"),e.join("; ")}_getTitleStyle(){let e=[];return this.showBorderBottom&&e.push(`border-bottom: 2px dashed ${this.borderColor||"#e5e5e5"}`),this.titleColor&&e.push(`color: ${this.titleColor}`),this.titleWeight&&e.push(`font-weight: ${this.titleWeight}`),e.join("; ")}_handleClick(){this.onClick&&this.onClick()}render(){return G`
      <div
        class="feature-card"
        style="${this._getCardStyle()}"
        @click="${this._handleClick}"
      >
        <div class="icon-container">
          <img src="${this.icon}" alt="${this.name}" />
        </div>
        <h3 class="title" style="${this._getTitleStyle()}">${this.name}</h3>
      </div>
    `}}customElements.define("feature-card",tn);let tr={icon:{type:String},title:{type:String},desc:{type:String},isSingleItem:eI,ctaText:{type:String},ctaColor:{type:String}},ti=d`
  :host {
    display: flex;
    width: 100%;
  }

  .descCTACardContainer {
    border: 1px solid #d9dce1;
    padding: 18px;
    padding-right: 24px;
    border-radius: 12px;
    display: flex;
    gap: 12px;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    transition: border-color 0.3s ease;
    overflow: hidden;

    &:hover {
      border-color: #757575;
    }
  }

  .iconAndDetails {
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow: hidden;
  }

  .single-item {
    flex-direction: row;
    align-items: center;
  }

  .iconWrapper {
    height: 48px;
    width: 48px;
  }

  .chevron {
    transition: transform 0.3s ease;
  }

  .descCTACardContainer:hover .chevron {
    transform: translateX(6px);
  }

  .iconWrapper > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .ctaDetails {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .ctaDetails > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ctaDetails > span:first-child {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #1b2124;
  }

  .ctaDetails > span:last-child {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #3d3d3d;
  }

  .ctaText {
    display: none;
    font-weight: 600;
    font-size: 14px;
  }

  @media (max-width: 640px) {
    .chevron {
      display: none;
    }

    .ctaText {
      display: flex;
    }
    .descCTACardContainer {
      padding: 12px;
      flex-direction: column;
      align-items: unset;
    }
    .iconWrapper {
      height: 40px;
      width: 40px;
    }

    .ctaDetails > span:first-child {
      font-size: 16px;
      line-height: 24px;
    }

    .ctaDetails > span:last-child {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;class to extends ef{static get styles(){return ti}static get properties(){return tr}constructor(){super(),this.icon="",this.title="",this.desc="",this.handleOnCardClick=()=>{},this.isSingleItem=!1,this.ctaText="",this.ctaColor=""}_handleCardClick(e){e.preventDefault(),this.handleOnCardClick()}render(){return G`
      <div class="descCTACardContainer" @click="${this._handleCardClick}">
        <div class="iconAndDetails ${this.isSingleItem?"single-item":""}">
          <div class="iconWrapper">
            <img src="${this.icon}" alt="${this.title}" />
          </div>
          <div class="ctaDetails">
            <span>${this.title}</span>
            <span>${this.desc}</span>
          </div>
        </div>
        <div class="chevron">${eg("chevron-right",24,24)}</div>
        <div class="ctaText" style="color: ${this.ctaColor}">
          ${this.ctaText}
        </div>
      </div>
    `}}customElements.define("desc-cta-card",to);let ta=d`
    :host {
        display: block;
        height: 100%;
        min-width: 324px;
        box-sizing: border-box;
        /* IMPORTANT: per-card files should set values for these variables if they need to differ */
        --plan-accent: #00000000; /* default transparent; override in per-card file */
        --plan-chip-bg: rgba(0, 0, 0, 0.03);
        --plan-card-padding: 12px;
        --plan-card-radius: 8px;
        --plan-card-shadow: 0 8px 26px rgba(0, 0, 0, 0.06);
        --plan-highlight-thickness: 5px;
        --plan-highlight-radius: var(--plan-card-radius);
    }

    /* OUTER WRAPPER AROUND CARD */

    .highlight-wrapper {
        border-radius: var(--plan-highlight-radius);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
        overflow: visible;
        isolation: isolate;
    }

    .highlight-wrapper > .card {
        flex: 1;
        position: relative;
        z-index: 1;
    }

    :host([highlighted="true"]) .card {
        border-color: transparent;
        box-shadow: var(--plan-card-shadow);
    }

    .card::before {
        content: none;
    }

    :host([highlighted="true"]) .card::before {
        content: "";
        position: absolute;
        inset: 0;
        border: var(--plan-highlight-thickness) solid var(--plan-accent);
        border-radius: inherit;
        box-sizing: border-box;
        pointer-events: none;
    }

    /*
      * NEW: Top banner / highlighted text
      * Visible only when the consumer sets highlighted="true" and highlightedText.
      */
    /* TOP NOTCH / RIBBON */

    .top-note {
        display: none;
        text-align: center;
        width: calc(100% + 2px);
        background: var(--plan-accent);
        color: #fff;

        font-family: 'IBM Plex Mono', monospace;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;

        padding: 3px 6px 3px;
        margin: 0;

        border-radius: var(--plan-highlight-radius) var(--plan-highlight-radius) 0 0;
        overflow: hidden;
        box-sizing: border-box;

        align-items: center;
        justify-content: center;
        gap: 6px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        transform: translateY(calc(-100% + 2px));
        opacity: 0;
        visibility: hidden;
        z-index: 4;
    }

    /* LEFT DOT */

    .top-note::before,
    .top-note::after {
        content: "";
        width: 6px;
        height: 6px;
        background: #fff;
        border-radius: 50%;
        flex-shrink: 0;
    }


    :host([highlighted="true"]) .top-note {
        display: flex;
        visibility: visible;
        animation: top-note-jump-up 520ms cubic-bezier(0.16, 0.84, 0.25, 1) 520ms both;
    }

    :host([highlighted="true"]:not([expanded="true"])) .top-note {
        padding-bottom: 0;
        animation: none;
        width: auto;
        transform: translateY(5px);
        opacity: 1;
        visibility: visible;
        margin-left: 2px;
        margin-right: 0;
    }

    @keyframes top-note-jump-up {
        0% {
            opacity: 0;
            transform: translateY(calc(-100% + 16px)) scale(0.94);
        }
        65% {
            opacity: 1;
            transform: translateY(calc(-100% - 6px)) scale(1.02);
        }
        100% {
            opacity: 1;
            transform: translateY(calc(-100% + 2px)) scale(1);
        }
    }

    @keyframes top-note-jump-up-mobile {
        0% {
            opacity: 0;
            transform: translateY(12px) scale(0.96);
        }
        65% {
            opacity: 1;
            transform: translateY(-4px) scale(1.01);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        :host([highlighted="true"]) .top-note {
            animation: none;
            opacity: 1;
            transform: translateY(calc(-100% + 2px));
        }
    }

    @media (max-width: 769px) {
        .top-note {
            left: auto;
            right: auto;
            top: auto;
            width: calc(100% + 2px);
            position: static;
            margin-left:0;
            margin-right:0;
            transform: none;
            border-radius: var(--plan-highlight-radius) var(--plan-highlight-radius) 0 0;
        }

        :host([highlighted="true"]) .top-note {
            animation: top-note-jump-up-mobile 520ms cubic-bezier(0.16, 0.84, 0.25, 1) 520ms both;
            opacity: 1;
            visibility: visible;
        }

       

        @media (prefers-reduced-motion: reduce) {
            :host([highlighted="true"]) .top-note {
                animation: none;
                transform: none;
            }
        }


    }

    /* Card shell (shared layout/stacking) */

    .card {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
        background: #fff;
        border-radius: var(--plan-card-radius);
        padding: var(--plan-card-padding);
        box-shadow: var(--plan-card-shadow);
        transition: transform 220ms cubic-bezier(0.2, 0.9, 0.3, 1),
        box-shadow 220ms;
        box-sizing: border-box;
        overflow: visible;
        margin-left: 2px;
    }

    .card.selected {
        //border-color: #111;
    }

    /* Collapsed header behaviour (shared) */

    .collapsed {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 8px;
        box-sizing: border-box;
        transition: opacity 180ms ease,
        transform 200ms ease;
        will-change: opacity, transform;
        background: transparent;
    }

    /* Expand wrapper - shared animation (max-height) */

    .expand-wrapper {
        overflow: hidden;
        min-height: 0;
        transition: max-height 320ms cubic-bezier(0.2, 0.9, 0.3, 1),
        padding 220ms;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    :host([expanded="true"]) .expand-wrapper {
        flex: 1;
        transition: max-height 420ms cubic-bezier(0.2, 0.9, 0.3, 1),
        padding 220ms;
    }

    /* Expanded content fade-in/translate */


    :host([expanded="true"]) .expanded-content {
        opacity: 1;
        transform: translateY(0);
        z-index: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
    }

    :host([expanded="true"]) .expanded-content .cta-btn {
        margin-top: auto !important;
        flex-shrink: 0;
    }

    :host([expanded="true"]) .expanded-content > .benefits-box,
    :host([expanded="true"]) .expanded-content > .chips-benefits-wrapper {
        margin-bottom: 12px;
    }

    /* When expanded, collapse the collapsed header visually (no layout shift) */

    :host([expanded="true"]) .collapsed {
        position: absolute;
        left: var(--plan-card-padding);
        right: var(--plan-card-padding);
        top: var(--plan-card-padding);
        opacity: 0;
        transform: translateY(-2px);
        pointer-events: none;
        z-index: 2;
    }

    /* Basic header layout shared */

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
        box-sizing: border-box;
    }

    .title-left {
        display: flex;
        gap: 12px;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
    }

    .subtitle {
        color: #7b7b7b;
        margin-top: 8px;
        font-size: 15px;
    }

    .price-block {
        display: flex;
        align-items: center;
        gap: 12px;
        box-sizing: border-box;
    }

    .old-price {
        font-family: 'Reddit Sans', sans-serif;
        border-bottom: none;
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
        letter-spacing: 0px;
        color: #1B2124;
        cursor: default;
    }

    .old-price.clickable {
        border-bottom: 1px dashed #B7B7B7;
        cursor: pointer;
    }


    .new-price {

        text-decoration: line-through;
        color: #999;
        font-size: 14px;
    }

    .current-plan-badge {
        display: none;
        background-color: #eaedee;
        padding: 6px 12px;
        border-radius: 6px;
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #1B2124;
        text-align: center;
        width: fit-content;
    }

    @media (max-width: 768px) {
        .current-plan-badge {
            display: block;
        }

        .card.disabled .price-block {
            display: none;
        }
    }

    .select-checkbox {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-left: 6px;
        background: #111;
        color: #fff;
        border: 2px solid transparent;
        box-sizing: border-box;
        flex-shrink: 0;
        cursor: pointer;
    }

    @media ( min-width: 769px) {
        :host([highlighted="true"]) .select-checkbox {
            transform: scaleY(0.9434);
        }

    }


    .select-checkbox.checkbox-hidden {
        visibility: hidden;
        pointer-events: none;
    }

    .select-checkbox[aria-checked="true"] {
        background: #111;
    }

    .select-checkbox[aria-checked="false"] {
        background: #fff;
        color: #111;
        border-color: #dedede;
    }

    /* small check icon rotation/pop effect when toggled */

    .select-checkbox .check-icon {
        display: inline-block;
        transform-origin: center;
        transition: transform 220ms cubic-bezier(0.2, 0.9, 0.3, 1);
    }

    .select-checkbox[aria-checked="true"] .check-icon {
        transform: rotate(0deg);
    }

    .select-checkbox[aria-checked="false"] .check-icon {
        transform: rotate(-6deg);
    }

    /* Chips wrapper shared skeleton */

    .chips-wrapper {
        margin-top: 14px;
        background: var(--plan-chip-bg);
        padding: 12px;
        border-radius: 12px;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        box-sizing: border-box;
    }

    .chips {
        display: flex;
        gap: 10px;
        align-items: center;
        box-sizing: border-box;
    }

    .chips > * {
        flex: 0 0 auto;
        min-width: 84px;
        padding: 10px 12px;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.03);
        text-align: center;
        font-size: 13px;
        color: #1b1b1b;
        box-sizing: border-box;
    }

    .chips-scroll {
        display: flex;
        gap: 12px;
        overflow-x: auto;
        padding-bottom: 6px;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
    }

    .benefits-box,
    .benefits-content {
        scrollbar-width: none;
    }

    @media (max-width: 769px) {
        .chips-scroll {
            padding: 16px !important;
        }
    }

    .chips-scroll::-webkit-scrollbar,
    .benefits-box::-webkit-scrollbar,
    .benefits-content::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none; 
    }

    /* Benefits & CTA skeleton shared */

    .benefits-box {
        //  margin-top: 14px;
        padding: 16px;
        border-radius: 12px;
        box-sizing: border-box;
        font-size: 15px;
        line-height: 1.6;
    }

    .cta-btn {
        margin-top: 16px;
        display: block;
        width: 100%;
        box-sizing: border-box;
        appearance: none;
        border: none;
        background: #111;
        color: #fff;
        padding: 12px 16px;
        border-radius: 6px;
        text-align: center;
        font-weight: 600;
        cursor: pointer;
        font-size: 15px;
    }

    :host([expanded="true"]) .card {
        transform: translateY(-6px) scale(1.01);
        box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
    }

    :host([highlighted="true"][expanded="true"]) .card {
        box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
    }

    /* Accessibility */

    .collapsed,
    .header,
    .expanded-content,
    .chips-wrapper,
    .benefits-box {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    @media (max-width: 460px) {
        .title-left {
            font-size: 18px;
        }

        .new-price {
            font-size: 12px !important;
            line-height: 18px;
        }

        .title-text {
            font-size: 18px;
            font-weight: 700;
            line-height: 26px;
        }

        .old-price {
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
        }

        .benefits-box {
            margin-top: 12px !important;
            padding: 12px !important;
        }

        .cta-btn {
            margin-top: 12px !important;
        }

        .select-checkbox {
            width: 20px;
            height: 20px;
        }
    }
    @media (max-width: 768px) {
        :host {
            height: auto;
        }

        .highlight-wrapper {
            height: auto;
        }

        .card {
            height: auto;
        }

        .expand-wrapper {
            flex: unset;
        }

        .chips-benefits-wrapper {
            margin-top: 10px;
        }
    }

    .card.disabled {
        cursor: not-allowed;
    }

    .card.disabled .select-checkbox {
        pointer-events: none;
    }

    .cta-btn.cta-disabled {
        background: #eaedee !important;
        color: #c6c6cb !important;
        cursor: not-allowed;
        pointer-events: none;
    }

`,ts=[ta,d`
    :host {
      /* Keep exact per-card values from original basic styles */
      --plan-accent: #dff8d8; /* light green accent used for mini icon tint */
      --plan-chip-bg: rgba(223, 248, 216, 0.06); /* not heavily used but kept */
      --plan-card-padding: 12px;
      --plan-card-radius: 8px;
      --plan-card-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
      display: block;
      height: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    

    /* mini icon for Basic card */
    .mini-icon {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #dff8d8; /* exact same value you used */
      border: 2px solid #0a0a0a;
      flex-shrink: 0;
      box-sizing: border-box;
    }

    /* Slightly larger title / weight as in original */
    .title-inline {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 700;
      font-size: 18px;
      color: #111;
      box-sizing: border-box;
    }

    /* Benefits box for Basic uses a pale green background */
    .benefits-box {
      flex: 0 0 234px;
      height: 234px;
      min-height: 234px;
      margin-top: 16px;
      padding: 16px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      min-width: 0;
      font-size: 14px;
      box-sizing: border-box;
      overflow: hidden;
    }

    .benefits-content {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
    }

    /* keep CTA consistent */
    .cta-btn {
      margin-top: 20px;
      background: #111;
      color: #fff;
      padding: 12px;
      // border-radius: 12px;
      text-align: center;
      font-size: 14px;
      box-sizing: border-box;
    }



    /* collapsed layout specifics */
    .collapsed {
      padding: 12px 16px;
    }

    .price-block .new-price {
      font-weight: 700;
      font-size: 18px;
    }
    .plan-icon {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-shrink: 0;
    }

    .plan-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @media (min-width: 769px) {
      .header-left > span {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0px;
      }
      .price-block .new-price {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-decoration: line-through;
        color: #757575;
      }
      .benefits-content {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0;
      }
     

      .header {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .header-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4px;
        width: 100%;
      }

      .header-left > .select-checkbox {
        margin-left: auto;
      }

      .price-block {
        display: flex;
        gap: 4px;
        align-items: baseline;
      }
      .subtitle {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0px;
        color: #757575;
        align-self: flex-start;
      }
      .cta-btn {
        margin-top: 20px;
        padding: 12px;
        font-weight: 600;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
        box-sizing: border-box;
        transition:
            background-color 0.15s ease,
            color 0.15s ease,
            box-shadow 0.15s ease;
      }

      


      .cta-selected {
        background-color: #000;
        color: #fff;
      }

      .cta-selected:hover {
        background-color: #111; /* subtle darken */
      }


      .cta-unselected {
        background-color: #fff;
        color: #000;
        border: 1px solid #D9DCE1;
      }

      .cta-unselected:hover {
        background-color: #F5F6F8; /* very soft grey */
      }







    }





    @media (max-width: 420px) {
      .title-inline {
        font-size: 16px;
      }
      .new-price {
        font-size: 16px;
      }
    }
  `],tl={fromAttribute(e){if(null===e)return!1;let t=String(e).toLowerCase().trim();return"false"!==t&&"0"!==t&&""!==t},toAttribute:e=>e?"true":"false"},td={planTitle:{type:String},titleColor:{type:String},iconUrl:{type:String},subtitle:{type:String},price:{type:String},oldPrice:{type:String},benefitsBackgroundColor:{type:String},benefitsHtml:{type:String},selected:{type:Boolean,reflect:!0,converter:tl},expanded:{type:Boolean,reflect:!0,converter:tl},ctaText:{type:String},disabled:{type:Boolean,reflect:!0,converter:tl},showPriceBreakdown:{type:Boolean,reflect:!0,converter:tl}};function tc(e,t){let n=e.match(/^(.*?)#(.*?)#(.*)$/);if(!n)return G`${e}`;let[,r,i,o]=n;return G`
    ${r}
    <span style="color:${t}; font-weight:600">
      ${i}
    </span>
    ${o}
  `}class tu extends ef{static get styles(){return ts}static get properties(){return td}constructor(){super(),this.planTitle="Basic Plan",this.iconUrl="icon",this.price="$9.99/month",this.oldPrice="$19.99/month",this.benefitsHtml="<ul><li>Benefit 1</li><li>Benefit 2</li><li>Benefit 3</li></ul>",this.ctaText="Choose Plan",this.benefitsBackgroundColor="#f3fff3",this.selected=!1,this.expanded=!1}connectedCallback(){super.connectedCallback()}_onCardClick(e){this.dispatchEvent(new CustomEvent("on-card-click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}_onCtaClick(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("on-cta-click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}_onCheckboxToggle(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("on-select-toggle",{detail:{originalEvent:e,currentlySelected:this.selected},bubbles:!0,composed:!0}))}_checkboxKeydown(e){let t=e.key;(" "===t||"Enter"===t)&&(e.preventDefault(),this._onCheckboxToggle(e))}_onOldPriceClick(e){e.preventDefault(),e.stopPropagation(),this.disabled||this.dispatchEvent(new CustomEvent("on-old-price-click",{detail:{planId:this.planId},bubbles:!0,composed:!0}))}render(){let e=this.planTitle??"",t=this.titleColor??"",n=this.iconUrl??"",r=this.subtitle??"",i=this.price??"",o=this.oldPrice??"",a=this.showPriceBreakdown??!0,s=this.benefitsHtml??"",l=this.benefitsBackgroundColor??"",d=this.ctaText??"";return G`
            <div
                    class="card 
  ${this.selected?"selected":""} 
  ${this.disabled?"disabled":""}"
                    role="group"
                    aria-label="${e} plan card"
                    @click=${this._onCardClick}
                    tabindex="0"
            >
                <!-- Expand wrapper (CSS-driven) -->
                <div class="expand-wrapper">
                    <div class="expanded-content">
                        <div class="header">
                            <div class="header-left">
    <span class="plan-icon" aria-hidden="true">
      ${n?G`<img src="${n}" alt=""/>`:null}
    </span>
                                <span class="title-text">
  ${tc(e,t)}
</span>

                                <div
                                        role="checkbox"
                                        class="select-checkbox ${this.disabled?"checkbox-hidden":""}"
                                        aria-checked="${this.selected?"true":"false"}"
                                        tabindex="${this.disabled?"-1":"0"}"
                                        @click=${this._onCheckboxToggle}
                                        @keydown=${this._checkboxKeydown}
                                >
                        <span class="check-icon" aria-hidden="true">
                          ${this.selected?G`
                              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                                  <path d="M1 5L5 9L13 1" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                              </svg>
                          `:""}
                        </span>
                                </div>
                            </div>

                            ${r?G`
                                <div class="subtitle">${r}</div>`:null}

                            ${this.disabled?G`
                                <div class="current-plan-badge">CURRENT PLAN</div>`:null}

                            <div class="price-block" aria-hidden="false">
                                ${o?a?G`
                                                    <span
                                                            class="old-price clickable"
                                                            role="button"
                                                            tabindex="0"
                                                            @click=${this._onOldPriceClick}
                                                    >
                                ${o}
                              </span>
                                                `:G`<span class="old-price">${o}</span>`:null}
                                <span class="new-price">${i}</span>
                            </div>
                        </div>


                        <div
                                class="benefits-box"
                                part="benefits"
                                style="background-color: ${l}"
                        >
                            <div class="benefits-content">
                                ${ex(s)}
                            </div>
                        </div>

                        <!-- CTA is a real button now -->
                        ${this.expanded?G`
                                    <button
                                            class="cta-btn 
    ${this.selected?"cta-selected":"cta-unselected"} 
    ${this.disabled?"cta-disabled":""}"
                                            @click=${this._onCtaClick}
                                            type="button"
                                            ?disabled=${this.disabled}
                                    >
                                        ${this.disabled?"Current Plan":d}
                                    </button>

                                `:null}
                    </div>
                </div>
            </div>
        `}}customElements.define("basic-plan-card",tu);let tp=[ta,d`
    :host {
      /* Keep exact per-card values */
      --plan-accent: #2b9cff; /* blue accent for Infinity */
      --plan-chip-bg: #f2fbff;
      --plan-card-padding: 14px;
      // --plan-card-radius: 16px;
      --plan-card-shadow: 0 8px 26px rgba(0, 0, 0, 0.06);
      display: block;
      height: 100%;
    }
    .expanded-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }


    /* Icon block in title for Infinity */
    .title-left .icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #e6e6e6;
      flex-shrink: 0;
      box-sizing: border-box;
    }

    .subtitle {
      color: #7b7b7b;
      margin-top: 8px;
      font-size: 15px;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    /* Tinted benefits area for Infinity */
    .benefits-box {
      flex: 0 0 234px;
      height: 234px;
      min-height: 234px;
      margin-top: 16px;
      padding: 16px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 14px;
      box-sizing: border-box;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .chips-benefits-wrapper {
      flex: 0 0 234px;
      height: 234px;
      min-height: 234px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Keep same CTA styling (shared covers most) */
    .cta-btn {
      margin-top: 20px;
      background: #111;
      color: #fff;
      padding: 12px;
      // border-radius: 12px;
      text-align: center;
      font-size: 14px;
      box-sizing: border-box;
    }

    /* ensure collapsed view uses same padding and alignment as before */
    .collapsed {
      padding: 12px 8px;
    }

    /* chips individual look kept same as shared; override if needed */
    
    

    .benefits-content {
      flex: 1;
      min-height: 0;
      font-family: 'Reddit Sans', sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0;
      padding: 0 16px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .chips-scroll {
      flex: 0 0 auto;
    }

    .price-block .new-price {
      font-weight: 700;
      font-size: 18px;
    }
    .plan-icon {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-shrink: 0;
    }

    .plan-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .chips-scroll {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      padding: 0 16px;
      box-sizing: border-box;
    }
    @media (max-width: 767px) {
      .chips-scroll{
        padding: 16px;
      }
    }
    @media (min-width: 769px) {
      .header-left > span {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0px;
      }
      .price-block .new-price {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-decoration: line-through;
        color: #757575;
      }

      .header {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .benefits-box {
        flex: 0 0 234px;
      }

      .benefits-content {
        flex: 1;
        min-height: 0;
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0;
        padding: 0 16px;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .header-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4px;
        width: 100%;
      }

      .header-left > .select-checkbox {
        margin-left: auto;
      }

      .price-block {
        display: flex;
        gap: 4px;
        align-items: baseline;
      }
      .subtitle {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0px;
        color: #757575;
        align-self: flex-start;
        margin-top: -5px;
      }
      .cta-btn {
        margin-top: 20px;
        padding: 12px;
        font-weight: 600;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
        box-sizing: border-box;
        transition:
            background-color 0.15s ease,
            color 0.15s ease,
            box-shadow 0.15s ease;
      }

      


      .cta-selected {
        background-color: #000;
        color: #fff;
      }

      .cta-selected:hover {
        background-color: #111; /* subtle darken */
      }


      .cta-unselected {
        background-color: #fff;
        color: #000;
        border: 1px solid #D9DCE1;
      }

      .cta-unselected:hover {
        background-color: #F5F6F8; /* very soft grey */
      }
      .chips-benefits-wrapper {
        flex: 0 0 234px;
        height: 234px;
        min-height: 234px;
        margin-top: 16px;
        padding: 16px 0;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        box-sizing: border-box;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
      }

    }
  `],th={fromAttribute(e){if(null===e)return!1;let t=String(e).toLowerCase().trim();return"false"!==t&&"0"!==t&&""!==t},toAttribute:e=>e?"true":"false"},tf={planTitle:{type:String},titleColor:{type:String},subtitle:{type:String},planId:{type:String},iconUrl:{type:String},price:{type:String},oldPrice:{type:String},chipsHtml:{type:String},chips:{type:Array,attribute:!1},selectedChip:{type:String},benefitsHtml:{type:String},benefitsBackgroundColor:{type:String},ctaText:{type:String},selected:{type:Boolean,reflect:!0,converter:th},expanded:{type:Boolean,reflect:!0,converter:th},highlighted:{type:Boolean,reflect:!0,converter:th},highlightedText:{type:String},disabled:{type:Boolean,reflect:!0,converter:th},showPriceBreakdown:{type:Boolean,reflect:!0,converter:th}};class tm extends ef{static get styles(){return tp}static get properties(){return tf}constructor(){super(),this.subtitle="This is subtitle"}_onCardClick(e){this.dispatchEvent(new CustomEvent("on-card-click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}_onCtaClick(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("on-cta-click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}_onOldPriceClick(e){e.preventDefault(),e.stopPropagation(),this.disabled||this.dispatchEvent(new CustomEvent("on-old-price-click",{detail:{planId:this.planId},bubbles:!0,composed:!0}))}_onCheckboxToggle(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("on-select-toggle",{detail:{originalEvent:e,currentlySelected:this.selected},bubbles:!0,composed:!0}))}_checkboxKeydown(e){let t=e.key;(" "===t||"Enter"===t)&&(e.preventDefault(),this._onCheckboxToggle(e))}_onChipClick(e){this.dispatchEvent(new CustomEvent("on-chip-select",{detail:e.detail,bubbles:!0,composed:!0,cancelable:!1}))}render(){let e=this.planTitle??"Infinity",t=this.titleColor??"",n=this.iconUrl??"",r=this.subtitle??"",i=this.price??"",o=this.oldPrice??"",a=this.showPriceBreakdown??!0,s=this.benefitsHtml??"",l=this.benefitsBackgroundColor??"",d=this.ctaText??"Continue with Infinity";return G`
            <div class="highlight-wrapper">
                <div class="top-note" part="top-note">
                    ${this.highlightedText??""}
                </div>
                <div
                        class="card 
  ${this.selected?"selected":""} 
  ${this.disabled?"disabled":""}"
                        role="group"
                        @click=${this._onCardClick}
                        tabindex="0"
                        aria-label="${e} plan"
                >
                    <!-- Expandable content -->
                    <div class="expand-wrapper">
                        <div class="expanded-content">
                            <div class="header">
                                <div class="header-left">
    <span class="plan-icon" aria-hidden="true">
      ${n?G`<img src="${n}" alt=""/>`:null}
    </span>
                                    <span class="title-text">
  ${tc(e,t)}
</span>

                                    <div
                                            role="checkbox"
                                            class="select-checkbox ${this.disabled?"checkbox-hidden":""}"
                                            aria-checked="${this.selected?"true":"false"}"
                                            tabindex="${this.disabled?"-1":"0"}"
                                            @click=${this._onCheckboxToggle}
                                            @keydown=${this._checkboxKeydown}
                                    >
                                  <span class="check-icon" aria-hidden="true">
                                    ${this.selected?G`
                                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                                            <path d="M1 5L5 9L13 1" stroke="white" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    `:""}
                                  </span>
                                    </div>
                                </div>

                                ${r?G`
                                    <div class="subtitle">${r}</div>`:null}

                                ${this.disabled?G`
                                    <div class="current-plan-badge">CURRENT PLAN</div>`:null}

                                <div class="price-block" aria-hidden="false">
                                    ${o?a?G`
                                                        <span
                                                                class="old-price clickable"
                                                                role="button"
                                                                tabindex="0"
                                                                @click=${this._onOldPriceClick}
                                                        >
                                        ${o}
                                      </span>
                                                    `:G`<span class="old-price">${o}</span>`:null}
                                    <span class="new-price">${i}</span>
                                </div>
                            </div>

                            <div
                                    class="chips-benefits-wrapper"
                                    part="chips-benefits"
                                    style="background-color: ${l}"
                            >
                                <div class="chips-scroll">
                                    ${this.chips?.map(e=>G`
                                                <plan-chip-card
                                                        label="${e.label}"
                                                        type="${e.type}"
                                                        ?selected=${this.selectedChip===e.label}
                                                        @on-chip-click=${this._onChipClick}
                                                >
          <span slot="icon"
          >${ex(e.iconHtml??"")}</span
          >
                                                </plan-chip-card>
                                            `)}
                                </div>

                                <div class="benefits-content">
                                    ${ex(s)}


                                </div>
                            </div>


                            ${this.expanded?G`
                                        <button
                                                class="cta-btn 
    ${this.selected?"cta-selected":"cta-unselected"} 
    ${this.disabled?"cta-disabled":""}"
                                                @click=${this._onCtaClick}
                                                type="button"
                                                ?disabled=${this.disabled}
                                        >
                                            ${this.disabled?"Current Plan":d}
                                        </button>
                                    `:null}
                        </div>
                    </div>

                </div>
            </div>
            </div>
        `}}customElements.define("infinity-card",tm);let tg=[ta,d`
    :host {
      --plan-accent: #ff9f4d; /* orange accent for Pro - KEEP original value */
      --plan-chip-bg: #fff6ee;
      --plan-card-padding: 14px;
      //  --plan-card-radius: 16px;
      --plan-card-shadow: 0 8px 26px rgba(0, 0, 0, 0.06);
      display: block;
      height: 100%;
    }

    /* keep any additional unique styles here (icons, tints, small tweaks) */
    .title-left .icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: #fff;
      border: 2px solid #e9e1d8;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    .benefits-box {
      flex: 0 0 234px;
      height: 234px;
      min-height: 234px;
      background: #fff6ee; /* keep unique background color for pro */
      padding: 0 16px 16px 16px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .chips-benefits-wrapper {
      flex: 0 0 234px;
      height: 234px;
      min-height: 234px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .benefits-content {
      flex: 1;
      min-height: 0;
      font-size: 14px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .chips-scroll {
      flex: 0 0 auto;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .chips-wrapper {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .price-block .new-price {
      font-weight: 700;
      font-size: 18px;
    }
    .plan-icon {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-shrink: 0;
    }

    .plan-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @media (min-width: 769px) {
      .header-left > span {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0px;
      }
      .benefits-content {
        flex: 1;
        min-height: 0;
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0;
        padding: 0 16px;
        overflow-y: auto;
        overflow-x: hidden;
      }
      .price-block .new-price {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-decoration: line-through;
        color: #757575;
      }

      .header {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .benefits-box{
        flex: 0 0 234px;
      
      }

      .header-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4px;
        width: 100%;
      }

      .header-left > .select-checkbox {
        margin-left: auto;
      }

      .price-block {
        display: flex;
        gap: 4px;
        align-items: baseline;
      }
      .subtitle {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0px;
        color: #757575;
        align-self: flex-start;
        margin-top: -5px;
      }
       .cta-btn {
        margin-top: 20px;
        padding: 12px;
        font-weight: 600;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
        box-sizing: border-box;
        transition:
            background-color 0.15s ease,
            color 0.15s ease,
            box-shadow 0.15s ease;
      }

     


      .cta-selected {
        background-color: #000;
        color: #fff;
      }

      .cta-selected:hover {
        background-color: #111; /* subtle darken */
      }


      .cta-unselected {
        background-color: #fff;
        color: #000;
        border: 1px solid #D9DCE1;
      }

      .cta-unselected:hover {
        background-color: #F5F6F8; /* very soft grey */
      }
      .chips-benefits-wrapper {
        flex: 0 0 234px;
        height: 234px;
        min-height: 234px;
        margin-top: 16px;
        padding: 16px 0;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        box-sizing: border-box;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
      }
      .chips-scroll {
        display: flex;
        gap: 10px;
        overflow-x: auto;
        padding: 0 16px;
        box-sizing: border-box;
      }
     
    }
    @media (max-width: 767px) {
      .chips-scroll {
        padding: 16px;
      }
    }


    /* If you had any other rules unique to infinity-pro, keep them here verbatim */
  `],tv={fromAttribute(e){if(null===e)return!1;let t=String(e).toLowerCase().trim();return"false"!==t&&"0"!==t&&""!==t},toAttribute:e=>e?"true":"false"},tb={planTitle:{type:String},titleColor:{type:String},iconUrl:{type:String},planId:{type:String},subtitle:{type:String},price:{type:String},oldPrice:{type:String},chipsHtml:{type:String},chips:{type:Array,attribute:!1},selectedChip:{type:String},benefitsHtml:{type:String},benefitsBackgroundColor:{type:String},ctaText:{type:String},selected:{type:Boolean,reflect:!0,converter:tv},expanded:{type:Boolean,reflect:!0,converter:tv},highlighted:{type:Boolean,reflect:!0,converter:tv},highlightedText:{type:String},disabled:{type:Boolean,reflect:!0,converter:tv},showPriceBreakdown:{type:Boolean,reflect:!0,converter:tv}};class ty extends ef{static get styles(){return tg}static get properties(){return tb}constructor(){super(),this.subtitle="This is subtitle"}_onCardClick(e){this.dispatchEvent(new CustomEvent("on-card-click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}_onCtaClick(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("on-cta-click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}_onCheckboxToggle(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("on-select-toggle",{detail:{originalEvent:e,currentlySelected:this.selected},bubbles:!0,composed:!0}))}_onOldPriceClick(e){e.preventDefault(),e.stopPropagation(),this.disabled||this.dispatchEvent(new CustomEvent("on-old-price-click",{detail:{planId:this.planId},bubbles:!0,composed:!0}))}_checkboxKeydown(e){let t=e.key;(" "===t||"Enter"===t)&&(e.preventDefault(),this._onCheckboxToggle(e))}_onChipClick(e){this.dispatchEvent(new CustomEvent("on-chip-select",{detail:e.detail,bubbles:!0,composed:!0,cancelable:!1}))}render(){let e=this.planTitle??"Infinity Pro",t=this.titleColor??"",n=this.iconUrl??"",r=this.subtitle??"",i=this.price??"",o=this.oldPrice??"",a=this.showPriceBreakdown??!0,s=this.benefitsHtml??"",l=this.benefitsBackgroundColor??"",d=this.ctaText??"Continue with Infinity Pro";return G`
        <div class="highlight-wrapper">
            <div class="top-note" part="top-note">
                ${this.highlightedText??""}
            </div>
            <div
                    class="card 
  ${this.selected?"selected":""} 
  ${this.disabled?"disabled":""}"
                    role="group"
                    @click=${this._onCardClick}
                    tabindex="0"
                    aria-label="${e} plan"
            >
                <div class="expand-wrapper">
                    <div class="expanded-content">
                        <div class="header">
                            <div class="header-left">
    <span class="plan-icon" aria-hidden="true">
      ${n?G`<img src="${n}" alt=""/>`:null}
    </span>
                                <span class="title-text">
  ${tc(e,t)}
</span>

                                <div
                                        role="checkbox"
                                        class="select-checkbox ${this.disabled?"checkbox-hidden":""}"
                                        aria-checked="${this.selected?"true":"false"}"
                                        tabindex="${this.disabled?"-1":"0"}"
                                        @click=${this._onCheckboxToggle}
                                        @keydown=${this._checkboxKeydown}
                                >
                                <span class="check-icon" aria-hidden="true">
                                  ${this.selected?G`
                                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                                          <path d="M1 5L5 9L13 1" stroke="white" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                      </svg>
                                  `:""}
                                </span>
                                </div>
                            </div>

                            ${r?G`
                                <div class="subtitle">${r}</div>`:null}

                            ${this.disabled?G`
                                <div class="current-plan-badge">CURRENT PLAN</div>`:null}

                            <div class="price-block" aria-hidden="false">
                                ${o?a?G`
                                                    <span
                                                            class="old-price clickable"
                                                            role="button"
                                                            tabindex="0"
                                                            @click=${this._onOldPriceClick}
                                                    >
                                      ${o}
                                    </span>
                                                `:G`<span class="old-price">${o}</span>`:null}
                                <span class="new-price">${i}</span>
                            </div>
                        </div>

                        <div
                                class="chips-benefits-wrapper"
                                part="chips-benefits"
                                style="background-color: ${l}"
                        >
                            <div class="chips-scroll">
                                ${this.chips?.map(e=>G`
                                            <plan-chip-card
                                                    label="${e.label}"
                                                    type="${e.type}"
                                                    ?selected=${this.selectedChip===e.label}
                                                    @on-chip-click=${this._onChipClick}
                                            >
          <span slot="icon"
          >${ex(e.iconHtml??"")}</span
          >
                                            </plan-chip-card>
                                        `)}
                            </div>

                            <div class="benefits-content">
                                ${ex(s)}


                            </div>
                        </div>
                        ${this.expanded?G`
                                    <button
                                            class="cta-btn 
    ${this.selected?"cta-selected":"cta-unselected"} 
    ${this.disabled?"cta-disabled":""}"
                                            @click=${this._onCtaClick}
                                            type="button"
                                            ?disabled=${this.disabled}
                                    >
                                        ${this.disabled?"Current Plan":d}
                                    </button>
                                `:null}
                    </div>
                </div>
            </div>
        </div>
        </div>
    `}}customElements.define("infinity-pro-card",ty);let tx=d`
  :host {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 90px;
  }

  .chip {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 15px;
    background: #fff;
    border-radius: 14px;
    border: 2px solid #e6e6e6;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    transition:
      border-color 180ms ease,
      transform 160ms ease,
      opacity 160ms ease,
      filter 160ms ease;
  }

  :host([selected="true"]) .chip {
    border-color: var(--plan-accent, #111);
  }

  .chip--active-anchor {
    transform: scale(1.04);
    opacity: 1;
    filter: none;
    z-index: 2;
    position: relative;
  }

  .icon-wrapper {
      width: 32px;
      height: 32px;

  }
    .icon-wrapper ::slotted(*) {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-wrapper ::slotted(span) {
        width: 100%;
        height: 100%;
      
    }

    .label {
        font-family: 'Reddit Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0px;
        color: #3D3D3D;
        text-align: center;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom: 1px dashed #B7B7B7;
        padding-bottom: 2px;
    }



`,tw={label:{type:String},selected:{type:Boolean,reflect:!0,converter:{fromAttribute(e){if(null===e)return!1;let t=String(e).toLowerCase().trim();return"false"!==t&&"0"!==t&&""!==t},toAttribute:e=>e?"true":"false"}},type:{type:String}};class t_ extends ef{constructor(){super(...arguments),this._onClick=e=>{let t=e.currentTarget.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=n<=window.innerWidth/2?"left":"right",o={type:this.type??"",label:this.label,chipRect:{top:t.top,left:t.left,width:t.width,height:t.height,right:t.right,bottom:t.bottom},clientX:n,clientY:r,side:i,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("on-chip-click",{detail:o,bubbles:!0,composed:!0,cancelable:!1}))}}static get styles(){return tx}static get properties(){return tw}render(){let e=this.selected?"chip chip--active-anchor":"chip";return G`
      <div class="${e}" @click=${this._onClick}>
        <div class="icon-wrapper"><slot name="icon"></slot></div>
        <div class="label">${this.label}</div>
      </div>
    `}}customElements.define("plan-chip-card",t_);let tC=d`
  :host {
    display: block;
    box-sizing: border-box;
  }

  .card {
    border: 2px solid #d9d9df;
    border-radius: 18px;
    padding: 16px;
    background: #fff;
    cursor: pointer;
    transition:
      border-color 180ms ease,
      background 180ms ease;
  }

  :host([selected="true"]) .card {
    border-color: #5b57f4;
    background: #f4f3ff;
  }

  .header {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  .left h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
  }

  .left p {
    margin: 6px 0 0;
    font-size: 15px;
    color: #777;
  }

  .price-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .old-price {
    text-decoration: line-through;
    color: #888;
    font-size: 14px;
  }

  .new-price {
    font-size: 20px;
    font-weight: 700;
    color: #111;
  }

  .discount {
    margin: 6px 0 0;
    font-size: 14px;
    font-weight: 600;
    color: #2e7d32;
    text-align: right; /* 👈 force right alignment */
    align-self: flex-end; /* 👈 key fix */
  }

  .description {
    margin-top: 14px;
    font-size: 15px;
    color: #222;
  }

  .description ul {
    margin: 0;
    padding-left: 18px;
  }

  .description li {
    margin-bottom: 10px;
  }
`,t$={title:{type:String},subtitle:{type:String},price:{type:String},oldPrice:{type:String},discountText:{type:String},descriptionHtml:{type:String},selected:{type:Boolean,reflect:!0,converter:{fromAttribute(e){if(null===e)return!1;let t=String(e).toLowerCase().trim();return"false"!==t&&"0"!==t&&""!==t},toAttribute:e=>e?"true":"false"}}};class tk extends ef{static get styles(){return tC}static get properties(){return t$}_onClick(){this.dispatchEvent(new CustomEvent("on-card-click",{bubbles:!0,composed:!0}))}render(){return G`
      <div class="card" @click=${this._onClick}>
        <div class="header">
          <div class="left">
            <h3>${this.title}</h3>
            ${this.subtitle?G`<p>${this.subtitle}</p>`:null}
          </div>

          <div class="right">
            <div class="price-row">
              ${this.oldPrice?G`<span class="old-price">${this.oldPrice}</span>`:null}
              <span class="new-price">${this.price}</span>
            </div>
            ${this.discountText?G`<div class="discount">${this.discountText}</div>`:null}
          </div>
        </div>

        ${this.descriptionHtml?G`
              <div class="description">${ex(this.descriptionHtml)}</div>
            `:null}
      </div>
    `}}customElements.define("other-plan-card",tk);let tS=d`
  /* =========================
     Host & Card Shell
     ========================= */

  :host {
    display: block;
    box-sizing: border-box;
    /* max-width intentionally left to parent */
  }

  .card {
    border-radius: 20px;
    border: 1.5px solid #e1e1e6;
    overflow: hidden;
    background: #fff;
  }

  /* =========================
     Content
     ========================= */

  .content {
    padding: 16px;
  }

  .title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
  }

  .location {
    margin-top: 6px;
    font-size: 15px;
    color: #555;
  }

  /* =========================
     Bottom Row (Price + Actions)
     ========================= */

  .bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }

  .price-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .price {
    font-size: 22px;
    font-weight: 700;
    color: #111;
  }

  .view-fee {
    font-size: 15px;
    color: #111;
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
    text-align: left;
  }

  .cta {
    background: #111;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 14px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    height: 46px;
  }

  .arrow-btn {
    width: 46px;
    height: 45px;
    border-radius: 8px;
    border: 1.5px solid #d8d8de;
    background: #fff;
    font-size: 22px;
    cursor: pointer;
  }
`,tj={title:{type:String},location:{type:String},price:{type:String},images:{type:Array,attribute:!1},ctaText:{type:String}};class tE extends ef{static get styles(){return tS}static get properties(){return tj}_onBookSeat(){this.dispatchEvent(new CustomEvent("on-book-seat",{bubbles:!0,composed:!0}))}_onViewFee(){this.dispatchEvent(new CustomEvent("on-view-fee",{bubbles:!0,composed:!0}))}_onArrowClick(){this.dispatchEvent(new CustomEvent("on-card-arrow-click",{bubbles:!0,composed:!0}))}render(){return G`
      <div class="card">
        <media-carousel .images=${this.images} height="200"></media-carousel>

        <!-- Content -->
        <div class="content">
          <h3 class="title">${this.title}</h3>
          ${this.location?G`<div class="location">${this.location}</div>`:null}
          <div class="bottom-row">
            <div class="price-group">
              <div class="price">${this.price}</div>

              <button class="view-fee" @click=${this._onViewFee}>
                View Course Fee
              </button>
            </div>

            <div class="cta-group">
              <button class="cta" @click=${this._onBookSeat}>
                ${this.ctaText||"Book A Seat"}
              </button>

              <button class="arrow-btn" @click=${this._onArrowClick}>→</button>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("vp-card",tE);let tO=d`
  :host {
    display: block;
  }

  .media {
    position: relative;
    width: 100%;
    background: #f3f3f3;
    overflow: hidden;
  }

  .slides {
    display: flex;
    height: 100%;
    transition: transform 400ms ease;
    will-change: transform;
  }

  .slides img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0;
    display: block;
  }

  .dots {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    background: rgba(0, 0, 0, 0.45);
    padding: 6px 10px;
    border-radius: 999px;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
  }

  .dot.active {
    background: #fff;
  }
`,tP={images:{type:Array,attribute:!1},height:{type:Number},autoPlay:{type:Boolean},intervalMs:{type:Number}};class tN extends ef{constructor(){super(...arguments),this._currentIndex=0}static get styles(){return tO}static get properties(){return tP}updated(e){(e.has("images")||e.has("autoPlay")||e.has("intervalMs"))&&this._restartCarousel()}disconnectedCallback(){super.disconnectedCallback(),this._clearInterval()}_restartCarousel(){if(this._clearInterval(),this._currentIndex=0,!(void 0===this.autoPlay||this.autoPlay)||!this.images||this.images.length<=1)return;let e=this.intervalMs??3e3;this._interval=window.setInterval(()=>{this._currentIndex=(this._currentIndex+1)%this.images.length,this.requestUpdate()},e)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}render(){let e=this.images??[],t=this.height??200;return G`
      <div class="media" style="height:${t}px">
        ${e.length?G`
              <div
                class="slides"
                style="transform: translateX(-${100*this._currentIndex}%);"
              >
                ${e.map(e=>G`<img src="${e}" alt="carousel image" />`)}
              </div>
            `:null}
        ${e.length>1?G`
              <div class="dots">
                ${e.map((e,t)=>G`<div
                      class="dot ${t===this._currentIndex?"active":""}"
                    ></div>`)}
              </div>
            `:null}
      </div>
    `}}customElements.define("media-carousel",tN);let tM=d`
  :host {
    display: block;
  }

  .card {
    border-radius: 20px;
    border: 1.5px solid #e1e1e6;
    overflow: hidden;
    background: #fff;
  }

  .content {
    padding: 20px 16px 16px;
  }

  .title {
    font-size: 26px;
    font-weight: 500;
    color: #111;
    margin: 0;
    text-align: center;
  }

  .address {
    margin-top: 8px;
    font-size: 16px;
    line-height: 1.4;
    color: #6b6b6b;
    text-align: center;
  }

  .call-btn {
    margin-top: 16px;
    width: 100%;
    height: 52px;
    border-radius: 8px;
    border: 1.5px solid #d8d8de;
    background: #fff;
    font-size: 16px;
    font-weight: 500;
    color: #8c8c8c;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .divider {
    margin: 20px 0;
    height: 1px;
    background: #ececf1;
  }

  .about-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 12px;
    color: #111;
  }

  .about-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .about-item {
    display: flex;
    gap: 12px;
    font-size: 17px;
    color: #222;
    align-items: flex-start;
  }

  .check {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1.5px solid #111;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
  }

  .bottom {
    border-top: 1.5px solid #ececf1;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    font-size: 20px;
    font-weight: 700;
    color: #111;
  }

  .cta {
    background: #111;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 14px 28px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    width: 164px;
    height: 52px;
  }
`,tT={images:{type:Array,attribute:!1},title:{type:String},address:{type:String},aboutPoints:{type:Array,attribute:!1},aboutHtml:{type:String},price:{type:String},phone:{type:String}};class tL extends ef{static get styles(){return tM}static get properties(){return tT}_onCallClick(){this.dispatchEvent(new CustomEvent("call-click",{detail:{phone:this.phone},bubbles:!0,composed:!0}))}_onBookSeat(){this.dispatchEvent(new CustomEvent("book-seat",{bubbles:!0,composed:!0}))}render(){return G`
      <div class="card">
        <media-carousel .images=${this.images}></media-carousel>

        <div class="content">
          <h2 class="title">${this.title}</h2>
          <div class="address">${this.address}</div>

          <button class="call-btn" @click=${this._onCallClick}>
            📞 Call Now
          </button>

          <div class="divider"></div>

          <div class="about-title">About this centre</div>

          ${this.aboutHtml?G`
                <div class="about-list">${ex(this.aboutHtml)}</div>
              `:G`
                <div class="about-list">
                  ${(this.aboutPoints??[]).map(e=>G`
                      <div class="about-item">
                        <div class="check">✓</div>
                        <div>${e}</div>
                      </div>
                    `)}
                </div>
              `}
        </div>

        <div class="bottom">
          <div class="price">${this.price}</div>
          <button class="cta" @click=${this._onBookSeat}>Book A Seat</button>
        </div>
      </div>
    `}}customElements.define("vp-details-card",tL);let tD=d`
  :host {
    display: block;
  }

  .card {
    padding: 20px 16px;
    background: #fff;
    border-radius: 20px;
  }

  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  /* Pills */
  .pills {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .pill {
    padding: 10px 18px;
    border-radius: 999px;
    border: 1.5px solid #d8d8de;
    background: #fff;
    font-size: 12px;
    cursor: pointer;
  }

  .pill.active {
    border-color: #111;
    // font-weight: 600;
    background: #f0f0f5;
  }

  /* Rows */
  .rows {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #333;
  }

  .row.negative {
    color: #2e7d32;
  }

  .divider {
    margin: 20px 0;
    height: 1px;
    background: #e1e1e6;
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 600;
  }
`,tA={options:{type:Array,attribute:!1},selectedId:{type:String}};class tI extends ef{static get styles(){return tD}static get properties(){return tA}_onSelect(e){this.selectedId=e.id,this.dispatchEvent(new CustomEvent("fee-option-change",{detail:e,bubbles:!0,composed:!0}))}get _selectedOption(){if(this.options?.length)return this.options.find(e=>e.id===this.selectedId)??this.options[0]}render(){let e=this._selectedOption;return e?G`
      <div class="card">
        <div class="title">Course Fee Structure</div>

        <div class="pills">
          ${this.options.map(t=>G`
              <button
                class="pill ${t.id===e.id?"active":""}"
                @click=${()=>this._onSelect(t)}
              >
                ${t.label}
              </button>
            `)}
        </div>

        <div class="rows">
          ${e.rows.map(e=>G`
              <div class="row ${e.type??"normal"}">
                <div>${e.label}</div>
                <div>${e.value}</div>
              </div>
            `)}
        </div>

        <div class="divider"></div>

        <div class="total">
          <div>Total Course Fee</div>
          <div>${e.total}</div>
        </div>
      </div>
    `:null}}customElements.define("fee-structure-card",tI)},1295:function(e,t,n){"use strict";n.d(t,{s:function(){return r}}),n(82811);let r={accordion:"_accordion_1v5jl_1",item:"_item_1v5jl_5",fullWidth:"_fullWidth_1v5jl_8",title:"_title_1v5jl_13",expanded:"_expanded_1v5jl_15",icon:"_icon_1v5jl_20",smallArrow:"_smallArrow_1v5jl_32",largeArrow:"_largeArrow_1v5jl_35",description:"_description_1v5jl_46"}},71318:function(e,t,n){"use strict";n.d(t,{s:function(){return r}}),n(80982);let r={overlay:"_overlay_10w3c_1",open:"_open_10w3c_5",wrapper:"_wrapper_10w3c_10",left:"_left_10w3c_13",right:"_right_10w3c_17",header:"_header_10w3c_26",body:"_body_10w3c_30",footer:"_footer_10w3c_34",crossIcon:"_crossIcon_10w3c_38"}},56594:function(e,t,n){"use strict";n.d(t,{c:function(){return r}});let r={blue:"#2E90FA","blue-25":"#F5FAFF","blue-50":"#EFF8FF","blue-100":"#D1E9FF","blue-200":"#B2DDFF","blue-300":"#84CAFF","blue-400":"#53B1FD","blue-600":"#1570EF","blue-700":"#175CD3","blue-800":"#1849A9","blue-900":"#194185",error:"#bf2734","error-10":"#fee7e9","error-100":"#e8b1b6","error-200":"#de8f95","error-300":"#d36c75","error-400":"#c94a54","error-600":"#a0212c","error-700":"#821b23","error-800":"#63141b","error-900":"#450e13",green:"#16B364","green-25":"#F6FEF9","green-50":"#EDFCF2","green-100":"#D3F8DF","green-200":"#AAF0C4","green-300":"#73E2A3","green-400":"#3CCB7F","green-600":"#099250","green-700":"#087443","green-800":"#095C37","green-900":"#084C2E",grey:"#b5bbc5","grey-6":"#f8f8f8","grey-10":"#eaecef","grey-50":"#e4e7ea","grey-100":"#d9dce1","grey-200":"#cdd1d8","grey-300":"#cdd1d8","grey-500":"#b5bbc5","grey-600":"#7b7f86","grey-700":"#7b7f86","grey-800":"#414347",indigo:"#6172F3","indigo-25":"#F5F8FF","indigo-50":"#EEF4FF","indigo-100":"#E0EAFF","indigo-200":"#C7D7FE","indigo-300":"#A4BCFD","indigo-400":"#8098F9","indigo-600":"#444CE7","indigo-700":"#3538CD","indigo-800":"#2D31A6","indigo-900":"#2D3282",link:"#037cbf","link-10":"#f1f5fe","link-100":"#ddebf8","link-200":"#bcd8f1","link-300":"#81b6e4","link-400":"#2b91c9","link-600":"#0368a0","link-700":"#025482","link-800":"#024063","link-900":"#012d45",orange:"#FB6514","orange-25":"#FFFAF5","orange-50":"#FFF6ED","orange-100":"#FFEAD5","orange-200":"#FDDCAB","orange-300":"#FEB273","orange-400":"#FD853A","orange-600":"#EC4A0A","orange-700":"#C4320A","orange-800":"#9C2A10","orange-900":"#7E2410","premium-50":"#F3F6FF","premium-100":"#DAE2F9","premium-200":"#9AAEEB","premium-300":"#6682D6","premium-400":"#3B60D1","premium-500":"#143CB6","premium-600":"#1E40A8","premium-700":"#1D3378","premium-800":"#0C1944","premium-900":"#13192C",primary:"#5a4bda","primary-50":"#f1efff","primary-100":"#d2ccff","primary-200":"#b2a9ff","primary-300":"#9387ff","primary-400":"#7363fc","primary-600":"#4437b8","primary-700":"#312596","primary-800":"#211774","primary-900":"#140d52",red:"#F04438","red-25":"#FFFBFA","red-50":"#FEF3F2","red-100":"#FEE4E2","red-200":"#FECDCA","red-300":"#FDA29B","red-400":"#F97066","red-600":"#D92D20","red-700":"#B42318","red-800":"#912018","red-900":"#7A271A",secondary:"#e31b4d","secondary-50":"#fce8ed","secondary-100":"#f18da6","secondary-200":"#ef7694","secondary-300":"#ec5f83","secondary-400":"#e94971","secondary-600":"#cd1846","secondary-700":"#b6163e","secondary-800":"#a01336","secondary-900":"#5b0b1f","static-black":"#1b2124","static-deep-blue":"#140D52 ","static-grey-1":"#3d3d3d","static-grey-2":"#757575","static-white":"#ffffff","stroke-dark":"#747474","stroke-extra-light":"#EFEFEF","stroke-light":"#D9DCE1","stroke-medium":"#B7B7B7",success:"#1b7938","success-10":"#dff1e4","success-100":"#adcfb7","success-200":"#88b998","success-300":"#64a478","success-400":"#3f8e58","success-600":"#17662f","success-700":"#125226","success-800":"#0e3f1d","success-900":"#0a2c14","text-body-1":"#3D3D3D","text-body-2":"#757575","text-disabled":"#A1A3A4","text-heading":"#1B2124",violet:"#7A5AF8","violet-25":"#FAFAFF","violet-50":"#F4F3FF","violet-100":"#EBE9FE","violet-200":"#D9D6FE","violet-300":"#BDB4FE","violet-400":"#9B8AFB","violet-600":"#6938EF","violet-700":"#5925DC","violet-800":"#4A1FB8","violet-900":"#3E1C96",warning:"#eaaa2e","warning-10":"#fff6e5","warning-100":"#f7e0b4","warning-200":"#f4d392","warning-300":"#f1c571","warning-400":"#edb84f","warning-600":"#c58f27","warning-700":"#9f741f","warning-800":"#7a5818","warning-900":"#543d11",yellow:"#EAAA08","yellow-25":"#FEFDF0","yellow-50":"#FEFBE8","yellow-100":"#FEF7C3","yellow-200":"#FEEE95","yellow-300":"#FDE272","yellow-400":"#FAC515","yellow-600":"#CA8504","yellow-700":"#A15C07","yellow-800":"#854A0E","yellow-900":"#542C0D"}},29542:function(e,t,n){"use strict";function r(e){let t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):new Date("number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?e:NaN)}function i(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function o(e,t){let n=r(e);return isNaN(t)?i(e,NaN):(t&&n.setDate(n.getDate()+t),n)}n.d(t,{I:function(){return l},R:function(){return s},S:function(){return a},T:function(){return d},a:function(){return o},c:function(){return i},t:function(){return r}});let a="single",s="range",l={from:new Date,to:o(new Date,1)},d=new Date},99871:function(e,t,n){"use strict";n.d(t,{D:function(){return tm},f:function(){return et},i:function(){return x},s:function(){return es},u:function(){return eS}});var r,i,o,a=n(67251),s=n(45113),l=n(29542);function d(e,t){let n=(0,l.t)(e);if(isNaN(t))return(0,l.c)(e,NaN);if(!t)return n;let r=n.getDate(),i=(0,l.c)(e,n.getTime());return i.setMonth(n.getMonth()+t+1,0),r>=i.getDate()?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}let c={};function u(e,t){var n,r,i,o;let a=(null==t?void 0:t.weekStartsOn)??(null==(r=null==(n=null==t?void 0:t.locale)?void 0:n.options)?void 0:r.weekStartsOn)??c.weekStartsOn??(null==(o=null==(i=c.locale)?void 0:i.options)?void 0:o.weekStartsOn)??0,s=(0,l.t)(e),d=s.getDay();return s.setDate(s.getDate()-((d<a?7:0)+d-a)),s.setHours(0,0,0,0),s}function p(e){return u(e,{weekStartsOn:1})}function h(e){let t=(0,l.t)(e),n=t.getFullYear(),r=(0,l.c)(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);let i=p(r),o=(0,l.c)(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);let a=p(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}function f(e){let t=(0,l.t)(e);return t.setHours(0,0,0,0),t}function m(e){let t=(0,l.t)(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function g(e,t){let n=f(e),r=f(t);return Math.round((+n-m(n)-(+r-m(r)))/864e5)}function v(e,t){return(0,l.a)(e,7*t)}function b(e,t){return d(e,12*t)}function y(e,t){return+f(e)==+f(t)}function x(e){return e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function w(e,t){let n=(0,l.t)(e),r=(0,l.t)(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}function _(e){let t=(0,l.t)(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function C(e){let t=(0,l.t)(e);return t.setDate(1),t.setHours(0,0,0,0),t}function $(e){let t=(0,l.t)(e),n=(0,l.c)(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}function k(e,t){var n,r,i,o;let a=(null==t?void 0:t.weekStartsOn)??(null==(r=null==(n=null==t?void 0:t.locale)?void 0:n.options)?void 0:r.weekStartsOn)??c.weekStartsOn??(null==(o=null==(i=c.locale)?void 0:i.options)?void 0:o.weekStartsOn)??0,s=(0,l.t)(e),d=s.getDay();return s.setDate(s.getDate()+((d<a?-7:0)+6-(d-a))),s.setHours(23,59,59,999),s}function S(e){return k(e,{weekStartsOn:1})}let j={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function E(e){return (t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}let O={date:E({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:E({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:E({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},P={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function N(e){return(t,n)=>{let r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):t;r=e.formattingValues[i]||e.formattingValues[t]}else{let t=e.defaultWidth,i=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[i]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function M(e){return(t,n={})=>{let r;let i=n.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;let s=a[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(l)?function(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}(l,e=>e.test(s)):function(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}(l,e=>e.test(s));return r=e.valueCallback?e.valueCallback(d):d,{value:r=n.valueCallback?n.valueCallback(r):r,rest:t.slice(s.length)}}}let T={code:"en-US",formatDistance:(e,t,n)=>{let r;let i=j[e];return r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:O,formatRelative:(e,t,n,r)=>P[e],localize:{ordinalNumber:(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:N({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:N({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:N({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:N({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:N({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(r={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{let n=e.match(r.matchPattern);if(!n)return null;let i=n[0],o=e.match(r.parsePattern);if(!o)return null;let a=r.valueCallback?r.valueCallback(o[0]):o[0];return{value:a=t.valueCallback?t.valueCallback(a):a,rest:e.slice(i.length)}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function L(e){let t=(0,l.t)(e);return Math.round((+p(t)-+function(e){let t=h(e),n=(0,l.c)(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),p(n)}(t))/6048e5)+1}function D(e,t){var n,r,i,o;let a=(0,l.t)(e),s=a.getFullYear(),d=(null==t?void 0:t.firstWeekContainsDate)??(null==(r=null==(n=null==t?void 0:t.locale)?void 0:n.options)?void 0:r.firstWeekContainsDate)??c.firstWeekContainsDate??(null==(o=null==(i=c.locale)?void 0:i.options)?void 0:o.firstWeekContainsDate)??1,p=(0,l.c)(e,0);p.setFullYear(s+1,0,d),p.setHours(0,0,0,0);let h=u(p,t),f=(0,l.c)(e,0);f.setFullYear(s,0,d),f.setHours(0,0,0,0);let m=u(f,t);return a.getTime()>=h.getTime()?s+1:a.getTime()>=m.getTime()?s:s-1}function A(e,t){let n=(0,l.t)(e);return Math.round((+u(n,t)-+function(e,t){var n,r,i,o;let a=(null==t?void 0:t.firstWeekContainsDate)??(null==(r=null==(n=null==t?void 0:t.locale)?void 0:n.options)?void 0:r.firstWeekContainsDate)??c.firstWeekContainsDate??(null==(o=null==(i=c.locale)?void 0:i.options)?void 0:o.firstWeekContainsDate)??1,s=D(e,t),d=(0,l.c)(e,0);return d.setFullYear(s,0,a),d.setHours(0,0,0,0),u(d,t)}(n,t))/6048e5)+1}function I(e,t){let n=Math.abs(e).toString().padStart(t,"0");return(e<0?"-":"")+n}let B={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return I("yy"===t?r%100:r,t.length)},M(e,t){let n=e.getMonth();return"M"===t?String(n+1):I(n+1,2)},d:(e,t)=>I(e.getDate(),t.length),a(e,t){let n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>I(e.getHours()%12||12,t.length),H:(e,t)=>I(e.getHours(),t.length),m:(e,t)=>I(e.getMinutes(),t.length),s:(e,t)=>I(e.getSeconds(),t.length),S(e,t){let n=t.length;return I(Math.trunc(e.getMilliseconds()*Math.pow(10,n-3)),t.length)}},R={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},F={G:function(e,t,n){let r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){let t=e.getFullYear();return n.ordinalNumber(t>0?t:1-t,{unit:"year"})}return B.y(e,t)},Y:function(e,t,n,r){let i=D(e,r),o=i>0?i:1-i;return"YY"===t?I(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):I(o,t.length)},R:function(e,t){return I(h(e),t.length)},u:function(e,t){return I(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return I(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return I(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){let r=e.getMonth();switch(t){case"M":case"MM":return B.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){let r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return I(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){let i=A(e,r);return"wo"===t?n.ordinalNumber(i,{unit:"week"}):I(i,t.length)},I:function(e,t,n){let r=L(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):I(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):B.d(e,t)},D:function(e,t,n){let r=function(e){let t=(0,l.t)(e);return g(t,$(t))+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):I(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){let i=e.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return I(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){let i=e.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return I(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){let r=e.getDay(),i=0===r?7:r;switch(t){case"i":return String(i);case"ii":return I(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){let r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){let r;let i=e.getHours();switch(r=12===i?R.noon:0===i?R.midnight:i/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){let r;let i=e.getHours();switch(r=i>=17?R.evening:i>=12?R.afternoon:i>=4?R.morning:R.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return B.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):B.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):I(r,t.length)},k:function(e,t,n){let r=e.getHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):I(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):B.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):B.s(e,t)},S:function(e,t){return B.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return Z(r);case"XXXX":case"XX":return H(r);default:return H(r,":")}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case"x":return Z(r);case"xxxx":case"xx":return H(r);default:return H(r,":")}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+z(r,":");default:return"GMT"+H(r,":")}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+z(r,":");default:return"GMT"+H(r,":")}},t:function(e,t,n){return I(Math.trunc(e.getTime()/1e3),t.length)},T:function(e,t,n){return I(e.getTime(),t.length)}};function z(e,t=""){let n=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),o=r%60;return 0===o?n+String(i):n+String(i)+t+I(o,2)}function Z(e,t){return e%60==0?(e>0?"-":"+")+I(Math.abs(e)/60,2):H(e,t)}function H(e,t=""){let n=Math.abs(e);return(e>0?"-":"+")+I(Math.trunc(n/60),2)+t+I(n%60,2)}let W=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},V=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},U={p:V,P:(e,t)=>{let n;let r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return W(e,t);switch(i){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",W(i,t)).replace("{{time}}",V(o,t))}},q=/^D+$/,Y=/^Y+$/,G=["D","DD","YY","YYYY"],X=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,Q=/''/g,ee=/[a-zA-Z]/;function et(e,t,n){var r,i,o,a,s,d,u,p;let h=(null==n?void 0:n.locale)??c.locale??T,f=(null==n?void 0:n.firstWeekContainsDate)??(null==(i=null==(r=null==n?void 0:n.locale)?void 0:r.options)?void 0:i.firstWeekContainsDate)??c.firstWeekContainsDate??(null==(a=null==(o=c.locale)?void 0:o.options)?void 0:a.firstWeekContainsDate)??1,m=(null==n?void 0:n.weekStartsOn)??(null==(d=null==(s=null==n?void 0:n.locale)?void 0:s.options)?void 0:d.weekStartsOn)??c.weekStartsOn??(null==(p=null==(u=c.locale)?void 0:u.options)?void 0:p.weekStartsOn)??0,g=(0,l.t)(e);if(!((x(g)||"number"==typeof g)&&!isNaN(Number((0,l.t)(g)))))throw RangeError("Invalid time value");let v=t.match(K).map(e=>{let t=e[0];return"p"===t||"P"===t?(0,U[t])(e,h.formatLong):e}).join("").match(X).map(e=>{if("''"===e)return{isToken:!1,value:"'"};let t=e[0];if("'"===t)return{isToken:!1,value:function(e){let t=e.match(J);return t?t[1].replace(Q,"'"):e}(e)};if(F[t])return{isToken:!0,value:e};if(t.match(ee))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});h.localize.preprocessor&&(v=h.localize.preprocessor(g,v));let b={firstWeekContainsDate:f,weekStartsOn:m,locale:h};return v.map(r=>{if(!r.isToken)return r.value;let i=r.value;return(!(null!=n&&n.useAdditionalWeekYearTokens)&&Y.test(i)||!(null!=n&&n.useAdditionalDayOfYearTokens)&&q.test(i))&&function(e,t,n){let r=function(e,t,n){let r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(r),G.includes(e))throw RangeError(r)}(i,t,String(e)),(0,F[i[0]])(g,i,h.localize,b)}).join("")}function en(e,t){let n=(0,l.t)(e),r=(0,l.t)(t);return n.getTime()>r.getTime()}function er(e,t){return+(0,l.t)(e)<+(0,l.t)(t)}function ei(e,t){let n=(0,l.t)(e),r=(0,l.t)(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function eo(e,t){return(0,l.a)(e,-t)}function ea(e,t){let n=(0,l.t)(e),r=n.getFullYear(),i=n.getDate(),o=(0,l.c)(e,0);o.setFullYear(r,t,15),o.setHours(0,0,0,0);let a=function(e){let t=(0,l.t)(e),n=t.getFullYear(),r=t.getMonth(),i=(0,l.c)(e,0);return i.setFullYear(n,r+1,0),i.setHours(0,0,0,0),i.getDate()}(o);return n.setMonth(t,Math.min(i,a)),n}function es(e,t){let n=(0,l.t)(e);return isNaN(+n)?(0,l.c)(e,NaN):(n.setFullYear(t),n)}var el=function(){return(el=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function ed(e,t,n){for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function ec(e){return"multiple"===e.mode}function eu(e){return"range"===e.mode}function ep(e){return"single"===e.mode}var eh={root:"rdp",multiple_months:"rdp-multiple_months",with_weeknumber:"rdp-with_weeknumber",vhidden:"rdp-vhidden",button_reset:"rdp-button_reset",button:"rdp-button",caption:"rdp-caption",caption_start:"rdp-caption_start",caption_end:"rdp-caption_end",caption_between:"rdp-caption_between",caption_label:"rdp-caption_label",caption_dropdowns:"rdp-caption_dropdowns",dropdown:"rdp-dropdown",dropdown_month:"rdp-dropdown_month",dropdown_year:"rdp-dropdown_year",dropdown_icon:"rdp-dropdown_icon",months:"rdp-months",month:"rdp-month",table:"rdp-table",tbody:"rdp-tbody",tfoot:"rdp-tfoot",head:"rdp-head",head_row:"rdp-head_row",head_cell:"rdp-head_cell",nav:"rdp-nav",nav_button:"rdp-nav_button",nav_button_previous:"rdp-nav_button_previous",nav_button_next:"rdp-nav_button_next",nav_icon:"rdp-nav_icon",row:"rdp-row",weeknumber:"rdp-weeknumber",cell:"rdp-cell",day:"rdp-day",day_today:"rdp-day_today",day_outside:"rdp-day_outside",day_selected:"rdp-day_selected",day_disabled:"rdp-day_disabled",day_hidden:"rdp-day_hidden",day_range_start:"rdp-day_range_start",day_range_end:"rdp-day_range_end",day_range_middle:"rdp-day_range_middle"},ef=Object.freeze({__proto__:null,formatCaption:function(e,t){return et(e,"LLLL y",t)},formatDay:function(e,t){return et(e,"d",t)},formatMonthCaption:function(e,t){return et(e,"LLLL",t)},formatWeekNumber:function(e){return"".concat(e)},formatWeekdayName:function(e,t){return et(e,"cccccc",t)},formatYearCaption:function(e,t){return et(e,"yyyy",t)}}),em=Object.freeze({__proto__:null,labelDay:function(e,t,n){return et(e,"do MMMM (EEEE)",n)},labelMonthDropdown:function(){return"Month: "},labelNext:function(){return"Go to next month"},labelPrevious:function(){return"Go to previous month"},labelWeekNumber:function(e){return"Week n. ".concat(e)},labelWeekday:function(e,t){return et(e,"cccc",t)},labelYearDropdown:function(){return"Year: "}}),eg=(0,s.createContext)(void 0);function ev(e){var t,n,r,i,o,s,l,d,c=e.initialProps,u={captionLayout:"buttons",classNames:eh,formatters:ef,labels:em,locale:T,modifiersClassNames:{},modifiers:{},numberOfMonths:1,styles:{},today:new Date,mode:"default"},p=(t=c.fromYear,n=c.toYear,r=c.fromMonth,i=c.toMonth,o=c.fromDate,s=c.toDate,r?o=C(r):t&&(o=new Date(t,0,1)),i?s=_(i):n&&(s=new Date(n,11,31)),{fromDate:o?f(o):void 0,toDate:s?f(s):void 0}),h=p.fromDate,m=p.toDate,g=null!==(d=c.captionLayout)&&void 0!==d?d:u.captionLayout;"buttons"===g||h&&m||(g="buttons"),(ep(c)||ec(c)||eu(c))&&(l=c.onSelect);var v=el(el(el({},u),c),{captionLayout:g,classNames:el(el({},u.classNames),c.classNames),components:el({},c.components),formatters:el(el({},u.formatters),c.formatters),fromDate:h,labels:el(el({},u.labels),c.labels),mode:c.mode||u.mode,modifiers:el(el({},u.modifiers),c.modifiers),modifiersClassNames:el(el({},u.modifiersClassNames),c.modifiersClassNames),onSelect:l,styles:el(el({},u.styles),c.styles),toDate:m});return(0,a.jsx)(eg.Provider,{value:v,children:e.children})}function eb(){var e=(0,s.useContext)(eg);if(!e)throw Error("useDayPicker must be used within a DayPickerProvider.");return e}function ey(e){var t=eb(),n=t.locale,r=t.classNames,i=t.styles,o=t.formatters.formatCaption;return(0,a.jsx)("div",{className:r.caption_label,style:i.caption_label,"aria-live":"polite",role:"presentation",id:e.id,children:o(e.displayMonth,{locale:n})})}function ex(e){return(0,a.jsx)("svg",el({width:"8px",height:"8px",viewBox:"0 0 120 120","data-testid":"iconDropdown"},e,{children:(0,a.jsx)("path",{d:"M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",fill:"currentColor",fillRule:"nonzero"})}))}function ew(e){var t,n,r=e.onChange,i=e.value,o=e.children,s=e.caption,l=e.className,d=e.style,c=eb(),u=null!==(n=null===(t=c.components)||void 0===t?void 0:t.IconDropdown)&&void 0!==n?n:ex;return(0,a.jsxs)("div",{className:l,style:d,children:[(0,a.jsx)("span",{className:c.classNames.vhidden,children:e["aria-label"]}),(0,a.jsx)("select",{name:e.name,"aria-label":e["aria-label"],className:c.classNames.dropdown,style:c.styles.dropdown,value:i,onChange:r,children:o}),(0,a.jsxs)("div",{className:c.classNames.caption_label,style:c.styles.caption_label,"aria-hidden":"true",children:[s,(0,a.jsx)(u,{className:c.classNames.dropdown_icon,style:c.styles.dropdown_icon})]})]})}function e_(e){var t,n=eb(),r=n.fromDate,i=n.toDate,o=n.styles,s=n.locale,d=n.formatters.formatMonthCaption,c=n.classNames,u=n.components,p=n.labels.labelMonthDropdown;if(!r||!i)return(0,a.jsx)(a.Fragment,{});var h=[];if(function(e,t){let n=(0,l.t)(e),r=(0,l.t)(t);return n.getFullYear()===r.getFullYear()}(r,i))for(var f=C(r),m=r.getMonth();m<=i.getMonth();m++)h.push(ea(f,m));else for(var f=C(new Date),m=0;m<=11;m++)h.push(ea(f,m));var g=null!==(t=null==u?void 0:u.Dropdown)&&void 0!==t?t:ew;return(0,a.jsx)(g,{name:"months","aria-label":p(),className:c.dropdown_month,style:o.dropdown_month,onChange:function(t){var n=Number(t.target.value),r=ea(C(e.displayMonth),n);e.onChange(r)},value:e.displayMonth.getMonth(),caption:d(e.displayMonth,{locale:s}),children:h.map(function(e){return(0,a.jsx)("option",{value:e.getMonth(),children:d(e,{locale:s})},e.getMonth())})})}function eC(e){var t,n=e.displayMonth,r=eb(),i=r.fromDate,o=r.toDate,s=r.locale,l=r.styles,d=r.classNames,c=r.components,u=r.formatters.formatYearCaption,p=r.labels.labelYearDropdown,h=[];if(!i||!o)return(0,a.jsx)(a.Fragment,{});for(var f=i.getFullYear(),m=o.getFullYear(),g=f;g<=m;g++)h.push(es($(new Date),g));var v=null!==(t=null==c?void 0:c.Dropdown)&&void 0!==t?t:ew;return(0,a.jsx)(v,{name:"years","aria-label":p(),className:d.dropdown_year,style:l.dropdown_year,onChange:function(t){var r=es(C(n),Number(t.target.value));e.onChange(r)},value:n.getFullYear(),caption:u(n,{locale:s}),children:h.map(function(e){return(0,a.jsx)("option",{value:e.getFullYear(),children:u(e,{locale:s})},e.getFullYear())})})}var e$=(0,s.createContext)(void 0);function ek(e){var t,n,r,i,o,l,c,u,p,h,f,m,g,v,b,y,x=eb(),_=(b=(n=(t=g=eb()).month,r=t.defaultMonth,i=t.today,o=n||r||i||new Date,l=t.toDate,c=t.fromDate,u=t.numberOfMonths,l&&0>w(l,o)&&(o=d(l,-1*((void 0===u?1:u)-1))),c&&0>w(o,c)&&(o=c),p=C(o),h=g.month,m=(f=(0,s.useState)(p))[0],v=[void 0===h?m:h,f[1]])[0],y=v[1],[b,function(e){var t;if(!g.disableNavigation){var n=C(e);y(n),null===(t=g.onMonthChange)||void 0===t||t.call(g,n)}}]),$=_[0],k=_[1],S=function(e,t){for(var n=t.reverseMonths,r=t.numberOfMonths,i=C(e),o=C(d(i,r)),a=w(o,i),s=[],l=0;l<a;l++){var c=d(i,l);s.push(c)}return n&&(s=s.reverse()),s}($,x),j=function(e,t){if(!t.disableNavigation){var n=t.toDate,r=t.pagedNavigation,i=t.numberOfMonths,o=void 0===i?1:i,a=C(e);if(!n||!(w(n,e)<o))return d(a,r?o:1)}}($,x),E=function(e,t){if(!t.disableNavigation){var n=t.fromDate,r=t.pagedNavigation,i=t.numberOfMonths,o=C(e);if(!n||!(0>=w(o,n)))return d(o,-(r?void 0===i?1:i:1))}}($,x),O=function(e){return S.some(function(t){return ei(e,t)})};return(0,a.jsx)(e$.Provider,{value:{currentMonth:$,displayMonths:S,goToMonth:k,goToDate:function(e,t){O(e)||(t&&er(e,t)?k(d(e,1+-1*x.numberOfMonths)):k(e))},previousMonth:E,nextMonth:j,isDateDisplayed:O},children:e.children})}function eS(){var e=(0,s.useContext)(e$);if(!e)throw Error("useNavigation must be used within a NavigationProvider");return e}function ej(e){var t,n=eb(),r=n.classNames,i=n.styles,o=n.components,s=eS().goToMonth,l=function(t){s(d(t,e.displayIndex?-e.displayIndex:0))},c=null!==(t=null==o?void 0:o.CaptionLabel)&&void 0!==t?t:ey,u=(0,a.jsx)(c,{id:e.id,displayMonth:e.displayMonth});return(0,a.jsxs)("div",{className:r.caption_dropdowns,style:i.caption_dropdowns,children:[(0,a.jsx)("div",{className:r.vhidden,children:u}),(0,a.jsx)(e_,{onChange:l,displayMonth:e.displayMonth}),(0,a.jsx)(eC,{onChange:l,displayMonth:e.displayMonth})]})}function eE(e){return(0,a.jsx)("svg",el({width:"16px",height:"16px",viewBox:"0 0 120 120"},e,{children:(0,a.jsx)("path",{d:"M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",fill:"currentColor",fillRule:"nonzero"})}))}function eO(e){return(0,a.jsx)("svg",el({width:"16px",height:"16px",viewBox:"0 0 120 120"},e,{children:(0,a.jsx)("path",{d:"M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",fill:"currentColor"})}))}var eP=(0,s.forwardRef)(function(e,t){var n=eb(),r=n.classNames,i=n.styles,o=[r.button_reset,r.button];e.className&&o.push(e.className);var s=o.join(" "),l=el(el({},i.button_reset),i.button);return e.style&&Object.assign(l,e.style),(0,a.jsx)("button",el({},e,{ref:t,type:"button",className:s,style:l}))});function eN(e){var t,n,r=eb(),i=r.dir,o=r.locale,s=r.classNames,l=r.styles,d=r.labels,c=d.labelPrevious,u=d.labelNext,p=r.components;if(!e.nextMonth&&!e.previousMonth)return(0,a.jsx)(a.Fragment,{});var h=c(e.previousMonth,{locale:o}),f=[s.nav_button,s.nav_button_previous].join(" "),m=u(e.nextMonth,{locale:o}),g=[s.nav_button,s.nav_button_next].join(" "),v=null!==(t=null==p?void 0:p.IconRight)&&void 0!==t?t:eO,b=null!==(n=null==p?void 0:p.IconLeft)&&void 0!==n?n:eE;return(0,a.jsxs)("div",{className:s.nav,style:l.nav,children:[!e.hidePrevious&&(0,a.jsx)(eP,{name:"previous-month","aria-label":h,className:f,style:l.nav_button_previous,disabled:!e.previousMonth,onClick:e.onPreviousClick,children:"rtl"===i?(0,a.jsx)(v,{className:s.nav_icon,style:l.nav_icon}):(0,a.jsx)(b,{className:s.nav_icon,style:l.nav_icon})}),!e.hideNext&&(0,a.jsx)(eP,{name:"next-month","aria-label":m,className:g,style:l.nav_button_next,disabled:!e.nextMonth,onClick:e.onNextClick,children:"rtl"===i?(0,a.jsx)(b,{className:s.nav_icon,style:l.nav_icon}):(0,a.jsx)(v,{className:s.nav_icon,style:l.nav_icon})})]})}function eM(e){var t=eb().numberOfMonths,n=eS(),r=n.previousMonth,i=n.nextMonth,o=n.goToMonth,s=n.displayMonths,l=s.findIndex(function(t){return ei(e.displayMonth,t)}),d=0===l,c=l===s.length-1;return(0,a.jsx)(eN,{displayMonth:e.displayMonth,hideNext:t>1&&(d||!c),hidePrevious:t>1&&(c||!d),nextMonth:i,previousMonth:r,onPreviousClick:function(){r&&o(r)},onNextClick:function(){i&&o(i)}})}function eT(e){var t,n,r=eb(),i=r.classNames,o=r.disableNavigation,s=r.styles,l=r.captionLayout,d=r.components,c=null!==(t=null==d?void 0:d.CaptionLabel)&&void 0!==t?t:ey;return n=o?(0,a.jsx)(c,{id:e.id,displayMonth:e.displayMonth}):"dropdown"===l?(0,a.jsx)(ej,{displayMonth:e.displayMonth,id:e.id}):"dropdown-buttons"===l?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ej,{displayMonth:e.displayMonth,displayIndex:e.displayIndex,id:e.id}),(0,a.jsx)(eM,{displayMonth:e.displayMonth,displayIndex:e.displayIndex,id:e.id})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{id:e.id,displayMonth:e.displayMonth,displayIndex:e.displayIndex}),(0,a.jsx)(eM,{displayMonth:e.displayMonth,id:e.id})]}),(0,a.jsx)("div",{className:i.caption,style:s.caption,children:n})}function eL(e){var t=eb(),n=t.footer,r=t.styles,i=t.classNames.tfoot;return n?(0,a.jsx)("tfoot",{className:i,style:r.tfoot,children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:8,children:n})})}):(0,a.jsx)(a.Fragment,{})}function eD(){var e=eb(),t=e.classNames,n=e.styles,r=e.showWeekNumber,i=e.locale,o=e.weekStartsOn,s=e.ISOWeek,d=e.formatters.formatWeekdayName,c=e.labels.labelWeekday,h=function(e,t,n){for(var r=n?p(new Date):u(new Date,{locale:e,weekStartsOn:t}),i=[],o=0;o<7;o++){var a=(0,l.a)(r,o);i.push(a)}return i}(i,o,s);return(0,a.jsxs)("tr",{style:n.head_row,className:t.head_row,children:[r&&(0,a.jsx)("td",{style:n.head_cell,className:t.head_cell}),h.map(function(e,r){return(0,a.jsx)("th",{scope:"col",className:t.head_cell,style:n.head_cell,"aria-label":c(e,{locale:i}),children:d(e,{locale:i})},r)})]})}function eA(){var e,t=eb(),n=t.classNames,r=t.styles,i=t.components,o=null!==(e=null==i?void 0:i.HeadRow)&&void 0!==e?e:eD;return(0,a.jsx)("thead",{style:r.head,className:n.head,children:(0,a.jsx)(o,{})})}function eI(e){var t=eb(),n=t.locale,r=t.formatters.formatDay;return(0,a.jsx)(a.Fragment,{children:r(e.date,{locale:n})})}var eB=(0,s.createContext)(void 0);function eR(e){return ec(e.initialProps)?(0,a.jsx)(eF,{initialProps:e.initialProps,children:e.children}):(0,a.jsx)(eB.Provider,{value:{selected:void 0,modifiers:{disabled:[]}},children:e.children})}function eF(e){var t=e.initialProps,n=e.children,r=t.selected,i=t.min,o=t.max,s={disabled:[]};return r&&s.disabled.push(function(e){var t=o&&r.length>o-1,n=r.some(function(t){return y(t,e)});return!!(t&&!n)}),(0,a.jsx)(eB.Provider,{value:{selected:r,onDayClick:function(e,n,a){var s,l;if(null===(s=t.onDayClick)||void 0===s||s.call(t,e,n,a),!(n.selected&&i&&(null==r?void 0:r.length)===i)&&!(!n.selected&&o&&(null==r?void 0:r.length)===o)){var d=r?ed([],r):[];if(n.selected){var c=d.findIndex(function(t){return y(e,t)});d.splice(c,1)}else d.push(e);null===(l=t.onSelect)||void 0===l||l.call(t,d,e,n,a)}},modifiers:s},children:n})}function ez(){var e=(0,s.useContext)(eB);if(!e)throw Error("useSelectMultiple must be used within a SelectMultipleProvider");return e}var eZ=(0,s.createContext)(void 0);function eH(e){return eu(e.initialProps)?(0,a.jsx)(eW,{initialProps:e.initialProps,children:e.children}):(0,a.jsx)(eZ.Provider,{value:{selected:void 0,modifiers:{range_start:[],range_end:[],range_middle:[],disabled:[]}},children:e.children})}function eW(e){var t=e.initialProps,n=e.children,r=t.selected,i=r||{},o=i.from,s=i.to,d=t.min,c=t.max,u={range_start:[],range_end:[],range_middle:[],disabled:[]};if(o?(u.range_start=[o],s?(u.range_end=[s],y(o,s)||(u.range_middle=[{after:o,before:s}])):u.range_end=[o]):s&&(u.range_start=[s],u.range_end=[s]),d&&(o&&!s&&u.disabled.push({after:eo(o,d-1),before:(0,l.a)(o,d-1)}),o&&s&&u.disabled.push({after:o,before:(0,l.a)(o,d-1)}),!o&&s&&u.disabled.push({after:eo(s,d-1),before:(0,l.a)(s,d-1)})),c){if(o&&!s&&(u.disabled.push({before:(0,l.a)(o,-c+1)}),u.disabled.push({after:(0,l.a)(o,c-1)})),o&&s){var p=c-(g(s,o)+1);u.disabled.push({before:eo(o,p)}),u.disabled.push({after:(0,l.a)(s,p)})}!o&&s&&(u.disabled.push({before:(0,l.a)(s,-c+1)}),u.disabled.push({after:(0,l.a)(s,c-1)}))}return(0,a.jsx)(eZ.Provider,{value:{selected:r,onDayClick:function(e,n,i){null===(l=t.onDayClick)||void 0===l||l.call(t,e,n,i);var o,a,s,l,d,c=(a=(o=r||{}).from,s=o.to,a&&s?y(s,e)&&y(a,e)?void 0:y(s,e)?{from:s,to:void 0}:y(a,e)?void 0:en(a,e)?{from:e,to:s}:{from:a,to:e}:s?en(e,s)?{from:s,to:e}:{from:e,to:s}:a?er(e,a)?{from:e,to:a}:{from:a,to:e}:{from:e,to:void 0});null===(d=t.onSelect)||void 0===d||d.call(t,c,e,n,i)},modifiers:u},children:n})}function eV(){var e=(0,s.useContext)(eZ);if(!e)throw Error("useSelectRange must be used within a SelectRangeProvider");return e}function eU(e){return Array.isArray(e)?ed([],e):void 0!==e?[e]:[]}(i=o||(o={})).Outside="outside",i.Disabled="disabled",i.Selected="selected",i.Hidden="hidden",i.Today="today",i.RangeStart="range_start",i.RangeEnd="range_end",i.RangeMiddle="range_middle";var eq=o.Selected,eY=o.Disabled,eG=o.Hidden,eX=o.Today,eK=o.RangeEnd,eJ=o.RangeMiddle,eQ=o.RangeStart,e1=o.Outside,e0=(0,s.createContext)(void 0);function e2(e){var t,n,r,i=eb(),o=ez(),s=eV(),l=((t={})[eq]=eU(i.selected),t[eY]=eU(i.disabled),t[eG]=eU(i.hidden),t[eX]=[i.today],t[eK]=[],t[eJ]=[],t[eQ]=[],t[e1]=[],i.fromDate&&t[eY].push({before:i.fromDate}),i.toDate&&t[eY].push({after:i.toDate}),ec(i)?t[eY]=t[eY].concat(o.modifiers[eY]):eu(i)&&(t[eY]=t[eY].concat(s.modifiers[eY]),t[eQ]=s.modifiers[eQ],t[eJ]=s.modifiers[eJ],t[eK]=s.modifiers[eK]),t),d=(n=i.modifiers,r={},Object.entries(n).forEach(function(e){var t=e[0],n=e[1];r[t]=eU(n)}),r),c=el(el({},l),d);return(0,a.jsx)(e0.Provider,{value:c,children:e.children})}function e3(){var e=(0,s.useContext)(e0);if(!e)throw Error("useModifiers must be used within a ModifiersProvider");return e}function e5(e,t,n){var r=Object.keys(t).reduce(function(n,r){return t[r].some(function(t){if("boolean"==typeof t)return t;if(x(t))return y(e,t);if(Array.isArray(t)&&t.every(x))return t.includes(e);if(t&&"object"==typeof t&&"from"in t)return r=t.from,i=t.to,r&&i?(0>g(i,r)&&(r=(n=[i,r])[0],i=n[1]),g(e,r)>=0&&g(i,e)>=0):i?y(i,e):!!r&&y(r,e);if(t&&"object"==typeof t&&"dayOfWeek"in t)return t.dayOfWeek.includes(e.getDay());if(t&&"object"==typeof t&&"before"in t&&"after"in t){var n,r,i,o=g(t.before,e),a=g(t.after,e),s=o>0,l=a<0;return en(t.before,t.after)?l&&s:s||l}return t&&"object"==typeof t&&"after"in t?g(e,t.after)>0:t&&"object"==typeof t&&"before"in t?g(t.before,e)>0:"function"==typeof t&&t(e)})&&n.push(r),n},[]),i={};return r.forEach(function(e){return i[e]=!0}),n&&!ei(e,n)&&(i.outside=!0),i}var e4=(0,s.createContext)(void 0);function e7(e){var t=eS(),n=e3(),r=(0,s.useState)(),i=r[0],o=r[1],c=(0,s.useState)(),h=c[0],f=c[1],m=function(e,t){for(var n,r,i=C(e[0]),o=_(e[e.length-1]),a=i;a<=o;){var s=e5(a,t);if(!(!s.disabled&&!s.hidden)){a=(0,l.a)(a,1);continue}if(s.selected)return a;s.today&&!r&&(r=a),n||(n=a),a=(0,l.a)(a,1)}return r||n}(t.displayMonths,n),g=i??(h&&t.isDateDisplayed(h))?h:m,x=function(e){o(e)},w=eb(),$=function(e,r){if(i){var o=function e(t,n){let r,i;var o=n.moveBy,a=n.direction,s=n.context,c=n.modifiers,h=n.retry,f=void 0===h?{count:0,lastFocused:t}:h,m=s.weekStartsOn,g=s.fromDate,y=s.toDate,x=s.locale,w=({day:l.a,week:v,month:d,year:b,startOfWeek:function(e){return s.ISOWeek?p(e):u(e,{locale:x,weekStartsOn:m})},endOfWeek:function(e){return s.ISOWeek?S(e):k(e,{locale:x,weekStartsOn:m})}})[o](t,"after"===a?1:-1);"before"===a&&g?([g,w].forEach(function(e){let t=(0,l.t)(e);(void 0===r||r<t||isNaN(Number(t)))&&(r=t)}),w=r||new Date(NaN)):"after"===a&&y&&([y,w].forEach(e=>{let t=(0,l.t)(e);(!i||i>t||isNaN(+t))&&(i=t)}),w=i||new Date(NaN));var _=!0;if(c){var C=e5(w,c);_=!C.disabled&&!C.hidden}return _?w:f.count>365?f.lastFocused:e(w,{moveBy:o,direction:a,context:s,modifiers:c,retry:el(el({},f),{count:f.count+1})})}(i,{moveBy:e,direction:r,context:w,modifiers:n});y(i,o)||(t.goToDate(o,i),x(o))}};return(0,a.jsx)(e4.Provider,{value:{focusedDay:i,focusTarget:g,blur:function(){f(i),o(void 0)},focus:x,focusDayAfter:function(){return $("day","after")},focusDayBefore:function(){return $("day","before")},focusWeekAfter:function(){return $("week","after")},focusWeekBefore:function(){return $("week","before")},focusMonthBefore:function(){return $("month","before")},focusMonthAfter:function(){return $("month","after")},focusYearBefore:function(){return $("year","before")},focusYearAfter:function(){return $("year","after")},focusStartOfWeek:function(){return $("startOfWeek","before")},focusEndOfWeek:function(){return $("endOfWeek","after")}},children:e.children})}function e6(){var e=(0,s.useContext)(e4);if(!e)throw Error("useFocusContext must be used within a FocusProvider");return e}var e8=(0,s.createContext)(void 0);function e9(e){return ep(e.initialProps)?(0,a.jsx)(te,{initialProps:e.initialProps,children:e.children}):(0,a.jsx)(e8.Provider,{value:{selected:void 0},children:e.children})}function te(e){var t=e.initialProps,n=e.children,r={selected:t.selected,onDayClick:function(e,n,r){var i,o,a;if(null===(i=t.onDayClick)||void 0===i||i.call(t,e,n,r),n.selected&&!t.required){null===(o=t.onSelect)||void 0===o||o.call(t,void 0,e,n,r);return}null===(a=t.onSelect)||void 0===a||a.call(t,e,e,n,r)}};return(0,a.jsx)(e8.Provider,{value:r,children:n})}function tt(){var e=(0,s.useContext)(e8);if(!e)throw Error("useSelectSingle must be used within a SelectSingleProvider");return e}function tn(e){var t,n,r,i,l,d,c,u,p,h,f,m,g,v,b,x,w,_,C,$,k,S,j,E,O,P,N,M,T,L,D,A,I,B,R,F,z,Z,H,W,V,U,q=(0,s.useRef)(null),Y=(t=e.date,n=e.displayMonth,N=eb(),M=e6(),T=e5(t,e3(),n),r=eb(),i=tt(),l=ez(),d=eV(),u=(c=e6()).focusDayAfter,p=c.focusDayBefore,h=c.focusWeekAfter,f=c.focusWeekBefore,m=c.blur,g=c.focus,v=c.focusMonthBefore,b=c.focusMonthAfter,x=c.focusYearBefore,w=c.focusYearAfter,_=c.focusStartOfWeek,C=c.focusEndOfWeek,L={onClick:function(e){var n,o,a,s;ep(r)?null===(n=i.onDayClick)||void 0===n||n.call(i,t,T,e):ec(r)?null===(o=l.onDayClick)||void 0===o||o.call(l,t,T,e):eu(r)?null===(a=d.onDayClick)||void 0===a||a.call(d,t,T,e):null===(s=r.onDayClick)||void 0===s||s.call(r,t,T,e)},onFocus:function(e){var n;g(t),null===(n=r.onDayFocus)||void 0===n||n.call(r,t,T,e)},onBlur:function(e){var n;m(),null===(n=r.onDayBlur)||void 0===n||n.call(r,t,T,e)},onKeyDown:function(e){var n;switch(e.key){case"ArrowLeft":e.preventDefault(),e.stopPropagation(),"rtl"===r.dir?u():p();break;case"ArrowRight":e.preventDefault(),e.stopPropagation(),"rtl"===r.dir?p():u();break;case"ArrowDown":e.preventDefault(),e.stopPropagation(),h();break;case"ArrowUp":e.preventDefault(),e.stopPropagation(),f();break;case"PageUp":e.preventDefault(),e.stopPropagation(),e.shiftKey?x():v();break;case"PageDown":e.preventDefault(),e.stopPropagation(),e.shiftKey?w():b();break;case"Home":e.preventDefault(),e.stopPropagation(),_();break;case"End":e.preventDefault(),e.stopPropagation(),C()}null===(n=r.onDayKeyDown)||void 0===n||n.call(r,t,T,e)},onKeyUp:function(e){var n;null===(n=r.onDayKeyUp)||void 0===n||n.call(r,t,T,e)},onMouseEnter:function(e){var n;null===(n=r.onDayMouseEnter)||void 0===n||n.call(r,t,T,e)},onMouseLeave:function(e){var n;null===(n=r.onDayMouseLeave)||void 0===n||n.call(r,t,T,e)},onPointerEnter:function(e){var n;null===(n=r.onDayPointerEnter)||void 0===n||n.call(r,t,T,e)},onPointerLeave:function(e){var n;null===(n=r.onDayPointerLeave)||void 0===n||n.call(r,t,T,e)},onTouchCancel:function(e){var n;null===(n=r.onDayTouchCancel)||void 0===n||n.call(r,t,T,e)},onTouchEnd:function(e){var n;null===(n=r.onDayTouchEnd)||void 0===n||n.call(r,t,T,e)},onTouchMove:function(e){var n;null===(n=r.onDayTouchMove)||void 0===n||n.call(r,t,T,e)},onTouchStart:function(e){var n;null===(n=r.onDayTouchStart)||void 0===n||n.call(r,t,T,e)}},$=eb(),k=tt(),S=ez(),j=eV(),D=ep($)?k.selected:ec($)?S.selected:eu($)?j.selected:void 0,A=!!(N.onDayClick||"default"!==N.mode),(0,s.useEffect)(function(){var e;T.outside||M.focusedDay&&A&&y(M.focusedDay,t)&&(null===(e=q.current)||void 0===e||e.focus())},[M.focusedDay,t,q,A,T.outside]),R=(I=[N.classNames.day],Object.keys(T).forEach(function(e){var t=N.modifiersClassNames[e];if(t)I.push(t);else if(Object.values(o).includes(e)){var n=N.classNames["day_".concat(e)];n&&I.push(n)}}),I).join(" "),B=el({},N.styles.day),Object.keys(T).forEach(function(e){var t;B=el(el({},B),null===(t=N.modifiersStyles)||void 0===t?void 0:t[e])}),F=B,z=!!(T.outside&&!N.showOutsideDays||T.hidden),Z=null!==(P=null===(O=N.components)||void 0===O?void 0:O.DayContent)&&void 0!==P?P:eI,H={style:F,className:R,children:(0,a.jsx)(Z,{date:t,displayMonth:n,activeModifiers:T}),role:"gridcell"},W=M.focusTarget&&y(M.focusTarget,t)&&!T.outside,V=M.focusedDay&&y(M.focusedDay,t),U=el(el(el({},H),((E={disabled:T.disabled,role:"gridcell"})["aria-selected"]=T.selected,E.tabIndex=V||W?0:-1,E)),L),{isButton:A,isHidden:z,activeModifiers:T,selectedDays:D,buttonProps:U,divProps:H});return Y.isHidden?(0,a.jsx)("div",{role:"gridcell"}):Y.isButton?(0,a.jsx)(eP,el({name:"day",ref:q},Y.buttonProps)):(0,a.jsx)("div",el({},Y.divProps))}function tr(e){var t=e.number,n=e.dates,r=eb(),i=r.onWeekNumberClick,o=r.styles,s=r.classNames,l=r.locale,d=r.labels.labelWeekNumber,c=(0,r.formatters.formatWeekNumber)(Number(t),{locale:l});if(!i)return(0,a.jsx)("span",{className:s.weeknumber,style:o.weeknumber,children:c});var u=d(Number(t),{locale:l});return(0,a.jsx)(eP,{name:"week-number","aria-label":u,className:s.weeknumber,style:o.weeknumber,onClick:function(e){i(t,n,e)},children:c})}function ti(e){var t,n,r,i=eb(),o=i.styles,s=i.classNames,d=i.showWeekNumber,c=i.components,u=null!==(t=null==c?void 0:c.Day)&&void 0!==t?t:tn,p=null!==(n=null==c?void 0:c.WeekNumber)&&void 0!==n?n:tr;return d&&(r=(0,a.jsx)("td",{className:s.cell,style:o.cell,children:(0,a.jsx)(p,{number:e.weekNumber,dates:e.dates})})),(0,a.jsxs)("tr",{className:s.row,style:o.row,children:[r,e.dates.map(function(t){return(0,a.jsx)("td",{className:s.cell,style:o.cell,role:"presentation",children:(0,a.jsx)(u,{displayMonth:e.displayMonth,date:t})},Math.trunc(+(0,l.t)(t)/1e3))})]})}function to(e,t,n){for(var r=null!=n&&n.ISOWeek?S(t):k(t,n),i=null!=n&&n.ISOWeek?p(e):u(e,n),o=g(r,i),a=[],s=0;s<=o;s++)a.push((0,l.a)(i,s));return a.reduce(function(e,t){var r=null!=n&&n.ISOWeek?L(t):A(t,n),i=e.find(function(e){return e.weekNumber===r});return i?i.dates.push(t):e.push({weekNumber:r,dates:[t]}),e},[])}function ta(e){var t,n,r,i=eb(),o=i.locale,s=i.classNames,d=i.styles,c=i.hideHead,p=i.fixedWeeks,h=i.components,f=i.weekStartsOn,g=i.firstWeekContainsDate,b=i.ISOWeek,y=function(e,t){var n=to(C(e),_(e),t);if(null!=t&&t.useFixedWeeks){var r=function(e,t,n){let r=u(e,n),i=u(t,n);return Math.round((+r-m(r)-(+i-m(i)))/6048e5)}(function(e){let t=(0,l.t)(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}(e),C(e),t)+1;if(r<6){var i=n[n.length-1],o=i.dates[i.dates.length-1],a=v(o,6-r),s=to(v(o,1),a,t);n.push.apply(n,s)}}return n}(e.displayMonth,{useFixedWeeks:!!p,ISOWeek:b,locale:o,weekStartsOn:f,firstWeekContainsDate:g}),x=null!==(t=null==h?void 0:h.Head)&&void 0!==t?t:eA,w=null!==(n=null==h?void 0:h.Row)&&void 0!==n?n:ti,$=null!==(r=null==h?void 0:h.Footer)&&void 0!==r?r:eL;return(0,a.jsxs)("table",{id:e.id,className:s.table,style:d.table,role:"grid","aria-labelledby":e["aria-labelledby"],children:[!c&&(0,a.jsx)(x,{}),(0,a.jsx)("tbody",{className:s.tbody,style:d.tbody,children:y.map(function(t){return(0,a.jsx)(w,{displayMonth:e.displayMonth,dates:t.dates,weekNumber:t.weekNumber},t.weekNumber)})}),(0,a.jsx)($,{displayMonth:e.displayMonth})]})}var ts="u">typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect,tl=!1,td=0;function tc(){return"react-day-picker-".concat(++td)}function tu(e){var t,n,r,i,o,l,d,c,u=eb(),p=u.dir,h=u.classNames,f=u.styles,m=u.components,g=eS().displayMonths,v=(r=(t=u.id?"".concat(u.id,"-").concat(e.displayIndex):void 0)??(tl?tc():null),o=(i=(0,s.useState)(r))[0],l=i[1],ts(function(){null===o&&l(tc())},[]),(0,s.useEffect)(function(){!1===tl&&(tl=!0)},[]),null!==(n=t??o)&&void 0!==n?n:void 0),b=u.id?"".concat(u.id,"-grid-").concat(e.displayIndex):void 0,y=[h.month],x=f.month,w=0===e.displayIndex,_=e.displayIndex===g.length-1,C=!w&&!_;"rtl"===p&&(_=(d=[w,_])[0],w=d[1]),w&&(y.push(h.caption_start),x=el(el({},x),f.caption_start)),_&&(y.push(h.caption_end),x=el(el({},x),f.caption_end)),C&&(y.push(h.caption_between),x=el(el({},x),f.caption_between));var $=null!==(c=null==m?void 0:m.Caption)&&void 0!==c?c:eT;return(0,a.jsxs)("div",{className:y.join(" "),style:x,children:[(0,a.jsx)($,{id:v,displayMonth:e.displayMonth,displayIndex:e.displayIndex}),(0,a.jsx)(ta,{id:b,"aria-labelledby":v,displayMonth:e.displayMonth})]},e.displayIndex)}function tp(e){var t=eb(),n=t.classNames,r=t.styles;return(0,a.jsx)("div",{className:n.months,style:r.months,children:e.children})}function th(e){var t,n,r=e.initialProps,i=eb(),o=e6(),l=eS(),d=(0,s.useState)(!1),c=d[0],u=d[1];(0,s.useEffect)(function(){i.initialFocus&&o.focusTarget&&(c||(o.focus(o.focusTarget),u(!0)))},[i.initialFocus,c,o.focus,o.focusTarget,o]);var p=[i.classNames.root,i.className];i.numberOfMonths>1&&p.push(i.classNames.multiple_months),i.showWeekNumber&&p.push(i.classNames.with_weeknumber);var h=el(el({},i.styles.root),i.style),f=Object.keys(r).filter(function(e){return e.startsWith("data-")}).reduce(function(e,t){var n;return el(el({},e),((n={})[t]=r[t],n))},{}),m=null!==(n=null===(t=r.components)||void 0===t?void 0:t.Months)&&void 0!==n?n:tp;return(0,a.jsx)("div",el({className:p.join(" "),style:h,dir:i.dir,id:i.id,nonce:r.nonce,title:r.title,lang:r.lang},f,{children:(0,a.jsx)(m,{children:l.displayMonths.map(function(e,t){return(0,a.jsx)(tu,{displayIndex:t,displayMonth:e},t)})})}))}function tf(e){var t=e.children,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}(e,["children"]);return(0,a.jsx)(ev,{initialProps:n,children:(0,a.jsx)(ek,{children:(0,a.jsx)(e9,{initialProps:n,children:(0,a.jsx)(eR,{initialProps:n,children:(0,a.jsx)(eH,{initialProps:n,children:(0,a.jsx)(e2,{children:(0,a.jsx)(e7,{children:t})})})})})})})}function tm(e){return(0,a.jsx)(tf,el({},e,{children:(0,a.jsx)(th,{initialProps:e})}))}},28966:function(e,t,n){"use strict";let r;n.d(t,{VY:function(){return tk},tW:function(){return ta},QH:function(){return tx},xp:function(){return ty},h_:function(){return t$},fC:function(){return t_},xz:function(){return tC}});var i,o,a,s,l,d,c,u,p=n(45113),h=n.t(p,2);function f(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}function m(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function g(...e){return t=>{let n=!1,r=e.map(e=>{let r=m(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():m(e[t],null)}}}}function v(...e){return p.useCallback(g(...e),e)}var b=n(67251);function y(e,t=[]){let n=[],r=()=>{let t=n.map(e=>p.createContext(e));return function(n){let r=n?.[e]||t;return p.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let i=p.createContext(r),o=n.length;n=[...n,r];let a=t=>{let{scope:n,children:r,...a}=t,s=n?.[e]?.[o]||i,l=p.useMemo(()=>a,Object.values(a));return(0,b.jsx)(s.Provider,{value:l,children:r})};return a.displayName=t+"Provider",[a,function(n,a){let s=a?.[e]?.[o]||i,l=p.useContext(s);if(l)return l;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return p.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}var x=n(52509),w=p.forwardRef((e,t)=>{let{children:n,...r}=e,i=p.Children.toArray(n),o=i.find($);if(o){let e=o.props.children,n=i.map(t=>t!==o?t:p.Children.count(e)>1?p.Children.only(null):p.isValidElement(e)?e.props.children:null);return(0,b.jsx)(_,{...r,ref:t,children:p.isValidElement(e)?p.cloneElement(e,void 0,n):null})}return(0,b.jsx)(_,{...r,ref:t,children:n})});w.displayName="Slot";var _=p.forwardRef((e,t)=>{let{children:n,...r}=e;if(p.isValidElement(n)){let e,i;let o=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return p.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...e)=>{o(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...o}:"className"===r&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?g(t,o):o})}return p.Children.count(n)>1?p.Children.only(null):null});_.displayName="SlotClone";var C=({children:e})=>(0,b.jsx)(b.Fragment,{children:e});function $(e){return p.isValidElement(e)&&e.type===C}var k=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=p.forwardRef((e,n)=>{let{asChild:r,...i}=e,o=r?w:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,b.jsx)(o,{...i,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function S(e){let t=p.useRef(e);return p.useEffect(()=>{t.current=e}),p.useMemo(()=>(...e)=>t.current?.(...e),[])}var j="dismissableLayer.update",E=p.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),O=p.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:o,onPointerDownOutside:a,onFocusOutside:s,onInteractOutside:l,onDismiss:d,...u}=e,h=p.useContext(E),[m,g]=p.useState(null),y=null!==(r=null==m?void 0:m.ownerDocument)&&void 0!==r?r:null===(n=globalThis)||void 0===n?void 0:n.document,[,x]=p.useState({}),w=v(t,e=>g(e)),_=Array.from(h.layers),[C]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),$=_.indexOf(C),O=m?_.indexOf(m):-1,M=h.layersWithOutsidePointerEventsDisabled.size>0,T=O>=$,L=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=S(e),i=p.useRef(!1),o=p.useRef(()=>{});return p.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){N("dismissableLayer.pointerDownOutside",r,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",o.current),o.current=t,n.addEventListener("click",o.current,{once:!0})):t()}else n.removeEventListener("click",o.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",o.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...h.branches].some(e=>e.contains(t));!T||n||(null==a||a(e),null==l||l(e),e.defaultPrevented||null==d||d())},y),D=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=S(e),i=p.useRef(!1);return p.useEffect(()=>{let e=e=>{e.target&&!i.current&&N("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...h.branches].some(e=>e.contains(t))||(null==s||s(e),null==l||l(e),e.defaultPrevented||null==d||d())},y);return!function(e,t=globalThis?.document){let n=S(e);p.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{O!==h.layers.size-1||(null==o||o(e),!e.defaultPrevented&&d&&(e.preventDefault(),d()))},y),p.useEffect(()=>{if(m)return i&&(0===h.layersWithOutsidePointerEventsDisabled.size&&(c=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(m)),h.layers.add(m),P(),()=>{i&&1===h.layersWithOutsidePointerEventsDisabled.size&&(y.body.style.pointerEvents=c)}},[m,y,i,h]),p.useEffect(()=>()=>{m&&(h.layers.delete(m),h.layersWithOutsidePointerEventsDisabled.delete(m),P())},[m,h]),p.useEffect(()=>{let e=()=>x({});return document.addEventListener(j,e),()=>document.removeEventListener(j,e)},[]),(0,b.jsx)(k.div,{...u,ref:w,style:{pointerEvents:M?T?"auto":"none":void 0,...e.style},onFocusCapture:f(e.onFocusCapture,D.onFocusCapture),onBlurCapture:f(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:f(e.onPointerDownCapture,L.onPointerDownCapture)})});function P(){let e=new CustomEvent(j);document.dispatchEvent(e)}function N(e,t,n,r){let{discrete:i}=r,o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),i)?o&&x.flushSync(()=>o.dispatchEvent(a)):o.dispatchEvent(a)}O.displayName="DismissableLayer",p.forwardRef((e,t)=>{let n=p.useContext(E),r=p.useRef(null),i=v(t,r);return p.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,b.jsx)(k.div,{...e,ref:i})}).displayName="DismissableLayerBranch";var M=0;function T(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var L="focusScope.autoFocusOnMount",D="focusScope.autoFocusOnUnmount",A={bubbles:!1,cancelable:!0},I=p.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...a}=e,[s,l]=p.useState(null),d=S(i),c=S(o),u=p.useRef(null),h=v(t,e=>l(e)),f=p.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;p.useEffect(()=>{if(r){let e=function(e){if(f.paused||!s)return;let t=e.target;s.contains(t)?u.current=t:F(u.current,{select:!0})},t=function(e){if(f.paused||!s)return;let t=e.relatedTarget;null===t||s.contains(t)||F(u.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&F(s)});return s&&n.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,s,f.paused]),p.useEffect(()=>{if(s){z.add(f);let e=document.activeElement;if(!s.contains(e)){let t=new CustomEvent(L,A);s.addEventListener(L,d),s.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(F(r,{select:t}),document.activeElement!==n)return}(B(s).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&F(s))}return()=>{s.removeEventListener(L,d),setTimeout(()=>{let t=new CustomEvent(D,A);s.addEventListener(D,c),s.dispatchEvent(t),t.defaultPrevented||F(null!=e?e:document.body,{select:!0}),s.removeEventListener(D,c),z.remove(f)},0)}}},[s,d,c,f]);let m=p.useCallback(e=>{if(!n&&!r||f.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,i=document.activeElement;if(t&&i){let t=e.currentTarget,[r,o]=function(e){let t=B(e);return[R(t,e),R(t.reverse(),e)]}(t);r&&o?e.shiftKey||i!==o?e.shiftKey&&i===r&&(e.preventDefault(),n&&F(o,{select:!0})):(e.preventDefault(),n&&F(r,{select:!0})):i===t&&e.preventDefault()}},[n,r,f.paused]);return(0,b.jsx)(k.div,{tabIndex:-1,...a,ref:h,onKeyDown:m})});function B(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function R(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function F(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}I.displayName="FocusScope";var z=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=Z(r,e)).unshift(e)},remove(e){var t;null===(t=(r=Z(r,e))[0])||void 0===t||t.resume()}});function Z(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var H=globalThis?.document?p.useLayoutEffect:()=>{},W=h["useId".toString()]||(()=>void 0),V=0,U=n(19713),q=n(15861),Y=p.forwardRef((e,t)=>{let{children:n,width:r=10,height:i=5,...o}=e;return(0,b.jsx)(k.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,b.jsx)("polygon",{points:"0,0 30,0 15,10"})})});Y.displayName="Arrow";var G="Popper",[X,K]=y(G),[J,Q]=X(G),ee=e=>{let{__scopePopper:t,children:n}=e,[r,i]=p.useState(null);return(0,b.jsx)(J,{scope:t,anchor:r,onAnchorChange:i,children:n})};ee.displayName=G;var et="PopperAnchor",en=p.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:r,...i}=e,o=Q(et,n),a=p.useRef(null),s=v(t,a);return p.useEffect(()=>{o.onAnchorChange((null==r?void 0:r.current)||a.current)}),r?null:(0,b.jsx)(k.div,{...i,ref:s})});en.displayName=et;var er="PopperContent",[ei,eo]=X(er),ea=p.forwardRef((e,t)=>{var n,r,i,o,a,s,l,d;let{__scopePopper:c,side:u="bottom",sideOffset:h=0,align:f="center",alignOffset:m=0,arrowPadding:g=0,avoidCollisions:y=!0,collisionBoundary:x=[],collisionPadding:w=0,sticky:_="partial",hideWhenDetached:C=!1,updatePositionStrategy:$="optimized",onPlaced:j,...E}=e,O=Q(er,c),[P,N]=p.useState(null),M=v(t,e=>N(e)),[T,L]=p.useState(null),D=function(e){let[t,n]=p.useState(void 0);return H(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(T),A=null!==(l=null==D?void 0:D.width)&&void 0!==l?l:0,I=null!==(d=null==D?void 0:D.height)&&void 0!==d?d:0,B="number"==typeof w?w:{top:0,right:0,bottom:0,left:0,...w},R=Array.isArray(x)?x:[x],F=R.length>0,z={padding:B,boundary:R.filter(ec),altBoundary:F},{refs:Z,floatingStyles:W,placement:V,isPositioned:Y,middlewareData:G}=(0,U.YF)({strategy:"fixed",placement:u+("center"!==f?"-"+f:""),whileElementsMounted:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,q.Me)(...t,{animationFrame:"always"===$})},elements:{reference:O.anchor},middleware:[(0,U.cv)({mainAxis:h+I,alignmentAxis:m}),y&&(0,U.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===_?(0,U.dr)():void 0,...z}),y&&(0,U.RR)({...z}),(0,U.dp)({...z,apply:e=>{let{elements:t,rects:n,availableWidth:r,availableHeight:i}=e,{width:o,height:a}=n.reference,s=t.floating.style;s.setProperty("--radix-popper-available-width","".concat(r,"px")),s.setProperty("--radix-popper-available-height","".concat(i,"px")),s.setProperty("--radix-popper-anchor-width","".concat(o,"px")),s.setProperty("--radix-popper-anchor-height","".concat(a,"px"))}}),T&&(0,U.x7)({element:T,padding:g}),eu({arrowWidth:A,arrowHeight:I}),C&&(0,U.Cp)({strategy:"referenceHidden",...z})]}),[X,K]=ep(V),J=S(j);H(()=>{Y&&(null==J||J())},[Y,J]);let ee=null===(n=G.arrow)||void 0===n?void 0:n.x,et=null===(r=G.arrow)||void 0===r?void 0:r.y,en=(null===(i=G.arrow)||void 0===i?void 0:i.centerOffset)!==0,[eo,ea]=p.useState();return H(()=>{P&&ea(window.getComputedStyle(P).zIndex)},[P]),(0,b.jsx)("div",{ref:Z.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:Y?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:eo,"--radix-popper-transform-origin":[null===(o=G.transformOrigin)||void 0===o?void 0:o.x,null===(a=G.transformOrigin)||void 0===a?void 0:a.y].join(" "),...(null===(s=G.hide)||void 0===s?void 0:s.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,b.jsx)(ei,{scope:c,placedSide:X,onArrowChange:L,arrowX:ee,arrowY:et,shouldHideArrow:en,children:(0,b.jsx)(k.div,{"data-side":X,"data-align":K,...E,ref:M,style:{...E.style,animation:Y?void 0:"none"}})})})});ea.displayName=er;var es="PopperArrow",el={top:"bottom",right:"left",bottom:"top",left:"right"},ed=p.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,i=eo(es,n),o=el[i.placedSide];return(0,b.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,b.jsx)(Y,{...r,ref:t,style:{...r.style,display:"block"}})})});function ec(e){return null!==e}ed.displayName=es;var eu=e=>({name:"transformOrigin",options:e,fn(t){var n,r,i,o,a;let{placement:s,rects:l,middlewareData:d}=t,c=(null===(n=d.arrow)||void 0===n?void 0:n.centerOffset)!==0,u=c?0:e.arrowWidth,p=c?0:e.arrowHeight,[h,f]=ep(s),m={start:"0%",center:"50%",end:"100%"}[f],g=(null!==(o=null===(r=d.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+u/2,v=(null!==(a=null===(i=d.arrow)||void 0===i?void 0:i.y)&&void 0!==a?a:0)+p/2,b="",y="";return"bottom"===h?(b=c?m:"".concat(g,"px"),y="".concat(-p,"px")):"top"===h?(b=c?m:"".concat(g,"px"),y="".concat(l.floating.height+p,"px")):"right"===h?(b="".concat(-p,"px"),y=c?m:"".concat(v,"px")):"left"===h&&(b="".concat(l.floating.width+p,"px"),y=c?m:"".concat(v,"px")),{data:{x:b,y}}}});function ep(e){let[t,n="center"]=e.split("-");return[t,n]}var eh=p.forwardRef((e,t)=>{var n,r;let{container:i,...o}=e,[a,s]=p.useState(!1);H(()=>s(!0),[]);let l=i||a&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return l?x.createPortal((0,b.jsx)(k.div,{...o,ref:t}),l):null});eh.displayName="Portal";var ef=e=>{var t,n;let r,i;let{present:o,children:a}=e,s=function(e){var t,n;let[r,i]=p.useState(),o=p.useRef({}),a=p.useRef(e),s=p.useRef("none"),[l,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},p.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return p.useEffect(()=>{let e=em(o.current);s.current="mounted"===l?e:"none"},[l]),H(()=>{let t=o.current,n=a.current;if(n!==e){let r=s.current,i=em(t);e?d("MOUNT"):"none"===i||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):n&&r!==i?d("ANIMATION_OUT"):d("UNMOUNT"),a.current=e}},[e,d]),H(()=>{if(r){var e;let t;let n=null!==(e=r.ownerDocument.defaultView)&&void 0!==e?e:window,i=e=>{let i=em(o.current).includes(e.animationName);if(e.target===r&&i&&(d("ANIMATION_END"),!a.current)){let e=r.style.animationFillMode;r.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=e)})}},l=e=>{e.target===r&&(s.current=em(o.current))};return r.addEventListener("animationstart",l),r.addEventListener("animationcancel",i),r.addEventListener("animationend",i),()=>{n.clearTimeout(t),r.removeEventListener("animationstart",l),r.removeEventListener("animationcancel",i),r.removeEventListener("animationend",i)}}d("ANIMATION_END")},[r,d]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:p.useCallback(e=>{e&&(o.current=getComputedStyle(e)),i(e)},[])}}(o),l="function"==typeof a?a({present:s.isPresent}):p.Children.only(a),d=v(s.ref,(r=null===(t=Object.getOwnPropertyDescriptor(l.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in r&&r.isReactWarning?l.ref:(r=null===(n=Object.getOwnPropertyDescriptor(l,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning?l.props.ref:l.props.ref||l.ref);return"function"==typeof a||s.isPresent?p.cloneElement(l,{ref:d}):null};function em(e){return(null==e?void 0:e.animationName)||"none"}ef.displayName="Presence";var eg=new WeakMap,ev=new WeakMap,eb={},ey=0,ex=function(e){return e&&(e.host||ex(e.parentNode))},ew=function(e,t,n,r){var i=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=ex(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eb[n]||(eb[n]=new WeakMap);var o=eb[n],a=[],s=new Set,l=new Set(i),d=function(e){!e||s.has(e)||(s.add(e),d(e.parentNode))};i.forEach(d);var c=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))c(e);else try{var t=e.getAttribute(r),i=null!==t&&"false"!==t,l=(eg.get(e)||0)+1,d=(o.get(e)||0)+1;eg.set(e,l),o.set(e,d),a.push(e),1===l&&i&&ev.set(e,!0),1===d&&e.setAttribute(n,"true"),i||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return c(t),s.clear(),ey++,function(){a.forEach(function(e){var t=eg.get(e)-1,i=o.get(e)-1;eg.set(e,t),o.set(e,i),t||(ev.has(e)||e.removeAttribute(r),ev.delete(e)),i||e.removeAttribute(n)}),--ey||(eg=new WeakMap,eg=new WeakMap,ev=new WeakMap,eb={})}},e_=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live], script"))),ew(r,i,n,"aria-hidden")):function(){return null}},eC=function(){return(eC=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function e$(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}"function"==typeof SuppressedError&&SuppressedError;var ek="right-scroll-bar-position",eS="width-before-scroll-bar";function ej(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var eE="undefined"!=typeof window?p.useLayoutEffect:p.useEffect,eO=new WeakMap,eP=(void 0===i&&(i={}),(void 0===o&&(o=function(e){return e}),a=[],s=!1,l={read:function(){if(s)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=o(e,s);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(s=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){s=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(r)};i(),a={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),a}}}}).options=eC({async:!0,ssr:!1},i),l),eN=function(){},eM=p.forwardRef(function(e,t){var n,r,i,o,a=p.useRef(null),s=p.useState({onScrollCapture:eN,onWheelCapture:eN,onTouchMoveCapture:eN}),l=s[0],d=s[1],c=e.forwardProps,u=e.children,h=e.className,f=e.removeScrollBar,m=e.enabled,g=e.shards,v=e.sideCar,b=e.noIsolation,y=e.inert,x=e.allowPinchZoom,w=e.as,_=e.gapMode,C=e$(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),$=(n=[a,t],r=function(e){return n.forEach(function(t){return ej(t,e)})},(i=(0,p.useState)(function(){return{value:null,callback:r,facade:{get current(){return i.value},set current(value){var e=i.value;e!==value&&(i.value=value,i.callback(value,e))}}}})[0]).callback=r,o=i.facade,eE(function(){var e=eO.get(o);if(e){var t=new Set(e),r=new Set(n),i=o.current;t.forEach(function(e){r.has(e)||ej(e,null)}),r.forEach(function(e){t.has(e)||ej(e,i)})}eO.set(o,n)},[n]),o),k=eC(eC({},C),l);return p.createElement(p.Fragment,null,m&&p.createElement(v,{sideCar:eP,removeScrollBar:f,shards:g,noIsolation:b,inert:y,setCallbacks:d,allowPinchZoom:!!x,lockRef:a,gapMode:_}),c?p.cloneElement(p.Children.only(u),eC(eC({},k),{ref:$})):p.createElement(void 0===w?"div":w,eC({},k,{className:h,ref:$}),u))});eM.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},eM.classNames={fullWidth:eS,zeroRight:ek};var eT=function(e){var t=e.sideCar,n=e$(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return p.createElement(r,eC({},n))};eT.isSideCarExport=!0;var eL=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=u||n.nc;return t&&e.setAttribute("nonce",t),e}())){var i,o;(i=t).styleSheet?i.styleSheet.cssText=r:i.appendChild(document.createTextNode(r)),o=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},eD=function(){var e=eL();return function(t,n){p.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},eA=function(){var e=eD();return function(t){return e(t.styles,t.dynamic),null}},eI={left:0,top:0,right:0,gap:0},eB=function(e){return parseInt(e||"",10)||0},eR=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],i=t["padding"===e?"paddingRight":"marginRight"];return[eB(n),eB(r),eB(i)]},eF=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return eI;var t=eR(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ez=eA(),eZ="data-scroll-locked",eH=function(e,t,n,r){var i=e.left,o=e.top,a=e.right,s=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(s,"px ").concat(r,";\n  }\n  body[").concat(eZ,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(i,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(ek," {\n    right: ").concat(s,"px ").concat(r,";\n  }\n  \n  .").concat(eS," {\n    margin-right: ").concat(s,"px ").concat(r,";\n  }\n  \n  .").concat(ek," .").concat(ek," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(eS," .").concat(eS," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(eZ,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(s,"px;\n  }\n")},eW=function(){var e=parseInt(document.body.getAttribute(eZ)||"0",10);return isFinite(e)?e:0},eV=function(){p.useEffect(function(){return document.body.setAttribute(eZ,(eW()+1).toString()),function(){var e=eW()-1;e<=0?document.body.removeAttribute(eZ):document.body.setAttribute(eZ,e.toString())}},[])},eU=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=void 0===r?"margin":r;eV();var o=p.useMemo(function(){return eF(i)},[i]);return p.createElement(ez,{styles:eH(o,!t,i,n?"":"!important")})},eq=!1;if("undefined"!=typeof window)try{var eY=Object.defineProperty({},"passive",{get:function(){return eq=!0,!0}});window.addEventListener("test",eY,eY),window.removeEventListener("test",eY,eY)}catch(e){eq=!1}var eG=!!eq&&{passive:!1},eX=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},eK=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),eJ(e,r)){var i=eQ(e,r);if(i[1]>i[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},eJ=function(e,t){return"v"===e?eX(t,"overflowY"):eX(t,"overflowX")},eQ=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},e1=function(e,t,n,r,i){var o,a=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),s=a*r,l=n.target,d=t.contains(l),c=!1,u=s>0,p=0,h=0;do{var f=eQ(e,l),m=f[0],g=f[1]-f[2]-a*m;(m||g)&&eJ(e,l)&&(p+=g,h+=m),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!d&&l!==document.body||d&&(t.contains(l)||t===l));return u&&(i&&1>Math.abs(p)||!i&&s>p)?c=!0:!u&&(i&&1>Math.abs(h)||!i&&-s>h)&&(c=!0),c},e0=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},e2=function(e){return[e.deltaX,e.deltaY]},e3=function(e){return e&&"current"in e?e.current:e},e5=0,e4=[],e7=(d=function(e){var t=p.useRef([]),n=p.useRef([0,0]),r=p.useRef(),i=p.useState(e5++)[0],o=p.useState(eA)[0],a=p.useRef(e);p.useEffect(function(){a.current=e},[e]),p.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(e3),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var s=p.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!a.current.allowPinchZoom;var i,o=e0(e),s=n.current,l="deltaX"in e?e.deltaX:s[0]-o[0],d="deltaY"in e?e.deltaY:s[1]-o[1],c=e.target,u=Math.abs(l)>Math.abs(d)?"h":"v";if("touches"in e&&"h"===u&&"range"===c.type)return!1;var p=eK(u,c);if(!p)return!0;if(p?i=u:(i="v"===u?"h":"v",p=eK(u,c)),!p)return!1;if(!r.current&&"changedTouches"in e&&(l||d)&&(r.current=i),!i)return!0;var h=r.current||i;return e1(h,t,e,"h"===h?l:d,!0)},[]),l=p.useCallback(function(e){if(e4.length&&e4[e4.length-1]===o){var n="deltaY"in e?e2(e):e0(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var i=(a.current.shards||[]).map(e3).filter(Boolean).filter(function(t){return t.contains(e.target)});(i.length>0?s(e,i[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),d=p.useCallback(function(e,n,r,i){var o={name:e,delta:n,target:r,should:i,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),c=p.useCallback(function(e){n.current=e0(e),r.current=void 0},[]),u=p.useCallback(function(t){d(t.type,e2(t),t.target,s(t,e.lockRef.current))},[]),h=p.useCallback(function(t){d(t.type,e0(t),t.target,s(t,e.lockRef.current))},[]);p.useEffect(function(){return e4.push(o),e.setCallbacks({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:h}),document.addEventListener("wheel",l,eG),document.addEventListener("touchmove",l,eG),document.addEventListener("touchstart",c,eG),function(){e4=e4.filter(function(e){return e!==o}),document.removeEventListener("wheel",l,eG),document.removeEventListener("touchmove",l,eG),document.removeEventListener("touchstart",c,eG)}},[]);var f=e.removeScrollBar,m=e.inert;return p.createElement(p.Fragment,null,m?p.createElement(o,{styles:"\n  .block-interactivity-".concat(i," {pointer-events: none;}\n  .allow-interactivity-").concat(i," {pointer-events: all;}\n")}):null,f?p.createElement(eU,{gapMode:e.gapMode}):null)},eP.useMedium(d),eT),e6=p.forwardRef(function(e,t){return p.createElement(eM,eC({},e,{ref:t,sideCar:e7}))});e6.classNames=eM.classNames;var e8="Popover",[e9,te]=y(e8,[K]),tt=K(),[tn,tr]=e9(e8),ti=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:o,modal:a=!1}=e,s=tt(t),l=p.useRef(null),[d,c]=p.useState(!1),[u=!1,h]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,i]=function({defaultProp:e,onChange:t}){let n=p.useState(e),[r]=n,i=p.useRef(r),o=S(t);return p.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}({defaultProp:t,onChange:n}),o=void 0!==e,a=o?e:r,s=S(n);return[a,p.useCallback(t=>{if(o){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else i(t)},[o,e,i,s])]}({prop:r,defaultProp:i,onChange:o});return(0,b.jsx)(ee,{...s,children:(0,b.jsx)(tn,{scope:t,contentId:function(e){let[t,n]=p.useState(W());return H(()=>{n(e=>e??String(V++))},[void 0]),t?`radix-${t}`:""}(),triggerRef:l,open:u,onOpenChange:h,onOpenToggle:p.useCallback(()=>h(e=>!e),[h]),hasCustomAnchor:d,onCustomAnchorAdd:p.useCallback(()=>c(!0),[]),onCustomAnchorRemove:p.useCallback(()=>c(!1),[]),modal:a,children:n})})};ti.displayName=e8;var to="PopoverAnchor",ta=p.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=tr(to,n),o=tt(n),{onCustomAnchorAdd:a,onCustomAnchorRemove:s}=i;return p.useEffect(()=>(a(),()=>s()),[a,s]),(0,b.jsx)(en,{...o,...r,ref:t})});ta.displayName=to;var ts="PopoverTrigger",tl=p.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=tr(ts,n),o=tt(n),a=v(t,i.triggerRef),s=(0,b.jsx)(k.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":tw(i.open),...r,ref:a,onClick:f(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,b.jsx)(en,{asChild:!0,...o,children:s})});tl.displayName=ts;var td="PopoverPortal",[tc,tu]=e9(td,{forceMount:void 0}),tp=e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,o=tr(td,t);return(0,b.jsx)(tc,{scope:t,forceMount:n,children:(0,b.jsx)(ef,{present:n||o.open,children:(0,b.jsx)(eh,{asChild:!0,container:i,children:r})})})};tp.displayName=td;var th="PopoverContent",tf=p.forwardRef((e,t)=>{let n=tu(th,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,o=tr(th,e.__scopePopover);return(0,b.jsx)(ef,{present:r||o.open,children:o.modal?(0,b.jsx)(tm,{...i,ref:t}):(0,b.jsx)(tg,{...i,ref:t})})});tf.displayName=th;var tm=p.forwardRef((e,t)=>{let n=tr(th,e.__scopePopover),r=p.useRef(null),i=v(t,r),o=p.useRef(!1);return p.useEffect(()=>{let e=r.current;if(e)return e_(e)},[]),(0,b.jsx)(e6,{as:w,allowPinchZoom:!0,children:(0,b.jsx)(tv,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:f(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),o.current||null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:f(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;o.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:f(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),tg=p.forwardRef((e,t)=>{let n=tr(th,e.__scopePopover),r=p.useRef(!1),i=p.useRef(!1);return(0,b.jsx)(tv,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,a;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{var o,a;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let s=t.target;(null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(s))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}})}),tv=p.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:o,disableOutsidePointerEvents:a,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:d,onInteractOutside:c,...u}=e,h=tr(th,n),f=tt(n);return p.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:T()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:T()),M++,()=>{1===M&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),M--}},[]),(0,b.jsx)(I,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:o,children:(0,b.jsx)(O,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:c,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:d,onDismiss:()=>h.onOpenChange(!1),children:(0,b.jsx)(ea,{"data-state":tw(h.open),role:"dialog",id:h.contentId,...f,...u,ref:t,style:{...u.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),tb="PopoverClose",ty=p.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=tr(tb,n);return(0,b.jsx)(k.button,{type:"button",...r,ref:t,onClick:f(e.onClick,()=>i.onOpenChange(!1))})});ty.displayName=tb;var tx=p.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=tt(n);return(0,b.jsx)(ed,{...i,...r,ref:t})});function tw(e){return e?"open":"closed"}tx.displayName="PopoverArrow";var t_=ti,tC=tl,t$=tp,tk=tf},44777:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{J:function(){return y}});var i,o="clover",a="https://js.stripe.com",s="".concat(a,"/").concat(o,"/stripe.js"),l=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,d=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,c=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var n,r=e[t];if(n=r.src,l.test(n)||d.test(n))return r}return null},u=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(s).concat(t);var r=document.head||document.body;if(!r)throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},p=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"8.11.0",startTime:t})},h=null,f=null,m=null,g=function(e,t,n){if(null===e)return null;var i,a=t[0];if("string"!=typeof a)throw Error("Expected publishable key to be of type string, got type ".concat(r(a)," instead."));var s=a.match(/^pk_test/),l=3===(i=e.version)?"v3":i;s&&l!==o&&console.warn("Stripe.js@".concat(l," was loaded on the page, but @stripe/stripe-js@").concat("8.11.0"," expected Stripe.js@").concat(o,". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));var d=e.apply(void 0,t);return p(d,n),d},v=!1,b=function(){return i||(i=(null!==h?h:(h=new Promise(function(e,t){if("undefined"==typeof window||"undefined"==typeof document){e(null);return}if(window.Stripe,window.Stripe){e(window.Stripe);return}try{var n,r=c();r?r&&null!==m&&null!==f&&(r.removeEventListener("load",m),r.removeEventListener("error",f),null===(n=r.parentNode)||void 0===n||n.removeChild(r),r=u(null)):r=u(null),m=function(){window.Stripe?e(window.Stripe):t(Error("Stripe.js not available"))},f=function(e){t(Error("Failed to load Stripe.js",{cause:e}))},r.addEventListener("load",m),r.addEventListener("error",f)}catch(e){t(e);return}})).catch(function(e){return h=null,Promise.reject(e)})).catch(function(e){return i=null,Promise.reject(e)}))};Promise.resolve().then(function(){return b()}).catch(function(e){v||console.warn(e)});var y=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];v=!0;var r=Date.now();return b().then(function(e){return g(e,t,r)})}},55937:function(e,t,n){"use strict";n.d(t,{y:function(){return h}});var r=n(7661),i=n(23744),o=n(67326);function a(e,t,n){let{years:r=0,months:a=0,weeks:s=0,days:l=0,hours:d=0,minutes:c=0,seconds:u=0}=t,p=(0,o.Q)(e,null==n?void 0:n.in),h=a||r?function(e,t,n){let r=(0,o.Q)(e,void 0);if(isNaN(t))return(0,i.L)(e,NaN);if(!t)return r;let a=r.getDate(),s=(0,i.L)(e,r.getTime());return(s.setMonth(r.getMonth()+t+1,0),a>=s.getDate())?s:(r.setFullYear(s.getFullYear(),s.getMonth(),a),r)}(p,a+12*r):p,f=l||s?function(e,t,n){let r=(0,o.Q)(e,void 0);return isNaN(t)?(0,i.L)(e,NaN):(t&&r.setDate(r.getDate()+t),r)}(h,l+7*s):h;return(0,i.L)((null==n?void 0:n.in)||e,+f+1e3*(u+60*(c+60*d)))}var s=n(29268);function l(e,t){let n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function d(e){return t=>{let n=(e?Math[e]:Math.trunc)(t);return 0===n?0:n}}var c=n(76647);function u(e,t){return+(0,o.Q)(e)-+(0,o.Q)(t)}function p(e,t){let n=+(0,o.Q)(e)-+(0,o.Q)(t);return n<0?-1:n>0?1:n}function h(e,t){let{start:n,end:i}=function(e,t){let[n,i]=(0,r.d)(e,t.start,t.end);return{start:n,end:i}}(null==t?void 0:t.in,e),h={},f=function(e,t,n){let[i,o]=(0,r.d)(void 0,e,t),a=p(i,o),s=Math.abs(function(e,t,n){let[i,o]=(0,r.d)(void 0,e,t);return i.getFullYear()-o.getFullYear()}(i,o));i.setFullYear(1584),o.setFullYear(1584);let l=p(i,o)===-a,d=a*(s-+l);return 0===d?0:d}(i,n);f&&(h.years=f);let m=a(n,{years:h.years}),g=function(e,t,n){let[i,a,s]=(0,r.d)(void 0,e,e,t),l=p(a,s),d=Math.abs(function(e,t,n){let[i,o]=(0,r.d)(void 0,e,t);return 12*(i.getFullYear()-o.getFullYear())+(i.getMonth()-o.getMonth())}(a,s));if(d<1)return 0;1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-l*d);let c=p(a,s)===-l;(function(e,t){let n=(0,o.Q)(e,void 0);return+function(e,t){let n=(0,o.Q)(e,null==t?void 0:t.in);return n.setHours(23,59,59,999),n}(n,void 0)==+function(e,t){let n=(0,o.Q)(e,null==t?void 0:t.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}(n,void 0)})(i)&&1===d&&1===p(i,s)&&(c=!1);let u=l*(d-+c);return 0===u?0:u}(i,m);g&&(h.months=g);let v=a(m,{months:h.months}),b=function(e,t,n){let[i,o]=(0,r.d)(void 0,e,t),a=l(i,o),d=Math.abs((0,s.w)(i,o));i.setDate(i.getDate()-a*d);let c=Number(l(i,o)===-a),u=a*(d-c);return 0===u?0:u}(i,v);b&&(h.days=b);let y=a(v,{days:h.days}),x=function(e,t,n){let[i,o]=(0,r.d)(void 0,e,t),a=(+i-+o)/c.vh;return d(void 0)(a)}(i,y);x&&(h.hours=x);let w=a(y,{hours:h.hours}),_=function(e,t,n){let r=u(e,t)/c.yJ;return d(void 0)(r)}(i,w);_&&(h.minutes=_);let C=function(e,t,n){let r=u(e,t)/1e3;return d(void 0)(r)}(i,a(w,{minutes:h.minutes}));return C&&(h.seconds=C),h}},54425:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});var r=n(76647),i=n(23744),o=n(67326);function a(e,t){var n;let a,m;let g=()=>(0,i.L)(null==t?void 0:t.in,NaN),v=null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2,b=function(e){let t;let n={},r=e.split(s.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],s.timeZoneDelimiter.test(n.date)&&(n.date=e.split(s.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){let e=s.timezone.exec(t);e?(n.time=t.replace(e[1],""),n.timezone=e[1]):n.time=t}return n}(e);if(b.date){let e=function(e,t){let n=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};let i=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?i:100*o,restDateString:e.slice((r[1]||r[2]).length)}}(b.date,v);a=function(e,t){if(null===t)return new Date(NaN);let n=e.match(l);if(!n)return new Date(NaN);let r=!!n[4],i=u(n[1]),o=u(n[2])-1,a=u(n[3]),s=u(n[4]),d=u(n[5])-1;if(r)return s>=1&&s<=53&&d>=0&&d<=6?function(e,t,n){let r=new Date(0);r.setUTCFullYear(e,0,4);let i=r.getUTCDay()||7;return r.setUTCDate(r.getUTCDate()+((t-1)*7+n+1-i)),r}(t,s,d):new Date(NaN);{let e=new Date(0);return o>=0&&o<=11&&a>=1&&a<=(h[o]||(f(t)?29:28))&&i>=1&&i<=(f(t)?366:365)?(e.setUTCFullYear(t,o,Math.max(i,a)),e):new Date(NaN)}}(e.restDateString,e.year)}if(!a||isNaN(+a))return g();let y=+a,x=0;if(b.time&&isNaN(x=function(e){let t=e.match(d);if(!t)return NaN;let n=p(t[1]),i=p(t[2]),o=p(t[3]);return(24===n?0===i&&0===o:o>=0&&o<60&&i>=0&&i<60&&n>=0&&n<25)?n*r.vh+i*r.yJ+1e3*o:NaN}(b.time)))return g();if(b.timezone){if(isNaN(m=function(e){if("Z"===e)return 0;let t=e.match(c);if(!t)return 0;let n="+"===t[1]?-1:1,i=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return o>=0&&o<=59?n*(i*r.vh+o*r.yJ):NaN}(b.timezone)))return g()}else{let e=new Date(y+x),n=(0,o.Q)(0,null==t?void 0:t.in);return n.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),n.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),n}return(0,o.Q)(y+x+m,null==t?void 0:t.in)}let s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},l=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function u(e){return e?parseInt(e):1}function p(e){return e&&parseFloat(e.replace(",","."))||0}let h=[31,null,31,30,31,30,31,31,30,31,30,31];function f(e){return e%400==0||e%4==0&&e%100!=0}},77157:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(45113);function i(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function o(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let r=e[n],a=t[n];return"function"==typeof r?`${r}`==`${a}`:i(r)&&i(a)?o(r,a):r===a})}function a(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function s(e){return"number"==typeof e}function l(e){return"string"==typeof e}function d(e){return"boolean"==typeof e}function c(e){return"[object Object]"===Object.prototype.toString.call(e)}function u(e){return Math.abs(e)}function p(e){return Math.sign(e)}function h(e){return v(e).map(Number)}function f(e){return e[m(e)]}function m(e){return Math.max(0,e.length-1)}function g(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function v(e){return Object.keys(e)}function b(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function y(){let e=[],t={add:function(n,r,i,o={passive:!0}){let a;return"addEventListener"in n?(n.addEventListener(r,i,o),a=()=>n.removeEventListener(r,i,o)):(n.addListener(i),a=()=>n.removeListener(i)),e.push(a),t},clear:function(){e=e.filter(e=>e())}};return t}function x(e=0,t=0){let n=u(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function w(e){let t=e;function n(e){return s(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function _(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},r=t.style,i=null,o=!1;return{clear:function(){o||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){if(o)return;let a=Math.round(100*e.direction(t))/100;a!==i&&(r.transform=n(a),i=a)},toggleActive:function(e){o=!e}}}let C={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function $(e,t,n){let r,i,o,a,k;let S=e.ownerDocument,j=S.defaultView,E=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(v(n).forEach(r=>{let i=t[r],o=n[r],a=c(i)&&c(o);t[r]=a?e(i,o):o}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},i=v(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,i)},optionsMediaQueries:function(t){return t.map(e=>v(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(j),O=(k=[],{init:function(e,t){return(k=t.filter(({options:e})=>!1!==E.optionsAtMedia(e).active)).forEach(t=>t.init(e,E)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){k=k.filter(e=>e.destroy())}}),P=y(),N=function(){let e,t={},n={init:function(t){e=t},emit:function(r){return(t[r]||[]).forEach(t=>t(e,r)),n},off:function(e,r){return t[e]=(t[e]||[]).filter(e=>e!==r),n},on:function(e,r){return t[e]=(t[e]||[]).concat([r]),n},clear:function(){t={}}};return n}(),{mergeOptions:M,optionsAtMedia:T,optionsMediaQueries:L}=E,{on:D,off:A,emit:I}=N,B=!1,R=M(C,$.globalOptions),F=M(R),z=[];function Z(t,n){!B&&(F=T(R=M(R,t)),z=n||z,function(){let{container:t,slides:n}=F;o=(l(t)?e.querySelector(t):t)||e.children[0];let r=l(n)?o.querySelectorAll(n):n;a=[].slice.call(r||o.children)}(),r=function t(n){let r=function(e,t,n,r,i,o,a){let c,C;let{align:$,axis:k,direction:S,startIndex:j,loop:E,duration:O,dragFree:P,dragThreshold:N,inViewThreshold:M,slidesToScroll:T,skipSnaps:L,containScroll:D,watchResize:A,watchSlides:I,watchDrag:B,watchFocus:R}=o,F={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}},z=F.measure(t),Z=n.map(F.measure),H=function(e,t){let n="rtl"===t,r="y"===e,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(e){let{height:t,width:n}=e;return r?t:n},direction:function(e){return e*i}}}(k,S),W=H.measureSize(z),V={measure:function(e){return e/100*W}},U=function(e,t){let n={start:function(){return 0},center:function(e){return(t-e)/2},end:function(e){return t-e}};return{measure:function(r,i){return l(e)?n[e](r):e(t,r,i)}}}($,W),q=!E&&!!D,{slideSizes:Y,slideSizesWithGaps:G,startGap:X,endGap:K}=function(e,t,n,r,i,o){let{measureSize:a,startEdge:s,endEdge:l}=e,d=n[0]&&i,c=function(){if(!d)return 0;let e=n[0];return u(t[s]-e[s])}(),p=d?parseFloat(o.getComputedStyle(f(r)).getPropertyValue(`margin-${l}`)):0,h=n.map(a),g=n.map((e,t,n)=>{let r=t===m(n);return t?r?h[t]+p:n[t+1][s]-e[s]:h[t]+c}).map(u);return{slideSizes:h,slideSizesWithGaps:g,startGap:c,endGap:p}}(H,z,Z,n,E||!!D,i),J=function(e,t,n,r,i,o,a,l,d){let{startEdge:c,endEdge:p,direction:g}=e,v=s(n);return{groupSlides:function(e){return v?h(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?h(e).reduce((n,s,d)=>{let h=f(n)||0,v=s===m(e),b=i[c]-o[h][c],y=i[c]-o[s][p],x=r||0!==h?0:g(a),w=u(y-(!r&&v?g(l):0)-(b+x));return d&&w>t+2&&n.push(s),v&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}}}(H,W,T,E,z,Z,X,K,0),{snaps:Q,snapsAligned:ee}=function(e,t,n,r,i){let{startEdge:o,endEdge:a}=e,{groupSlides:s}=i,l=s(r).map(e=>f(e)[a]-e[0][o]).map(u).map(t.measure),d=r.map(e=>n[o]-e[o]).map(e=>-u(e)),c=s(d).map(e=>e[0]).map((e,t)=>e+l[t]);return{snaps:d,snapsAligned:c}}(H,U,z,Z,J),et=-f(Q)+f(G),{snapsContained:en,scrollContainLimit:er}=function(e,t,n,r,i){let o=x(-t+e,0),a=n.map((e,t)=>{let{min:r,max:i}=o,a=o.constrain(e),s=t===m(n);return t?s||1>=u(r-a)?r:1>=u(i-a)?i:a:i}).map(e=>parseFloat(e.toFixed(3))),s=function(){let e=a[0],t=f(a);return x(a.lastIndexOf(e),a.indexOf(t)+1)}();return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===r)return a;let{min:n,max:i}=s;return a.slice(n,i)}(),scrollContainLimit:s}}(W,et,ee,D,0),ei=q?en:ee,{limit:eo}=function(e,t,n){let r=t[0];return{limit:x(n?r-e:f(t),r)}}(et,ei,E),ea=function e(t,n,r){let{constrain:i}=x(0,t),o=t+1,a=s(n);function s(e){return r?u((o+e)%o):i(e)}function l(){return e(t,a,r)}let d={get:function(){return a},set:function(e){return a=s(e),d},add:function(e){return l().set(a+e)},clone:l};return d}(m(ei),j,E),es=ea.clone(),el=h(n),ed=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},ec=({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:o,slideLooper:a,dragHandler:s,animation:l,eventHandler:d,scrollBounds:c,options:{loop:u}},p)=>{let h=e.settled(),f=!c.shouldConstrain(),m=u?h:h&&f,g=m&&!s.pointerDown();g&&l.stop();let v=n.get()*p+i.get()*(1-p);r.set(v),u&&(o.loop(e.direction()),a.loop()),t.to(r.get()),g&&d.emit("settle"),m||d.emit("scroll")},eu=function(e,t,n,r){let i=y(),o=1e3/60,a=null,s=0,l=0;function d(e){if(!l)return;a||(a=e,n(),n());let i=e-a;for(a=e,s+=i;s>=o;)n(),s-=o;r(s/o),l&&(l=t.requestAnimationFrame(d))}function c(){t.cancelAnimationFrame(l),a=null,s=0,l=0}return{init:function(){i.add(e,"visibilitychange",()=>{e.hidden&&(a=null,s=0)})},destroy:function(){c(),i.clear()},start:function(){l||(l=t.requestAnimationFrame(d))},stop:c,update:n,render:r}}(r,i,()=>ed(ek),e=>ec(ek,e)),ep=ei[ea.get()],eh=w(ep),ef=w(ep),em=w(ep),eg=w(ep),ev=function(e,t,n,r,i,o){let a=0,s=0,l=i,d=.68,c=e.get(),h=0;function f(e){return l=e,g}function m(e){return d=e,g}let g={direction:function(){return s},duration:function(){return l},velocity:function(){return a},seek:function(){let t=r.get()-e.get(),i=0;return l?(n.set(e),a+=t/l,a*=d,c+=a,e.add(a),i=c-h):(a=0,n.set(r),e.set(r),i=t),s=p(i),h=c,g},settled:function(){return .001>u(r.get()-t.get())},useBaseFriction:function(){return m(.68)},useBaseDuration:function(){return f(i)},useFriction:m,useDuration:f};return g}(eh,em,ef,eg,O,0),eb=function(e,t,n,r,i){let{reachedAny:o,removeOffset:a,constrain:s}=r;function l(e){return e.concat().sort((e,t)=>u(e)-u(t))[0]}function d(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return l(i);let o=i.filter(e=>p(e)===r);return o.length?l(o):f(i)-n}return{byDistance:function(n,r){let l=i.get()+n,{index:c,distance:p}=function(n){let r=e?a(n):s(n),{index:i}=t.map((e,t)=>({diff:d(e-r,0),index:t})).sort((e,t)=>u(e.diff)-u(t.diff))[0];return{index:i,distance:r}}(l),h=!e&&o(l);if(!r||h)return{index:c,distance:n};let f=n+d(t[c]-p,0);return{index:c,distance:f}},byIndex:function(e,n){let r=d(t[e]-i.get(),n);return{index:e,distance:r}},shortcut:d}}(E,ei,et,eo,eg),ey=function(e,t,n,r,i,o,a){function s(i){let s=i.distance,l=i.index!==t.get();o.add(s),s&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),l&&(n.set(t.get()),t.set(i.index),a.emit("select"))}return{distance:function(e,t){s(i.byDistance(e,t))},index:function(e,n){let r=t.clone().set(e);s(i.byIndex(r.get(),n))}}}(eu,ea,es,ev,eb,eg,a),ex=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(eo),ew=y(),e_=function(e,t,n,r){let i;let o={},a=null,s=null,l=!1;return{init:function(){i=new IntersectionObserver(e=>{l||(e.forEach(e=>{o[t.indexOf(e.target)]=e}),a=null,s=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(e=>i.observe(e))},destroy:function(){i&&i.disconnect(),l=!0},get:function(e=!0){if(e&&a)return a;if(!e&&s)return s;let t=v(o).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(e&&i||!e&&!i)&&t.push(r),t},[]);return e&&(a=t),e||(s=t),t}}}(t,n,a,M),{slideRegistry:eC}=function(e,t,n,r,i,o){let{groupSlides:a}=i,{min:s,max:l}=r;return{slideRegistry:function(){let r=a(o);return 1===n.length?[o]:e&&"keepSnaps"!==t?r.slice(s,l).map((e,t,n)=>{let r=t===m(n);return t?r?g(m(o)-f(n)[0]+1,f(n)[0]):e:g(f(n[0])+1)}):r}()}}(q,D,ei,er,J,el),e$=function(e,t,n,r,i,o,a,l){let c={passive:!0,capture:!0},u=0;function p(e){"Tab"===e.code&&(u=new Date().getTime())}return{init:function(h){l&&(o.add(document,"keydown",p,!1),t.forEach((t,p)=>{o.add(t,"focus",t=>{(d(l)||l(h,t))&&function(t){if(new Date().getTime()-u>10)return;a.emit("slideFocusStart"),e.scrollLeft=0;let o=n.findIndex(e=>e.includes(t));s(o)&&(i.useDuration(0),r.index(o,0),a.emit("slideFocus"))}(p)},c)}))}}}(e,n,eC,ey,ev,ew,a,R),ek={ownerDocument:r,ownerWindow:i,eventHandler:a,containerRect:z,slideRects:Z,animation:eu,axis:H,dragHandler:function(e,t,n,r,i,o,a,s,l,c,h,f,m,g,v,w,_,C,$){let{cross:k,direction:S}=e,j=["INPUT","SELECT","TEXTAREA"],E={passive:!1},O=y(),P=y(),N=x(50,225).constrain(g.measure(20)),M={mouse:300,touch:400},T={mouse:500,touch:600},L=v?43:25,D=!1,A=0,I=0,B=!1,R=!1,F=!1,z=!1;function Z(e){if(!b(e,r)&&e.touches.length>=2)return H(e);let t=o.readPoint(e),n=o.readPoint(e,k),a=u(t-A),l=u(n-I);if(!R&&!z&&(!e.cancelable||!(R=a>l)))return H(e);let d=o.pointerMove(e);a>w&&(F=!0),c.useFriction(.3).useDuration(.75),s.start(),i.add(S(d)),e.preventDefault()}function H(e){let t=h.byDistance(0,!1).index!==f.get(),n=o.pointerUp(e)*(v?T:M)[z?"mouse":"touch"],r=function(e,t){let n=f.add(-1*p(e)),r=h.byDistance(e,!v).distance;return v||u(e)<N?r:_&&t?.5*r:h.byIndex(n.get(),0).distance}(S(n),t),i=function(e,t){var n,r;if(0===e||0===t||u(e)<=u(t))return 0;let i=(n=u(e),r=u(t),u(n-r));return u(i/e)}(n,r);R=!1,B=!1,P.clear(),c.useDuration(L-10*i).useFriction(.68+i/50),l.distance(r,!v),z=!1,m.emit("pointerUp")}function W(e){F&&(e.stopPropagation(),e.preventDefault(),F=!1)}return{init:function(e){$&&O.add(t,"dragstart",e=>e.preventDefault(),E).add(t,"touchmove",()=>void 0,E).add(t,"touchend",()=>void 0).add(t,"touchstart",s).add(t,"mousedown",s).add(t,"touchcancel",H).add(t,"contextmenu",H).add(t,"click",W,!0);function s(s){(d($)||$(e,s))&&function(e){let s=b(e,r);z=s,F=v&&s&&!e.buttons&&D,D=u(i.get()-a.get())>=2,s&&0!==e.button||function(e){let t=e.nodeName||"";return j.includes(t)}(e.target)||(B=!0,o.pointerDown(e),c.useFriction(0).useDuration(0),i.set(a),function(){let e=z?n:t;P.add(e,"touchmove",Z,E).add(e,"touchend",H).add(e,"mousemove",Z,E).add(e,"mouseup",H)}(),A=o.readPoint(e),I=o.readPoint(e,k),m.emit("pointerDown"))}(s)}},destroy:function(){O.clear(),P.clear()},pointerDown:function(){return B}}}(H,e,r,i,eg,function(e,t){let n,r;function i(e){return e.timeStamp}function o(n,r){let i=r||e.scroll,o=`client${"x"===i?"X":"Y"}`;return(b(n,t)?n:n.touches[0])[o]}return{pointerDown:function(e){return n=e,r=e,o(e)},pointerMove:function(e){let t=o(e)-o(r),a=i(e)-i(n)>170;return r=e,a&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=o(r)-o(n),a=i(e)-i(n),s=i(e)-i(r)>170,l=t/a;return a&&!s&&u(l)>.1?l:0},readPoint:o}}(H,i),eh,eu,ey,ev,eb,ea,a,V,P,N,L,0,B),eventStore:ew,percentOfView:V,index:ea,indexPrevious:es,limit:eo,location:eh,offsetLocation:em,previousLocation:ef,options:o,resizeHandler:function(e,t,n,r,i,o,a){let s,l;let c=[e].concat(r),p=[],h=!1;function f(e){return i.measureSize(a.measure(e))}return{init:function(i){o&&(l=f(e),p=r.map(f),s=new ResizeObserver(n=>{(d(o)||o(i,n))&&function(n){for(let o of n){if(h)return;let n=o.target===e,a=r.indexOf(o.target),s=n?l:p[a];if(u(f(n?e:r[a])-s)>=.5){i.reInit(),t.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{c.forEach(e=>s.observe(e))}))},destroy:function(){h=!0,s&&s.disconnect()}}}(t,a,i,n,H,A,F),scrollBody:ev,scrollBounds:function(e,t,n,r,i){let o=i.measure(10),a=i.measure(50),s=x(.1,.99),l=!1;function d(){return!!(!l&&e.reachedAny(n.get())&&e.reachedAny(t.get()))}return{shouldConstrain:d,constrain:function(i){if(!d())return;let l=e.reachedMin(t.get())?"min":"max",c=u(e[l]-t.get()),p=n.get()-t.get(),h=s.constrain(c/a);n.subtract(p*h),!i&&u(p)<o&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){l=!e}}}(eo,em,eg,ev,V),scrollLooper:function(e,t,n,r){let{reachedMin:i,reachedMax:o}=x(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?o(n.get()):-1===t&&i(n.get())))return;let a=-1*t*e;r.forEach(e=>e.add(a))}}}(et,eo,em,[eh,em,ef,eg]),scrollProgress:ex,scrollSnapList:ei.map(ex.get),scrollSnaps:ei,scrollTarget:eb,scrollTo:ey,slideLooper:function(e,t,n,r,i,o,a,s,l){let d=h(i),c=f(p(h(i).reverse(),a[0]),n,!1).concat(f(p(d,t-a[0]-1),-n,!0));function u(e,t){return e.reduce((e,t)=>e-i[t],t)}function p(e,t){return e.reduce((e,n)=>u(e,t)>0?e.concat([n]):e,[])}function f(i,a,d){let c=o.map((e,n)=>({start:e-r[n]+.5+a,end:e+t-.5+a}));return i.map(t=>{let r=d?0:-n,i=d?n:0,o=c[t][d?"end":"start"];return{index:t,loopPoint:o,slideLocation:w(-1),translate:_(e,l[t]),target:()=>s.get()>o?r:i}})}return{canLoop:function(){return c.every(({index:e})=>.1>=u(d.filter(t=>t!==e),t))},clear:function(){c.forEach(e=>e.translate.clear())},loop:function(){c.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:c}}(H,W,et,Y,G,Q,ei,em,n),slideFocus:e$,slidesHandler:(C=!1,{init:function(e){I&&(c=new MutationObserver(t=>{!C&&(d(I)||I(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),a.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){c&&c.disconnect(),C=!0}}),slidesInView:e_,slideIndexes:el,slideRegistry:eC,slidesToScroll:J,target:eg,translate:_(H,t)};return ek}(e,o,a,S,j,n,N);return n.loop&&!r.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):r}(F),L([R,...z.map(({options:e})=>e)]).forEach(e=>P.add(e,"change",H)),F.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(q),r.eventHandler.init(q),r.resizeHandler.init(q),r.slidesHandler.init(q),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&a.length&&r.dragHandler.init(q),i=O.init(q,z)))}function H(e,t){let n=U();W(),Z(M({startIndex:n},e),t),N.emit("reInit")}function W(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),O.destroy(),P.clear()}function V(e,t,n){F.active&&!B&&(r.scrollBody.useBaseFriction().useDuration(!0===t?0:F.duration),r.scrollTo.index(e,n||0))}function U(){return r.index.get()}let q={canScrollNext:function(){return r.index.add(1).get()!==U()},canScrollPrev:function(){return r.index.add(-1).get()!==U()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){B||(B=!0,P.clear(),W(),N.emit("destroy"),N.clear())},off:A,on:D,emit:I,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:H,rootNode:function(){return e},scrollNext:function(e){V(r.index.add(1).get(),e,-1)},scrollPrev:function(e){V(r.index.add(-1).get(),e,1)},scrollProgress:function(){return r.scrollProgress.get(r.offsetLocation.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:V,selectedScrollSnap:U,slideNodes:function(){return a},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return Z(t,n),setTimeout(()=>N.emit("init"),0),q}function k(e={},t=[]){let n=(0,r.useRef)(e),i=(0,r.useRef)(t),[s,l]=(0,r.useState)(),[d,c]=(0,r.useState)(),u=(0,r.useCallback)(()=>{s&&s.reInit(n.current,i.current)},[s]);return(0,r.useEffect)(()=>{o(n.current,e)||(n.current=e,u())},[e,u]),(0,r.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=a(e),r=a(t);return n.every((e,t)=>o(e,r[t]))}(i.current,t)&&(i.current=t,u())},[t,u]),(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&d){$.globalOptions=k.globalOptions;let e=$(d,n.current,i.current);return l(e),()=>e.destroy()}l(void 0)},[d,l]),[c,s]}$.globalOptions=void 0,k.globalOptions=void 0},81885:function(e,t,n){"use strict";n.d(t,{M:function(){return v}});var r=n(67251),i=n(45113),o=n(86255),a=n(86295),s=n(55491),l=n(52292);class d extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:t,isPresent:n}=e,o=(0,i.useId)(),a=(0,i.useRef)(null),s=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,i.useContext)(l._);return(0,i.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:i}=s.current;if(n||!a.current||!e||!t)return;a.current.dataset.motionPopId=o;let l=document.createElement("style");return c&&(l.nonce=c),document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(i,"px !important;\n          }\n        ")),()=>{document.head.removeChild(l)}},[n]),(0,r.jsx)(d,{isPresent:n,childRef:a,sizeRef:s,children:i.cloneElement(t,{ref:a})})}let u=e=>{let{children:t,initial:n,isPresent:o,onExitComplete:l,custom:d,presenceAffectsLayout:u,mode:h}=e,f=(0,a.h)(p),m=(0,i.useId)(),g=(0,i.useCallback)(e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;l&&l()},[f,l]),v=(0,i.useMemo)(()=>({id:m,initial:n,isPresent:o,custom:d,onExitComplete:g,register:e=>(f.set(e,!1),()=>f.delete(e))}),u?[Math.random(),g]:[o,g]);return(0,i.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[o]),i.useEffect(()=>{o||f.size||!l||l()},[o]),"popLayout"===h&&(t=(0,r.jsx)(c,{isPresent:o,children:t})),(0,r.jsx)(s.O.Provider,{value:v,children:t})};function p(){return new Map}var h=n(30477);let f=e=>e.key||"";function m(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}var g=n(70521);let v=e=>{let{children:t,custom:n,initial:s=!0,onExitComplete:l,presenceAffectsLayout:d=!0,mode:c="sync",propagate:p=!1}=e,[v,b]=(0,h.oO)(p),y=(0,i.useMemo)(()=>m(t),[t]),x=p&&!v?[]:y.map(f),w=(0,i.useRef)(!0),_=(0,i.useRef)(y),C=(0,a.h)(()=>new Map),[$,k]=(0,i.useState)(y),[S,j]=(0,i.useState)(y);(0,g.L)(()=>{w.current=!1,_.current=y;for(let e=0;e<S.length;e++){let t=f(S[e]);x.includes(t)?C.delete(t):!0!==C.get(t)&&C.set(t,!1)}},[S,x.length,x.join("-")]);let E=[];if(y!==$){let e=[...y];for(let t=0;t<S.length;t++){let n=S[t],r=f(n);x.includes(r)||(e.splice(t,0,n),E.push(n))}"wait"===c&&E.length&&(e=E),j(m(e)),k(y);return}let{forceRender:O}=(0,i.useContext)(o.p);return(0,r.jsx)(r.Fragment,{children:S.map(e=>{let t=f(e),i=(!p||!!v)&&(y===S||x.includes(t));return(0,r.jsx)(u,{isPresent:i,initial:(!w.current||!!s)&&void 0,custom:i?void 0:n,presenceAffectsLayout:d,mode:c,onExitComplete:i?void 0:()=>{if(!C.has(t))return;C.set(t,!0);let e=!0;C.forEach(t=>{t||(e=!1)}),e&&(null==O||O(),j(_.current),p&&(null==b||b()),l&&l())},children:e},t)})})}},69306:function(e,t,n){"use strict";n.d(t,{Y:function(){return a}});var r=n(45113),i=n(74516);let o={some:0,all:1};function a(e,{root:t,margin:n,amount:a,once:s=!1}={}){let[l,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||s&&l)return;let r={root:t&&t.current||void 0,margin:n,amount:a};return function(e,t,{root:n,margin:r,amount:a="some"}={}){let s=(0,i.IG)(e),l=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{let n=l.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?l.set(e.target,n):d.unobserve(e.target)}else"function"==typeof n&&(n(e),l.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof a?a:o[a]});return s.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(d(!0),s?void 0:()=>d(!1)),r)},[t,e,n,s,a]),l}},65390:function(e,t,n){"use strict";let r,i;n.d(t,{v:function(){return Z}});var o=n(13592),a=n(86295),s=n(45113),l=n(14574),d=n(74516),c=n(12689),u=n(30682);function p(e,t){let n;let r=()=>{let{currentTime:r}=t,i=(null===r?0:r.value)/100;n!==i&&e(i),n=i};return u.Wi.update(r,!0),()=>(0,u.Pn)(r)}let h=new WeakMap;function f({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=h.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function m(e){e.forEach(f)}let g=new Set;var v=n(73939),b=n(14112);let y=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),x=()=>({time:0,x:y(),y:y()}),w={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function _(e,t,n,r){let i=n[t],{length:o,position:a}=w[t],s=i.current,l=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,v.Y)(0,i.scrollLength,i.current);let d=r-l;i.velocity=d>50?0:(0,b.R)(i.current-s,d)}var C=n(74442),$=n(16146),k=n(44766);let S={start:0,center:.5,end:1};function j(e,t,n=0){let r=0;if(e in S&&(e=S[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let E=[0,0],O=[[0,0],[1,1]],P={x:0,y:0},N=new WeakMap,M=new WeakMap,T=new WeakMap,L=e=>e===document.documentElement?window:e;function D(e,{container:t=document.documentElement,...n}={}){let o=T.get(t);o||(o=new Set,T.set(t,o));let a=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{_(e,"x",n,t),_(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=O}=n,{target:i=e,axis:o="y"}=n,a="y"===o?"height":"width",s=i!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}else break;return n}(i,e):P,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},d={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate,u=r.length;for(let e=0;e<u;e++){let n=function(e,t,n,r){let i=Array.isArray(e)?e:E,o=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,S[e]?e:"0"]),j(i[0],n,r)-j(i[1],t)}(r[e],d[a],l[a],s[o]);c||n===t[o].interpolatorOffsets[e]||(c=!0),t[o].offset[e]=n}c&&(t[o].interpolate=(0,$.s)(t[o].offset,(0,k.Y)(r),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=(0,C.u)(0,1,t[o].interpolate(t[o].current))}(e,n,r)},notify:()=>t(n)}}(t,e,x(),n);if(o.add(a),!N.has(t)){let e=()=>{for(let e of o)e.measure()},n=()=>{for(let e of o)e.update(u.frameData.timestamp)},a=()=>{for(let e of o)e.notify()},s=()=>{u.Wi.read(e,!1,!0),u.Wi.read(n,!1,!0),u.Wi.update(a,!1,!0)};N.set(t,s);let l=L(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&M.set(t,"function"==typeof t?(g.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};g.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{g.delete(t),!g.size&&i&&(i=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(m));let n=(0,d.IG)(e);return n.forEach(e=>{let n=h.get(e);n||(n=new Set,h.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=h.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),l.addEventListener("scroll",s,{passive:!0})}let s=N.get(t);return u.Wi.read(s,!1,!0),()=>{var e;(0,u.Pn)(s);let n=T.get(t);if(!n||(n.delete(a),n.size))return;let r=N.get(t);N.delete(t),r&&(L(t).removeEventListener("scroll",r),null===(e=M.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}let A=new Map;function I({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),A.has(t)||A.set(t,{});let r=A.get(t);return r[n]||(r[n]=(0,d.tn)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);let r={value:0},i=D(e=>{r.value=100*e[n].progress},{container:t,axis:n});return{currentTime:r,cancel:i}}({source:t,axis:n})),r[n]}function B(e){return e&&(e.target||e.offset)}var R=n(70521);function F(e,t){(0,l.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let z=()=>({scrollX:(0,o.BX)(0),scrollY:(0,o.BX)(0),scrollXProgress:(0,o.BX)(0),scrollYProgress:(0,o.BX)(0)});function Z({container:e,target:t,layoutEffect:n=!0,...r}={}){let i=(0,a.h)(z);return(n?R.L:s.useEffect)(()=>(F("target",t),F("container",e),function(e,{axis:t="y",...n}={}){let r={axis:t,...n};return"function"==typeof e?2===e.length||B(r)?D(t=>{e(t[r.axis].progress,t)},r):p(e,I(r)):function(e,t){if(e.flatten(),B(t))return e.pause(),D(n=>{e.time=e.duration*n[t.axis].progress},t);{let n=I(t);return e.attachTimeline?e.attachTimeline(n,e=>(e.pause(),p(t=>{e.time=e.duration*t},n))):c.Z}}(e,r)}((e,{x:t,y:n})=>{i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(n.current),i.scrollYProgress.set(n.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}},42489:function(e,t,n){"use strict";let r,i,o,a;n.d(t,{X3:function(){return f}});let s=(e,t)=>t.some(t=>e instanceof t),l=new WeakMap,d=new WeakMap,c=new WeakMap,u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(p(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return c.set(t,e),t}(e);if(d.has(e))return d.get(e);let n="function"==typeof(t=e)?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(h(this),e),p(this.request)}:function(...e){return p(t.apply(h(this),e))}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});l.set(e,t)}(t),s(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,u):t;return n!==e&&(d.set(e,n),c.set(n,e)),n}let h=e=>c.get(e);function f(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){let a=indexedDB.open(e,t),s=p(a);return r&&a.addEventListener("upgradeneeded",e=>{r(p(a.result),e.oldVersion,e.newVersion,p(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}let m=["get","getKey","getAll","getAllKeys","count"],g=["put","add","delete","clear"],v=new Map;function b(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(v.get(t))return v.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=g.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m.includes(n)))return;let o=async function(e,...t){let o=this.transaction(e,i?"readwrite":"readonly"),a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return v.set(t,o),o}u={...o=u,get:(e,t,n)=>b(e,t)||o.get(e,t,n),has:(e,t)=>!!b(e,t)||o.has(e,t)};let y=["continue","continuePrimaryKey","advance"],x={},w=new WeakMap,_=new WeakMap,C={get(e,t){if(!y.includes(t))return e[t];let n=x[t];return n||(n=x[t]=function(...e){w.set(this,_.get(this)[t](...e))}),n}};async function*$(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;let n=new Proxy(t,C);for(_.set(n,t),c.set(n,h(t));t;)yield n,t=await (w.get(n)||t.continue()),w.delete(n)}function k(e,t){return t===Symbol.asyncIterator&&s(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&s(e,[IDBIndex,IDBObjectStore])}u={...a=u,get:(e,t,n)=>k(e,t)?$:a.get(e,t,n),has:(e,t)=>k(e,t)||a.has(e,t)}},3447:function(e,t,n){"use strict";n.d(t,{S:function(){return eS}});var r={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268"],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264"],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684"],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]","(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[["(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",[9]],["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246"],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|2[23]"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],BF:["226","00","[025-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[02-4679]"]]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],BJ:["229","00","(?:01\\d|[24-689])\\d{7}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["0"]]]],BL:["590","00","(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441"],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],BO:["591","00(?:1\\d)?","8001\\d{5}|(?:[2-467]\\d|50)\\d{6}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[235]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37|86)","300|4(?:0(?:0|20)|370|864)"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242"],BT:["975","00","[17]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-9]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],CA:["1","011","[2-9]\\d{9}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}",[10]],["",[10]],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",[10]],["900[2-9]\\d{6}",[10]],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}",[10]],0,["310\\d{4}",[7]],0,["600[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CD:["243","00","(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["5"],"0$1"]],"0"],CF:["236","00","(?:[27]\\d{3}|8776)\\d{4}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]","(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,0,"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["46"]],["(\\d{3})(\\d{7})","$1 $2",["6|90"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|9[14]"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0([3579]|4(?:[14]4|56))?"],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],CU:["53","119","(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["[56]"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9,10,11,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[03568]","15(?:[0568]|31)"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767"],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{8})","$1 $2",["1"],"0$1"]],"0"],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,"528[89]"],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],ES:["34","00","[5-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]]],ET:["251","00","(?:11|[2-579]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-579]"],"0$1"]],"0"],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d{5})","$1",["20[2-59]"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[68])0|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[14]|2[09]|50|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"],["(\\d)(\\d{4,9})","$1 $2",["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],FK:["500","00","[2-7]\\d{4}",[5]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473"],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],GF:["594","00","(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0"],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],GH:["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0"],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]]],GM:["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],GP:["590","00","(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-79]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]]],GT:["502","00","80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-8]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","671$1",0,"671"],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],GY:["592","001","(?:[2-8]\\d{3}|9008)\\d{3}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],HR:["385","00","[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",[7,8,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6|7[245]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-57]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],HT:["509","00","(?:[2-489]\\d|55)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],ID:["62","00[89]","00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13,14,15,16,17],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],IL:["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0","1624$1",0,"74576|(?:16|7[56])24"],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],IT:["39","00","0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11,12],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]|43"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",[6,7,8,9,10,11]],["3[2-9]\\d{7,8}|(?:31|43)\\d{8}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],["3[2-8]\\d{9,10}",[11,12]],0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],["56\\d{8}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],JP:["81","010","00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"]],"0",0,"(000[259]\\d{6})$|(?:(?:003768)0?)|0","$1"],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],KG:["996","00","8\\d{9}|[235-9]\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869"],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[36]0|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345"],KZ:["7","810","(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"33|7",0,"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["3"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758"],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0"],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],LR:["231","00","(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["4[67]|[56]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-578]"],"0$1"]],"0"],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(0-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"0 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(0-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(0-$1)",1]],"0",0,"[08]"],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],LV:["371","00","(?:[268]\\d|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],["(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],["(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],"0",0,0,0,0,0,[["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-467]|5[0-3]|8[0-7]))\\d{6}"],["80[0-7]\\d{6}"],["89\\d{7}"],0,0,0,0,["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]],MC:["377","00","(?:[3489]|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],"0"],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],MF:["590","00","(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1"],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|452|678|86","[12]|452|6788|86"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670"],MQ:["596","00","(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-79]|8(?:0[6-9]|[36])"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664"],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,0,"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],"0"],MX:["52","0[09]","[2-9]\\d{9}",[10],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"]]],0,0,0,0,0,0,0,"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[0467]"]]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],NG:["234","009","(?:20|9\\d)\\d{8}|[78]\\d{9,13}",[10,11,12,13,14],[["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["20[129]"],"0$1"],["(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0"],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],NR:["674","00","(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[24-9]"]]]],NU:["683","00","(?:[4-7]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],NZ:["64","0(?:0|161)","[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-79]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|8|90","50(?:[0367]|88)|8|90"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[589]"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7"],"0$1"]],"0",0,0,0,0,0,0,"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],PM:["508","00","[45]\\d{5}|(?:708|8\\d\\d)\\d{6}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],PY:["595","00","59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[136]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],RE:["262","00","709\\d{6}|(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-9]"],"0$1"]],"0",0,0,0,0,0,[["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],["80\\d{7}"],["89[1-37-9]\\d{6}"],0,0,0,0,["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],RO:["40","00","(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"3[04-689]|[489]",0,"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"]],"0"],SA:["966","00","(?:[15]\\d|800|92)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],SB:["677","0[01]","[6-9]\\d{6}|[1-6]\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],SC:["248","010|0[0-2]","(?:[2489]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10,12],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-9]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|79)\\d{6}",[5,8],0,0,0,0,0,0,"79"],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0"],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d)(\\d{7})","$1 $2",["(?:2|90)4|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[348]|64|79|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6[0-35-9]|7[67]|9[2-9]"]]],"0"],SR:["597","00","(?:[2-5]|68|[78]\\d|90)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-9]"]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],SV:["503","00","[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721"],SY:["963","00","[1-39]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",1]],"0"],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649"],TD:["235","00|16","(?:22|[689]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-9]"]]],0,0,0,0,0,0,0,"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],TJ:["992","810","[0-57-9]\\d{8}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["44[02-479]|[34]7"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3(?:[1245]|3[12])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[0-57-9]"]]],0,0,0,0,0,0,0,"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],TM:["993","810","(?:[1-6]\\d|71)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["[67]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|61[06])","5(?:[0-59]|61[06]1)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868"],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[0-68]))\\d{4}|(?:2742|305[3-9]|472[247-9]|505[2-57-9]|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"],0,0,0,["305209\\d{4}"]]],UY:["598","0(?:0|1[3-9]\\d)","0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",[6,7,8,9,10,11,12,13],[["(\\d{3})(\\d{3,4})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[49]0|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,0,"00"," int. "],UZ:["998","00","(?:20|33|[5-9]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-9]"]]]],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11,12],0,0,0,0,0,0,"06698"],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784"],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284"],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340"],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["6"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[357-9]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]]],WF:["681","00","(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[47-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],XK:["383","00","2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",[8,9,10,11,12],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2|39"],"0$1"],["(\\d{2})(\\d{7,10})","$1 $2",["3"],"0$1"]],"0"],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],YT:["262","00","7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",[9],0,"0",0,0,0,0,0,[["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"],["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],["80\\d{7}"],0,0,0,0,0,["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],ZM:["260","00","800\\d{6}|(?:21|[579]\\d|63)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[579]"],"0$1"]],"0"],ZW:["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0"]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[235-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"],0,0,0,0,0,0,["2\\d{8}",[9]]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"6\\d{9}|[0-36-9]\\d{8}",[9,10],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-37-9]"]],["(\\d)(\\d{3})(\\d{5,6})","$1 $2 $3",["6"]]],0,0,0,0,0,0,[0,["6\\d{9}|[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|51"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",[7,8,9,10,12]],0,0,0,["348[57]\\d{7}",[11]],0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}},i={}.constructor;function o(e){return null!=e&&e.constructor===i}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var l="0-9０-９٠-٩۰-۹",d="".concat("-‐-―−ー－").concat("／/").concat("．.").concat(" \xa0\xad​⁠　").concat("()（）［］\\[\\]").concat("~⁓∼～"),c="+＋";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return f(e,arguments,v(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,e)})(e)}function f(e,t,n){return(f=m()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&g(i,n.prototype),i}).apply(null,arguments)}function m(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(r,e);var t,n=(t=m(),function(){var e,n=v(r);return e=t?Reflect.construct(n,arguments,v(this).constructor):n.apply(this,arguments),function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function r(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),Object.setPrototypeOf(p(t=n.call(this,e)),r.prototype),t.name=t.constructor.name,t}return Object.defineProperty(r,"prototype",{writable:!1}),r}(h(Error));function y(e,t){e=e.split("-"),t=t.split("-");for(var n=e[0].split("."),r=t[0].split("."),i=0;i<3;i++){var o=Number(n[i]),a=Number(r[i]);if(o>a)return 1;if(a>o)return -1;if(!isNaN(o)&&isNaN(a))return 1;if(isNaN(o)&&!isNaN(a))return -1}return e[1]&&t[1]?e[1]>t[1]?1:e[1]<t[1]?-1:0:!e[1]&&t[1]?1:e[1]&&!t[1]?-1:0}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var $=" ext. ",k=/^\d+$/,S=function(){function e(t){w(this,e),M(t),this.metadata=t,D.call(this,t)}return C(e,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter(function(e){return"001"!==e})}},{key:"getCountryMetadata",value:function(e){return this.metadata.countries[e]}},{key:"nonGeographic",value:function(){if(!this.v1&&!this.v2&&!this.v3)return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(e){return void 0!==this.getCountryMetadata(e)}},{key:"hasCallingCode",value:function(e){if(this.getCountryCodesForCallingCode(e))return!0;if(this.nonGeographic()){if(this.nonGeographic()[e])return!0}else{var t=this.countryCallingCodes()[e];if(t&&1===t.length&&"001"===t[0])return!0}}},{key:"isNonGeographicCallingCode",value:function(e){return this.nonGeographic()?!!this.nonGeographic()[e]:!this.getCountryCodesForCallingCode(e)}},{key:"country",value:function(e){return this.selectNumberingPlan(e)}},{key:"selectNumberingPlan",value:function(e,t){if(e&&k.test(e)&&(t=e,e=null),e&&"001"!==e){if(!this.hasCountry(e))throw Error("Unknown country: ".concat(e));this.numberingPlan=new j(this.getCountryMetadata(e),this)}else if(t){if(!this.hasCallingCode(t))throw Error("Unknown calling code: ".concat(t));this.numberingPlan=new j(this.getNumberingPlanMetadata(t),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(e){var t=this.countryCallingCodes()[e];if(t){if(1===t.length&&3===t[0].length)return;return t}}},{key:"getCountryCodeForCallingCode",value:function(e){var t=this.getCountryCodesForCallingCode(e);if(t)return t[0]}},{key:"getNumberingPlanMetadata",value:function(e){var t=this.getCountryCodeForCallingCode(e);if(t)return this.getCountryMetadata(t);if(this.nonGeographic()){var n=this.nonGeographic()[e];if(n)return n}else{var r=this.countryCallingCodes()[e];if(r&&1===r.length&&"001"===r[0])return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(e){return this.numberingPlan.type(e)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(e){return this.selectNumberingPlan(e)}},{key:"hasSelectedNumberingPlan",value:function(){return void 0!==this.numberingPlan}}]),e}(),j=function(){function e(t,n){w(this,e),this.globalMetadataObject=n,this.metadata=t,D.call(this,n.metadata)}return C(e,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"IDDPrefix",value:function(){if(!this.v1&&!this.v2)return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!this.v1&&!this.v2)return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(e){return e[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var e=this;return(this._getFormats(this.metadata)||this._getFormats(this.getDefaultCountryMetadataForRegion())||[]).map(function(t){return new E(t,e)})}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(e){return e[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return(!this.types()||0!==this.types().length)&&!!this.types()}},{key:"type",value:function(e){if(this.hasTypes()&&N(this.types(),e))return new P(N(this.types(),e),this)}},{key:"ext",value:function(){return this.v1||this.v2?$:this.metadata[13]||$}}]),e}(),E=function(){function e(t,n){w(this,e),this._format=t,this.metadata=n}return C(e,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!!this.nationalPrefixFormattingRule()&&!O.test(this.nationalPrefixFormattingRule())}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}]),e}(),O=/^\(?\$1\)?$/,P=function(){function e(t,n){w(this,e),this.type=t,this.metadata=n}return C(e,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}]),e}();function N(e,t){switch(t){case"FIXED_LINE":return e[0];case"MOBILE":return e[1];case"TOLL_FREE":return e[2];case"PREMIUM_RATE":return e[3];case"PERSONAL_NUMBER":return e[4];case"VOICEMAIL":return e[5];case"UAN":return e[6];case"PAGER":return e[7];case"VOIP":return e[8];case"SHARED_COST":return e[9]}}function M(e){if(!e)throw Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!o(e)||!o(e.countries))throw Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(o(e)?"an object of shape: { "+Object.keys(e).join(", ")+" }":"a "+T(e)+": "+e,"."))}var T=function(e){return x(e)};function L(e,t){if((t=new S(t)).hasCountry(e))return t.country(e).countryCallingCode();throw Error("Unknown country: ".concat(e))}function D(e){var t=e.version;"number"==typeof t?(this.v1=1===t,this.v2=2===t,this.v3=3===t,this.v4=4===t):t?-1===y(t,"1.2.0")?this.v2=!0:-1===y(t,"1.7.35")?this.v3=!0:this.v4=!0:this.v1=!0}var A=function(e){return"([".concat(l,"]{1,").concat(e,"})")};function I(e){var t="[ \xa0\\t,]*",n="[:\\.．]?[ \xa0\\t,-]*",r="[ \xa0\\t]*";return";ext="+A("20")+"|"+(t+"(?:e?xt(?:ensi(?:ó?|\xf3))?n?|ｅ?ｘｔｎ?|доб|anexo)"+n)+A("20")+"#?|"+(t+"(?:[xｘ#＃~～]|int|ｉｎｔ)"+n)+A("9")+"#?|[- ]+"+A("6")+"#|"+(r+"(?:,{2}|;)"+n)+A("15")+"#?|"+(r+"(?:,)+"+n)+A("9")+"#?"}var B=RegExp("^["+c+"]{0,1}(?:["+d+"]*["+l+"]){1,2}$","i"),R="["+c+"]{0,1}(?:["+d+"]*["+l+"]){3,}["+d+l+"]*(?:"+I()+")?",F=RegExp("^["+l+"]{2}$|^"+R+"$","i"),z=RegExp("(?:"+I()+")$","i"),Z={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function W(e){for(var t,n="",r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return H(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,void 0)}}(e))){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e.split(""));!(t=r()).done;){var i=t.value;n+=function(e,t,n){if("+"===e){if(t)return;return"+"}return Z[e]}(i,n)||""}return n}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function U(e,t){return function e(t,n,r){var i=r.type(n),o=i&&i.possibleLengths()||r.possibleLengths();if(!o)return"IS_POSSIBLE";if("FIXED_LINE_OR_MOBILE"===n){if(!r.type("FIXED_LINE"))return e(t,"MOBILE",r);var a=r.type("MOBILE");a&&(o=function(e,t){for(var n,r=e.slice(),i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return V(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,void 0)}}(e))){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(t);!(n=i()).done;){var o=n.value;0>e.indexOf(o)&&r.push(o)}return r.sort(function(e,t){return e-t})}(o,a.possibleLengths()))}else if(n&&!i)return"INVALID_LENGTH";var s=t.length,l=o[0];return l===s?"IS_POSSIBLE":l>s?"TOO_SHORT":o[o.length-1]<s?"TOO_LONG":o.indexOf(s,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"}(e,void 0,t)}function q(e,t){return"IS_POSSIBLE"===U(e,t)}function Y(e,t){return e=e||"",RegExp("^(?:"+t+")$").test(e)}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var X=["MOBILE","PREMIUM_RATE","TOLL_FREE","SHARED_COST","VOIP","PERSONAL_NUMBER","PAGER","UAN","VOICEMAIL"];function K(e,t,n){if(t=t||{},e.country||e.countryCallingCode){(n=new S(n)).selectNumberingPlan(e.country,e.countryCallingCode);var r=t.v2?e.nationalNumber:e.phone;if(Y(r,n.nationalNumberPattern())){if(J(r,"FIXED_LINE",n))return n.type("MOBILE")&&""===n.type("MOBILE").pattern()||!n.type("MOBILE")||J(r,"MOBILE",n)?"FIXED_LINE_OR_MOBILE":"FIXED_LINE";for(var i,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return G(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,void 0)}}(e))){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(X);!(i=o()).done;){var a=i.value;if(J(r,a,n))return a}}}}function J(e,t,n){return!(!(t=n.type(t))||!t.pattern()||t.possibleLengths()&&0>t.possibleLengths().indexOf(e.length))&&Y(e,t.pattern())}var Q=RegExp("(["+l+"])");function ee(e,t){var n=function(e,t){if(e&&t.numberingPlan.nationalPrefixForParsing()){var n=RegExp("^(?:"+t.numberingPlan.nationalPrefixForParsing()+")"),r=n.exec(e);if(r){var i,o,a,s=r.length-1,l=s>0&&r[s];if(t.nationalPrefixTransformRule()&&l)i=e.replace(n,t.nationalPrefixTransformRule()),s>1&&(o=r[1]);else{var d=r[0];i=e.slice(d.length),l&&(o=r[1])}if(l){var c=e.indexOf(r[1]);e.slice(0,c)===t.numberingPlan.nationalPrefix()&&(a=t.numberingPlan.nationalPrefix())}else a=r[0];return{nationalNumber:i,nationalPrefix:a,carrierCode:o}}}return{nationalNumber:e}}(e,t),r=n.carrierCode,i=n.nationalNumber;return i!==e&&(!(!Y(e,t.nationalNumberPattern())||Y(i,t.nationalNumberPattern()))||t.possibleLengths()&&!function(e,t){switch(U(e,t)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}}(i,t))?{nationalNumber:e}:{nationalNumber:i,carrierCode:r}}function et(e,t,n,r){if(!e)return{};if("+"!==e[0]){var i,o=function(e,t,n,r){if(t){var i=new S(r);i.selectNumberingPlan(t,n);var o=new RegExp(i.IDDPrefix());if(0===e.search(o)){var a=(e=e.slice(e.match(o)[0].length)).match(Q);if(!a||null==a[1]||!(a[1].length>0)||"0"!==a[1])return e}}}(e,t,n,r);if(o&&o!==e)i=!0,e="+"+o;else{if(t||n){var a=function(e,t,n,r){var i=t?L(t,r):n;if(0===e.indexOf(i)){(r=new S(r)).selectNumberingPlan(t,n);var o=e.slice(i.length),a=ee(o,r).nationalNumber,s=ee(e,r).nationalNumber;if(!Y(s,r.nationalNumberPattern())&&Y(a,r.nationalNumberPattern())||"TOO_LONG"===U(s,r))return{countryCallingCode:i,number:o}}return{number:e}}(e,t,n,r),s=a.countryCallingCode,l=a.number;if(s)return{countryCallingCodeSource:"FROM_NUMBER_WITHOUT_PLUS_SIGN",countryCallingCode:s,number:l}}return{number:e}}}if("0"===e[1])return{};r=new S(r);for(var d=2;d-1<=3&&d<=e.length;){var c=e.slice(1,d);if(r.hasCallingCode(c))return r.selectNumberingPlan(c),{countryCallingCodeSource:i?"FROM_NUMBER_WITH_IDD":"FROM_NUMBER_WITH_PLUS_SIGN",countryCallingCode:c,number:e.slice(d)};d++}return{}}var en=/(\$\d)/,er=/^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;function ei(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ea(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eo(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var es={formatExtension:function(e,t,n){return"".concat(e).concat(n.ext()).concat(t)}};function el(e,t,n,r,i){var o,a,s,l,c=function(e,t){for(var n,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return ei(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ei(e,void 0)}}(e))){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e);!(n=r()).done;){var i=n.value;if(i.leadingDigitsPatterns().length>0){var o=i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length-1];if(0!==t.search(o))continue}if(Y(t,i.pattern()))return i}}(r.formats(),e);return c?(a=(o={useInternationalFormat:"INTERNATIONAL"===n,withNationalPrefix:!c.nationalPrefixIsOptionalWhenFormattingInNationalFormat()||!i||!1!==i.nationalPrefix,carrierCode:t,metadata:r}).useInternationalFormat,s=o.withNationalPrefix,o.carrierCode,o.metadata,l=e.replace(new RegExp(c.pattern()),a?c.internationalFormat():s&&c.nationalPrefixFormattingRule()?c.format().replace(en,c.nationalPrefixFormattingRule()):c.format()),a?l.replace(RegExp("[".concat(d,"]+"),"g")," ").trim():l):e}function ed(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ec(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ed(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ed(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var eu=function(){var e;function t(e,n,r){if(!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),!e)throw TypeError("First argument is required");if("string"!=typeof e)throw TypeError("First argument must be a string");if("string"==typeof e){if("+"===e[0]&&!n)throw TypeError("`metadata` argument not passed");if(o(n)&&o(n.countries)){r=n;var i,a,s,l,d=e;if(!ep.test(d))throw Error('Invalid `number` argument passed: must consist of a "+" followed by digits');var c=et(d,void 0,void 0,r),u=c.countryCallingCode;if(n=c.number,e=u,!n)throw Error("Invalid `number` argument passed: too short")}}if(!n)throw TypeError("`nationalNumber` argument is required");if("string"!=typeof n)throw TypeError("`nationalNumber` argument must be a string");M(r);var p=(i=e,l=new S(r),/^[A-Z]{2}$/.test(i)?(a=i,l.selectNumberingPlan(a),s=l.countryCallingCode()):s=i,{country:a,countryCallingCode:s}),h=p.country,f=p.countryCallingCode;this.country=h,this.countryCallingCode=f,this.nationalNumber=n,this.number="+"+this.countryCallingCode+this.nationalNumber,this.getMetadata=function(){return r}}return e=[{key:"setExt",value:function(e){this.ext=e}},{key:"getPossibleCountries",value:function(){var e,t,n,r;return this.country?[this.country]:(e=this.countryCallingCode,t=this.nationalNumber,(r=new S(n=this.getMetadata()).getCountryCodesForCallingCode(e))?r.filter(function(e){var r;return(r=new S(n)).selectNumberingPlan(e),r.numberingPlan.possibleLengths().indexOf(t.length)>=0}):[])}},{key:"isPossible",value:function(){return function(e,t,n){if(void 0===t&&(t={}),n=new S(n),t.v2){if(!e.countryCallingCode)throw Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}else{if(!e.phone)return!1;if(e.country){if(!n.hasCountry(e.country))throw Error("Unknown country: ".concat(e.country));n.country(e.country)}else{if(!e.countryCallingCode)throw Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}}if(n.possibleLengths())return q(e.phone||e.nationalNumber,n);if(e.countryCallingCode&&n.isNonGeographicCallingCode(e.countryCallingCode))return!0;throw Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')}(this,{v2:!0},this.getMetadata())}},{key:"isValid",value:function(){var e,t;return(e=e={v2:!0},(t=new S(t=this.getMetadata())).selectNumberingPlan(this.country,this.countryCallingCode),t.hasTypes())?void 0!==K(this,e,t.metadata):Y(e.v2?this.nationalNumber:this.phone,t.nationalNumberPattern())}},{key:"isNonGeographic",value:function(){return new S(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode)}},{key:"isEqual",value:function(e){return this.number===e.number&&this.ext===e.ext}},{key:"getType",value:function(){return K(this,{v2:!0},this.getMetadata())}},{key:"format",value:function(e,t){return function(e,t,n,r){if(n=n?ea(ea({},es),n):es,r=new S(r),e.country&&"001"!==e.country){if(!r.hasCountry(e.country))throw Error("Unknown country: ".concat(e.country));r.country(e.country)}else{if(!e.countryCallingCode)return e.phone||"";r.selectNumberingPlan(e.countryCallingCode)}var i,o,a,s,l,d,c,u,p,h,f,m,g,v=r.countryCallingCode(),b=n.v2?e.nationalNumber:e.phone;switch(t){case"NATIONAL":if(!b)return"";return i=g=el(b,e.carrierCode,"NATIONAL",r,n),o=e.ext,a=r,s=n.formatExtension,o?s(i,o,a):i;case"INTERNATIONAL":if(!b)return"+".concat(v);return g=el(b,null,"INTERNATIONAL",r,n),l=g="+".concat(v," ").concat(g),d=e.ext,c=r,u=n.formatExtension,d?u(l,d,c):l;case"E.164":return"+".concat(v).concat(b);case"RFC3966":return function(e){var t=e.number,n=e.ext;if(!t)return"";if("+"!==t[0])throw Error('"formatRFC3966()" expects "number" to be in E.164 format.');return"tel:".concat(t).concat(n?";ext="+n:"")}({number:"+".concat(v).concat(b),ext:e.ext});case"IDD":if(!n.fromCountry)return;return p=function(e,t,n,r,i){if(L(r,i.metadata)===n){var o,a,s=el(e,t,"NATIONAL",i);return"1"===n?n+" "+s:s}var l=(o=void 0,((a=new S(i.metadata)).selectNumberingPlan(r,o),a.defaultIDDPrefix())?a.defaultIDDPrefix():er.test(a.IDDPrefix())?a.IDDPrefix():void 0);if(l)return"".concat(l," ").concat(n," ").concat(el(e,null,"INTERNATIONAL",i))}(b,e.carrierCode,v,n.fromCountry,r),h=e.ext,f=r,m=n.formatExtension,h?m(p,h,f):p;default:throw Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t,'"'))}}(this,e,t?ec(ec({},t),{},{v2:!0}):{v2:!0},this.getMetadata())}},{key:"formatNational",value:function(e){return this.format("NATIONAL",e)}},{key:"formatInternational",value:function(e){return this.format("INTERNATIONAL",e)}},{key:"getURI",value:function(e){return this.format("RFC3966",e)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(),ep=/^\+\d+$/;function eh(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var ef="(["+l+"]|[\\-\\.\\(\\)]?)",em=RegExp("^\\+"+ef+"*["+l+"]"+ef+"*$","g"),eg=RegExp("^(["+l+"]+((\\-)*["+l+"])*\\.)*[a-zA-Z]+((\\-)*["+l+"])*\\.?$","g"),ev="tel:",eb=";phone-context=",ey=RegExp("["+c+l+"]"),ex=RegExp("[^"+l+"#]+$");function ew(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function e_(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ew(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ew(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function eC(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function e$(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eC(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eC(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ek(){var e=function(e){var t,n,r,i,l=function(e){if(Array.isArray(e))return e}(t=Array.prototype.slice.call(e))||function(e,t){var n,r,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(n=i.next()).done)&&(o.push(n.value),4!==o.length);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return o}}(t,4)||function(e,t){if(e){if("string"==typeof e)return s(e,4);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,4)}}(t,4)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=l[0],c=l[1],u=l[2],p=l[3];if("string"==typeof d)n=d;else throw TypeError("A text for parsing must be a string.");if(c&&"string"!=typeof c){if(o(c))u?(r=c,i=u):i=c;else throw Error("Invalid second argument: ".concat(c))}else p?(r=u,i=p):(r=void 0,i=u),c&&(r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({defaultCountry:c},r));return{text:n,options:r,metadata:i}}(arguments);return function(e,t,n){var r,i;t&&t.defaultCountry&&(r=t.defaultCountry,!n.countries.hasOwnProperty(r))&&(t=e$(e$({},t),{},{defaultCountry:void 0}));try{return i=t,function(e,t,n){if(t=t||{},n=new S(n),t.defaultCountry&&!n.hasCountry(t.defaultCountry)){if(t.v2)throw new b("INVALID_COUNTRY");throw Error("Unknown country: ".concat(t.defaultCountry))}var r,i=function(e,t,n){var r=function(e,t){var n=t.extractFormattedPhoneNumber,r=function(e){var t=e.indexOf(eb);if(t<0)return null;var n=t+eb.length;if(n>=e.length)return"";var r=e.indexOf(";",n);return r>=0?e.substring(n,r):e.substring(n)}(e);if(!(null===r||0!==r.length&&(em.test(r)||eg.test(r))))throw new b("NOT_A_NUMBER");if(null===r)i=n(e)||"";else{i="","+"===r.charAt(0)&&(i+=r);var i,o,a=e.indexOf(ev);o=a>=0?a+ev.length:0;var s=e.indexOf(eb);i+=e.substring(o,s)}var l=i.indexOf(";isub=");if(l>0&&(i=i.substring(0,l)),""!==i)return i}(e,{extractFormattedPhoneNumber:function(e){return function(e,t,n){if(e){if(e.length>250){if(n)throw new b("TOO_LONG");return}if(!1===t)return e;var r=e.search(ey);if(!(r<0))return e.slice(r).replace(ex,"")}}(e,n,t)}});if(!r)return{};if(!(r.length>=2&&F.test(r)))return B.test(r)?{error:"TOO_SHORT"}:{};var i=function(e){var t=e.search(z);if(t<0)return{};for(var n=e.slice(0,t),r=e.match(z),i=1;i<r.length;){if(r[i])return{number:n,ext:r[i]};i++}}(r);return i.ext?i:{number:r}}(e,t.v2,t.extract),o=i.number,a=i.ext,s=i.error;if(!o){if(t.v2){if("TOO_SHORT"===s)throw new b("TOO_SHORT");throw new b("NOT_A_NUMBER")}return{}}var l=function(e,t,n,r){var i,o,a,s,l,d,c,u=et(W(e),t,n,r.metadata),p=u.countryCallingCodeSource,h=u.countryCallingCode,f=u.number;if(h)r.selectNumberingPlan(h);else{if(!f||!t&&!n)return{};r.selectNumberingPlan(t,n),t&&(c=t),h=n||L(t,r.metadata)}if(!f)return{countryCallingCodeSource:p,countryCallingCode:h};var m=ee(W(f),r),g=m.nationalNumber,v=m.carrierCode,b=(i=h,a=(o={nationalNumber:g,defaultCountry:t,metadata:r}).nationalNumber,s=o.defaultCountry,(d=(l=o.metadata).getCountryCodesForCallingCode(i))?1===d.length?d[0]:function(e,t){var n=t.countries,r=(t.defaultCountry,t.metadata);r=new S(r);for(var i,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return eh(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return eh(e,void 0)}}(e))){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(n);!(i=o()).done;){var a=i.value;if(r.country(a),r.leadingDigits()){if(e&&0===e.search(r.leadingDigits()))return a}else if(K({phone:e,country:a},void 0,r.metadata))return a}}(a,{countries:d,defaultCountry:s,metadata:l.metadata}):void 0);return b&&(c=b,"001"===b||r.country(c)),{country:c,countryCallingCode:h,countryCallingCodeSource:p,nationalNumber:g,carrierCode:v}}(o,t.defaultCountry,t.defaultCallingCode,n),d=l.country,c=l.nationalNumber,u=l.countryCallingCode,p=l.countryCallingCodeSource,h=l.carrierCode;if(!n.hasSelectedNumberingPlan()){if(t.v2)throw new b("INVALID_COUNTRY");return{}}if(!c||c.length<2){if(t.v2)throw new b("TOO_SHORT");return{}}if(c.length>17){if(t.v2)throw new b("TOO_LONG");return{}}if(t.v2){var f=new eu(u,c,n.metadata);return d&&(f.country=d),h&&(f.carrierCode=h),a&&(f.ext=a),f.__countryCallingCodeSource=p,f}var m=(t.extended?!!n.hasSelectedNumberingPlan():!!d)&&Y(c,n.nationalNumberPattern());return t.extended?{country:d,countryCallingCode:u,carrierCode:h,valid:m,possible:!!m||!!(!0===t.extended&&n.possibleLengths()&&q(c,n)),phone:c,ext:a}:m?(r={country:d,phone:c},a&&(r.ext=a),r):{}}(e,e_(e_({},i),{},{v2:!0}),n)}catch(e){if(e instanceof b);else throw e}}(e.text,e.options,e.metadata)}function eS(){return function(e,t){var n=Array.prototype.slice.call(t);return n.push(r),e.apply(this,n)}(ek,arguments)}},36052:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(39063);let i=function(e,t){let n=e,r=a[t],i=null,o=0,s=null,d=[],v={},b=function(e,t){i=function(e){let t=Array(e);for(let n=0;n<e;n+=1){t[n]=Array(e);for(let r=0;r<e;r+=1)t[n][r]=null}return t}(o=4*n+17),y(0,0),y(o-7,0),y(0,o-7),C(),_(),k(e,t),n>=7&&$(e),null==s&&(s=E(n,r,d)),S(s,t)},y=function(e,t){for(let n=-1;n<=7;n+=1)if(!(e+n<=-1)&&!(o<=e+n))for(let r=-1;r<=7;r+=1)t+r<=-1||o<=t+r||(0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4?i[e+n][t+r]=!0:i[e+n][t+r]=!1)},x=function(){let e=0,t=0;for(let n=0;n<8;n+=1){b(!0,n);let r=l.getLostPoint(v);(0==n||e>r)&&(e=r,t=n)}return t},_=function(){for(let e=8;e<o-8;e+=1)null==i[e][6]&&(i[e][6]=e%2==0);for(let e=8;e<o-8;e+=1)null==i[6][e]&&(i[6][e]=e%2==0)},C=function(){let e=l.getPatternPosition(n);for(let t=0;t<e.length;t+=1)for(let n=0;n<e.length;n+=1){let r=e[t],o=e[n];if(null==i[r][o])for(let e=-2;e<=2;e+=1)for(let t=-2;t<=2;t+=1)-2==e||2==e||-2==t||2==t||0==e&&0==t?i[r+e][o+t]=!0:i[r+e][o+t]=!1}},$=function(e){let t=l.getBCHTypeNumber(n);for(let n=0;n<18;n+=1){let r=!e&&(t>>n&1)==1;i[Math.floor(n/3)][n%3+o-8-3]=r}for(let n=0;n<18;n+=1){let r=!e&&(t>>n&1)==1;i[n%3+o-8-3][Math.floor(n/3)]=r}},k=function(e,t){let n=r<<3|t,a=l.getBCHTypeInfo(n);for(let t=0;t<15;t+=1){let n=!e&&(a>>t&1)==1;t<6?i[t][8]=n:t<8?i[t+1][8]=n:i[o-15+t][8]=n}for(let t=0;t<15;t+=1){let n=!e&&(a>>t&1)==1;t<8?i[8][o-t-1]=n:t<9?i[8][15-t-1+1]=n:i[8][15-t-1]=n}i[o-8][8]=!e},S=function(e,t){let n=-1,r=o-1,a=7,s=0,d=l.getMaskFunction(t);for(let t=o-1;t>0;t-=2)for(6==t&&(t-=1);;){for(let n=0;n<2;n+=1)if(null==i[r][t-n]){let o=!1;s<e.length&&(o=(e[s]>>>a&1)==1),d(r,t-n)&&(o=!o),i[r][t-n]=o,-1==(a-=1)&&(s+=1,a=7)}if((r+=n)<0||o<=r){r-=n,n=-n;break}}},j=function(e,t){let n=0,r=0,i=0,o=Array(t.length),a=Array(t.length);for(let s=0;s<t.length;s+=1){let d=t[s].dataCount,u=t[s].totalCount-d;r=Math.max(r,d),i=Math.max(i,u),o[s]=Array(d);for(let t=0;t<o[s].length;t+=1)o[s][t]=255&e.getBuffer()[t+n];n+=d;let p=l.getErrorCorrectPolynomial(u),h=c(o[s],p.getLength()-1).mod(p);a[s]=Array(p.getLength()-1);for(let e=0;e<a[s].length;e+=1){let t=e+h.getLength()-a[s].length;a[s][e]=t>=0?h.getAt(t):0}}let s=0;for(let e=0;e<t.length;e+=1)s+=t[e].totalCount;let d=Array(s),u=0;for(let e=0;e<r;e+=1)for(let n=0;n<t.length;n+=1)e<o[n].length&&(d[u]=o[n][e],u+=1);for(let e=0;e<i;e+=1)for(let n=0;n<t.length;n+=1)e<a[n].length&&(d[u]=a[n][e],u+=1);return d},E=function(e,t,n){let r=u.getRSBlocks(e,t),i=p();for(let t=0;t<n.length;t+=1){let r=n[t];i.put(r.getMode(),4),i.put(r.getLength(),l.getLengthInBits(r.getMode(),e)),r.write(i)}let o=0;for(let e=0;e<r.length;e+=1)o+=r[e].dataCount;if(i.getLengthInBits()>8*o)throw"code length overflow. ("+i.getLengthInBits()+">"+8*o+")";for(i.getLengthInBits()+4<=8*o&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=8*o)&&(i.put(236,8),!(i.getLengthInBits()>=8*o));)i.put(17,8);return j(i,r)};v.addData=function(e,t){let n=null;switch(t=t||"Byte"){case"Numeric":n=h(e);break;case"Alphanumeric":n=f(e);break;case"Byte":n=m(e);break;case"Kanji":n=g(e);break;default:throw"mode:"+t}d.push(n),s=null},v.isDark=function(e,t){if(e<0||o<=e||t<0||o<=t)throw e+","+t;return i[e][t]},v.getModuleCount=function(){return o},v.make=function(){if(n<1){let e=1;for(;e<40;e++){let t=u.getRSBlocks(e,r),n=p();for(let t=0;t<d.length;t++){let r=d[t];n.put(r.getMode(),4),n.put(r.getLength(),l.getLengthInBits(r.getMode(),e)),r.write(n)}let i=0;for(let e=0;e<t.length;e++)i+=t[e].dataCount;if(n.getLengthInBits()<=8*i)break}n=e}b(!1,x())},v.createTableTag=function(e,t){e=e||2;let n="";n+='<table style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: '+(t=void 0===t?4*e:t)+'px;"><tbody>';for(let t=0;t<v.getModuleCount();t+=1){n+="<tr>";for(let r=0;r<v.getModuleCount();r+=1)n+='<td style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: '+e+"px; height: "+e+"px; background-color: "+(v.isDark(t,r)?"#000000":"#ffffff")+';"/>';n+="</tr>"}return n+"</tbody></table>"},v.createSvgTag=function(e,t,n,r){let i={};"object"==typeof arguments[0]&&(i=arguments[0],e=i.cellSize,t=i.margin,n=i.alt,r=i.title),e=e||2,t=void 0===t?4*e:t,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-description":null,(r="string"==typeof r?{text:r}:r||{}).text=r.text||null,r.id=r.text?r.id||"qrcode-title":null;let o=v.getModuleCount()*e+2*t,a,s,l,d="",c;for(c="l"+e+",0 0,"+e+" -"+e+",0 0,-"+e+"z ",d+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"'+(i.scalable?"":' width="'+o+'px" height="'+o+'px"')+(' viewBox="0 0 '+o+" ")+o+'"  preserveAspectRatio="xMinYMin meet"'+(r.text||n.text?' role="img" aria-labelledby="'+O([r.id,n.id].join(" ").trim())+'"':"")+">"+(r.text?'<title id="'+O(r.id)+'">'+O(r.text)+"</title>":"")+(n.text?'<description id="'+O(n.id)+'">'+O(n.text)+"</description>":"")+'<rect width="100%" height="100%" fill="white" cx="0" cy="0"/><path d="',s=0;s<v.getModuleCount();s+=1)for(a=0,l=s*e+t;a<v.getModuleCount();a+=1)v.isDark(s,a)&&(d+="M"+(a*e+t)+","+l+c);return d+'" stroke="transparent" fill="black"/></svg>'},v.createDataURL=function(e,t){e=e||2,t=void 0===t?4*e:t;let n=v.getModuleCount()*e+2*t,r=t,i=n-t;return w(n,n,function(t,n){if(!(r<=t)||!(t<i)||!(r<=n)||!(n<i))return 1;{let i=Math.floor((t-r)/e),o=Math.floor((n-r)/e);return v.isDark(o,i)?0:1}})},v.createImgTag=function(e,t,n){e=e||2,t=void 0===t?4*e:t;let r=v.getModuleCount()*e+2*t,i="";return i+='<img src="'+v.createDataURL(e,t)+'" width="'+r+'" height="'+r+'"',n&&(i+=' alt="'+O(n)+'"'),i+="/>"};let O=function(e){let t="";for(let n=0;n<e.length;n+=1){let r=e.charAt(n);switch(r){case"<":t+="&lt;";break;case">":t+="&gt;";break;case"&":t+="&amp;";break;case'"':t+="&quot;";break;default:t+=r}}return t},P=function(e){let t,n,r,i,o;e=void 0===e?2:e;let a=1*v.getModuleCount()+2*e,s=e,l=a-e,d={"██":"█","█ ":"▀"," █":"▄","  ":" "},c={"██":"▀","█ ":"▀"," █":" ","  ":" "},u="";for(t=0;t<a;t+=2){for(n=0,r=Math.floor((t-s)/1),i=Math.floor((t+1-s)/1);n<a;n+=1)o="█",s<=n&&n<l&&s<=t&&t<l&&v.isDark(r,Math.floor((n-s)/1))&&(o=" "),s<=n&&n<l&&s<=t+1&&t+1<l&&v.isDark(i,Math.floor((n-s)/1))?o+=" ":o+="█",u+=e<1&&t+1>=l?c[o]:d[o];u+="\n"}return a%2&&e>0?u.substring(0,u.length-a-1)+Array(a+1).join("▀"):u.substring(0,u.length-1)};return v.createASCII=function(e,t){let n,r,i,o;if((e=e||1)<2)return P(t);e-=1,t=void 0===t?2*e:t;let a=v.getModuleCount()*e+2*t,s=t,l=a-t,d=Array(e+1).join("██"),c=Array(e+1).join("  "),u="",p="";for(n=0;n<a;n+=1){for(r=0,i=Math.floor((n-s)/e),p="";r<a;r+=1)o=1,s<=r&&r<l&&s<=n&&n<l&&v.isDark(i,Math.floor((r-s)/e))&&(o=0),p+=o?d:c;for(i=0;i<e;i+=1)u+=p+"\n"}return u.substring(0,u.length-1)},v.renderTo2dContext=function(e,t){t=t||2;let n=v.getModuleCount();for(let r=0;r<n;r++)for(let i=0;i<n;i++)e.fillStyle=v.isDark(r,i)?"black":"white",e.fillRect(i*t,r*t,t,t)},v};i.stringToBytes=function(e){let t=[];for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);t.push(255&r)}return t},i.createStringToBytes=function(e,t){let n=function(){let n=y(e),r=function(){let e=n.read();if(-1==e)throw"eof";return e},i=0,o={};for(;;){let e=n.read();if(-1==e)break;let t=r(),a=r(),s=r(),l=String.fromCharCode(e<<8|t),d=a<<8|s;o[l]=d,i+=1}if(i!=t)throw i+" != "+t;return o}();return function(e){let t=[];for(let r=0;r<e.length;r+=1){let i=e.charCodeAt(r);if(i<128)t.push(i);else{let i=n[e.charAt(r)];"number"==typeof i?(255&i)==i?t.push(i):(t.push(i>>>8),t.push(255&i)):t.push(63)}}return t}};let o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},a={L:1,M:0,Q:3,H:2},s={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},l=function(){let e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t={},n=function(e){let t=0;for(;0!=e;)t+=1,e>>>=1;return t};return t.getBCHTypeInfo=function(e){let t=e<<10;for(;n(t)-n(1335)>=0;)t^=1335<<n(t)-n(1335);return(e<<10|t)^21522},t.getBCHTypeNumber=function(e){let t=e<<12;for(;n(t)-n(7973)>=0;)t^=7973<<n(t)-n(7973);return e<<12|t},t.getPatternPosition=function(t){return e[t-1]},t.getMaskFunction=function(e){switch(e){case s.PATTERN000:return function(e,t){return(e+t)%2==0};case s.PATTERN001:return function(e,t){return e%2==0};case s.PATTERN010:return function(e,t){return t%3==0};case s.PATTERN011:return function(e,t){return(e+t)%3==0};case s.PATTERN100:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case s.PATTERN101:return function(e,t){return e*t%2+e*t%3==0};case s.PATTERN110:return function(e,t){return(e*t%2+e*t%3)%2==0};case s.PATTERN111:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw"bad maskPattern:"+e}},t.getErrorCorrectPolynomial=function(e){let t=c([1],0);for(let n=0;n<e;n+=1)t=t.multiply(c([1,d.gexp(n)],0));return t},t.getLengthInBits=function(e,t){if(1<=t&&t<10)switch(e){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw"mode:"+e}else if(t<27)switch(e){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw"mode:"+e}else if(t<41)switch(e){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw"mode:"+e}else throw"type:"+t},t.getLostPoint=function(e){let t=e.getModuleCount(),n=0;for(let r=0;r<t;r+=1)for(let i=0;i<t;i+=1){let o=0,a=e.isDark(r,i);for(let n=-1;n<=1;n+=1)if(!(r+n<0)&&!(t<=r+n))for(let s=-1;s<=1;s+=1)i+s<0||t<=i+s||0==n&&0==s||a!=e.isDark(r+n,i+s)||(o+=1);o>5&&(n+=3+o-5)}for(let r=0;r<t-1;r+=1)for(let i=0;i<t-1;i+=1){let t=0;e.isDark(r,i)&&(t+=1),e.isDark(r+1,i)&&(t+=1),e.isDark(r,i+1)&&(t+=1),e.isDark(r+1,i+1)&&(t+=1),(0==t||4==t)&&(n+=3)}for(let r=0;r<t;r+=1)for(let i=0;i<t-6;i+=1)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(let r=0;r<t;r+=1)for(let i=0;i<t-6;i+=1)e.isDark(i,r)&&!e.isDark(i+1,r)&&e.isDark(i+2,r)&&e.isDark(i+3,r)&&e.isDark(i+4,r)&&!e.isDark(i+5,r)&&e.isDark(i+6,r)&&(n+=40);let r=0;for(let n=0;n<t;n+=1)for(let i=0;i<t;i+=1)e.isDark(i,n)&&(r+=1);return n+Math.abs(100*r/t/t-50)/5*10},t}(),d=function(){let e=Array(256),t=Array(256);for(let t=0;t<8;t+=1)e[t]=1<<t;for(let t=8;t<256;t+=1)e[t]=e[t-4]^e[t-5]^e[t-6]^e[t-8];for(let n=0;n<255;n+=1)t[e[n]]=n;let n={};return n.glog=function(e){if(e<1)throw"glog("+e+")";return t[e]},n.gexp=function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e[t]},n}(),c=function(e,t){if(void 0===e.length)throw e.length+"/"+t;let n=function(){let n=0;for(;n<e.length&&0==e[n];)n+=1;let r=Array(e.length-n+t);for(let t=0;t<e.length-n;t+=1)r[t]=e[t+n];return r}(),r={};return r.getAt=function(e){return n[e]},r.getLength=function(){return n.length},r.multiply=function(e){let t=Array(r.getLength()+e.getLength()-1);for(let n=0;n<r.getLength();n+=1)for(let i=0;i<e.getLength();i+=1)t[n+i]^=d.gexp(d.glog(r.getAt(n))+d.glog(e.getAt(i)));return c(t,0)},r.mod=function(e){if(r.getLength()-e.getLength()<0)return r;let t=d.glog(r.getAt(0))-d.glog(e.getAt(0)),n=Array(r.getLength());for(let e=0;e<r.getLength();e+=1)n[e]=r.getAt(e);for(let r=0;r<e.getLength();r+=1)n[r]^=d.gexp(d.glog(e.getAt(r))+t);return c(n,0).mod(e)},r},u=function(){let e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(e,t){let n={};return n.totalCount=e,n.dataCount=t,n},n={},r=function(t,n){switch(n){case a.L:return e[(t-1)*4+0];case a.M:return e[(t-1)*4+1];case a.Q:return e[(t-1)*4+2];case a.H:return e[(t-1)*4+3];default:return}};return n.getRSBlocks=function(e,n){let i=r(e,n);if(void 0===i)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;let o=i.length/3,a=[];for(let e=0;e<o;e+=1){let n=i[3*e+0],r=i[3*e+1],o=i[3*e+2];for(let e=0;e<n;e+=1)a.push(t(r,o))}return a},n}(),p=function(){let e=[],t=0,n={};return n.getBuffer=function(){return e},n.getAt=function(t){return(e[Math.floor(t/8)]>>>7-t%8&1)==1},n.put=function(e,t){for(let r=0;r<t;r+=1)n.putBit((e>>>t-r-1&1)==1)},n.getLengthInBits=function(){return t},n.putBit=function(n){let r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1},n},h=function(e){let t=o.MODE_NUMBER,n={};n.getMode=function(){return t},n.getLength=function(t){return e.length},n.write=function(t){let n=0;for(;n+2<e.length;)t.put(r(e.substring(n,n+3)),10),n+=3;n<e.length&&(e.length-n==1?t.put(r(e.substring(n,n+1)),4):e.length-n==2&&t.put(r(e.substring(n,n+2)),7))};let r=function(e){let t=0;for(let n=0;n<e.length;n+=1)t=10*t+i(e.charAt(n));return t},i=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-48;throw"illegal char :"+e};return n},f=function(e){let t=o.MODE_ALPHA_NUM,n={};n.getMode=function(){return t},n.getLength=function(t){return e.length},n.write=function(t){let n=0;for(;n+1<e.length;)t.put(45*r(e.charAt(n))+r(e.charAt(n+1)),11),n+=2;n<e.length&&t.put(r(e.charAt(n)),6)};let r=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-48;if("A"<=e&&e<="Z")return e.charCodeAt(0)-65+10;switch(e){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+e}};return n},m=function(e){let t=o.MODE_8BIT_BYTE,n=i.stringToBytes(e),r={};return r.getMode=function(){return t},r.getLength=function(e){return n.length},r.write=function(e){for(let t=0;t<n.length;t+=1)e.put(n[t],8)},r},g=function(e){let t=o.MODE_KANJI,n=i.stringToBytes;!function(e,t){let r=n("友");if(2!=r.length||(r[0]<<8|r[1])!=38726)throw"sjis not supported."}(0,0);let r=n(e),a={};return a.getMode=function(){return t},a.getLength=function(e){return~~(r.length/2)},a.write=function(e){let t=0;for(;t+1<r.length;){let n=(255&r[t])<<8|255&r[t+1];if(33088<=n&&n<=40956)n-=33088;else if(57408<=n&&n<=60351)n-=49472;else throw"illegal char at "+(t+1)+"/"+n;n=(n>>>8&255)*192+(255&n),e.put(n,13),t+=2}if(t<r.length)throw"illegal char at "+(t+1)},a},v=function(){let e=[],t={};return t.writeByte=function(t){e.push(255&t)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,r){n=n||0,r=r||e.length;for(let i=0;i<r;i+=1)t.writeByte(e[i+n])},t.writeString=function(e){for(let n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return e},t.toString=function(){let t="";t+="[";for(let n=0;n<e.length;n+=1)n>0&&(t+=","),t+=e[n];return t+"]"},t},b=function(){let e=0,t=0,n=0,r="",i={},o=function(e){r+=String.fromCharCode(a(63&e))},a=function(e){if(e<0)throw"n:"+e;if(e<26)return 65+e;if(e<52)return 97+(e-26);if(e<62)return 48+(e-52);if(62==e)return 43;if(63==e)return 47;throw"n:"+e};return i.writeByte=function(r){for(e=e<<8|255&r,t+=8,n+=1;t>=6;)o(e>>>t-6),t-=6},i.flush=function(){if(t>0&&(o(e<<6-t),e=0,t=0),n%3!=0){let e=3-n%3;for(let t=0;t<e;t+=1)r+="="}},i.toString=function(){return r},i},y=function(e){let t=0,n=0,r=0,i={};i.read=function(){for(;r<8;){if(t>=e.length){if(0==r)return -1;throw"unexpected end of file./"+r}let i=e.charAt(t);if(t+=1,"="==i)return r=0,-1;i.match(/^\s$/)||(n=n<<6|o(i.charCodeAt(0)),r+=6)}let i=n>>>r-8&255;return r-=8,i};let o=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(43==e)return 62;if(47==e)return 63;throw"c:"+e};return i},x=function(e,t){let n=Array(e*t),r={};r.setPixel=function(t,r,i){n[r*e+t]=i},r.write=function(n){n.writeString("GIF87a"),n.writeShort(e),n.writeShort(t),n.writeByte(128),n.writeByte(0),n.writeByte(0),n.writeByte(0),n.writeByte(0),n.writeByte(0),n.writeByte(255),n.writeByte(255),n.writeByte(255),n.writeString(","),n.writeShort(0),n.writeShort(0),n.writeShort(e),n.writeShort(t),n.writeByte(0);let r=o(2);n.writeByte(2);let i=0;for(;r.length-i>255;)n.writeByte(255),n.writeBytes(r,i,255),i+=255;n.writeByte(r.length-i),n.writeBytes(r,i,r.length-i),n.writeByte(0),n.writeString(";")};let i=function(e){let t=0,n=0,r={};return r.write=function(r,i){if(r>>>i!=0)throw"length over";for(;t+i>=8;)e.writeByte(255&(r<<t|n)),i-=8-t,r>>>=8-t,n=0,t=0;n=r<<t|n,t+=i},r.flush=function(){t>0&&e.writeByte(n)},r},o=function(e){let t=1<<e,r=(1<<e)+1,o=e+1,s=a();for(let e=0;e<t;e+=1)s.add(String.fromCharCode(e));s.add(String.fromCharCode(t)),s.add(String.fromCharCode(r));let l=v(),d=i(l);d.write(t,o);let c=0,u=String.fromCharCode(n[0]);for(c+=1;c<n.length;){let e=String.fromCharCode(n[c]);c+=1,s.contains(u+e)?u+=e:(d.write(s.indexOf(u),o),4095>s.size()&&(s.size()==1<<o&&(o+=1),s.add(u+e)),u=e)}return d.write(s.indexOf(u),o),d.write(r,o),d.flush(),l.toByteArray()},a=function(){let e={},t=0,n={};return n.add=function(r){if(n.contains(r))throw"dup key:"+r;e[r]=t,t+=1},n.size=function(){return t},n.indexOf=function(t){return e[t]},n.contains=function(t){return void 0!==e[t]},n};return r},w=function(e,t,n){let r=x(e,t);for(let i=0;i<t;i+=1)for(let t=0;t<e;t+=1)r.setPixel(t,i,n(t,i));let i=v();r.write(i);let o=b(),a=i.toByteArray();for(let e=0;e<a.length;e+=1)o.writeByte(a[e]);return o.flush(),"data:image/gif;base64,"+o};i.stringToBytes;var _=n(45113);function C(){return(C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function $(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var k=["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"],S={bgColor:r.oneOfType([r.object,r.string]).isRequired,bgD:r.string.isRequired,fgColor:r.oneOfType([r.object,r.string]).isRequired,fgD:r.string.isRequired,size:r.number.isRequired,title:r.string,viewBoxSize:r.number.isRequired,xmlns:r.string},j=(0,_.forwardRef)(function(e,t){var n=e.bgColor,r=e.bgD,i=e.fgD,o=e.fgColor,a=e.size,s=e.title,l=e.viewBoxSize,d=e.xmlns,c=$(e,k);return _.createElement("svg",C({},c,{height:a,ref:t,viewBox:"0 0 ".concat(l," ").concat(l),width:a,xmlns:void 0===d?"http://www.w3.org/2000/svg":d}),s?_.createElement("title",null,s):null,_.createElement("path",{d:r,fill:n}),_.createElement("path",{d:i,fill:o}))});j.displayName="QRCodeSvg",j.propTypes=S;var E=["bgColor","fgColor","level","size","value"];i.stringToBytes=function(e){return Array.from(new TextEncoder().encode(e))};var O={bgColor:r.oneOfType([r.object,r.string]),fgColor:r.oneOfType([r.object,r.string]),level:r.string,size:r.number,value:r.string.isRequired},P=(0,_.forwardRef)(function(e,t){var n=e.bgColor,r=e.fgColor,o=e.level,a=e.size,s=e.value,l=$(e,E),d=i(0,void 0===o?"L":o);d.addData(s),d.make();var c=d.getModuleCount(),u=Array.from({length:c},function(e,t){return Array.from({length:c},function(e,n){return d.isDark(t,n)})});return _.createElement(j,C({},l,{bgColor:void 0===n?"#FFFFFF":n,bgD:u.map(function(e,t){return e.map(function(e,n){return e?"":"M ".concat(n," ").concat(t," l 1 0 0 1 -1 0 Z")}).join(" ")}).join(" "),fgColor:void 0===r?"#000000":r,fgD:u.map(function(e,t){return e.map(function(e,n){return e?"M ".concat(n," ").concat(t," l 1 0 0 1 -1 0 Z"):""}).join(" ")}).join(" "),ref:t,size:void 0===a?256:a,viewBoxSize:c}))});P.displayName="QRCode",P.propTypes=O},23289:function(e,t,n){"use strict";n.d(t,{M:function(){return eT}});var r,i="function",o="undefined",a="object",s="string",l="major",d="model",c="name",u="type",p="vendor",h="version",f="architecture",m="console",g="mobile",v="tablet",b="smarttv",y="wearable",x="embedded",w="user-agent",_="brands",C="formFactors",$="fullVersionList",k="platform",S="platformVersion",j="bitness",E="sec-ch-ua",O=E+"-full-version-list",P=E+"-arch",N=E+"-"+j,M=E+"-form-factors",T=E+"-"+g,L=E+"-"+d,D=E+"-"+k,A=D+"-version",I=[_,$,g,d,k,S,f,C,j],B="browser",R="device",F="engine",z="result",Z="Amazon",H="Apple",W="ASUS",V="BlackBerry",U="Google",q="Huawei",Y="Lenovo",G="Microsoft",X="Motorola",K="Samsung",J="Sharp",Q="Sony",ee="Xiaomi",et="Zebra",en="Mobile ",er=" Browser",ei="Chrome",eo="Firefox",ea="Opera",es="Facebook",el="Sogou",ed="Windows",ec=typeof window!==o&&window.navigator?window.navigator:void 0,eu=ec&&ec.userAgentData?ec.userAgentData:void 0,ep=function(e,t){var n={},r=t;if(!em(t))for(var i in r={},t)for(var o in t[i])r[o]=t[i][o].concat(r[o]?r[o]:[]);for(var a in e)n[a]=r[a]&&r[a].length%2==0?r[a].concat(e[a]):e[a];return n},eh=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},ef=function(e,t){if(typeof e===a&&e.length>0){for(var n in e)if(eb(e[n])==eb(t))return!0;return!1}return!!eg(e)&&-1!==eb(t).indexOf(eb(e))},em=function(e,t){for(var n in e)return/^(browser|cpu|device|engine|os)$/.test(n)||!!t&&em(e[n])},eg=function(e){return typeof e===s},ev=function(e){if(e){for(var t=[],n=ew(/\\?\"/g,e).split(","),r=0;r<n.length;r++)if(n[r].indexOf(";")>-1){var i=eC(n[r]).split(";v=");t[r]={brand:i[0],version:i[1]}}else t[r]=eC(n[r]);return t}},eb=function(e){return eg(e)?e.toLowerCase():e},ey=function(e){return eg(e)?ew(/[^\d\.]/g,e).split(".")[0]:void 0},ex=function(e){for(var t in e){var n=e[t];typeof n==a&&2==n.length?this[n[0]]=n[1]:this[n]=void 0}return this},ew=function(e,t){return eg(t)?t.replace(e,""):t},e_=function(e){return ew(/\\?\"/g,e)},eC=function(e,t){if(eg(e))return e=ew(/^\s\s*/,e),typeof t===o?e:e.substring(0,500)},e$=function(e,t){if(e&&t)for(var n,r,o,s,l,d,c=0;c<t.length&&!l;){var u=t[c],p=t[c+1];for(n=r=0;n<u.length&&!l&&u[n];)if(l=u[n++].exec(e))for(o=0;o<p.length;o++)d=l[++r],typeof(s=p[o])===a&&s.length>0?2===s.length?typeof s[1]==i?this[s[0]]=s[1].call(this,d):this[s[0]]=s[1]:3===s.length?typeof s[1]!==i||s[1].exec&&s[1].test?this[s[0]]=d?d.replace(s[1],s[2]):void 0:this[s[0]]=d?s[1].call(this,d,s[2]):void 0:4===s.length&&(this[s[0]]=d?s[3].call(this,d.replace(s[1],s[2])):void 0):this[s]=d||void 0;c+=2}},ek=function(e,t){for(var n in t)if(typeof t[n]===a&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(ef(t[n][r],e))return"?"===n?void 0:n}else if(ef(t[n],e))return"?"===n?void 0:n;return t.hasOwnProperty("*")?t["*"]:e},eS={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},ej={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},eE={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[c,en+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,h],[/opios[\/ ]+([\w\.]+)/i],[h,[c,ea+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[h,[c,ea+" GX"]],[/\bopr\/([\w\.]+)/i],[h,[c,ea]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[h,[c,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[c,h],[/\bddg\/([\w\.]+)/i],[h,[c,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[c,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[h,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[c,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[h,[c,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[h,[c,"Smart "+Y+er]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure"+er],h],[/\bfocus\/([\w\.]+)/i],[h,[c,eo+" Focus"]],[/\bopt\/([\w\.]+)/i],[h,[c,ea+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[c,ea+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[c,"MIUI"+er]],[/fxios\/([\w\.-]+)/i],[h,[c,en+eo]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360"+er]],[/\b(qq)\/([\w\.]+)/i],[[c,/(.+)/,"$1Browser"],h],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1"+er],h],[/samsungbrowser\/([\w\.]+)/i],[h,[c,K+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],h],[/metasr[\/ ]?([\d\.]+)/i],[h,[c,el+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[c,el+" Mobile"],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[c,h],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,es],h],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[c,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[c,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[h,[c,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[c,ei+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,ei+" WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[c,"Android"+er]],[/chrome\/([\w\.]+) mobile/i],[h,[c,en+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,h],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[h,[c,en+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[c,en+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[h,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[h,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[c,h],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[c,en+eo],h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],h],[/(wolvic)\/([\w\.]+)/i],[c,h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[c,eo+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[c,[h,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[c,[h,/[^\d\.]+./,""]]],cpu:[[/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i],[[f,"amd64"]],[/(ia32(?=;))/i,/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",eb]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,eb]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[p,K],[u,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[p,K],[u,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[d,[p,H],[u,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[p,H],[u,v]],[/(macintosh);/i],[d,[p,H]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[p,J],[u,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[p,q],[u,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[d,[p,q],[u,g]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[p,ee],[u,g]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[p,ee],[u,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[p,"OPPO"],[u,g]],[/\b(opd2\d{3}a?) bui/i],[d,[p,"OPPO"],[u,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[p,"Vivo"],[u,g]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[d,[p,"Realme"],[u,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[p,X],[u,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[p,X],[u,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[p,"LG"],[u,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[p,"LG"],[u,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[p,Y],[u,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[p,"Nokia"],[u,g]],[/(pixel c)\b/i],[d,[p,U],[u,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[p,U],[u,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[p,Q],[u,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[p,Q],[u,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[p,"OnePlus"],[u,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[p,Z],[u,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[p,Z],[u,g]],[/(playbook);[-\w\),; ]+(rim)/i],[d,p,[u,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[p,V],[u,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[p,W],[u,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[p,W],[u,g]],[/(nexus 9)/i],[d,[p,"HTC"],[u,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[d,/_/g," "],[u,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[p,"Acer"],[u,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[p,"Meizu"],[u,g]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[d,[p,"Ulefone"],[u,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,d,[u,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[p,d,[u,v]],[/(surface duo)/i],[d,[p,G],[u,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[p,"Fairphone"],[u,g]],[/(shield[\w ]+) b/i],[d,[p,"Nvidia"],[u,v]],[/(sprint) (\w+)/i],[p,d,[u,g]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[p,G],[u,g]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[p,et],[u,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[p,et],[u,g]],[/smart-tv.+(samsung)/i],[p,[u,b]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[p,K],[u,b]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,"LG"],[u,b]],[/(apple) ?tv/i],[p,[d,H+" TV"],[u,b]],[/crkey/i],[[d,ei+"cast"],[p,U],[u,b]],[/droid.+aft(\w+)( bui|\))/i],[d,[p,Z],[u,b]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[d,[p,J],[u,b]],[/(bravia[\w ]+)( bui|\))/i],[d,[p,Q],[u,b]],[/(mitv-\w{5}) bui/i],[d,[p,ee],[u,b]],[/Hbbtv.*(technisat) (.*);/i],[p,d,[u,b]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,eC],[d,eC],[u,b]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[u,b]],[/(ouya)/i,/(nintendo) (\w+)/i],[p,d,[u,m]],[/droid.+; (shield) bui/i],[d,[p,"Nvidia"],[u,m]],[/(playstation \w+)/i],[d,[p,Q],[u,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[p,G],[u,m]],[/((pebble))app/i],[p,d,[u,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[d,[p,H],[u,y]],[/droid.+; (wt63?0{2,3})\)/i],[d,[p,et],[u,y]],[/droid.+; (glass) \d/i],[d,[p,U],[u,"xr"]],[/(quest( \d| pro)?)/i],[d,[p,es],[u,"xr"]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[u,x]],[/(aeobc)\b/i],[d,[p,Z],[u,x]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[d,[u,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[u,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[u,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[u,g]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[c,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,h],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[c,[h,ek,eS]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[h,ek,eS],[c,ed]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,"macOS"],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,h],[/\(bb(10);/i],[h,[c,V]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[c,eo+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[c,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[h,[c,"watchOS"]],[/crkey\/([\d\.]+)/i],[h,[c,ei+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[c,"Chrome OS"],h],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,h],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[c,h]]},eO=(r={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}},ex.call(r.init,[[B,[c,h,l,u]],["cpu",[f]],[R,[u,d,p]],[F,[c,h]],["os",[c,h]]]),ex.call(r.isIgnore,[[B,[h,l]],[F,[h]],["os",[h]]]),ex.call(r.isIgnoreRgx,[[B,/ ?browser$/i],["os",/ ?os$/i]]),ex.call(r.toString,[[B,[c,h]],["cpu",[f]],[R,[p,d]],[F,[c,h]],["os",[c,h]]]),r),eP=function(e,t){var n=eO.init[t],r=eO.isIgnore[t]||0,i=eO.isIgnoreRgx[t]||0,a=eO.toString[t]||0;function s(){ex.call(this,n)}return s.prototype.getItem=function(){return e},s.prototype.withClientHints=function(){return eu?eu.getHighEntropyValues(I).then(function(t){return e.setCH(new eN(t,!1)).parseCH().get()}):e.parseCH().get()},s.prototype.withFeatureCheck=function(){return e.detectFeature().get()},t!=z&&(s.prototype.is=function(e){var t=!1;for(var n in this)if(this.hasOwnProperty(n)&&!ef(r,n)&&eb(i?ew(i,this[n]):this[n])==eb(i?ew(i,e):e)){if(t=!0,e!=o)break}else if(e==o&&t){t=!t;break}return t},s.prototype.toString=function(){var e="";for(var t in a)typeof this[a[t]]!==o&&(e+=(e?" ":"")+this[a[t]]);return e||o}),eu||(s.prototype.then=function(e){var t=this,n=function(){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])};n.prototype={is:s.prototype.is,toString:s.prototype.toString};var r=new n;return e(r),r}),new s};function eN(e,t){if(e=e||{},ex.call(this,I),t)ex.call(this,[[_,ev(e[E])],[$,ev(e[O])],[g,/\?1/.test(e[T])],[d,e_(e[L])],[k,e_(e[D])],[S,e_(e[A])],[f,e_(e[P])],[C,ev(e[M])],[j,e_(e[N])]]);else for(var n in e)this.hasOwnProperty(n)&&typeof e[n]!==o&&(this[n]=e[n])}function eM(e,t,n,r){return this.get=function(e){return e?this.data.hasOwnProperty(e)?this.data[e]:void 0:this.data},this.set=function(e,t){return this.data[e]=t,this},this.setCH=function(e){return this.uaCH=e,this},this.detectFeature=function(){if(ec&&ec.userAgent==this.ua)switch(this.itemType){case B:ec.brave&&typeof ec.brave.isBrave==i&&this.set(c,"Brave");break;case R:!this.get(u)&&eu&&eu[g]&&this.set(u,g),"Macintosh"==this.get(d)&&ec&&typeof ec.standalone!==o&&ec.maxTouchPoints&&ec.maxTouchPoints>2&&this.set(d,"iPad").set(u,v);break;case"os":!this.get(c)&&eu&&eu[k]&&this.set(c,eu[k]);break;case z:var e=this.data,t=function(t){return e[t].getItem().detectFeature().get()};this.set(B,t(B)).set("cpu",t("cpu")).set(R,t(R)).set(F,t(F)).set("os",t("os"))}return this},this.parseUA=function(){return this.itemType!=z&&e$.call(this.data,this.ua,this.rgxMap),this.itemType==B&&this.set(l,ey(this.get(h))),this},this.parseCH=function(){var e,t=this.uaCH,n=this.rgxMap;switch(this.itemType){case B:var r,i=t[$]||t[_];if(i)for(var o in i){var a=ew(/(Google|Microsoft) /,i[o].brand||i[o]),s=i[o].version;!/not.a.brand/i.test(a)&&(!r||/chrom/i.test(r)&&!/chromi/i.test(a))&&(this.set(c,a).set(h,s).set(l,ey(s)),r=a)}break;case"cpu":var v=t[f];v&&(v&&"64"==t[j]&&(v+="64"),e$.call(this.data,v+";",n));break;case R:if(t[g]&&this.set(u,g),t[d]&&this.set(d,t[d]),"Xbox"==t[d]&&this.set(u,m).set(p,G),t[C]){if("string"!=typeof t[C])for(var b=0;!e&&b<t[C].length;)e=ek(t[C][b++],ej);else e=ek(t[C],ej);this.set(u,e)}break;case"os":var y=t[k];if(y){var x=t[S];y==ed&&(x=parseInt(ey(x),10)>=13?"11":"10"),this.set(c,y).set(h,x)}this.get(c)==ed&&"Xbox"==t[d]&&this.set(c,"Xbox").set(h,void 0);break;case z:var w=this.data,E=function(e){return w[e].getItem().setCH(t).parseCH().get()};this.set(B,E(B)).set("cpu",E("cpu")).set(R,E(R)).set(F,E(F)).set("os",E("os"))}return this},ex.call(this,[["itemType",e],["ua",t],["uaCH",r],["rgxMap",n],["data",eP(this,e)]]),this}function eT(e,t,n){if(typeof e===a?(em(e,!0)?(typeof t===a&&(n=t),t=e):(n=e,t=void 0),e=void 0):typeof e!==s||em(t,!0)||(n=t,t=void 0),!(this instanceof eT))return new eT(e,t,n).getResult();var r=typeof e===s?e:ec&&ec.userAgent?ec.userAgent:n&&n[w]?n[w]:"",i=new eN(n,!0),o=t?ep(eE,t):eE,l=function(e){return e==z?function(){return new eM(e,r,o,i).set("ua",r).set(B,this.getBrowser()).set("cpu",this.getCPU()).set(R,this.getDevice()).set(F,this.getEngine()).set("os",this.getOS()).get()}:function(){return new eM(e,r,o[e],i).parseUA().get()}};return ex.call(this,[["getBrowser",l(B)],["getCPU",l("cpu")],["getDevice",l(R)],["getEngine",l(F)],["getOS",l("os")],["getResult",l(z)],["getUA",function(){return r}],["setUA",function(e){return eg(e)&&(r=e.length>500?eC(e,500):e),this}]]).setUA(r),this}eT.VERSION="2.0.0-beta.3",eT.BROWSER=eh([c,h,l,u]),eT.CPU=eh([f]),eT.DEVICE=eh([d,p,u,m,g,b,v,y,x]),eT.ENGINE=eT.OS=eh([c,h])}}]);
//# sourceMappingURL=365-f5b4a61e0ca01df2.js.map
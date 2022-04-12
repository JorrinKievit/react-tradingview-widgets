(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[572],{8895:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return s}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i=a(492),o=["components"],p={sidebar_position:15},m={unversionedId:"components/Screener",id:"components/Screener",isDocsHomePage:!1,title:"Screener Widget",description:"This is the React component for the Screener Widget",source:"@site/docs/components/Screener.md",sourceDirName:"components",slug:"/components/Screener",permalink:"/react-ts-tradingview-widgets/docs/components/Screener",editUrl:"https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/docs/components/Screener.md",version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Forex Heat Map Widget",permalink:"/react-ts-tradingview-widgets/docs/components/ForexHeatMap"},next:{title:"Cryptocurrency Market Widget",permalink:"/react-ts-tradingview-widgets/docs/components/CryptocurrencyMarket"}},d=[{value:"Example",id:"example",children:[]},{value:"Used Private types",id:"private-types",children:[]},{value:"Used Public types",id:"public-types",children:[]},{value:"Properties",id:"properties",children:[]}],u={toc:d};function s(t){var e=t.components,a=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is the React component for the ",(0,l.kt)("a",{parentName:"p",href:"https://www.tradingview.com/widget/screener/"},"Screener Widget")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'import { Screener } from "react-ts-tradingview-widgets";\n\n<Screener colorTheme="dark" width="100%" height={300}></Screener>\n')),(0,l.kt)(i.o4,{colorTheme:"dark",width:"100%",height:300,mdxType:"Screener"}),(0,l.kt)("h2",{id:"private-types"},"Used Private types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DefaultColumnForexOrCrypto"),(0,l.kt)("td",{parentName:"tr",align:null},"overview / performance / oscillators / moving_averages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DefaultColumnCountries"),(0,l.kt)("td",{parentName:"tr",align:null},"overview / performance / valuation / dividends / margins / income_statement / balance_sheet / oscillators / moving_averages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DefaultScreenForexOrCrypto"),(0,l.kt)("td",{parentName:"tr",align:null},"general / top_gainers / top_losers / ath / atl / above_52wk_high / below_52wk_low / monthly_high / monthly_low / most_volatile / overbought / oversold / outperforming_SMA50 / underperforming_SMA50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DefaultScreenCountries"),(0,l.kt)("td",{parentName:"tr",align:null},"most_capitalized / volume_leaders / top_gainers / top_losers / ath / atl / high_dividend / above_52wk_high / below_52wk_low / most_volatile / unusual_volume / overbought / oversold / outperforming_SMA50 / underperforming_SMA50 / earnings_this_week")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MarketCountries"),(0,l.kt)("td",{parentName:"tr",align:null},"america / australia / canada / egypt / germany / india / israel / italy / luxembourg / poland / sweden / turkey / uk / vietnam")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MarketForexOrCrypto"),(0,l.kt)("td",{parentName:"tr",align:null},"forex / crypto")))),(0,l.kt)("h2",{id:"public-types"},"Used Public types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ColorTheme"),(0,l.kt)("td",{parentName:"tr",align:null},"light / dark")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("p",null,"The defaultColumn and defaultScreen properties are different based on the choice of market. So if the market is one of MarketCountries, the choices for defaultColumn and defaultScreen are DefaultColumnCountries and DefaultScreenCountries. The same applies to MarketForexOrCrypto."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"number/string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1100"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets a static width on the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"number/string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"512"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets a static height on the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autosize"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the width and height to 100%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"market"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#private-types"},(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"MarketCountries"))," or ",(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"MarketForexOrCrypto")))),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"forex"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets default exchange")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultColumn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#private-types"},(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"DefaultColumnCountries"))," or ",(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"DefaultColumnForexOrCrypto")))),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"overview"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets default columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultScreen"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#private-types"},(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"DefaultScreenCountries"))," or ",(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"DefaultScreenForexOrCrypto")))),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"general"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets default screens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showToolbar"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets default Show top toolbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorTheme"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#public-types"},(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"ColorTheme")))),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"light"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default theme")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locale"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"en"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default locale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isTransparent"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Transparent background for component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"largeChartUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Make widget redirect to larger chart")))))}s.isMDXComponent=!0}}]);
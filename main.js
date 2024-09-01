'use strict';const personalCommands={gd_personal:{name:"Google Drive - Personal",url:"https://drive.google.com/drive/u/0/my-drive",category:"Personal"},gm_personal:{name:"Gmail - Personal",url:"https://mail.google.com/mail/u/0/#inbox",category:"Personal"}},miscCommands={g:{name:"Google",url:"https://google.com/",searchurl:"https://www.google.com/search?q=",category:"Misc"},gm:{name:"Gmail",url:"https://mail.google.com/mail/u/1/#inbox",category:"Misc"},gd:{name:"Google Drive",url:"https://drive.google.com/drive/u/1/my-drive",category:"Misc"},schedule:{name:"Notion Schedule",url:"https://www.notion.so/484d0eea741c49e5a874f7ffb1dbaf87?v=2e068ad6eae54dd98e1b0b859d2e1159",category:"Misc"},yt:{name:"YouTube",url:"https://youtube.com/",searchurl:"https://www.youtube.com/results?search_query=",category:"Misc"},redd:{name:"Reddit",url:"https://reddit.com/",searchurl:"https://www.reddit.com/search?q=",category:"Misc"},linked:{name:"Linkedin",url:"https://linkedin.com/",category:"Misc"},ig:{name:"Instagram",url:"https://instagram.com/",searchurl:"https://instagram.com/",category:"Misc"},nflix:{name:"Netflix",url:"https://netflix.com/",searchurl:"https://www.netflix.com/search?q=",category:"Misc"},wiki:{name:"Wikipedia",url:"https://en.wikipedia.org",searchurl:"https://en.wikipedia.org/wiki/",category:"Misc"},lc:{name:"Leetcode",url:"https://leetcode.com/problemset/",category:"Misc"},leaf:{name:"Overleaf",url:"https://www.overleaf.com/project",category:"Misc"},DEFAULT:{name:"Default - Google Search",url:"https://google.com/",searchurl:"https://www.google.com/search?q=",category:"Misc"}},cs4414={site:"https://www.cs.cornell.edu/courses/cs4414/2024fa/",forum:"https://edstem.org/us/courses/64297/discussion/",submissions:"https://www.gradescope.com/courses/821661"},cs4450={site:"https://www.racheesingh.com/computernetworks-fa24/",forum:"https://edstem.org/us/courses/62063/discussion/",submissions:"https://www.gradescope.com/courses/846995"},math3110={site:"https://canvas.cornell.edu/courses/65908",forum:"https://edstem.org/us/courses/64008/discussion/",submissions:"https://www.gradescope.com/courses/837146"},engrd2700={site:"https://canvas.cornell.edu/courses/66312",forum:"https://edstem.org/us/courses/65401/discussion/",submissions:"https://www.gradescope.com/courses/848908"},engrc3500={site:"https://canvas.cornell.edu/courses/66229",forum:"https://canvas.cornell.edu/courses/66229",submissions:"https://canvas.cornell.edu/courses/66229"},cs3410={site:"https://sampsyo.github.io/new3410/course/schedule.html",forum:"https://edstem.org/us/courses/62146/discussion/",submissions:"https://www.myworkday.com/cornell/d/home.htmld?maskContext=43723%241"},classCommands={cs4414_site:{name:"CS 4414 Site",url:cs4414.site,category:"Class"},cs4414_forum:{name:"CS 4414 Forum",url:cs4414.forum,category:"Class"},cs4414_submissions:{name:"CS 4414 Submissions",url:cs4414.submissions,category:"Class"},cs4450_site:{name:"CS 4450 Site",url:cs4450.site,category:"Class"},cs4450_forum:{name:"CS 4450 Forum",url:cs4450.forum,category:"Class"},cs4450_submissions:{name:"CS 4450 Submissions",url:cs4450.submissions,category:"Class"},math3110_site:{name:"MATH 3110 Site",url:math3110.site,category:"Class"},math3110_forum:{name:"MATH 3110 Forum",url:math3110.forum,category:"Class"},math3110_submissions:{name:"MATH 3110 Submissions",url:math3110.submissions,category:"Class"},engrd2700_site:{name:"ENGRD 2700 Site",url:engrd2700.site,category:"Class"},engrd2700_forum:{name:"ENGRD 2700 Forum",url:engrd2700.forum,category:"Class"},engrd2700_submissions:{name:"ENGRD 2700 Submissions",url:engrd2700.submissions,category:"Class"},engrc3500_site:{name:"ENGRG 3500 Site",url:engrc3500.site,category:"Class"},engrc3500_forum:{name:"ENGRG 3500 Forum",url:engrc3500.forum,category:"Class"},engrc3500_submissions:{name:"ENGRG 3500 Submissions",url:engrc3500.submissions,category:"Class"},cs3410_site:{name:"CS 3410 Site",url:cs3410.site,category:"Class"},cs3410_forum:{name:"CS 3410 Forum",url:cs3410.forum,category:"Class"},cs3410_submissions:{name:"CS 3410 Submissions",url:cs3410.submissions,category:"Class"}},COMMANDS={...personalCommands,...miscCommands,...classCommands},viewHelpPage=function(){const a=Object.keys(COMMANDS).map(a=>{const b=COMMANDS[a];return{name:b.name,url:"<a href=\""+b.url+"\">"+b.url+"</a>",command:a,category:b.category}});$("#help-table").DataTable({data:a,columns:[{data:"command",title:"Command"},{data:"name",title:"Name"},{data:"url",title:"URL"},{data:"category",title:"Category"}],order:[[3,"asc"]],paging:!1})},redirect=async function(a){await window.location.replace(a)},bunnylol=async function(a){let b=[];if(a.startsWith("$")?(b=a.split(/[ $+]/g),b[0]="$",""===b[1]&&(b=["$"])):b=a.split(/[ +]/g),0<b.length){const c=b[0].endsWith(".")?b[0].substring(0,b[0].length-1).toLowerCase():b[0].toLowerCase();if(c in COMMANDS){const d=COMMANDS[c],e=new URL(d.url).protocol;if("https:"!==e&&"http:"!==e&&viewHelpPage(),d.searchurl&&1!==b.length){const b="$"===c?c.length:c.length+1;return await redirect(`${d.searchurl}${encodeURIComponent(a.substr(b))}`),!0}return await redirect(d.url),!0}}return!1},currCmd=new URL(window.location.href).searchParams.get("search")??"help";switch(currCmd){case"help":viewHelpPage();break;default:bunnylol(currCmd).then(a=>{!a&&COMMANDS.DEFAULT.searchurl&&redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`)}).catch(a=>{console.log(a)});}
---
layout: null
permalink: Two-Unification
---

<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title>Two Kinds of Unification.md</title><link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext' rel='stylesheet' type='text/css' /><style type='text/css'>html {overflow-x: initial !important;}:root { --bg-color:  #ffffff; --text-color:  #333333; --code-block-bg-color: inherit; }
html { font-size: 14px; background-color: var(--bg-color); color: var(--text-color); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
body { margin: 0px; padding: 0px; height: auto; bottom: 0px; top: 0px; left: 0px; right: 0px; font-size: 1rem; line-height: 1.42857143; overflow-x: hidden; background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; background-position: inherit inherit; background-repeat: inherit inherit; }
a:active, a:hover { outline: 0px; }
.in-text-selection, ::selection { background-color: rgb(181, 214, 252); text-shadow: none; background-position: initial initial; background-repeat: initial initial; }
.for-image #write { padding-left: 8px; padding-right: 8px; }
body.typora-export { padding-left: 30px; padding-right: 30px; }
@media screen and (max-width: 500px) { 
  body.typora-export { padding-left: 0px; padding-right: 0px; }
  .CodeMirror-sizer { margin-left: 0px !important; }
  .CodeMirror-gutters { display: none !important; }
}
.typora-export #write { margin: 0px auto; }
#write > p:first-child, #write > ul:first-child, #write > ol:first-child, #write > pre:first-child, #write > blockquote:first-child, #write > div:first-child, #write > table:first-child { margin-top: 30px; }
#write li > table:first-child { margin-top: -20px; }
img { max-width: 100%; vertical-align: middle; }
input, button, select, textarea { color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; }
input[type="checkbox"], input[type="radio"] { line-height: normal; padding: 0px; }
::before, ::after, * { box-sizing: border-box; }
#write p, #write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write div, #write pre { width: inherit; }
#write p, #write h1, #write h2, #write h3, #write h4, #write h5, #write h6 { position: relative; }
h1 { font-size: 2rem; }
h2 { font-size: 1.8rem; }
h3 { font-size: 1.6rem; }
h4 { font-size: 1.4rem; }
h5 { font-size: 1.2rem; }
h6 { font-size: 1rem; }
p { -webkit-margin-before: 1rem; -webkit-margin-after: 1rem; -webkit-margin-start: 0px; -webkit-margin-end: 0px; }
.typora-export p { white-space: normal; }
.mathjax-block { margin-top: 0px; margin-bottom: 0px; -webkit-margin-before: 0rem; -webkit-margin-after: 0rem; }
.hidden { display: none; }
.md-blockmeta { color: rgb(204, 204, 204); font-weight: bold; font-style: italic; }
a { cursor: pointer; }
sup.md-footnote { padding: 2px 4px; background-color: rgba(238, 238, 238, 0.701961); color: rgb(85, 85, 85); border-top-left-radius: 4px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; }
#write input[type="checkbox"] { cursor: pointer; width: inherit; height: inherit; margin: 4px 0px 0px; }
tr { break-inside: avoid; break-after: auto; }
thead { display: table-header-group; }
table { border-collapse: collapse; border-spacing: 0px; width: 100%; overflow: auto; break-inside: auto; text-align: left; }
table.md-table td { min-width: 80px; }
.CodeMirror-gutters { border-right-width: 0px; background-color: inherit; }
.CodeMirror { text-align: left; }
.CodeMirror-placeholder { opacity: 0.3; }
.CodeMirror pre { padding: 0px 4px; }
.CodeMirror-lines { padding: 0px; }
div.hr:focus { cursor: none; }
pre { white-space: pre-wrap; }
.CodeMirror-gutters { margin-right: 4px; }
.md-fences { font-size: 0.9rem; display: block; break-inside: avoid; text-align: left; overflow: visible; white-space: pre; background: var(--code-block-bg-color); position: relative !important; }
.md-diagram-panel { width: 100%; margin-top: 10px; text-align: center; padding-top: 0px; padding-bottom: 8px; overflow-x: auto; }
.md-fences .CodeMirror.CodeMirror-wrap { top: -1.6em; margin-bottom: -1.6em; }
.md-fences.mock-cm { white-space: pre-wrap; }
.show-fences-line-number .md-fences { padding-left: 0px; }
.show-fences-line-number .md-fences.mock-cm { padding-left: 40px; }
.footnotes { opacity: 0.8; font-size: 0.9rem; padding-top: 1em; padding-bottom: 1em; }
.footnotes + .footnotes { margin-top: -1em; }
.md-reset { margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: top; background-color: transparent; text-decoration: none; text-shadow: none; float: none; position: static; width: auto; height: auto; white-space: nowrap; cursor: inherit; line-height: normal; font-weight: normal; text-align: left; box-sizing: content-box; direction: ltr; background-position: initial initial; background-repeat: initial initial; }
li div { padding-top: 0px; }
blockquote { margin: 1rem 0px; }
li p, li .mathjax-block { margin: 0.5rem 0px; }
li { margin: 0px; position: relative; }
blockquote > :last-child { margin-bottom: 0px; }
blockquote > :first-child { margin-top: 0px; }
.footnotes-area { color: rgb(136, 136, 136); margin-top: 0.714rem; padding-bottom: 0.143rem; }
@media print { 
  html, body { border: 1px solid transparent; height: 99%; break-after: avoid-page; break-before: avoid-page; }
  .typora-export * { -webkit-print-color-adjust: exact; }
  h1, h2, h3, h4, h5, h6 { break-after: avoid-page; orphans: 2; }
  p { orphans: 4; }
  html.blink-to-pdf { font-size: 13px; }
  .typora-export #write { padding-left: 1cm; padding-right: 1cm; padding-bottom: 0px; break-after: avoid-page; }
  .typora-export #write::after { height: 0px; }
  @page { margin: 20mm 0mm; }
}
.footnote-line { margin-top: 0.714em; font-size: 0.7em; }
a img, img a { cursor: pointer; }
pre.md-meta-block { font-size: 0.8rem; min-height: 2.86rem; white-space: pre-wrap; background-color: rgb(204, 204, 204); display: block; overflow-x: hidden; background-position: initial initial; background-repeat: initial initial; }
p .md-image:only-child { display: inline-block; width: 100%; text-align: center; }
#write .MathJax_Display { margin: 0.8em 0px 0px; }
.mathjax-block { white-space: pre; overflow: hidden; width: 100%; }
p + .mathjax-block { margin-top: -1.143rem; }
.mathjax-block:not(:empty)::after { display: none; }
[contenteditable="true"]:active, [contenteditable="true"]:focus { outline: none; box-shadow: none; }
.task-list { list-style-type: none; }
.task-list-item { position: relative; padding-left: 1em; }
.task-list-item input { position: absolute; top: 0px; left: 0px; }
.math { font-size: 1rem; }
.md-toc { min-height: 3.58rem; position: relative; font-size: 0.9rem; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; }
.md-toc-content { position: relative; margin-left: 0px; }
.md-toc::after, .md-toc-content::after { display: none; }
.md-toc-item { display: block; color: rgb(65, 131, 196); }
.md-toc-item a { text-decoration: none; }
.md-toc-inner:hover { }
.md-toc-inner { display: inline-block; cursor: pointer; }
.md-toc-h1 .md-toc-inner { margin-left: 0px; font-weight: bold; }
.md-toc-h2 .md-toc-inner { margin-left: 2em; }
.md-toc-h3 .md-toc-inner { margin-left: 4em; }
.md-toc-h4 .md-toc-inner { margin-left: 6em; }
.md-toc-h5 .md-toc-inner { margin-left: 8em; }
.md-toc-h6 .md-toc-inner { margin-left: 10em; }
@media screen and (max-width: 48em) { 
  .md-toc-h3 .md-toc-inner { margin-left: 3.5em; }
  .md-toc-h4 .md-toc-inner { margin-left: 5em; }
  .md-toc-h5 .md-toc-inner { margin-left: 6.5em; }
  .md-toc-h6 .md-toc-inner { margin-left: 8em; }
}
a.md-toc-inner { font-size: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; }
.footnote-line a:not(.reversefootnote) { color: inherit; }
.md-attr { display: none; }
.md-fn-count::after { content: "."; }
.md-tag { opacity: 0.5; }
.md-comment { color: rgb(162, 127, 3); opacity: 0.8; font-family: monospace; }
code { text-align: left; }
h1 .md-tag, h2 .md-tag, h3 .md-tag, h4 .md-tag, h5 .md-tag, h6 .md-tag { font-weight: initial; opacity: 0.35; }
a.md-print-anchor { border: none !important; display: inline-block !important; position: absolute !important; width: 1px !important; right: 0px !important; outline: none !important; background-color: transparent !important; text-shadow: initial !important; background-position: initial initial !important; background-repeat: initial initial !important; }
.md-inline-math .MathJax_SVG .noError { display: none !important; }
.mathjax-block .MathJax_SVG_Display { text-align: center; margin: 1em 0em; position: relative; text-indent: 0px; max-width: none; max-height: none; min-height: 0px; min-width: 100%; width: auto; display: block !important; }
.MathJax_SVG_Display, .md-inline-math .MathJax_SVG_Display { width: auto; margin: inherit; display: inline-block !important; }
.MathJax_SVG .MJX-monospace { font-family: monospace; }
.MathJax_SVG .MJX-sans-serif { font-family: sans-serif; }
.MathJax_SVG { display: inline; font-style: normal; font-weight: normal; line-height: normal; zoom: 90%; text-indent: 0px; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0px; min-height: 0px; border: 0px; padding: 0px; margin: 0px; }
.MathJax_SVG * { transition: none; }
.md-diagram-panel > svg { max-width: 100%; }
[lang="flow"] svg, [lang="mermaid"] svg { max-width: 100%; }


@include-when-export url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);

/**
 * css forked from https://github.com/GitbookIO/gitbook 
 * www.gitbook.com
 * Apache License
 * https://github.com/GitbookIO/gitbook/blob/master/LICENSE
 **/

@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    src: local('Open Sans Regular'),url('file:///Users/David/Library/Application%20Support/abnerworks.Typora/themes/github/400.woff') format('woff')
}

@font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: normal;
    src: local('Open Sans Italic'),url('file:///Users/David/Library/Application%20Support/abnerworks.Typora/themes/github/400i.woff') format('woff')
}

@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    src: local('Open Sans Bold'),url('file:///Users/David/Library/Application%20Support/abnerworks.Typora/themes/github/700.woff') format('woff')
}

@font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: bold;
    src: local('Open Sans Bold Italic'),url('file:///Users/David/Library/Application%20Support/abnerworks.Typora/themes/github/700i.woff') format('woff')
}

html {
    font-size: 16px;
}

body {
    font-family: "Open Sans","Clear Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    color: rgb(51, 51, 51);
    line-height: 1.6;
}

#write{
    max-width: 700px;
  	margin: 0 auto;
  	padding: 20px 30px 40px 30px;
	padding-top: 20px;
    padding-bottom: 100px;
    border-right-style: solid;
    border-right-width: 2px;
    border-right-color: #DEDBDB;
}

#write > ul:first-child,
#write > ol:first-child{
    margin-top: 30px;
}

body > *:first-child {
    margin-top: 0 !important;
}
body > *:last-child {
    margin-bottom: 0 !important;
}
a {
    color: #4183C4;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.4;
    cursor: text;
}
h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
    /*background: url("file:///Users/David/Library/Application%20Support/images/modules/styleguide/para.png") no-repeat 10px center;*/
    text-decoration: none;
}
h1 tt,
h1 code {
    font-size: inherit;
}
h2 tt,
h2 code {
    font-size: inherit;
}
h3 tt,
h3 code {
    font-size: inherit;
}
h4 tt,
h4 code {
    font-size: inherit;
}
h5 tt,
h5 code {
    font-size: inherit;
}
h6 tt,
h6 code {
    font-size: inherit;
}
h1 {
    padding-bottom: .3em;
    font-size: 2.25em;
    line-height: 1.2;
    border-bottom: 1px solid #eee;
}
h2 {
   padding-bottom: .3em;
    font-size: 1.75em;
    line-height: 1.225;
    border-bottom: 1px solid #eee;
}
h3 {
    font-size: 1.5em;
    line-height: 1.43;
}
h4 {
    font-size: 1.25em;
}
h5 {
    font-size: 1em;
}
h6 {
   font-size: 1em;
    color: #777;
}
p,
blockquote,
ul,
ol,
dl,
table{
    margin: 0.8em 1.5em;
}
li>ol,
li>ul {
    margin: 0 0;
}
hr {
    height: 4px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
    overflow: hidden;
    box-sizing: content-box;
    border-bottom: 1px solid #ddd;
}

body > h2:first-child {
    margin-top: 0;
    padding-top: 0;
}
body > h1:first-child {
    margin-top: 0;
    padding-top: 0;
}
body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
}
body > h3:first-child,
body > h4:first-child,
body > h5:first-child,
body > h6:first-child {
    margin-top: 0;
    padding-top: 0;
}
a:first-child h1,
a:first-child h2,
a:first-child h3,
a:first-child h4,
a:first-child h5,
a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
}
h1 p,
h2 p,
h3 p,
h4 p,
h5 p,
h6 p {
    margin-top: 0;
}
li p.first {
    display: inline-block;
}
ul,
ol {
    padding-left: 30px;
}
ul:first-child,
ol:first-child {
    margin-top: 0;
}
ul:last-child,
ol:last-child {
    margin-bottom: 0;
}
blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;
}
blockquote p {
    margin: 0.8em 0;
}
blockquote blockquote {
    padding-right: 0;
}
table {
    padding: 0;
    word-break: initial;
}
table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0;
}
table tr:nth-child(2n) {
    background-color: #f8f8f8;
}
table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
}
table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
}
table tr th:first-child,
table tr td:first-child {
    margin-top: 0;
}
table tr th:last-child,
table tr td:last-child {
    margin-bottom: 0;
}

.CodeMirror-gutters {
    border-right: 1px solid #ddd;
}

.md-fences,
code,
tt {
    border: 1px solid #ddd;
    background-color: #f8f8f8;
    border-radius: 3px;
    padding: 0;
    font-family: Consolas, "Liberation Mono", Courier, monospace;
    padding: 2px 4px 0px 4px;
    font-size: 0.9em;
}

.md-fences {
    margin-bottom: 15px;
    margin-top: 15px;
    padding: 0.2em 1em;
    padding-top: 8px;
    padding-bottom: 6px;
}
.task-list{
	padding-left: 0;
}

.task-list-item {
	padding-left:32px;
}

.task-list-item input {
  top: 3px;
  left: 8px;
}

@media screen and (min-width: 914px) {
    /*body {
        width: 854px;
        margin: 0 auto;
    }*/
}
@media print {
    html {
        font-size: 13px;
    }
    table,
    pre {
        page-break-inside: avoid;
    }
    pre {
        word-wrap: break-word;
    }
}

.md-fences {
	background-color: #f8f8f8;
}
#write pre.md-meta-block {
	padding: 1rem;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f7f7f7;
    border: 0;
    border-radius: 3px;
    color: #777777;
    margin-top: 0 !important;
}

.mathjax-block>.code-tooltip {
	bottom: .375rem;
}

p + .mathjax-block { margin: -1rem; }

#write>h3.md-focus:before{
	left: -1.5625rem;
	top: .375rem;
}
#write>h4.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
#write>h5.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
#write>h6.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
.md-image>.md-meta {
    border: 1px solid #ddd;
    border-radius: 3px;
    font-family: Consolas, "Liberation Mono", Courier, monospace;
    padding: 2px 4px 0px 4px;
    font-size: 0.9em;
    color: inherit;
}

.md-tag{
	color: inherit;
}

.md-toc { 
    margin-top:20px;
    padding-bottom:20px;
}

#typora-quick-open {
    border: 1px solid #ddd;
    background-color: #f8f8f8;
}

#typora-quick-open-item {
    background-color: #FAFAFA;
    border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;
    border-style: solid;
    border-width: 1px;
}

#md-notification:before {
    top: 10px;
}

/** focus mode */
.on-focus-mode blockquote {
    border-left-color: rgba(85, 85, 85, 0.12);
}

header, .context-menu, .megamenu-content, footer{
    font-family: "Segoe UI", "Arial", sans-serif;
}



    #topBtn {
    display: none;
    /* position: sticky; */
    margin-left: 669px;
    /* top: 70%; */
    margin-top: 5pt;
    z-index: 99;
    font-size: 24px;
    border: none;
    outline: none;
    background-color: #DEDBDB;
    color: white;
    cursor: pointer;
    padding: 7px;
    border-radius: 4px;
    line-height: 0px;
}

#backBtn {
    display: block;
    /* position: sticky; */
    margin-left: 669px;
    /* top: 75%; */
    z-index: 99;
    font-size: 24px;
    border: none;
    outline: none;
    background-color: #DEDBDB;
    color: white;
    cursor: pointer;
    padding: 7px;
    border-radius: 4px;
    line-height: 0px;
}

</style>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/solid.css" integrity="sha384-v2Tw72dyUXeU3y4aM2Y0tBJQkGfplr39mxZqlTBDUZAb9BGoC40+rdFCG0m10lXk" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/fontawesome.css" integrity="sha384-q3jl8XQu1OpdLgGFvNRnPdj5VIlCvgsDQTQB6owSOHWlAurxul7f+JpUOVdAiJ5P" crossorigin="anonymous">
</head>
<body class='typora-export' >

    <script>
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
</script>
<div  id='write'  class = 'is-mac'>

    <div style="position: sticky; top: 70%; white-space: normal">
<button onclick="location.href='{{ site.url }}/Blog';" id="backBtn" title="Back to blog">
<i class="fas fa-step-backward"></i>
</button>
    <button onclick="topFunction()" id="topBtn" title="Go to top">
<i class="fas fa-arrow-up"></i>
</button>
</div>
<h1><a name='header-n0' class='md-header-anchor '></a>Two Kinds of Unification</h1><p>This article will illustrate the two possible meaning of unification in Physics.</p><h4><a name='header-n4' class='md-header-anchor '></a>Before Proceeding …</h4><p>The following illustration can be vital to this article and thus it is strongly suggested to go over before you decide to proceed to the next section.</p><p>All the ideas in this articles are philosophical thoughts of the unification of physical theories, and will not be illustrated in an scientific style of reasoning and writing. Examples are given in an heuristic way and may not be mathematically rigorous.</p><p>This article only concerns the fundamental physical theories and their unification. Theories like Thermodynamics as well as other phenomenological theories are not within the scope of discussion. The fundamental physical theories require methodologies quite different from the intuitive ones. Therefore, if you are not familiar with the way of constructing fundamental theories, you may find some contents of this article unacceptable.</p><h4><a name='header-n11' class='md-header-anchor '></a>The Idea of Unification</h4><p>The idea of unification of physical theories can date back to 19th century, when great physicist Clerk Maxwell developed a unified theory of electric and magnetic field. This was the first time when physicists realised that it is possible to construct a unified framework for seemingly irrelevant theories. The theory finally evolved into four equation that dominates all electromagnetic phenomena and people are amazed by the beauty and elegance of the unification.</p><p>Later on, Einstein put forward his General Relativity, a wonderful theory of gravity. A few years later, Kaluza and Klein discovered that it is possible to unify the General Relativity and the Electrodynamics into a unified theory (called Kaluza-Klein theory). These successes really ignited the passion of constructing more unified theories.</p><p>The progress of Particle Physics made us aware of the strong and weak force. And physicists started to build up further unified theories. The birth of Yang-Mills gauge theory framework allowed us to construct unification as electroweak theory and the standard model of Particle Physics.</p><p>All the successful experience about unification strongly points to a final unified theory of all the discovered interactions. Therefore, string theory was introduced in an attempt to describe the four known interactions as a whole — although not yet verified.</p><h4><a name='header-n20' class='md-header-anchor '></a>The Reduction of Complexity</h4><p>From intuition, the unification should reduce the complexity of the theories, since it merges the two theories into one theory without reducing the applicability. Usually, this is due to the fact that a unified theory extracts the common part of different theories and thus gains the applicability of all these theories — as it will degenerates into the original theories if we impose their own applicable conditions. Take Electromagnetic theory as an example. Electromagnetics is the unified theory of Electrics and Magnetics. When we impose the condition that the fields are static and there are no magnetic field, the Electromagnetic theory will degenerate into Electrostatic theory, just as what is expected.</p><p>According to this reasoning, a unified theory of all the interactions should be the simplest one, since it is the common part of the theories of respective interactions. Also, it should also be the most universal one, as it clearly has the capability of describing all the known interactions.</p><p>Is that real? According to the above reasoning, the Kaluza-Klein theory or gauge field theory should be simpler than the Electromagnetic theory. But as a matter of fact, the KK theory will need Differential Geometry to back it up and the gauge field theory even requires Fibre Bundle theory, which none of these are necessary for a simple Electromagnetic theory. In this case, we discovered that our intuition fails at this time. A clearer investigation becomes indispensable.</p><h4><a name='header-n27' class='md-header-anchor '></a>Formal Axiomatic Interpretation</h4><p>Let’s suppose all mathematically rigorous physical theories can be written as a formal axiomatic system. Similar to the propositional logical system, we have the axioms separated to both <em>logical axioms</em> and <em>non-logical axioms</em>, which are now provided by a set of physical constructions and underlying Mathematics respectively. Mathematics is the same for all physical theories, and thus the set of physical constructions become the only difference of different physical theories. Denote the set by <em>S</em> In this case, the complexity and applicability of a physical theory can be characterised by the cardinality of set <em>S</em>.</p><p>This modelling can be non-trivial. Consider the following example. We now have a construction (called construction A) which introduces Schrodinger equation into set <em>S</em> (and suppose there has been enough axioms in <em>S</em> to make this possible). Also, there is another construction (called construction B) which introduces time independent Schrodinger equation into set <em>S</em>. Then if we already have construction A, construction B will not bring any new element of set <em>S</em> since the TISE is merely the logical consequence of the general Schrodinger equation. Therefore, the set <em>S</em> also requires that none of its element will be the logical consequence of the other elements.</p><p>The unification of theories is then modelled by a formal union (which includes the elimination of possible logical consequence) of the physical constructions. Hence, if there are any overlap constructions, or any constructions of one theory being the logical consequence of the other theories, the complexity will decrease.</p><p>Take the unification of Electromagnetics and the General Relativity for example. The two theories both require a Lorentzian manifold as spacetime background. Thus, when they are combined and form KK theory, the cardinality of <span class="MathJax_Preview"></span><span class="MathJax_SVG" id="MathJax-Element-1-Frame" tabindex="-1" style="font-size: 100%; display: inline-block;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="4.214ex" height="2.344ex" viewBox="0 -806.1 1814.5 1009.2" role="img" focusable="false" style="vertical-align: -0.472ex;"><defs><path stroke-width="1" id="E1-MJMATHI-53" d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"></path><path stroke-width="1" id="E1-MJMAIN-4B" d="M128 622Q121 629 117 631T101 634T58 637H25V683H36Q57 680 180 680Q315 680 324 683H335V637H313Q235 637 233 620Q232 618 232 462L233 307L379 449Q425 494 479 546Q518 584 524 591T531 607V608Q531 630 503 636Q501 636 498 636T493 637H489V683H499Q517 680 630 680Q704 680 716 683H722V637H708Q633 633 589 597Q584 592 495 506T406 419T515 254T631 80Q644 60 662 54T715 46H736V0H728Q719 3 615 3Q493 3 472 0H461V46H469Q515 46 515 72Q515 78 512 84L336 351Q332 348 278 296L232 251V156Q232 62 235 58Q243 47 302 46H335V0H324Q303 3 180 3Q45 3 36 0H25V46H58Q100 47 109 49T128 61V622Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#E1-MJMATHI-53" x="0" y="0"></use><g transform="translate(613,-150)"><use transform="scale(0.707)" xlink:href="#E1-MJMAIN-4B" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#E1-MJMAIN-4B" x="778" y="0"></use></g></g></svg></span><script type="math/tex" id="MathJax-Element-1">S_\mathrm{KK}</script> will be reduced by (at least) one. Therefore, in the sense of complexity of physical theories, there will be</p><p>Electromagnetics ~ General Relativity &lt; Kaluza-Klein theory &lt; Electromagnetics + General Relativity</p><p>It is the last inequality that makes us feel that the unified theory will be simpler. However, if we look at the first inequality, it is not hard to find out that the unified theory will be more complicated than any of the original theories. Unification never brings about simplicity. In fact, it is understandable that a theory of more applicability should never be simpler than that of less, in the view of logic.</p><h4><a name='header-n40' class='md-header-anchor '></a>How about … the Common Part?</h4><p>So why we conclude before that unification leads to simplicity before? Trace back and we find that the critical point is that we make the unification as the common part of the original theories, since the common part of the theory will be both applicable to the range of original theories. Yes, this is reasonable though, except that this is totally another kind of unification — this is the <strong>formal intersection</strong> instead of <strong>formal union</strong> of the original theories. Clearly, the intersection of Electromagnetics and General Relativity will be surely simpler than any of them — but, that theory will never be KK theory.</p><p>The very reason for the vague of unification lies on our intuitive imagination of the logical sketch of the process. In our intuition, we always think that unification of theories is to find out a theory which, when imposing corresponding conditions, will go back to the respective original theory. Under this pattern, the following two examples are both unification:</p><p><strong>Example 1.</strong> Electromagnetics is the unification of Electrics and Magnetics, since when the magnetic field is forced to be zero, it returns to Electrics and similar reasoning also holds for Magnetics.</p><p><strong>Example 2.</strong> Construction of Lorentzian spacetime is within the unification of Electromagnetics and General Relativity, since when adding the Maxwell’s equation, it will become Electromagnetics; and when adding equation of gravitational field, it will become General Relativity.</p><p>However, there are significant difference between these two unifications, since the former one provides a theory which is a logical consequence of the unification; the latter one generates entirely new theories after imposing new conditions.</p><h4><a name='header-n51' class='md-header-anchor '></a>Which One should We Care?</h4><p>Obviously, the academic society is seeking for the unified theory of the first kind. As is illustrated, a unified theory should be capable to describe all the know interactions as a whole.</p><p>So what about the unification of the second kind? Well, it is not hard to imagine that the final result of the second kind will point to the very basic requirement of all the physical theory — this is nothing but the <strong>Lagrange formalism</strong> of physical theories, which has been studied thoroughly by physicists. One will find more illustrations in <a href='{{ site.url }}/assets/Structure%20of%20Physics%20-%20featured%20-%2020160716.pdf'>this article</a>.</p><i style="text-align: right; display: inherit; margin-top: 2em"> — June 6, 2017 at Manchester</i></div></body>
</html>
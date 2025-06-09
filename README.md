# Carbon CXML
This is carbon cxml.A lightweight dom and obj based framework  render in xml in side js.It is near syntex to jsx.But some different between them.CXML render cxml js to dom then run in browser.It is fast then react and others framework.
# Use
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="theme-color" content="#317EFB" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="CXML Framework" />
  <meta name="description" content="CXML Framework Application" />
  
  <title>CXML Framework</title>

  <!-- Manifest JSON -->
  <link rel="manifest" href="manifest.json" />

  <!-- Favicon (optional) -->
  <link rel="icon" href="icons/favicon.png" type="image/png" />

  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/beer.css" />

  <!-- Disable text selection -->
  <style>
    body {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: #F7F7F7;
    }
  </style>

  <!-- Disable text/context interaction -->
  <script>
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
    document.addEventListener('selectstart', function(e) {
      e.preventDefault();
    });
    document.addEventListener('dblclick', function(e) {
      e.preventDefault();
    });
  </script>

  <!-- Module Scripts -->
  <script src="css/beer.js" type="module"></script>
</head>
<body>
  <div id="app"></div>

  <!-- Application Scripts -->
  <script src="js/cxml.js"></script>
  <script src="js/config.js"></script>
  <script src="js/carbon.utility.js"></script>
  <script src="user/appFunction.js" defer></script>
</body>
</html>

```
# Use of JS
app.js example
```JAVASCRIPT
// example of <name/>
const userName="xyz";
const userName_tag=(
  <b>xyz</b>
);
// obj will not start const,let,var others
//only valid name.do not use any datatype in declar obj variable.below example given.
db={
  userName:"xyz",
  more:{
    id:12345
  }
}
const useOfComp_1=(
  <div class="padding">
    <h6>Component Example 1</h6>
    <p>string comp:<userName/></p>
    
   <p> tag comp:<userName_tag/></p>
   <ul>
     <li>userName:<db.userName/></li>
     <li>Id:<db.more.id/></li>
   </ul>
   
  </div>
);
//onclick example
const onclickExample=(
  <div class="padding">
    <h6>Click event</h6>
    <button onclick={clickIt}>Click</button>
  </div>
);
const useOfStyle=(
 
    <div class="padding">
      <h6>Use of Style</h6>
      <button style={{
        width:"auto",
        height:"40px",
        background:"tomato",
      }}>Button With style
        </button>
    </div>
  
);
function link(obj){
  return `<a class="link" href="${obj.link}">${obj.text}</a>`;
}
function listItem(obj){
  return `
  <li>
  <div>
  <button class="transparent circle">
  <i>${obj.more.icon}</i>
  </button>
  </div>
  <div class="max">
  <h6 class="small">${obj.title}</h6>
  <span>${obj.subTitle}</span>
  </div>
  <div></div>
  </li>
  `;
}
const useOfFunctionComp=(
  <div class="padding">
    <h6>Use of Function Based Component</h6>
    <ul>
      <li>No Nested:
      <link config={{
        text:"google",
        link:"google.com"
      }}/>
      </li>
    </ul>
    <h6>Nested obj function Com</h6>
    <ul class="list">
      <listItem config={{
        title:"Title",
        subTitle:"This is subtitle",
        more:{
          icon:"person"
        }
        
      }}/>
    </ul>
  </div>
);
const app=(
 <div>
   {/*use of comp_1*/}
   <useOfComp_1/>
   {/*use of click ex*/}
   <onclickExample/>
   {/* use of style*/}
   <useOfStyle/>
   {/*use of function based component*/}
   <useOfFunctionComp/>
 </div>
);
```
**Cautiou** Your function script will write user/appFunction.js
and use this
```XML
<script src="your function file"defer></script>
```
## Support Framework
- Carbon Utility Js
- Carbon DOM
- Carbon Json Parser
- Carbon Material Design
- Carbon Web ToolKit
- Others all type of js framework
- Others all css framework

[About Structure/ গঠন সম্পর্কে জানতে](DOCS.md)
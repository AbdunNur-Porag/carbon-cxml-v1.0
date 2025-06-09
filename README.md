# Carbon CXML
This is carbon cxml.A lightweight dom and obj based framework  render in xml in side js.It is near syntex to jsx.But some different between them.
### বাংলা
কর্বন cxml এটি কর্বনের তৈরি করা dom এবং obj কে jsx এ  render কর।
# Use
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  
  <title>CXML Framework</title>
  <style>
  /* Disable text selection only */
  body {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* IE/Edge */
    user-select: none;         /* Standard syntax */
    /* Keep pointer events enabled for interaction */
  }
</style>

<script>
  // Disable context menu (long press/copy-paste menu)
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Prevent text selection start (drag select)
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });

  // Optional: Disable double-tap to select (common on mobile)
  document.addEventListener('dblclick', function(e) {
    e.preventDefault();
  });
</script>
<!--css files-->
</head>
<body>
  <div id="app"></div>

  <script src="js/cxml.js"></script>
  <script src="js/carbon.utility.js"></script>
  <script src="user/appFunction.js"defer></script>
  <!--js file-->
</body>
</html>
```
# Use of JS
app.js example
```JAVASCRIPT

function link(obj){
  const link=`
  <a href="${obj.link}">
  ${obj.attrs.text}
  </a>
  `
  return link;
}

const name = (
  <div>
    <button onclick={checkIt}>Check</button>
    <div style={{
      fontSize:"20px",
      borderRadius: "30px",
      color:"red"
    }}>
      Hello from external file!
    </div>
  </div>
);

const name_2 = (
  <div>
   <name/>
  
    <button>
    how are you
    </button>
    <br></br>
    {/*Link Example*/}
    <link config={{
      link:"goohle.com",
      attrs:{
      text:"go google"
      }
    }}/>
  
  
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
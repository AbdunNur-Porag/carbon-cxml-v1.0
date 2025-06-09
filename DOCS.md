# Structure বা গঠন

```JAVASCRIPT
{/*COMMENTS*/}  //USE OF COMMENTS বা কমেন্ট ব্যাবহার
const name=(..tag..) 
const others=(...tag...<name/>)
style={{obj}}
config={{obj}}//nested obj support
onclick={name}
const name="" 
</name>
```
## Use of style
```JAVASCRIPT
const box=(
  <div style={{
    width:"100px",
    height:"100px",
    backgroundColor:"tomato",
    fontColor:"white",
  }}>
  Here use sryle
  </div>

);

```
## Use of config
```JAVASCRIPT
function link(obj){
  const link=`
  <a href="${obj.link}">${obj.text}</a>
  `;
  
const box=(
  <div>
  <h1>Here is link</h2>
  <link config={{
    link:"www.google.com",
    text:"Go Google",
  }}/>
  </div>
);
}
```


## Use of render
```JAVASCRIPT

render(filename,varname)
//var name start with const must.
```
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
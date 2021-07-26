var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,l,n)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n;import"./vendor.0d5e54d3.js";import{N as a}from"./mdx-react.modern.650372c4.js";const i="Small margins make the difference",r="Daniel Sinnott",s=14,p=["Monthly Challenge","Technical","March","UI"],h="Sun, 1st Apr 2018",g=new Date(1522621406666);function d(e){var i=e,{components:r}=i,s=((e,o)=>{var a={};for(var i in e)l.call(e,i)&&o.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&t)for(var i of t(e))o.indexOf(i)<0&&n.call(e,i)&&(a[i]=e[i]);return a})(i,["components"]);return a("wrapper",((e,a)=>{for(var i in a||(a={}))l.call(a,i)&&o(e,i,a[i]);if(t)for(var i of t(a))n.call(a,i)&&o(e,i,a[i]);return e})({components:r},s),a("p",null,"My goal for this month was to fix some small UI/UX issues that I noticed from interacting with the\nblog:"),a("ul",null,a("li",{parentName:"ul"},"The navigation bar needs to be personalised"),a("li",{parentName:"ul"},"Each of these blogs are written in [Markdown], and it's a bit annoying to have to save the blog\npost before I can view how it will look.")),a("h2",null,"Side Navigation"),a("h3",null,"Old"),a("p",null,"The old side navigation needed to be personalised. There's quite a lot history in the side nav. It\nwas originally built following an ",a("a",{href:"https://developers.google.com/web/fundamentals/architecture/app-shell",parentName:"p"},"App Shell")," tutorial. The side nav then transformed multiple times\ndepending on the technology I was using at the time. Beginning with a handlebars based app, which\nthen was converted to a PolymerJS app & now finally built in React. The App Shell title & colourful\nimage are hangovers from the original side nav until I was fully decided on what should be placed\nthere."),a("p",null,a("img",{src:"https://i.imgur.com/NS5tOp3.png",alt:"Old Bloglist Page",title:"Old bloglist page",parentName:"p"})),a("h3",null,"New"),a("p",null,"The new side nav is much cleaner & personalised for myself. Although the side nav doesn't contain a\nlot of colour, I feel it's still very vibrant."),a("p",null,"Another update that definitely worth mentioning is that blogposts can now be tagged as you'll see\nbelow. This will allow for a nice filtering feature in the future."),a("p",null,a("img",{src:"https://i.imgur.com/srSXoUN.png",alt:"New Bloglist Page",title:"New bloglist page",parentName:"p"})),a("h2",null,"Blog Editor"),a("h3",null,"Old"),a("p",null,"The old blog editor was a pain to use. Blogs are written in markdown. So in order for me to preview\nif the blog was looking as I would have expected, I had to save the blog post, view it & then click\nedit again if I i wanted to continue writing."),a("p",null,a("img",{src:"https://i.imgur.com/tHkNp79.png",alt:"Old BlogEditor Page",title:"Old blog editor page",parentName:"p"})),a("h3",null,"New"),a("p",null,"The new blog editor is not only much easier to use but it's also much more visually appealing. The\ntabs at the top allow the editor to easily switch between the editor view & the preview view. This\nis fully mobile ready & allows users to swipe between views."),a("p",null,"The editor takes advantage of ",a("a",{href:"https://react-md.mlaursen.com/",parentName:"p"},"React-MD")," tabs & renders the markdown exactly how the user would see\nthe blog post."),a("p",null,a("img",{src:"https://i.imgur.com/jkiUhhO.png",alt:"New BlogEditor Page",title:"New blog editor page",parentName:"p"})),a("p",null,a("img",{src:"https://i.imgur.com/FTzBZvj.png",alt:"New BlogEditor Preview Page",title:"New blog editor preview page",parentName:"p"})))}d.isMDXComponent=!0;export default d;export{r as author,g as created,h as date,s as id,p as tags,i as title};

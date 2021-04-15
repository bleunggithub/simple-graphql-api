(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,a,n){},116:function(e,a,n){},134:function(e,a,n){"use strict";n.r(a);var t,r,s,i=n(0),c=n(17),l=n.n(c),o=(n(115),n(30)),j=(n(116),n(18)),m=n(47),d=Object(j.gql)(t||(t=Object(m.a)(["\n    mutation createUser(\n        $first_name: String!\n        $last_name: String!\n        $email: String!\n        $password: String!\n        ){\n        createUser(\n            first_name: $first_name\n            last_name: $last_name\n            email: $email\n            password: $password\n            ){\n            id\n        }\n    }\n"]))),b=Object(j.gql)(r||(r=Object(m.a)(["\n    mutation deleteUserById(\n        $id: Int!\n    ){\n        deleteUserById(\n            id: $id\n        ){\n            id\n        }\n    }\n"]))),u=Object(j.gql)(s||(s=Object(m.a)(["\n    mutation updateUserById(\n        $id: Int!\n        $first_name: String!\n        $last_name: String!\n        $email: String!\n        $password: String!\n        ){\n        updateUserById(\n            id: $id\n            first_name: $first_name\n            last_name: $last_name\n            email: $email\n            password: $password\n            ){\n            id\n        }\n    }\n"]))),p=n(181),O=n(176),h=n(180),f=n(179),g=n(171),x=n(177),v=n(178),w=n(175),_=n(102),N=n.n(_),y=n(185),C=n(7);function $(e){var a=e.users,n=e.refetch,t=q(),r=Object(j.useMutation)(b),s=Object(o.a)(r,2),i=s[0],c=s[1].error,l=function(e){var a=parseInt(e.currentTarget.value);i({variables:{id:a}}),c&&console.log(c),n()};return Object(C.jsxs)("div",{className:t.container,children:[Object(C.jsx)("h1",{children:"All Users"}),Object(C.jsx)(g.a,{component:w.a,children:Object(C.jsxs)(O.a,{className:t.table,"aria-label":"simple table",children:[Object(C.jsx)(x.a,{children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(f.a,{children:"ID"}),Object(C.jsx)(f.a,{align:"right",children:"Name"}),Object(C.jsx)(f.a,{align:"right",children:"Email"}),Object(C.jsx)(f.a,{align:"right",children:"Password"}),Object(C.jsx)(f.a,{align:"right",children:"Delete"})]})}),Object(C.jsx)(h.a,{children:a.map((function(e){return Object(C.jsxs)(v.a,{children:[Object(C.jsx)(f.a,{component:"th",scope:"row",children:e.id}),Object(C.jsxs)(f.a,{align:"right",children:[e.first_name," ",e.last_name]}),Object(C.jsx)(f.a,{align:"right",children:e.email}),Object(C.jsx)(f.a,{align:"right",children:e.password}),Object(C.jsx)(f.a,{align:"right",children:Object(C.jsx)(y.a,{name:"id",value:e.id,onClick:l,children:Object(C.jsx)(N.a,{})})})]},e.id)}))})]})})]})}var q=Object(p.a)({table:{width:"80%",margin:"2em auto"},container:{padding:"0 5% 5% 5%"}}),U=n(45),I=n(50),S=n(184);function k(e){var a=e.refetch,n=A(),t=Object(i.useState)({first_name:"",last_name:"",email:"",password:""}),r=Object(o.a)(t,2),s=r[0],c=r[1],l=function(e){var a=e.target,n=a.name,t=a.value;c(Object(I.a)(Object(I.a)({},s),{},Object(U.a)({},n,t)))},m=Object(j.useMutation)(d),b=Object(o.a)(m,2),u=b[0],p=b[1].error;return Object(C.jsxs)("div",{className:n.container,children:[Object(C.jsx)("h1",{children:"Add new user"}),Object(C.jsxs)("form",{children:[Object(C.jsxs)("div",{className:n.inputContainer,children:[Object(C.jsx)(S.a,{required:!0,label:"First Name",name:"first_name",value:s.first_name,onChange:l,type:"text",className:n.input}),Object(C.jsx)(S.a,{required:!0,label:"Last Name",name:"last_name",value:s.last_name,onChange:l,type:"text",className:n.input}),Object(C.jsx)(S.a,{required:!0,label:"Email",name:"email",value:s.email,onChange:l,type:"email",className:n.input}),Object(C.jsx)(S.a,{required:!0,label:"Password",name:"password",value:s.password,onChange:l,type:"password",className:n.input})]}),Object(C.jsx)("div",{className:n.inputContainer,children:Object(C.jsx)(y.a,{variant:"outlined",onClick:function(e){e.preventDefault();var n=s.first_name,t=s.last_name,r=s.email,i=s.password;u({variables:{first_name:n,last_name:t,email:r,password:i}}),p&&console.log(p),c({first_name:"",last_name:"",email:"",password:""}),a()},children:"Add A New User"})})]})]})}var A=Object(p.a)({container:{margin:"5% 5% 0 5%"},inputContainer:{display:"flex",justifyContent:"center",flexWrap:"wrap",marginBottom:"3em"},input:{flexGrow:1,margin:10}});function E(e){var a=e.refetch,n=D(),t=Object(i.useState)({id:"",first_name:"",last_name:"",email:"",password:""}),r=Object(o.a)(t,2),s=r[0],c=r[1],l=function(e){var a=e.target,n=a.name,t=a.value;c(Object(I.a)(Object(I.a)({},s),{},Object(U.a)({},n,t)))},m=Object(j.useMutation)(u),d=Object(o.a)(m,2),b=d[0],p=d[1].error;return Object(C.jsxs)("div",{className:n.container,children:[Object(C.jsx)("h1",{children:"Update user"}),Object(C.jsxs)("form",{children:[Object(C.jsxs)("div",{className:n.inputContainer,children:[Object(C.jsx)(S.a,{required:!0,label:"ID",name:"id",value:s.id,onChange:l,type:"text",className:n.input}),Object(C.jsx)(S.a,{required:!0,label:"First Name",name:"first_name",value:s.first_name,onChange:l,type:"text",className:n.input}),Object(C.jsx)(S.a,{required:!0,label:"Last Name",name:"last_name",value:s.last_name,onChange:l,type:"text",className:n.input}),Object(C.jsx)(S.a,{required:!0,label:"Email",name:"email",value:s.email,onChange:l,type:"email",className:n.input}),Object(C.jsx)(S.a,{required:!0,label:"Password",name:"password",value:s.password,onChange:l,type:"password",className:n.input})]}),Object(C.jsx)("div",{className:n.inputContainer,children:Object(C.jsx)(y.a,{variant:"outlined",onClick:function(e){e.preventDefault();var n=s.first_name,t=s.last_name,r=s.email,i=s.password,l=parseInt(s.id);b({variables:{id:l,first_name:n,last_name:t,email:r,password:i}}),p&&console.log(p),c({id:"",first_name:"",last_name:"",email:"",password:""}),a()},children:"Update User Details"})})]})]})}var B,D=Object(p.a)({container:{margin:"0% 5%"},inputContainer:{display:"flex",justifyContent:"center",flexWrap:"wrap",marginBottom:"3em"},input:{flexGrow:1,margin:10}}),L=Object(j.gql)(B||(B=Object(m.a)(["\n    query{\n        getAllUsers{\n            id\n            first_name\n            last_name\n            email\n            password\n        }\n    }\n"])));var M=function(){var e=Object(j.useQuery)(L),a=e.data,n=e.refetch,t=Object(i.useState)([]),r=Object(o.a)(t,2),s=r[0],c=r[1];return Object(i.useEffect)((function(){a&&c(a.getAllUsers)}),[a]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(k,{refetch:n}),Object(C.jsx)(E,{refetch:n}),Object(C.jsx)($,{users:s,refetch:n})]})},P=(n(133),n(183)),F=n(182),G=n(75),Q=n(104),J=Object(Q.a)({palette:{primary:{main:"#8c8c82"},secondary:{main:"#58eff4"},error:{main:G.a.A400},background:{default:"#fff"}}}),W=n(103),H=Object(W.a)((function(e){var a=e.graphQLErrors,n=e.networkError;a&&a.forEach((function(e){var a=e.message,n=e.locations,t=e.path;return console.log("[GraphQL error]: Message: ".concat(a,", Location: ").concat(n,", Path: ").concat(t))})),n&&console.log("[Network error]: ".concat(n))})),T=Object(j.from)([H,new j.HttpLink({uri:"http://localhost:5000/graphql"})]),z=new j.ApolloClient({cache:new j.InMemoryCache,link:T});l.a.render(Object(C.jsx)(j.ApolloProvider,{client:z,children:Object(C.jsxs)(F.a,{theme:J,children:[Object(C.jsx)(P.a,{}),Object(C.jsx)(M,{})]})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.3e8cb3c3.chunk.js.map
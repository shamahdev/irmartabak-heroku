(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{74:function(t,a,n){"use strict";n.r(a);var s={name:"homeslider",data:function(){return{martabakhome:[],ratingdata:[],loading:!0,errored:!1}},created:function(){var a=this;this.$axios.get("/api/rating/").then(function(t){a.ratingdata=t.data}),this.$axios.get("/api/martabak/bestseller/").then(function(t){a.martabakhome=t.data}).catch(function(t){console.log(t),a.errored=!0}).finally(function(){return setTimeout(function(){return a.loading=!1},500)})},props:{target:String}},e=n(3),i=Object(e.a)(s,function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("carousel",{attrs:{autoplay:!0,autoplayTimeout:3e3,scrollPerPage:!1,perPage:1,paginationEnabled:!1,navigationEnabled:!1,loop:!0}},[n.loading?s("slide",[s("div",{staticClass:"container-fluid row p-0 m-0"},[s("div",{staticClass:"col-md-5 p-4 p-md-2 p-lg-3 my-auto"},[s("div",{staticClass:"jumbotron-fluid bg-white m-3 m-md-0 m-lg-5 pr-0 pr-md-5 pl-0 pl-md-5"},[s("p",{staticClass:"skeleton-txt lead mb-0\n           "},[n._v("Martabak Super")]),n._v(" "),s("h1",{staticClass:"skeleton-txt display-3 mb-5 price"},[n._v("Rp. 30000")]),n._v(" "),s("div",{staticClass:"mt-3 mb-5"},[s("button",{staticClass:"btn btn-skeleton btn-lg px-5 py-3",attrs:{type:"button",disabled:""}},[n._v("\n              Pesan Sekarang\n            ")]),s("button",{staticClass:"btn btn-skeleton btn-lg px-5 py-3",attrs:{type:"button",disabled:""}},[n._v("\n              Detail\n            ")])])])]),n._v(" "),s("div",{staticClass:"col-md-7 p-0 skeleton-img"})])]):n._e(),n._v(" "),n._l(n.martabakhome,function(a){return s("slide",{key:a.id},n._l(n.ratingdata,function(t){return s("div",{key:t.object_id,staticClass:"container-fluid row p-0 m-0"},[t.object_id==a.id?s("div",{staticClass:"col-md-5 p-4 p-md-2 p-lg-3 my-auto"},[s("div",{staticClass:"container-fluid bg-white m-3 m-md-0 m-lg-5 pr-0 pr-md-5 pl-0 pl-md-5"},[s("p",{staticClass:"lead mb-0"},[n._v(n._s(a.name))]),n._v(" "),s("div",[s("star-rating",{attrs:{rating:parseFloat(t.average),"read-only":!0,increment:.1,"star-size":28}})],1),n._v(" "),s("h1",{staticClass:"display-3 mb-5 price"},[n._v(n._s("Rp. "+a.price))]),n._v(" "),s("div",{staticClass:"mt-3 mb-5"},[s("button",{staticClass:"btn btn-primary btn-lg px-5 py-3",attrs:{"data-toggle":"modal","data-target":n.target}},[n._v("\n              Pesan Sekarang\n            ")]),s("router-link",{staticClass:"btn btn-dark btn-lg px-5 py-3",attrs:{to:"/menu/"+a.slug,tag:"button"}},[n._v("\n              Detail\n            ")])],1)])]):n._e(),n._v(" "),t.object_id==a.id?s("div",{staticClass:"col-md-7 p-0"},[s("img",{staticClass:"martabak2",attrs:{src:a.image,alt:a.name}})]):n._e()])}),0)})],2)},[],!1,null,null,null);a.default=i.exports}}]);
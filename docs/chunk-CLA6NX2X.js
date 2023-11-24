import{e as E,h as O,l as A,m as d,q as B,w as H}from "./chunk-WTUGROAE.js";import{$b as j,Ab as h,Bb as g,Cb as x,Ib as T,Jb as $,Nb as S,Pb as b,Rb as M,Wb as D,_a as I,_b as P,a as w,ab as C,da as s,eb as a,fb as y,ia as p,la as k,na as U,ob as l,vb as K}from "./chunk-GUX3CEOF.js";var c={production:!1,theMovieDBApi:"73b2fc9fab947354d61cb3faa1a40405"};var N=(()=>{let t=class t{constructor(e){this.http=e,this.baseUrl="https://api.themoviedb.org/3/",this.apiKey=c.theMovieDBApi,this.language="en-US",this.region="US"}getMovies(e, i){return this.http.get(`${this.baseUrl}movie/${e}?api_key=${this.apiKey}&page=${i}&language=${this.language}&region=${this.region}`)}getNowPlaying(e){return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${e}&language=${this.language}&region=${this.region}`)}searchMovies(e, i){return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${e}&page=${i}&language=${this.language}&region=${this.region}`)}getGenres(){return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`)}getMoviesByGenre(e){return this.http.get(`${this.baseUrl}genre/${e}/movies?api_key=${this.apiKey}`)}getMovie(e){return this.http.get(`${this.baseUrl}movie/${e}?api_key=${this.apiKey}`)}getMovieReviews(e){return this.http.get(`${this.baseUrl}movie/${e}/reviews?api_key=${this.apiKey}`)}getMovieCredits(e){return this.http.get(`${this.baseUrl}movie/${e}/credits?api_key=${this.apiKey}`)}getMovieVideos(e){return this.http.get(`${this.baseUrl}movie/${e}/videos?api_key=${this.apiKey}`)}getRecomendMovies(e){return this.http.get(`${this.baseUrl}movie/${e}/recommendations?api_key=${this.apiKey}`)}getPersonDetail(e){return this.http.get(`${this.baseUrl}person/${e}?api_key=${this.apiKey}`)}getPersonExternalData(e){return this.http.get(`${this.baseUrl}person/${e}/external_ids?api_key=${this.apiKey}`)}getPersonCast(e){return this.http.get(`${this.baseUrl}person/${e}/movie_credits?api_key=${this.apiKey}`)}};t.\u0275fac=function(i){return new(i||t)(p(d))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var J=(()=>{let t=class t{constructor(e){this.http=e,this.baseUrl="https://api.themoviedb.org/3/",this.apiKey=c.theMovieDBApi,this.language="en-US",this.region="US"}getTVShows(e, i){return this.http.get(`${this.baseUrl}tv/${e}?api_key=${this.apiKey}&page=${i}&language=${this.language}`)}getTvOnTheAir(e){return this.http.get(`${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${e}&language=${this.language}`)}getTVShow(e){return this.http.get(`${this.baseUrl}tv/${e}?api_key=${this.apiKey}&language=${this.language}`)}getTVShowVideos(e){return this.http.get(`${this.baseUrl}tv/${e}/videos?api_key=${this.apiKey}`)}getRecomendTVShows(e){return this.http.get(`${this.baseUrl}tv/${e}/recommendations?api_key=${this.apiKey}`)}getGenres(){return this.http.get(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}&language=${this.language}`)}getTVShowByGenre(e){return this.http.get(`${this.baseUrl}discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${e}&include_null_first_air_dates=false`)}};t.\u0275fac=function(i){return new(i||t)(p(d))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var X=(()=>{let t=class t{constructor(e){this.meta=e}generateTags(e){e=w({title:"Angular Movies and Series",description:"My SEO friendly Angular Component",image:"https://angular-movies-c91ba.firebaseapp.com/images/logo.png",slug:""},e),this.meta.updateTag({property:"og:type",content:"article"}),this.meta.updateTag({property:"og:site_name",content:"AngularMovie"}),this.meta.updateTag({property:"og:title",content:e.title}),this.meta.updateTag({property:"og:description",content:e.description}),this.meta.updateTag({property:"og:image",content:e.image}),this.meta.updateTag({property:"og:url",content:`https://angular-movies-c91ba.firebaseapp.com/${e.slug}`})}};t.\u0275fac=function(i){return new(i||t)(p(B))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var R=(()=>{let t=class t{constructor(e, i){this.el=e,this.renderer=i}onError(){this.renderer.removeAttribute(this.el.nativeElement,"srcset"),this.renderer.setAttribute(this.el.nativeElement,"src","./assets/img/fallback.jpg")}};t.\u0275fac=function(i){return new(i||t)(y(I),y(C))},t.\u0275dir=U({type:t,selectors:[["img","appImgMissingDirective",""]],hostBindings:function(i, n){i&1&&T("error",function(){return n.onError()})},standalone:!0});let r=t;return r})();function L(r, t){if(r&1&&(h(0,"a",6),b(1),g()),r&2){let o=$(),e,i;l("routerLink",o.isMovie?"/movies/"+o.model.id:"/tv-shows/"+o.model.id)("title",(e=o.model.title)!==null&&e!==void 0?e:o.model.name),a(1),M(" ",(i=o.model.title)!==null&&i!==void 0?i:o.model.name," ")}}function V(r, t){if(r&1&&(h(0,"p"),b(1),P(2,"date"),g()),r&2){let o=$(),e;a(1),M(" ",j(2,1,(e=o.model.release_date)!==null&&e!==void 0?e:o.model.first_air_date)," ")}}var oe=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=k({type:t,selectors:[["app-poster-card"]],inputs:{model:"model",isMovie:"isMovie"},standalone:!0,features:[D],decls:6,vars:10,consts:[[1,"poster"],[3,"routerLink","title"],["loading","lazy","appImgMissingDirective","",1,"poster__image",3,"ngSrc","srcset","alt","height","width"],[1,"poster__content"],["class","poster__title colored-hover",3,"routerLink","title",4,"ngIf"],[4,"ngIf"],[1,"poster__title","colored-hover",3,"routerLink","title"]],template:function(i, n){if(i&1&&(h(0,"div",0)(1,"a",1),x(2,"img",2),g(),h(3,"div",3),K(4,L,2,3,"a",4)(5,V,3,3,"p",5),g()()),i&2){let m,f,v,_;a(1),l("routerLink",n.isMovie?"/movies/"+n.model.id:"/tv-shows/"+n.model.id)("title",(m="Go to "+n.model.title)!==null&&m!==void 0?m:n.model.name),a(1),S("srcset","https://image.tmdb.org/t/p/w220_and_h330_face/",n.model.poster_path,` 1x,
         https://image.tmdb.org/t/p/w440_and_h660_face/`,n.model.poster_path," 2x"),l("ngSrc","https://image.tmdb.org/t/p/w220_and_h330_face/"+n.model.poster_path)("alt",(f=n.model.title)!==null&&f!==void 0?f:n.model.name)("height",159)("width",239),a(2),l("ngIf",(v=n.model.title)!==null&&v!==void 0?v:n.model.name),a(1),l("ngIf",(_=n.model.release_date)!==null&&_!==void 0?_:n.model.first_air_date)}},dependencies:[H,R,O,E,A],styles:[".poster[_ngcontent-%COMP%]{width:100%;padding:0;overflow:hidden}.poster__image[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover;border-radius:4px 4px 0 0;-webkit-user-select:none;user-select:none;transition:.4s;min-height:155px}.poster__image[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.poster__content[_ngcontent-%COMP%]{padding:10px 0}.poster__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#fff}.poster__title[_ngcontent-%COMP%]{display:inherit;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media screen and (min-width: 600px) and (max-width: 959px){.poster[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:auto}}"]});let r=t;return r})();export{N as a,J as b,X as c,R as d,oe as e};

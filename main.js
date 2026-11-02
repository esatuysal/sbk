(function(){
var P=[["neden.html","Neden"],["kimim.html","Ben kimim"],["etkinlik.html","Etkinlik"],["cekilis.html","Çekiliş"],["katil.html","Katıl"]];
var cur=document.body.dataset.page,main=document.querySelector('main');
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function links(c){return P.map(function(p){return '<a href="'+p[0]+'" class="nl '+c+'"'+(p[0]===cur+'.html'?' aria-current="page"':'')+'>'+p[1]+'</a>'}).join('')}
document.body.insertAdjacentHTML('afterbegin',
'<header class="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-5 md:px-10 py-5 bg-black/70 backdrop-blur"><a href="index.html" class="font-black tracking-tighter text-lg">SBK<span style="color:#e11d2e">.</span></a>'+
'<nav class="hidden md:flex gap-8 text-sm font-medium">'+links('')+'</nav>'+
'<button id="mb" class="md:hidden text-sm font-bold" aria-expanded="false" aria-controls="mm">Menü</button></header>'+
'<div id="mm" class="fixed inset-0 z-30 bg-black hidden flex-col justify-center gap-5 px-5 display text-[14vw] uppercase">'+links('')+'</div>');
var mb=document.getElementById('mb'),mm=document.getElementById('mm');
mb.onclick=function(){var o=mm.classList.toggle('hidden');mm.classList.toggle('flex',!o);mb.setAttribute('aria-expanded',!o);mb.textContent=o?'Menü':'Kapat'};
var i=P.findIndex(function(p){return p[0]===cur+'.html'});
if(cur!=='index'&&i>-1&&i<P.length-1){
  main.insertAdjacentHTML('beforeend','<a href="'+P[i+1][0]+'" class="group block px-5 md:px-10 py-16 md:py-28 border-t bd"><span class="block text-zinc-500 text-sm mb-3">Sıradaki</span><span class="display block text-[15vw] md:text-[9vw] uppercase transition-colors group-hover:text-[#e11d2e]">'+P[i+1][1]+'</span></a>');
}
document.body.insertAdjacentHTML('beforeend','<footer class="px-5 md:px-10 py-8 border-t bd flex flex-col md:flex-row gap-2 justify-between text-sm text-zinc-500"><span>sbk.me · Sağlıklı Beslenme Kulübü</span><span>Tıbbi tavsiye değildir.</span></footer>');

var b=document.getElementById('belt');
if(b){var u=["photo-1587049352846-4a222e784d38","photo-1523049673857-eb18f1d7b578","photo-1464965911861-746a04b4bca6","photo-1600891964092-4316c288032e","photo-1548839140-29a749e1cf4d"],h="";
  for(var k=0;k<2;k++)u.forEach(function(x){h+='<img class="shot" loading="lazy" alt="" src="https://images.unsplash.com/'+x+'?auto=format&fit=crop&w=600&q=70">'});
  b.innerHTML=h+h}

if(!reduce){
  gsap.registerPlugin(ScrollTrigger);
  gsap.set('.hl',{yPercent:110});gsap.set('.hero-in',{opacity:0,y:24});
  gsap.timeline({defaults:{ease:'power4.out'}}).to('.hl',{yPercent:0,duration:1.2,stagger:.14}).to('.hero-in',{opacity:1,y:0,duration:.9,stagger:.12},'-=.6');
  gsap.utils.toArray('.rv').forEach(function(el){gsap.from(el,{opacity:0,y:50,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%'}})});
}

var who=document.getElementById('who'),wb=document.getElementById('whoBtn');
if(wb)wb.onclick=function(){var on=who.classList.toggle('on');wb.setAttribute('aria-expanded',on);wb.textContent=on?'Silüeti geri koy':'Silüeti kaldır'};

var f=document.getElementById('join');
if(f){var m=document.getElementById('msg'),e=document.getElementById('email');
  f.onsubmit=function(ev){ev.preventDefault();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim())){m.style.color='#e11d2e';m.textContent='Geçerli bir e-posta adresi gir.';e.focus();return}
    // TODO: kendi uç noktana gönder, örn. fetch('https://formspree.io/f/XXXX',{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)})
    m.style.color='#fff';m.textContent='Kaydın alındı. Artık içindesin.';f.reset()}}
})();

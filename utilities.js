// ---- tiny seeded RNG, used only for the decorative About-page figure ----
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}

function forceSafariRedraw(element) {
    element.classList.remove('open');
    element.offsetHeight; 
    element.classList.add('open');
}


// ---- render helpers ----
function el(tag, cls, html){const e=document.createElement(tag); if(cls)e.className=cls; if(html!==undefined)e.innerHTML=html; return e;}

function makeCard(art){
  const cover = art.images[0];
  const card = document.createElement('button');
  card.className = 'card';
  card.setAttribute('aria-label', `${art.title}, ${art.year}`);
  card.innerHTML = `
    <div class="plate"><img src="${IMAGES[cover.key]}" alt="${art.title}" loading="lazy"></div>
    <div class="label">
      <span class="t">${art.title}${art.series ? `<span class="series">${art.series}</span>`:''}</span>
      <span class="y">${art.year}</span>
    </div>`;
  card.addEventListener('click', ()=>openLightbox(art));
  return card;
}


function setToggleState(hidden){
  const btn = document.getElementById('lb-info-toggle');
  const tip = hidden ? CONTENT.ui.showInfo : CONTENT.ui.hideInfo;
  btn.textContent = hidden ? '>' : '<';
  btn.setAttribute('aria-pressed', hidden ? 'true' : 'false');
  btn.setAttribute('aria-label', tip);
  btn.dataset.tip = tip;
}
(function initTips(){
  const c = document.getElementById('lb-close');
  c.setAttribute('aria-label', CONTENT.ui.close);
  c.dataset.tip = CONTENT.ui.close;
  setToggleState(false);
})();



function openLightbox(art){
  const images = art.images;
  document.querySelector('.lb-card').classList.remove('info-hidden');
  (false);setToggleState

  function setActive(idx){
    document.getElementById('lb-art').innerHTML = `<img src="${IMAGES[images[idx].key]}" alt="${art.title}">`;
    document.getElementById('lb-caption').textContent = CONTENT.detailLabels[images[idx].label] || '';
    document.querySelectorAll('#lb-thumbs button').forEach((b,i)=> b.classList.toggle('active', i===idx));
  }

  const thumbs = document.getElementById('lb-thumbs');
  const caption = document.getElementById('lb-caption');
  thumbs.innerHTML = '';
  if(images.length > 1){
    thumbs.style.display='flex';
    caption.style.display = 'block';
    images.forEach((img, idx)=>{
      const b = document.createElement('button');
      b.setAttribute('aria-label', CONTENT.detailLabels[img.label] || img.label);
      b.innerHTML = `<img src="${IMAGES[img.key]}" alt="">`;
      b.addEventListener('click', ()=> setActive(idx));
      thumbs.appendChild(b);
    });
  }
  else {
    thumbs.style.display='none';
    caption.style.display='none';
  }

  setActive(0);

  document.getElementById('lb-series').textContent = art.series || '';
  document.getElementById('lb-series').style.display = art.series ? 'block':'none';
  document.getElementById('lb-title').textContent = art.title;
  document.getElementById('lb-desc').textContent = art.description;
  document.getElementById('lb-details').innerHTML = `
    <div><dt>Year</dt><dd>${art.year}</dd></div>
    <div><dt>Medium</dt><dd>${art.medium}</dd></div>
    <div><dt>Dimensions</dt><dd>${art.dimensions}</dd></div>
    <div><dt>Status</dt><dd>${art.status}</dd></div>`;
  document.getElementById('lightbox').classList.add('open');
}
document.getElementById('lb-close').addEventListener('click', 
    ()=> {
        document.getElementById('lightbox').classList.remove('open'); 
    });
document.getElementById('lb-info-toggle').addEventListener('click', ()=>{
  const card = document.querySelector('.lb-card');
  setToggleState(card.classList.toggle('info-hidden'));

  forceSafariRedraw(document.getElementById('lightbox'))
  /*document.getElementById('lightbox').classList.remove('open');
  setTimeout(() => {
    document.getElementById('lightbox').classList.add('open');
  }, 1);
  */ 
  //document.getElementById('lightbox').classList.add('open');
});
document.getElementById('lightbox').addEventListener('click', e=>{ if(e.target.id==='lightbox') e.currentTarget.classList.remove('open'); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape') document.getElementById('lightbox').classList.remove('open'); });

function renderWork(){
  document.getElementById('gallery-title').textContent = "Art Showcase";
  document.getElementById('gallery-intro-text').textContent = CONTENT.artist.galleryIntro;

  const list = document.getElementById('group-list');
  list.innerHTML = '';
  CONTENT.categories.forEach(cat=>{
    const works = CONTENT.artworks.filter(a=> a.category === cat.id);
    if(!works.length) return;
    const cover = works[0].images[0];
    const card = el('button', 'group-card', `
      <div class="g-thumb"><img src="${IMAGES[cover.key]}" alt=""></div>
      <div>
        <h2 class="g-name">${cat.label}</h2>
        ${cat.blurb ? `<p class="g-blurb">${cat.blurb}</p>` : ''}
        <p class="g-count">${works.length} work${works.length===1?'':'s'}</p>
      </div>
      <span class="g-arrow">→</span>
    `);
    card.addEventListener('click', ()=>{
      history.replaceState(null,'','#work/'+cat.id);
      route();
    });
    list.appendChild(card);
  });
}

function renderCategoryPage(catId){
  const cat = CONTENT.categories.find(c=> c.id === catId);
  const works = CONTENT.artworks.filter(a=> a.category === catId);
  document.getElementById('category-title').textContent = cat ? cat.label : '';
  document.getElementById('category-blurb').textContent = cat ? cat.blurb : '';
  const grid = document.getElementById('category-grid');
  grid.innerHTML = '';
  works.forEach(art => grid.appendChild(makeCard(art)));
}

function renderAbout(){
  document.getElementById('about-figure').innerHTML = `<img src="${IMAGES['img_about']}" alt="">`;
  document.getElementById('about-name').textContent = CONTENT.artist.name;
  document.getElementById('about-bio').innerHTML = CONTENT.artist.bioParagraphs.map(p=>`<p>${p}</p>`).join('');

  document.getElementById('education-list').innerHTML = CONTENT.education.map(x=>`
    <li><span class="yr">${x.year}</span><span class="what">${x.what}<span class="where">${x.where}</span></span></li>
  `).join('');

  const groups = [["Solo", CONTENT.exhibitions.solo], ["Group", CONTENT.exhibitions.group]];
  document.getElementById('exhibitions-groups').innerHTML = groups.map(([label, items])=>`
    <div class="subgroup">
      <h4>${label}</h4>
      <ul class="plain">${items.map(x=>`<li><span class="yr">${x.year}</span><span class="what">${x.what}<span class="where">${x.where}</span></span></li>`).join('')}</ul>
    </div>
  `).join('');

/*  document.getElementById('awards-list').innerHTML = CONTENT.awards.map(x=>`
    <li><span class="yr">${x.year}</span><span class="what">${x.what}</span></li>
  `).join('');
*/
}

function renderContact(){
  document.getElementById('contact-lead').textContent = CONTENT.artist.contactLead;
  document.getElementById('contact-list').innerHTML = CONTENT.contact.map(c=>`
    <div><dt>${c.label}</dt><dd>${c.href ? `<a class="link" href="${c.href}">${c.value}</a>` : c.value}</dd></div>
  `).join('');
}

function renderFooter(){
  document.getElementById('footer-text').textContent = CONTENT.artist.footer;
}

// ---- simple page routing ----
function showPage(name){
  document.querySelectorAll('.page').forEach(p=> p.classList.toggle('active', p.id===name));
  document.querySelectorAll('nav.pages button').forEach(b=> b.classList.toggle('active', b.dataset.nav===name || (name==='category' && b.dataset.nav==='work')));
  window.scrollTo({top:0});
}

function route(){
  const hash = (location.hash || '#work').slice(1);
  const [top, sub] = hash.split('/');
  if(top === 'work' && sub){
    renderCategoryPage(sub);
    showPage('category');
  } else if(top === 'about' || top === 'contact'){
    showPage(top);
  } else {
    showPage('work');
  }
}

document.querySelectorAll('[data-nav]').forEach(b=>{
  b.addEventListener('click', (e)=>{
    e.preventDefault();
    history.replaceState(null,'','#'+b.dataset.nav);
    route();
  });
});
window.addEventListener('hashchange', route);

renderWork();
renderAbout();
renderContact();
renderFooter();
route();

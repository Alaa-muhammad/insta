/* ============================================================
       POST DATA
       Each post: id, image, location, timestamp, likes, caption,
       hashtags, comments, investigatorMarkers
       Markers: { x: %, y: %, label: string }
    ============================================================ */
const POSTS = [
  {
    id: 1,
    image: "assets/generated/Gemini_Generated_Image_66ikue66ikue66ik.png",
    location: "Ramallah, West Bank",
    timestamp: "2 hours ago",
    likes: 148,
    caption: "Sunday vibes are the best kind. 😄 So much to do, so little time — but honestly I'd rather be right here.",
    hashtags: ["#StudentLife", "#CampusLife", "#ProgrammingLife", "#DataNerd", "#WeekendMode"],
    comments: [
      { user: "lara.m_dev", text: "Your smile is everything 😍", time: "1h" },
      { user: "tariq.k", text: "What's on your screen?? 👀", time: "55m" },
      { user: "nour_n", text: "Those nails though 💅", time: "50m" },
      { user: "amir.m", text: "Bro cleans up after finals?? Lies", time: "45m" },
      { user: "rima.k", text: "Tag me when you're free 🙏", time: "40m" },
      { user: "j.liu_dev", text: "Good vibes only ✨", time: "30m" },
      { user: "sara.codes", text: "@tariq.k nothing important 😂", time: "20m" }
    ],
    investigatorMarkers: [
      { x: 22, y: 15, label: "①  Browser URL bar — university portal visible" },
      { x: 18, y: 65, label: "②  Mailing label — name and home address" },
      { x: 17, y: 73, label: "③  Tote bag logo — organization affiliation" },
      { x: 78, y: 55, label: "④  Laptop notification — email subject line visible" }
    ]
  },
  {
    id: 2,
    image: "assets/generated/Gemini_Generated_Image_8uhmki8uhmki8uhm.png",
    location: "Ramallah Institute of Applied Technology",
    timestamp: "1 day ago",
    likes: 212,
    caption: "Finally got my parking permit! No more long walks from the back lot. Lot C, Sector 4 — welcome home. 😅",
    hashtags: ["#CampusLife", "#ParkingWin", "#StudentLife", "#WestBankUni"],
    comments: [
      { user: "lara.m_dev", text: "Lot C crew rise up 🚗", time: "23h" },
      { user: "tariq.k", text: "See you there tomorrow!", time: "22h" },
      { user: "amir.m", text: "They finally gave you one?? 😂", time: "21h" },
      { user: "nour_n", text: "Same lot as me!! Let's carpool", time: "20h" },
      { user: "rima.k", text: "Cute stickers on the car haha", time: "19h" },
      { user: "j.liu_dev", text: "Python sticker spotted 🐍", time: "18h" }
    ],
    investigatorMarkers: [
      { x: 62, y: 10, label: "①  Parking sign — exact lot number and institution name" },
      { x: 42, y: 62, label: "②  Car window sticker — university name and graduation year (2026)" },
      { x: 18, y: 68, label: "③  Tote bag — organization name" },
      { x: 28, y: 74, label: "④  Python sticker — technical skill indicator" },
      { x: 33, y: 77, label: "⑤  'Ramallah Tech Meetup' sticker — event attendance / location" }
    ]
  },
  {
    id: 3,
    image: "assets/generated/Gemini_Generated_Image_hxllmzhxllmzhxll.png",
    location: "Home Studio",
    timestamp: "2 days ago",
    likes: 97,
    caption: "Sundays are for new sounds 🎧 and testing new things. The project is getting closer than I'd like to admit.",
    hashtags: ["#MusicProducer", "#HomeStudio", "#SynthLife", "#CreativeSunday"],
    comments: [
      { user: "lara.m_dev", text: "This setup!! 😍 So jealous", time: "2d" },
      { user: "tariq.k", text: "Drop it already!!", time: "2d" },
      { user: "nour_n", text: "Is that za'atar on the desk?? 😂", time: "2d" },
      { user: "amir.m", text: "What DAW is that?", time: "2d" },
      { user: "j.liu_dev", text: "Love the cork board aesthetic ✨", time: "2d" },
      { user: "sara.codes", text: "@nour_n obviously 😌", time: "1d" }
    ],
    investigatorMarkers: [
      { x: 74, y: 10, label: "①  Cork board note — exact date: 'Post za'atar review! Oct 12, 2026'" },
      { x: 78, y: 23, label: "②  Wristband — event attendance with code 'FF02 302S'" },
      { x: 40, y: 18, label: "③  Book spine — 'The Palestinian Idea' — interest/location indicator" },
      { x: 85, y: 55, label: "④  Product bag — 'Palestinian za'atar' — specific regional product" }
    ]
  },
  {
    id: 4,
    image: "assets/generated/Gemini_Generated_Image_k1okybk1okybk1ok.png",
    location: "Downtown Social",
    timestamp: "4 days ago",
    likes: 334,
    caption: "These people make everything better. Grateful for every late-night study session and random adventure. ❤️",
    hashtags: ["#SquadGoals", "#StudentLife", "#AlumniNight", "#FriendsForever"],
    comments: [
      { user: "lara.m_dev", text: "THE BEST NIGHT 💜", time: "4d" },
      { user: "tariq.k", text: "We need to do this every week tbh", time: "4d" },
      { user: "nour_n", text: "I miss you already!!!", time: "4d" },
      { user: "amir.m", text: "Alex's selfie skills are unmatched", time: "4d" },
      { user: "rima.k", text: "Ok but where was I 😭", time: "3d" },
      { user: "j.liu_dev", text: "Legendary evening tbh", time: "3d" },
      { user: "the.real.alex", text: "Posted mine too — go check!", time: "3d" },
      { user: "sara.codes", text: "@rima.k you were missed 😢", time: "3d" }
    ],
    investigatorMarkers: [
      { x: 28, y: 58, label: "①  Name tag 'ALEX' — real first name + meetup group name" },
      { x: 42, y: 60, label: "②  Name tag 'SARAH' — second name + 'Oakwood Alumni'" },
      { x: 52, y: 73, label: "③  Tote bag — same organization logo as other posts (cross-reference)" },
      { x: 78, y: 55, label: "④  Lanyard/ID badge — institution ID visible" }
    ]
  },
  {
    id: 5,
    image: "assets/generated/Gemini_Generated_Image_xgg9muxgg9muxgg9.png",
    location: "Home Office",
    timestamp: "6 days ago",
    likes: 163,
    caption: "Deep in the zone. Dashboard is coming together nicely. Sometimes home is the best office. ☕",
    hashtags: ["#CodeLife", "#Developer", "#Dashboard", "#WFH", "#Python"],
    comments: [
      { user: "lara.m_dev", text: "What stack are you using?", time: "6d" },
      { user: "tariq.k", text: "That monitor setup is goals 🖥️", time: "6d" },
      { user: "nour_n", text: "Password on a sticky note?? Sara!! 😂", time: "6d" },
      { user: "amir.m", text: "I see that tea mug ☕", time: "6d" },
      { user: "rima.k", text: "Dashboard numbers looking good 👀", time: "6d" }
    ],
    investigatorMarkers: [
      { x: 25, y: 15, label: "①  Mailing address on shelf — name and full home address" },
      { x: 15, y: 42, label: "②  Python logo sticker — confirms programming language" },
      { x: 38, y: 73, label: "③  Sticky note — reads 'pathwort + password' (credential exposure)" },
      { x: 70, y: 45, label: "④  Dashboard — shows financial figures ($27,704) and username 'MAYA_DEV_12'" },
      { x: 73, y: 55, label: "⑤  Tote bag — organization affiliation (same as other posts)" }
    ]
  },
  {
    id: 6,
    image: "assets/generated/Gemini_Generated_Image_53fk2r53fk2r53fk.png",
    location: "Home Office",
    timestamp: "1 week ago",
    likes: 289,
    caption: "Milestone unlocked 🎉 Can't believe how far this project has come. Grateful for everyone who believed.",
    hashtags: ["#AcademicExcellence", "#DataScience", "#StudentWin", "#MilestonePost"],
    comments: [
      { user: "lara.m_dev", text: "CONGRATULATIONS!!! 🥳🥳🥳", time: "7d" },
      { user: "tariq.k", text: "You deserved this SO much!", time: "7d" },
      { user: "nour_n", text: "I literally cried when I saw this 😭", time: "7d" },
      { user: "amir.m", text: "Proud of you bro (also the framing is good lol)", time: "7d" },
      { user: "rima.k", text: "Data Sciences queen 👑", time: "7d" },
      { user: "j.liu_dev", text: "Future colleague unlocked 🤝", time: "7d" },
      { user: "the.real.alex", text: "Called it. This was always yours.", time: "7d" }
    ],
    investigatorMarkers: [
      { x: 68, y: 45, label: "①  Certificate — full legal name 'MAYA C. TEA' and exact date 'June 10, 2026'" },
      { x: 68, y: 53, label: "②  Certificate — institution name 'AETHERIA UNIVERSITY'" },
      { x: 28, y: 40, label: "③  Research paper on desk — project name and author name" },
      { x: 42, y: 44, label: "④  Laptop screen — commencement award details and git commit visible" },
      { x: 15, y: 48, label: "⑤  Python sticker — consistent across posts (identifier detail)" }
    ]
  },
  {
    id: 7,
    image: "assets/generated/Gemini_Generated_Image_ransi9ransi9rans.png",
    location: "Elm Quarter Overlook",
    timestamp: "2 weeks ago",
    likes: 521,
    caption: "Not all who wander are lost — some of us just need better maps. 🗺️ Worth every step.",
    hashtags: ["#TravelVibes", "#ExploreMore", "#Adventure", "#Wanderlust", "#Views"],
    comments: [
      { user: "lara.m_dev", text: "WHERE IS THIS?? I need to go", time: "14d" },
      { user: "tariq.k", text: "You and your travel era 😭", time: "14d" },
      { user: "nour_n", text: "The view is unreal!!", time: "14d" },
      { user: "amir.m", text: "Is that a map on your phone?? 👀", time: "14d" },
      { user: "rima.k", text: "Takes me there immediately 🙏", time: "13d" },
      { user: "j.liu_dev", text: "This should be a postcard", time: "13d" },
      { user: "sara.codes", text: "@amir.m always prepared 😌", time: "13d" }
    ],
    investigatorMarkers: [
      { x: 43, y: 62, label: "①  Bronze plaque — exact location name and 'UNESCO-Fictional Heritage Site Est. 2026'" },
      { x: 46, y: 72, label: "②  Hotel keycard — 'The Nest of SLOL-QTR Hotel' — accommodation identified" },
      { x: 47, y: 72, label: "③  Phone screen — map app open showing real-time location '16:42'" },
      { x: 62, y: 70, label: "④  Tote bag — organization sticker (cross-reference identifier)" }
    ]
  },
  {
    id: 8,
    image: "assets/generated/Gemini_Generated_Image_xu2is2xu2is2xu2i.png",
    location: "Elm St, University Quarter",
    timestamp: "3 weeks ago",
    likes: 176,
    caption: "New favourite spot for the week. Wrapping up the last bits of the project. Also the chai here is absolutely worth it. 🍵",
    hashtags: ["#CafeWork", "#StudentLife", "#ProjectLife", "#ChaiLover"],
    comments: [
      { user: "lara.m_dev", text: "Wait I know that house 👀", time: "21d" },
      { user: "tariq.k", text: "24A? Isn't that near campus?", time: "21d" },
      { user: "nour_n", text: "You look SO happy here 🥰", time: "21d" },
      { user: "amir.m", text: "Selfie game strong as always", time: "21d" },
      { user: "rima.k", text: "The bag, always the bag 😂", time: "20d" }
    ],
    investigatorMarkers: [
      { x: 30, y: 44, label: "①  House number '24A' — specific address number" },
      { x: 30, y: 49, label: "②  Mailbox — 'The Miller Residence – Oakwood Grove'" },
      { x: 78, y: 32, label: "③  Street sign — 'Elm St., University Quarter'" },
      { x: 79, y: 40, label: "④  Small plaque — 'Est. 2000' — neighborhood detail" }
    ]
  },
  {
    id: 9,
    image: "assets/generated/Gemini_Generated_Image_rmxigmrmxigmrmxi.png",
    location: "Community Brew Co.",
    timestamp: "1 month ago",
    likes: 243,
    caption: "This place just gets me. Same corner, same order, same vibes. 💻 Productivity hits different here.",
    hashtags: ["#CafeLife", "#CodeFromCafe", "#CleanCode", "#Productive"],
    comments: [
      { user: "lara.m_dev", text: "I spy 'Clean Code' on the table 👀", time: "30d" },
      { user: "tariq.k", text: "Community Tea Tasting board spotted!", time: "30d" },
      { user: "nour_n", text: "You literally live here lol", time: "30d" },
      { user: "amir.m", text: "Python AND the Arab uni sticker 👀", time: "30d" },
      { user: "rima.k", text: "What is she building...", time: "30d" },
      { user: "j.liu_dev", text: "The 'print Hello' sticker though 😂", time: "30d" }
    ],
    investigatorMarkers: [
      { x: 28, y: 65, label: "①  Laptop sticker — 'Oakwood University' (institution confirmed)" },
      { x: 32, y: 68, label: "②  Arabic university logo sticker — institution affiliation" },
      { x: 38, y: 76, label: "③  Python sticker + code snippet — skill indicator" },
      { x: 73, y: 22, label: "④  Books — 'Clean Code', 'Coding Interview' — skill level indicator" },
      { x: 76, y: 47, label: "⑤  Tote bag — same org logo — consistent identifier across all posts" },
      { x: 19, y: 58, label: "⑥  Chalkboard menu — cafe name 'Community Tea Tasting' — location confirmed" }
    ]
  }
];
/* ============================================================
       STATE
    ============================================================ */
let likedPosts = new Set();
let savedPosts = new Set();
let investigatorOn = false;
let currentLbIdx = 0;

// Lightbox zoom/drag state
let lbScale = 1;
let lbTx = 0;
let lbTy = 0;
let lbDragging = false;
let lbDragStartX = 0;
let lbDragStartY = 0;
let lbImgX = 0;
let lbImgY = 0;

/* ============================================================
       RENDER POSTS
    ============================================================ */
function renderPosts(posts) {
  const container = document.getElementById('postsContainer');
  container.innerHTML = '';

  if (posts.length === 0) {
    container.innerHTML = '<div class="no-results">No posts match your search.</div>';
    return;
  }

  posts.forEach((post, i) => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.id = `post-${post.id}`;

    const hashtags = post.hashtags.map(h => `<span class="hashtag">${h}</span>`).join(' ');
    const commentsHtml = post.comments.map(c => `
      <div class="comment">
        <span class="comment-user" onclick="openProfilePopup(event,'${c.user}','${c.user}')">${c.user}</span>${escHtml(c.text)}<span class="comment-time">${c.time}</span>
      </div>`).join('');

    const markersHtml = post.investigatorMarkers.map((m, idx) => `
      <div class="inv-marker" style="left:${m.x}%;top:${m.y}%;">
        ${idx + 1}
        <div class="inv-tooltip">${escHtml(m.label)}</div>
      </div>`).join('');

    card.innerHTML = `
      <div class="inv-banner">🔍 Investigator Mode — ${post.investigatorMarkers.length} details flagged in this photo</div>
      <div class="post-header">
        <div class="post-avatar-wrap">
          <div class="story-ring"></div>
          <div class="post-avatar" onclick="openProfilePopup(event,'sara.codes','Sara Khalil')">
            <img src="images/profile.jpg" alt="Sara" onerror="this.style.display='none';this.parentNode.textContent='SK'" />
          </div>
        </div>
        <div class="post-meta">
          <div class="post-username" onclick="openProfilePopup(event,'sara.codes','Sara Khalil')">sara.codes</div>
          <div class="post-location">${escHtml(post.location)}</div>
        </div>
        <div class="post-time">${post.timestamp}</div>
        <button class="post-more" title="More options">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
          </svg>
        </button>
      </div>

      <div class="post-image-wrap" onclick="openLightbox(${post.id - 1})">
        <img src="${post.image}" alt="Post ${post.id}" loading="lazy" />
        ${markersHtml}
      </div>

      <div class="post-actions">
        <button class="action-btn like-btn" id="like-${post.id}" onclick="toggleLike(event,${post.id})" title="Like">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
        <button class="action-btn" onclick="commentFocus(${post.id})" title="Comment">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        </button>
        <button class="action-btn" onclick="showToast('Link copied!')" title="Share">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
        <div class="action-spacer"></div>
        <button class="action-btn save-btn" id="save-${post.id}" onclick="toggleSave(event,${post.id})" title="Save">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
          </svg>
        </button>
      </div>

      <div class="post-likes" id="likes-count-${post.id}">${post.likes.toLocaleString()} likes</div>

      <div class="post-caption">
        <span class="caption-username" onclick="openProfilePopup(event,'sara.codes','Sara Khalil')">sara.codes</span>
        ${escHtml(post.caption)} ${hashtags}
      </div>

      <div class="post-comments" id="comments-${post.id}">
        <div class="view-comments" onclick="toggleComments(${post.id})">
          View all ${post.comments.length} comments
        </div>
        <div class="comment-list" id="comment-list-${post.id}">
          ${commentsHtml}
        </div>
      </div>

      <div class="comment-input-row">
        <input class="comment-input" id="comment-input-${post.id}"
               placeholder="Add a comment…"
               oninput="commentInputChange(this, ${post.id})" />
        <button class="comment-post-btn" id="comment-post-${post.id}"
                onclick="postComment(${post.id})">Post</button>
      </div>`;

    container.appendChild(card);
  });
}

/* ============================================================
       UTILITY
    ============================================================ */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ============================================================
       ACTIONS
    ============================================================ */
function toggleLike(e, id) {
  e.stopPropagation();
  const btn = document.getElementById(`like-${id}`);
  const countEl = document.getElementById(`likes-count-${id}`);
  const post = POSTS.find(p => p.id === id);

  if (likedPosts.has(id)) {
    likedPosts.delete(id);
    btn.classList.remove('liked');
    post.likes--;
  } else {
    likedPosts.add(id);
    btn.classList.add('liked');
    post.likes++;
    // Heart animation
    btn.style.transform = 'scale(1.4)';
    setTimeout(() => btn.style.transform = '', 200);
  }
  countEl.textContent = `${post.likes.toLocaleString()} likes`;
}

function toggleSave(e, id) {
  e.stopPropagation();
  const btn = document.getElementById(`save-${id}`);
  if (savedPosts.has(id)) {
    savedPosts.delete(id);
    btn.classList.remove('saved');
    showToast('Removed from saved');
  } else {
    savedPosts.add(id);
    btn.classList.add('saved');
    showToast('Saved to collection');
  }
}

function toggleComments(id) {
  const list = document.getElementById(`comment-list-${id}`);
  const label = list.previousElementSibling;
  if (list.classList.toggle('open')) {
    label.textContent = 'Hide comments';
  } else {
    const post = POSTS.find(p => p.id === id);
    label.textContent = `View all ${post.comments.length} comments`;
  }
}

function commentFocus(id) {
  const inp = document.getElementById(`comment-input-${id}`);
  if (inp) inp.focus();
}

function commentInputChange(inp, id) {
  const btn = document.getElementById(`comment-post-${id}`);
  btn.classList.toggle('active', inp.value.trim().length > 0);
}

function postComment(id) {
  const inp = document.getElementById(`comment-input-${id}`);
  const text = inp.value.trim();
  if (!text) return;

  const post = POSTS.find(p => p.id === id);
  post.comments.push({ user: 'sara.codes', text, time: 'now' });

  const list = document.getElementById(`comment-list-${id}`);
  const div = document.createElement('div');
  div.className = 'comment';
  div.innerHTML = `<span class="comment-user">sara.codes</span>${escHtml(text)}<span class="comment-time">now</span>`;
  list.appendChild(div);
  list.classList.add('open');

  inp.value = '';
  document.getElementById(`comment-post-${id}`).classList.remove('active');
  showToast('Comment posted');
}

/* ============================================================
       SEARCH
    ============================================================ */
document.getElementById('searchInput').addEventListener('input', function () {
  const q = this.value.trim().toLowerCase();
  if (!q) { renderPosts(POSTS); return; }
  const filtered = POSTS.filter(p =>
    p.caption.toLowerCase().includes(q) ||
    p.hashtags.some(h => h.toLowerCase().includes(q)) ||
    p.location.toLowerCase().includes(q)
  );
  renderPosts(filtered);
});

/* ============================================================
       LIGHTBOX
    ============================================================ */
function openLightbox(idx) {
  currentLbIdx = idx;
  lbScale = 1; lbTx = 0; lbTy = 0;
  updateLightboxContent();
  document.getElementById('lightbox').classList.add('open');
  document.getElementById('lbZoomHint').style.opacity = '1';
  setTimeout(() => {
    document.getElementById('lbZoomHint').style.opacity = '0';
  }, 3000);
}

function updateLightboxContent() {
  const post = POSTS[currentLbIdx];
  const img = document.getElementById('lbImage');
  img.src = post.image;
  img.style.transform = 'scale(1) translate(0,0)';
  lbScale = 1; lbTx = 0; lbTy = 0;

  document.getElementById('lbLocation').textContent = post.location;

  const commentsDiv = document.getElementById('lbComments');
  commentsDiv.innerHTML = `
    <div class="lb-comment">
      <span class="lb-comment-user">sara.codes</span>${escHtml(post.caption)}
      <span class="lb-comment-time">${post.timestamp}</span>
    </div>` +
    post.comments.map(c => `
      <div class="lb-comment">
        <span class="lb-comment-user">${escHtml(c.user)}</span>${escHtml(c.text)}
        <span class="lb-comment-time">${c.time}</span>
      </div>`).join('');

  document.getElementById('lbLikes').textContent = `${post.likes.toLocaleString()} likes`;
  document.getElementById('lbCaption').innerHTML =
    `<span class="lb-caption-user">sara.codes</span> ${escHtml(post.caption)}`;

  const likeBtn = document.getElementById('lbLikeBtn');
  likeBtn.className = 'action-btn' + (likedPosts.has(post.id) ? ' liked' : '');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

function lbNav(dir) {
  currentLbIdx = (currentLbIdx + dir + POSTS.length) % POSTS.length;
  updateLightboxContent();
}

function lbToggleLike() {
  const post = POSTS[currentLbIdx];
  toggleLike({ stopPropagation: () => { } }, post.id);
  const likeBtn = document.getElementById('lbLikeBtn');
  likeBtn.className = 'action-btn' + (likedPosts.has(post.id) ? ' liked' : '');
  document.getElementById('lbLikes').textContent = `${post.likes.toLocaleString()} likes`;
}

/* Zoom with mouse wheel */
function lbWheel(e) {
  e.preventDefault();
  const delta = e.deltaY > 0 ? 0.9 : 1.1;
  lbScale = Math.min(Math.max(lbScale * delta, 1), 5);
  applyLbTransform();
}

/* Double-click zoom */
function lbDblClick(e) {
  if (lbScale > 1) { lbScale = 1; lbTx = 0; lbTy = 0; }
  else { lbScale = 2.5; }
  applyLbTransform();
}

/* Drag */
function lbDragStart(e) {
  if (lbScale <= 1) return;
  lbDragging = true;
  lbDragStartX = e.clientX;
  lbDragStartY = e.clientY;
  lbImgX = lbTx;
  lbImgY = lbTy;
}

document.addEventListener('mousemove', e => {
  if (!lbDragging) return;
  lbTx = lbImgX + (e.clientX - lbDragStartX);
  lbTy = lbImgY + (e.clientY - lbDragStartY);
  applyLbTransform();
});

document.addEventListener('mouseup', () => { lbDragging = false; });

function applyLbTransform() {
  document.getElementById('lbImage').style.transform =
    `scale(${lbScale}) translate(${lbTx / lbScale}px, ${lbTy / lbScale}px)`;
}

/* ============================================================
       PROFILE POPUP
    ============================================================ */
function openProfilePopup(e, username, displayName) {
  e.stopPropagation();
  const popup = document.getElementById('profilePopup');
  document.getElementById('ppUsername').textContent = username;
  document.getElementById('ppName').textContent = displayName;
  popup.classList.add('open');

  const rect = e.target.getBoundingClientRect();
  let top = rect.bottom + window.scrollY + 8;
  let left = rect.left + window.scrollX;

  if (left + 280 > window.innerWidth) left = window.innerWidth - 290;
  if (top + 260 > window.scrollY + window.innerHeight) top = rect.top + window.scrollY - 270;

  popup.style.top = top + 'px';
  popup.style.left = left + 'px';
}

function closePopup() {
  document.getElementById('profilePopup').classList.remove('open');
}

document.addEventListener('click', e => {
  const popup = document.getElementById('profilePopup');
  if (!popup.contains(e.target)) popup.classList.remove('open');
});

/* ============================================================
       NOTIFICATIONS
    ============================================================ */
function toggleNotifs() {
  const panel = document.getElementById('notifPanel');
  panel.classList.toggle('open');
  document.getElementById('notifBadge').style.display = 'none';
}

document.addEventListener('click', e => {
  const panel = document.getElementById('notifPanel');
  const btn = document.getElementById('notifBtn');
  if (!panel.contains(e.target) && !btn.contains(e.target)) {
    panel.classList.remove('open');
  }
});

/* ============================================================
       FOLLOW BUTTON
    ============================================================ */
function toggleFollow(btn) {
  if (btn.textContent === 'Follow') {
    btn.textContent = 'Following';
    btn.style.color = 'var(--text-primary)';
    showToast('Following!');
  } else {
    btn.textContent = 'Follow';
    btn.style.color = '';
  }
}

function toggleFollowPopup(btn) { toggleFollow(btn); }

/* ============================================================
       INVESTIGATOR MODE — Press "I"
    ============================================================ */
document.addEventListener('keydown', e => {
  const tag = e.target.tagName.toLowerCase();
  if (tag === 'input' || tag === 'textarea') return;

  if (e.key === 'i' || e.key === 'I') {
    investigatorOn = !investigatorOn;
    document.getElementById('appShell').classList.toggle('investigator-mode', investigatorOn);
    showToast(investigatorOn
      ? '🔍 Investigator Mode ON — hover red markers for findings'
      : '✅ Investigator Mode OFF');
  }

  if (e.key === 'Escape') {
    closeLightbox();
    closePopup();
    document.getElementById('notifPanel').classList.remove('open');
  }

  if (e.key === 'ArrowLeft' && document.getElementById('lightbox').classList.contains('open')) lbNav(-1);
  if (e.key === 'ArrowRight' && document.getElementById('lightbox').classList.contains('open')) lbNav(1);
});

/* ============================================================
       TOAST
    ============================================================ */
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

/* ============================================================
       SCROLL TO TOP
    ============================================================ */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
       INIT
    ============================================================ */
renderPosts(POSTS);

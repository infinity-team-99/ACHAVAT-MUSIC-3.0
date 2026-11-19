// ========================================================
// ACHAVAT MUSIC STUDIO - TO'LIQ VA MUKAMMAL JAVOB KODI
// ========================================================

const tracksGrid = document.getElementById('tracksGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const tabBtns = document.querySelectorAll('.tab-btn');
const langSelect = document.getElementById('langSelect');

// Theme Toggle
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');

// Profil elementlari
const profileBtn = document.getElementById('profileBtn');
const profileModal = document.getElementById('profileModal');
const closeProfileModal = document.getElementById('closeProfileModal');
const usernameInput = document.getElementById('usernameInput');
const profileName = document.getElementById('profileName');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const statSaved = document.getElementById('statSaved');
const savedCountSpan = document.getElementById('savedCount');
const historyCountSpan = document.getElementById('historyCount');

// Player elementlari
const playerContainer = document.getElementById('playerContainer');
const expandPlayerBtn = document.getElementById('expandPlayerBtn');
const collapsePlayerBtn = document.getElementById('collapsePlayerBtn');
const closePlayerFull = document.getElementById('closePlayerFull');
const jellyDragHandle = document.getElementById('jellyDragHandle');

const modalCover = document.getElementById('modalCover');
const modalTitle = document.getElementById('modalTitle');
const modalArtist = document.getElementById('modalArtist');

const expandedCover = document.getElementById('expandedCover');
const expandedTitle = document.getElementById('expandedTitle');
const expandedArtist = document.getElementById('expandedArtist');
const expandedCoverBox = document.getElementById('expandedCoverBox');
const toggleVisualModeBtn = document.getElementById('toggleVisualModeBtn');
const visualModeIcon = document.getElementById('visualModeIcon');
const fullscreenVisualBtn = document.getElementById('fullscreenVisualBtn');

const fullscreenVisualizerOverlay = document.getElementById('fullscreenVisualizerOverlay');
const exitFullscreenVisualBtn = document.getElementById('exitFullscreenVisualBtn');
const fsTrackTitle = document.getElementById('fsTrackTitle');
const fsTrackArtist = document.getElementById('fsTrackArtist');
const miniVisualizerCanvas = document.getElementById('miniVisualizerCanvas');
const fullscreenVisualizerCanvas = document.getElementById('fullscreenVisualizerCanvas');

const playPauseBtn = document.getElementById('playPauseBtn');
const expandedPlayBtn = document.getElementById('expandedPlayBtn');
const playIcon = document.getElementById('playIcon');
const expandedPlayIcon = document.getElementById('expandedPlayIcon');

const prevTrackBtn = document.getElementById('prevTrackBtn');
const nextTrackBtn = document.getElementById('nextTrackBtn');
const expandedPrevBtn = document.getElementById('expandedPrevBtn');
const expandedNextBtn = document.getElementById('expandedNextBtn');

const volumeSlider = document.getElementById('volumeSlider');
const volumePercent = document.getElementById('volumePercent');
const muteBtn = document.getElementById('muteBtn');
const volumeIcon = document.getElementById('volumeIcon');

const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const currentTimeEl = document.getElementById('currentTime');
const totalDurationEl = document.getElementById('totalDuration');

const likeTrackBtn = document.getElementById('likeTrackBtn');
const likeIcon = document.getElementById('likeIcon');

// Tarjimalar lug'ati (UZ / EN / RU)
const translations = {
    uz: {
        searchPlaceholder: "Musiqa yoki artistlarni izlang...",
        sortDefault: "Saralash: Hammasi",
        sortRating: "⭐ Reyting",
        sortPlays: "🎧 Tinglov",
        sortAz: "🔤 A-Z",
        sectionTitle: "Trenddagi Treklar",
        tabAll: "Barchasi",
        savedLabel: "Sevimlilar",
        historyLabel: "Tarix",
        profileModalTitle: "Profil",
        usernameLabel: "Foydalanuvchi nomi:",
        statSavedLabel: "Saqlangan treklar",
        statListensLabel: "Jami tinglovlar",
        saveProfileBtn: "Saqlash",
        expandedHeaderText: "Full Cyber Player",
        defaultTrackTitle: "Musiqa nomi",
        defaultArtist: "Ijrochi"
    },
    en: {
        searchPlaceholder: "Search music or artists...",
        sortDefault: "Sort: All",
        sortRating: "⭐ Rating",
        sortPlays: "🎧 Plays",
        sortAz: "🔤 A-Z",
        sectionTitle: "Trending Tracks",
        tabAll: "All",
        savedLabel: "Favorites",
        historyLabel: "History",
        profileModalTitle: "Profile",
        usernameLabel: "Username:",
        statSavedLabel: "Saved tracks",
        statListensLabel: "Total plays",
        saveProfileBtn: "Save",
        expandedHeaderText: "Full Cyber Player",
        defaultTrackTitle: "Track Name",
        defaultArtist: "Artist"
    },
    ru: {
        searchPlaceholder: "Поиск музыки или исполнителей...",
        sortDefault: "Сортировка: Все",
        sortRating: "⭐ Рейтинг",
        sortPlays: "🎧 Прослушивания",
        sortAz: "🔤 А-Я",
        sectionTitle: "Популярные треки",
        tabAll: "Все",
        savedLabel: "Избранное",
        historyLabel: "История",
        profileModalTitle: "Профиль",
        usernameLabel: "Имя пользователя:",
        statSavedLabel: "Сохраненные треки",
        statListensLabel: "Всего прослушиваний",
        saveProfileBtn: "Сохранить",
        expandedHeaderText: "Full Cyber Player",
        defaultTrackTitle: "Название трека",
        defaultArtist: "Исполнитель"
    }
};

let currentLang = localStorage.getItem('cyber_lang') || 'uz';
if (langSelect) {
    langSelect.value = currentLang;
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cyber_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    const t = translations[lang] || translations.uz;

    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    if (sortSelect && sortSelect.options.length >= 4) {
        sortSelect.options[0].textContent = t.sortDefault;
        sortSelect.options[1].textContent = t.sortRating;
        sortSelect.options[2].textContent = t.sortPlays;
        sortSelect.options[3].textContent = t.sortAz;
    }

    const sectionTitleText = document.getElementById('sectionTitleText');
    if (sectionTitleText) sectionTitleText.textContent = t.sectionTitle;

    const tabAll = document.getElementById('tabAll');
    if (tabAll) tabAll.textContent = t.tabAll;

    const savedLabel = document.getElementById('savedLabel');
    if (savedLabel) savedLabel.textContent = t.savedLabel;

    const historyLabel = document.getElementById('historyLabel');
    if (historyLabel) historyLabel.textContent = t.historyLabel;

    const profileModalTitle = document.getElementById('profileModalTitle');
    if (profileModalTitle) profileModalTitle.textContent = t.profileModalTitle;

    const usernameLabel = document.getElementById('usernameLabel');
    if (usernameLabel) usernameLabel.textContent = t.usernameLabel;

    const statSavedLabel = document.getElementById('statSavedLabel');
    if (statSavedLabel) statSavedLabel.textContent = t.statSavedLabel;

    const statListensLabel = document.getElementById('statListensLabel');
    if (statListensLabel) statListensLabel.textContent = t.statListensLabel;

    if (saveProfileBtn) saveProfileBtn.textContent = t.saveProfileBtn;

    const expandedHeaderText = document.getElementById('expandedHeaderText');
    if (expandedHeaderText) expandedHeaderText.textContent = t.expandedHeaderText;

    if (modalTitle && (!tracks[currentTrackIndex] || !playerContainer.classList.contains('active'))) {
        modalTitle.textContent = t.defaultTrackTitle;
    }
    if (modalArtist && (!tracks[currentTrackIndex] || !playerContainer.classList.contains('active'))) {
        modalArtist.textContent = t.defaultArtist;
    }
    if (expandedTitle && (!tracks[currentTrackIndex] || !playerContainer.classList.contains('active'))) {
        expandedTitle.textContent = t.defaultTrackTitle;
    }
    if (expandedArtist && (!tracks[currentTrackIndex] || !playerContainer.classList.contains('active'))) {
        expandedArtist.textContent = t.defaultArtist;
    }
}

if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        applyLanguage(e.target.value);
    });
}

// Ma'lumotlar ombori
let tracks = [];
let savedTracksData = JSON.parse(localStorage.getItem('cyber_saved_tracks')) || [];
let savedTracks = JSON.parse(localStorage.getItem('cyber_saved')) || [];
let historyTracksData = JSON.parse(localStorage.getItem('cyber_history_tracks')) || [];

let currentTrackIndex = 0;
let audioElement = new Audio();
audioElement.crossOrigin = 'anonymous';
let isPlaying = false;
let currentFilter = 'all';

// Repeat rejimlari: 1 - 1ta qo'shiqni, 2 - Ketma-ket, 3 - Shuffle (Tasodifiy)
let repeatMode = 1;

// Vizualizator holatlari
let showVisualizerInExpanded = false;
let isFullscreenVisualizerOpen = false;
let audioCtx = null;
let analyser = null;
let audioSource = null;
let frequencyData = null;

// ========================================================
// JELE FIZIKASI BILAN SURISH (DRAG + SPRING/JELLY PHYSICS)
// ========================================================
const jellyState = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5,
    targetX: window.innerWidth * 0.5,
    targetY: window.innerHeight * 0.5,
    vx: 0,
    vy: 0,
    scaleX: 1,
    scaleY: 1,
    vScaleX: 0,
    vScaleY: 0,
    skewX: 0,
    vSkewX: 0,
    isDragging: false,
    pointerId: null,
    offsetX: 0,
    offsetY: 0,
    lastClientX: 0,
    lastClientY: 0,
    lastTime: 0,
    dragVx: 0,
    dragVy: 0,
    hasCustomPosition: false,
    rafId: null
};

function clampPlayerCenter(cx, cy) {
    if (!playerContainer) return { x: cx, y: cy };
    const rect = playerContainer.getBoundingClientRect();
    const halfW = (rect.width || 390) * 0.5;
    const halfH = (rect.height || 525) * 0.5;
    const padX = 16;
    const padY = 16;

    const minX = halfW + padX;
    const maxX = Math.max(minX, window.innerWidth - halfW - padX);
    const minY = halfH + padY;
    const maxY = Math.max(minY, window.innerHeight - halfH - padY);

    return {
        x: Math.max(minX, Math.min(maxX, cx)),
        y: Math.max(minY, Math.min(maxY, cy))
    };
}

function resetJellyPlayerPosition(animateSpring = false) {
    if (!playerContainer) return;
    const centerX = window.innerWidth * 0.5;
    const centerY = window.innerHeight * 0.5;

    jellyState.isDragging = false;
    jellyState.pointerId = null;
    jellyState.hasCustomPosition = false;
    playerContainer.classList.remove('jelly-dragging');

    if (!animateSpring) {
        jellyState.x = centerX;
        jellyState.y = centerY;
        jellyState.targetX = centerX;
        jellyState.targetY = centerY;
        jellyState.vx = 0;
        jellyState.vy = 0;
        jellyState.scaleX = 1;
        jellyState.scaleY = 1;
        jellyState.vScaleX = 0;
        jellyState.vScaleY = 0;
        jellyState.skewX = 0;
        jellyState.vSkewX = 0;
        playerContainer.style.left = '';
        playerContainer.style.top = '';
        playerContainer.style.transform = '';
    } else {
        jellyState.targetX = centerX;
        jellyState.targetY = centerY;
        startJellyPhysicsLoop();
    }
}

function applyJellyTransformToPlayer() {
    if (!playerContainer || !playerContainer.classList.contains('expanded')) return;
    if (!jellyState.hasCustomPosition && !jellyState.isDragging &&
        Math.abs(jellyState.x - window.innerWidth * 0.5) < 0.5 &&
        Math.abs(jellyState.y - window.innerHeight * 0.5) < 0.5 &&
        Math.abs(jellyState.scaleX - 1) < 0.002 &&
        Math.abs(jellyState.scaleY - 1) < 0.002 &&
        Math.abs(jellyState.skewX) < 0.05) {
        playerContainer.style.left = '';
        playerContainer.style.top = '';
        playerContainer.style.transform = '';
        return;
    }

    playerContainer.style.left = `${jellyState.x.toFixed(2)}px`;
    playerContainer.style.top = `${jellyState.y.toFixed(2)}px`;
    playerContainer.style.transform =
        `translate3d(-50%, -50%, 0) skewX(${jellyState.skewX.toFixed(2)}deg) scale3d(${jellyState.scaleX.toFixed(3)}, ${jellyState.scaleY.toFixed(3)}, 1)`;
}

function stepJellyPhysics() {
    jellyState.rafId = null;
    if (!playerContainer || !playerContainer.classList.contains('expanded')) {
        return;
    }

    // Pozitsiya yumshoq jele/prujina fizikasi
    const posStiffness = jellyState.isDragging ? 0.34 : 0.14;
    const posDamping = jellyState.isDragging ? 0.68 : 0.78;

    const ax = (jellyState.targetX - jellyState.x) * posStiffness;
    const ay = (jellyState.targetY - jellyState.y) * posStiffness;
    jellyState.vx = (jellyState.vx + ax) * posDamping;
    jellyState.vy = (jellyState.vy + ay) * posDamping;
    jellyState.x += jellyState.vx;
    jellyState.y += jellyState.vy;

    // Surish tezligiga qarab suyuq jele cho'zilishi (squash & stretch)
    const speed = Math.hypot(jellyState.dragVx, jellyState.dragVy);
    const stretchFactor = Math.min(0.22, speed * 0.00018);
    const dirRatio = speed > 1 ? Math.abs(jellyState.dragVx) / speed : 0.5;

    let goalScaleX = 1;
    let goalScaleY = 1;
    let goalSkewX = 0;

    if (jellyState.isDragging) {
        goalScaleX = 1 + stretchFactor * (0.4 + 0.6 * dirRatio) - stretchFactor * 0.35 * (1 - dirRatio);
        goalScaleY = 1 + stretchFactor * (0.4 + 0.6 * (1 - dirRatio)) - stretchFactor * 0.35 * dirRatio;
        goalSkewX = Math.max(-9, Math.min(9, -jellyState.dragVx * 0.006));
    } else {
        // Qo'yib yuborilganda harakat inertsiyasidan yengil jele tebranishi
        const motionStretch = Math.min(0.14, Math.hypot(jellyState.vx, jellyState.vy) * 0.0045);
        goalScaleX = 1 + motionStretch * 0.65;
        goalScaleY = 1 - motionStretch * 0.55;
        goalSkewX = Math.max(-7, Math.min(7, -jellyState.vx * 0.25));
    }

    const jellyStiffness = jellyState.isDragging ? 0.22 : 0.16;
    const jellyDamping = jellyState.isDragging ? 0.66 : 0.74;

    jellyState.vScaleX = (jellyState.vScaleX + (goalScaleX - jellyState.scaleX) * jellyStiffness) * jellyDamping;
    jellyState.vScaleY = (jellyState.vScaleY + (goalScaleY - jellyState.scaleY) * jellyStiffness) * jellyDamping;
    jellyState.vSkewX = (jellyState.vSkewX + (goalSkewX - jellyState.skewX) * jellyStiffness) * jellyDamping;

    jellyState.scaleX += jellyState.vScaleX;
    jellyState.scaleY += jellyState.vScaleY;
    jellyState.skewX += jellyState.vSkewX;

    applyJellyTransformToPlayer();

    const stillMoving =
        jellyState.isDragging ||
        Math.abs(jellyState.targetX - jellyState.x) > 0.15 ||
        Math.abs(jellyState.targetY - jellyState.y) > 0.15 ||
        Math.abs(jellyState.vx) > 0.12 ||
        Math.abs(jellyState.vy) > 0.12 ||
        Math.abs(1 - jellyState.scaleX) > 0.002 ||
        Math.abs(1 - jellyState.scaleY) > 0.002 ||
        Math.abs(jellyState.vScaleX) > 0.002 ||
        Math.abs(jellyState.vScaleY) > 0.002 ||
        Math.abs(jellyState.skewX) > 0.04;

    if (stillMoving) {
        jellyState.rafId = window.requestAnimationFrame(stepJellyPhysics);
    } else {
        jellyState.x = jellyState.targetX;
        jellyState.y = jellyState.targetY;
        jellyState.vx = 0;
        jellyState.vy = 0;
        jellyState.scaleX = 1;
        jellyState.scaleY = 1;
        jellyState.vScaleX = 0;
        jellyState.vScaleY = 0;
        jellyState.skewX = 0;
        jellyState.vSkewX = 0;
        applyJellyTransformToPlayer();
    }
}

function startJellyPhysicsLoop() {
    if (!jellyState.rafId) {
        jellyState.rafId = window.requestAnimationFrame(stepJellyPhysics);
    }
}

if (jellyDragHandle && playerContainer) {
    jellyDragHandle.addEventListener('pointerdown', (e) => {
        if (!playerContainer.classList.contains('expanded')) return;
        e.preventDefault();

        const rect = playerContainer.getBoundingClientRect();
        const currentCenterX = rect.left + rect.width * 0.5;
        const currentCenterY = rect.top + rect.height * 0.5;

        jellyState.isDragging = true;
        jellyState.hasCustomPosition = true;
        jellyState.pointerId = e.pointerId;
        jellyState.x = currentCenterX;
        jellyState.y = currentCenterY;
        jellyState.targetX = currentCenterX;
        jellyState.targetY = currentCenterY;
        jellyState.offsetX = e.clientX - currentCenterX;
        jellyState.offsetY = e.clientY - currentCenterY;
        jellyState.lastClientX = e.clientX;
        jellyState.lastClientY = e.clientY;
        jellyState.lastTime = performance.now();
        jellyState.dragVx = 0;
        jellyState.dragVy = 0;

        jellyDragHandle.setPointerCapture(e.pointerId);
        playerContainer.classList.add('jelly-dragging');
        startJellyPhysicsLoop();
    });

    jellyDragHandle.addEventListener('pointermove', (e) => {
        if (!jellyState.isDragging || e.pointerId !== jellyState.pointerId) return;

        const now = performance.now();
        const dt = Math.max(8, now - jellyState.lastTime);
        const dx = e.clientX - jellyState.lastClientX;
        const dy = e.clientY - jellyState.lastClientY;

        jellyState.dragVx = (dx / dt) * 1000;
        jellyState.dragVy = (dy / dt) * 1000;
        jellyState.lastClientX = e.clientX;
        jellyState.lastClientY = e.clientY;
        jellyState.lastTime = now;

        const clamped = clampPlayerCenter(e.clientX - jellyState.offsetX, e.clientY - jellyState.offsetY);
        jellyState.targetX = clamped.x;
        jellyState.targetY = clamped.y;

        // Qo'yib yuborilganda yengil jele inertsiyasi uchun impuls berish
        jellyState.vx = jellyState.vx * 0.4 + dx * 0.35;
        jellyState.vy = jellyState.vy * 0.4 + dy * 0.35;

        startJellyPhysicsLoop();
    });

    const finishJellyDrag = (e) => {
        if (!jellyState.isDragging) return;
        if (e && e.pointerId !== undefined && jellyState.pointerId !== null && e.pointerId !== jellyState.pointerId) {
            return;
        }

        jellyState.isDragging = false;
        jellyState.pointerId = null;
        playerContainer.classList.remove('jelly-dragging');

        // Qo'yib yuborilgan paytdagi tezlikdan yengil "sirpanish + jele qaytishi" effekti
        const inertiaX = Math.max(-75, Math.min(75, jellyState.dragVx * 0.045));
        const inertiaY = Math.max(-65, Math.min(65, jellyState.dragVy * 0.045));
        const clampedTarget = clampPlayerCenter(jellyState.targetX + inertiaX, jellyState.targetY + inertiaY);
        jellyState.targetX = clampedTarget.x;
        jellyState.targetY = clampedTarget.y;
        jellyState.vx += inertiaX * 0.22;
        jellyState.vy += inertiaY * 0.22;
        jellyState.dragVx = 0;
        jellyState.dragVy = 0;

        startJellyPhysicsLoop();
    };

    jellyDragHandle.addEventListener('pointerup', finishJellyDrag);
    jellyDragHandle.addEventListener('pointercancel', finishJellyDrag);
}

let username = localStorage.getItem('cyber_user') || 'CyberUser_01';
profileName.textContent = username;
usernameInput.value = username;

// Avatar elementlari
const avatarContainer = document.getElementById('avatarContainer');
const avatarFileInput = document.getElementById('avatarFileInput');
const userAvatarImg = document.getElementById('userAvatarImg');
const headerAvatarImg = document.getElementById('headerAvatarImg');

let userAvatar = localStorage.getItem('cyber_avatar') || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150";
userAvatarImg.src = userAvatar;
headerAvatarImg.src = userAvatar;

// 1. Tema rejimi
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const htmlEl = document.documentElement;
        if (htmlEl.getAttribute('data-theme') === 'dark') {
            htmlEl.setAttribute('data-theme', 'light');
            themeIcon.className = "fa-solid fa-sun";
        } else {
            htmlEl.setAttribute('data-theme', 'dark');
            themeIcon.className = "fa-solid fa-moon";
        }
    });
}

// 2. Musiqa yuklash (API orqali)
async function fetchAllMusic(query = "cyberpunk electronic") {
    if (!tracksGrid) return;

    if (currentFilter === 'saved' && query === "cyberpunk electronic" && tracks.length === 0) {
        applyFilterAndSort();
        return;
    }

    tracksGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--neon-cyan); padding: 40px; font-size: 16px;"><i class="fa-solid fa-spinner fa-spin"></i> Treklar yuklanmoqda...</div>`;

    try {
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&limit=60`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const fetchedTracks = data.results.map((track, i) => ({
                id: track.trackId || i,
                title: track.trackName,
                artist: track.artistName,
                cover: track.artworkUrl100.replace('100x100bb', '600x600bb'),
                preview: track.previewUrl,
                rating: (Math.random() * (5.0 - 4.2) + 4.2).toFixed(1),
                plays: Math.floor(Math.random() * 90000) + 5000
            }));

            const trackMap = new Map();
            savedTracksData.forEach(t => trackMap.set(t.id, t));
            historyTracksData.forEach(t => trackMap.set(t.id, t));
            fetchedTracks.forEach(t => trackMap.set(t.id, t));

            tracks = Array.from(trackMap.values());
            applyFilterAndSort();
        } else {
            applyFilterAndSort();
        }
    } catch (error) {
        console.error("Xatolik:", error);
        applyFilterAndSort();
    }
}

// 3. Filtr va Saralash (Barchasi / Sevimlilar / Tarix)
function applyFilterAndSort() {
    let list = [...tracks];

    savedTracksData.forEach(savedTrack => {
        if (!tracks.some(t => t.id === savedTrack.id)) {
            tracks.push(savedTrack);
        }
    });

    if (currentFilter === 'saved') {
        list = [...savedTracksData];
    } else if (currentFilter === 'history') {
        list = [...historyTracksData];
    }

    const sortVal = sortSelect ? sortSelect.value : 'all';
    if (sortVal === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (sortVal === 'plays') list.sort((a, b) => b.plays - a.plays);
    else if (sortVal === 'az') list.sort((a, b) => a.title.localeCompare(b.title));

    renderTracks(list);
    updateStats();
}

// Tarixga qo'shish funksiyasi
function addToHistory(track) {
    if (!track || !track.id) return;
    historyTracksData = historyTracksData.filter(t => t.id !== track.id);
    historyTracksData.unshift(track);
    if (historyTracksData.length > 30) {
        historyTracksData = historyTracksData.slice(0, 30);
    }
    localStorage.setItem('cyber_history_tracks', JSON.stringify(historyTracksData));
    updateStats();
    if (currentFilter === 'history') {
        applyFilterAndSort();
    }
}

// 4. Trek kartochkalarini chiqarish
function renderTracks(data) {
    if (!tracksGrid) return;
    tracksGrid.innerHTML = '';

    if (data.length === 0) {
        tracksGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Hech qanday trek topilmadi 😕</div>`;
        return;
    }

    data.forEach((track, idx) => {
        const isLiked = savedTracks.includes(track.id);
        const card = document.createElement('div');
        card.className = 'glass-box track-card';
        card.style.animationDelay = `${Math.min(idx * 25, 350)}ms`;
        card.innerHTML = `
            <div class="track-cover-container">
                <img src="${track.cover}" alt="${track.title}" class="track-cover">
                <span class="track-badge">⭐ ${track.rating || "4.8"}</span>
            </div>
            <div class="track-title">${track.title}</div>
            <div class="track-artist">${track.artist}</div>
            <div class="track-meta">
                <span>🎧 ${(track.plays || 15000).toLocaleString()}</span>
                <span><i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart" style="color: ${isLiked ? 'var(--neon-pink)' : 'inherit'}"></i></span>
            </div>
        `;
        card.addEventListener('click', () => {
            tracks = data;
            const index = tracks.findIndex(t => t.id === track.id);
            openPlayer(index);
        });
        tracksGrid.appendChild(card);
    });
}

// 5. Web Audio API Visualizer (Ritm ustunchalari)
function initAudioVisualizer() {
    if (audioCtx) {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume().catch(() => {});
        }
        return;
    }
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 128;
        audioSource = audioCtx.createMediaElementSource(audioElement);
        audioSource.connect(analyser);
        analyser.connect(audioCtx.destination);
        frequencyData = new Uint8Array(analyser.frequencyBinCount);
    } catch (err) {
        analyser = null;
    }
}

function drawBarsOnCanvas(canvas, barCount, timeSec) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(rect.width, 10);
    const height = Math.max(rect.height, 10);

    if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    let hasRealAudioData = false;
    if (analyser && frequencyData && isPlaying && !audioElement.muted) {
        analyser.getByteFrequencyData(frequencyData);
        for (let i = 0; i < 16; i++) {
            if (frequencyData[i] > 2) {
                hasRealAudioData = true;
                break;
            }
        }
    }

    const gap = Math.max(3, Math.floor(width / (barCount * 4.2)));
    const totalGap = gap * (barCount + 1);
    const barWidth = Math.max(3, (width - totalGap) / barCount);

    for (let i = 0; i < barCount; i++) {
        let normLevel = 0.08;
        if (hasRealAudioData) {
            const binIndex = Math.min(frequencyData.length - 1, Math.floor((i / barCount) * (frequencyData.length * 0.75)));
            normLevel = frequencyData[binIndex] / 255;
        } else if (isPlaying) {
            const waveA = Math.abs(Math.sin(timeSec * 5.2 + i * 0.45));
            const waveB = Math.abs(Math.cos(timeSec * 2.8 - i * 0.25));
            normLevel = 0.22 + (waveA * 0.52 + waveB * 0.26);
        } else {
            normLevel = 0.07 + Math.abs(Math.sin(i * 0.6)) * 0.05;
        }

        const barHeight = Math.max(6, normLevel * (height * 0.78));
        const x = gap + i * (barWidth + gap);
        const y = height - barHeight - (height * 0.08);

        const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
        grad.addColorStop(0, '#00f0ff');
        grad.addColorStop(0.55, '#9d00ff');
        grad.addColorStop(1, '#ff007f');

        ctx.fillStyle = grad;
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(x, y, barWidth, barHeight, 6);
        } else {
            ctx.rect(x, y, barWidth, barHeight);
        }
        ctx.fill();
    }

    ctx.restore();
}

function renderVisualizerLoop(now = 0) {
    const timeSec = now * 0.001;
    if (showVisualizerInExpanded && playerContainer && playerContainer.classList.contains('expanded')) {
        drawBarsOnCanvas(miniVisualizerCanvas, 18, timeSec);
    }
    if (isFullscreenVisualizerOpen) {
        drawBarsOnCanvas(fullscreenVisualizerCanvas, 44, timeSec);
    }
    window.requestAnimationFrame(renderVisualizerLoop);
}
window.requestAnimationFrame(renderVisualizerLoop);

function updateVisualModeUI() {
    if (expandedCoverBox) {
        expandedCoverBox.classList.toggle('visualizer-active', showVisualizerInExpanded);
    }
    if (visualModeIcon) {
        visualModeIcon.className = showVisualizerInExpanded ? "fa-solid fa-image" : "fa-solid fa-chart-simple";
    }
}

if (toggleVisualModeBtn) {
    toggleVisualModeBtn.addEventListener('click', () => {
        showVisualizerInExpanded = !showVisualizerInExpanded;
        updateVisualModeUI();
        if (showVisualizerInExpanded) {
            initAudioVisualizer();
        }
    });
}

function openFullscreenVisualizer() {
    const track = tracks[currentTrackIndex];
    if (track) {
        if (fsTrackTitle) fsTrackTitle.textContent = track.title || "Musiqa nomi";
        if (fsTrackArtist) fsTrackArtist.textContent = track.artist || "Ijrochi";
    }
    isFullscreenVisualizerOpen = true;
    if (fullscreenVisualizerOverlay) {
        fullscreenVisualizerOverlay.classList.add('active');
    }
    initAudioVisualizer();
}

function closeFullscreenVisualizer() {
    isFullscreenVisualizerOpen = false;
    if (fullscreenVisualizerOverlay) {
        fullscreenVisualizerOverlay.classList.remove('active');
    }
}

if (fullscreenVisualBtn) {
    fullscreenVisualBtn.addEventListener('click', openFullscreenVisualizer);
}
if (exitFullscreenVisualBtn) {
    exitFullscreenVisualBtn.addEventListener('click', closeFullscreenVisualizer);
}

// 6. Pleer funksiyalari
function openPlayer(index) {
    currentTrackIndex = index;
    const track = tracks[currentTrackIndex];
    if (!track) return;

    if (modalCover) modalCover.src = track.cover;
    if (modalTitle) modalTitle.textContent = track.title;
    if (modalArtist) modalArtist.textContent = track.artist;

    if (expandedCover) expandedCover.src = track.cover;
    if (expandedTitle) expandedTitle.textContent = track.title;
    if (expandedArtist) expandedArtist.textContent = track.artist;
    if (fsTrackTitle) fsTrackTitle.textContent = track.title;
    if (fsTrackArtist) fsTrackArtist.textContent = track.artist;

    addToHistory(track);

    if (track.preview) {
        audioElement.src = track.preview;
        initAudioVisualizer();
        audioElement.play().then(() => {
            isPlaying = true;
            updatePlayState();
        }).catch(() => {
            isPlaying = true;
            updatePlayState();
        });
        isPlaying = true;
    } else {
        isPlaying = false;
    }
    updatePlayState();
    updateLikeButtonState(track.id);
    if (playerContainer) playerContainer.classList.add('active');
}

if (expandPlayerBtn) {
    expandPlayerBtn.addEventListener('click', () => {
        playerContainer.classList.add('expanded');
        resetJellyPlayerPosition(false);
    });
}
if (collapsePlayerBtn) {
    collapsePlayerBtn.addEventListener('click', () => {
        resetJellyPlayerPosition(false);
        playerContainer.classList.remove('expanded');
    });
}

if (closePlayerFull) {
    closePlayerFull.addEventListener('click', () => {
        resetJellyPlayerPosition(false);
        playerContainer.classList.remove('active', 'expanded');
        closeFullscreenVisualizer();
        audioElement.pause();
        isPlaying = false;
        updatePlayState();
    });
}

function togglePlay() {
    if (!audioElement.src && tracks[currentTrackIndex] && tracks[currentTrackIndex].preview) {
        openPlayer(currentTrackIndex);
        return;
    }
    if (isPlaying) {
        audioElement.pause();
        isPlaying = false;
    } else {
        initAudioVisualizer();
        audioElement.play().catch(() => {});
        isPlaying = true;
    }
    updatePlayState();
}

if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlay);
if (expandedPlayBtn) expandedPlayBtn.addEventListener('click', togglePlay);

function updatePlayState() {
    if (isPlaying) {
        if (playIcon) playIcon.className = "fa-solid fa-pause";
        if (expandedPlayIcon) expandedPlayIcon.className = "fa-solid fa-pause";
    } else {
        if (playIcon) playIcon.className = "fa-solid fa-play";
        if (expandedPlayIcon) expandedPlayIcon.className = "fa-solid fa-play";
    }
}

function nextTrack() {
    if (tracks.length === 0) return;
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    openPlayer(currentTrackIndex);
}

function prevTrack() {
    if (tracks.length === 0) return;
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    openPlayer(currentTrackIndex);
}

if (nextTrackBtn) nextTrackBtn.addEventListener('click', nextTrack);
if (expandedNextBtn) expandedNextBtn.addEventListener('click', nextTrack);
if (prevTrackBtn) prevTrackBtn.addEventListener('click', prevTrack);
if (expandedPrevBtn) expandedPrevBtn.addEventListener('click', prevTrack);

// Ovoz balandligi va Mute
let savedVolume = Number(localStorage.getItem('cyber_volume') ?? 80);
savedVolume = Math.max(0, Math.min(100, savedVolume));
audioElement.volume = savedVolume / 100;

function syncVolumeUI() {
    const currentVolPercent = audioElement.muted ? 0 : Math.round(audioElement.volume * 100);
    if (volumeSlider) volumeSlider.value = currentVolPercent;
    if (volumePercent) volumePercent.textContent = `${currentVolPercent}%`;
    if (volumeIcon) {
        if (currentVolPercent === 0 || audioElement.muted) {
            volumeIcon.className = "fa-solid fa-volume-xmark";
        } else if (currentVolPercent < 50) {
            volumeIcon.className = "fa-solid fa-volume-low";
        } else {
            volumeIcon.className = "fa-solid fa-volume-high";
        }
    }
}

if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
        const val = Number(e.target.value);
        audioElement.muted = val === 0;
        audioElement.volume = val / 100;
        if (val > 0) savedVolume = val;
        localStorage.setItem('cyber_volume', String(val));
        syncVolumeUI();
    });
}

if (muteBtn) {
    muteBtn.addEventListener('click', () => {
        if (audioElement.muted || audioElement.volume === 0) {
            audioElement.muted = false;
            const restoreVol = savedVolume > 0 ? savedVolume : 80;
            audioElement.volume = restoreVol / 100;
        } else {
            savedVolume = Math.round(audioElement.volume * 100) || 80;
            audioElement.muted = true;
        }
        syncVolumeUI();
    });
}

// 7. Takrorlash rejimlari (LoopBtn)
const loopTrackBtn = document.getElementById('loopTrackBtn');
const loopIcon = loopTrackBtn ? loopTrackBtn.querySelector('i') : null;

if (loopTrackBtn) {
    loopTrackBtn.addEventListener('click', () => {
        repeatMode++;
        if (repeatMode > 3) repeatMode = 1;
        updateRepeatButtonUI();
    });
}

function updateRepeatButtonUI() {
    if (!loopTrackBtn || !loopIcon) return;
    loopTrackBtn.style.borderColor = "var(--glass-border)";
    loopTrackBtn.style.boxShadow = "none";

    switch (repeatMode) {
        case 1:
            loopIcon.className = "fa-solid fa-1";
            loopTrackBtn.style.color = "var(--neon-cyan)";
            loopTrackBtn.style.borderColor = "var(--neon-cyan)";
            loopTrackBtn.style.boxShadow = "0 0 10px rgba(0, 240, 255, 0.4)";
            break;
        case 2:
            loopIcon.className = "fa-solid fa-rotate-right";
            loopTrackBtn.style.color = "var(--neon-pink)";
            loopTrackBtn.style.borderColor = "var(--neon-pink)";
            loopTrackBtn.style.boxShadow = "0 0 10px rgba(255, 0, 127, 0.4)";
            break;
        case 3:
            loopIcon.className = "fa-solid fa-shuffle";
            loopTrackBtn.style.color = "var(--neon-purple)";
            loopTrackBtn.style.borderColor = "var(--neon-purple)";
            loopTrackBtn.style.boxShadow = "0 0 10px rgba(157, 0, 255, 0.4)";
            break;
    }
}

audioElement.onended = () => {
    if (repeatMode === 1) {
        audioElement.currentTime = 0;
        audioElement.play().catch(() => {});
    } else if (repeatMode === 2) {
        nextTrack();
    } else if (repeatMode === 3) {
        if (tracks.length > 0) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * tracks.length);
            } while (randomIndex === currentTrackIndex && tracks.length > 1);
            currentTrackIndex = randomIndex;
            openPlayer(currentTrackIndex);
        }
    }
};

// 8. Sevimlilarga qo'shish / O'chirish
if (likeTrackBtn) {
    likeTrackBtn.addEventListener('click', () => {
        const track = tracks[currentTrackIndex];
        if (!track) return;

        const index = savedTracks.indexOf(track.id);
        if (index > -1) {
            savedTracks.splice(index, 1);
            savedTracksData = savedTracksData.filter(t => t.id !== track.id);
        } else {
            savedTracks.push(track.id);
            if (!savedTracksData.some(t => t.id === track.id)) {
                savedTracksData.push(track);
            }
        }

        localStorage.setItem('cyber_saved', JSON.stringify(savedTracks));
        localStorage.setItem('cyber_saved_tracks', JSON.stringify(savedTracksData));

        updateLikeButtonState(track.id);
        applyFilterAndSort();
    });
}

function updateLikeButtonState(trackId) {
    if (!likeIcon) return;
    const isLiked = savedTracks.includes(trackId);
    if (isLiked) {
        likeIcon.className = "fa-solid fa-heart";
        likeIcon.style.color = "var(--neon-pink)";
    } else {
        likeIcon.className = "fa-regular fa-heart";
        likeIcon.style.color = "inherit";
    }
}

function updateStats() {
    if (savedCountSpan) savedCountSpan.textContent = savedTracks.length;
    if (statSaved) statSaved.textContent = savedTracks.length;
    if (historyCountSpan) historyCountSpan.textContent = historyTracksData.length;
}

// 9. Vaqt va Progress bar
audioElement.addEventListener('timeupdate', () => {
    if (audioElement.duration && progressBar) {
        const percent = (audioElement.currentTime / audioElement.duration) * 100;
        progressBar.style.width = percent + '%';
        let currentSec = Math.floor(audioElement.currentTime);
        if (currentTimeEl) currentTimeEl.textContent = `0:${currentSec < 10 ? '0' : ''}${currentSec}`;
    }
});

if (progressContainer) {
    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        if (audioElement.duration) {
            audioElement.currentTime = (clickX / width) * audioElement.duration;
        }
    });
}

// 10. Filtr tugmalari (Barchasi / Sevimlilar / Tarix)
tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        tabBtns.forEach(b => b.classList.remove('active'));
        targetBtn.classList.add('active');
        currentFilter = targetBtn.getAttribute('data-filter');
        applyFilterAndSort();
    });
});

// Tezkor janr tugmalari
const genreChips = document.querySelectorAll('.genre-chip');
genreChips.forEach(chip => {
    chip.addEventListener('click', () => {
        genreChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const q = chip.getAttribute('data-query') || "cyberpunk electronic";
        if (searchInput) searchInput.value = '';
        fetchAllMusic(q);
    });
});

// 11. Profil modal oynasi va Avatar
if (profileBtn) profileBtn.addEventListener('click', () => profileModal.classList.add('active'));
if (closeProfileModal) closeProfileModal.addEventListener('click', () => profileModal.classList.remove('active'));

if (avatarContainer && avatarFileInput) {
    avatarContainer.addEventListener('click', () => avatarFileInput.click());
    avatarFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                userAvatar = event.target.result;
                if (userAvatarImg) userAvatarImg.src = userAvatar;
            };
            reader.readAsDataURL(file);
        }
    });
}

if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
        const val = usernameInput ? usernameInput.value.trim() : '';
        if (val) {
            username = val;
            localStorage.setItem('cyber_user', username);
        }
        localStorage.setItem('cyber_avatar', userAvatar);

        if (profileName) profileName.textContent = username;
        if (headerAvatarImg) headerAvatarImg.src = userAvatar;
        if (profileModal) profileModal.classList.remove('active');
    });
}

// 12. Qidiruv va Saralash listenerlari
let searchTimeout;
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const term = e.target.value.trim();
        searchTimeout = setTimeout(() => {
            fetchAllMusic(term.length > 0 ? term : "cyberpunk electronic");
        }, 300);
    });
}

if (sortSelect) {
    sortSelect.addEventListener('change', applyFilterAndSort);
}

// Klaviatura yorliqlari (Space, ArrowLeft, ArrowRight, M, Escape)
document.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    const isTyping = tag === 'input' || tag === 'textarea' || tag === 'select';

    if (e.code === 'Escape' && isFullscreenVisualizerOpen) {
        closeFullscreenVisualizer();
        return;
    }

    if (isTyping) return;

    if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
    } else if (e.code === 'ArrowRight') {
        nextTrack();
    } else if (e.code === 'ArrowLeft') {
        prevTrack();
    } else if (e.key === 'm' || e.key === 'M') {
        if (muteBtn) muteBtn.click();
    }
});

// Kursor nuri (Parallax glow)
const glow1 = document.querySelector('.cyber-glow-1');
const glow2 = document.querySelector('.cyber-glow-2');
document.addEventListener('mousemove', (e) => {
    const offsetX = (e.clientX / window.innerWidth - 0.5) * 36;
    const offsetY = (e.clientY / window.innerHeight - 0.5) * 36;
    if (glow1) glow1.style.transform = `translate(${offsetX.toFixed(1)}px, ${offsetY.toFixed(1)}px)`;
    if (glow2) glow2.style.transform = `translate(${(-offsetX).toFixed(1)}px, ${(-offsetY).toFixed(1)}px)`;
}, { passive: true });

// 13. SCROLL PAYTIDA SILINDR DEVOIDEY AYLANISH ANIMATSIYASI
let cylinderRafId = null;

function updateCylinderScrollEffect() {
    cylinderRafId = null;
    if (!tracksGrid) return;

    const cards = tracksGrid.querySelectorAll('.track-card');
    if (!cards.length) return;

    const viewportCenterY = window.innerHeight * 0.5;
    const maxDistance = Math.max(window.innerHeight * 0.7, 380);

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height * 0.5;

        let normOffset = (cardCenterY - viewportCenterY) / maxDistance;
        normOffset = Math.max(-1.1, Math.min(1.1, normOffset));

        const angleDeg = -normOffset * 10;
        const depthZ = -Math.pow(Math.abs(normOffset), 1.3) * 45;
        const scaleVal = 1 - Math.pow(Math.abs(normOffset), 1.4) * 0.03;
        const opacityVal = Math.max(0.7, 1 - Math.pow(Math.abs(normOffset), 2) * 0.25);

        const cylinderTransform = `translate3d(0, 0, ${depthZ.toFixed(1)}px) rotateX(${angleDeg.toFixed(1)}deg) scale(${scaleVal.toFixed(3)})`;
        card.style.transform = cylinderTransform;
        card.style.opacity = opacityVal.toFixed(2);
    });
}

function scheduleCylinderUpdate() {
    if (!cylinderRafId) {
        cylinderRafId = window.requestAnimationFrame(updateCylinderScrollEffect);
    }
}

const originalRenderTracks = renderTracks;
renderTracks = function (data) {
    originalRenderTracks(data);
    scheduleCylinderUpdate();
};

window.addEventListener('scroll', scheduleCylinderUpdate, { passive: true });
window.addEventListener('resize', () => {
    scheduleCylinderUpdate();
    if (playerContainer && playerContainer.classList.contains('expanded') && jellyState.hasCustomPosition) {
        const clamped = clampPlayerCenter(jellyState.targetX, jellyState.targetY);
        jellyState.targetX = clamped.x;
        jellyState.targetY = clamped.y;
        startJellyPhysicsLoop();
    }
}, { passive: true });

// Dastlabki ishga tushirish
applyLanguage(currentLang);
syncVolumeUI();
updateVisualModeUI();
fetchAllMusic("cyberpunk electronic");
updateRepeatButtonUI();
updateStats();
scheduleCylinderUpdate();
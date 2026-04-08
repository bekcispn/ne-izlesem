// CİHAZ KİMLİĞİ OLUŞTUR
function getDeviceId() {
    try {
        const screenRes = `${screen.width}x${screen.height}`;
        const userAgent = navigator.userAgent;
        const language = navigator.language;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        let str = `${screenRes}|${language}|${timezone}|${userAgent.substring(0, 80)}`;
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash).toString(16).substring(0, 8);
    } catch(e) { return "default"; }
}

const deviceId = getDeviceId();
const STORAGE_WATCHED_KEY = `watched_${deviceId}`;
let watchedIds = [];
let currentType = "movie";
let currentCategory = "all";
let currentItems = [];
let displayCount = 12;
let isLoading = false;

// YÜKLEME EKRANI
setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "flex";
    setTimeout(() => {
        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        document.getElementById("deviceId").innerText = deviceId;
        loadWatchedData();
        setupEventListeners();
        showMovies();
    }, 2000);
}, 3500);

// İZLENEN VERİLERİ YÜKLE
function loadWatchedData() {
    const saved = localStorage.getItem(STORAGE_WATCHED_KEY);
    if (saved) {
        watchedIds = JSON.parse(saved);
    } else {
        watchedIds = [];
    }
    updateWatchedCount();
}

// İZLENDİ OLARAK İŞARETLE
function markAsWatched(id) {
    if (!watchedIds.includes(id)) {
        watchedIds.push(id);
        localStorage.setItem(STORAGE_WATCHED_KEY, JSON.stringify(watchedIds));
        updateWatchedCount();
        renderItems();
    }
}

// İZLENEN SAYISINI GÜNCELLE
function updateWatchedCount() {
    document.getElementById("watchedCount").innerText = watchedIds.length;
}

// FİLMLERİ GÖSTER
function showMovies() {
    currentType = "movie";
    currentCategory = "all";
    currentItems = [...allMovies];
    document.getElementById("resultTitle").innerHTML = '<i class="fas fa-star"></i> En Yüksek Puanlı Filmler';
    document.getElementById("categoriesSection").style.display = "flex";
    filterByCategory();
}

// DİZİLERİ GÖSTER
function showSeries() {
    currentType = "series";
    currentCategory = "all";
    currentItems = [...allSeries];
    document.getElementById("resultTitle").innerHTML = '<i class="fas fa-tv"></i> En Yüksek Puanlı Diziler';
    document.getElementById("categoriesSection").style.display = "flex";
    filterByCategory();
}

// KATEGORİYE GÖRE FİLTRELE
function filterByCategory() {
    if (currentCategory === "all") {
        currentItems = currentType === "movie" ? [...allMovies] : [...allSeries];
    } else {
        currentItems = (currentType === "movie" ? allMovies : allSeries).filter(
            item => item.category === currentCategory
        );
    }
    // İzlenenleri filtreleme (gösterme)
    currentItems = currentItems.filter(item => !watchedIds.includes(item.id));
    // Puanlara göre sırala (yüksekten düşüğe)
    currentItems.sort((a, b) => b.rating - a.rating);
    displayCount = 12;
    renderItems();
}

// LİSTELEME
function renderItems() {
    const grid = document.getElementById("resultsGrid");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const itemsToShow = currentItems.slice(0, displayCount);
    
    if (itemsToShow.length === 0) {
        grid.innerHTML = `<div class="loading-state"><i class="fas fa-check-circle"></i><br>Tüm filmleri izledin! 🎉<br><small>Yeni filmler için kategori değiştir</small></div>`;
        loadMoreBtn.style.display = "none";
        return;
    }
    
    grid.innerHTML = itemsToShow.map(item => {
        const detail = item.type === "movie" ? `🎬 ${item.duration}` : `📺 ${item.seasons} Sezon`;
        return `
            <div class="${item.type === 'movie' ? 'movie-card' : 'series-card'}">
                <div class="card-poster">
                    <i class="fas ${item.type === 'movie' ? 'fa-film' : 'fa-tv'}"></i>
                </div>
                <div class="card-info">
                    <div class="card-title">${item.title}</div>
                    <div class="card-year">${item.year}</div>
                    <div class="imdb-rating">⭐ ${item.rating}</div>
                    <div class="card-detail">${detail}</div>
                    <button class="watched-btn" data-id="${item.id}">
                        <i class="fas fa-check-circle"></i> İzledim
                    </button>
                </div>
            </div>
        `;
    }).join("");
    
    // Buton olaylarını ekle
    document.querySelectorAll(".watched-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            if (!btn.classList.contains("watched")) {
                btn.classList.add("watched");
                btn.innerHTML = '<i class="fas fa-check"></i> İzledim ✓';
                markAsWatched(id);
            }
        });
    });
    
    // Daha fazla yükle butonunu göster/gizle
    if (displayCount < currentItems.length) {
        loadMoreBtn.style.display = "block";
    } else {
        loadMoreBtn.style.display = "none";
    }
}

// DAHA FAZLA YÜKLE
function loadMore() {
    if (isLoading) return;
    isLoading = true;
    const btn = document.querySelector(".btn-load-more");
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yükleniyor...';
    setTimeout(() => {
        displayCount += 12;
        renderItems();
        isLoading = false;
        btn.innerHTML = '<i class="fas fa-arrow-down"></i> Daha Fazla Yükle';
    }, 500);
}

// OLAY DİNLEYİCİLERİ
function setupEventListeners() {
    document.getElementById("movieCard").addEventListener("click", showMovies);
    document.getElementById("seriesCard").addEventListener("click", showSeries);
    document.getElementById("loadMoreBtn").querySelector(".btn-load-more").addEventListener("click", loadMore);
    
    // Kategori butonları
    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-cat");
            displayCount = 12;
            filterByCategory();
        });
    });
}

// BAŞLANGIÇTA HEADER BADGE
document.getElementById("deviceId").innerText = deviceId;
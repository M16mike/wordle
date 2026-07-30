// ===== WORD LIST =====
const WORDS = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT',
    'AFTER', 'AGAIN', 'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT',
    'ALIKE', 'ALIVE', 'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'ANGEL', 'ANGER',
    'ANGLE', 'ANGRY', 'APART', 'APPLE', 'APPLY', 'ARENA', 'ARGUE', 'ARISE',
    'ARMED', 'ARRAY', 'ARROW', 'ASIDE', 'ASSET', 'ATLAS', 'ATOMIC', 'AUDIO',
    'AVOID', 'AWAKE', 'AWARD', 'AWARE', 'BADLY', 'BAKER', 'BASES', 'BASIC',
    'BEACH', 'BEAUT', 'BEGAN', 'BEING', 'BELOW', 'BENCH', 'BILLY', 'BIRTH',
    'BLACK', 'BLAME', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD', 'BOOST', 'BOOTH',
    'BOUND', 'BRAIN', 'BRAND', 'BRAVE', 'BREAD', 'BREAK', 'BREED', 'BRIEF',
    'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BUILT', 'BUYER', 'CABLE',
    'CALIF', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS', 'CHARM',
    'CHART', 'CHASE', 'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA',
    'CIRCLE', 'CLAIM', 'CLASS', 'CLEAN', 'CLEAR', 'CLICK', 'CLIMB', 'CLOCK',
    'CLOSE', 'CLOTH', 'CLOUD', 'COACH', 'COAST', 'COULD', 'COUNT', 'COURT',
    'COVER', 'CREAM', 'CROSS', 'CROWD', 'CRUEL', 'CRUSH', 'CURVE', 'DAILY',
    'DANCE', 'DATED', 'DEALT', 'DEATH', 'DEBUT', 'DELAY', 'DELTA', 'DENSE',
    'DEPOT', 'DEPTH', 'DERBY', 'DIGIT', 'DIRTY', 'DISK', 'DOZEN', 'DRAFT',
    'DRAMA', 'DRANK', 'DRAWN', 'DREAM', 'DRESS', 'DRILL', 'DRINK', 'DRIVE',
    'DROVE', 'DYING', 'EAGER', 'EAGLE', 'EARLY', 'EARTH', 'EIGHT', 'ELITE',
    'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'EQUIP', 'ERODE',
    'ERROR', 'ESCAPE', 'EVENT', 'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FAITH',
    'FALSE', 'FAULT', 'FENCE', 'FIBER', 'FIELD', 'FIFTH', 'FIFTY', 'FIGHT',
    'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLOOR', 'FLORA', 'FOCUS',
    'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD',
    'FRESH', 'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS',
    'GLOBE', 'GOING', 'GRACE', 'GRADE', 'GRAND', 'GRANT', 'GRASS', 'GRAVE',
    'GREAT', 'GREEN', 'GROSS', 'GROUP', 'GROWN', 'GUARD', 'GUESS', 'GUEST',
    'GUIDE', 'GUILT', 'GUYANA', 'HAPPY', 'HARRY', 'HEART', 'HEAVY', 'HENCE',
    'HENRY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'IMPLY',
    'INDEX', 'INDIA', 'INDIC', 'INNER', 'INPUT', 'ISSUE', 'JAPAN', 'JIMMY',
    'JOINT', 'JONES', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE', 'LASER', 'LATER',
    'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEMON',
    'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOGIC',
    'LOOSE', 'LOWER', 'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER',
    'MARCH', 'MARIA', 'MATCH', 'MAYBE', 'MAYOR', 'MEANT', 'MEDIA', 'METAL',
    'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY', 'MONTH', 'MORAL',
    'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVED', 'MOVIE', 'MUSIC', 'NEEDS',
    'NEVER', 'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE',
    'OCCUR', 'OCEAN', 'OFFER', 'OFTEN', 'ORDER', 'OTHER', 'OUGHT', 'OUTER',
    'OWNED', 'OWNER', 'PAINT', 'PANEL', 'PAPER', 'PARIS', 'PARTY', 'PEACE',
    'PENNY', 'PETER', 'PHASE', 'PHONE', 'PHOTO', 'PIANO', 'PIECE', 'PILOT',
    'PITCH', 'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE', 'PLAZA', 'PLEAD',
    'PLUCK', 'PLUNK', 'POINT', 'POKER', 'POLICY', 'POLLY', 'POOL', 'PORCH',
    'POSES', 'POUND', 'POWER', 'PRESENT', 'PRESS', 'PRICE', 'PRIDE', 'PRIME',
    'PRINT', 'PRIOR', 'PRIZE', 'PROBE', 'PROOF', 'PROUD', 'PROVE', 'PUBLIC',
    'PULLY', 'PUNCH', 'PUPIL', 'PUPPY', 'PURCH', 'PURSE', 'QUEEN', 'QUICK',
    'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH',
    'READY', 'REALM', 'REFER', 'REIGN', 'RELAX', 'RENEW', 'REPLY', 'RIDER',
    'RIDGE', 'RIGHT', 'RIGID', 'RIVER', 'ROBIN', 'ROCKY', 'ROGER', 'ROMAN',
    'ROUGH', 'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE',
    'SCORE', 'SCREW', 'SENSE', 'SERVE', 'SEVEN', 'SHALL', 'SHAPE', 'SHARE',
    'SHARP', 'SHEER', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHIRT',
    'SHOCK', 'SHOOT', 'SHORE', 'SHORT', 'SHOUT', 'SHRUB', 'SICK', 'SIGHT',
    'SINCE', 'SIXTH', 'SIXTY', 'SIZED', 'SKILL', 'SLASH', 'SLEEP', 'SLIDE',
    'SLING', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SNAKE', 'SOLID',
    'SOLVE', 'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED',
    'SPEND', 'SPENT', 'SPLIT', 'SPOKE', 'SPORT', 'SQUAD', 'STACK', 'STAFF',
    'STAGE', 'STAKE', 'STALE', 'STAMP', 'STAND', 'STARE', 'START', 'STATE',
    'STAY', 'STEAL', 'STEAM', 'STEEL', 'STEEP', 'STEMS', 'STEPS', 'STEVE',
    'STICK', 'STILL', 'STOCK', 'STOLE', 'STONE', 'STOOD', 'STORE', 'STORM',
    'STORY', 'STOVE', 'STRAP', 'STRAW', 'STREET', 'STRIKE', 'STRING', 'STRIP',
    'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUNNY', 'SUPER',
    'SURGE', 'SWEET', 'SWIFT', 'SWING', 'SWORD', 'TABLE', 'TAKEN', 'TASTE',
    'TAXES', 'TEACH', 'TEAMS', 'TEETH', 'TEMPO', 'TERRY', 'TEXAS', 'THANK',
    'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THING', 'THINK',
    'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW', 'THUMB', 'TIGHT', 'TIMER',
    'TITLE', 'TODAY', 'TOMMY', 'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER',
    'TRACK', 'TRADE', 'TRAIL', 'TRAIN', 'TRASH', 'TREAT', 'TREND', 'TRIAL',
    'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TROOP', 'TRUCK', 'TRULY', 'TRUMP',
    'TRUST', 'TRUTH', 'TWICE', 'TWINS', 'UNCLE', 'UNDER', 'UNDUE', 'UNION',
    'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN', 'USAGE', 'USUAL', 'VALID',
    'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VISTA', 'VITAL', 'VOCAL', 'VOICE',
    'WAGON', 'WASTE', 'WATCH', 'WATER', 'WHEEL', 'WHERE', 'WHICH', 'WHILE',
    'WHITE', 'WHOLE', 'WHOSE', 'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE',
    'WORST', 'WORTH', 'WOULD', 'WOUND', 'WRITE', 'WRONG', 'WROTE', 'YIELD',
    'YOUNG', 'YOURS', 'YOUTH', 'ZEBRA', 'ZONES'
];

// ===== GAME STATE =====
let currentWord = '';
let currentRow = 0;
let currentTile = 0;
let gameOver = false;
let guesses = [];

// ===== STATS =====
let stats = {
    gamesPlayed: 0,
    wins: 0,
    currentStreak: 0,
    maxStreak: 0
};

// ===== DOM ELEMENTS =====
const board = document.getElementById('board');
const message = document.getElementById('message');
const keyboard = document.getElementById('keyboard');
const resetBtn = document.getElementById('reset-btn');
const themeToggle = document.getElementById('theme-toggle');
const statsModal = document.getElementById('stats-modal');

// ===== LOAD STATS FROM LOCAL STORAGE =====
function loadStats() {
    const saved = localStorage.getItem('wordle_stats');
    if (saved) {
        stats = JSON.parse(saved);
    }
    updateStatsUI();
}

// ===== SAVE STATS =====
function saveStats() {
    localStorage.setItem('wordle_stats', JSON.stringify(stats));
    updateStatsUI();
}

// ===== UPDATE STATS UI =====
function updateStatsUI() {
    document.getElementById('wins').textContent = stats.wins;
    document.getElementById('games').textContent = stats.gamesPlayed;
    document.getElementById('streak').textContent = stats.currentStreak;
}

// ===== SHOW STATS MODAL =====
function showStatsModal() {
    const winRate = stats.gamesPlayed > 0 
        ? Math.round((stats.wins / stats.gamesPlayed) * 100) 
        : 0;
    
    document.getElementById('stat-games').textContent = stats.gamesPlayed;
    document.getElementById('stat-winrate').textContent = winRate + '%';
    document.getElementById('stat-streak').textContent = stats.currentStreak;
    document.getElementById('stat-maxstreak').textContent = stats.maxStreak;
    
    statsModal.classList.remove('hidden');
}

// ===== HIDE STATS MODAL =====
function hideStatsModal() {
    statsModal.classList.add('hidden');
}

// ===== SHARE RESULTS =====
function shareResults() {
    const emojis = [];
    for (let i = 0; i < guesses.length; i++) {
        let row = '';
        const guess = guesses[i];
        const result = evaluateGuess(guess);
        for (let j = 0; j < 5; j++) {
            if (result[j] === 'correct') row += '🟩';
            else if (result[j] === 'present') row += '🟨';
            else row += '⬛';
        }
        emojis.push(row);
    }
    
    const text = `🎯 Wordle Clone\n${guesses.length}/6\n\n${emojis.join('\n')}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('📋 Copied to clipboard!');
        });
    } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('📋 Copied to clipboard!');
    }
}

// ===== SHOW NOTIFICATION =====
function showNotification(text) {
    const existing = document.getElementById('share-notification');
    if (existing) existing.remove();
    
    const div = document.createElement('div');
    div.id = 'share-notification';
    div.textContent = text;
    document.body.appendChild(div);
    
    setTimeout(() => {
        div.remove();
    }, 2000);
}

// ===== THEME TOGGLE =====
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('wordle_theme', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '🌞' : '🌓';
}

// ===== LOAD THEME =====
function loadTheme() {
    const theme = localStorage.getItem('wordle_theme');
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌞';
    } else {
        themeToggle.textContent = '🌓';
    }
}

// ===== INITIALIZE =====
function init() {
    currentWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    currentRow = 0;
    currentTile = 0;
    gameOver = false;
    guesses = [];
    message.textContent = '';
    message.className = '';
    createBoard();
    updateKeyboardColors();
    hideStatsModal();
}

// ===== CREATE BOARD =====
function createBoard() {
    board.innerHTML = '';
    for (let r = 0; r < 6; r++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row-${r}`;
        for (let c = 0; c < 5; c++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${r}-${c}`;
            row.appendChild(tile);
        }
        board.appendChild(row);
    }
}

// ===== KEYBOARD INPUT =====
function handleKey(key) {
    if (gameOver) return;

    if (key === 'ENTER') {
        submitGuess();
        return;
    }

    if (key === 'BACKSPACE') {
        deleteLetter();
        return;
    }

    if (key.match(/^[A-Z]$/) && currentTile < 5) {
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = key;
        tile.classList.add('filled');
        currentTile++;
    }
}

// ===== DELETE LETTER =====
function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = '';
        tile.classList.remove('filled');
    }
}

// ===== SUBMIT GUESS =====
function submitGuess() {
    if (currentTile < 5) {
        showMessage('Not enough letters!', 'error');
        return;
    }

    const guess = getCurrentGuess();
    if (!WORDS.includes(guess)) {
        showMessage('Not a valid word!', 'error');
        return;
    }

    guesses.push(guess);
    const result = evaluateGuess(guess);
    animateTiles(result);
    updateKeyboard(guess, result);

    if (guess === currentWord) {
        gameOver = true;
        stats.gamesPlayed++;
        stats.wins++;
        stats.currentStreak++;
        if (stats.currentStreak > stats.maxStreak) {
            stats.maxStreak = stats.currentStreak;
        }
        saveStats();
        showMessage(`🎉 You win! ${currentWord}`, 'success');
        setTimeout(() => showStatsModal(), 1000);
        return;
    }

    currentRow++;
    currentTile = 0;

    if (currentRow === 6) {
        gameOver = true;
        stats.gamesPlayed++;
        stats.currentStreak = 0;
        saveStats();
        showMessage(`😢 Game Over! The word was ${currentWord}`, 'error');
        setTimeout(() => showStatsModal(), 1000);
    }
}

// ===== GET CURRENT GUESS =====
function getCurrentGuess() {
    let word = '';
    for (let c = 0; c < 5; c++) {
        const tile = document.getElementById(`tile-${currentRow}-${c}`);
        word += tile.textContent;
    }
    return word;
}

// ===== EVALUATE GUESS =====
function evaluateGuess(guess) {
    const result = [];
    const wordArray = currentWord.split('');
    const guessArray = guess.split('');
    const used = Array(5).fill(false);

    for (let i = 0; i < 5; i++) {
        if (guessArray[i] === wordArray[i]) {
            result[i] = 'correct';
            used[i] = true;
        } else {
            result[i] = null;
        }
    }

    for (let i = 0; i < 5; i++) {
        if (result[i] === null) {
            let found = false;
            for (let j = 0; j < 5; j++) {
                if (!used[j] && guessArray[i] === wordArray[j]) {
                    found = true;
                    used[j] = true;
                    break;
                }
            }
            result[i] = found ? 'present' : 'absent';
        }
    }

    return result;
}

// ===== ANIMATE TILES =====
function animateTiles(result) {
    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        setTimeout(() => {
            tile.classList.add(result[i]);
        }, i * 200);
    }
}

// ===== UPDATE KEYBOARD =====
function updateKeyboard(guess, result) {
    const keys = document.querySelectorAll('.key-row button[data-key]');
    keys.forEach(btn => {
        const key = btn.dataset.key;
        if (guess.includes(key)) {
            const index = guess.indexOf(key);
            const status = result[index];
            if (status === 'correct') {
                btn.classList.add('correct');
            } else if (status === 'present' && !btn.classList.contains('correct')) {
                btn.classList.add('present');
            } else if (status === 'absent' && !btn.classList.contains('correct') && !btn.classList.contains('present')) {
                btn.classList.add('absent');
            }
        }
    });
}

// ===== UPDATE KEYBOARD COLORS =====
function updateKeyboardColors() {
    const keys = document.querySelectorAll('.key-row button[data-key]');
    keys.forEach(btn => {
        btn.className = '';
    });
    document.getElementById('enter-key').className = '';
    document.getElementById('delete-key').className = '';
}

// ===== SHOW MESSAGE =====
function showMessage(text, type = '') {
    message.textContent = text;
    message.className = type;
    setTimeout(() => {
        if (!gameOver) {
            message.textContent = '';
            message.className = '';
        }
    }, 2000);
}

// ===== EVENT LISTENERS =====
document.document.querySelectorAll('.key-row button[data-key]').forEach(btn => {
    btn.addEventListener('click', () => handleKey(btn.dataset.key));
});

document.getElementById('enter-key').addEventListener('click', () => handleKey('ENTER'));
document.getElementById('delete-key').addEventListener('click', () => handleKey('BACKSPACE'));
resetBtn.addEventListener('click', init);
themeToggle.addEventListener('click', toggleTheme);
document.getElementById('share-btn').addEventListener('click', shareResults);
document.getElementById('close-modal').addEventListener('click', hideStatsModal);

// Close modal on outside click
statsModal.addEventListener('click', (e) => {
    if (e.target === statsModal) hideStatsModal();
});

// Physical keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleKey('ENTER');
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleKey('BACKSPACE');
    } else if (e.key.match(/^[a-zA-Z]$/)) {
        handleKey(e.key.toUpperCase());
    }
});

// ===== START GAME =====
loadTheme();
loadStats();
init();
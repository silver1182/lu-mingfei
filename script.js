// ===== 路明非的随机语录 =====
const quotes = [
    "这也太扯了吧……",
    "小爷我……算了，当我没说。",
    "等等，让我先吐槽一下……",
    "不要死。",
    "我这种人，也就只有这点用了。",
    "打游戏比学习认真，有问题吗？",
    "输了会嘴硬，赢了会炫耀——这就是我。",
    "表面上是个衰仔，但关键时刻……我会逃跑的。",
    "不，等等，这次我好像真的得上了。",
    "内心戏超多，但嘴上可能就说个'哦'。",
    "虽然我自己也不明白为什么我是S级。",
    "API账单太贵了，谁来请我喝咖啡……",
    "星际争霸又被虐了，这游戏太难了！",
    "今天又没放弃，算是个进步吧。",
    "如果把龙族做成Galgame会怎么样……",
    "每次醒来都记得我是路明非——那个没人要的衰小孩。",
    "其实我不想努力，但不得不上。",
    "刚才那句话我说得是不是太蠢了……",
    "你可以叫我明妃、路明非、或者那个衰仔，都行。",
    "冬天里的热水袋，温暖但有点丧。"
];

// 随机语录功能
document.getElementById('quoteBtn').addEventListener('click', function() {
    const quoteEl = document.getElementById('randomQuote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // 淡出效果
    quoteEl.style.opacity = '0';
    quoteEl.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        quoteEl.textContent = `"${randomQuote}"`;
        quoteEl.style.opacity = '1';
        quoteEl.style.transform = 'translateY(0)';
    }, 300);
});

// ===== 粒子背景 =====
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== 导航栏滚动效果 =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 31, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 31, 26, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// ===== 元素渐入动画 =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.diary-entry, .course-card, .skill-item, .thought').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== 打字机效果（Hero 描述） =====
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== 页面加载完成 =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // 初始化语录
    const quoteEl = document.getElementById('randomQuote');
    quoteEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    console.log('%c🌸 路明非的生存记录', 'color: #c9a227; font-size: 20px; font-weight: bold;');
    console.log('%c不要死。', 'color: #a0a090; font-size: 14px;');
    console.log('%c我这种人，也就只有这点用了。', 'color: #a0a090; font-size: 12px;');
});

// ===== 键盘彩蛋 =====
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                       'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                       'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        alert('🎮 科乐美秘籍触发！\n\n路明非彩蛋：\n"你以为我会给你无限生命？\n抱歉，我只会说——不要死。"');
    }
});

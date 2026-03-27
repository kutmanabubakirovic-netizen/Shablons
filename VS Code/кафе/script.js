document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // ПОЛНАЯ БАЗА ДАННЫХ (95 ПОЗИЦИЙ)
    // ==========================================
    const menuData = {
        soup: [
            { name: "Шорпо из баранины", price: 280, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=1" },
            { name: "Шорпо из говядины", price: 260, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=2" },
            { name: "Курма Шорпо", price: 290, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=3" },
            { name: "Лагман Гуйру", price: 320, weight: "350г", img: "https://images.unsplash.com/photo-1512058560366-cd2427ffad31?q=80&w=500&sig=4" },
            { name: "Лагман Суйру", price: 300, weight: "350г", img: "https://images.unsplash.com/photo-1512058560366-cd2427ffad31?q=80&w=500&sig=5" },
            { name: "Босо Лагман", price: 340, weight: "350г", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500&sig=6" },
            { name: "Мастава", price: 240, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=7" },
            { name: "Чучвара в бульоне", price: 250, weight: "350г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=8" },
            { name: "Кесме (домашняя лапша)", price: 230, weight: "350г", img: "https://images.unsplash.com/photo-1512058560366-cd2427ffad31?q=80&w=500&sig=9" },
            { name: "Манты-Шорпо", price: 270, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=10" },
            { name: "Шорпо с нутом", price: 265, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=11" },
            { name: "Куриный суп с лапшой", price: 220, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=12" },
            { name: "Чечевичный суп", price: 200, weight: "300г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=13" },
            { name: "Солянка сборная", price: 350, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=14" },
            { name: "Борщ с говядиной", price: 250, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=15" },
            { name: "Грибной крем-суп", price: 280, weight: "300г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=16" },
            { name: "Холодный кукси", price: 310, weight: "450г", img: "https://images.unsplash.com/photo-1512058560366-cd2427ffad31?q=80&w=500&sig=17" },
            { name: "Окрошка на чалапе", price: 190, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=18" },
            { name: "Уха из форели", price: 380, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=19" },
            { name: "Долма-шорпо", price: 330, weight: "400г", img: "https://images.unsplash.com/photo-1547592166-23ac45744aaf?q=80&w=500&sig=20" }
        ],
        main: [
            { name: "Оромо (мясо/картофель)", price: 240, weight: "300г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=21" },
            { name: "Оромо (джусай/тыква)", price: 210, weight: "300г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=22" },
            { name: "Бешбармак классика", price: 450, weight: "500г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=23" },
            { name: "Плов по-ошски (Чунжа)", price: 320, weight: "400г", img: "https://images.unsplash.com/photo-1512058560366-cd2427ffad31?q=80&w=500&sig=24" },
            { name: "Плов праздничный", price: 350, weight: "400г", img: "https://images.unsplash.com/photo-1512058560366-cd2427ffad31?q=80&w=500&sig=25" },
            { name: "Шашлык баранина", price: 220, weight: "150г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=26" },
            { name: "Шашлык говядина", price: 240, weight: "150г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=27" },
            { name: "Люля-кебаб", price: 210, weight: "180г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=28" },
            { name: "Шашлык «Семечки»", price: 200, weight: "150г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=29" },
            { name: "Манты рубленые (5шт)", price: 280, weight: "350г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=30" },
            { name: "Манты с тыквой (5шт)", price: 220, weight: "350г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=31" },
            { name: "Дымдама", price: 340, weight: "400г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=32" },
            { name: "Куурдак из барашка", price: 420, weight: "350г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=33" },
            { name: "Казан-кебаб", price: 480, weight: "450г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=34" },
            { name: "Джиз-быз", price: 360, weight: "400г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=35" },
            { name: "Форель на гриле", price: 180, weight: "100г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=36" },
            { name: "Котлеты по-киевски", price: 310, weight: "250г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=37" },
            { name: "Бифштекс с яйцом", price: 390, weight: "300г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=38" },
            { name: "Жаркое по-домашнему", price: 330, weight: "350г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=39" },
            { name: "Тефтели в томате", price: 290, weight: "300г", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500&sig=40" }
        ],
        salad: [
            { name: "Шакарап", price: 120, weight: "150г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=41" },
            { name: "Ачуу-чучук", price: 130, weight: "150г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=42" },
            { name: "Бахор", price: 220, weight: "200г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=43" },
            { name: "Греческий", price: 280, weight: "250г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=44" },
            { name: "Цезарь с курицей", price: 350, weight: "280г", img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=500&sig=45" },
            { name: "Цезарь с креветками", price: 480, weight: "280г", img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=500&sig=46" },
            { name: "Оливье", price: 240, weight: "250г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=47" },
            { name: "Мужской каприз", price: 380, weight: "250г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=48" },
            { name: "Винегрет", price: 180, weight: "200г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=49" },
            { name: "Свекольный с орехами", price: 190, weight: "200г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=50" },
            { name: "Салат «Смак»", price: 260, weight: "250г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=51" },
            { name: "Теплый с баклажанами", price: 320, weight: "280г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=52" },
            { name: "Фунчоза с овощами", price: 210, weight: "250г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=53" },
            { name: "Морковь-ча", price: 110, weight: "150г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=54" },
            { name: "Гнездо глухаря", price: 340, weight: "280г", img: "https://images.unsplash.com/photo-1540420773420-3366772f5159?q=80&w=500&sig=55" }
        ],
        dessert: [
            { name: "Боорсоки (порция)", price: 100, weight: "200г", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&sig=56" },
            { name: "Чак-чак", price: 180, weight: "150г", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&sig=57" },
            { name: "Каттама", price: 150, weight: "1 шт", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&sig=58" },
            { name: "Пахлава медовая", price: 220, weight: "100г", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&sig=59" },
            { name: "Яблочный штрудель", price: 280, weight: "200г", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&sig=60" },
            { name: "Чизкейк", price: 320, weight: "150г", img: "https://images.unsplash.com/photo-1533134242443-d4fd215315ad?q=80&w=500&sig=61" },
            { name: "Шоколадный фондан", price: 290, weight: "120г", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&sig=62" },
            { name: "Торт «Медовик»", price: 240, weight: "150г", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&sig=63" },
            { name: "Мороженое", price: 180, weight: "150г", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&sig=64" },
            { name: "Фруктовое ассорти", price: 500, weight: "800г", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&sig=65" }
        ],
        drink: [
            { name: "Максым", price: 120, weight: "1л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=66" },
            { name: "Чалап", price: 100, weight: "1л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=67" },
            { name: "Аралаш", price: 110, weight: "1л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=68" },
            { name: "Бозо", price: 140, weight: "1л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=69" },
            { name: "Кымыз", price: 250, weight: "1л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=70" },
            { name: "Чай (чайник)", price: 60, weight: "0.8л", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=71" },
            { name: "Чай с лимоном", price: 80, weight: "0.8л", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=72" },
            { name: "Ташкентский чай", price: 180, weight: "0.8л", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=73" },
            { name: "Марокканский чай", price: 220, weight: "0.8л", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=74" },
            { name: "Облепиховый чай", price: 200, weight: "0.8л", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=75" },
            { name: "Имбирный чай", price: 200, weight: "0.8л", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=76" },
            { name: "Чай с талканом", price: 120, weight: "0.5л", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=77" },
            { name: "Эспрессо", price: 110, weight: "30мл", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=78" },
            { name: "Американо", price: 130, weight: "200мл", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=79" },
            { name: "Капучино", price: 160, weight: "250мл", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=80" },
            { name: "Латте", price: 180, weight: "300мл", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=81" },
            { name: "Кофе по-турецки", price: 140, weight: "100мл", img: "https://images.unsplash.com/photo-1599398054043-f4759c5e7b5e?q=80&w=500&sig=82" },
            { name: "Вода без газа", price: 50, weight: "0.5л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=83" },
            { name: "Вода газированная", price: 50, weight: "0.5л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=84" },
            { name: "Coca-Cola / Fanta", price: 70, weight: "0.5л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=85" },
            { name: "Компот домашний", price: 180, weight: "1л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=86" },
            { name: "Лимонад классик", price: 350, weight: "1л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=87" },
            { name: "Лимонад ягодный", price: 380, weight: "1л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=88" },
            { name: "Мохито б/а", price: 250, weight: "400мл", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=89" },
            { name: "Фреш апельсин", price: 280, weight: "300мл", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=90" },
            { name: "Фреш яблоко", price: 220, weight: "300мл", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=91" },
            { name: "Соки Rich/Dena", price: 180, weight: "1л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=92" },
            { name: "Айран", price: 80, weight: "400мл", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=93" },
            { name: "Холодный чай", price: 150, weight: "1л", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=94" },
            { name: "Молочный коктейль", price: 220, weight: "400мл", img: "https://images.unsplash.com/photo-1523360408447-317804473e0a?q=80&w=500&sig=95" }
        ]
    };

    // --- ФУНКЦИИ ОТРИСОВКИ ---
    const renderMenu = () => {
        Object.keys(menuData).forEach(category => {
            const grid = document.getElementById(`${category}-grid`);
            if (!grid) return;
            grid.innerHTML = menuData[category].map(item => `
                <div class="item-card" data-type="${category}">
                    <div class="img-container">
                        <div class="item-img" style="background-image: url('${item.img}');"></div>
                    </div>
                    <div class="item-info">
                        <div class="item-header">
                            <h3>${item.name}</h3>
                            <span class="price">${item.price} ₽</span>
                        </div>
                        <p>Натуральные продукты и лучший вкус нашего заведения.</p>
                        <div class="item-actions">
                            <span class="weight">${item.weight}</span>
                            <button class="add-btn">+</button>
                        </div>
                    </div>
                </div>`).join('');
        });
    };

    renderMenu();

    // --- ЛОГИКА КАЛЬКУЛЯТОРА ---
    let totalItems = 0;
    let totalPrice = 0;
    const pricePanel = document.getElementById('price-panel');
    const totalPriceDisplay = document.getElementById('total-price-display');
    const cartCount = document.getElementById('cart-count');

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-btn')) {
            const card = e.target.closest('.item-card');
            const price = parseInt(card.querySelector('.price').innerText.replace(/\D/g, ''));
            totalItems++;
            totalPrice += isNaN(price) ? 0 : price;
            updateUI();

            const btn = e.target;
            btn.innerText = '✓'; btn.style.background = '#25d366';
            setTimeout(() => { btn.innerText = '+'; btn.style.background = ''; }, 600);
        }
    });

    function updateUI() {
        if (totalItems > 0) pricePanel.classList.add('active'), cartCount.style.display = 'flex';
        else pricePanel.classList.remove('active'), cartCount.style.display = 'none';
        cartCount.innerText = totalItems;
        totalPriceDisplay.innerText = totalPrice.toLocaleString();
    }

    document.getElementById('clearCart').addEventListener('click', () => {
        totalItems = 0; totalPrice = 0; updateUI();
    });

    // --- ФИЛЬТРЫ И ПОИСК ---
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.cat-btn.active').classList.remove('active');
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.menu-section').forEach(sec => {
                let match = false;
                sec.querySelectorAll('.item-card').forEach(c => {
                    const ok = (filter === 'all' || c.dataset.type === filter);
                    c.style.display = ok ? 'block' : 'none';
                    if(ok) match = true, c.classList.add('show');
                });
                sec.style.display = match ? 'block' : 'none';
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    document.getElementById('menuSearch').addEventListener('input', e => {
        const text = e.target.value.toLowerCase();
        document.querySelectorAll('.menu-section').forEach(sec => {
            let m = false;
            sec.querySelectorAll('.item-card').forEach(c => {
                const t = c.querySelector('h3').innerText.toLowerCase();
                const ok = t.includes(text);
                c.style.display = ok ? 'block' : 'none';
                if(ok) m = true;
            });
            sec.style.display = m ? 'block' : 'none';
        });
    });

    const obs = new IntersectionObserver(ents => {
        ents.forEach(en => { if(en.isIntersecting) en.target.classList.add('show'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.item-card').forEach(el => obs.observe(el));
});
// Internationalization (i18n) for Morgana Art website

// Translation dictionary
const translations = {
    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_gallery': 'Gallery',
        'nav_about': 'About',
        'nav_shop': 'Shop',
        'nav_pricing': 'Pricing',
        'nav_contact': 'Contact',

        // Home page
        'hero_title': 'Visions from the Shadows',
        'hero_subtitle': 'A collection of gothic artwork exploring the boundaries between beauty and darkness',
        'hero_gallery_title': 'Explore Gallery',
        'hero_gallery_subtitle': 'Discover my collection of gothic artwork',
        'hero_pricing_title': 'Commission Pricing',
        'hero_pricing_subtitle': 'View pricing for custom artwork and services',
        'cta_button': 'Enter Gallery',
        'featured_works': 'Featured Works',
        'whispers': 'Whispers of the Forgotten',
        'crimson': 'Crimson Tears',
        'raven': 'The Raven\'s Dream',

        // Gallery page
        'gallery_title': 'Gallery of Shadows',
        'gallery_desc': 'Explore the different collections of gothic artwork, each piece a window into the macabre and beautiful.',
        'angels_bones': 'Angels & Bones',
        'dark_botanica': 'Dark Botanica',
        'fallen_guardian': 'Fallen Guardian',
        'ossuary_dreams': 'Ossuary Dreams',
        'seraphic_remains': 'Seraphic Remains',
        'ivory_tower': 'Ivory Tower',
        'midnight_bloom': 'Midnight Bloom',
        'poisoned_garden': 'Poisoned Garden',
        'thorned_heart': 'Thorned Heart',
        'widows_veil': 'Widow\'s Veil',
        'mixed_media': 'Mixed media on canvas, 2024',
        'digital_painting': 'Digital painting, 2023',
        'oil_canvas': 'Oil on canvas, 2024',
        'charcoal_ink': 'Charcoal and ink, 2023',
        'acrylic_wood': 'Acrylic on wood, 2024',
        'watercolor': 'Watercolor, 2023',
        'mixed_media_2024': 'Mixed media, 2024',
        'digital_illustration': 'Digital illustration, 2023',

        // About page
        'about_artist': 'About the Artist',
        'about_p1': 'I\'m a painter drawn to the dark, the delicate, and the decaying. My work explores gothic themes—grief, transformation, myth, flesh—through layered textures and moody palettes.',
        'about_p2': 'With a background in SFX makeup for film and theater, I carry over an obsession with skin, scars, and subtle distortions. Off set, I paint, sketch, sculpt, and sew—building worlds where beauty and ruin intertwine.',
        'about_p3': 'Each piece is a quiet scene from some forgotten ritual or dream—a fragment of something sacred and strange.',
        'creative_process': 'The Creative Process',
        'process_inspiration': 'Inspiration',
        'process_inspiration_desc': 'Drawing from historical gothic imagery, folklore, and personal experiences with the uncanny.',
        'process_conception': 'Conception',
        'process_conception_desc': 'Sketching concepts and exploring compositions that evoke both dread and fascination.',
        'process_creation': 'Creation',
        'process_creation_desc': 'Layering textures and tones to build depth, working primarily in traditional media with digital enhancements.',
        'process_reflection': 'Reflection',
        'process_reflection_desc': 'Revisiting and refining to ensure each piece carries the intended emotional and atmospheric weight.',

        // Shop page
        'shop_title': 'Artifacts & Prints',
        'shop_desc': 'Bring a piece of the darkness home. Each print is carefully produced to capture the full depth and atmosphere of the original artwork.',
        'shop_desc_limited': 'Limited edition giclée print on archival paper.',
        'shop_desc_signed': 'Signed print on premium matte paper.',
        'shop_desc_museum': 'Museum-quality canvas print, stretched and ready to hang.',
        'shop_desc_book': 'Limited edition art book featuring a collection of works.',
        'shop_price': '$45.00',
        'shop_price_2': '$50.00',
        'shop_price_3': '$120.00',
        'shop_price_4': '$75.00',
        'add_to_cart': 'Add to Cart',
        'shipping_info': 'Shipping Information',
        'shipping_desc': 'All prints are carefully packaged to ensure they arrive in perfect condition. Please allow 5-7 business days for processing and shipping.',
        'custom_orders': 'Custom Orders',
        'custom_orders_desc': 'For commissioned pieces or special requests, please visit the Contact page to discuss your vision.',

        // Pricing page
        'pricing_title': 'Pricing',
        'pricing_desc': 'Explore our pricing for creative services. Click on a category to see details and rates.',

        // Contact page
        'contact_title': 'Contact & Commissions',
        'contact_desc': 'For inquiries about commissioned work, exhibitions, or collaborations, please reach out through the form below or via my social media channels.',
        'name': 'Name',
        'email': 'Email',
        'subject': 'Subject',
        'message': 'Message',
        'send_message': 'Send Message',
        'follow_connect': 'Follow & Connect',
        'commission_process': 'Commission Process',
        'commission_desc': 'For custom commissions, please include the following details in your message:',
        'concept_theme': 'Concept or theme',
        'size_medium': 'Desired size and medium',
        'timeline': 'Timeline considerations',
        'budget': 'Budget range',

        // Footer
        'copyright': '© 2025 Morgana Art. All rights reserved.'
    },
    'pl': {
        // Navigation
        'nav_home': 'Strona główna',
        'nav_gallery': 'Galeria',
        'nav_about': 'O mnie',
        'nav_shop': 'Sklep',
        'nav_pricing': 'Cennik',
        'nav_contact': 'Kontakt',

        // Home page
        'hero_title': 'Wizje z cieni',
        'hero_subtitle': 'Kolekcja gotyckiej sztuki eksplorująca granice między pięknem a ciemnością',
        'hero_gallery_title': 'Odkryj Galerię',
        'hero_gallery_subtitle': 'Poznaj moją kolekcję gotyckiej sztuki',
        'hero_pricing_title': 'Cennik Zleceń',
        'hero_pricing_subtitle': 'Zobacz ceny niestandardowych dzieł sztuki i usług',
        'cta_button': 'Wejdź do galerii',
        'featured_works': 'Wyróżnione prace',
        'whispers': 'Szepty zapomnianych',
        'crimson': 'Karmazynowe łzy',
        'raven': 'Sen kruka',

        // Gallery page
        'gallery_title': 'Galeria cieni',
        'gallery_desc': 'Odkryj różne kolekcje gotyckiej sztuki, gdzie każde dzieło jest oknem na makabryczne i piękne.',
        'angels_bones': 'Anioły i kości',
        'dark_botanica': 'Mroczna botanika',
        'fallen_guardian': 'Upadły strażnik',
        'ossuary_dreams': 'Sny z ossuarium',
        'seraphic_remains': 'Seraficzne szczątki',
        'ivory_tower': 'Wieża z kości słoniowej',
        'midnight_bloom': 'Północny kwiat',
        'poisoned_garden': 'Zatruty ogród',
        'thorned_heart': 'Serce z cierni',
        'widows_veil': 'Welon wdowy',
        'mixed_media': 'Technika mieszana na płótnie, 2024',
        'digital_painting': 'Malarstwo cyfrowe, 2023',
        'oil_canvas': 'Olej na płótnie, 2024',
        'charcoal_ink': 'Węgiel i tusz, 2023',
        'acrylic_wood': 'Akryl na drewnie, 2024',
        'watercolor': 'Akwarela, 2023',
        'mixed_media_2024': 'Technika mieszana, 2024',
        'digital_illustration': 'Ilustracja cyfrowa, 2023',

        // About page
        'about_artist': 'O artystce',
        'about_p1': 'Nazywam się Morgana i od kilku lat zajmuję się malarstwem oraz charakteryzacją. Sztuka to dla mnie nie tylko zawód, ale przede wszystkim pasja i sposób wyrażania siebie. Tworzenie to moja największa miłość – każda praca, nad którą się pochylam, to nie tylko projekt, ale osobista historia i emocja, którą chcę przekazać.',
        'about_p2': 'Najbliżej mi do mrocznego fantasy – kocham tworzyć światy pełne cieni, magii i tajemnic. Inspiruję się mitologią, baśniami i mrokiem, który często skrywa się pod powierzchnią rzeczywistości. W swoich pracach łączę klasyczne techniki z własną wyobraźnią i wrażliwością.',
        'about_p3': 'Na co dzień współpracuję z klientami o bardzo różnych potrzebach – maluję ilustracje, portrety, projekty koncepcyjne oraz wykonuję charakteryzacje. Jestem otwarta na różnorodne style i tematy, a każdy projekt traktuję indywidualnie – z pełnym zaangażowaniem i dbałością o najdrobniejsze szczegóły. Wierzę, że to właśnie detale budują klimat i sprawiają, że prace zaczynają żyć własnym życiem.',
        'creative_process': 'Proces twórczy',
        'process_inspiration': 'Inspiracja',
        'process_inspiration_desc': 'Czerpanie z historycznych gotyckich motywów, folkloru i osobistych doświadczeń z niesamowitym.',
        'process_conception': 'Koncepcja',
        'process_conception_desc': 'Szkicowanie koncepcji i eksplorowanie kompozycji wywołujących zarówno lęk, jak i fascynację.',
        'process_creation': 'Tworzenie',
        'process_creation_desc': 'Nakładanie tekstur i tonów dla zbudowania głębi, pracując głównie w tradycyjnych mediach z cyfrowymi ulepszeniami.',
        'process_reflection': 'Refleksja',
        'process_reflection_desc': 'Powracanie i udoskonalanie, aby każde dzieło niosło zamierzony ładunek emocjonalny i atmosferyczny.',

        // Shop page
        'shop_title': 'Artefakty i Printy',
        'shop_desc': 'Zabierz kawałek ciemności do domu. Każdy print jest starannie wykonany, aby uchwycić pełną głębię i atmosferę oryginalnego dzieła.',
        'shop_desc_limited': 'Limitowana edycja printu giclée na papierze archiwalnym.',
        'shop_desc_signed': 'Podpisany print na papierze premium matowym.',
        'shop_desc_museum': 'Print na płótnie muzealnej jakości, naciągnięty i gotowy do powieszenia.',
        'shop_desc_book': 'Limitowana edycja książki artystycznej zawierająca kolekcję prac.',
        'shop_price': '199,00 zł',
        'shop_price_2': '225,00 zł',
        'shop_price_3': '550,00 zł',
        'shop_price_4': '340,00 zł',
        'add_to_cart': 'Dodaj do koszyka',
        'shipping_info': 'Informacje o wysyłce',
        'shipping_desc': 'Wszystkie printy są starannie pakowane, aby zapewnić ich dotarcie w idealnym stanie. Proszę uwzględnić 5-7 dni roboczych na przetworzenie i wysyłkę.',
        'custom_orders': 'Zamówienia niestandardowe',
        'custom_orders_desc': 'W sprawie zamówionych dzieł lub specjalnych próśb, odwiedź stronę Kontakt, aby omówić swoją wizję.',

        // Pricing page
        'pricing_title': 'Cennik',
        'pricing_desc': 'Poznaj nasze ceny usług kreatywnych. Kliknij kategorię, aby zobaczyć szczegóły i stawki.',

        // Contact page
        'contact_title': 'Kontakt i zlecenia',
        'contact_desc': 'W sprawie pytań o zlecenia, wystawy lub współpracę, skontaktuj się przez formularz poniżej lub poprzez moje kanały społecznościowe.',
        'name': 'Imię',
        'email': 'Email',
        'subject': 'Temat',
        'message': 'Wiadomość',
        'send_message': 'Wyślij wiadomość',
        'follow_connect': 'Obserwuj i połącz się',
        'commission_process': 'Proces zlecenia',
        'commission_desc': 'Dla niestandardowych zleceń, proszę uwzględnić następujące szczegóły w wiadomości:',
        'concept_theme': 'Koncepcja lub temat',
        'size_medium': 'Pożądany rozmiar i medium',
        'timeline': 'Rozważania czasowe',
        'budget': 'Zakres budżetowy',

        // Footer
        'copyright': '© 2025 Morgana Art. Wszelkie prawa zastrzeżone.'
    }
};

// Get current language from localStorage or use default
let currentLang = localStorage.getItem('language') || 'en';

// Function to translate the page
function translatePage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            element.setAttribute('placeholder', translations[currentLang][key]);
        }
    });

    // Update language toggle button text
    const toggleBtn = document.getElementById('language-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = currentLang === 'en' ? 'Polski' : 'English';
    }
}

// Function to switch language
function switchLanguage() {
    currentLang = currentLang === 'en' ? 'pl' : 'en';
    localStorage.setItem('language', currentLang);
    translatePage();
}

// Initialize language selector when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add language toggle button if it doesn't exist
    if (!document.getElementById('language-toggle')) {
        const nav = document.querySelector('nav ul');

        const langToggle = document.createElement('button');
        langToggle.id = 'language-toggle';
        langToggle.className = 'language-toggle';
        langToggle.textContent = currentLang === 'en' ? 'Polski' : 'English';
        langToggle.addEventListener('click', switchLanguage);

        // Create a list item for the language toggle
        const langLi = document.createElement('li');
        langLi.appendChild(langToggle);
        nav.appendChild(langLi);
    }

    // Translate the page
    translatePage();
});
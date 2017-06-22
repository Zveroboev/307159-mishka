var mapWrapper = document.getElementById('map');
var mobileMedia = '(min-width: 320px) and (max-width: 767px)';
var tabletMedia = '(min-width: 768px) and (max-width: 1149px)';
var desktopMedia = '(min-width: 1150px)';

document.querySelector('.contacts__map-wrapper').classList.add('contacts__map-wrapper--hidden');


//showMediaMap();


function showMediaMap() {
  if (window.matchMedia(mobileMedia).matches) {

    var mobileMap = document.createElement('script');
    var srcMobMap = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A79b571fa3affd69119ecfd1e27b689b8b40b2cc3676810213fb452cbc1a962ea&amp;width=100%25&amp;height=457&amp;lang=ru_RU&amp;scroll=true';

    mobileMap.setAttribute('type', 'text/javascript');
    mobileMap.setAttribute('charset', 'utf-8');
    mobileMap.setAttribute('async', '');
    mobileMap.setAttribute('src', srcMobMap);

    mapWrapper.appendChild(mobileMap);

  } else if (window.matchMedia(tabletMedia).matches) {

    var tabletMap = document.createElement('script');
    var srcTabMap = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afe8483cf6e9e87c9e0a612e102bc0e3a656d885534ad81351cbc87603a00bed6&amp;width=768&amp;height=457&amp;lang=ru_RU&amp;scroll=true';

    tabletMap.setAttribute('type', 'text/javascript');
    tabletMap.setAttribute('charset', 'utf-8');
    tabletMap.setAttribute('async', '');
    tabletMap.setAttribute('src', srcTabMap);

    mapWrapper.appendChild(tabletMap);

  } else if (window.matchMedia(desktopMedia).matches) {

    var desktopMap = document.createElement('script');
    var srcDeskMap = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2cd271e0996c461dfa8c8674d5c32b5dcd231635f670c0dce01d09576a5d962d&amp;width=525&amp;height=457&amp;lang=ru_RU&amp;scroll=true';

    desktopMap.setAttribute('type', 'text/javascript');
    desktopMap.setAttribute('charset', 'utf-8');
    desktopMap.setAttribute('async', '');
    desktopMap.setAttribute('src', srcDeskMap);

    console.log(desktopMap);
    mapWrapper.appendChild(desktopMap);
  }
}

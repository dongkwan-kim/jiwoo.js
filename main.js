/* https://github.com/sorrycc/awesome-javascript */
const frameworks = [
    'angular.js - HTML enhanced for web apps.',
    'aurelia - A Javascript client framework for mobile, desktop and web.',
    'backbone - Give your JS App some Backbone with Models, Views, Collections, and Events.',
    'ember.js - A JavaScript framework for creating ambitious web applications.',
    'meteor - An ultra-simple, database-everywhere, data-on-the-wire, pure-Javascript web framework.',
    'ractive - Next-generation DOM manipulation.',
    'vue - Intuitive, fast & composable MVVM for building interactive interfaces.',
    'knockout - Knockout makes it easier to create rich, responsive UIs with JavaScript.',
    'spine - Lightweight MVC library for building JavaScript applications.',
    'espresso.js - A minimal javascript library for crafting user interfaces.',
    'canjs - Can do JS, better, faster, easier.',
    'react - A library for building user interfaces. It\'s declarative, efficient, and extremely flexible. Works with a Virtual DOM.',
    'hyperapp - 1kb JavaScript library for building frontend applications.',
    'preact - Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.',
    'nativescript - Build truly native cross-platform iOS and Android apps with JavaScript',
    'react-native - A framework for building native apps with React.',
    'riot - React-like library, but with very small size.',
    'thorax - Strengthening your Backbone.',
    'chaplin - An architecture for JavaScript applications using the Backbone.js library.',
    'marionette - A composite application library for Backbone.js that aims to simplify the construction of large scale JavaScript applications.',
    'ripple - A tiny foundation for building reactive views.',
    'rivets - Lightweight and powerful data binding + templating solution.',
    'derby - MVC framework making it easy to write realtime, collaborative applications that run in both Node.js and browsers.',
    'derby-awesome - A collection of awesome derby components',
    'way.js - Simple, lightweight, persistent two-way databinding.',
    'mithril.js - Mithril is a client-side MVC framework (Light-weight, Robust, Fast).',
    'jsblocks - jsblocks is better MV-ish framework.',
    'LiquidLava - Transparent MVC framework for building user interfaces.',
    'feathers - A minimalist real-time JavaScript framework for tomorrow\'s apps.',
    'Keo - Functional stateless React components with Shadow DOM support.',
]

function jiwooIntroduce() {
    let framework_description = frameworks[Math.floor(Math.random() * frameworks.length)];
    const framework = framework_description.split(' - ')[0];
    console.log(`I’m Jiwoo. I have some experiences with using modern javascript framework such as ${framework}.`);
    console.log(`// ${framework_description}`);
    return framework;
};

function isBirthday() {
    const birthday = new Date(2019, 5 - 1, 8);
    const today = new Date()
    return birthday.getDate() == today.getDate() && birthday.getMonth() == today.getMonth();
}

document.addEventListener("DOMContentLoaded", function() {
    if (isBirthday()){
        var celebrated = localStorage.getItem('celebrated') || '';
        if (celebrated != 'yes') {
            const framework = jiwooIntroduce();
            console.log(`Happy birthday Jiwoo!, who has some experiences with using modern javascript framework such as ${framework}.`)
            localStorage.setItem('celebrated', 'yes');
        }
    }
 });

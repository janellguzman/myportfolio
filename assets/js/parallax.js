/* Parallax Code - https://github.com/marrio-h/universal-parallax */

"use strict";
var windowHeight = window.innerHeight;

function calculateHeight(e, t) {
    for (var a = 0; e.length > a; a++) {
        var n = e[a].parentElement.scrollHeight,
            i = (windowHeight - n) / 2,
            l = n + 2 * (i - i / t);
        e[a].style.height = l + "px"
    }
}

function animateParallax(e, t) {
    for (var a = 0; e.length > a; a++) {
        var n = e[a].parentElement.getBoundingClientRect().top / t;
        e[a].style.top = n + "px"
    }
}
/Mobi/.test(navigator.userAgent) && (windowHeight = screen.height);
var universalParallax = function () {
    this.init = function (e) {
        void 0 === e && (e = {}), e = {
            speed: void 0 !== e.speed ? e.speed : 4,
            className: void 0 !== e.className ? e.className : "parallax"
        };
        for (var t, a, n = document.getElementsByClassName(e.className), i = 0; n.length > i; i++) {
            var l = document.createElement("section");
            n[i].parentNode.insertBefore(l, n[i]), l.appendChild(n[i]);
            var r = n[i].parentElement;
            r.className += "parallax__container", "relative" !== window.getComputedStyle(r.parentElement, null).getPropertyValue("position") && (r.parentElement.style.position = "relative");
            var s = n[i].dataset.parallaxImage;
            void 0 !== s && (n[i].style.backgroundImage = "url(" + s + ")", 1 === n[i].classList.length && "parallax" === n[i].classList[0] && Object.assign(n[i].style, {
                "background-repeat": "no-repeat",
                "background-position": "center",
                "background-size": "cover"
            }))
        }
        t = n, (a = e.speed) < 1.2 && (a = 0), calculateHeight(t, a), window.addEventListener("resize", function () {
            calculateHeight(t, a)
        }), window.addEventListener("scroll", function () {
            animateParallax(t, a)
        })
    }
};

new universalParallax().init();
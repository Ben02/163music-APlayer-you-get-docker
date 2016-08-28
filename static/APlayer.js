(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/    // The module cache
/******/    var installedModules = {};
/******/
/******/    // The require function
/******/    function __webpack_require__(moduleId) {
/******/
/******/        // Check if module is in cache
/******/        if(installedModules[moduleId])
/******/            return installedModules[moduleId].exports;
/******/
/******/        // Create a new module (and put it into the cache)
/******/        var module = installedModules[moduleId] = {
/******/            exports: {},
/******/            id: moduleId,
/******/            loaded: false
/******/        };
/******/
/******/        // Execute the module function
/******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/        // Flag the module as loaded
/******/        module.loaded = true;
/******/
/******/        // Return the exports of the module
/******/        return module.exports;
/******/    }
/******/
/******/
/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;
/******/
/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;
/******/
/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "";
/******/
/******/    // Load entry module and return exports
/******/    return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    console.log("\n %c APlayer 1.5.1 %c http://aplayer.js.org \n\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
    
    __webpack_require__(1);
    
    var instances = [];
    
    var APlayer = function () {
        /**
         * APlayer constructor function
         *
         * @param {Object} option - See README
         * @constructor
         */
    
        function APlayer(option) {
            var _this = this;
    
            _classCallCheck(this, APlayer);
    
            var svg = {
                'play': ['0 0 16 31', 'M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z'],
                'pause': ['0 0 17 32', 'M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z'],
                'volume-up': ['0 0 28 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z'],
                'volume-down': ['0 0 28 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z'],
                'volume-off': ['0 0 28 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z'],
                'loop': ['0 0 29 32', 'M25.6 9.92q1.344 0 2.272 0.928t0.928 2.272v9.28q0 1.28-0.928 2.24t-2.272 0.96h-22.4q-1.28 0-2.24-0.96t-0.96-2.24v-9.28q0-1.344 0.96-2.272t2.24-0.928h8v-3.52l6.4 5.76-6.4 5.76v-3.52h-6.72v6.72h19.84v-6.72h-4.8v-4.48h6.080z'],
                'menu': ['0 0 22 32', 'M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z']
            };
            this.getSVG = function (type) {
                return "\n                <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"100%\" version=\"1.1\" viewBox=\"" + svg[type][0] + "\" width=\"100%\">\n                    <use xlink:href=\"#aplayer-" + type + "\"></use>\n                    <path class=\"aplayer-fill\" d=\"" + svg[type][1] + "\" id=\"aplayer-" + type + "\"></path>\n                </svg>\n            ";
            };
    
            this.isMobile = /mobile/i.test(window.navigator.userAgent);
            // compatibility: some mobile browsers don't suppose autoplay
            if (this.isMobile) {
                option.autoplay = false;
            }
    
            // default options
            var defaultOption = {
                element: document.getElementsByClassName('aplayer')[0],
                narrow: false,
                autoplay: false,
                mutex: true,
                showlrc: 0,
                theme: '#b7daff',
                loop: true
            };
            for (var defaultKey in defaultOption) {
                if (defaultOption.hasOwnProperty(defaultKey) && !option.hasOwnProperty(defaultKey)) {
                    option[defaultKey] = defaultOption[defaultKey];
                }
            }
    
            // multiple music
            this.playIndex = Object.prototype.toString.call(option.music) === '[object Array]' ? 0 : -1;
    
            this.option = option;
            this.audios = [];
            this.loop = option.loop;
    
            /**
             * Parse second to 00:00 format
             *
             * @param {Number} second
             * @return {String} 00:00 format
             */
            this.secondToTime = function (second) {
                var add0 = function add0(num) {
                    return num < 10 ? '0' + num : '' + num;
                };
                var min = parseInt(second / 60);
                var sec = parseInt(second - min * 60);
                return add0(min) + ':' + add0(sec);
            };
    
            // save lrc
            if (this.option.showlrc === 2 || this.option.showlrc === true) {
                this.savelrc = [];
                for (var i = 0; i < this.element.getElementsByClassName('aplayer-lrc-content').length; i++) {
                    this.savelrc.push(this.element.getElementsByClassName('aplayer-lrc-content')[i].innerHTML);
                }
            }
            this.lrcs = [];
    
            /**
             * Update progress bar, including loading progress bar and play progress bar
             *
             * @param {String} type - Point out which bar it is, should be played loaded or volume
             * @param {Number} percentage
             * @param {String} direction - Point out the direction of this bar, Should be height or width
             */
            this.updateBar = function (type, percentage, direction) {
                percentage = percentage > 0 ? percentage : 0;
                percentage = percentage < 1 ? percentage : 1;
                bar[type + 'Bar'].style[direction] = percentage * 100 + '%';
            };
    
            /**
             * Update lrc
             *
             * @param {Number} currentTime
             */
            this.updateLrc = function () {
                var currentTime = arguments.length <= 0 || arguments[0] === undefined ? _this.audio.currentTime : arguments[0];
    
                if (_this.lrcIndex > _this.lrc.length - 1 || currentTime < _this.lrc[_this.lrcIndex][0] || !_this.lrc[_this.lrcIndex + 1] || currentTime >= _this.lrc[_this.lrcIndex + 1][0]) {
                    for (var _i = 0; _i < _this.lrc.length; _i++) {
                        if (currentTime >= _this.lrc[_i][0] && (!_this.lrc[_i + 1] || currentTime < _this.lrc[_i + 1][0])) {
                            _this.lrcIndex = _i;
                            _this.lrcContents.style.transform = "translateY(" + -_this.lrcIndex * 20 + "px)";
                            _this.lrcContents.style.webkitTransform = "translateY(" + -_this.lrcIndex * 20 + "px)";
                            _this.lrcContents.getElementsByClassName('aplayer-lrc-current')[0].classList.remove('aplayer-lrc-current');
                            _this.lrcContents.getElementsByTagName('p')[_i].classList.add('aplayer-lrc-current');
                        }
                    }
                }
            };
    
            // define APlayer events
            var eventTypes = ['play', 'pause', 'canplay', 'playing', 'ended', 'error'];
            this.event = {};
            for (var _i2 = 0; _i2 < eventTypes.length; _i2++) {
                this.event[eventTypes[_i2]] = [];
            }
            this.trigger = function (type) {
                for (var _i3 = 0; _i3 < _this.event[type].length; _i3++) {
                    _this.event[type][_i3]();
                }
            };
    
            this.element = this.option.element;
            this.multiple = this.playIndex > -1;
            this.music = this.multiple ? this.option.music[this.playIndex] : this.option.music;
    
            // add class aplayer-withlrc
            if (this.option.showlrc) {
                this.element.classList.add('aplayer-withlrc');
            }
    
            // fill in HTML
            var eleHTML = "\n            <div class=\"aplayer-pic\" " + (this.music.pic ? "style=\"background-image: url('" + this.music.pic + "');\"" : "") + ">\n                <div class=\"aplayer-button aplayer-play\">\n                    <button class=\"aplayer-icon aplayer-icon-play\">" + this.getSVG('play') + ("     </button>\n                </div>\n            </div>\n            <div class=\"aplayer-info\">\n                <div class=\"aplayer-music\">\n                    <span class=\"aplayer-title\"></span>\n                    <span class=\"aplayer-author\"></span>\n                </div>\n                <div class=\"aplayer-lrc\">\n                    <div class=\"aplayer-lrc-contents\" style=\"transform: translateY(0); -webkit-transform: translateY(0);\"></div>\n                </div>\n                <div class=\"aplayer-controller\">\n                        <div class=\"aplayer-time\">\n                        <span class=\"aplayer-time-inner\">\n                            - <span class=\"aplayer-ptime\">00:00</span> / <span class=\"aplayer-dtime\">00:00</span>\n                        </span>\n                        <div class=\"aplayer-volume-wrap\">\n                            <button class=\"aplayer-icon aplayer-icon-volume-down\">") + this.getSVG('volume-down') + ("             </button>\n                            <div class=\"aplayer-volume-bar-wrap\">\n                                <div class=\"aplayer-volume-bar\">\n                                    <div class=\"aplayer-volume\" style=\"height: 80%; background: " + this.option.theme + ";\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <button class=\"aplayer-icon aplayer-icon-loop" + (this.loop ? "" : " aplayer-noloop") + "\">") + this.getSVG('loop') + ("         </button>\n                        " + (this.multiple ? "<button class=\"aplayer-icon aplayer-icon-menu\">" + this.getSVG('menu') + "         </button>" : "") + "\n                    </div>\n                </div>\n            </div>  <div class=\"aplayer-bar-wrap\">\n                        <div class=\"aplayer-bar\">\n                            <div class=\"aplayer-loaded\" style=\"width: 0\"></div>\n                            <div class=\"aplayer-played\" style=\"width: 0; background: " + this.option.theme + ";\">\n                                <span class=\"aplayer-thumb\" style=\"border: 1px solid " + this.option.theme + ";\"></span>\n                            </div>\n                        </div>\n                    </div>\n    ");
            if (this.multiple) {
                eleHTML += "\n                      <div class=\"aplayer-list\">\n                <ol>";
                for (var _i4 = 0; _i4 < this.option.music.length; _i4++) {
                    eleHTML += "\n                    <li>\n                        <span class=\"aplayer-list-cur\" style=\"background: " + this.option.theme + ";\"></span>\n                        <span class=\"aplayer-list-index\">" + (_i4 + 1) + "</span>\n                        <span class=\"aplayer-list-title\">" + this.option.music[_i4].title + "</span>\n                        <span class=\"aplayer-author\"> - " + this.option.music[_i4].author + "</span>\n                                            <span class=\"aplayer-list-author\">" + this.option.music[_i4].album_name + "</span>\n                    </li>";
                }
                eleHTML += "\n                </ol>\n            </div>";
            }
            this.element.innerHTML = eleHTML;
    
            // hide loop button in arrow container
            if (this.element.offsetWidth < 300) {
                this.element.getElementsByClassName('aplayer-icon-loop')[0].style.display = 'none';
            }
    
            this.ptime = this.element.getElementsByClassName('aplayer-ptime')[0];
    
            if (this.element.getElementsByClassName('aplayer-info')[0].offsetWidth < 200) {
                this.element.getElementsByClassName('aplayer-time')[0].classList.add('aplayer-time-narrow');
            }
            // fix the width of aplayer bar
            var bar = {};
            bar.barWrap = this.element.getElementsByClassName('aplayer-bar-wrap')[0];
            bar.barWrap.style.marginRight = this.element.getElementsByClassName('aplayer-time')[0].offsetWidth + 5 + 'px';
    
            // switch to narrow style
            if (this.option.narrow) {
                this.element.classList.add('aplayer-narrow');
            }
    
            // play and pause button
            this.button = this.element.getElementsByClassName('aplayer-button')[0];
            this.button.addEventListener('click', function (e) {
                if (_this.button.classList.contains('aplayer-play')) {
                    _this.play();
                } else if (_this.button.classList.contains('aplayer-pause')) {
                    _this.pause();
                }
            });
    
            // click music list: change music
            if (this.multiple) {
                (function () {
                    var listItem = _this.element.getElementsByClassName('aplayer-list')[0].getElementsByTagName('li');
    
                    var _loop = function _loop(_i5) {
                        listItem[_i5].addEventListener('click', function () {
                            var musicIndex = parseInt(listItem[_i5].getElementsByClassName('aplayer-list-index')[0].innerHTML) - 1;
                            if (musicIndex !== _this.playIndex) {
                                _this.setMusic(musicIndex);
                                if (_this.isMobile) {
                                    _this.pause();
                                } else {
                                    _this.play();
                                }
                            } else {
                                _this.toggle();
                            }
                        });
                    };
    
                    for (var _i5 = 0; _i5 < _this.option.music.length; _i5++) {
                        _loop(_i5);
                    }
                })();
            }
    
            // control play progress
            bar.playedBar = this.element.getElementsByClassName('aplayer-played')[0];
            bar.loadedBar = this.element.getElementsByClassName('aplayer-loaded')[0];
            var thumb = this.element.getElementsByClassName('aplayer-thumb')[0];
            var barWidth = void 0;
            bar.barWrap.addEventListener('click', function (event) {
                var e = event || window.event;
                barWidth = bar.barWrap.clientWidth;
                var percentage = (e.clientX - getElementViewLeft(bar.barWrap)) / barWidth;
                _this.updateBar('played', percentage, 'width');
                _this.element.getElementsByClassName('aplayer-ptime')[0].innerHTML = _this.secondToTime(percentage * _this.audio.duration);
                _this.audio.currentTime = parseFloat(bar.playedBar.style.width) / 100 * _this.audio.duration;
            });
    
            thumb.addEventListener('mouseover', function () {
                thumb.style.background = _this.option.theme;
            });
            thumb.addEventListener('mouseout', function () {
                thumb.style.background = '#fff';
            });
    
            var thumbMove = function thumbMove(event) {
                var e = event || window.event;
                var percentage = (e.clientX - getElementViewLeft(bar.barWrap)) / barWidth;
                percentage = percentage > 0 ? percentage : 0;
                percentage = percentage < 1 ? percentage : 1;
                _this.updateBar('played', percentage, 'width');
                if (_this.option.showlrc) {
                    _this.updateLrc(parseFloat(bar.playedBar.style.width) / 100 * _this.audio.duration);
                }
                _this.element.getElementsByClassName('aplayer-ptime')[0].innerHTML = _this.secondToTime(percentage * _this.audio.duration);
            };
    
            var thumbUp = function thumbUp() {
                document.removeEventListener('mouseup', thumbUp);
                document.removeEventListener('mousemove', thumbMove);
                _this.audio.currentTime = parseFloat(bar.playedBar.style.width) / 100 * _this.audio.duration;
                _this.playedTime = setInterval(function () {
                    _this.updateBar('played', _this.audio.currentTime / _this.audio.duration, 'width');
                    if (_this.option.showlrc) {
                        _this.updateLrc();
                    }
                    _this.element.getElementsByClassName('aplayer-ptime')[0].innerHTML = _this.secondToTime(_this.audio.currentTime);
                    _this.trigger('playing');
                }, 100);
            };
    
            thumb.addEventListener('mousedown', function () {
                barWidth = bar.barWrap.clientWidth;
                clearInterval(_this.playedTime);
                document.addEventListener('mousemove', thumbMove);
                document.addEventListener('mouseup', thumbUp);
            });
    
            // control volume
            bar.volumeBar = this.element.getElementsByClassName('aplayer-volume')[0];
            var volumeBarWrap = this.element.getElementsByClassName('aplayer-volume-bar')[0];
            this.volumeicon = this.element.getElementsByClassName('aplayer-time')[0].getElementsByTagName('button')[0];
            var barHeight = 35;
            this.element.getElementsByClassName('aplayer-volume-bar-wrap')[0].addEventListener('click', function (event) {
                var e = event || window.event;
                var percentage = (barHeight - e.clientY + getElementViewTop(volumeBarWrap)) / barHeight;
                percentage = percentage > 0 ? percentage : 0;
                percentage = percentage < 1 ? percentage : 1;
                _this.volume(percentage);
            });
            this.volumeicon.addEventListener('click', function () {
                if (_this.audio.muted) {
                    _this.audio.muted = false;
                    _this.volumeicon.className = _this.audio.volume === 1 ? 'aplayer-icon aplayer-icon-volume-up' : 'aplayer-icon aplayer-icon-volume-down';
                    if (_this.audio.volume === 1) {
                        _this.volumeicon.className = 'aplayer-icon aplayer-icon-volume-up';
                        _this.volumeicon.innerHTML = _this.getSVG('volume-up');
                    } else {
                        _this.volumeicon.className = 'aplayer-icon aplayer-icon-volume-down';
                        _this.volumeicon.innerHTML = _this.getSVG('volume-down');
                    }
                    _this.updateBar('volume', _this.audio.volume, 'height');
                } else {
                    _this.audio.muted = true;
                    _this.volumeicon.className = 'aplayer-icon aplayer-icon-volume-off';
                    _this.volumeicon.innerHTML = _this.getSVG('volume-off');
                    _this.updateBar('volume', 0, 'height');
                }
            });
    
            // get element's view position
            function getElementViewLeft(element) {
                var actualLeft = element.offsetLeft;
                var current = element.offsetParent;
                var elementScrollLeft = void 0;
                while (current !== null) {
                    actualLeft += current.offsetLeft;
                    current = current.offsetParent;
                }
                elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
                return actualLeft - elementScrollLeft;
            }
    
            function getElementViewTop(element) {
                var actualTop = element.offsetTop;
                var current = element.offsetParent;
                var elementScrollTop = void 0;
                while (current !== null) {
                    actualTop += current.offsetTop;
                    current = current.offsetParent;
                }
                elementScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
                return actualTop - elementScrollTop;
            }
    
            // loop control
            var loopEle = this.element.getElementsByClassName('aplayer-icon-loop')[0];
            loopEle.addEventListener('click', function () {
                if (_this.loop) {
                    loopEle.classList.add('aplayer-noloop');
                    _this.loop = false;
                    _this.audio.loop = _this.multiple ? false : _this.loop;
                } else {
                    loopEle.classList.remove('aplayer-noloop');
                    _this.loop = true;
                    _this.audio.loop = _this.multiple ? false : _this.loop;
                }
            });
    
            // toggle menu control
            if (this.multiple) {
                this.element.getElementsByClassName('aplayer-icon-menu')[0].addEventListener('click', () => {
                    const list = this.element.getElementsByClassName('aplayer-list')[0];
                    if (!list.classList.contains('aplayer-list-hide')) {
                        list.classList.add('aplayer-list-hide');
                    }
                    else {
                        list.classList.remove('aplayer-list-hide');
                    }
                });
            }
    
            this.setMusic(0);
    
            instances.push(this);
        }
    
        /**
         * Set music
         */
    
    
        _createClass(APlayer, [{
            key: "setMusic",
            value: function setMusic(index) {
                var _this2 = this;
    
                // get this.music
                if (this.multiple && typeof index !== 'undefined') {
                    this.playIndex = index;
                }
                var indexMusic = this.playIndex;
                this.music = this.multiple ? this.option.music[indexMusic] : this.option.music;
    
                // set html
                if (this.music.pic) {
                    this.element.getElementsByClassName('aplayer-pic')[0].style.backgroundImage = "url('" + this.music.pic + "')";
                }
                this.element.getElementsByClassName('aplayer-title')[0].innerHTML = this.music.title;
                this.element.getElementsByClassName('aplayer-author')[0].innerHTML = " - " + this.music.author;
                if (this.multiple) {
                    if (this.element.getElementsByClassName('aplayer-list-light')[0]) {
                        this.element.getElementsByClassName('aplayer-list-light')[0].classList.remove('aplayer-list-light');
                    }
                    this.element.getElementsByClassName('aplayer-list')[0].getElementsByTagName('li')[indexMusic].classList.add('aplayer-list-light');
                }
    
                // set the previous audio object
                if (this.audio) {
                    this.pause();
                    this.audio.currentTime = 0;
                }
    
                // get this audio object
                if (this.multiple && !this.audios[indexMusic] || this.playIndex === -1) {
                    this.audio = document.createElement("audio");
                    this.audio.src = this.music.url;
                    if (this.option.preload) {
                        this.audio.preload = this.option.preload;
                    } else {
                        this.audio.preload = this.isMobile ? 'none' : 'metadata';
                    }
    
                    // show audio time: the metadata has loaded or changed
                    this.audio.addEventListener('durationchange', function () {
                        if (_this2.audio.duration !== 1) {
                            // compatibility: Android browsers will output 1 at first
                            _this2.element.getElementsByClassName('aplayer-dtime')[0].innerHTML = _this2.secondToTime(_this2.audio.duration);
                        }
                    });
    
                    // show audio loaded bar: to inform interested parties of progress downloading the media
                    this.audio.addEventListener('progress', function () {
                        var percentage = _this2.audio.buffered.length ? _this2.audio.buffered.end(_this2.audio.buffered.length - 1) / _this2.audio.duration : 0;
                        _this2.updateBar('loaded', percentage, 'width');
                    });
    
                    // audio download error: an error occurs
                    this.audio.addEventListener('error', function () {
                        _this2.element.getElementsByClassName('aplayer-author')[0].innerHTML = " - Error happens ╥﹏╥";
                        _this2.trigger('pause');
                    });
    
                    // audio can play: enough data is available that the media can be played
                    this.audio.addEventListener('canplay', function () {
                        _this2.trigger('canplay');
                    });
    
                    // multiple music play
                    this.ended = false;
                    if (this.multiple) {
                        this.audio.addEventListener('ended', function () {
                            if (_this2.isMobile) {
                                _this2.ended = true;
                                _this2.pause();
                                return;
                            }
                            if (_this2.audio.currentTime !== 0) {
                                if (_this2.playIndex < _this2.option.music.length - 1) {
                                    _this2.setMusic(++_this2.playIndex);
                                } else if (_this2.loop) {
                                    _this2.setMusic(0);
                                } else if (!_this2.loop) {
                                    _this2.ended = true;
                                    _this2.pause();
                                    _this2.trigger('ended');
                                }
                            }
                        });
                    } else {
                        this.audio.addEventListener('ended', function () {
                            if (!_this2.loop) {
                                _this2.ended = true;
                                _this2.pause();
                                _this2.trigger('ended');
                            }
                        });
                    }
    
                    // control volume
                    this.audio.volume = parseInt(this.element.getElementsByClassName('aplayer-volume')[0].style.height) / 100;
    
                    // loop
                    this.audio.loop = this.multiple ? false : this.loop;
    
                    if (this.multiple) {
                        this.audios[indexMusic] = this.audio;
                    }
                } else {
                    this.audio = this.audios[indexMusic];
                    this.audio.volume = parseInt(this.element.getElementsByClassName('aplayer-volume')[0].style.height) / 100;
                    this.audio.currentTime = 0;
                }
    
                /**
                 * Parse lrc, suppose multiple time tag
                 *
                 * @param {String} lrc_s - Format:
                 * [mm:ss.xx]lyric
                 * [mm:ss.xxx]lyric
                 * [mm:ss.xx][mm:ss.xx][mm:ss.xx]lyric
                 *
                 * @return {String} [[time, text], [time, text], [time, text], ...]
                 */
                var parseLrc = function parseLrc(lrc_s) {
                    var lyric = lrc_s.split('\n');
                    var lrc = [];
                    var lyricLen = lyric.length;
                    for (var i = 0; i < lyricLen; i++) {
                        // match lrc time
                        var lrcTimes = lyric[i].match(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g);
                        // match lrc text
                        var lrcText = lyric[i].replace(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g, '').replace(/^\s+|\s+$/g, '');
    
                        if (lrcTimes != null) {
                            // handle multiple time tag
                            var timeLen = lrcTimes.length;
                            for (var j = 0; j < timeLen; j++) {
                                var oneTime = /\[(\d{2}):(\d{2})\.(\d{2,3})]/.exec(lrcTimes[j]);
                                var lrcTime = oneTime[1] * 60 + parseInt(oneTime[2]) + parseInt(oneTime[3]) / ((oneTime[3] + '').length === 2 ? 100 : 1000);
                                lrc.push([lrcTime, lrcText]);
                            }
                        }
                    }
                    // sort by time
                    lrc.sort(function (a, b) {
                        return a[0] - b[0];
                    });
                    return lrc;
                };
    
                // fill in lrc
                if (this.option.showlrc) {
                    (function () {
                        var index = _this2.multiple ? indexMusic : 0;
    
                        if (!_this2.lrcs[index]) {
                            (function () {
                                var lrcs = '';
                                if (_this2.option.showlrc === 1) {
                                    if (_this2.multiple) {
                                        lrcs = _this2.option.music[index].lrc;
                                    } else {
                                        lrcs = _this2.option.music.lrc;
                                    }
                                } else if (_this2.option.showlrc === 2 || _this2.option.showlrc === true) {
                                    lrcs = _this2.savelrc[index];
                                } else if (_this2.option.showlrc === 3) {
                                    (function () {
                                        var xhr = new XMLHttpRequest();
                                        xhr.onreadystatechange = function () {
                                            if (xhr.readyState === 4) {
                                                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                                                    lrcs = xhr.responseText;
                                                    _this2.lrcs[index] = parseLrc(lrcs);
                                                    _this2.lrc = _this2.lrcs[index];
                                                    var _lrcHTML = '';
                                                    _this2.lrcContents = _this2.element.getElementsByClassName('aplayer-lrc-contents')[0];
                                                    for (var i = 0; i < _this2.lrc.length; i++) {
                                                        _lrcHTML += "<p>" + _this2.lrc[i][1] + "</p>";
                                                    }
                                                    _this2.lrcContents.innerHTML = _lrcHTML;
                                                    if (!_this2.lrcIndex) {
                                                        _this2.lrcIndex = 0;
                                                    }
                                                    _this2.lrcContents.getElementsByTagName('p')[0].classList.add('aplayer-lrc-current');
                                                    _this2.lrcContents.style.transform = 'translateY(0px)';
                                                    _this2.lrcContents.style.webkitTransform = 'translateY(0px)';
                                                } else {
                                                    console.log('Request was unsuccessful: ' + xhr.status);
                                                }
                                            }
                                        };
                                        var apiurl = void 0;
                                        if (_this2.multiple) {
                                            apiurl = _this2.option.music[index].lrc;
                                        } else {
                                            apiurl = _this2.option.music.lrc;
                                        }
                                        xhr.open('get', apiurl, true);
                                        xhr.send(null);
                                    })();
                                }
                                if (lrcs) {
                                    _this2.lrcs[index] = parseLrc(lrcs);
                                } else {
                                    _this2.lrcs[index] = [['00:00', 'Loading']];
                                }
                            })();
                        }
    
                        _this2.lrc = _this2.lrcs[index];
                        var lrcHTML = '';
                        _this2.lrcContents = _this2.element.getElementsByClassName('aplayer-lrc-contents')[0];
                        for (var i = 0; i < _this2.lrc.length; i++) {
                            lrcHTML += "<p>" + _this2.lrc[i][1] + "</p>";
                        }
                        _this2.lrcContents.innerHTML = lrcHTML;
                        if (!_this2.lrcIndex) {
                            _this2.lrcIndex = 0;
                        }
                        _this2.lrcContents.getElementsByTagName('p')[0].classList.add('aplayer-lrc-current');
                        _this2.lrcContents.style.transform = 'translateY(0px)';
                        _this2.lrcContents.style.webkitTransform = 'translateY(0px)';
                    })();
                }
    
                // set duration time
                if (this.audio.duration !== 1) {
                    // compatibility: Android browsers will output 1 at first
                    this.element.getElementsByClassName('aplayer-dtime')[0].innerHTML = this.audio.duration ? this.secondToTime(this.audio.duration) : '00:00';
                }
    
                // autoplay
                if (this.option.autoplay && !this.isMobile) {
                    this.play();
                }
                this.option.autoplay = true; // autoplay next music
    
                if (this.isMobile) {
                    this.pause();
                }
            }
    
            /**
             * Play music
             */
    
        }, {
            key: "play",
            value: function play(time) {
                var _this3 = this;
    
                if (Object.prototype.toString.call(time) === '[object Number]') {
                    this.audio.currentTime = time;
                }
                if (this.audio.paused) {
                    this.button.classList.remove('aplayer-play');
                    this.button.classList.add('aplayer-pause');
                    this.button.innerHTML = '';
                    setTimeout(function () {
                        _this3.button.innerHTML = "\n                            <button class=\"aplayer-icon aplayer-icon-pause\">" + _this3.getSVG('pause') + "     </button>";
                    }, 100);
    
                    // pause other players (Thanks @Aprikyblue)
                    if (this.option.mutex) {
                        for (var i = 0; i < instances.length; i++) {
                            if (this != instances[i]) {
                                instances[i].pause();
                            }
                        }
                    }
                    this.audio.play();
                    if (this.playedTime) {
                        clearInterval(this.playedTime);
                    }
                    this.playedTime = setInterval(function () {
                        _this3.updateBar('played', _this3.audio.currentTime / _this3.audio.duration, 'width');
                        if (_this3.option.showlrc) {
                            _this3.updateLrc();
                        }
                        _this3.ptime.innerHTML = _this3.secondToTime(_this3.audio.currentTime);
                        _this3.trigger('playing');
                    }, 100);
                    this.trigger('play');
                }
            }
    
            /**
             * Pause music
             */
    
        }, {
            key: "pause",
            value: function pause() {
                var _this4 = this;
    
                if (!this.audio.paused || this.ended) {
                    this.ended = false;
                    this.button.classList.remove('aplayer-pause');
                    this.button.classList.add('aplayer-play');
                    this.button.innerHTML = '';
                    setTimeout(function () {
                        _this4.button.innerHTML = "\n                            <button class=\"aplayer-icon aplayer-icon-play\">" + _this4.getSVG('play') + "     </button>";
                    }, 100);
                    this.audio.pause();
                    clearInterval(this.playedTime);
                    this.trigger('pause');
                }
            }
    
            /**
             * Set volume
             */
    
        }, {
            key: "volume",
            value: function volume(percentage) {
                this.updateBar('volume', percentage, 'height');
                this.audio.volume = percentage;
                if (this.audio.muted) {
                    this.audio.muted = false;
                }
                if (percentage === 1) {
                    this.volumeicon.className = 'aplayer-icon aplayer-icon-volume-up';
                    this.volumeicon.innerHTML = this.getSVG('volume-up');
                } else {
                    this.volumeicon.className = 'aplayer-icon aplayer-icon-volume-down';
                    this.volumeicon.innerHTML = this.getSVG('volume-down');
                }
            }
    
            /**
             * attach event
             */
    
        }, {
            key: "on",
            value: function on(name, func) {
                if (typeof func === 'function') {
                    this.event[name].push(func);
                }
            }
    
            /**
             * toggle between play and pause
             */
    
        }, {
            key: "toggle",
            value: function toggle() {
                if (this.audio.paused) {
                    this.play();
                } else {
                    this.pause();
                }
            }
        }]);
    
        return APlayer;
    }();
    
    exports.APlayer = APlayer;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(2);
    if(typeof content === 'string') content = [[module.id, content, '']];
    // add the styles to the DOM
    var update = __webpack_require__(5)(content, {});
    if(content.locals) module.exports = content.locals;
    // Hot Module Replacement
    if(false) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
            module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./APlayer.scss", function() {
                var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./APlayer.scss");
                if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
    }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(3)();
    // imports
    
    
    // module
    exports.push([module.id, ".aplayer-narrow{width:66px}.aplayer-narrow .aplayer-info{display:none}.aplayer-withlrc.aplayer-narrow{width:106px}.aplayer-withlrc.aplayer .aplayer-pic{height:106px;width:106px}.aplayer-withlrc.aplayer .aplayer-info{margin-left:106px;height:106px}.aplayer-withlrc.aplayer .aplayer-lrc{display:block}.aplayer{font-family:Arial,Helvetica,sans-serif;margin:5px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);border-radius:2px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:normal}.aplayer *{box-sizing:content-box}.aplayer .aplayer-icon{width:15px;height:15px;border:none;background-color:transparent;outline:none;cursor:pointer;opacity:.8;vertical-align:middle;padding:0}.aplayer .aplayer-icon .aplayer-fill{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.aplayer .aplayer-lrc-content{display:none}.aplayer .aplayer-pic{position:relative;float:left;height:66px;width:66px;background-image:url(" + __webpack_require__(4) + ");background-size:100%;-webkit-transition:all .3s ease;transition:all .3s ease}.aplayer .aplayer-pic .aplayer-button{position:absolute;border-radius:50%;opacity:.8;cursor:pointer;text-shadow:0 1px 1px rgba(0,0,0,.2);box-shadow:0 1px 1px rgba(0,0,0,.2);background:rgba(0,0,0,.2);-webkit-transition:all .1s ease;transition:all .1s ease}.aplayer .aplayer-pic .aplayer-button:hover{opacity:1}.aplayer .aplayer-pic .aplayer-button .aplayer-fill{fill:#fff}.aplayer .aplayer-pic .aplayer-hide{display:none}.aplayer .aplayer-pic .aplayer-play{width:26px;height:26px;border:2px solid #fff;bottom:50%;right:50%;margin:0 -15px -15px 0}.aplayer .aplayer-pic .aplayer-play .aplayer-icon-play{position:absolute;top:3px;left:4px;height:20px;width:20px}.aplayer .aplayer-pic .aplayer-pause{width:16px;height:16px;border:2px solid #fff;bottom:4px;right:4px}.aplayer .aplayer-pic .aplayer-pause .aplayer-icon-pause{position:absolute;top:2px;left:2px;height:12px;width:12px}.aplayer .aplayer-info{margin-left:66px;padding:14px 7px 0 10px;height:66px;box-sizing:border-box}.aplayer .aplayer-info .aplayer-music{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:13px}.aplayer .aplayer-info .aplayer-music .aplayer-title{font-size:14px}.aplayer .aplayer-author{font-size:12px;color:#666}.aplayer .aplayer-info .aplayer-controller{position:relative}.aplayer-bar-wrap{margin:0 140px 0 5px;padding:4px 0;cursor:pointer!important} .aplayer-bar-wrap .aplayer-bar{position:relative;height:2px;width:100%;background:#cdcdcd}.aplayer-bar-wrap .aplayer-bar .aplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:#aaa;height:2px;-webkit-transition:all .5s ease;transition:all .5s ease} .aplayer-bar-wrap .aplayer-bar .aplayer-played{position:absolute;left:0;top:0;bottom:0;height:2px} .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:8px;width:8px;border-radius:50%;background:#fff;cursor:pointer!important}.aplayer .aplayer-info .aplayer-controller .aplayer-time{position:absolute;right:0;bottom:-3px;height:17px;color:#999;font-size:11px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-time-inner{vertical-align:middle}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon{cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon .aplayer-fill{fill:#666}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-loop{margin-right:4px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-noloop .aplayer-fill{fill:#ddd}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-noloop:hover .aplayer-fill{fill:#bbb}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon:hover .aplayer-fill{fill:#000}.aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-loop,.aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-menu{display:none}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap{position:relative;display:inline-block;margin-left:3px;cursor:pointer!important}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap:hover .aplayer-volume-bar-wrap{display:block}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap{display:none;position:absolute;bottom:15px;right:-3px;width:25px;height:40px;z-index:99}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar{position:absolute;bottom:0;right:10px;width:5px;height:35px;background:#aaa}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume{position:absolute;bottom:0;right:0;width:5px;-webkit-transition:all .1s ease;transition:all .1s ease}.aplayer .aplayer-lrc{display:none;position:relative;height:40px;background:#fff;text-align:center;overflow:hidden;margin:-10px 0 10px}.aplayer .aplayer-lrc:before{top:0;height:10%;background:-webkit-linear-gradient(top,#fff,hsla(0,0%,100%,0));background:-webkit-gradient(linear,left top,left bottom,from(#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(180deg,#fff 0,hsla(0,0%,100%,0));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#00ffffff',GradientType=0)}.aplayer .aplayer-lrc:after,.aplayer .aplayer-lrc:before{position:absolute;z-index:1;display:block;overflow:hidden;width:100%;content:' '}.aplayer .aplayer-lrc:after{bottom:0;height:33%;background:-webkit-linear-gradient(bottom,#fff,hsla(0,0%,100%,0));background:-webkit-gradient(linear,left bottom,left top,from(#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(0deg,#fff 0,hsla(0,0%,100%,0));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',endColorstr='#ffffff',GradientType=0)}.aplayer .aplayer-lrc p{font-size:12px;color:#666;line-height:20px!important;height:20px!important;padding:0!important;margin:0!important;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;opacity:.4;overflow:hidden}.aplayer .aplayer-lrc p.aplayer-lrc-current{opacity:1}.aplayer .aplayer-lrc .aplayer-lrc-contents{width:100%;-webkit-transition:all .5s ease-out;transition:all .5s ease-out}.aplayer .aplayer-list{overflow:auto;-webkit-transition:all .5s ease;transition:all .5s ease}.aplayer .aplayer-list.aplayer-list-hide{height:0!important}.aplayer .aplayer-list ol{list-style-type:none;margin:0;padding:0}.aplayer .aplayer-list ol li{position:relative;height:32px;line-height:32px;padding:0 15px;font-size:12px;border-top:1px solid #e9e9e9;cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease;overflow:hidden}.aplayer .aplayer-list ol li:hover{background:#efefef}.aplayer .aplayer-list ol li.aplayer-list-light{background:#e9e9e9}.aplayer .aplayer-list ol li.aplayer-list-light .aplayer-list-cur{display:inline-block}.aplayer .aplayer-list ol li .aplayer-list-cur{display:none;width:3px;height:22px;position:absolute;left:0;top:5px;cursor:pointer}.aplayer .aplayer-list ol li .aplayer-list-index{color:#666;margin-right:12px;cursor:pointer}.aplayer .aplayer-list ol li .aplayer-list-author{color:#666;float:right;cursor:pointer}@-webkit-keyframes aplayer-roll{0%{left:0}to{left:-100%}}@keyframes aplayer-roll{0%{left:0}to{left:-100%}}", ""]);
    
    // exports


/***/ },
/* 3 */
/***/ function(module, exports) {

    /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    module.exports = function() {
        var list = [];
    
        // return the list of modules as css string
        list.toString = function toString() {
            var result = [];
            for(var i = 0; i < this.length; i++) {
                var item = this[i];
                if(item[2]) {
                    result.push("@media " + item[2] + "{" + item[1] + "}");
                } else {
                    result.push(item[1]);
                }
            }
            return result.join("");
        };
    
        // import a list of modules into the list
        list.i = function(modules, mediaQuery) {
            if(typeof modules === "string")
                modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for(var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if(typeof id === "number")
                    alreadyImportedModules[id] = true;
            }
            for(i = 0; i < modules.length; i++) {
                var item = modules[i];
                // skip already imported module
                // this implementation is not 100% perfect for weird media query combinations
                //  when a module is imported multiple times with different media queries.
                //  I hope this will never occur (Hey this way we have smaller bundles)
                if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                    if(mediaQuery && !item[2]) {
                        item[2] = mediaQuery;
                    } else if(mediaQuery) {
                        item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                    }
                    list.push(item);
                }
            }
        };
        return list;
    };


/***/ },
/* 4 */
/***/ function(module, exports) {

    module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2NjQ3NUZBM0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjQ3NUY5M0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OENEMEFFRjM0NTI1NjE0NEREQkU4RjkxRjAwNjM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0iOThDRDBBRUYzNDUyNTYxNDREREJFOEY5MUYwMDYzNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhca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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

    /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
    */
    var stylesInDom = {},
        memoize = function(fn) {
            var memo;
            return function () {
                if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                return memo;
            };
        },
        isOldIE = memoize(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
        }),
        getHeadElement = memoize(function () {
            return document.head || document.getElementsByTagName("head")[0];
        }),
        singletonElement = null,
        singletonCounter = 0,
        styleElementsInsertedAtTop = [];
    
    module.exports = function(list, options) {
        if(false) {
            if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }
    
        options = options || {};
        // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        if (typeof options.singleton === "undefined") options.singleton = isOldIE();
    
        // By default, add <style> tags to the bottom of <head>.
        if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
    
        var styles = listToStyles(list);
        addStylesToDom(styles, options);
    
        return function update(newList) {
            var mayRemove = [];
            for(var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                domStyle.refs--;
                mayRemove.push(domStyle);
            }
            if(newList) {
                var newStyles = listToStyles(newList);
                addStylesToDom(newStyles, options);
            }
            for(var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if(domStyle.refs === 0) {
                    for(var j = 0; j < domStyle.parts.length; j++)
                        domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    }
    
    function addStylesToDom(styles, options) {
        for(var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            if(domStyle) {
                domStyle.refs++;
                for(var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j](item.parts[j]);
                }
                for(; j < item.parts.length; j++) {
                    domStyle.parts.push(addStyle(item.parts[j], options));
                }
            } else {
                var parts = [];
                for(var j = 0; j < item.parts.length; j++) {
                    parts.push(addStyle(item.parts[j], options));
                }
                stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
            }
        }
    }
    
    function listToStyles(list) {
        var styles = [];
        var newStyles = {};
        for(var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = {css: css, media: media, sourceMap: sourceMap};
            if(!newStyles[id])
                styles.push(newStyles[id] = {id: id, parts: [part]});
            else
                newStyles[id].parts.push(part);
        }
        return styles;
    }
    
    function insertStyleElement(options, styleElement) {
        var head = getHeadElement();
        var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
        if (options.insertAt === "top") {
            if(!lastStyleElementInsertedAtTop) {
                head.insertBefore(styleElement, head.firstChild);
            } else if(lastStyleElementInsertedAtTop.nextSibling) {
                head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
            } else {
                head.appendChild(styleElement);
            }
            styleElementsInsertedAtTop.push(styleElement);
        } else if (options.insertAt === "bottom") {
            head.appendChild(styleElement);
        } else {
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
    }
    
    function removeStyleElement(styleElement) {
        styleElement.parentNode.removeChild(styleElement);
        var idx = styleElementsInsertedAtTop.indexOf(styleElement);
        if(idx >= 0) {
            styleElementsInsertedAtTop.splice(idx, 1);
        }
    }
    
    function createStyleElement(options) {
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        insertStyleElement(options, styleElement);
        return styleElement;
    }
    
    function createLinkElement(options) {
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        insertStyleElement(options, linkElement);
        return linkElement;
    }
    
    function addStyle(obj, options) {
        var styleElement, update, remove;
    
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement(options));
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
            remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
        } else if(obj.sourceMap &&
            typeof URL === "function" &&
            typeof URL.createObjectURL === "function" &&
            typeof URL.revokeObjectURL === "function" &&
            typeof Blob === "function" &&
            typeof btoa === "function") {
            styleElement = createLinkElement(options);
            update = updateLink.bind(null, styleElement);
            remove = function() {
                removeStyleElement(styleElement);
                if(styleElement.href)
                    URL.revokeObjectURL(styleElement.href);
            };
        } else {
            styleElement = createStyleElement(options);
            update = applyToTag.bind(null, styleElement);
            remove = function() {
                removeStyleElement(styleElement);
            };
        }
    
        update(obj);
    
        return function updateStyle(newObj) {
            if(newObj) {
                if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
                    return;
                update(obj = newObj);
            } else {
                remove();
            }
        };
    }
    
    var replaceText = (function () {
        var textStore = [];
    
        return function (index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join('\n');
        };
    })();
    
    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;
    
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = replaceText(index, css);
        } else {
            var cssNode = document.createTextNode(css);
            var childNodes = styleElement.childNodes;
            if (childNodes[index]) styleElement.removeChild(childNodes[index]);
            if (childNodes.length) {
                styleElement.insertBefore(cssNode, childNodes[index]);
            } else {
                styleElement.appendChild(cssNode);
            }
        }
    }
    
    function applyToTag(styleElement, obj) {
        var css = obj.css;
        var media = obj.media;
    
        if(media) {
            styleElement.setAttribute("media", media)
        }
    
        if(styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
        } else {
            while(styleElement.firstChild) {
                styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
        }
    }
    
    function updateLink(linkElement, obj) {
        var css = obj.css;
        var sourceMap = obj.sourceMap;
    
        if(sourceMap) {
            // http://stackoverflow.com/a/26603875
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
    
        var blob = new Blob([css], { type: "text/css" });
    
        var oldSrc = linkElement.href;
    
        linkElement.href = URL.createObjectURL(blob);
    
        if(oldSrc)
            URL.revokeObjectURL(oldSrc);
    }


/***/ }
/******/ ])
});
;


/** WEBPACK FOOTER **
 ** APlayer.min.js
 **/
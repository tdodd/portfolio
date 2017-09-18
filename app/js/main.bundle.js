"use strict";!function(){function e(e){c.style.height=n(),c.classList.remove("none");var t=e.dataset.triggerId,o=document.querySelector("#"+t);o.classList.add("showing","fade-in-up"),o.classList.remove("none","fade-out-down")}function t(e){var t=e.dataset.triggerId,n=document.querySelector("#"+t);n.classList.remove("showing","fade-in-up"),n.classList.add("fade-out-down"),setTimeout(function(){c.classList.add("none"),n.classList.add("none")},i)}function n(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight).toString()+"px"}for(var o=document.querySelectorAll(".timeline-btn"),r=document.querySelectorAll(".close-btn"),c=document.querySelector(".page-overlay"),i=400,s=0;s<o.length;s++)o[s].addEventListener("click",function(t){t.preventDefault(),e(t.target)});for(var a=0;a<r.length;a++)r[a].addEventListener("click",function(e){e.preventDefault(),t(e.target)})}();
"use strict";function getViewportWidth(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)}function checkListInViewport(t){for(var e=0;e<t.length;e++)if(inViewport(t[e]))return!0;return!1}function inViewport(t){for(var e=t.offsetTop,n=t.offsetLeft,f=t.offsetWidth,i=t.offsetHeight;t.offsetParent;)e+=(t=t.offsetParent).offsetTop,n+=t.offsetLeft;return e>=window.pageYOffset&&n>=window.pageXOffset&&e+i<=window.pageYOffset+window.innerHeight&&n+f<=window.pageXOffset+window.innerWidth}
"use strict";!function(){function t(){r=!0;for(var t=0;t<e.length;t++)e[t].classList.add("slide-in-left");for(var c=0;c<i.length;c++)i[c].classList.add("slide-in-right")}var e=document.querySelectorAll(".grid-left"),i=document.querySelectorAll(".grid-right"),r=!1;(checkListInViewport(e)||checkListInViewport(i))&&t(),window.addEventListener("scroll",function(c){r||!checkListInViewport(e)&&!checkListInViewport(i)||t()})}();
"use strict";!function(){function i(){t=!0,n.classList.add("profile-animation")}var n=document.querySelector(".img-round"),t=!1;inViewport(n)&&i(),window.addEventListener("scroll",function(o){!t&&inViewport(n)&&i()})}();
"use strict";!function(){function t(){e=!0;for(var t=0;t<n.length;t++)!function(t){var e=Math.floor(1e3*Math.random());setTimeout(function(){return n[t].classList.add("pop-in")},e)}(t)}var n=document.querySelectorAll(".grid-item"),e=!1;window.addEventListener("resize",function(i){!e&&checkListInViewport(n)&&t()}),window.addEventListener("scroll",function(i){!e&&checkListInViewport(n)&&t()})}();
"use strict";!function(){function t(){for(t=0;t<s.length;t++)inViewport(s[t])&&!s[t].classList.contains("showing")&&(s[t].classList.add("showing"),i(s[t]));for(var t=0;t<o.length;t++)inViewport(o[t])&&!o[t].classList.contains("showing")&&(o[t].classList.add("showing"),n(o[t]))}function i(t){t.classList.remove("hidden"),t.classList.add("animate-in-left")}function n(t){t.classList.remove("hidden"),t.classList.add("animate-in-right")}function e(){for(t=0;t<s.length;t++)s[t].classList.remove("hidden");for(var t=0;t<o.length;t++)o[t].classList.remove("hidden")}var s=document.querySelectorAll(".timeline-content-left"),o=document.querySelectorAll(".timeline-content-right");t(),getViewportWidth()<=768&&e(),window.addEventListener("resize",function(t){getViewportWidth()<=768&&e()}),window.addEventListener("scroll",function(i){t()})}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmpzIiwidXRpbHMuanMiLCJhbmltYXRpb25zL2dyaWQuanMiLCJhbmltYXRpb25zL3Byb2ZpbGUtcGljdHVyZS5qcyIsImFuaW1hdGlvbnMvdGVjaG5vbG9naWVzLmpzIiwiYW5pbWF0aW9ucy90aW1lbGluZS5qcyJdLCJuYW1lcyI6WyJzaG93TW9kYWwiLCJidXR0b24iLCJvdmVybGF5Iiwic3R5bGUiLCJoZWlnaHQiLCJnZXRXaW5kb3dIZWlnaHQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpZCIsImRhdGFzZXQiLCJ0cmlnZ2VySWQiLCJtb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlTW9kYWwiLCJzZXRUaW1lb3V0IiwiYWRkIiwiYm9keSIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJNYXRoIiwibWF4Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwidG9TdHJpbmciLCJtb2RhbEJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VCdXR0b25zIiwiZmFkZU91dFRpbWUiLCJpIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZ2V0Vmlld3BvcnRXaWR0aCIsImNsaWVudFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNoZWNrTGlzdEluVmlld3BvcnQiLCJsaXN0IiwiaW5WaWV3cG9ydCIsImVsZW0iLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRQYXJlbnQiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJzaG93R3JpZCIsImZsYWciLCJncmlkTGVmdCIsImoiLCJncmlkUmlnaHQiLCJzaG93SW1hZ2UiLCJwcm9maWxlUGljdHVyZSIsImNhcmRzIiwicm5kIiwiZmxvb3IiLCJyYW5kb20iLCJfbG9vcCIsImNoZWNrVGltZWxpbmVFbGVtcyIsImxlZnRJdGVtcyIsImNvbnRhaW5zIiwic2hvd0VsZW1MZWZ0IiwicmlnaHRJdGVtcyIsImRpc3BsYXlUaW1lbGluZUVsZW1zIl0sIm1hcHBpbmdzIjoiY0FHQSxXQWtDRyxTQUFTQSxFQUFVQyxHQUdoQkMsRUFBUUMsTUFBTUMsT0FBU0MsSUFEdkJILEVBQUFJLFVBQUFDLE9BQUEsUUFLQSxJQUFNQyxFQUFLUCxFQUFPUSxRQUFRQyxVQUQxQkMsRUFBQUMsU0FBQUMsY0FBQSxJQUFBTCxHQUNBRyxFQUFNSCxVQUFZQyxJQUFBQSxVQUFRQyxjQUMxQkMsRUFBTUEsVUFBUUMsT0FBU0MsT0FBQUEsaUJBVTFCLFNBQVNDLEVBQVdiLEdBRWpCLElBQU1PLEVBQUtQLEVBQU9RLFFBQVFDLFVBQXBCRixFQUFLUCxTQUFBWSxjQUFBWixJQUFYTyxHQUNBRyxFQUFNQSxVQUFRQyxPQUFTQyxVQUFULGNBQ2RGLEVBQU1MLFVBQVVDLElBQUFBLGlCQUdoQlEsV0FBQSxXQUNBQSxFQUFXVCxVQUFBVSxJQUFNLFFBQ2RkLEVBQUFBLFVBQVFJLElBQVVVLFNBQ2xCTCxHQVNOLFNBQVNOLElBQ04sSUFBTVksRUFBT0wsU0FBU0ssS0FDaEJDLEVBQU9OLFNBQVNPLGdCQUV0QixPQURlQyxLQUFLQyxJQUFJSixFQUFLSyxhQUFjTCxFQUFLTSxhQUFjTCxFQUFLTSxhQUFjTixFQUFLSSxhQUFjSixFQUFLSyxjQUMzRkUsV0FBYSxLQTlEOUIsSUFBSyxJQVZDQyxFQUFlZCxTQUFTZSxpQkFBaUIsaUJBRC9DQyxFQUFBaEIsU0FBQWUsaUJBQUEsY0FLTXpCLEVBQVVVLFNBQVNDLGNBQWMsaUJBR2pDZ0IsRUFBYyxJQUdYQyxFQUFJLEVBQUdBLEVBQUlKLEVBQWFLLE9BQVFELElBRHpDSixFQUFBSSxHQUFBRSxpQkFBQSxRQUFBLFNBQUFDLEdBQ0tBLEVBQUlILGlCQUNOSixFQUFhSSxFQUFHRSxVQU9uQixJQUFLLElBQUlGLEVBQUksRUFBR0EsRUFBSUYsRUFBYUcsT0FBUUQsSUFEekNGLEVBQUFFLEdBQUFFLGlCQUFB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bkMsVUFBVVUsT0FBSSxVQUNwQnlCLEVBQUFuQyxVQUFBVSxJQUFBLG1CQU9DeUIsU0FBS25DLEVBQUxtQyxHQUNBQSxFQUFLbkMsVUFBVVUsT0FBSSxVQUNwQnlCLEVBQUFuQyxVQUFBVSxJQUFBLG9CQUtELFNBQVNxRCxJQUdMSixJQUFBQSxFQUFBLEVBQWEzRCxFQUFBQSxFQUFVQyxPQUFPdUIsSUFDL0JtQyxFQUFBbkMsR0FBQXhCLFVBQUFDLE9BQUEsVUFHQzZELElBQUFBLElBQUFBLEVBQVd0QyxFQUFHeEIsRUFBQUEsRUFBVUMsT0FBT3VCLElBQ2hDc0MsRUFBQXRDLEdBQUF4QixVQUFBQyxPQUFBLFVBN0VILElBQU0wRCxFQUFZckQsU0FBU2UsaUJBQWlCLDBCQUQ1Q3lDLEVBQUF4RCxTQUFBZSxpQkFBQSwyQkFLQXFDLElBR0k5QixvQkFBc0IsS0FBS21DLElBRy9CakMsT0FBT0osaUJBQWlCLFNBQVUsU0FBQ0MsR0FEbkNDLG9CQUFBLEtBQ0FFLE1BT0FBLE9BQU9KLGlCQUFpQixTQUFVLFNBQUNDLEdBRG5DK0IsTUFuQkYiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE9wZW4gYW5kIGNsb3NlIG1vZGFsc1xuICovXG4oKCkgPT4ge1xuXG4gICAvLyBHZXQgbW9kYWwgYnV0dG9uc1xuICAgY29uc3QgbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWVsaW5lLWJ0bicpO1xuICAgY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ0bicpO1xuXG4gICAvLyBQYWdlIE92ZXJsYXlcbiAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1vdmVybGF5Jyk7XG5cbiAgIC8vIE1vZGFsIGZhZGUgb3V0IGR1cmF0aW9uIChpbiBtcylcbiAgIGNvbnN0IGZhZGVPdXRUaW1lID0gNDAwO1xuXG4gICAvLyBBZGQgY2xpY2sgbGlzdGVuZXJzIHRvIG9wZW4gYnV0dG9uc1xuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RhbEJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1vZGFsQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIHNob3dNb2RhbChldmVudC50YXJnZXQpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIC8vICBBZGQgY2xpY2sgbGlzdGVuZXJzIHRvIGNsb3NlIGJ1dHRvbnNcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xvc2VCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjbG9zZUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICBjbG9zZU1vZGFsKGV2ZW50LnRhcmdldCk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgLy8gVXRpbGl0aWVzXG5cbiAgIC8qKlxuICAgICogU2hvdyBhIG1vZGFsIGRpYWxvZ1xuICAgICogQHBhcmFtIHtEb21Ob2RlfSBidXR0b24gdGhlIG1vZGFsIGJ1dHRvbiB0aGF0IHdhcyBjbGlja2VkXG4gICAgKi9cbiAgIGZ1bmN0aW9uIHNob3dNb2RhbChidXR0b24pIHtcblxuICAgICAgLy8gU2hvdyBwYWdlIG92ZXJsYXlcbiAgICAgIG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gZ2V0V2luZG93SGVpZ2h0KCk7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcblxuICAgICAgLy8gU2hvdyBNb2RhbFxuICAgICAgY29uc3QgaWQgPSBidXR0b24uZGF0YXNldC50cmlnZ2VySWQ7XG4gICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvd2luZycsICdmYWRlLWluLXVwJyk7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdub25lJywgJ2ZhZGUtb3V0LWRvd24nKTtcblxuICAgfVxuXG4gICAvKipcbiAgICAqIEhpZGUgYSBtb2RhbCBkaWFsb2dcbiAgICAqIEBwYXJhbSB7RG9tTm9kZX0gYnV0dG9uIHRoZSBtb2RhbCBidXR0b24gdGhhdCB3YXMgY2xpY2tlZFxuICAgICovXG4gICBmdW5jdGlvbiBjbG9zZU1vZGFsKGJ1dHRvbikge1xuXG4gICAgICBjb25zdCBpZCA9IGJ1dHRvbi5kYXRhc2V0LnRyaWdnZXJJZDtcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJywgJ2ZhZGUtaW4tdXAnKTtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0LWRvd24nKTtcbiAgICAgIFxuICAgICAgLy8gSGlkZSBtb2RhbCBhbmQgb3ZlcmxheSBhZnRlciBkZWxheVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcbiAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ25vbmUnKVxuICAgICAgfSwgZmFkZU91dFRpbWUpO1xuXG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IHRoZSBoZWlnaHQgb2YgdGhlIGVudGlyZSBkb2N1bWVudFxuICAgICogQHJldHVybiB7c3RyaW5nfSB0aGUgZG9jdW1lbnQgaGVpZ2h0IGluIHBpeGVsc1xuICAgICovXG4gICBmdW5jdGlvbiBnZXRXaW5kb3dIZWlnaHQoKSB7XG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCk7XG4gICAgICByZXR1cm4gaGVpZ2h0LnRvU3RyaW5nKCkgKyAncHgnO1xuICAgfVxuXG59KSgpOyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFV0aWxpdHkgZnVuY3Rpb25zIHVzZWQgYnkgb3RoZXIganMgZmlsZXNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCB2aWV3cG9ydCB3aWR0aFxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgY3VycmVudCB2aWV3cG9ydCB3aWR0aFxuICovXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFdpZHRoKCkge1xuICAgcmV0dXJuIE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG59XG5cbi8qKlxuICogTG9vcHMgdGhyb3VnaCBhIGxpc3Qgb2YgZWxlbWVudHMgdG8gc2VlIGlmIGFueSBhcmUgaW4gdGhlIHZpZXdwb3J0XG4gKiBAcGFyYW0ge2FycmF5fSBsaXN0IGFuIGFycmF5IG9mIERvbU5vZGVzXG4gKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gY2hlY2tMaXN0SW5WaWV3cG9ydChsaXN0KSB7XG5cbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGluVmlld3BvcnQobGlzdFtpXSkpIHtcbiAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgfVxuXG4gICByZXR1cm4gZmFsc2U7XG5cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBnaXZlbiBlbGVtZW50IGlzIGNvbXBsZXRlbHkgaW4gdGhlIHZpZXdwb3J0XG4gKiBAcGFyYW0ge2RvbU5vZGV9IGVsZW0gVGhlIGVsZW1lbnQgdG8gY2hlY2tcbiAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaW5WaWV3cG9ydChlbGVtKSB7XG5cbiAgIGxldCB0b3AgPSBlbGVtLm9mZnNldFRvcDtcbiAgIGxldCBsZWZ0ID0gZWxlbS5vZmZzZXRMZWZ0O1xuICAgbGV0IHdpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgIGxldCBoZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgd2hpbGUgKGVsZW0ub2Zmc2V0UGFyZW50KSB7XG4gICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICB0b3AgKz0gZWxlbS5vZmZzZXRUb3A7XG4gICAgICBsZWZ0ICs9IGVsZW0ub2Zmc2V0TGVmdDtcbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIHRvcCA+PSB3aW5kb3cucGFnZVlPZmZzZXQgJiZcbiAgICAgIGxlZnQgPj0gd2luZG93LnBhZ2VYT2Zmc2V0ICYmXG4gICAgICAodG9wICsgaGVpZ2h0KSA8PSAod2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0KSAmJlxuICAgICAgKGxlZnQgKyB3aWR0aCkgPD0gKHdpbmRvdy5wYWdlWE9mZnNldCArIHdpbmRvdy5pbm5lcldpZHRoKVxuICAgKTtcblxufSIsIi8qKlxyXG4gKiBBbmltYXRlIGdyaWQgZWxlbWVudHMgb25jZSB0aGV5IGFyZSBpbiB0aGUgdmlld3BvcnRcclxuICovXHJcbigoKSA9PiB7XHJcblxyXG5cdC8vIEdldCBncmlkIGVsZW1lbnRzXHJcblx0Y29uc3QgZ3JpZExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1sZWZ0Jyk7XHJcblx0Y29uc3QgZ3JpZFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtcmlnaHQnKTtcclxuXHJcblx0Ly8gU2V0IHRvIHRydWUgb25jZSBncmlkIGhhcyBiZWVuIGFuaW1hdGVkXHJcblx0bGV0IGZsYWcgPSBmYWxzZTtcclxuXHJcblx0Ly8gQ2hlY2sgb24gcGFnZSBsb2FkXHJcblx0aWYgKGNoZWNrTGlzdEluVmlld3BvcnQoZ3JpZExlZnQpIHx8IGNoZWNrTGlzdEluVmlld3BvcnQoZ3JpZFJpZ2h0KSkge1xyXG5cdFx0c2hvd0dyaWQoKTtcclxuXHR9XHJcblxyXG5cdC8vIENoZWNrIGlmIGFueSBlbGVtZW50cyBhcmUgaW4gdGhlIHZpZXdwb3J0IG9uIHNjcm9sbFxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRpZiAoIWZsYWcgJiYgKGNoZWNrTGlzdEluVmlld3BvcnQoZ3JpZExlZnQpIHx8IGNoZWNrTGlzdEluVmlld3BvcnQoZ3JpZFJpZ2h0KSkpIHtcclxuXHRcdFx0c2hvd0dyaWQoKTtcclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFuaW1hdGUgdGhlIEdyaWRcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBzaG93R3JpZCgpIHtcclxuXHJcbiAgICAgIGZsYWcgPSB0cnVlOyAvLyBTZXQgZmxhZ1xyXG5cclxuICAgICAgLy8gQW5pbWF0ZSBsZWZ0IHNpZGVcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkTGVmdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBncmlkTGVmdFtpXS5jbGFzc0xpc3QuYWRkKCdzbGlkZS1pbi1sZWZ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEFuaW1hdGUgcmlnaHQgc2lkZVxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRSaWdodC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICBncmlkUmlnaHRbal0uY2xhc3NMaXN0LmFkZCgnc2xpZGUtaW4tcmlnaHQnKTtcclxuICAgICAgfVxyXG4gICBcclxuICAgfVxyXG5cclxufSkoKTtcclxuIiwiLyoqXG4gKiBQcm9maWxlIFBpY3R1cmUgQW5pbWF0aW9uXG4gKi9cbigoKSA9PiB7XG5cbiAgIC8vIFByb2ZpbGUgcGljdHVyZVxuICAgY29uc3QgcHJvZmlsZVBpY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLXJvdW5kJyk7XG5cbiAgIC8vIFNldCB0byB0cnVlIG9uY2UgcGljdHVyZSBoYXMgYmVlbiBhbmltYXRlZFxuICAgbGV0IGZsYWcgPSBmYWxzZTtcblxuICAgLy8gQ2hlY2sgb24gcGFnZSBsb2FkXG4gICBpZiAoaW5WaWV3cG9ydChwcm9maWxlUGljdHVyZSkpIHtcbiAgICAgIHNob3dJbWFnZSgpO1xuICAgfVxuXG4gICAvLyBDaGVjayBpZiBhbnkgZWxlbWVudHMgYXJlIGluIHRoZSB2aWV3cG9ydCBvbiBzY3JvbGxcbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZmxhZyAmJiBpblZpZXdwb3J0KHByb2ZpbGVQaWN0dXJlKSkge1xuICAgICAgICAgc2hvd0ltYWdlKCk7XG4gICAgICB9XG4gICB9KTtcblxuICAgLyoqXG4gICAgKiBBbmltYXRlIHBpY3R1cmVcbiAgICAqL1xuICAgZnVuY3Rpb24gc2hvd0ltYWdlKCkge1xuICAgICAgZmxhZyA9IHRydWU7XG4gICAgICBwcm9maWxlUGljdHVyZS5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLWFuaW1hdGlvbicpO1xuICAgfVxuXG59KSgpO1xuIiwiLyoqXG4gKiBBc3NpZ24gY2FyZCBmYWRlLWluIHRpbWVzXG4gKi9cbigoKSA9PiB7XG4gICBcbiAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtaXRlbScpO1xuXG4gICAvLyBTZXQgdG8gdHJ1ZSBvbmNlIGNhcmRzIGhhdmUgYmVlbiBhbmltYXRlZFxuICAgbGV0IGZsYWcgPSBmYWxzZTtcblxuICAgLy8gQW5pbWF0ZSBpbiBvbiByZXNpemVcbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHtcblxuICAgICAgaWYgKCFmbGFnICYmIGNoZWNrTGlzdEluVmlld3BvcnQoY2FyZHMpKSB7XG4gICAgICAgICBzaG93R3JpZCgpO1xuICAgICAgfVxuXG4gICB9KTtcblxuICAgLy8gQ2hlY2sgaWYgY2FyZHMgYXJlIGluIHRoZSB2aWV3cG9ydCBvbiBzY3JvbGxcbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcblxuICAgICAgaWYgKCFmbGFnICYmIGNoZWNrTGlzdEluVmlld3BvcnQoY2FyZHMpKSB7XG4gICAgICAgICBzaG93R3JpZCgpO1xuICAgICAgfVxuXG4gICB9KTtcblxuICAgLyoqXG4gICAgKiBEaXNwbGF5IHRoZSBncmlkXG4gICAgKi9cbiAgIGZ1bmN0aW9uIHNob3dHcmlkKCkge1xuXG4gICAgICBmbGFnID0gdHJ1ZTtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGNhcmRzIGFuZCBhZGQgYW5pbWF0aW9uc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAvLyBHZW5lcmF0ZSByYW5kb20gdGltZSAoaW4gbXMpIGJldHdlZW4gMCBhbmQgMTAwMFxuICAgICAgICAgY29uc3Qgcm5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cbiAgICAgICAgIC8vIERlbGF5LCB0aGVuIGFkZCBjbGFzc1xuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYXJkc1tpXS5jbGFzc0xpc3QuYWRkKCdwb3AtaW4nKSwgcm5kKTtcblxuICAgICAgfVxuXG4gICB9XG5cbn0pKCk7IiwiLyoqXG4gKiBBbmltYXRlIHRpbWVsaW5lIG9uIHNjcm9sbFxuICovXG4oKCkgPT4ge1xuXG4gIC8vIFRpbWVsaW5lIGVsZW1lbnRzXG4gIGNvbnN0IGxlZnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lbGluZS1jb250ZW50LWxlZnQnKTtcbiAgY29uc3QgcmlnaHRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lbGluZS1jb250ZW50LXJpZ2h0Jyk7XG5cbiAgLy8gQ2hlY2sgdGltZWxpbmUgZWxlbWVudHMgb24gcGFnZSBsb2FkXG4gIGNoZWNrVGltZWxpbmVFbGVtcygpO1xuXG4gIC8vIENoZWNrIHZpZXdwb3J0IHdpZHRoIG9uIHBhZ2UgbG9hZFxuICBpZiAoZ2V0Vmlld3BvcnRXaWR0aCgpIDw9IDc2OCkgZGlzcGxheVRpbWVsaW5lRWxlbXMoKTtcblxuICAvLyBIaWRlIGVsZW1lbnRzIG9uIHJlc2l6ZVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8PSA3NjgpIHtcbiAgICAgIGRpc3BsYXlUaW1lbGluZUVsZW1zKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTaG93IHRpbWVsaW5lIGVsZW1lbnRzIHdoZW4gc2Nyb2xsZWRcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xuICAgIGNoZWNrVGltZWxpbmVFbGVtcygpO1xuICB9KTtcblxuICAvLyBVdGlsaXRpZXNcblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRpbWVsaW5lIGVsZW1lbnRzIHRvIHNlZSBpZiB0aGV5IGFyZSBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIGZ1bmN0aW9uIGNoZWNrVGltZWxpbmVFbGVtcygpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVmdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGlmIChpblZpZXdwb3J0KGxlZnRJdGVtc1tpXSkgJiYgIWxlZnRJdGVtc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3dpbmcnKSkge1xuICAgICAgICBsZWZ0SXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnc2hvd2luZycpO1xuICAgICAgICBzaG93RWxlbUxlZnQobGVmdEl0ZW1zW2ldKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmlnaHRJdGVtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICBpZiAoaW5WaWV3cG9ydChyaWdodEl0ZW1zW2ldKSAmJiAhcmlnaHRJdGVtc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3dpbmcnKSkge1xuICAgICAgICByaWdodEl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ3Nob3dpbmcnKTtcbiAgICAgICAgc2hvd0VsZW1SaWdodChyaWdodEl0ZW1zW2ldKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGUgYSB0aW1lbGluZSBpdGVtIGluIGZyb20gdGhlIGxlZnRcbiAgICogQHBhcmFtIHtEb21Ob2RlfSBlbGVtIHRoZSBlbGVtIHRvIHNob3dcbiAgICovXG4gIGZ1bmN0aW9uIHNob3dFbGVtTGVmdChlbGVtKSB7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtaW4tbGVmdCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGUgYSB0aW1lbGluZSBpdGVtIGluIGZyb20gdGhlIHJpZ2h0XG4gICAqIEBwYXJhbSB7RG9tTm9kZX0gZWxlbSB0aGUgZWxlbSB0byBzaG93XG4gICAqL1xuICBmdW5jdGlvbiBzaG93RWxlbVJpZ2h0KGVsZW0pIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1pbi1yaWdodCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGltZWxpbmUgZGVzY3JpcHRpb25zIGZvciBsYXJnZSBzY3JlZW5zXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwbGF5VGltZWxpbmVFbGVtcygpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVmdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZWZ0SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByaWdodEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByaWdodEl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cblxuICB9XG5cbn0pKCk7Il19

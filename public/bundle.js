(() => {
  "use strict";
  var t = {
      365: (t, e, o) => {
        o.d(e, { A: () => s });
        var i = o(601),
          a = o.n(i),
          n = o(314),
          r = o.n(n)()(a());
        r.push([
          t.id,
          "body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n     \n}\n\n#menuOpener {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    z-index: 100; /* Ensure the button is on top */\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    opacity: 1;\n}\n\n#menu {\n    position: absolute;\n    top: 40px;\n    right: 10px;\n    width: 220px; /* Adjust based on your needs */\n    background-color: rgba(255, 255, 255, 0.95);\n    border: 1px solid #ccc;\n    padding: 15px;\n    border-radius: 10px; /* Rounded corners */\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Better shadow */\n    opacity: 0; /* Start hidden */\n    visibility: hidden; /* Ensure it's not interactable when hidden */\n    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out; /* Smooth transition */\n    z-index: 100; /* Ensure it's above the canvas */\n    pointer-events: auto;\n\n    width: 250px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#menu.show {\n    opacity: 1;\n    visibility: visible;\n}\n\n#menu label {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.dropdown-item {\n    cursor: pointer;\n}\n\n.selected-dropdown-item {\n    background-color: #82bcfb\n}\n\ncanvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1; /* Canvas is below the menu and button */\n}\n",
          "",
        ]);
        const s = r;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var o = "",
                  i = void 0 !== e[5];
                return (
                  e[4] && (o += "@supports (".concat(e[4], ") {")),
                  e[2] && (o += "@media ".concat(e[2], " {")),
                  i &&
                    (o += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (o += t(e)),
                  i && (o += "}"),
                  e[2] && (o += "}"),
                  e[4] && (o += "}"),
                  o
                );
              }).join("");
            }),
            (e.i = function (t, o, i, a, n) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var r = {};
              if (i)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (r[l] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var d = [].concat(t[c]);
                (i && r[d[0]]) ||
                  (void 0 !== n &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = n)),
                  o &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = o))
                      : (d[2] = o)),
                  a &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = a))
                      : (d[4] = "".concat(a))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      788: (t, e, o) => {
        o.r(e), o.d(e, { default: () => w });
        var i = o(72),
          a = o.n(i),
          n = o(825),
          r = o.n(n),
          s = o(659),
          l = o.n(s),
          c = o(56),
          d = o.n(c),
          h = o(540),
          p = o.n(h),
          g = o(113),
          u = o.n(g),
          f = o(365),
          m = {};
        (m.styleTagTransform = u()),
          (m.setAttributes = d()),
          (m.insert = l().bind(null, "head")),
          (m.domAPI = r()),
          (m.insertStyleElement = p()),
          a()(f.A, m);
        const w = f.A && f.A.locals ? f.A.locals : void 0;
      },
      72: (t) => {
        var e = [];
        function o(t) {
          for (var o = -1, i = 0; i < e.length; i++)
            if (e[i].identifier === t) {
              o = i;
              break;
            }
          return o;
        }
        function i(t, i) {
          for (var n = {}, r = [], s = 0; s < t.length; s++) {
            var l = t[s],
              c = i.base ? l[0] + i.base : l[0],
              d = n[c] || 0,
              h = "".concat(c, " ").concat(d);
            n[c] = d + 1;
            var p = o(h),
              g = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(g);
            else {
              var u = a(g, i);
              (i.byIndex = s),
                e.splice(s, 0, { identifier: h, updater: u, references: 1 });
            }
            r.push(h);
          }
          return r;
        }
        function a(t, e) {
          var o = e.domAPI(e);
          return (
            o.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                o.update((t = e));
              } else o.remove();
            }
          );
        }
        t.exports = function (t, a) {
          var n = i((t = t || []), (a = a || {}));
          return function (t) {
            t = t || [];
            for (var r = 0; r < n.length; r++) {
              var s = o(n[r]);
              e[s].references--;
            }
            for (var l = i(t, a), c = 0; c < n.length; c++) {
              var d = o(n[c]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            n = l;
          };
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, o) {
          var i = (function (t) {
            if (void 0 === e[t]) {
              var o = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                o instanceof window.HTMLIFrameElement
              )
                try {
                  o = o.contentDocument.head;
                } catch (t) {
                  o = null;
                }
              e[t] = o;
            }
            return e[t];
          })(t);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          i.appendChild(o);
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, o) => {
        t.exports = function (t) {
          var e = o.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (o) {
              !(function (t, e, o) {
                var i = "";
                o.supports && (i += "@supports (".concat(o.supports, ") {")),
                  o.media && (i += "@media ".concat(o.media, " {"));
                var a = void 0 !== o.layer;
                a &&
                  (i += "@layer".concat(
                    o.layer.length > 0 ? " ".concat(o.layer) : "",
                    " {"
                  )),
                  (i += o.css),
                  a && (i += "}"),
                  o.media && (i += "}"),
                  o.supports && (i += "}");
                var n = o.sourceMap;
                n &&
                  "undefined" != typeof btoa &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                      " */"
                    )),
                  e.styleTagTransform(i, t, e.options);
              })(e, t, o);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      429: (t, e) => {
        var o;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.DrawLayer = void 0),
          (function (t) {
            (t[(t.DEV = 0)] = "DEV"),
              (t[(t.LANTERN = 1)] = "LANTERN"),
              (t[(t.FOOD = 2)] = "FOOD"),
              (t[(t.PETAL = 3)] = "PETAL"),
              (t[(t.WAVE = 4)] = "WAVE"),
              (t[(t.WATER_SURFACE = 5)] = "WATER_SURFACE"),
              (t[(t.RIPPLE = 6)] = "RIPPLE"),
              (t[(t.LANTERN_SHADOW = 7)] = "LANTERN_SHADOW"),
              (t[(t.FISH = 8)] = "FISH");
          })(o || (e.DrawLayer = o = {}));
        const i = Object.keys(o)
          .filter((t) => isNaN(Number(t)))
          .map((t) => o[t])
          .reverse();
        e.default = class {
          constructor() {
            (this.scheduleDraw = (t, e) => {
              const o = this.scheduledDraws.get(t) || [];
              o.push(e), this.scheduledDraws.set(t, o);
            }),
              (this.executeScheduledDraws = () => {
                for (const t of i) {
                  const e = this.scheduledDraws.get(t) || [];
                  for (const t of e) t();
                }
                this.scheduledDraws.clear();
              }),
              (this.scheduledDraws = new Map());
          }
        };
      },
      795: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = class {
            constructor(t, e, o) {
              (this.min = t),
                (this.max = e),
                (this.period = o),
                (this.phase = 0),
                (this.amplitude = (e - t) / 2),
                (this.lastUpdateTime = Date.now()),
                (this.neutralValue = t + this.amplitude),
                (this.value = this.neutralValue),
                (this.speedFactor = 1);
            }
            update() {
              const t = Date.now(),
                e = (t - this.lastUpdateTime) / 1e3;
              this.lastUpdateTime = t;
              const o =
                2 * Math.PI * (e / (this.period / this.speedFactor)) +
                this.phase;
              (this.value =
                this.min + this.amplitude + this.amplitude * Math.sin(o)),
                (this.phase = o % (2 * Math.PI));
            }
            setSpeedFactor(t) {
              this.speedFactor = t;
            }
            getValue(t = 0) {
              this.update();
              const e = 2 * Math.PI * (t / this.period) * this.speedFactor;
              return (
                this.min +
                this.amplitude +
                this.amplitude * Math.sin(this.phase + e)
              );
            }
          });
      },
      639: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const a = i(o(846)),
          n = o(413);
        class r {
          constructor(t, e) {
            (this.x = t), (this.y = e);
          }
          applyVector(t, e = !1) {
            const o = this.x + t.dx,
              i = this.y + t.dy;
            return e ? ((this.x = o), (this.y = i), this) : new r(o, i);
          }
          getVectorTo(t) {
            const e = t instanceof r ? t : t.position,
              o = e.x - this.x,
              i = e.y - this.y;
            return new a.default(o, i);
          }
          getDirectionTo(t) {
            return this.getVectorTo(t).normalize();
          }
          getDistanceTo(t) {
            const e = t instanceof r ? t : t.position;
            return this.getVectorTo(e).getMagnitude();
          }
          rotateAround(t, e, o = !1) {
            const i = (e * Math.PI) / 180;
            let a = this.x - t.x,
              n = this.y - t.y;
            const s = Math.cos(i),
              l = Math.sin(i),
              c = -a * l + n * s,
              d = a * s + n * l + t.x,
              h = c + t.y;
            return o ? ((this.x = d), (this.y = h), this) : new r(d, h);
          }
          translateBy(t, e = !1) {
            const o = this.x + t.dx,
              i = this.y + t.dy;
            return e ? ((this.x = o), (this.y = i), this) : new r(o, i);
          }
          round(t = !1) {
            const e = Math.round(this.x),
              o = Math.round(this.y);
            return t ? ((this.x = e), (this.y = o), this) : new r(e, o);
          }
          clone() {
            return new r(this.x, this.y);
          }
          mutate(t) {
            return (this.x = t.x), (this.y = t.y), this;
          }
          getCoordinates() {
            return [this.x, this.y];
          }
          static getRandomPoint(t = 1) {
            const e = ((1 - t) * n.canvas.width) / 2,
              o = ((1 - t) * n.canvas.height) / 2,
              i = e + Math.random() * (n.canvas.width * t),
              a = o + Math.random() * (n.canvas.height * t);
            return new r(i, a);
          }
          static rotateAllPoints(t, e, o, i = !1) {
            const a = {};
            return (
              Object.keys(o).forEach((n) => {
                a[n] = o[n].rotateAround(t, e, i);
              }),
              i ? o : a
            );
          }
          static translateAllPoints(t, e, o = !1) {
            const i = {};
            return (
              Object.keys(e).forEach((a) => {
                i[a] = e[a].translateBy(t, o);
              }),
              o ? e : i
            );
          }
          static findCorners(t) {
            const e = Object.values(t);
            if (0 === e.length) throw new Error("Point map cannot be empty.");
            return e.reduce(
              (t, e) => (
                e.y < t.bottomMost.y && (t.bottomMost = e),
                e.y > t.topMost.y && (t.topMost = e),
                e.x < t.leftMost.x && (t.leftMost = e),
                e.x > t.rightMost.x && (t.rightMost = e),
                t
              ),
              {
                bottomMost: e[0],
                topMost: e[0],
                leftMost: e[0],
                rightMost: e[0],
              }
            );
          }
          static getEvenlySpacedPoints(t, e, o) {
            let i = [];
            const a = (e.x - t.x) / (o - 1),
              n = (e.y - t.y) / (o - 1);
            for (let e = 0; e < o; e++) {
              const o = t.x + a * e,
                s = t.y + n * e;
              i.push(new r(o, s));
            }
            return i;
          }
          static calculateMidpoint(t, e) {
            const o = (t.x + e.x) / 2,
              i = (t.y + e.y) / 2;
            return new r(o, i);
          }
          static calculatePointOnLine(t, e, o) {
            const i = t.x + o * (e.x - t.x),
              a = t.y + o * (e.y - t.y);
            return new r(i, a);
          }
          static calculateSlope(t, e) {
            return (e.y - t.y) / (e.x - t.x);
          }
          static calculatePerpendicularFoot(t, e, o, i) {
            const a = r.calculateMidpoint(t, e),
              n = -1 / r.calculateSlope(t, e),
              s = r.calculateSlope(o, i),
              l = o.y - s * o.x,
              c = a.y - n * a.x,
              d = (c - l) / (s - n);
            return { midpoint: a, perpendicularFoot: new r(d, n * d + c) };
          }
          static calculatePartialQuadraticCurve(t, e, o, i) {
            const a = r.calculatePointOnLine(t, e, i),
              n = r.calculatePointOnLine(e, o, i);
            return {
              partialControlPoint: a,
              partialEndPoint: r.calculatePointOnLine(a, n, i),
            };
          }
        }
        e.default = r;
      },
      846: (t, e, o) => {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = o(878);
        class a {
          constructor(t, e) {
            (this.dx = t), (this.dy = e);
          }
          getMagnitude() {
            return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
          }
          normalize(t = !1) {
            const e = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
            if (0 === e) throw new Error("Cannot normalize a zero vector.");
            const o = this.dx / e,
              i = this.dy / e;
            return t ? ((this.dx = o), (this.dy = i), this) : new a(o, i);
          }
          rotateVector(t, e = !1) {
            const o = (-t * Math.PI) / 180,
              i = Math.cos(o),
              n = Math.sin(o),
              r = this.dx * i - this.dy * n,
              s = this.dx * n + this.dy * i;
            return e ? ((this.dx = r), (this.dy = s), this) : new a(r, s);
          }
          scale(t, e = !1) {
            const o = this.dx * t,
              i = this.dy * t;
            return e ? ((this.dx = o), (this.dy = i), this) : new a(o, i);
          }
          getAngle() {
            let t = Math.atan2(this.dx, this.dy) * (180 / Math.PI);
            return t < 0 && (t += 360), t;
          }
          clone() {
            return new a(this.dx, this.dy);
          }
          static getRandomDirection() {
            return new a(
              (0, i.getRandomItem)([1, -1]) * Math.random(),
              (0, i.getRandomItem)([1, -1]) * Math.random()
            ).normalize();
          }
          static signedAngleBetween(t, e) {
            let o =
              (Math.atan2(t.dy, t.dx) - Math.atan2(e.dy, e.dx)) *
              (180 / Math.PI);
            return o > 180 && (o -= 360), o < -180 && (o += 360), o;
          }
        }
        (a.getDownRightDirection = () => {
          const t = Math.random(),
            e = -Math.random();
          return new a(t, e).normalize();
        }),
          (a.UP = new a(0, 1)),
          (a.RIGHT = new a(1, 0)),
          (a.DOWN = new a(0, -1)),
          (a.LEFT = new a(-1, 0)),
          (a.DOWN_RIGHT = new a(1, -1).normalize()),
          (a.DOWN_LEFT = new a(-1, -1).normalize()),
          (e.default = a);
      },
      156: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.drawManager = e.objectManager = void 0),
          o(788);
        const a = i(o(429)),
          n = i(o(754)),
          r = o(411),
          s = o(105),
          l = o(413);
        (0, l.setupCanvas)(),
          (e.objectManager = new n.default()),
          e.objectManager.initializeObjects(),
          e.objectManager.setupEventListeners(),
          (e.drawManager = new a.default());
        const c = 1e3 / 60;
        let d = performance.now(),
          h = 0,
          p = null;
        const g = () => {
            const t = performance.now(),
              o = t - d;
            for (d = t, h += o; h >= c; )
              (h -= c),
                (0, r.clearCanvasDrawings)(),
                e.objectManager.updateAllObjects(),
                e.objectManager.drawAllObjects(),
                e.drawManager.executeScheduledDraws();
            p = requestAnimationFrame(g);
          },
          u = () => {
            null === p && ((d = performance.now()), (h = 0), g());
          };
        u();
        const f = (0, s.debounce)(() => {
          (0, l.setupCanvas)(), e.objectManager.resetEnvironment();
        }, 250);
        window.addEventListener("resize", f),
          document.addEventListener("visibilitychange", () => {
            document.hidden
              ? null !== p && (cancelAnimationFrame(p), (p = null))
              : (e.objectManager.resetEnvironment(), u());
          });
      },
      754: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const a = o(413),
          n = o(429),
          r = i(o(743)),
          s = i(o(296)),
          l = i(o(255)),
          c = i(o(959)),
          d = i(o(639)),
          h = i(o(262)),
          p = o(156),
          g = o(411),
          u = o(95);
        e.default = class {
          constructor() {
            (this.getDesiredObjectCounts = () => {
              const t = (0, a.getTotalSquareInches)(),
                {
                  fishPerSquareInch: e,
                  petalsPerSquareInch: o,
                  minWaveCount: i,
                  wavesPerSquareInch: n,
                } = (0, u.getConfig)().objectDensities,
                r = (0, u.getConfig)().lantern.include ? 1 : 0;
              return {
                koiFishCount: Math.ceil(t * e),
                petalCount: Math.ceil(t * o),
                waveCount: Math.ceil(t * n) + i,
                lanternCount: r,
              };
            }),
              (this.initializeObjects = () => {
                const {
                  koiFishCount: t,
                  petalCount: e,
                  waveCount: o,
                  lanternCount: i,
                } = this.getDesiredObjectCounts();
                Array.from({ length: t }, () => {
                  const t = new s.default();
                  this.koiFishMap.set(t.id, t);
                });
                const a = Math.floor(0.2 * o),
                  n = o - a;
                Array.from({ length: a }, () => {
                  const t = new h.default();
                  t.prepareReentry(), this.waveMap.set(t.id, t);
                }),
                  Array.from({ length: n }, () => {
                    const t = new h.default();
                    this.waveMap.set(t.id, t);
                  }),
                  Array.from({ length: e }, () => {
                    const t = new c.default();
                    this.petalMap.set(t.id, t);
                  }),
                  Array.from({ length: i }, () => {
                    const t = new l.default();
                    this.lanternMap.set(t.id, t);
                  });
              }),
              (this.initializeLanterns = () => {
                const { lanternCount: t } = this.getDesiredObjectCounts();
                Array.from({ length: t }, () => {
                  const t = new l.default();
                  this.lanternMap.set(t.id, t);
                });
              }),
              (this.resetEnvironment = () => {
                this.koiFishMap.clear(),
                  this.waveMap.clear(),
                  this.petalMap.clear(),
                  this.foodMap.clear(),
                  this.rippleMap.clear(),
                  this.lanternMap.clear(),
                  this.initializeObjects();
              }),
              (this.addObjectToLocationMap = (t) => {
                const e = (0, a.getCellIndex)(t.position),
                  o = this.locationMap.get(e);
                o ? o.push(t) : this.locationMap.set(e, [t]);
              }),
              (this.getNearbyObjects = (t, e, o = 1) => {
                const i = (0, a.getCellIndex)(t.position),
                  n = (0, a.getAdjacentIndices)(i, o);
                let r = [];
                return (
                  n.forEach((o) => {
                    const i = this.locationMap.get(o) || [];
                    r.push(...i.filter((o) => o instanceof e && o.id !== t.id));
                  }),
                  r
                );
              }),
              (this.setupEventListeners = () => {
                a.canvas.addEventListener("click", (t) => {
                  const e = a.canvas.getBoundingClientRect(),
                    o = t.clientX - e.left,
                    i = a.canvas.height - (t.clientY - e.top);
                  this.addFood(new d.default(o, i));
                });
              }),
              (this.addFood = (t) => {
                const e = new r.default(t);
                this.foodMap.set(e.id, e);
              }),
              (this.removeFood = (t) => {
                this.foodMap.delete(t.id);
              }),
              (this.addRipple = (t) => {
                this.rippleMap.set(t.id, t);
              }),
              (this.removeRipple = (t) => {
                this.rippleMap.delete(t.id);
              }),
              (this.updateAllObjects = () => {
                this.locationMap.clear();
                for (const t of [
                  ...this.koiFishMap.values(),
                  ...this.foodMap.values(),
                  ...this.lanternMap.values(),
                ])
                  this.addObjectToLocationMap(t);
                for (const t of [
                  ...this.koiFishMap.values(),
                  ...this.foodMap.values(),
                  ...this.lanternMap.values(),
                  ...this.rippleMap.values(),
                  ...this.waveMap.values(),
                  ...this.petalMap.values(),
                ])
                  t.update();
                for (const t of [
                  ...this.koiFishMap.values(),
                  ...this.lanternMap.values(),
                ])
                  t.generateRipples();
              }),
              (this.drawAllObjects = () => {
                const t = [
                    ...this.koiFishMap.values(),
                    ...this.waveMap.values(),
                    ...this.rippleMap.values(),
                    ...this.petalMap.values(),
                    ...this.foodMap.values(),
                    ...this.lanternMap.values(),
                  ],
                  e = (0, u.getConfig)().environment.surfaceColor;
                p.drawManager.scheduleDraw(n.DrawLayer.WATER_SURFACE, () => {
                  (0, g.fillEntireCanvas)(e);
                });
                for (const e of t) e.draw();
              }),
              (this.koiFishMap = new Map()),
              (this.petalMap = new Map()),
              (this.waveMap = new Map()),
              (this.foodMap = new Map()),
              (this.rippleMap = new Map()),
              (this.lanternMap = new Map()),
              (this.locationMap = new Map());
          }
        };
      },
      743: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const a = o(413),
          n = o(156),
          r = o(878),
          s = o(429),
          l = i(o(846)),
          c = o(411),
          d = o(600);
        class h {
          constructor(t) {
            (this.generateFoodParticles = () => {
              const t = [],
                e = (0, r.getRandomNumber)(8, 10);
              for (let o = 0; o < e; o++) {
                const e = (0, r.getRandomNumber)(0, 360),
                  o = (0, r.getRandomNumber)(7, 12),
                  i =
                    e +
                    (0, r.getRandomNumber)(-1, 1) *
                      (0, r.getRandomNumber)(40, 60),
                  a = 0.5 * o,
                  n = l.default.getRandomDirection();
                t.push({
                  tipAngle: e,
                  tipDistance: o,
                  curveAngle: i,
                  curveDistance: a,
                  direction: n,
                });
              }
              return t;
            }),
              (this.id = (0, r.generateUuid)()),
              (this.position = t),
              (this.direction = l.default.getDownRightDirection()),
              (this.speed = 15),
              (this.foodParticles = this.generateFoodParticles()),
              (this.lastUpdateTime = Date.now()),
              (this.particleDispersion = 1),
              (this.isEaten = !1);
          }
          update() {
            (0, a.isPointOutOfBounds)(this.position) &&
              n.objectManager.removeFood(this);
            const t = (0, d.getElapsedSeconds)(this.lastUpdateTime);
            this.particleDispersion < 5 && (this.particleDispersion += 1.2 * t),
              this.position.applyVector(
                this.direction.scale(this.speed * t),
                !0
              ),
              (this.lastUpdateTime = Date.now());
          }
          onEaten() {
            this.isEaten = !0;
            const t = setInterval(() => {
              this.foodParticles.length > 0
                ? this.foodParticles.pop()
                : (clearInterval(t), n.objectManager.removeFood(this));
            }, 30);
          }
          draw() {
            this.foodParticles.forEach((t) => {
              const {
                  tipDistance: e,
                  tipAngle: o,
                  direction: i,
                  curveAngle: a,
                  curveDistance: r,
                } = t,
                d = this.position.applyVector(i.scale(this.particleDispersion)),
                h = d.applyVector(l.default.UP.rotateVector(o).scale(e)),
                p = d.applyVector(l.default.UP.rotateVector(a).scale(r));
              n.drawManager.scheduleDraw(s.DrawLayer.FOOD, () => {
                (0, c.drawFoodParticle)({ base: d, tip: h, curveAnchor: p });
              });
            });
          }
        }
        (h.particleLength = 5), (e.default = h);
      },
      296: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const a = i(o(639)),
          n = o(118),
          r = o(411),
          s = o(156),
          l = o(878),
          c = o(413),
          d = o(429),
          h = i(o(743)),
          p = i(o(795)),
          g = i(o(773)),
          u = i(o(846)),
          f = o(255),
          m = o(95),
          w = o(600),
          v = o(392);
        class y {
          constructor(t) {
            (this.handleOutOfBounds = () => {
              (this.position = (0, c.getRandomEdgePoint)(
                0.8 * Math.abs(y.canvasExitDistance)
              )),
                (this.targetPoint = a.default.getRandomPoint(0.8)),
                (this.direction = this.position.getDirectionTo(
                  this.targetPoint
                ));
            }),
              (this.getScaledFishLengths = () => {
                const t = (0, m.getConfig)().fish.proportions;
                return {
                  headCurveAnchorLength: t.headCurveAnchorLength * this.size,
                  trunkWidth: t.trunkWidth * this.size,
                  trunkLength: t.trunkLength * this.size,
                  tailLength: t.tailLength * this.size,
                  finLength: t.finLength * this.size,
                  tailFinLength: t.tailFinLength * this.size,
                };
              }),
              (this.getRandomDecorations = () => {
                const t = [],
                  e = (0, m.getConfig)().fish.decorationColors,
                  o = (0, l.getRandomNumber)(1, 2),
                  i = this.scaledFishLengths.trunkWidth / 2,
                  a =
                    (0, l.getRandomNumber)(0.7 * i, i) *
                    Math.pow(this.size, 0.5);
                for (let r = 0; r < o; r++) {
                  const o = (0, l.getRandomItem)([1, -1]) * i,
                    r = new u.default(o, (0, l.getRandomNumber)(-15, 5)),
                    s = u.default.signedAngleBetween(new u.default(0, 1), r);
                  t.push({
                    angle: s,
                    distance: r.getMagnitude(),
                    color: (0, n.parseConfigColor)((0, l.getRandomItem)(e)),
                    radius: a,
                  });
                }
                return t;
              }),
              (this.getRandomColors = () => {
                const t = (0, m.getConfig)().fish,
                  e = t.bodyColors.map(n.parseConfigColor),
                  o = t.finColors.map(n.parseConfigColor),
                  i = t.decorationColors.map(n.parseConfigColor),
                  a = (0, l.getRandomItem)(e),
                  r = o.filter((t) => t !== a),
                  s = (0, n.applyOpacity)((0, l.getRandomItem)([...r]), 0.7),
                  c = (0, n.applyOpacity)((0, l.getRandomItem)(i), 0.7);
                return { mainBodyColor: a, finColor: s, tailFinColor: c };
              }),
              (this.setNewRandomTargetPoint = () => {
                let t = this.position,
                  e = 0;
                for (; e < 300; )
                  (t = a.default.getRandomPoint(0.9)),
                    (e = this.position.getDistanceTo(t));
                this.targetPoint = t;
              }),
              (this.smoothenDirectionChange = () => {
                const t = (0, w.getElapsedSeconds)(this.lastUpdateTime),
                  e = y.maxRotationAnglePerSecond * t,
                  o = this.position.getVectorTo(this.targetPoint),
                  i = u.default.signedAngleBetween(this.direction, o),
                  a =
                    Math.min(e, Math.abs(i)) *
                    Math.sign(i) *
                    this.turnMultiplier;
                Math.abs(i) > 2 && this.direction.rotateVector(a, !0);
              }),
              (this.smoothenSpeedChange = () => {
                const t = (0, w.getElapsedSeconds)(this.lastUpdateTime),
                  e = y.maxSpeedChangePerSecond * t,
                  o = this.speed - this.previousSpeed;
                Math.abs(o) > e &&
                  (this.speed = this.previousSpeed + Math.sign(o) * e);
              }),
              (this.standardBehavior = () => {
                const t = this.position.getVectorTo(this.targetPoint);
                t.getMagnitude() < 50 && this.setNewRandomTargetPoint();
                const e = t.normalize(),
                  o = t.getMagnitude(),
                  i = u.default.signedAngleBetween(this.direction, e),
                  a = o / (0, c.getCanvasDiagonalLength)();
                (this.turnMultiplier *= Math.max(1 - a, 0.5)),
                  a > 0.1 && Math.abs(i) < 45 && (this.turnMultiplier *= 0.3);
              }),
              (this.getDrawPoints = (t) => {
                const {
                    headCurveAnchorLength: e,
                    trunkWidth: o,
                    trunkLength: i,
                    tailLength: n,
                    finLength: s,
                    tailFinLength: l,
                  } = this.scaledFishLengths,
                  c = this.position.applyVector(u.default.UP.scale(e)),
                  d = this.position.applyVector(u.default.RIGHT.scale(o / 2)),
                  h = this.position.applyVector(u.default.LEFT.scale(o / 2)),
                  p = this.position.applyVector(u.default.DOWN.scale(i)),
                  g = p.applyVector(u.default.RIGHT.scale(o / 2)),
                  f = p.applyVector(u.default.LEFT.scale(o / 2)),
                  m = this.finAngleOscillator.getValue(),
                  w = (0, v.scaleToRange)(140, 160, m),
                  y = (0, v.scaleToRange)(0, -10, m),
                  C = h.applyVector(
                    u.default.UP.rotateVector(20 - w).scale(s / 2)
                  ),
                  M = h.applyVector(u.default.UP.rotateVector(-w).scale(s)),
                  b = h.applyVector(u.default.DOWN.scale(0.75 * s)),
                  x = d.applyVector(
                    u.default.UP.rotateVector(w - 20).scale(s / 2)
                  ),
                  P = d.applyVector(u.default.UP.rotateVector(w).scale(s)),
                  T = d.applyVector(u.default.DOWN.scale(0.75 * s)),
                  R = this.tailAngleOscillator.getValue(),
                  O = this.tailAngleOscillator.getValue(-0.3),
                  S = 3 * this.tailAngleOscillator.getValue(-0.7),
                  F = p.applyVector(
                    u.default.DOWN.rotateVector(R).scale(0.33 * n)
                  ),
                  D = F.applyVector(
                    u.default.DOWN.rotateVector(O).scale(0.33 * n)
                  ),
                  L = F.applyVector(
                    u.default.LEFT.rotateVector(R).scale(0.4 * o)
                  ),
                  E = F.applyVector(
                    u.default.RIGHT.rotateVector(R).scale(0.4 * o)
                  ),
                  A = D.applyVector(
                    u.default.LEFT.rotateVector(O).scale(0.05 * o)
                  ),
                  V = D.applyVector(
                    u.default.RIGHT.rotateVector(O).scale(0.05 * o)
                  ),
                  _ = D.applyVector(
                    u.default.DOWN.rotateVector(S).scale(0.33 * n)
                  ),
                  { partialControlPoint: I, partialEndPoint: k } =
                    a.default.calculatePartialQuadraticCurve(p, D, _, 0.5),
                  B = p.applyVector(
                    u.default.DOWN.rotateVector(4 * O).scale(0.2 * n)
                  ),
                  N = a.default.calculateMidpoint(p, F),
                  W = 0.7 * s,
                  j = N.applyVector(
                    u.default.DOWN_LEFT.rotateVector(R + y).scale(W)
                  ),
                  { point1: G, point2: U } = (0, r.getPerpindicularPoints)(
                    N,
                    j,
                    s / 5
                  ),
                  z = N.applyVector(
                    u.default.DOWN_RIGHT.rotateVector(R - y).scale(W)
                  ),
                  { point1: q, point2: H } = (0, r.getPerpindicularPoints)(
                    N,
                    z,
                    s / 5
                  ),
                  K = D.getDirectionTo(_),
                  $ = _.applyVector(K.scale(l)),
                  J = $.applyVector(
                    u.default.LEFT.rotateVector(S).scale(0.8 * l)
                  ),
                  Q = $.applyVector(
                    u.default.RIGHT.rotateVector(S).scale(0.8 * l)
                  ),
                  X = {
                    center: this.position,
                    headCurveAnchor: c,
                    trunkRightTop: d,
                    trunkLeftTop: h,
                    trunkRightBottom: g,
                    trunkLeftBottom: f,
                    trunkTailJoint: p,
                    leftPectoralFinFrontEdge: C,
                    leftPectoralFinTip: M,
                    leftPectoralFinBackEdge: b,
                    rightPectoralFinFrontEdge: x,
                    rightPectoralFinTip: P,
                    rightPectoralFinBackEdge: T,
                    ventralFinBase: N,
                    leftVentralFinFrontEdge: U,
                    leftVentralFinTip: j,
                    leftVentralFinBackEdge: G,
                    rightVentralFinTip: z,
                    rightVentralFinFrontEdge: H,
                    rightVentralFinBackEdge: q,
                    dorsalFinEnd: k,
                    dorsalFinAnchor: I,
                    dorsalFinTip: B,
                    upperTailAnchor: F,
                    upperTailLeftAnchor: L,
                    upperTailRightAnchor: E,
                    lowerTailLeftAnchor: A,
                    lowerTailRightAnchor: V,
                    lowerTailAnchor: D,
                    tailTip: _,
                    extrapolatedTailAnchor: $,
                    rightTailFinTip: Q,
                    leftTailFinTip: J,
                  };
                return a.default.rotateAllPoints(
                  this.position,
                  t.getAngle(),
                  X
                );
              }),
              (this.getDecorationDrawInfos = (t) =>
                this.decorations.map((e) => {
                  const o = t.rotateVector(e.angle).scale(e.distance),
                    i = this.position.applyVector(o);
                  return { radius: e.radius, color: e.color, position: i };
                })),
              (this.id = (0, l.generateUuid)()),
              (this.position =
                (null == t ? void 0 : t.position) ||
                a.default.getRandomPoint(0.9)),
              (this.direction =
                (null == t ? void 0 : t.direction) ||
                u.default.getRandomDirection()),
              (this.size =
                (null == t ? void 0 : t.size) ||
                (0, l.getRandomNumber)(0.5, 1)),
              (this.scaledFishLengths = this.getScaledFishLengths()),
              (this.finAngleOscillator = new p.default(
                0,
                1,
                (0, v.scaleToRange)(2, 3, this.size)
              )),
              (this.tailAngleOscillator = new p.default(
                -7,
                7,
                (0, l.getRandomNumber)(3, 4)
              )),
              (this.swayOscillator = new p.default(
                -3,
                3,
                (0, l.getRandomNumber)(30, 40)
              )),
              (this.baseSpeed = (0, v.scaleToRange)(
                15,
                30,
                1 - Math.min(this.size, 1)
              )),
              (this.speed = this.baseSpeed),
              (this.previousSpeed = this.baseSpeed),
              (this.turnMultiplier = 1),
              (this.lastUpdateTime = Date.now()),
              (this.lastRippleTime = Date.now()),
              (this.targetPoint =
                (null == t ? void 0 : t.targetPoint) ||
                a.default.getRandomPoint(0.9)),
              (this.fishColors = this.getRandomColors()),
              (this.decorations = this.getRandomDecorations()),
              (this.leftFollowPoint = this.position.clone()),
              (this.rightFollowPoint = this.position.clone()),
              (this.leftFollowAngle = (0, l.getRandomNumber)(200, 225)),
              (this.rightFollowAngle = (0, l.getRandomNumber)(125, 170)),
              (this.followTime = 0);
          }
          updateFollowPoints() {
            const t = (0, m.getConfig)().fish.followDistance,
              e = this.position
                .applyVector(
                  u.default.UP.rotateVector(this.leftFollowAngle).scale(t)
                )
                .rotateAround(this.position, this.direction.getAngle()),
              o = this.position
                .applyVector(
                  u.default.UP.rotateVector(this.rightFollowAngle).scale(t)
                )
                .rotateAround(this.position, this.direction.getAngle());
            this.leftFollowPoint.mutate(e), this.rightFollowPoint.mutate(o);
          }
          checkAndSetFoodBehavior() {
            if (this.desiredFood) {
              const t = s.objectManager.foodMap.has(this.desiredFood.id);
              (this.position.getDistanceTo(this.desiredFood) < 20 || !t) &&
                (this.desiredFood.onEaten(), (this.desiredFood = void 0));
            }
            let t,
              e = 1 / 0;
            if (
              (s.objectManager
                .getNearbyObjects(this, h.default, 5)
                .forEach((o) => {
                  if (o.isEaten) return;
                  const i = this.position.getDistanceTo(o);
                  i < e && ((t = o), (e = i));
                }),
              t)
            ) {
              this.leaderKoiFish &&
                y.unsetLeaderFollower(this.leaderKoiFish, this),
                (this.desiredFood = t),
                (this.targetPoint = t.position);
              const e = this.position.getVectorTo(this.targetPoint),
                o = e.normalize(),
                i = e.getMagnitude(),
                a = u.default.signedAngleBetween(this.direction, o);
              i < 50 && Math.abs(a) > 30
                ? ((this.speed = 0.5 * this.baseSpeed),
                  (this.turnMultiplier = 4))
                : Math.abs(a) < 30
                ? ((this.speed = 5 * this.baseSpeed), (this.turnMultiplier = 1))
                : ((this.speed = 4 * this.baseSpeed),
                  (this.turnMultiplier = 2)),
                this.tailAngleOscillator.setSpeedFactor(2),
                this.finAngleOscillator.setSpeedFactor(2);
            } else
              this.tailAngleOscillator.setSpeedFactor(1),
                this.finAngleOscillator.setSpeedFactor(1);
          }
          checkAndSetFollowBehavior() {
            if (this.desiredFood && this.leaderKoiFish)
              y.unsetLeaderFollower(this.leaderKoiFish, this);
            else if (this.leaderKoiFish) {
              if ((0, w.getElapsedSeconds)(this.followTime) > 180)
                return (
                  y.unsetLeaderFollower(this.leaderKoiFish, this),
                  void this.setNewRandomTargetPoint()
                );
              if (this.position.getDistanceTo(this.targetPoint) > 100)
                return (
                  (this.speed = this.baseSpeed),
                  y.unsetLeaderFollower(this.leaderKoiFish, this),
                  void this.setNewRandomTargetPoint()
                );
              const t = this.leaderKoiFish.speed,
                e = this.leaderKoiFish.direction,
                o = this.position.getVectorTo(this.targetPoint),
                i = u.default.signedAngleBetween(this.direction, o),
                a = o.getMagnitude();
              Math.abs(i) < 30 && a > 20
                ? (this.speed = 1.2 * t)
                : Math.abs(i) > 90 && a < 50
                ? (this.speed = 0.4 * t)
                : Math.abs(u.default.signedAngleBetween(this.direction, e)) <
                    30 &&
                  a < 20 &&
                  ((this.speed = t), (this.turnMultiplier = 0.5));
            } else {
              const t = s.objectManager
                .getNearbyObjects(this, y)
                .filter((t) => t.size > 1.1 * this.size)
                .filter((t) => t.getAvailableFollowPositions().length)
                .filter((t) => {
                  const e = t.direction,
                    o = u.default.signedAngleBetween(this.direction, e);
                  return Math.abs(o) < 60;
                })
                .filter((t) => {
                  const e = u.default.signedAngleBetween(
                    this.direction,
                    this.position.getVectorTo(t)
                  );
                  return Math.abs(e) < 60;
                });
              if (t.length) {
                const e = (0, l.getRandomItem)(t),
                  o = e.getAvailableFollowPositions(),
                  i = (0, l.getRandomItem)(o);
                y.setLeaderFollower(e, this, i), (this.followTime = Date.now());
              }
            }
          }
          getAvailableFollowPositions() {
            const t = [];
            return (
              this.leftFollower || t.push(y.LEFT_SIDE),
              this.rightFollower || t.push(y.RIGHT_SIDE),
              t
            );
          }
          update() {
            (this.previousSpeed = this.speed),
              (this.speed = this.baseSpeed),
              (this.turnMultiplier = 1),
              (0, c.getDistanceToCanvasBorder)(this.position) <
              y.canvasExitDistance
                ? this.handleOutOfBounds()
                : (this.checkAndSetFoodBehavior(),
                  this.desiredFood || this.checkAndSetFollowBehavior(),
                  this.desiredFood ||
                    this.leaderKoiFish ||
                    this.standardBehavior(),
                  this.targetPoint || this.setNewRandomTargetPoint(),
                  this.smoothenDirectionChange(),
                  this.smoothenSpeedChange(),
                  this.position.applyVector(
                    this.direction.scale(
                      this.speed * (0, w.getElapsedSeconds)(this.lastUpdateTime)
                    ),
                    !0
                  ),
                  this.updateFollowPoints(),
                  (this.lastUpdateTime = Date.now()));
          }
          draw() {
            const t = (0, m.getConfig)().fish;
            if (t.drawSimplified)
              (0, r.drawPoint)(this.position, {
                color: this.fishColors.mainBodyColor,
                radius: 2 * this.size,
              }),
                (0, r.drawVector)(this.position, this.direction.scale(30));
            else {
              const t = this.direction.rotateVector(
                  this.swayOscillator.getValue()
                ),
                e = this.getDrawPoints(t);
              if (Array.from(s.objectManager.lanternMap.values()).length)
                for (const t of s.objectManager.lanternMap.values()) {
                  const { shadowVector: o, shadowOpacity: i } =
                      t.getShadowDrawInfo(this),
                    n = a.default.translateAllPoints(o, e);
                  s.drawManager.scheduleDraw(d.DrawLayer.FISH, () =>
                    (0, r.drawFishShadow)(n, i)
                  );
                }
              else {
                const t = a.default.translateAllPoints(
                  f.defaultShadowDrawInfo.shadowVector,
                  e
                );
                s.drawManager.scheduleDraw(d.DrawLayer.FISH, () =>
                  (0, r.drawFishShadow)(
                    t,
                    f.defaultShadowDrawInfo.shadowOpacity
                  )
                );
              }
              s.drawManager.scheduleDraw(d.DrawLayer.FISH, () => {
                (0, r.drawFish)(
                  e,
                  this.fishColors,
                  this.getDecorationDrawInfos(t)
                );
              });
            }
            t.drawLeaderFollowerLinks &&
              this.leaderKoiFish &&
              s.drawManager.scheduleDraw(d.DrawLayer.DEV, () => {
                (0, r.drawVector)(
                  this.position,
                  this.position
                    .getVectorTo(this.leaderKoiFish.position)
                    .scale(0.9),
                  { color: n.VIOLET }
                );
              });
          }
          static setLeaderFollower(t, e, o) {
            (e.leaderKoiFish = t),
              o === y.LEFT_SIDE
                ? ((t.leftFollower = e), (e.targetPoint = t.leftFollowPoint))
                : ((t.rightFollower = e), (e.targetPoint = t.rightFollowPoint));
          }
          static unsetLeaderFollower(t, e) {
            (null == t ? void 0 : t.leftFollower) === e
              ? (t.leftFollower = void 0)
              : (t.rightFollower = void 0),
              (e.leaderKoiFish = void 0);
          }
          generateRipples() {
            if (
              (0, w.getElapsedSeconds)(this.lastRippleTime) >
              g.default.rippleGenerationGap
            ) {
              this.lastRippleTime = Date.now();
              const t = new g.default({
                position: this.position
                  .applyVector(
                    this.direction.scale(
                      0.7 * this.scaledFishLengths.headCurveAnchorLength
                    )
                  )
                  .clone(),
                direction: this.direction.clone(),
                speed: 0.7 * this.baseSpeed,
                length: this.size * g.default.lengthRatio,
              });
              s.objectManager.addRipple(t);
            }
          }
        }
        (y.maxRotationAnglePerSecond = 18),
          (y.maxSpeedChangePerSecond = 1.5),
          (y.canvasExitDistance = -20),
          (y.LEFT_SIDE = "left"),
          (y.RIGHT_SIDE = "right"),
          (e.default = y);
      },
      255: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.defaultShadowDrawInfo = void 0);
        const a = o(118),
          n = i(o(639)),
          r = o(411),
          s = o(413),
          l = o(156),
          c = o(878),
          d = o(429),
          h = i(o(773)),
          p = i(o(846)),
          g = o(878),
          u = o(95),
          f = o(600),
          m = o(392);
        e.defaultShadowDrawInfo = {
          shadowVector: new p.default(17, -17),
          shadowOpacity: 0.2,
        };
        class w {
          constructor() {
            (this.id = (0, g.generateUuid)()),
              (this.position = this.getInitialPosition()),
              (this.rotationAngle = (0, c.getRandomNumber)(0, 360)),
              (this.rotationSpeed =
                (0, c.getRandomItem)([1, -1]) * (0, c.getRandomNumber)(4, 6)),
              (this.direction = p.default.getRandomDirection()),
              (this.lightColor = w.darkestLightColor),
              (this.destinationLightColor = w.brightestLightColor),
              (this.lastLightColorChangeTime = Date.now()),
              (this.lastUpdateTime = Date.now()),
              (this.lastRippleTime = Date.now());
          }
          getInitialPosition() {
            let t = n.default.getRandomPoint(0.7);
            const e = Array.from(l.objectManager.lanternMap.values()).filter(
              (t) => t.id !== this.id
            );
            if (e.length) {
              let o = 0;
              for (
                ;
                o < 10 &&
                ((t = n.default.getRandomPoint(0.7)),
                !e.every((e) => t.getDistanceTo(e) > w.minInitialProximity));

              )
                o += 1;
            }
            return t;
          }
          updateLightColor() {
            (this.lightColor = (0, a.incrementRGB)(
              this.lightColor,
              this.destinationLightColor,
              Math.round((0, c.getRandomNumber)(0, 2))
            )),
              this.lightColor === this.destinationLightColor &&
                (this.destinationLightColor =
                  this.destinationLightColor === w.darkestLightColor
                    ? w.brightestLightColor
                    : w.darkestLightColor),
              (this.lastLightColorChangeTime = Date.now());
          }
          update() {
            const t = (0, f.getElapsedSeconds)(this.lastUpdateTime);
            (this.rotationAngle =
              (this.rotationAngle + t * this.rotationSpeed) % 360),
              this.rotationAngle % 90 == 0 &&
                (this.rotationAngle += 0.1 * this.rotationSpeed),
              (0, f.getElapsedSeconds)(this.lastLightColorChangeTime) >
                w.lightColorChangeGap && this.updateLightColor(),
              (0, s.getDistanceToCanvasBorder)(this.position) < 50 &&
                (this.direction = this.position.getDirectionTo(
                  n.default.getRandomPoint(0.7)
                ));
            const e = l.objectManager.getNearbyObjects(this, w, 7);
            if (e.length) {
              let t = e[0],
                o = this.position.getDistanceTo(t.position);
              for (const i of e)
                i !== t &&
                  this.position.getDistanceTo(i.position) < o &&
                  (t = i);
              const i = this.position.getDirectionTo(t);
              this.direction = i.rotateVector(180);
            }
            this.position.applyVector(
              this.direction.scale(w.lanternSpeed * t),
              !0
            ),
              (this.lastUpdateTime = Date.now());
          }
          draw() {
            const t = (0, u.getConfig)().lantern,
              e = (0, r.getSquarePoints)(
                this.position,
                this.rotationAngle,
                w.sideLength
              );
            l.drawManager.scheduleDraw(d.DrawLayer.LANTERN_SHADOW, () => {
              (0, r.drawLanternShadow)(
                n.default.translateAllPoints(w.lanternShadowVector, e),
                0.8 * t.maxShadowOpacity
              );
            });
            const o = t.glowColor,
              i = (0, a.applyOpacity)(o, 0);
            l.drawManager.scheduleDraw(d.DrawLayer.WAVE, () => {
              (0, r.brightenCircle)(this.position, 0, 300, o, i);
            });
            const s = (0, r.getSquarePoints)(
                this.position,
                this.rotationAngle,
                33
              ),
              c = n.default.findCorners(s),
              h = n.default.translateAllPoints(p.default.UP.scale(27), c),
              g = n.default.getEvenlySpacedPoints(e.corner1, e.corner2, 5),
              f = n.default.getEvenlySpacedPoints(e.corner4, e.corner3, 5),
              m = {
                center: this.position,
                woodenBaseSquare: e,
                woodenBaseColor: a.WOOD_COLOR,
                woodJoinColor: a.WOOD_EDGE_COLOR,
                leftWoodJoinPoints: g,
                rightWoodJoinPoints: f,
                lightColor: this.lightColor,
                lampBaseCorners: c,
                lampTopCorners: h,
                lampWallColor: a.LANTERN_WALL_COLOR,
                lampBackWallOpacity: 0.85,
                lampFrontWallOpacity: 0.9,
              };
            l.drawManager.scheduleDraw(d.DrawLayer.LANTERN, () => {
              (0, r.drawLantern)(m);
            });
          }
          getShadowDrawInfo(t) {
            const e = (0, u.getConfig)().lantern,
              o = (0, s.getCanvasDiagonalLength)(),
              i = this.position.getVectorTo(t.position),
              a = i.getMagnitude(),
              n = (0, m.scaleToRange)(10, 50, a / o);
            let r = e.minShadowOpacity;
            return (
              a < 300 &&
                (r = (0, m.scaleToRange)(
                  e.maxShadowOpacity,
                  e.minShadowOpacity,
                  a / 300
                )),
              { shadowVector: i.normalize().scale(n), shadowOpacity: r }
            );
          }
          generateRipples() {
            if (
              (0, f.getElapsedSeconds)(this.lastRippleTime) >
              w.rippleGenerationGap
            ) {
              this.lastRippleTime = Date.now();
              const t = new h.default({
                position: this.position.applyVector(
                  this.direction.scale(w.sideLength)
                ),
                direction: this.direction.clone(),
                speed: 0.7 * w.lanternSpeed,
                length: 50,
                initialRippleDispersion: 50,
              });
              l.objectManager.addRipple(t);
            }
          }
        }
        (w.sideLength = 55),
          (w.lightColorChangeGap = 1 / 60),
          (w.lanternHeight = 15),
          (w.wallOpacity = 0.6),
          (w.lanternSpeed = 8),
          (w.lanternShadowVector = new p.default(10, -40)),
          (w.darkestLightColor = a.DARK_FIRE_COLOR),
          (w.brightestLightColor = a.BRIGHT_FIRE_COLOR),
          (w.rippleGenerationGap = 4),
          (w.minInitialProximity = 300),
          (e.default = w);
      },
      959: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const a = i(o(639)),
          n = o(413),
          r = o(411),
          s = o(878),
          l = o(118),
          c = o(429),
          d = i(o(795)),
          h = i(o(846)),
          p = o(413),
          g = o(156),
          u = o(95),
          f = o(600);
        e.default = class {
          constructor(t) {
            (this.id = (0, s.generateUuid)()), this.initializeState(!0);
            const e = (0, u.getConfig)().petal,
              o = Math.random() * p.canvas.height * 0.5;
            this.position.applyVector(this.direction.scale(o), !0);
            const i = e.speeds;
            (this.speed = (0, s.getRandomNumber)(i[0], i[1])),
              (this.lastUpdateTime = Date.now()),
              (this.drawAngle = (0, s.getRandomNumber)(0, 90)),
              (this.petalLength = (0, s.getRandomNumber)(
                e.sizes[0],
                e.sizes[1]
              )),
              (this.petalCurveAnchorRatio = (0, s.getRandomNumber)(0.6, 0.8)),
              (this.petalCurveDistanceRatio = (0, s.getRandomNumber)(0.6, 0.7));
            const a = (0, l.parseConfigColor)((0, s.getRandomItem)(e.colors)),
              n = (0, l.randomizeRGB)(a, e.colorVariation),
              r = (0, l.incrementRGB)(n, "rgb(255,255,255)", 50);
            this.petalColors = { baseColor: n, tipColor: r };
            const c = Math.random() * e.maxOscillation,
              h = (0, s.getRandomNumber)(
                e.oscillationPeriods[0],
                e.oscillationPeriods[1]
              );
            (this.positionalOffsetOscillator = new d.default(-c, c, h)),
              (this.petalRotationalPeriod = (0, s.getRandomNumber)(10, 15)),
              (this.petalRotationalDirection = (0, s.getRandomItem)([1, -1]));
          }
          update() {
            (0, n.isPointOutOfBounds)(this.position, 60) &&
              this.initializeState();
            const t = (0, f.getElapsedSeconds)(this.lastUpdateTime);
            this.position.applyVector(this.direction.scale(this.speed * t), !0);
            const e =
              (this.petalRotationalDirection *
                ((t / this.petalRotationalPeriod) * 360)) %
              360;
            (this.drawAngle += e), (this.lastUpdateTime = Date.now());
          }
          initializeState(t = !1) {
            const { entryPoint: e, exitPoint: o } = (0,
              n.getRiverEntryExitPoints)(30),
              i = e.getVectorTo(o);
            (this.position = e),
              (this.direction = i.normalize()),
              t &&
                ((this.position = a.default.getRandomPoint()),
                (this.direction = h.default.getDownRightDirection()));
          }
          draw() {
            const t = this.position.applyVector(
                h.default.UP.scale(this.petalLength)
              ),
              e = this.position.applyVector(
                h.default.UP.scale(
                  this.petalCurveAnchorRatio * this.petalLength
                )
              ),
              o = this.petalCurveDistanceRatio * this.petalLength,
              i = e.applyVector(h.default.LEFT.scale(o)),
              n = e.applyVector(h.default.RIGHT.scale(o)),
              s = {
                base: this.position,
                leftCurveAnchor: i,
                curveAnchorBase: e,
                tip: t,
                rightCurveAnchor: n,
              },
              l = a.default.rotateAllPoints(this.position, this.drawAngle, s),
              d = this.direction
                .rotateVector(90)
                .scale(this.positionalOffsetOscillator.getValue()),
              p = a.default.translateAllPoints(d, l);
            g.drawManager.scheduleDraw(c.DrawLayer.PETAL, () => {
              (0, r.drawPetal)(
                p,
                this.petalColors.baseColor,
                this.petalColors.tipColor
              );
            });
          }
        };
      },
      773: (t, e, o) => {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = o(118),
          a = o(156),
          n = o(411),
          r = o(878),
          s = o(429),
          l = o(95),
          c = o(600),
          d = o(392);
        class h {
          constructor(t) {
            (this.id = (0, r.generateUuid)()),
              (this.position = t.position),
              (this.direction = t.direction),
              (this.length = t.length),
              (this.initialRippleDispersion = t.initialRippleDispersion || 0),
              (this.generationTime = Date.now()),
              (this.speed = t.speed),
              (this.lastUpdateTime = Date.now()),
              (this.color = (0, i.parseConfigColor)(
                (0, l.getConfig)().ripple.color
              ));
          }
          update() {
            (0, c.getElapsedSeconds)(this.generationTime) > h.lifeTime
              ? a.objectManager.removeRipple(this)
              : (this.position.applyVector(
                  this.direction.scale(
                    this.speed * (0, c.getElapsedSeconds)(this.lastUpdateTime)
                  ),
                  !0
                ),
                (this.lastUpdateTime = Date.now()));
          }
          getOpacity() {
            const t = (0, l.getConfig)().ripple,
              e = (0, c.getElapsedSeconds)(this.generationTime);
            if (e < h.peakOpacityTime)
              return (0, d.scaleToRange)(
                0,
                t.maxOpacity,
                e / h.peakOpacityTime
              );
            {
              const o = e - h.peakOpacityTime,
                i = h.lifeTime - h.peakOpacityTime;
              return (0, d.scaleToRange)(t.maxOpacity, 0, o / i);
            }
          }
          draw() {
            const t =
                (0, c.getElapsedSeconds)(this.generationTime) / h.lifeTime,
              e = this.getOpacity(),
              o = (0, i.applyOpacity)(this.color, e),
              r = (0, d.scaleToRange)(120, 170, t),
              l =
                this.initialRippleDispersion + (0, d.scaleToRange)(-20, 40, t),
              p = (0, d.scaleToRange)(20, 5, t),
              g = this.direction.rotateVector(-r),
              u = this.direction.rotateVector(r),
              f = this.position.applyVector(g.scale(l)),
              m = f.applyVector(g.scale(this.length)),
              { arcPoint: w, midPoint: v } = (0, n.getArcPoints)(
                f,
                m,
                g.rotateVector(90).scale(p)
              ),
              y = {
                rippleStart: f,
                rippleEnd: m,
                rippleCurve: w,
                midPoint: v,
                color: o,
                lineWidth: h.lineWidth,
              };
            a.drawManager.scheduleDraw(s.DrawLayer.RIPPLE, () => {
              (0, n.drawRipple)(y);
            });
            const C = this.position.applyVector(u.scale(l)),
              M = C.applyVector(u.scale(this.length)),
              { arcPoint: b, midPoint: x } = (0, n.getArcPoints)(
                C,
                M,
                u.rotateVector(-90).scale(p)
              ),
              P = {
                rippleStart: C,
                rippleEnd: M,
                rippleCurve: b,
                color: o,
                lineWidth: h.lineWidth,
                midPoint: x,
              };
            a.drawManager.scheduleDraw(s.DrawLayer.RIPPLE, () => {
              (0, n.drawRipple)(P);
            });
          }
        }
        (h.rippleGenerationGap = 1.8),
          (h.rippleDispersionSpeed = 10),
          (h.lengthRatio = 40),
          (h.lifeTime = 5),
          (h.peakOpacityTime = 1.5),
          (h.minOpacity = 0),
          (h.lineWidth = 10),
          (e.default = h);
      },
      262: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const a = o(413),
          n = o(411),
          r = o(878),
          s = o(118),
          l = o(429),
          c = i(o(639)),
          d = i(o(846)),
          h = o(156),
          p = o(95),
          g = o(600);
        (0, p.getConfig)(),
          (e.default = class {
            constructor(t) {
              (this.id = (0, r.generateUuid)()),
                (this.position =
                  (null == t ? void 0 : t.position) ||
                  c.default.getRandomPoint());
              const e = (0, p.getConfig)().wave;
              (this.direction =
                (null == t ? void 0 : t.direction) ||
                ((0, p.getConfig)().wave.riverMode
                  ? d.default.getDownRightDirection()
                  : d.default.getRandomDirection())),
                (this.lastUpdateTime = Date.now()),
                (this.speed = (0, r.getRandomNumber)(e.speeds[0], e.speeds[1]));
              const o = (0, s.parseConfigColor)((0, r.getRandomItem)(e.colors));
              (this.size = (0, r.getRandomNumber)(
                a.canvas.width / 15,
                a.canvas.width / 20
              )),
                (this.color = (0, s.randomizeRGB)(
                  o,
                  (0, p.getConfig)().wave.colorVariation
                ));
            }
            update() {
              this.position.applyVector(
                this.direction.scale(
                  this.speed * (0, g.getElapsedSeconds)(this.lastUpdateTime)
                ),
                !0
              ),
                (0, a.isPointOutOfBounds)(this.position, 500) &&
                  this.prepareReentry(),
                (this.lastUpdateTime = Date.now());
            }
            prepareReentry() {
              let t, e;
              (0, p.getConfig)().wave.riverMode
                ? ((t = (0, a.getTopLeftCornerPoint)(300)),
                  (e = d.default.getDownRightDirection()))
                : ((t = (0, a.getRandomEdgePoint)(300)),
                  (e = t.getDirectionTo(c.default.getRandomPoint()))),
                (this.position = t),
                (this.direction = e);
            }
            draw() {
              const t = this.direction.rotateVector(90),
                e = a.canvas.width,
                o = e / 12,
                i = e / 2.5,
                r = this.position.applyVector(t.scale(2 * o)),
                s = this.position.applyVector(t.scale(-2 * o)),
                c = this.position.applyVector(
                  this.direction.rotateVector(180).scale(this.size)
                ),
                d = c.applyVector(this.direction.rotateVector(90).scale(i)),
                p = c.applyVector(this.direction.rotateVector(90).scale(-i));
              h.drawManager.scheduleDraw(l.DrawLayer.WAVE, () => {
                (0, n.drawWave)(
                  {
                    frontMidPoint: this.position,
                    frontRightAnchor: r,
                    frontLeftAnchor: s,
                    backMidPoint: c,
                    backRightCorner: d,
                    backLeftCorner: p,
                  },
                  this.color
                );
              });
            }
          });
      },
      413: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getAdjacentIndices =
            e.getCellIndex =
            e.getRiverEntryExitPoints =
            e.getBottomRightCornerPoint =
            e.getTopLeftCornerPoint =
            e.getTotalSquareInches =
            e.getRandomEdgePoint =
            e.getRightEdgePoint =
            e.getLeftEdgePoint =
            e.getBottomEdgePoint =
            e.getTopEdgePoint =
            e.getDistanceToCanvasBorder =
            e.isPointOutOfBounds =
            e.getCanvasDiagonalLength =
            e.setupCanvas =
            e.canvas =
            e.ctx =
              void 0);
        const a = o(878),
          n = i(o(639)),
          r = o(95),
          s = o(105);
        let l,
          c,
          d = 0;
        (e.setupCanvas = () => {
          const { backgroundImageUrl: t } = (0, r.getConfig)().environment;
          (e.canvas = document.querySelector("canvas")),
            (e.canvas.width = window.innerWidth),
            (e.canvas.height = window.innerHeight),
            (e.canvas.style.backgroundImage = `url("${t}")`),
            (e.canvas.style.backgroundSize = "100% 100%"),
            (d = Math.sqrt(
              Math.pow(e.canvas.width, 2) + Math.pow(e.canvas.height, 2)
            )),
            (l = Math.ceil(e.canvas.width / 50)),
            (c = Math.ceil(e.canvas.height / 50)),
            (e.ctx = e.canvas.getContext("2d")),
            e.ctx.translate(0, e.canvas.height),
            e.ctx.scale(1, -1);
        }),
          (e.getCanvasDiagonalLength = () => d),
          (e.isPointOutOfBounds = (t, o = 0) => {
            const i = -o,
              a = e.canvas.width + o,
              n = -o,
              r = e.canvas.height + o;
            return t.x < i || t.x > a || t.y < n || t.y > r;
          }),
          (e.getDistanceToCanvasBorder = (t) => {
            const { x: o, y: i } = t,
              { width: a, height: n } = e.canvas,
              r = o,
              s = a - o,
              l = i,
              c = n - i,
              d = Math.abs(Math.min(r, s, l, c));
            return o < 0 || o > a || i < 0 || i > n ? -d : d;
          }),
          (e.getTopEdgePoint = (t = 0) =>
            new n.default(Math.random() * e.canvas.width, e.canvas.height + t)),
          (e.getBottomEdgePoint = (t = 0) =>
            new n.default(Math.random() * e.canvas.width, 0 - t)),
          (e.getLeftEdgePoint = (t = 0) =>
            new n.default(0 - t, Math.random() * e.canvas.height)),
          (e.getRightEdgePoint = (t = 0) =>
            new n.default(e.canvas.width + t, Math.random() * e.canvas.height)),
          (e.getRandomEdgePoint = (t = 0) =>
            (0, a.getRandomItem)([
              e.getTopEdgePoint,
              e.getBottomEdgePoint,
              e.getLeftEdgePoint,
              e.getRightEdgePoint,
            ])(t)),
          (e.getTotalSquareInches = () => {
            const t = document.getElementById("dpi"),
              o = t.offsetWidth,
              i = t.offsetHeight;
            return (e.canvas.width / o) * (e.canvas.height / i);
          }),
          (e.getTopLeftCornerPoint = (t = 0) => {
            if ((0, a.getRandomItem)([!0, !1])) {
              const o = (0, a.getRandomNumber)(0, e.canvas.width / 2),
                i = e.canvas.height + t;
              return new n.default(o, i);
            }
            {
              const o = 0 - t,
                i = (0, a.getRandomNumber)(
                  e.canvas.height / 2,
                  e.canvas.height
                );
              return new n.default(o, i);
            }
          }),
          (e.getBottomRightCornerPoint = (t = 0) => {
            if ((0, a.getRandomItem)([!0, !1])) {
              const o =
                  (0, a.getRandomNumber)(e.canvas.width / 2, e.canvas.width) +
                  t,
                i = 0 - t;
              return new n.default(o, i);
            }
            {
              const o = e.canvas.width + t,
                i = (0, a.getRandomNumber)(0, e.canvas.height / 2);
              return new n.default(o, i);
            }
          }),
          (e.getRiverEntryExitPoints = (t = 0, o = 0.7) => {
            let i, r;
            if ((0, a.getRandomItem)([!0, !1])) {
              const r = (0, a.getRandomNumber)(0, e.canvas.width * o),
                s = e.canvas.height + t;
              i = new n.default(r, s);
            } else {
              const r = 0 - t,
                s = (0, a.getRandomNumber)(
                  (1 - o) * e.canvas.height,
                  e.canvas.height
                );
              i = new n.default(r, s);
            }
            if ((0, a.getRandomItem)([!0, !1])) {
              const t = Math.max(1 - e.canvas.width * o, i.x),
                s = (0, a.getRandomNumber)(t, e.canvas.width),
                l = 0;
              r = new n.default(s, l);
            } else {
              const t = e.canvas.width,
                s = Math.min(i.y, e.canvas.height * o),
                l = (0, a.getRandomNumber)(0, s);
              r = new n.default(t, l);
            }
            return { entryPoint: i, exitPoint: r };
          }),
          (e.getCellIndex = function (t) {
            const e = Math.floor(t.x / 50);
            return Math.floor(t.y / 50) * l + e;
          }),
          (e.getAdjacentIndices = (0, s.memoize)((t, e = 1) => {
            const o = t % l,
              i = Math.floor(t / l),
              a = [];
            for (let t = -e; t <= e; t++)
              for (let n = -e; n <= e; n++) {
                const e = o + t,
                  r = i + n;
                e >= 0 && e < l && r >= 0 && r < c && a.push(r * l + e);
              }
            return a;
          }));
      },
      118: (t, e, o) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incrementRGB =
            e.applyOpacity =
            e.randomizeRGB =
            e.parseRGB =
            e.parseOpacity =
            e.parseConfigColor =
            e.colorMap =
            e.BRIGHT_FIRE_COLOR =
            e.DARK_FIRE_COLOR =
            e.LANTERN_WALL_COLOR =
            e.WOOD_EDGE_COLOR =
            e.WOOD_COLOR =
            e.FOOD_COLOR =
            e.SCARLET =
            e.VIOLET =
            e.GREEN =
            e.SAKURA =
            e.BLUE_HUE =
            e.TRANSPARENT =
            e.FISH_COLORS =
            e.WHITE =
            e.ORANGE =
            e.BLACK =
            e.RED =
              void 0);
        const i = o(878);
        function a(t) {
          return t > 255 ? 255 : t < 0 ? 0 : t;
        }
        (e.RED = "rgb(166,16,30)"),
          (e.BLACK = "black"),
          (e.ORANGE = "rgb(255, 117, 24)"),
          (e.WHITE = "white"),
          (e.FISH_COLORS = [e.RED, e.BLACK, e.ORANGE, e.WHITE]),
          (e.TRANSPARENT = "rgba(0, 0, 10, 0)"),
          (e.BLUE_HUE = "rgba(29, 88, 140, 0.1)"),
          (e.SAKURA = "rgb(220,136,177)"),
          (e.GREEN = "rgb(34, 139, 34)"),
          (e.VIOLET = "rgb(218, 66, 245)"),
          (e.SCARLET = "rgb(255, 36, 0)"),
          (e.FOOD_COLOR = "rgb(205, 133, 63)"),
          (e.WOOD_COLOR = "rgb(132,36,12)"),
          (e.WOOD_EDGE_COLOR = "rgb(54,34,4)"),
          (e.LANTERN_WALL_COLOR = "rgb(220,20,60)"),
          (e.DARK_FIRE_COLOR = "rgb(255,90,0)"),
          (e.BRIGHT_FIRE_COLOR = "rgb(255,145,0)"),
          (e.colorMap = {
            fishRed: "rgba(166,16,30,1)",
            black: "rgba(0,0,0,1)",
            fishOrange: "rgba(255, 117, 24,1)",
            white: "rgba(255, 255, 255, 1)",
            sakura: "rgba(255, 192, 203,1.0)",
            deepRed: "rgba(200,0, 0,1)",
            deepOrange: "rgba(213,54,0,1)",
            pastelPink: "rgba(255, 120, 180, 1)",
            pastelGreen: "rgba(180, 238, 180, 1.0)",
            darkPink: "rgb(231, 84, 128)",
            waveBlue: "rgba(29, 88, 140, 0.3)",
            forestGreen: "rgba(4,161,43,1)",
            violet: "rgb(218, 66, 245)",
          }),
          (e.parseConfigColor = (t) =>
            t.startsWith("rgb") || t.startsWith("rgba")
              ? t
              : e.colorMap[t]
              ? e.colorMap[t]
              : t),
          (e.parseOpacity = (t) => {
            const e = t.match(
              /^rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\s*\)$/
            );
            return e
              ? parseFloat(e[4])
              : (console.error("Invalid rgba string"), 1);
          }),
          (e.parseRGB = (t) => {
            const e = t.match(/\d+/g);
            if (e) return [parseInt(e[0]), parseInt(e[1]), parseInt(e[2])];
            throw new Error("Invalid RGB string");
          }),
          (e.randomizeRGB = (t, o = 50) => {
            let n,
              r = 1;
            if ((t = (0, e.parseConfigColor)(t)).startsWith("rgba")) {
              if (((n = t.match(/(\d+(\.\d+)?)/g)), !n || n.length < 4))
                throw new Error("Invalid RGBA string format");
              r = parseFloat(n[3]);
            } else {
              if (!t.startsWith("rgb"))
                throw new Error("Invalid color string format");
              if (((n = t.match(/(\d+(\.\d+)?)/g)), !n || n.length < 3))
                throw new Error("Invalid RGB string format");
            }
            const [s, l, c] = n.map(Number),
              d = s + Math.round((0, i.getRandomNumber)(-o, o)),
              h = l + Math.round((0, i.getRandomNumber)(-o, o)),
              p = c + Math.round((0, i.getRandomNumber)(-o, o));
            return `rgba(${a(d)}, ${a(h)}, ${a(p)}, ${r})`;
          }),
          (e.applyOpacity = (t, e) => {
            e = Math.max(0, Math.min(e, 1));
            const o = t.match(/\d*\.?\d+/g);
            if (!o || (3 !== o.length && 4 !== o.length))
              throw (
                (console.log("colorString: ", t),
                new Error(
                  "Invalid color format. Please provide a valid rgb or rgba color string."
                ))
              );
            {
              const [t, i, a] = o;
              return `rgba(${t}, ${i}, ${a}, ${e})`;
            }
          }),
          (e.incrementRGB = (t, o, i) => {
            const [a, n, r] = (0, e.parseRGB)(t),
              [s, l, c] = (0, e.parseRGB)(o),
              d = s - a,
              h = l - n,
              p = c - r;
            return `rgb(${a + (Math.abs(d) > i ? Math.sign(d) * i : d)},${
              n + (Math.abs(h) > i ? Math.sign(h) * i : h)
            },${r + (Math.abs(p) > i ? Math.sign(p) * i : p)})`;
          });
      },
      95: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.setManualTheme =
            e.setActiveConfig =
            e.getManualTheme =
            e.getConfig =
              void 0);
        const a = i(o(219)),
          n = o(105),
          r = o(156),
          s = o(413),
          l = a.default;
        let c = l.selectedTheme,
          d = (0, n.deepMerge)(l, l.themes[c]);
        (e.getConfig = function () {
          return d;
        }),
          (e.getManualTheme = function () {
            return c;
          }),
          (e.setActiveConfig = () => {
            const t = l.themes[c],
              e = (0, n.deepMerge)(l, t);
            d = e;
          }),
          (e.setManualTheme = (t) => {
            t !== c &&
              ((c = t),
              (0, e.setActiveConfig)(),
              (0, s.setupCanvas)(),
              r.objectManager && r.objectManager.resetEnvironment());
          }),
          (0, e.setManualTheme)(c);
      },
      411: function (t, e, o) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.brightenCircle =
            e.getLinearGradient =
            e.drawLantern =
            e.drawLanternShadow =
            e.traceCorners =
            e.traceSquare =
            e.getSquarePoints =
            e.getPerpindicularPoints =
            e.getArcPoints =
            e.drawSquare =
            e.drawRipple =
            e.drawFoodParticle =
            e.traceFin =
            e.traceFishBody =
            e.drawWave =
            e.drawPetal =
            e.drawFishShadow =
            e.drawFish =
            e.drawVector =
            e.drawLine =
            e.drawPoint =
            e.fillEntireCanvas =
            e.clearCanvasDrawings =
              void 0);
        const a = o(118),
          n = o(413),
          r = i(o(639)),
          s = o(156),
          l = o(429);
        (e.clearCanvasDrawings = () => {
          n.ctx.clearRect(0, 0, n.canvas.width, n.canvas.height);
        }),
          (e.fillEntireCanvas = (t) => {
            (n.ctx.fillStyle = t),
              n.ctx.fillRect(0, 0, n.canvas.width, n.canvas.height);
          }),
          (e.drawPoint = (t, { radius: e = 1, color: o = "black" } = {}) => {
            s.drawManager.scheduleDraw(l.DrawLayer.DEV, () => {
              const [i, a] = t.getCoordinates();
              n.ctx.beginPath(),
                n.ctx.arc(i, a, e, 0, 2 * Math.PI, !1),
                (n.ctx.fillStyle = o),
                n.ctx.fill(),
                (n.ctx.lineWidth = 5),
                (n.ctx.strokeStyle = o),
                n.ctx.stroke();
            });
          }),
          (e.drawLine = (
            t,
            e,
            { color: o = "white", lineWidth: i = 1 } = {}
          ) => {
            const [a, r] = t.getCoordinates(),
              [s, l] = e.getCoordinates();
            n.ctx.beginPath(),
              n.ctx.moveTo(a, r),
              n.ctx.lineTo(s, l),
              (n.ctx.strokeStyle = o),
              (n.ctx.lineWidth = i),
              n.ctx.stroke();
          }),
          (e.drawVector = (t, e, { color: o = a.RED } = {}) => {
            const [i, r] = t.getCoordinates(),
              s = t.applyVector(e),
              [l, c] = s.getCoordinates();
            n.ctx.beginPath(),
              n.ctx.moveTo(i, r),
              n.ctx.lineTo(l, c),
              (n.ctx.strokeStyle = o),
              (n.ctx.lineWidth = 2),
              n.ctx.stroke();
            const d = Math.PI / 6,
              h = Math.atan2(e.dy, e.dx);
            n.ctx.beginPath(),
              n.ctx.moveTo(l, c),
              n.ctx.lineTo(l - 10 * Math.cos(h - d), c - 10 * Math.sin(h - d)),
              n.ctx.lineTo(l - 10 * Math.cos(h + d), c - 10 * Math.sin(h + d)),
              n.ctx.lineTo(l, c),
              (n.ctx.fillStyle = o),
              n.ctx.fill();
          }),
          (e.drawFish = (t, o, i) => {
            const {
              trunkRightTop: a,
              trunkLeftTop: r,
              leftPectoralFinFrontEdge: s,
              leftPectoralFinTip: l,
              rightPectoralFinFrontEdge: c,
              rightPectoralFinBackEdge: d,
              rightPectoralFinTip: h,
              leftTailFinTip: p,
              rightTailFinTip: g,
              trunkTailJoint: u,
              ventralFinBase: f,
              leftVentralFinFrontEdge: m,
              leftVentralFinTip: w,
              leftVentralFinBackEdge: v,
              rightVentralFinTip: y,
              rightVentralFinFrontEdge: C,
              rightVentralFinBackEdge: M,
              leftPectoralFinBackEdge: b,
              dorsalFinEnd: x,
              dorsalFinAnchor: P,
              dorsalFinTip: T,
              upperTailAnchor: R,
              lowerTailAnchor: O,
              extrapolatedTailAnchor: S,
            } = t;
            n.ctx.beginPath(),
              (n.ctx.lineWidth = 1),
              n.ctx.moveTo(...O.getCoordinates()),
              n.ctx.lineTo(...p.getCoordinates()),
              n.ctx.quadraticCurveTo(
                ...S.getCoordinates(),
                ...O.getCoordinates()
              ),
              (n.ctx.fillStyle = o.tailFinColor),
              n.ctx.fill(),
              n.ctx.beginPath(),
              (n.ctx.lineWidth = 1),
              n.ctx.moveTo(...O.getCoordinates()),
              n.ctx.lineTo(...g.getCoordinates()),
              n.ctx.quadraticCurveTo(
                ...S.getCoordinates(),
                ...O.getCoordinates()
              ),
              (n.ctx.fillStyle = o.tailFinColor),
              n.ctx.fill(),
              (0, e.traceFin)(f, m, v, w),
              (n.ctx.fillStyle = o.finColor),
              n.ctx.fill(),
              (0, e.traceFin)(f, C, M, y),
              (n.ctx.fillStyle = o.finColor),
              n.ctx.fill(),
              n.ctx.save(),
              (0, e.traceFishBody)(t),
              (n.ctx.fillStyle = o.mainBodyColor),
              n.ctx.fill(),
              n.ctx.clip(),
              i.forEach((t) => {
                const e = t.position,
                  [o, i] = e.getCoordinates();
                n.ctx.beginPath(),
                  n.ctx.arc(o, i, t.radius, 0, 2 * Math.PI, !1),
                  (n.ctx.fillStyle = t.color),
                  n.ctx.fill(),
                  (n.ctx.lineWidth = 5),
                  (n.ctx.strokeStyle = t.color),
                  n.ctx.stroke();
              });
            const F = n.ctx.createLinearGradient(
              ...r.getCoordinates(),
              ...a.getCoordinates()
            );
            F.addColorStop(0, "rgba(0, 0, 0, 0.2)"),
              F.addColorStop(0.5, "rgba(255, 255, 255, 0)"),
              F.addColorStop(1, "rgba(0, 0, 0, 0.2)"),
              n.ctx.beginPath(),
              (0, e.traceFishBody)(t),
              (n.ctx.fillStyle = F),
              n.ctx.fill(),
              n.ctx.restore(),
              (0, e.traceFin)(r, s, b, l),
              (n.ctx.fillStyle = o.finColor),
              n.ctx.fill(),
              (0, e.traceFin)(a, c, d, h),
              (n.ctx.fillStyle = o.finColor),
              n.ctx.fill(),
              n.ctx.beginPath(),
              n.ctx.moveTo(...u.getCoordinates()),
              n.ctx.quadraticCurveTo(
                ...P.getCoordinates(),
                ...x.getCoordinates()
              ),
              (n.ctx.strokeStyle = o.finColor),
              (n.ctx.lineWidth = 1),
              (n.ctx.lineCap = "round"),
              n.ctx.stroke(),
              n.ctx.quadraticCurveTo(
                ...T.getCoordinates(),
                ...u.getCoordinates()
              ),
              (n.ctx.fillStyle = o.finColor),
              n.ctx.fill();
          }),
          (e.drawFishShadow = (t, o) => {
            const i = (0, a.applyOpacity)("rgb(0,0,0)", o);
            (0, e.traceFishBody)(t),
              (n.ctx.fillStyle = i),
              n.ctx.fill(),
              (0, e.traceFin)(
                t.trunkLeftTop,
                t.leftPectoralFinFrontEdge,
                t.leftPectoralFinBackEdge,
                t.leftPectoralFinTip
              ),
              (n.ctx.fillStyle = i),
              n.ctx.fill(),
              (0, e.traceFin)(
                t.trunkRightTop,
                t.rightPectoralFinFrontEdge,
                t.rightPectoralFinBackEdge,
                t.rightPectoralFinTip
              ),
              (n.ctx.fillStyle = i),
              n.ctx.fill();
          }),
          (e.drawPetal = (t, e, o) => {
            const {
              base: i,
              leftCurveAnchor: a,
              tip: r,
              rightCurveAnchor: s,
              curveAnchorBase: l,
            } = t;
            n.ctx.beginPath(),
              n.ctx.moveTo(...i.getCoordinates()),
              n.ctx.quadraticCurveTo(
                ...a.getCoordinates(),
                ...r.getCoordinates()
              ),
              n.ctx.quadraticCurveTo(
                ...s.getCoordinates(),
                ...i.getCoordinates()
              );
            const c = n.ctx.createLinearGradient(
              ...i.getCoordinates(),
              ...r.getCoordinates()
            );
            c.addColorStop(0, e),
              c.addColorStop(1, o),
              (n.ctx.fillStyle = c),
              n.ctx.fill(),
              (n.ctx.lineCap = "round"),
              (n.ctx.lineWidth = 1),
              n.ctx.beginPath(),
              n.ctx.moveTo(...i.getCoordinates()),
              n.ctx.lineTo(...l.getCoordinates()),
              (n.ctx.strokeStyle = e),
              n.ctx.stroke();
          }),
          (e.drawWave = (t, e) => {
            const {
                frontMidPoint: o,
                frontRightAnchor: i,
                frontLeftAnchor: r,
                backMidPoint: s,
                backRightCorner: l,
                backLeftCorner: c,
              } = t,
              d = n.ctx.createLinearGradient(
                ...o.getCoordinates(),
                ...s.getCoordinates()
              );
            d.addColorStop(0, e),
              d.addColorStop(1, a.TRANSPARENT),
              n.ctx.beginPath(),
              n.ctx.moveTo(...o.getCoordinates()),
              n.ctx.quadraticCurveTo(
                ...i.getCoordinates(),
                ...l.getCoordinates()
              ),
              n.ctx.lineTo(...c.getCoordinates()),
              n.ctx.quadraticCurveTo(
                ...r.getCoordinates(),
                ...o.getCoordinates()
              ),
              (n.ctx.fillStyle = d),
              n.ctx.fill();
          }),
          (e.traceFishBody = (t) => {
            const {
              headCurveAnchor: e,
              trunkRightTop: o,
              trunkRightBottom: i,
              trunkLeftBottom: a,
              trunkLeftTop: r,
              upperTailLeftAnchor: s,
              upperTailRightAnchor: l,
              lowerTailLeftAnchor: c,
              lowerTailRightAnchor: d,
              tailTip: h,
            } = t;
            n.ctx.beginPath(),
              n.ctx.moveTo(...a.getCoordinates()),
              n.ctx.lineTo(...r.getCoordinates()),
              n.ctx.quadraticCurveTo(
                ...e.getCoordinates(),
                ...o.getCoordinates()
              ),
              n.ctx.lineTo(...i.getCoordinates()),
              n.ctx.bezierCurveTo(
                ...l.getCoordinates(),
                ...d.getCoordinates(),
                ...h.getCoordinates()
              ),
              n.ctx.bezierCurveTo(
                ...c.getCoordinates(),
                ...s.getCoordinates(),
                ...a.getCoordinates()
              );
          }),
          (e.traceFin = (t, e, o, i) => {
            n.ctx.beginPath(),
              n.ctx.moveTo(...t.getCoordinates()),
              n.ctx.quadraticCurveTo(
                ...e.getCoordinates(),
                ...i.getCoordinates()
              ),
              n.ctx.quadraticCurveTo(
                ...o.getCoordinates(),
                ...t.getCoordinates()
              );
          }),
          (e.drawFoodParticle = (t) => {
            const { base: e, tip: o, curveAnchor: i } = t;
            n.ctx.beginPath(),
              n.ctx.moveTo(...e.getCoordinates()),
              n.ctx.quadraticCurveTo(
                ...i.getCoordinates(),
                ...o.getCoordinates()
              ),
              (n.ctx.strokeStyle = "rgb(5,71,42)"),
              (n.ctx.lineWidth = 1),
              (n.ctx.lineCap = "round"),
              n.ctx.stroke();
          }),
          (e.drawRipple = (t) => {
            const {
              rippleStart: e,
              rippleEnd: o,
              rippleCurve: i,
              midPoint: r,
              color: s,
              lineWidth: l,
            } = t;
            n.ctx.beginPath(),
              n.ctx.moveTo(...e.getCoordinates()),
              n.ctx.quadraticCurveTo(
                ...i.getCoordinates(),
                ...o.getCoordinates()
              );
            const c = n.ctx.createLinearGradient(
              ...i.getCoordinates(),
              ...r.getCoordinates()
            );
            c.addColorStop(0, s),
              c.addColorStop(1, a.TRANSPARENT),
              (n.ctx.lineWidth = l),
              (n.ctx.strokeStyle = c),
              n.ctx.stroke();
          }),
          (e.drawSquare = (t, { color: o = "black" } = {}) => {
            (0, e.traceSquare)(t), (n.ctx.fillStyle = o), n.ctx.fill();
          }),
          (e.getArcPoints = (t, e, o) => {
            const i = new r.default((t.x + e.x) / 2, (t.y + e.y) / 2);
            return {
              arcPoint: new r.default(i.x + o.dx, i.y + o.dy),
              midPoint: new r.default(i.x, i.y),
            };
          }),
          (e.getPerpindicularPoints = (t, e, o) => {
            const i = (t.x + e.x) / 2,
              a = (t.y + e.y) / 2,
              n = e.x - t.x,
              s = e.y - t.y,
              l = Math.sqrt(n * n + s * s),
              c = -s / l,
              d = n / l;
            return {
              point1: new r.default(i + c * o, a + d * o),
              point2: new r.default(i - c * o, a - d * o),
            };
          }),
          (e.getSquarePoints = (t, e, o) => {
            const [i, a] = t.getCoordinates(),
              n = o / 2,
              s = {
                corner1: new r.default(i - n, a - n),
                corner2: new r.default(i + n, a - n),
                corner3: new r.default(i + n, a + n),
                corner4: new r.default(i - n, a + n),
              };
            return r.default.rotateAllPoints(t, e, s);
          }),
          (e.traceSquare = (t) => {
            const { corner1: e, corner2: o, corner3: i, corner4: a } = t;
            n.ctx.beginPath(),
              n.ctx.moveTo(...e.getCoordinates()),
              n.ctx.lineTo(...o.getCoordinates()),
              n.ctx.lineTo(...i.getCoordinates()),
              n.ctx.lineTo(...a.getCoordinates()),
              n.ctx.lineTo(...e.getCoordinates());
          }),
          (e.traceCorners = (t) => {
            const { bottomMost: e, topMost: o, leftMost: i, rightMost: a } = t;
            n.ctx.beginPath(),
              n.ctx.moveTo(...e.getCoordinates()),
              n.ctx.lineTo(...i.getCoordinates()),
              n.ctx.lineTo(...o.getCoordinates()),
              n.ctx.lineTo(...a.getCoordinates()),
              n.ctx.lineTo(...e.getCoordinates());
          }),
          (e.drawLanternShadow = (t, o) => {
            const i = (0, a.applyOpacity)("rgb(0,0,0)", o);
            (0, e.drawSquare)(t, { color: i });
          }),
          (e.drawLantern = (t) => {
            const {
              woodenBaseSquare: o,
              woodenBaseColor: i,
              woodJoinColor: r,
              leftWoodJoinPoints: s,
              rightWoodJoinPoints: l,
              lightColor: c,
              lampBaseCorners: d,
              lampTopCorners: h,
              lampWallColor: p,
              lampBackWallOpacity: g,
              lampFrontWallOpacity: u,
            } = t;
            (0, e.drawSquare)(o, { color: i }),
              (0, e.drawLine)(o.corner1, o.corner2, { color: r, lineWidth: 2 }),
              (0, e.drawLine)(o.corner3, o.corner4, { color: r, lineWidth: 2 });
            for (let t = 0; t < s.length; t++)
              (0, e.drawLine)(s[t], l[t], { color: r, lineWidth: 2 });
            (0, e.traceCorners)(d),
              (n.ctx.fillStyle = c),
              n.ctx.fill(),
              (n.ctx.lineWidth = 2),
              (n.ctx.strokeStyle = "red"),
              n.ctx.stroke();
            for (const t in d)
              (0, e.drawLine)(d[t], h[t], { color: "red", lineWidth: 3 });
            const f = {
              corner1: d.leftMost,
              corner2: d.topMost,
              corner3: h.topMost,
              corner4: h.leftMost,
            };
            (0, e.traceSquare)(f);
            const m = (0, e.getLinearGradient)(
              d.leftMost,
              d.topMost,
              (0, a.applyOpacity)(c, g),
              h.leftMost,
              h.topMost,
              (0, a.applyOpacity)(p, g)
            );
            (n.ctx.fillStyle = m), n.ctx.fill();
            const w = {
              corner1: d.rightMost,
              corner2: d.topMost,
              corner3: h.topMost,
              corner4: h.rightMost,
            };
            (0, e.traceSquare)(w);
            const v = (0, e.getLinearGradient)(
              d.rightMost,
              d.topMost,
              (0, a.applyOpacity)(c, g),
              h.rightMost,
              h.topMost,
              (0, a.applyOpacity)(p, g)
            );
            (n.ctx.fillStyle = v), n.ctx.fill();
            const y = {
              corner1: d.leftMost,
              corner2: d.bottomMost,
              corner3: h.bottomMost,
              corner4: h.leftMost,
            };
            (0, e.traceSquare)(y);
            const C = (0, e.getLinearGradient)(
              d.leftMost,
              d.bottomMost,
              (0, a.applyOpacity)(c, u),
              h.leftMost,
              h.bottomMost,
              (0, a.applyOpacity)(p, u)
            );
            (n.ctx.fillStyle = C), n.ctx.fill();
            const M = {
              corner1: d.rightMost,
              corner2: d.bottomMost,
              corner3: h.bottomMost,
              corner4: h.rightMost,
            };
            (0, e.traceSquare)(M);
            const b = (0, e.getLinearGradient)(
              d.rightMost,
              d.bottomMost,
              (0, a.applyOpacity)(c, u),
              h.rightMost,
              h.bottomMost,
              (0, a.applyOpacity)(p, u)
            );
            (n.ctx.fillStyle = b), n.ctx.fill();
          }),
          (e.getLinearGradient = (t, e, o, i, a, s) => {
            const { midpoint: l, perpendicularFoot: c } =
                r.default.calculatePerpendicularFoot(t, e, i, a),
              d = n.ctx.createLinearGradient(
                ...l.getCoordinates(),
                ...c.getCoordinates()
              );
            return d.addColorStop(0, o), d.addColorStop(1, s), d;
          }),
          (e.brightenCircle = (t, e, o, i, a) => {
            n.ctx.globalCompositeOperation = "lighter";
            var r = n.ctx.createRadialGradient(
              ...t.getCoordinates(),
              e,
              ...t.getCoordinates(),
              o
            );
            r.addColorStop(0, i),
              r.addColorStop(1, a),
              n.ctx.beginPath(),
              n.ctx.arc(...t.getCoordinates(), o, 0, 2 * Math.PI, !1),
              (n.ctx.fillStyle = r),
              n.ctx.fill(),
              (n.ctx.globalCompositeOperation = "source-over");
          });
      },
      392: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.scaleToRange = void 0),
          (e.scaleToRange = (t, e, o) => t + (e - t) * o);
      },
      878: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.generateUuid = e.getRandomItem = e.getRandomNumber = void 0),
          (e.getRandomNumber = (t, e) => Math.random() * (e - t) + t),
          (e.getRandomItem = function (t) {
            if (0 === t.length)
              throw new Error(
                "Array is empty and cannot provide a random item."
              );
            return t[Math.floor(Math.random() * t.length)];
          }),
          (e.generateUuid = function () {
            return crypto.randomUUID();
          });
      },
      600: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getElapsedSeconds = void 0),
          (e.getElapsedSeconds = (t) => (Date.now() - t) / 1e3);
      },
      105: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.deepMerge = e.memoize = e.debounce = void 0),
          (e.debounce = function (t, e) {
            let o;
            return function (...i) {
              clearTimeout(o), (o = setTimeout(() => t.apply(this, i), e));
            };
          }),
          (e.memoize = (t) => {
            const e = new Map();
            return (...o) => {
              const i = JSON.stringify(o);
              if (e.has(i)) return e.get(i);
              const a = t(...o);
              return e.set(i, a), a;
            };
          }),
          (e.deepMerge = (t, o) => {
            const i = Array.isArray(t) ? [...t] : Object.assign({}, t);
            for (const t in o)
              o.hasOwnProperty(t) &&
                (o[t] && "object" == typeof o[t] && !Array.isArray(o[t])
                  ? (i[t] = (0, e.deepMerge)(i[t] || {}, o[t]))
                  : (i[t] = o[t]));
            return i;
          });
      },
      219: (t) => {
        t.exports = JSON.parse(
          '{"objectDensities":{"fishPerSquareInch":0.3,"petalsPerSquareInch":0.3,"minWaveCount":3,"wavesPerSquareInch":0.2},"environment":{"backgroundImageUrl":"src/backgrounds/waterColorOcean.jpg","surfaceColor":"rgba(0,0,50,0.05)"},"fish":{"proportions":{"headCurveAnchorLength":40,"trunkWidth":14,"trunkLength":8,"tailLength":50,"finLength":20,"tailFinLength":5},"bodyColors":["fishRed","fishRed","black","black","white","white"],"finColors":["fishOrange","fishRed","black","white"],"decorationColors":["fishRed","black","fishOrange","white"],"followDistance":50,"drawSimplified":false,"drawLeaderFollowerLinks":false},"wave":{"speeds":[5,15],"riverMode":true,"colors":["waveBlue"],"colorVariation":50},"ripple":{"color":"rgba(255,255,255,1)","maxOpacity":0.2},"petal":{"speeds":[7,10],"oscillationPeriods":[5,15],"colors":["pastelPink"],"colorVariation":25,"sizes":[10,15],"maxOscillation":15},"lantern":{"include":true,"minShadowOpacity":0.1,"maxShadowOpacity":0.5,"glowColor":"rgba(251,50,0, 0.3)"},"selectedTheme":"Sky Blue","themes":{"Ocean":{"petal":{"colors":["forestGreen"]},"environment":{"backgroundImageUrl":"src/backgrounds/waterColorOcean.jpg"},"lantern":{"minShadowOpacity":0.2,"maxShadowOpacity":0.8}},"Midnight Blue":{"objectDensities":{"fishPerSquareInch":0.3,"minWaveCount":1,"wavesPerSquareInch":0.05},"environment":{"backgroundImageUrl":"src/backgrounds/solidMidnightBlue.jpg"},"petal":{"colors":["pastelPink"]},"wave":{"colorVariation":0,"riverMode":false},"ripple":{"maxOpacity":0.1}},"Sky Blue":{"objectDensities":{"fishPerSquareInch":0.2,"petalsPerSquareInch":0.6,"wavesPerSquareInch":0.01},"environment":{"backgroundImageUrl":"solidSkyBlue.jpg","surfaceColor":"rgba(0,0,50,0)"},"wave":{"colors":["rgba(255, 255, 255, 0.1)"],"colorVariation":0,"riverMode":false},"lantern":{"include":true},"petal":{"colors":["pastelPink"],"colorVariation":50}}}}'
        );
      },
    },
    e = {};
  function o(i) {
    var a = e[i];
    if (void 0 !== a) return a.exports;
    var n = (e[i] = { id: i, exports: {} });
    return t[i].call(n.exports, n, n.exports, o), n.exports;
  }
  (o.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return o.d(e, { a: e }), e;
  }),
    (o.d = (t, e) => {
      for (var i in e)
        o.o(e, i) &&
          !o.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (o.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.nc = void 0),
    o(156);
})();

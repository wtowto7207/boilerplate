// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(206)
	)

	/* script */
	__vue_exports__ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!weex-vue-loader/lib/script-loader!babel-loader!weex-vue-loader/lib/selector?type=script&index=0!./index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	/* template */
	var __vue_template__ = __webpack_require__(208)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/component/packages/wxc-mask/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-28fceaa4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 206:
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "fixed",
	    "width": 750,
	    "zIndex": 99999
	  },
	  "wxc-mask": {
	    "position": "fixed",
	    "top": 300,
	    "left": 60,
	    "width": 702,
	    "height": 800
	  },
	  "mask-bottom": {
	    "width": 100,
	    "height": 100,
	    "backgroundColor": "rgba(0,0,0,0)",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "mask-close-icon": {
	    "width": 64,
	    "height": 64
	  }
	}

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
	    attrs: {
	      "show": _vm.show && _vm.hasOverlay
	    },
	    on: {
	      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking,
	      "wxcOverlayBodyClicked": _vm.wxcOverlayBodyClicked
	    }
	  }, 'wxc-overlay', _vm.mergeOverlayCfg)) : _vm._e(), (_vm.show) ? _c('div', {
	    ref: "wxc-mask",
	    staticClass: ["wxc-mask"],
	    style: _vm.maskStyle,
	    attrs: {
	      "hack": _vm.shouldShow
	    }
	  }, [_c('div', {
	    style: _vm.contentStyle
	  }, [_vm._t("default")], 2), (_vm.showClose) ? _c('div', {
	    staticClass: ["mask-bottom"],
	    style: {
	      width: _vm.width + 'px'
	    },
	    on: {
	      "click": _vm.closeIconClicked
	    }
	  }, [_c('image', {
	    staticClass: ["mask-close-icon"],
	    attrs: {
	      "src": _vm.closeIcon,
	      "ariaLabel": "关闭"
	    }
	  })]) : _vm._e()]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });
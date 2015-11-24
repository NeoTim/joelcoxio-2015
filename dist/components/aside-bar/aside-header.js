System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, inject, AsideHeader;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      AsideHeader = (function () {
        function AsideHeader(element) {
          _classCallCheck(this, _AsideHeader);

          this.element = element;
        }

        var _AsideHeader = AsideHeader;
        AsideHeader = inject(Element)(AsideHeader) || AsideHeader;
        return AsideHeader;
      })();

      _export('AsideHeader', AsideHeader);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNpZGUtYmFyL2FzaWRlLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0JBS2EsV0FBVzs7Ozs7O21DQUxoQixRQUFRO2lDQUFFLE1BQU07OztBQUtYLGlCQUFXO0FBRVgsaUJBRkEsV0FBVyxDQUVWLE9BQU8sRUFBRTs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzsyQkFKVSxXQUFXO0FBQVgsbUJBQVcsR0FEdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVyIsImZpbGUiOiJjb21wb25lbnRzL2FzaWRlLWJhci9hc2lkZS1oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuXG5cbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBc2lkZUhlYWRlcntcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, inject, AsideDetail;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      AsideDetail = (function () {
        function AsideDetail(element) {
          _classCallCheck(this, _AsideDetail);

          this.element = element;
        }

        var _AsideDetail = AsideDetail;
        AsideDetail = inject(Element)(AsideDetail) || AsideDetail;
        return AsideDetail;
      })();

      _export('AsideDetail', AsideDetail);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNpZGUtYmFyL2FzaWRlLWRldGFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0JBS2EsV0FBVzs7Ozs7O21DQUxoQixRQUFRO2lDQUFFLE1BQU07OztBQUtYLGlCQUFXO0FBRVgsaUJBRkEsV0FBVyxDQUVWLE9BQU8sRUFBRTs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzsyQkFKVSxXQUFXO0FBQVgsbUJBQVcsR0FEdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVyIsImZpbGUiOiJjb21wb25lbnRzL2FzaWRlLWJhci9hc2lkZS1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuXG5cbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBc2lkZURldGFpbHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

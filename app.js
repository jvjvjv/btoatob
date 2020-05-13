angular.module('app', [])

.controller('TranslationController', function($scope, $locale) {
  $scope.text = "";

  this.btoa = function(val) {
    try {
      let valid = JSON.parse(val.replace(/(\n|\s{2,})/g,''));
      return btoa(val.replace(/(\n|\s{2,})/g,''));
    } catch(e) {
      return null;
    }
  }

  this.atob = function(val) {
    try {
      return (JSON.parse(atob(val)))
    } catch(e) {
      return null;
    }
  }

  this.valid = function(val, type) {
    switch (type) {
      case 'atob':
        try {
          let valid = JSON.parse(atob(val));
          return true;
        } catch(e) {
          return false;
        }
        break;
    }
  }
});
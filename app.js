// angular.module('app', [])

// .controller('TranslationController', function($scope, $locale) {
//   $scope.text = "";

//   this.btoa = function(val) {
//     try {
//       const input = JSON.stringify(eval(`(${val})`));
//       let valid = JSON.parse(input);
//       return btoa(input);
//     } catch(e) {
//       return null;
//     }
//   }

//   this.atob = function(val) {
//     try {
//       return (JSON.parse(atob(val)))
//     } catch(e) {
//       return null;
//     }
//   }

//   this.valid = function(val, type) {
//     switch (type) {
//       case 'atob':
//         try {
//           let valid = JSON.parse(atob(val));
//           return true;
//         } catch(e) {
//           return false;
//         }
//         break;
//     }
//   }
// });
(function() {
  'use strict';

angular
   .module('readbooks')
   .service('CardsService', CardServiceFunction);

 /** @ngInject */
 function CardServiceFunction(ProgressBarService, $rootScope) {
   var vm = this;
   vm.genre='all';
   vm.toNum = 0;
   ProgressBarService.setPreloaderConfig();
   ProgressBarService.load();

   vm.pushtoCards = function(genre){
     vm.genre=genre;
     $rootScope.$broadcast('handleBroadcast');
   }

   vm.pushtoTabs = function(toNum){
     vm.toNum=toNum;
     $rootScope.$broadcast('handleChange');
   }

   vm.getGenre = function(){
     return vm.genre;
   }
   vm.getNum = function(){
     return vm.toNum;
   }
   vm.fetch = function(){
     return [
       {
         "name": "Act Like It",
         "author": "by Lucy Parker",
         "src": "assets/images/act like it.jpg",
         "voters": '1,000,000',
         "genre": 'all, business',
         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit metus, scelerisque vel orci sagittis, sodales vehicula ante.",
         "likes":{
           "imgs":[
             {src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'}
          ],
          "descname":"Samantha Williams",
          "descother":"2 other friends"
          }
       },
       {
         "name": "Alone On The Wall",
         "author": "by David Roberst",
         "src": "assets/images/alone on the wall.jpg",
         "voters": '1,000,000',
         "genre": 'all, science',
         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit metus, scelerisque vel orci sagittis, sodales vehicula ante.",
         "likes":{
           "imgs":[
             {src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'}
          ],
          "descname":"Samantha Williams",
          "descother":"2 other friends"
          }
       },
       {
         "name": "The Painter's Daughter",
         "author": "by Julie Klassen",
         "src": "assets/images/the painters daughter.jpg",
         "voters": '1,000,000',
         "genre": 'all, fiction',
         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit metus, scelerisque vel orci sagittis, sodales vehicula ante.",
         "likes":{
           "imgs":[
             {src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'}
          ],
          "descname":"Samantha Williams",
          "descother":"2 other friends"
          }
       },
       {
         "name": "Dark Murder",
         "author": "by Helen H",
         "src": "assets/images/dark murder.jpg",
         "voters": '1,000,000',
         "genre": 'all, philosophy',
         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit metus, scelerisque vel orci sagittis, sodales vehicula ante.",
         "likes":{
           "imgs":[
             {src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'}
          ],
          "descname":"Samantha Williams",
          "descother":"2 other friends"
          }
       },
       {
         "name": "Alex Ferguson: My Autobiography",
         "author": "by Alex Ferguson",
         "src": "assets/images/alex ferguson.jpg",
         "voters": '1,000,000',
         "genre": 'all, biography',
         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit metus, scelerisque vel orci sagittis, sodales vehicula ante.",
         "likes":{
           "imgs":[
             {src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'}
          ],
          "descname":"Samantha Williams",
          "descother":"2 other friends"
          }
       },
       {
         "name": "The Devils Playground",
         "author": "by Eliza Freed",
         "src": "assets/images/the devils playground.jpg",
         "voters": '1,000,000',
         "genre": 'all, business',
         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit metus, scelerisque vel orci sagittis, sodales vehicula ante.",
         "likes":{
           "imgs":[
             {src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'}
          ],
          "descname":"Samantha Williams",
          "descother":"2 other friends"
          }
       },
       {
         "name": "INCONCEIVABLE",
         "author": "by Tegan Wren",
         "src": "assets/images/inconceivable.jpg",
         "voters": '1,000,000',
         "genre": 'all, business',
         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit metus, scelerisque vel orci sagittis, sodales vehicula ante.",
         "likes":{
           "imgs":[
             {src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'}
          ],
          "descname":"Samantha Williams",
          "descother":"2 other friends"
          }
       },
       {
         "name": "Four Days",
         "author": "by Iain Ryan",
         "src": "assets/images/four days.jpg",
         "voters": '1,000,000',
         "genre": 'all, philosophy',
         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit metus, scelerisque vel orci sagittis, sodales vehicula ante.",
         "likes":{
           "imgs":[
             {src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'},{src:'assets/images/user.jpg'}
          ],
          "descname":"Samantha Williams",
          "descother":"2 other friends"
          }
       }
     ]
   }
 }

 })();

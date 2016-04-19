(function() {
    'use strict';


    var animals = [
      {species: 'Buffalo', type: 'Mammal', picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/American_bison_k5680-1.jpg'},
      {species: 'Penguin', type: 'Bird', picture: 'http://searchengineland.com/figz/wp-content/seloads/2014/08/penguin-walking-ss-1920-800x450.jpg'},
      {species: 'Platypus', type: '???', picture: 'http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/platypus_662_600x450.jpg'}
    ];

    angular
      .module('zoo-thing', [])
      .controller('WelcomeController', WelcomeController)
      .controller('AnimalsController', AnimalsController);

      function WelcomeController() {
        this.name = 'World';
        this.now = new Date();
      }

      function AnimalsController() {
          this.all = [
             { species: "Buffalo", type: "Mammal", picture: "https://upload.wikimedia.org/wikipedia/commons/8/8d/American_bison_k5680-1.jpg" },
             { species: "Penguin", type: "Bird", picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg/800px-South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg" },
             { species: "Platypus", type: "???", picture: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Wild_Platypus_4.jpg" },
             { species: "Ostrich", type: "Bird", picture: "" },
             { species: "Bear", type: "Mammal", picture: "" },
             { species: "Baboon", type: "Mammal", picture: "" },
             { species: "T-Rex", type: "Dinosaur", picture: "" },
             { species: "Velociraptor", type: "Dinosaur", picture: "" }
           ];

           this.previewLimit = 5;

          this.types = ['Mammal', 'Bird', '???'];
        // var animal = animals[0];
        //
        // this.name = animal.species;
        // this.type = animal.type;
        // this.picture = animal.picture;
      }
})();

"use strict";
(function(){
	angular.module("myApp.home", ["ngRoute"])

	.config(["$routeProvider", function($routeProvider) {
	  $routeProvider.when("/home", {
	    templateUrl: "home/home.html",
	    controller: "homeController"
	  });
	}])

	.controller("homeController", ["$scope",
		function($scope) {
			$scope.character = {
				name: "",
				level: 1,
				class: "",
				alignment: "",
				race: "",
				modifiers: {
					strength: 0,
					dexterity: 0,
					constitution: 0,
					intelligence: 0,
					wisdom: 0,
					charisma: 0 
				}
			};

			$scope.text = "";

			$scope.classes = [
				{ key: "barbarian", value: "Barbarian" },
				{ key: "bard", value: "Bard" },
				{ key: "cleric", value: "Cleric" },
				{ key: "druid", value: "Druid" },
				{ key: "fighter", value: "Fighter" },
				{ key: "ranger", value: "Ranger"}
			];

			$scope.alignments = [
				{ key: "chaotic-good", value: "Chaotic Good" },
				{ key: "chaotic-neutral", value: "Chaotic Neutral" },
				{ key: "chaotic-evil", value: "Chaotic Evil" },
				{ key: "neutral-good", value: "Neutral Good" },
				{ key: "neutral-neutral", value: "True Neutral" },
				{ key: "neutral-evil", value: "Neutral Evil" },
				{ key: "lawful-good", value: "Lawful Good" },
				{ key: "lawful-neutral", value: "Lawful Neutral" },
				{ key: "lawful-evil", value: "Lawful Evil" }
			];

			$scope.races = [
				{ key: "dragonborn", value: "Dragonborn" },
				{ key: "dwarf", value: "Dwarf" },
				{ key: "elf", value: "Elf" },
				{ key: "gnome", value: "Gnome" },
				{ key: "halfling", value: "Halfling" },
				{ key: "half-elf", value: "Half-Elf" },
				{ key: "human", value: "Human" },
			];

			$scope.updateFlavorText = function(key) {
				switch(key) {
					case "class":
						$scope.text = getClassText($scope.character.class)
						break;
					case "alignment":
						$scope.text = getAlignmentText($scope.character.alignment)
						break;
					case "race":
						$scope.text = getRaceText($scope.character.race);
						break;
				}
			};

			var getClassText = function(key) {
				switch(key) {
					case "Barbarian":
						return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo ut lobortis iaculis. Suspendisse consectetur purus nec nibh dapibus finibus. Nullam leo ipsum, lacinia sit amet sem a, faucibus fringilla libero. Sed cursus lorem at urna varius, ac euismod lectus porta. Aenean dictum diam ante, in varius elit volutpat at. Proin vestibulum dui ut diam ullamcorper, sed efficitur est molestie. Praesent sed eros mi. Sed pretium eros ut ultrices eleifend. Suspendisse arcu odio, sollicitudin a enim feugiat, consectetur dignissim turpis. Donec faucibus vestibulum posuere. Nunc euismod porttitor augue vehicula placerat."
					case "Bard":
						return "Something related to Bards...";
				}
			};

			var getAlignmentText = function(key) {
				switch(key) {
					case "Chaotic Good":
						return "Fuck chaotic good."
					case "Neutral Evil":
						return "I AM EVIL STOP LAUGHING";
				}
			};

			var getRaceText = function(key) {
				switch(key) {
					case "Dwarf":
						return "I'm not racist, but fuck dwarves."
					case "Human":
						return "HOOOMANSSS";
					case "Gnome":
						return "for gnomergone";
				}
			};

			$scope.characterSheet = function() {
				alert("Your character name is: " + $scope.character.name
					+ " and he's a fucking " + $scope.character.class);
			};
		}
	]);
})();
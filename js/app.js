'use strict';

var app = angular.module("app", ["ngAnimate", 'ui.bootstrap']);

app.controller("AppCtrl", function($scope, $timeout, $uibModal, $http) {

    $scope.theString = {};

    $scope.team = [
        {name: "Andrew Hartford", title: "Managing Partner", image: "andrew01.jpg", email:"andrew@hartfordlab.com", twitter: "http://www.twitter.com/alkemyinc", linkedin: "http://www.linkedin.com/alkemyinc", description: "Andrew description lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum. Nam et sapien id enim lobortis viverra eget a arcu. Donec vitae mi in.", firstQuestion: "Favorite movie?", firstResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum.", secondQuestion: "Favorite quote?", secondResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum."},
        {name: "Alex Evans", title: "Partner", image: "alex01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Alex studied Economics and Foreign Affairs at UVA and is head of business development of Alkemy. He specializes in the political economy of the European Union.", firstQuestion: "Favorite quote?", firstResponse: '"We can only see a short distance ahead, but we can see plenty there that needs to be done" - Alan Turing', secondQuestion: "", secondResponse: "The ideational genesis of the universal Turing machine and modern computing can be traced to our ability to disentangle the intractable from the impossible and to thus assemble the increments that cumulatively construct our future."},
        {name: "Elie Sidransky", title: "Partner", image: "elie01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Elie description lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum. Nam et sapien id enim lobortis viverra eget a arcu. Donec vitae mi in.", firstQuestion: "Favorite movie?", firstResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum.", secondQuestion: "Favorite quote?", secondResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum."},
        {name: "Vishesh Choudhry", title: "Partner", image: "vishesh01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Vishesh studied Biology and Computer Science at UVA and is the Product Manager and CVO of Alkemy. He specializes in AI, algorithms, systems biology, and neuroscience.", firstQuestion: "Favorite quote?", firstResponse: '"Talent hits a target no one else can hit; Genius hits a target no one else can see." - Arthur Schopenhauer', secondQuestion: "Favorite movie?", secondResponse: "My favorite movie is Interstella 5555, the French animated soundtrack to Daft Punkâ€™s Discovery album released in 2003 as it contains my favorite song 'Digital Love'."},
        {name: "Luka Marcich", title: "Associate", image: "luka01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Luka is a 4th-year student at the University of Virginia studying finance and mathematics. He has internship experience in economic/litigation consulting, specifically with regards to IP litigation.", firstQuestion: "Favorite movie?", firstResponse: "Zoolander", secondQuestion: "Most disruptive technology in the next 20 years?", secondResponse: "Genetic engineering"},
        {name: "Jake Kosloski", title: "Associate", image: "jake01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Jake is a fourth year undergraduate Systems and Information Engineering major.  In his free time he enjoys sailing, acting as Vice President of his fraternity Phi Society and serving as the Vice Chairman for Trials on the Inter Fraternity Council Judiciary Committee.", firstQuestion: "Choose one historical figure to be your mentor-- who and why?", firstResponse: "JFK.  Best combination of a great president and someone you'd want to hang out with.", secondQuestion: "Which Game Of Thrones character are you?", secondResponse: "Rob Stark. I stick to my principles and trust people to a fault. "},
        {name: "Eli Evans", title: "Associate", image: "eli01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Eli Evans is a third-year student at the University of Virginia studying European economic history.", firstQuestion: "Most disruptive technology in the next 20 years?", firstResponse: "Without a doubt automated personal and commercial transportation. From self driving cars and freight to automated drones. It will change the way physical places and products are thought about.", secondQuestion: "Choose one historical figure to be your mentor-- who and why?", secondResponse: "Charlemagne. It takes a lot to reunite medieval Europe after over 300 year of chaos."},
        {name: "Will DeCesare", title: "Associate", image: "will01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Will is a fourth-year student at the University of Virginia studying economics and environmental science. His passion lies in entrepreneurship and renewable energy, and he plans on starting his own renewable energy firm in the distant future.", firstQuestion: "Favorite fictional character and why? ", firstResponse: "Michael Corleone from Mario Puzo's 'The Godfather' represents a loyal yet cunning leader who draws respect from his peers. His ability to switch from a high intensity demeanor to a loving family member instantaneously keeps the viewer on edge throughout the movie.", secondQuestion: "Favorite quote?", secondResponse: "Hold fast to dreams For if dreams die Life is a broken-winged bird That cannot fly.  -Langston Hughes"},
        {name: "Nojan Rostami", title: "Associate", image: "nojan01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Nojan Rostami is a student at the University of Virginia studying Foreign Affairs and History. His academic and professional interests are at the crossroads of nation building and entrepreneurship. In the future he hopes to work with entrepreneurs to rebuild economies destroyed by war and revolution.", firstQuestion: "Choose one historical figure to be your mentor-- who and why? ", firstResponse: "Charles Talleyrand, Napoleon's Minister of Foreign Affairs. One of the most skilled diplomats to ever live.", secondQuestion: "Favorite book or movie?", secondResponse: "Favorite book is Henderson the Rain King. Favorite movie is 2001: A Space Odyssey"},
        {name: "Chris Huang", title: "Associate", image: "chris01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Chris Huang received his M.S. in Accounting from UVA and is now a CPA candidate.", firstQuestion: "Favorite quote?", firstResponse: '"I can accept failure, everyone fails at something. But I cant accept not trying" - Michael Jordan', secondQuestion: "Favorite movie?", secondResponse: "My favorite movie is Interstellar. Wouldn't it be awesome if you could alter your past and future?"},
        {name: "Rachel Vadhan", title: "Associate, Focus: Human Capital", image: "placeholder-color.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum. Nam et sapien id enim lobortis viverra eget a arcu. Donec vitae mi in.", firstQuestion: "Favorite movie?", firstResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum.", secondQuestion: "Favorite quote?", secondResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum."},
        {name: "Roger Zhang", title: "Associate, Focus: Human Capital", image: "roger01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Roger is passionate about economics and accounting. He also has entrepreneurial spirit, as indicated by his own summer camp business.", firstQuestion: " One question you would want to know before you die?", firstResponse: "What will the world look like after 100 years of my death? I am really curious about human beings' advancement in technology and science.", secondQuestion: "Favorite quote?", secondResponse: "Think differently. This quote is from an apple's ad in 1997. It's those people who think different push human race forward."},
        {name: "Lucas Czarnecki", title: "Associate, Focus: Design", image: "lucas01.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum. Nam et sapien id enim lobortis viverra eget a arcu. Donec vitae mi in.", firstQuestion: "Favorite movie?", firstResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum.", secondQuestion: "Favorite quote?", secondResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum."},
        {name: "Tyler Andreson", title: "Associate, Focus: Design", image: "placeholder-color.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum. Nam et sapien id enim lobortis viverra eget a arcu. Donec vitae mi in.", firstQuestion: "Favorite movie?", firstResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum.", secondQuestion: "Favorite quote?", secondResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum."},
        {name: "Anne Owen", title: "Associate, Focus: Design", image: "placeholder-color.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum. Nam et sapien id enim lobortis viverra eget a arcu. Donec vitae mi in.", firstQuestion: "Favorite movie?", firstResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum.", secondQuestion: "Favorite quote?", secondResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum."},
        {name: "Brittany Fan", title: "Associate, Focus: Design", image: "placeholder-color.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum. Nam et sapien id enim lobortis viverra eget a arcu. Donec vitae mi in.", firstQuestion: "Favorite movie?", firstResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum.", secondQuestion: "Favorite quote?", secondResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum."},
        {name: "Jonah Tobias", title: "Associate, Focus: Graphics & Animation", image: "placeholder-color.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum. Nam et sapien id enim lobortis viverra eget a arcu. Donec vitae mi in.", firstQuestion: "Favorite movie?", firstResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum.", secondQuestion: "Favorite quote?", secondResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum."},
        {name: "Brian Foote", title: "Associate, Focus: Web Dev", image: "placeholder-color.jpg", email:"", twitter: "http://www.twitter.com/alkemyinc", linkedin: "", description: "Brian has over 10 years experience as a Web and Application Development. He creates data-driven web-apps and digital dashboards that interface with the cloud, using the latest technologies.", firstQuestion: "Favorite movie?", firstResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum.", secondQuestion: "Favorite quote?", secondResponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ante ipsum."}
    ];

    $scope.selectedPerson = {};

    $scope.hasMoved =  $scope.logoHasFadedUp = $scope.wordLeftHasFadedUp = false;
    $scope.wordRightHasFadedUp = $scope.logoHasMovedRight = $scope.hasFaded = false;
    $scope.overlayHasFadedDown = false;
    $scope.siteHasFadedUp = false;
    $scope.tab = 1;
    $scope.subnav = 1;

    $scope.tabCategories = [
        {number: 1, name: "Home", isSelected: true},
        {number: 2, name: "Family", isSelected: false},
        {number: 3, name: "Friends", isSelected: false},
		{number: 4, name: "Supervisors", isSelected: false},
        {number: 5, name: "Professors", isSelected: false},
        {number: 6, name: "Inspiration", isSelected: false},
		{number: 7, name: "Companies", isSelected: false},
		{number: 8, name: "Universities", isSelected: false}
    ];

    $scope.tabOneScaledUp = $scope.tabTwoScaledUp = $scope.tabThreeScaledUp = $scope.tabFourScaledUp = $scope.tabFiveScaledUp = $scope.tabSixScaledUp = $scope.tabSevenScaledUp = $scope.tabEightScaledUp = false;

    $scope.personOneFadedUp = $scope.personTwoFadedUp = $scope.personThreeFadedUp = $scope.personFourFadedUp = false;
    $scope.personFiveFadedUp = $scope.personSixFadedUp = $scope.personSevenFadedUp = $scope.personEightFadedUp = false;
    $scope.personNineFadedUp = $scope.personTenFadedUp = $scope.personElevenFadedUp = $scope.personTwelveFadedUp = false;
    $scope.personThirteenFadedUp = $scope.personFourteenFadedUp = $scope.personFifteenFadedUp = $scope.personSixteenFadedUp = false;
    $scope.personSeventeenFadedUp = $scope.personEighteenFadedUp = false;

    $scope.moveLogo = function() {
        $scope.hasMoved = !$scope.hasMoved;
    };
    $scope.moveLogoRight = function() {
        $scope.logoHasMovedRight = ! $scope.logoHasMovedRight;
    };
    $scope.fadeUpLogo = function() {
        $scope.logoHasFadedUp = !$scope.logoHasFadedUp;
    };
    $scope.fadeUpLeftWord = function() {
        $scope.wordLeftHasFadedUp = !$scope.wordLeftHasFadedUp;
    };
    $scope.fadeUpRightWord = function() {
        $scope.wordRightHasFadedUp = !$scope.wordRightHasFadedUp;
        $scope.overlayHasFadedDown = !$scope.overlayHasFadedDown;
    };
    $scope.fadeUpSubtitle = function() {
        $scope.hasFaded = !$scope.hasFaded;
    };
    $scope.fadeUpWebsite = function() {
        $scope.siteHasFadedUp = !$scope.siteHasFadedUp;
    };

    $scope.selectSubnavPage = function (item) {
        $scope.subnav = item.number;
        angular.forEach($scope.subnavCategories, function (value) {
            value.isSelected = false;
        });
        $timeout(function () {
            item.isSelected = true;
        }, 100);
    };

    $scope.selectPageTab = function (tab, item) {

        $scope.tab = tab.number;
        angular.forEach($scope.tabCategories, function (value) {
            value.isSelected = false;
        });
        $timeout(function () {
            tab.isSelected = true;
            console.log("dsfdfsdf");
            console.log(item);
        }, 100);
    };

    $scope.changeNavTitle = function(tab) {
        switch (tab) {
            case 1:
                $scope.tabOneScaledUp = !$scope.tabOneScaledUp;
                break;
            case 2:
                $scope.tabTwoScaledUp = !$scope.tabTwoScaledUp;
                break;
            case 3:
                $scope.tabThreeScaledUp = !$scope.tabThreeScaledUp;
                break;
            case 4:
                $scope.tabFourScaledUp = !$scope.tabFourScaledUp;
                break;
            case 5:
                $scope.tabFiveScaledUp = !$scope.tabFiveScaledUp;
                break;
            case 6:
                $scope.tabSixScaledUp = !$scope.tabSixScaledUp;
                break;
            case 7:
                $scope.tabSevenScaledUp = !$scope.tabSevenScaledUp;
                break;
            case 8:
                $scope.tabEightScaledUp = !$scope.tabEightScaledUp;
                break;
        }
    };

    $scope.changePeopleTitle = function(person) {
        switch (person) {
            case 1: $scope.personOneFadedUp = !$scope.personOneFadedUp; break;
            case 2: $scope.personTwoFadedUp = !$scope.personTwoFadedUp; break;
            case 3: $scope.personThreeFadedUp = !$scope.personThreeFadedUp; break;
            case 4: $scope.personFourFadedUp = !$scope.personFourFadedUp; break;
            case 5: $scope.personFiveFadedUp = !$scope.personFiveFadedUp; break;
            case 6: $scope.personSixFadedUp = !$scope.personSixFadedUp; break;
            case 7: $scope.personSevenFadedUp = !$scope.personSevenFadedUp; break;
            case 8: $scope.personEightFadedUp = !$scope.personEightFadedUp; break;
            case 9: $scope.personNineFadedUp = !$scope.personNineFadedUp; break;
            case 10: $scope.personTenFadedUp = !$scope.personTenFadedUp; break;
            case 11: $scope.personElevenFadedUp = !$scope.personElevenFadedUp; break;
            case 12: $scope.personTwelveFadedUp = !$scope.personTwelveFadedUp; break;
            case 13: $scope.personThirteenFadedUp = !$scope.personThirteenFadedUp; break;
            case 14: $scope.personFourteenFadedUp = !$scope.personFourteenFadedUp; break;
            case 15: $scope.personFifteenFadedUp = !$scope.personFifteenFadedUp; break;
            case 16: $scope.personSixteenFadedUp = !$scope.personSixteenFadedUp; break;
            case 17: $scope.personSeventeenFadedUp = !$scope.personSeventeenFadedUp; break;
            case 18: $scope.personEighteenFadedUp = !$scope.personEighteenFadedUp; break;
        }
    };

    $timeout( function(){ $scope.fadeUpLogo(); }, 200);
    $timeout( function(){ $scope.moveLogo(); }, 2000);
    $timeout( function(){ $scope.moveLogoRight(); }, 2000);
    $timeout( function(){ $scope.fadeUpLeftWord(); }, 2250);
    $timeout( function(){ $scope.fadeUpRightWord(); }, 2350);
    $timeout( function(){ $scope.fadeUpWebsite(); }, 3000);


    $scope.open = function (person) {
        $scope.selectedPerson = $scope.team[person-1];
        console.log($scope.selectedPerson);

		
        var modalInstance = $uibModal.open({
            templateUrl: 'pageContent.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                selectedPerson: function() {
					return $scope.selectedPerson;
                }
            }
			
        });
		
		modalInstance.result.then(function () {
		  
		}, function () {
		  console.log('Modal dismissed at: ' + new Date());
		});
		
    };

});

app.directive('social', function(){
    return {
        restrict: 'E',
        scope: {
            email: '@',
            linkedin: '@',
            twitter: '@'
        },
        templateUrl: 'social.html'
    }
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, selectedPerson) {

    $scope.selectedPerson = selectedPerson;


    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});



app.directive("moveDivRight", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.moveDivRight, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "slideRight");
            } else {
                $animate.removeClass(element, "slideRight");
            }
        });
    };
});

app.animation(".slideRight", function() {
    return {
        addClass: function(element) {
            TweenMax.to(element, 3.8, {x: 175, ease: Power3.easeOut});
        },
        removeClass: function(element) {
            TweenMax.to(element, 3.8, {x: 0, ease: Power3.easeOut});
        }
    };
});

app.directive("moveLogoRight", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.moveLogoRight, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "slideLogoRight");
            } else {
                $animate.removeClass(element, "slideLogoRight");
            }
        });
    };
});

app.animation(".slideLogoRight", function() {
    return {
        addClass: function(element) {
            TweenMax.to(element, 2, {x: 50, ease: Power3.easeOut});
        },
        removeClass: function(element) {
            TweenMax.to(element, 2, {x: 0, ease: Power3.easeOut});
        }
    };
});

app.directive("moveDivLeft", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.moveDivLeft, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "slideLeft");
            } else {
                $animate.removeClass(element, "slideLeft");
            }
        });
    };
});

app.animation(".slideLeft", function() {
    return {
        addClass: function(element) {
            TweenMax.to(element, 2, {x: -205, ease: Power3.easeOut});
        },
        removeClass: function(element) {
            TweenMax.to(element, 2, {x: 0, ease: Power3.easeOut});
        }
    };
});

app.directive("fadeDivUp", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.fadeDivUp, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "fadeUp");
            } else {
                $animate.removeClass(element, "fadeUp");
            }
        });
    };
});

app.directive("fadeLogoUp", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.fadeLogoUp, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "fadeUp");
            } else {
                $animate.removeClass(element, "fadeUp");
            }
        });
    };
});

app.directive("fadeWordsUp", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.fadeWordsUp, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "fadeUp");
            } else {
                $animate.removeClass(element, "fadeUp");
            }
        });
    };
});

app.directive("fadePersonTitle", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.fadePersonTitle, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "fadeUpFast");
            } else {
                $animate.removeClass(element, "fadeUpFast");
            }
        });
    };
});

app.directive("fadeUpSite", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.fadeUpSite, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "fadeUpFast");
            } else {
                $animate.removeClass(element, "fadeUpFast");
            }
        });
    };
});

app.animation(".fadeUp", function() {
    return {
        addClass: function(element) {
            TweenMax.to(element, 2.8, {opacity: 1});
        },
        removeClass: function(element) {
            TweenMax.to(element, 2.8, {opacity: 0});
        }
    };
});

app.animation(".fadeUpFast", function() {
    return {
        addClass: function(element) {
            TweenMax.to(element,.4, {opacity: 1});
        },
        removeClass: function(element) {
            TweenMax.to(element,.4, {opacity: 0});
        }
    };
});



app.directive("fadeOverlayDown", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.fadeOverlayDown, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "fadeDown");
            } else {
                $animate.removeClass(element, "fadeDown");
            }
        });
    };
});

app.animation(".fadeDown", function() {
    return {
        addClass: function(element) {
            TweenMax.to(element,.5, {opacity: 0, ease: Power3.easeOut});
        },
        removeClass: function(element) {
            TweenMax.to(element,.5, {opacity: 1, ease: Power3.easeOut});
        }
    };
});


app.directive("scaleTab", function($animate) {
    return function(scope, element, attrs) {
        console.log(element);

        scope.$watch(attrs.scaleTab, function(newVal) {

            console.log("attrs");
            console.log(attrs);
            console.log("scaleTab");
            console.log(attrs.scaleTab.tabThreeScaledUp);
            console.log("ngClass selected");
            console.log(attrs.ngClass.selected);
            console.log("newVal");
            console.log(newVal);
            if (newVal) {
                $animate.addClass(element, "scaleUp");
            } else {
                $animate.removeClass(element, "scaleUp");
            }
        });
    };
});

app.directive("colorUpPerson", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.colorUpPerson, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "colorUpImage");
            } else {
                $animate.removeClass(element, "colorUpImage");
            }
        });
    };
});

app.animation(".scaleUp", function() {
    return {
        addClass: function(element) {
            TweenMax.to(element,.3, {scale: 1.05, ease: Power3.easeOut});
        },
        removeClass: function(element) {
            TweenMax.to(element,.3, {scale: 1, ease: Power3.easeOut});
        }
    };
});

app.animation(".colorUpImage", function() {
    return {
        addClass: function(element) {
            TweenMax.to(element, 4, {className:"+=grayscale"});
        },
        removeClass: function(element) {
            TweenMax.to(element, 4, {className:"-=grayscale"});
        }
    };
});





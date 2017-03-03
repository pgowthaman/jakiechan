var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'HavFun_home/home.html',
    controller  : 'UserController'
  })
.when('/chat', {
    templateUrl : 'HavFun_chat/chat.html',
    controller  : 'ChatController'
  })
  .when('/logout', {
    templateUrl : 'HavFun_user/logout.html',
    controller  : 'UserController'
  })
  .when('/search_job', {
    templateUrl : 'HavFun_job/search_job.html',
    controller  : 'JobController'
  })
 .when('/post_job', {
    templateUrl : 'HavFun_job/post_job.html',
    controller  : 'JobController'
  })
  .when('/list_blog', {
    templateUrl : 'HavFun_blog/list_blog.html',
    controller  : 'BlogController'
  })
   .when('/blog', {
    templateUrl : 'HavFun_blog/blog.html',
    controller  : 'BlogController'
  })
  .when('/create_blog', {
    templateUrl : 'HavFun_blog/create_blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'HavFun_home/about.html',
    controller  : 'AboutController'
  })
   .when('/view_blog', {
    templateUrl : 'HavFun_blog/view_blog.html',
    controller  : 'BlogController'
  })
  .when('/login', {
    templateUrl : 'HavFun_user/login.html',
    controller  : 'UserController'
  })
 .when('/register', {
    templateUrl : 'HavFun_user/register.html',
    controller  : 'UserController'
  })
  .when('/search_friend', {
    templateUrl : 'HavFun_friend/search_friend.html',
    controller  : 'FriendController'
  })
  .when('/friendRequest', {
    templateUrl : 'HavFun_friend/friend_request.html',
    controller  : 'FriendController'
  })


  .otherwise({redirectTo: '/'});
});

app.run(function ($rootScope, $location, $cookieStore, $http){

	$rootScope.$on('$locationChangeStart', function(event, next, current){
	console.log("$locationChangeStart")
	//redirect to login page if not logged in and typing to access a restricted page

	var restrictedPage=$.inArray($location.path(), ['/login','/register']) ===-1;
	console.log("restrictedPage:" +restrictedPage)
	var loggedIn=$rootScope.currentUser.userid;
	console.log("loggedIn:"+loggedIn)
	if(restrictedPage & !loggedIn){
	console.log("Navigating to login page:")
	alert("You are not logged and so you can't do this operation")
	$location.path('/login');
	}
	});

	//keep user logged in after page refresh
	$rootScope.currentUser = $cookieStore.get('currentUser') || {};
	if($rootScope.currentUser){
	$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.currentUser;
	
	}
	});
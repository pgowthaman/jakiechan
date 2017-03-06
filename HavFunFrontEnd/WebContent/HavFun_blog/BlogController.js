'use strict';
console.log(" start of blogController...")
app
		.controller(
				'BlogController',
				[
						'$scope',
						'BlogService',
						'$location',
						'$rootScope',
						
						'$http',
						function($scope, BlogService, $location, $rootScope,
								$http) {
							console.log("inside BlogController...")
							var self = this;
							self.Blog = {
								userid : '',
								 id : '',
								title: '',
								description: '',
								status : '',
								reason : '',
								errorcode : '',
								errormessage : ''
							};
							self.blogs = [];

							self.fetchAllBlogs = function() {
								console.log("fetching all blogs method in controller......")
								BlogService
										.fetchAllBlogs()
										.then(
												function(d) {
													self.blogs = d;
												},
												function(errResponse) {
													console
															.error('Error while fetching Users');
												});
							};
							self.fetchAllBlogs = function() {
								console.log("fetch a single Blogs...")
								BlogService
										.fetchAllBlogs()
										.then(
												function(d) {
													self.blogs = d;
												},
												function(errResponse) {
													console
															.error('Error while fetching Users');
												});
							};
							
							//self.fatchAllUsers();

							self.createBlog = function(Blog) {
								console.log("creating all blog method in controller......")
								BlogService
										.createBlog(Blog)
										.then(
												self.fetchAllUsers,
												function(errResponse) {
													console
															.error('Error while creating Blog.');
													}	
										);
							};
							self.getSelectedBlog = function(id) {
								console.log("calling get Selected Blog controller....")
								BlogService
										.getSelectedBlog(id)
										.then(
												function(d) {
													self.blogs = d;},
												function(errResponse) {
													console
															.error('Error while getting a single blog...');
												}	
										);
								$location("/blog");
							};
							
							
							self.submit = function() {
								{
									console.log('submit blog method in controller..........', self.Blog);
									self.createBlog(self.Blog);
								}
								self.reset();
							};

							self.reset = function() {
								self.Blog = {
										userid : '',
										id : '',
										title: '',
										description: '',
										status : '',
										reason : '',
										errorcode : '',
										errormessage : ''
								};
								$scope.myForm.$setPristine(); // reset Form
							};

							self.fetchAllBlogs();
						} ]);
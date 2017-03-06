'use strict';
 
app.factory('BlogService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("BlogService...")
	
	var BASE_URL='http://localhost:8020/HavFunBackEnd'
		
    return {
         
            fetchAllBlogs: function() {
            	console.log("fetching all blogs in service ........ ")
                    return $http.get(BASE_URL+'/blogs')
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while fetching all bllogs in service.........');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
            
             
            createBlog: function(Blog){
            	console.log("inside create blog in service ................")
                    return $http.post(BASE_URL+'/createblogs/', Blog)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while creating blog in service.......');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
            getSelectedBlog: function(id){
            	console.log("calling get Selected blog service")
                    return $http.get(BASE_URL+'/blog/'+id)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while creating user');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
        
            
           
         
    };
 
}]);
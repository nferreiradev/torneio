/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Example user';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

};

function TorneioCtrl($scope,DTOptionsBuilder) {
	 $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDOM('<"html5buttons"B>lTfgitp')
        .withButtons([
            {extend: 'copy'},
            {extend: 'csv'},
            {extend: 'excel', title: 'ExampleFile'},
            {extend: 'pdf', title: 'ExampleFile'},

            {extend: 'print',
                customize: function (win){
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');

                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
        ]);

        function search(searchValue){
            //default search by name
            var url = "api/api.php/torneio"
            $http.get(url).success(function(data) {
                $scope.torneio = data;
            });

        }


    /**
     * torneio - Dados da tabela de torneio
     */
    $scope.torneio = [
        {id_torneio: '1', nomtorneio: '11', dataini: 'qqq'},
        {id_torneio: '2', nomtorneio: 'asdasd', dataini: 'qqq'},
        {id_torneio: '3', nomtorneio: 'asdfadfafa  afs', dataini: 'qqq'},

    ];
    //var url = 'api/api.php/torneio';
    //$http.get(url)
    //	.success(function(data){
    //		$scope.torneio = data; // php_crud_api_transform(data);
    //	});
}


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
    .controller('TorneioCtrl', TorneioCtrl)
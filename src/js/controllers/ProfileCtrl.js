import _                    from 'lodash';

export default (ngModule) =>
    ngModule.controller('ProfileCtrl', ($scope, UserFactory, ActivitiesFactory) => {

        $scope.activities = [];
        $scope.activitiesList = [];
        $scope.activeActivity = {};

        UserFactory.profile().then( data => {
            $scope.activities = data.activities;
        });

        $scope.selectActive = (activity) => {
            if ( !activity.view ) $scope.activeActivity = activity;
        };

        $scope.remove = (activity) => {
            ActivitiesFactory.remove(activity).then( data => {
                // Remove activity from the list
                _.each($scope.activities, items => {
                    _.remove(items.items, item => item.category.id == activity.category_id);
                });
            });
        };

        $scope.$watch('activities', (newActivities) => {
            let localActivityList = [];

            _.each(newActivities, newActivity => {
                // Add label
                localActivityList.push({
                    date: newActivity.date,
                    view: 'label'
                });

                // Add data
                _.each(newActivity.items, item => localActivityList.push(item));
            });

            $scope.activitiesList = localActivityList;

            console.log('$scope.activitiesList: ', $scope.activitiesList);
        }, true);

    });

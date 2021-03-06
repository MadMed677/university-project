import _                    from 'lodash';
import d3                   from 'd3';
import c3                   from 'c3';

export default (ngModule) =>
    ngModule.directive('pieChart', (UserFactory, $rootScope, $state) => {
        return {
            restrict: 'E',
            scope: {
                activities: '=',
                prevDay: '&',
                nextDay: '&',
                disabled: '='
            },
            template: require('./pie-chart.html'),
            link: function(scope, element) {

                // Create 'pie chart'
                let chart = c3.generate({
                    bindto: '#chart',
                    data: {
                        type: 'pie',
                        columns: [],
                        onclick: () => $state.go('profile')
                    },
                    tooltip: {
                        show: true,
                        format: {
                            name: name => name,
                            value: (value, ratio) => value == 1 ? `${value} hour` : `${value} hours`
                            // value: (value, ratio) => `${ratio*100}%`
                        }
                    },
                    pie: {
                        label: {
                            // format: (value, ratio, id) => return `${id} | ${ratio*100}%`
                        }
                    }
                });

                scope.$watch('activities', (activities) => {

                    console.warn('activities changed', activities);

                    let array = [];
                    _.each(activities, (activity) => {
                        array.push([
                            activity.category.title,
                            activity.hours
                        ]);
                    });

                    // Unload data from chart
                    _.each(array, items => chart.unload({ ids: items[0] }));

                    // Load data to the chart
                    chart.load({ columns: array });

                }, true);

            }
        };
    });

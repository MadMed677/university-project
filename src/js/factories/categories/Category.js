import _                from 'lodash';
import Request          from '../../helpers/_api.js';

export default (ngModule) =>
    ngModule.factory('CategoryFactory', ($http, $q) => {
        const url = 'api/v1/categories';

        return {
            all() {
                const deffered = $q.defer();
                const request = new Request.http({
                    method: 'GET',
                    url: `${url}`
                });

                // Ждем, когда придут данные
                request.then( (data) => {
                    // Если все ok
                    if ( data.status === 200 ) {
                        deffered.resolve(data.data);
                    } else {
                        deffered.reject();
                    }
                });

                return deffered.promise;
            }
        };
    });

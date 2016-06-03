﻿namespace ConferenceApp.Controllers {

    export class ConferenceManageController {
        public conferences;
        public firstConference;
        public toolbarTitle;

        constructor($http: ng.IHttpService, private accountService: ConferenceApp.Services.AccountService) {

            accountService.toolbarTitle = "Manage Conferences";

            $http.get('/api/conferences/manage')
                .then((response) => {
                    this.conferences = response.data;
                    this.firstConference = [this.conferences[0]];
                    //console.log(response.data);
                })
                .catch((response) => {
                    console.log(response.data);
                });


        }
    }

}
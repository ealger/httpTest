"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getData = function () {
        return this.http.get('http://internal-awsmldev1-elasticl-4p2mfzpekdx3-81851600.us-east-1.elb.amazonaws.com:8130/psycarticles/browse?&format=json&fl=PAJournalCode,Category,ISSN,JournalTitle,Editor,ImpactFactor,Society,LinkToSociety,Description,Year,Topics,LinkToMoreInfo,LinkToSubmitManuscript,ImageLinkLarge,ImageLinkSmall,JournalStatus,HasJournalHistory,HasOpenAccess,HasSpecialIssue,HasImpactStatement,SpecialIssueList&prefix=*')
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostService.prototype.extractData = function (res) {
        var JournalTitle = res.json();
        console.log(res);
        return JournalTitle || [];
    };
    PostService.prototype.handleError = function (error) {
        //  remote logging
        //  better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map
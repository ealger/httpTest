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
var core_1 = require('@angular/core');
var post_service_1 = require('./post.service');
var PostListComponent = (function () {
    function PostListComponent(_postDataService) {
        this._postDataService = _postDataService;
        this.posts = [];
        this.errorMessage = '';
        //should be moved to ngOnInit
        this.getPosts();
    }
    PostListComponent.prototype.getPosts = function () {
        var _this = this;
        this._postDataService.getData()
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    PostListComponent = __decorate([
        core_1.Component({
            selector: 'post-list',
            template: "\n        <div>\n            <ul class=\"items\">\n                <li *ngFor=\"let post of posts\">\n                    <span>{{post.res.response.result.doc[Post].JournalTitle}}</span>\n                </li>\n            </ul>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=post-list.components.js.map
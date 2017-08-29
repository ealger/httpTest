import {Component} from '@angular/core';
import {PostService} from  './post.service';
import {Post} from './post';

@Component({
    selector: 'post-list',
    template: `
        <div>
            <ul class="items">
                <li *ngFor="let post of posts">
                    <span>{{post.JournalTitle}}</span>
                </li>
            </ul>
        </div>
    `
})

export class PostListComponent {
    constructor(private _postDataService:PostService) {
        //should be moved to ngOnInit
        this.getPosts();
    }

    private posts: Post[]=[];
    private errorMessage: any = '';

    getPosts() {
        this._postDataService.getData()
            .subscribe(
                posts => {this.posts=posts.response.result.doc; console.log("posts=",posts.response.result.doc);},
                error => this.errorMessage = <any>error);
    }
}
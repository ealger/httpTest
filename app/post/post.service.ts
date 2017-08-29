import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';

@Injectable()
export class PostService {
    constructor(private http:Http) {
    }

    getData():Observable<Post[]> {
        return this.http.get('http://internal-awsmldev1-elasticl-4p2mfzpekdx3-81851600.us-east-1.elb.amazonaws.com:8130/psycarticles/browse?&format=json&fl=PAJournalCode,Category,ISSN,JournalTitle,Editor,ImpactFactor,Society,LinkToSociety,Description,Year,Topics,LinkToMoreInfo,LinkToSubmitManuscript,ImageLinkLarge,ImageLinkSmall,JournalStatus,HasJournalHistory,HasOpenAccess,HasSpecialIssue,HasImpactStatement,SpecialIssueList&prefix=*')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let JournalTitle = res.json();
        console.log(res);
        return JournalTitle || [];
    }

    private handleError(error:any) {
        //  remote logging
        //  better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
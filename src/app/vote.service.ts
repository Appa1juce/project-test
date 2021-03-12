import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  googleCivicElectionUrl: string =
    ' https://www.googleapis.com/civicinfo/v2/elections';
  googleCivicVoterUrl: string =
    'https://www.googleapis.com/civicinfo/v2/voterinfo';
  googleCivicKey: string = 'AIzaSyCZrdSe_JqUkQUnfZGL7LwtMWrQEBJl94M';
  openSecretsURL: string = 'http://www.opensecrets.org/api/';
  openSecretsKey: string = '2b4445207bd845e018970dfef01034ee';

  constructor(private http: HttpClient) {}

  getElections = () => {
    return this.http.get(this.googleCivicElectionUrl, {
      params: {
        key: this.googleCivicKey,
      },
    });
  };

  getVoterInfo = (address: string, electionId: string) => {
    return this.http.get(this.googleCivicVoterUrl, {
      params: {
        key: this.googleCivicKey,
        address: address,
        electionId: electionId,
      },
    });
  };

  getLegislators = (state: string) => {
    return this.http.get(this.openSecretsURL, {
      params: {
        apikey: this.openSecretsKey,
        method: 'getLegislators',
        id: state,
        output: 'json',
      },
    });
  };
}

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
     { id: 76746, name: 'Surya', skill: 'AWD', points: 12 },
  { id: 34212, name: 'John', skill: 'RICC', points: 6 },
  { id: 200211, name: 'Mark', skill: 'TRAC', points: 12 },
  { id: 65412, name: 'Sudheer', skill: 'TRAC Nightly', points: 3 },
  { id: 34342, name: 'Subbu', skill: 'D1IM', points: 19 },
  { id: 12125, name: 'Julia', skill: 'NDM', points: 12 },
  { id: 76543, name: 'katie', skill: 'Apigee', points: 4},
  { id: 87789, name: 'Dr IQ', skill: 'Dev Server', points: 7 },
  { id: 45312, name: 'Magma' , skill: 'Nightly', points: 8},
  { id: 1272, name: 'Tornado', skill: 'AMS BSL', points: 1 }
    ];
    return {heroes};
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
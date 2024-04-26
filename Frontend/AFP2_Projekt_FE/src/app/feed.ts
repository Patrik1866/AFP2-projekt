export class Feed {
    constructor(
        public id?: number,
        public username?: string,
        public title?: string,
        public content?: string,
        public date?: Date,
        public feedCode?: string,
        public popup: boolean = false
      ) { }
  }
  
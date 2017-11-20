export class UpdateItem {
// updateItem  title: string;
//   version: string;
//   date: string;
//   bulletPoints: string[]=[];

  constructor (private title, private version: string, private date: string, private bulletPoints: string[]) {
    this.bulletPoints=[];
  }
  add(bulletpoint: string) {
    this.bulletPoints.push(bulletpoint);
  }
}

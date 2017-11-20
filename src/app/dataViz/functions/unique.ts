// Based on http://stackoverflow.com/questions/1960473/unique-values-in-an-array
export function unique(x: any[]):any[] {
    return x.filter((d, i, self) => self.indexOf(d) === i);
};

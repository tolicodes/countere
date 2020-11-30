export const items = [{
    title: '“Leave Society”: An Interview With Tao Lin',
    link: 'http://tbd.com',
    image: 'https://static1.squarespace.com/static/5f9f625ebb288273ba51c6ec/t/5fb7cfa8579d1f4404f938af/1605881832634/tao-lin.png?format=1500w',
    caption: 'We interviewed the elusive author about his new novel “Leave Society” and discussed the mystic.'
}, {
    title: 'Sample Story 2',
    link: 'http://tbd.com',
    image: 'https://static1.squarespace.com/static/5f9f625ebb288273ba51c6ec/t/5fc3bd3a5147b14804a50df8/1606664221885/sitting-on-utah-monolith.jpeg?format=1500w',
    caption: 'This week, a mysterious Monolith was discovered in the Utah desert. Its remote location and extraterrestrial-seeming origin immediately garnered worldwide headlines.'
}];

export interface Item {
    image: string;
    link: string;
    title: string;
    caption: string;   
}

export interface Items {
    items: ReadonlyArray<Item>;
}

export interface RawItem {
    authorId: string
    author: {
        id: string
        displayName: string
    }
}
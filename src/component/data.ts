const containers = Array.from({ length: 9 }, (_, i) =>
  require(`../images/bloqsImg/container${i === 0 ? '' : i}.png`)
);

const [
  Container,
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  Container8,
] = containers;

interface GridItem {
  Component: string;
  prop: string;
  img: string;
}

export const gridData: GridItem[] = [
  {
    Component: 'Grid1',
    prop: 'Container',
    img: Container,
  },
  {
    Component: 'Grid2',
    prop: 'Container2',
    img: Container1,
  },
  {
    Component: 'Grid3',
    prop: 'Container3',
    img: Container2,
  },
  {
    Component: 'Grid4',
    prop: 'Container4',
    img: Container3,
  },
  {
    Component: 'Grid5',
    prop: 'Container5',
    img: Container4,
  },
  {
    Component: 'Grid6',
    prop: 'Container6',
    img: Container5,
  },
  {
    Component: 'Grid7',
    prop: 'Container7',
    img: Container6,
  },
  {
    Component: 'Grid8',
    prop: 'Container8',
    img: Container7,
  },
  {
    Component: 'Grid9',
    prop: 'Container9',
    img: Container8,
  },
];

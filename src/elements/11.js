import v2 from '../vec2.js';
import v3 from '../vec3.js';
import hsluv from 'hsluv';

function hsl(...args)
{
  if(args.length === 1)
  {
    return hsluv.hsluvToHex([0, 0, args[0]]);
  }
  else if(args.length === 2)
  {
    return hsluv.hsluvToHex([args[0], 100, args[1]]);
  }
  else if(args.length === 3)
  {
    return hsluv.hsluvToHex(args);
  }
  else
  {
    console.error("# arguments for hsluv", args);
  }
}

import prop0 from './11/0';
import prop1 from './11/1';
import prop2 from './11/2';
import prop3 from './11/3';
import prop4 from './11/4';
import prop5 from './11/5';
import prop6 from './11/6';
import prop7 from './11/7';
import prop8 from './11/8';
import prop9 from './11/9';
import prop10 from './11/10';
import prop11 from './11/11';
import prop12 from './11/12';
import prop13 from './11/13';
import prop14 from './11/14';
import prop15 from './11/15';
import prop16 from './11/16';
import prop17 from './11/17';
import prop18 from './11/18';
import prop19 from './11/19';
import prop20 from './11/20';
import prop21 from './11/21';
import prop22 from './11/22';
import prop23 from './11/23';
import propl1 from './11/l1-23';
import prop24 from './11/24';
import prop25 from './11/25';
import prop26 from './11/26';
import prop27 from './11/27';
import prop28 from './11/28';
import prop29 from './11/29';
import prop30 from './11/30';
import prop31 from './11/31';
import prop32 from './11/32';
import prop33 from './11/33';
import prop34 from './11/34';
import prop35 from './11/35';
import prop36 from './11/36';
import prop37 from './11/37';
import prop38 from './11/38';
import prop39 from './11/39';

function book(rg)
{
  return [
function() {
  return {
    title: 'Definitions',
    id: '11.d',
    prose: prop0,
  };
},

function() {
  let y = {};
  [y.K, y.N, y.L, y.M] = [-1.2, 1.2].map(z => [-0.5, 0.5].map(x=>[x,0, z])).flat();
  y.B = v3.o;
  y.D = v3.s(v3.z, 0.7);
  y.A = v3.s(y.D, -1);
  y.C = v3.s(v3.y, -1.9);
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.9));
  f = f.map(d => v3.r(d, f[1], -0.3));
  f = f.map(d => v3.r(d, f[2], -0.4));
  for(let i in y)
  {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 1',
    id: '11.1',
    prose: prop1,
    points: z,
    letters: {
      A: [7],
      B: [7],
      D: [7],
      C: [1],
    },
    shapes: [
      rg.polygon([z.K, z.L, z.M, z.N]),
      rg.line(z.A, z.D),
      rg.line(z.B, z.C)
    ]
  };
},

function() {
  let z = {};
  z.E = v2.o;
  z.A = [-100, -100];
  z.D = [80, -100];
  [z.F, z.C] = [0.5, 1.5].map(s => v2.sub(z.E, v2.s(z.D, s)));
  [z.G, z.B] = [0.5, 1.5].map(s => v2.sub(z.E, v2.s(z.A, s)));
  [z.H, z.K] = [0.3, 0.6].map(s => v2.add(z.C, v2.s(v2.sub(z.B, z.C), s)));
  return {
    title: 'Proposition 2',
    id: '11.2',
    prose: prop2,
    points: z,
    letters: {
      A: [1],
      D: [1],
      C: [5],
      B: [5],
      F: [2, 0.5],
      G: [8],
      E: [7.2, 5],
      H: [5],
      K: [5]
    },
    shapes: [
      rg.line(z.A, z.B),
      rg.line(z.B, z.C),
      rg.line(z.C, z.D),
      rg.line(z.A, z.D),
      rg.line(z.H, z.F),
      rg.line(z.F, z.G),
      rg.line(z.G, z.K),
    ]
  };
},

function() {
  let y = {};
  [y.Q, y.P, y.R, y.A] = [-0.7, 0.7].map(y => [-1, 1].map(x => [x, y, 0])).flat();
  [y.M, y.L, y.C, y.K] = [-0.7, 0.7].map(y => [-1, 1].map(z => [0, y, z])).flat();
  y.B = v3.s(v3.y, -0.7);
  y.D = v3.s(y.B, -1);
  y.E = v3.s(v3.x, 0.15);
  y.F = v3.s(v3.z, -0.2);
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[1], -0.6));
  f = f.map(d => v3.r(d, f[0], -0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 3',
    id: '11.3',
    prose: prop3,
    points: z,
    letters: {
      A: [5],
      B: [1.1],
      C: [5],
      D: [5.2],
      E: [7],
      F: [3],
    },
    shapes: [
      rg.polygon([z.A, z.P, z.Q, z.R]),
      rg.polygon([z.C, z.K, z.L, z.M]),
      rg.line(z.B, z.D),
      rg.curve([z.B,z.E,z.D]),
      rg.curve([z.B,z.F,z.D]),
    ]
  };
},

function() {
  let y = {};
  [y.K, y.L, y.N, y.M] = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  y.E = v3.o;
  y.B = [0.5, 0, -0.5];
  y.D = v3.rot([-0.5, 0, -0.5], v3.y, -0.2);
  y.C = v3.s(y.D, -1);
  y.A = v3.s(y.B, -1);
  y.H = v3.add(y.B, v3.s(v3.sub(y.C, y.B), 0.5));
  y.G = v3.add(y.D, v3.s(v3.sub(y.A, y.D), 0.5));
  y.F = [0, -1.5, 0];
  let z = {};

  let f = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  f = f.map(d => v3.rot(d, f[0], -0.7));
  f = f.map(d => v3.rot(d, f[1], -0.1));
  for(let i in y) {
    let s = f.map(d => v3.dot(d, y[i]));
    z[i] = [s[0]*150, s[1]*150];
  }
  return {
    title: 'Proposition 4',
    id: '11.4',
    prose: prop4,
    points: z,
    letters: {
      F: [1],
      A: [3],
      G: [3],
      D: [3],
      B: [7],
      H: [7],
      C: [7],
      E: [5]
    },
    shapes: [
      rg.polygon([z.K, z.L, z.M, z.N]),
      ...[z.E, z.A, z.G, z.D, z.B, z.H, z.C].map(p=> rg.line(p, z.F)),
      rg.line(z.A, z.D),
      rg.line(z.D, z.C),
      rg.line(z.C, z.B),
      rg.line(z.A, z.B),
      rg.line(z.G, z.H),
      rg.line(z.B, z.C),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-0.5, 1.5].map(x => [x, 0, z])).flat();
  y.B = v3.o;
  y.D = v3.x;
  y.A = v3.s(v3.y, -1.3);
  y.E = v3.rot(y.D, v3.y, 0.5);
  y.F = v3.rot(y.D, v3.y, -1.2);
  y.C = v3.s(v3.z, 1.3);
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.7));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y) {
    let s = f.map(d => v3.dot(d, y[i]));
    z[i] = [s[0]*150, s[1]*150];
  }
  return {
    title: 'Proposition 5',
    id: '11.5',
    prose: prop5,
    points: z,
    letters: {
      A: [1],
      B: [5],
      C: [1],
      D: [7],
      E: [7],
      F: [7],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      ...[z.A, z.C, z.D, z.E, z.F].map(p => rg.line(z.B, p)),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-0.5, 1.5].map(x => [x, 0, z])).flat();
  y.D = v3.o;
  y.C = v3.s(v3.y, -1.5);
  y.B = v3.rot(v3.x, v3.y, -0.5);
  y.E = v3.s(v3.rot(v3.x, v3.y, 0.9), 0.7);
  y.A = v3.sub(y.B, v3.y);
  y.o = v3.o;
  y.x = v3.x;
  y.y = v3.y;
  y.z = v3.z;
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.rot(d, f[0], -0.7));
  f = f.map(d => v3.rot(d, f[1], -0.3));
  for(let i in y)
  {
    let s = f.map(d => v3.dot(d, y[i]));
    z[i] = [s[0] * 150, s[1]*150];
  }
  return {
    title: 'Proposition 6',
    id: '11.6',
    prose: prop6,
    points: z,
    letters: {
      A: [1],
      B: [7],
      C: [1],
      D: [3],
      E: [5],
    },
    shapes: [
      rg.line(z.D, z.C),
      rg.line(z.D, z.B),
      rg.line(z.D, z.E),
      rg.line(z.E, z.B),
      rg.line(z.A, z.B),
      ...[z.D, z.E, z.B].map(p => rg.line(z.A, p)),
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
    ],
  };
},

function() {
  let z = {};
  z.A = v2.o;
  z.B = [300, 0];
  z.C = [0, 150];
  z.D = [300, 150];
  z.E = [100, 0];
  z.F = [200, 150];
  z.G = v2.add([20, 0], v2.add(z.F, v2.s(v2.sub(z.E, z.F), 0.5)));
  return {
    title: 'Proposition 7',
    id: '11.7',
    prose: prop7,
    points: z,
    letters: {
      A: [1],
      E: [1],
      B: [1],
      C: [5],
      D: [5],
      F: [5],
      G: [8]
    },
    shapes: [
      rg.line(z.A, z.B),
      rg.line(z.C, z.D),
      rg.line(z.E, z.F),
      rg.curve([z.E, z.G, z.F]),
    ]
  };
},

function() {
  let y = {};
  y.B = v3.o;
  y.D = v3.x;
  y.E = v3.sub(y.D, v3.z);
  y.A = v3.s(v3.y, -1);
  y.C = v3.add(y.D, y.A);
  y.o = v3.o;
  y.x = v3.x;
  y.y = v3.y;
  y.z = v3.z;
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.rot(d, f[0], -0.5));
  f = f.map(d => v3.rot(d, f[1], -0.3));
  for(let i in y)
  {
    let s = f.map(d => v3.dot(d, y[i]));
    z[i] = [s[0]*200, s[1]*200];
  }
  return {
    title: 'Proposition 8',
    id: '11.8',
    prose: prop8,
    points: z,
    letters: {
      A: [1],
      B: [3],
      D: [7],
      E: [5],
      C: [1],
    },
    shapes: [
      rg.line(z.B, z.D),
      rg.line(z.D, z.E),
      rg.line(z.E, z.B),
      ...[z.B, z.D, z.E].map(p => rg.line(z.A, p)),
      rg.line(z.C, z.D),
    ]
  };
},

function() {
  let z = {};
  [z.B, z.H, z.A,
    z.F, z.G, z.E,
    z.D, z.K, z.C] = [0, 100, 200].map(y => [0, 200, 350].map(x => [x, y])).flat();
  z.G = v2.sub(z.G, v2.s(v2.x, 100));

  return {
    title: 'Proposition 9',
    id: '11.9',
    prose: prop9,
    points: z,
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [1],
      E: [1],
      F: [1],
      H: [1],
      G: [2],
      K: [5],
    },
    shapes: [
      rg.line(z.B, z.A),
      rg.line(z.F, z.E),
      rg.line(z.D, z.C),
      rg.line(z.H, z.G),
      rg.line(z.G, z.K)
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1.4, 0.5].map(z => [-0.3, 1.3].map(x=> [x, 0, z])).flat();
  [y.q1, y.q2, y.q4, y.q3] = [-1.3, 0.3].map(z => [-0.5, 1.5].map(x=> [x, 1.4, z])).flat();
  y.B = v3.o;
  y.A = v3.s(v3.z, -1);
  y.C = v3.x;
  [y.D, y.E, y.F] = [y.A, y.B, y.C].map(p => v3.add(p, v3.s(v3.y, 1.4)));
  y.o = v3.o;
  y.x = v3.x;
  y.y = v3.y;
  y.z = v3.z;
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
  {
    let s = f.map(d => v3.dot(d, y[i]));
    z[i] = [s[0] * 150, s[1] * 150];
  }
  return {
    title: 'Proposition 10',
    id: '11.10',
    prose: prop10,
    points: z,
    letters: {
      A: [3],
      B: [2],
      C: [8],
      D: [3],
      E: [3, 4],
      F: [7]
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.q1, z.q2, z.q3, z.q4]),
      rg.polygon([z.A, z.B, z.C]),
      rg.polygon([z.D, z.E, z.F]),
      rg.line(z.A, z.D),
      rg.line(z.B, z.E),
      rg.line(z.C, z.F),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1.3, 1].map(z => [-0.9, 1.1].map(x=> [x, 0, z])).flat();
  y.F = v3.o;
  y.A = v3.s(v3.y, -1);
  y.H = v3.r(v3.z, v3.y, 0.7);
  y.G = v3.s(y.H, -1);
  y.D = v3.s(v3.r(y.H, v3.y, Math.PI/2), 0.7);
  y.E = v3.s(y.D, -1);
  y.C = v3.add(y.D, v3.s(y.H, 0.5));
  y.B = v3.add(y.D, v3.s(y.H, -0.5));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
  {
    let s = f.map(d => v3.dot(d, y[i]));
    z[i] = [s[0]*150, s[1]*150];
  }
  return {
    title: 'Proposition 11',
    id: '11.11',
    prose: prop11,
    points: z,
    letters: {
      A: [1],
      B: [3],
      C: [7.3],
      D: [6],
      E: [8],
      F: [5],
      G: [3],
      H: [7]
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.line(z.B, z.C),
      rg.line(z.A, z.D),
      rg.line(z.D, z.E),
      rg.line(z.G, z.H),
      rg.line(z.A, z.F),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-0.7, 1.5].map(z => [-0.3, 1.4].map(x => [x, 0, z])).flat();
  y.A = v3.o;
  y.C = [1, 0, 1];
  y.B = v3.add(y.C, v3.s(v3.y, -1.5));
  y.D = v3.add(y.A, v3.s(v3.y, -1.5));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
  {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 12',
    id: '11.12',
    prose: prop12,
    points: z,
    letters: {
      A: [5],
      C: [5],
      B: [1],
      D: [1],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.line(z.A, z.D),
      rg.line(z.C, z.B),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  y.A = v3.o;
  y.E = [1, 0, -0.5];
  y.D = v3.s(y.E, -1);
  y.B = v3.s(v3.y, -1.5);
  y.C = v3.r(v3.y, v3.u(y.D), 3.5);
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
  {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 13',
    id: '11.13',
    prose: prop13,
    points: z,
    letters: {
      A: [5],
      B: [1],
      C: [8],
      D: [2],
      E: [6]
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.line(z.E, z.D),
      rg.line(z.A, z.B),
      rg.line(z.A, z.C),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  y.A = v3.o;
  y.B = v3.s(v3.y, 1.5);
  [y.q1, y.q2, y.q3, y.q4] = [y.p1, y.p2, y.p3, y.p4].map(p => v3.add(y.B, p));
  y.K = v3.add(v3.s(v3.y, 0.7), v3.s(v3.x, 3));
  y.G = v3.add(y.K, v3.s(v3.z, 2));
  y.H = v3.add(y.K, v3.s(v3.z, -2));
  y.E = y.q1;
  y.F = y.q3;
  y.C = y.p3;
  y.D = y.p1;
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
  return {
    title: 'Proposition 14',
    id: '11.14',
    prose: prop14,
    points: z,
    letters: {
      A: [1],
      B: [5],
      C: [8],
      D: [4],
      E: [4],
      F: [8],
      G: [1],
      H: [5],
      K: [6.5]
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.q1, z.q2, z.q3, z.q4]),
      rg.line(z.A, z.B),
      rg.line(z.A, z.K),
      rg.line(z.B, z.K),
      rg.line(z.G, z.H),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1.2, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  y.B = v3.o;
  y.C = v3.r(v3.x, v3.y, 0.9);
  y.A = v3.r(v3.x, v3.y, 2.3);
  y.G = v3.s(v3.y, 1.5);
  [y.q1, y.q2, y.q3, y.q4, y.H, y.K] = [y.p1, y.p2, y.p3, y.p4, y.A, y.C].map(p => v3.add(p, y.G));
  [y.D, y.E, y.F] = [y.H, y.G, y.K].map(p => v3.add(p, v3.s(v3.z, 0.5)));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 15',
    id: '11.15',
    prose: prop15,
    points: z,
    letters: {
      A: [3],
      B: [1],
      C: [7],
      D: [3],
      E: [1],
      F: [7],
      H: [3],
      G: [8],
      K: [7]
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.q1, z.q2, z.q3, z.q4]),
      rg.line(z.A, z.B),
      rg.line(z.B, z.C),
      rg.line(z.B, z.G),
      rg.line(z.H, z.G),
      rg.line(z.G, z.K),
      rg.line(z.D, z.E),
      rg.line(z.E, z.F),
    ]
  };
},

function() {
  let y = {};
  [y.A, y.p1, y.p2, y.B] = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  y.q = v3.s(v3.y, 1.5);
  y.E = v3.s(v3.x, -1);
  y.F = v3.x;
  [y.C, y.q1, y.q2, y.D, y.G, y.H] = [y.A, y.p1, y.p2, y.B, y.E, y.F].map(p => v3.add(y.q, p));
  y.K = v3.add(v3.s(v3.x, 3), v3.s(y.q, 0.5));
  y.o = v3.o;
  y.x = v3.x;
  y.y = v3.y;
  y.z = v3.z;

  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d,y[i])), 100);
  return {
    title: 'Proposition 16',
    id: '11.16',
    prose: prop16,
    points: z,
    letters: {
      A: [5],
      B: [1],
      C: [5],
      D: [1],
      E: [2.7, 2],
      F: [7.5, 5],
      G: [2.7, 2],
      H: [6],
      K: [7]
    },
    shapes: [
      rg.polygon([z.A, z.p1, z.B, z.p2]),
      rg.polygon([z.C, z.q1, z.D, z.q2]),
      rg.polygon([z.E, z.G, z.H, z.F]),
      rg.line(z.F, z.K),
      rg.line(z.H, z.K),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-1.2, 1.2].map(x => [x, 0, z])).flat();;
  y.A = v3.r(v3.add(v3.s(v3.x, 0.3), v3.s(v3.z, 0.3)), v3.y, -0.2);
  y.C = v3.s(y.A, -1);
  y.q = v3.add(v3.s(v3.y, 1.5), v3.s(v3.x, 0.5));
  y.r = v3.s(y.q, 2);
  y.rB = v3.s(v3.r(y.A, v3.y, 0.5), 1.8);
  y.B = v3.add(y.r, y.rB);
  y.D = v3.add(y.r, v3.s(y.rB, -1));
  y.E = v3.add(y.A, v3.s(v3.sub(y.B, y.A), 0.5));
  y.F = v3.add(y.C, v3.s(v3.sub(y.D, y.C), 0.5));
  y.O = v3.add(y.A, v3.s(v3.sub(y.D, y.A), 0.5));
  [y.q1, y.q2, y.q3, y.q4] = [y.p1, y.p2, y.p3, y.p4].map(p => v3.add(p, y.q));
  [y.r1, y.r2, y.r3, y.r4] = [y.p1, y.p2, y.p3, y.p4].map(p => v3.add(p, y.r));
  [y.G, y.H, y.K, y.L, y.M, y.N] = [y.p1, y.p3, y.q1, y.q3, y.r1, y.r3];
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
  return {
    title: 'Proposition 17',
    id: '11.17',
    prose: prop17,
    points: z,
    letters: {
      A: [1],
      B: [7],
      C: [3],
      D: [3],
      E: [7.8,2],
      F: [3.5, 2],
      G: [5],
      H: [1],
      K: [5],
      L: [1],
      M: [5],
      N: [1],
      O: [8.2, 2],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.q1, z.q2, z.q3, z.q4]),
      rg.polygon([z.r1, z.r2, z.r3, z.r4]),
      rg.line(z.A, z.B),
      rg.line(z.C, z.D),
      rg.line(z.A, z.C),
      rg.line(z.B, z.D),
      rg.line(z.A, z.D),
      rg.line(z.F, z.O),
      rg.line(z.O, z.E),
    ],
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-1.2, 0.6].map(x => [x, 0, z])).flat();
  [y.D, y.G, y.A, y. H,
    y.C, y.F, y.B, y.E] = [-1, 0].map(y => [-1.2, -0.6, 0, 0.6].map(x=>[x, y, 0])).flat();
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 18',
    id: '11.18',
    prose: prop18,
    points: z,
    letters: {
      A: [1],
      G: [1],
      D: [1],
      C: [2.7,2],
      F: [5],
      B: [5],
      E: [7, 2],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.D, z.C, z.E, z.H]),
      rg.line(z.G, z.F),
      rg.line(z.A, z.B),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  [y.a1, y.a2, y.a4, y.a3] = [0, -1].map(y => [-1, 1].map(z => [z*0.5, y, z])).flat();
  [y.c1, y.c2, y.c4, y.c3] = [0, -1].map(y => [-1, 1].map(z => [-z*0.8, y, z])).flat();
  y.A = y.a1;
  y.C = y.c1;
  y.B = v3.s(v3.y, -1);
  y.D = v3.o;
  y.E = v3.add(v3.s(y.a1, 0.3), v3.s(y.B, 0.7));
  y.F = v3.add(v3.s(y.c1, 0.3), v3.s(y.B, 0.7));
  [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.4));
  f = f.map(d => v3.r(d, f[1], -0.2));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 19',
    id: '11.19',
    img: '/img/11/19',
    prose: prop19,
    points: z,
    letters: {
      A: [5],
      B: [1, 2],
      C: [5],
      D: [5],
      E: [1],
      F: [1],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.a1, z.a2, z.a3, z.a4]),
      rg.polygon([z.c1, z.c2, z.c3, z.c4]),
      rg.line(z.B, z.D),
      rg.line(z.E, z.D),
      rg.line(z.F, z.D),
      // rg.line(z.o, z.x, {stroke: hsl(150, 70), 'stroke-width': 3}),
      // rg.line(z.o, z.y, {stroke: hsl(250, 70), 'stroke-width': 3}),
      // rg.line(z.o, z.z, {stroke: hsl(350, 70), 'stroke-width': 3}),
    ]
  };
},

function() {
  return {
    title: 'Proposition 20',
    id: '11.20',
    img: '/img/11/20',
    prose: prop20,
  };
},

function() {
  return {
    title: 'Proposition 21',
    id: '11.21',
    img: '/img/11/21',
    prose: prop21,
  };
},

function() {
  return {
    title: 'Proposition 22',
    id: '11.22',
    img: '/img/11/22',
    prose: prop22,
  };
},

function() {
  return {
    title: 'Proposition 23',
    id: '11.23',
    imgs: ['/img/11/23', '/img/11/23b'],
    prose: prop23,
  };
},

function() {
  return {
    title: 'Lemma',
    id: '11.23-lem',
    imgs: ['/img/11/23b', '/img/11/l1'],
    prose: propl1,
  };
},

function() {
  return {
    title: 'Proposition 24',
    id: '11.24',
    img: '/img/11/24',
    prose: prop24,
  };
},

function() {
  return {
    title: 'Proposition 25',
    id: '11.25',
    img: '/img/11/25',
    prose: prop25,
  };
},

function() {
  return {
    title: 'Proposition 26',
    id: '11.26',
    img: '/img/11/26',
    prose: prop26,
  };
},

function() {
  return {
    title: 'Proposition 27',
    id: '11.27',
    img: '/img/11/27',
    prose: prop27,
  };
},

function() {
  return {
    title: 'Proposition 28',
    id: '11.28',
    img: '/img/11/28',
    prose: prop28,
  };
},

function() {
  return {
    title: 'Proposition 29',
    id: '11.29',
    img: '/img/11/29',
    prose: prop29,
  };
},

function() {
  return {
    title: 'Proposition 30',
    id: '11.30',
    img: '/img/11/30',
    prose: prop30,
  };
},

function() {
  return {
    title: 'Proposition 31',
    id: '11.31',
    imgs: ['/img/11/31', '/img/11/31b'],
    prose: prop31,
  };
},

function() {
  return {
    title: 'Proposition 32',
    id: '11.32',
    img: '/img/11/32',
    prose: prop32,
  };
},

function() {
  return {
    title: 'Proposition 33',
    id: '11.33',
    img: '/img/11/33',
    prose: prop33,
  };
},

function() {
  return {
    title: 'Proposition 34',
    id: '11.34',
    imgs: ['/img/11/34', '/img/11/34b'],
    prose: prop34,
  };
},

function() {
  return {
    title: 'Proposition 35',
    id: '11.35',
    img: '/img/11/35',
    prose: prop35,
  };
},

function() {
  return {
    title: 'Proposition 36',
    id: '11.36',
    img: '/img/11/36',
    prose: prop36,
  };
},

function() {
  return {
    title: 'Proposition 37',
    id: '11.37',
    img: '/img/11/37',
    prose: prop37,
  };
},

function() {
  return {
    title: 'Proposition 38',
    id: '11.38',
    img: '/img/11/38',
    prose: prop38,
  };
},

function() {
  return {
    title: 'Proposition 39',
    id: '11.39',
    img: '/img/11/39',
    prose: prop39,
  };
},

]
}

export default book;

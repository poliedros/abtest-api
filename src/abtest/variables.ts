import { CreateABTestDto } from './dto/create-abtest.dto';
import { GetABTestDto } from './dto/get-abtest.dto';
import { UserDto } from './dto/user.dto';

export const abTestName = 'SimpleABTest';

export const createSimpleTest: CreateABTestDto = {
  name: 'SimpleABTest',
  split_strategy: 'random',
  client: 'CZAR+',
  sides: [
    {
      label: 'a',
      size: 30,
      algorithm: 'alg1',
    },
    {
      label: 'aa',
      size: 30,
      algorithm: 'alg2',
    },
  ],
};

export const createTestWithoutSides: CreateABTestDto = {
  name: 'WithoutSides',
  split_strategy: 'random',
  client: 'CZAR+',
  sides: [],
};

export const createTestWithoutName: CreateABTestDto = {
  name: '',
  split_strategy: 'random',
  client: 'CZAR+',
  sides: [
    {
      label: 'a',
      size: 30,
      algorithm: 'alg1',
    },
    {
      label: 'aa',
      size: 30,
      algorithm: 'alg2',
    },
  ],
};

export var getTests: GetABTestDto[] = [
  {
    name: 'ABTest1',
    split_strategy: 'random',
    client: 'CZAR+',
    running: false,
    events: [],
    sides: [
      {
        label: 'a',
        size: 30,
        algorithm: 'alg1',
      },
      {
        label: 'aa',
        size: 30,
        algorithm: 'alg2',
      },
      {
        label: 'b',
        size: 30,
        algorithm: 'alg3',
      },
    ],
  },
  {
    name: 'ABTest2',
    split_strategy: 'estratified',
    client: 'CZAR+',
    running: true,
    events: [],
    sides: [
      {
        label: 'a',
        size: 30,
        algorithm: 'alg1',
      },
      {
        label: 'aa',
        size: 30,
        algorithm: 'alg2',
      },
      {
        label: 'b',
        size: 30,
        algorithm: 'alg3',
      },
    ],
  },
];

export const getTestWithoutError: GetABTestDto = {
  name: 'SimpleABTest',
  split_strategy: 'random',
  client: 'CZAR+',
  running: false,
  sides: [
    {
      label: 'a',
      size: 30,
      algorithm: 'alg1',
    },
    {
      label: 'aa',
      size: 30,
      algorithm: 'alg2',
    },
    {
      label: 'b',
      size: 30,
      algorithm: 'alg3',
    },
  ],
  events: [
    {
      event: 'create',
      date: new Date('2022-08-01'),
    },
  ],
};

export const getTestRunning: GetABTestDto = {
  name: 'SimpleABTest',
  split_strategy: 'random',
  client: 'CZAR+',
  running: true,
  sides: [
    {
      label: 'a',
      size: 30,
      algorithm: 'alg1',
    },
    {
      label: 'aa',
      size: 30,
      algorithm: 'alg2',
    },
    {
      label: 'b',
      size: 30,
      algorithm: 'alg3',
    },
  ],
  events: [
    {
      event: 'create',
      date: new Date('2022-08-01'),
    },
    {
      event: 'start',
      date: new Date('2022-08-03'),
    },
  ],
};

export const getTestStopped: GetABTestDto = {
  name: 'SimpleABTest',
  split_strategy: 'random',
  client: 'CZAR+',
  running: true,
  sides: [
    {
      label: 'a',
      size: 30,
      algorithm: 'alg1',
    },
    {
      label: 'aa',
      size: 30,
      algorithm: 'alg2',
    },
    {
      label: 'b',
      size: 30,
      algorithm: 'alg3',
    },
  ],
  events: [
    {
      event: 'create',
      date: new Date('2022-08-01'),
    },
    {
      event: 'start',
      date: new Date('2022-08-03'),
    },
    {
      event: 'stop',
      date: new Date('2022-08-08'),
    },
  ],
};

export var fakeUsers: UserDto[] = [
  { id: 0, side: '', testUser: false, isActive: true },
  { id: 1, side: '', testUser: false, isActive: true },
  { id: 2, side: '', testUser: false, isActive: true },
  { id: 3, side: '', testUser: false, isActive: true },
  { id: 4, side: '', testUser: false, isActive: true },
  { id: 5, side: '', testUser: false, isActive: true },
  { id: 6, side: '', testUser: false, isActive: true },
  { id: 7, side: '', testUser: false, isActive: true },
  { id: 8, side: '', testUser: false, isActive: true },
  { id: 9, side: '', testUser: false, isActive: true },
];

import { CreateAbTestDto } from './dto/create-abtest.dto';
import { GetAbTestDto } from './dto/get-abtest.dto';

export const mock = jest.fn();
export const abTestName = 'SimpleABTest';

export const createSimpleTest: CreateAbTestDto = {
  name: 'SimpleABTest',
  split_strategy: 'random',
  client: 'CZAR+',
  sides: ['A', 'AA', 'B'],
};

export const createTestWithoutSides: CreateAbTestDto = {
  name: 'WithoutSides',
  split_strategy: 'random',
  client: 'CZAR+',
  sides: [],
};

export const createTestWithoutName: CreateAbTestDto = {
  name: '',
  split_strategy: 'random',
  client: 'CZAR+',
  sides: ['A', 'AA', 'B'],
};

export const getTests: GetAbTestDto[] = [
  {
    name: 'ABTest1',
    split_strategy: 'random',
    client: 'CZAR+',
    running: false,
    events: [],
    sides: ['A', 'AA', 'B'],
  },
  {
    name: 'ABTest2',
    split_strategy: 'estratified',
    client: 'CZAR+',
    running: true,
    events: [],
    sides: ['A', 'AA', 'B'],
  },
];

export const getTestWithoutError: GetAbTestDto = {
  name: 'SimpleABTest',
  split_strategy: 'random',
  client: 'CZAR+',
  running: false,
  sides: ['A', 'AA', 'B'],
  events: [],
};

export const getTestRunning: GetAbTestDto = {
  name: 'SimpleABTest',
  split_strategy: 'random',
  client: 'CZAR+',
  running: true,
  sides: ['A', 'AA', 'B'],
  events: [],
};

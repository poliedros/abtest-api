import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AbtestController } from './abtest.controller';
import { AbtestService } from './abtest.service';
import * as consts from './variables';

describe('AbtestController', () => {
  let controller: AbtestController;
  const createMock = jest.fn();
  const getMock = jest.fn();
  const deleteMock = jest.fn();
  const eventMock = jest.fn();

  beforeEach(async () => {
    jest.resetAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbtestController],
      providers: [
        {
          provide: AbtestService,
          useValue: {
            create: createMock,
            get: getMock,
            get_all: getMock,
            delete: deleteMock,
            start: eventMock,
            stop: eventMock,
          },
        },
      ],
    }).compile();

    controller = module.get<AbtestController>(AbtestController);
  });

  // Tests
  it('should create perfectly', async () => {
    createMock.mockReturnValue(Promise.resolve(consts.getTestWithoutError));
    const result = await controller.create(consts.createSimpleTest);
    expect(result).toEqual(consts.getTestWithoutError);
  });

  it('should not create without sides', async () => {
    try {
      await controller.create(consts.createTestWithoutSides);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
    }
  });

  it('should not create without name', async () => {
    try {
      await controller.create(consts.createTestWithoutName);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
    }
  });

  it('should get a test', async () => {
    getMock.mockReturnValue(Promise.resolve(consts.getTestWithoutError));
    const result = await controller.get(consts.abTestName);
    expect(result).toEqual(consts.getTestWithoutError);
  });

  it('should get all tests', async () => {
    getMock.mockReturnValue(Promise.resolve(consts.getTests));
    const result = await controller.get_all();
    expect(result).toEqual(consts.getTests);
  });

  it('should delete a test', async () => {
    deleteMock.mockReturnValue(Promise.resolve({ ok: true }));
    const result = await controller.delete(consts.abTestName);
    expect(result).toEqual({ ok: true });
  });

  it('should start a test', async () => {
    eventMock.mockReturnValue(Promise.resolve(consts.getTestRunning));
    const result = await controller.start(consts.abTestName);
    expect(result).toEqual(consts.getTestRunning);
  });

  it('should stop a test', async () => {
    eventMock.mockReturnValue(Promise.resolve(consts.getTestWithoutError));
    const result = await controller.stop(consts.abTestName);
    expect(result).toEqual(consts.getTestWithoutError);
  });
});

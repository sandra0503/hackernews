import storyMock from './story';

export default {
  fetchStories: jest.fn().mockResolvedValue(storyMock)
}
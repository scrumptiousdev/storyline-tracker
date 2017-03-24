import { StorylineTrackerPage } from './app.po';

describe('storyline-tracker App', () => {
  let page: StorylineTrackerPage;

  beforeEach(() => {
    page = new StorylineTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

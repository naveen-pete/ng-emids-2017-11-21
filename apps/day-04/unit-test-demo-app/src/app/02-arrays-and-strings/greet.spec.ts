import { greet } from './greet';

xdescribe('greet', () => {
  it('should include the name in the message', () => {
    expect(greet('naveen')).toContain('naveen');
  });
});

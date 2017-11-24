import { getCurrencies } from './getCurrencies';

xdescribe('getCurrencies', () => {
  it('should return the supported currencies', () => {
    let result = getCurrencies();
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
    expect(result).toContain('USD');
  });
});

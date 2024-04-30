import { calculateRelativeDate } from './relative-date';
import { expect } from '@open-wc/testing';

describe('Calculate Relative Date', () => {
  it('Today', () => {
    const input = new Date();
    const expected = 'Today';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Yesterday', () => {
    const input = new Date().setDate(new Date().getDate() - 1);
    const expected = 'Yesterday';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('This week', () => {
    const input = new Date().setDate(new Date().getDate() - 4);
    const expected = 'This week';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Last week', () => {
    const input = new Date().setDate(new Date().getDate() - 10);
    const expected = 'Last week';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('This month', () => {
    const input = new Date().setDate(new Date().getDate() - 14);
    const expected = 'This month';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Last month', () => {
    const input = new Date().setMonth(new Date().getUTCMonth() - 1);
    const expected = 'Last month';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Last year', () => {
    const input = new Date().setFullYear(new Date().getFullYear() - 1);
    const expected = 'Last Year';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Last year', () => {
    const input = new Date().setFullYear(new Date().getFullYear() - 4);
    const expected = 'Long Time Ago';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
});

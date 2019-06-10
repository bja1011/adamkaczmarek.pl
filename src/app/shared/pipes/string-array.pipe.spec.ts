import { StringArrayPipe } from './string-array.pipe';

describe('StringArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new StringArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('should handle non-array data type and return null', () => {
    const pipe = new StringArrayPipe();
    expect(pipe.transform(null)).toEqual('');
    expect(pipe.transform(undefined)).toEqual('');
    expect(pipe.transform(1 as any)).toEqual('');
    expect(pipe.transform('tagname' as any)).toEqual('');
    expect(pipe.transform({tag: 'tagname'} as any)).toEqual('');
  });
});

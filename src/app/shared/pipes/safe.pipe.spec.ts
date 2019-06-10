import { SafePipe } from './safe.pipe';
import { inject } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafePipe', () => {
  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});

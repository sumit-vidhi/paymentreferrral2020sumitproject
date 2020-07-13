import {DomSanitizer} from '@angular/platform-browser';
import {PipeTransform, Pipe} from "@angular/core";

@Pipe({ name: 'safeHtmlPipe'})
export class SafeHtmlPipeBlogHTML implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
import { TestBed, inject } from '@angular/core/testing';

import { FormulaEditorService } from './formula-editor.service';

describe('FormulaEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulaEditorService]
    });
  });

  it('should ...', inject([FormulaEditorService], (service: FormulaEditorService) => {
    expect(service).toBeTruthy();
  }));
});

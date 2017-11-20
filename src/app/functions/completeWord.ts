
import {regexes} from '../other/regexp';

/**
 * Complete an unfinished word
 *
 * @export
 * @param {any} editor an ACE editor object
 * @param {string} value the complete word to be entered
 * @param {number} cursor the current cursor position
 */
export function completeWord(editor: any, value: string, cursor: number) {

    // Figure out what 'word' the user is currently typing
    // Need to know what they are typing so far in order to
    // use it to populate the suggestions.

    // Get text and current cursor position in editor
    const text = editor.getValue();

    // Separate text into text on left and right sides
    // of cursor
    const left = text.substring(0, cursor + 1),
          right = text.substring(cursor + 1);

    // On left side, include only characters that are part
    // of current 'word'
    const left_match = left
        .split('')
        .reverse()
        .join('')
        .match(regexes.wordSeparator),
        left_len = left.length;
    let far_left = '';

    if (left_match) {
        far_left = left.substring(0, left_len - left_match.index);
    }

    // On the right side, inc
    const right_match = right
        .match(regexes.wordSeparator),
        right_len = right.length;
    let far_right = '';
    if (right_match) {
        far_right = right.substring(right_match.index, right_len);
    }

    // Update text in the editor to complet the word
    editor.setValue(far_left + value + far_right);
    // Move the cursor to after the compelted word
    // let fun_offset = 0;
    // if (fun) {
    //     fun_offset = -1;
    // }
    editor.selection.moveTo(0, far_left.length + value.length);

}

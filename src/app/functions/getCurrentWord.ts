import {inQuotes} from './inQuotes';
import {regexes} from '../other/regexp';

/**
 * Get the current word being typed
 *
 * @export
 * @param {*} editor an ACE editor object
 * @returns {string} a string representing the current word being typed
 */
export function getCurrentWord(editor: any): string {

    // Figure out what 'word' the user is currently typing
    // Need to know what they are typing so far in order to
    // use it to populate the suggestions.

    // Get text and current cursor position in editor
    const cursor = editor.selection.getCursor().column,
          text = editor.getValue();

    let the_word = '';

    // Only proceed further if the cursor position is NOT within quotes.
    if (!inQuotes(text, cursor)) {

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
        let left_word = left;

        if (left_match) {
            left_word = left.substring(left_len - left_match.index, left_len);
        }

        // On the right side, include only characters that are part
        // of current 'word'
        const right_match = right
            .match(regexes.wordSeparator),
            right_len = right.length;
        let right_word = right;

        if (right_match) {
            right_word = right.substring(0, right_match.index);
        }

        // concatente of left and right
        the_word = left_word + right_word;

    }
    return the_word;
}
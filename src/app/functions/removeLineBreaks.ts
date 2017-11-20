
/**
 * Get first line of a string
 *
 * @export
 * @param {any} text text to remove additional lines from
 * @returns {string} first line of text
 */
export function removeLineBreaks(text: string): string {
    console.log(text);
    const match = text.match(/\r?\n|\r/);
    if (match) {
        text = text.substring(0, match.index);
    }
    return text;
}

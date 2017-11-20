
/**
 * Determine whether the cursor is inside quotes
 * 
 * @export
 * @param {string} text A string representing a line of R-code
 * @param {number} cursor The integer character position of the cursor.
 * @returns {boolean} returns true if the cursor position is within
 *                    single or double quotes
 */
export function inQuotes(text: string, cursor: number): boolean {
    // The cursor position is in quotes iff there are an odd
    // number of double or single quotes to the left of it.
    const dbl_matches = text.substring(0, cursor + 1).match(/"/g),
        sgl_matches = text.substring(0, cursor + 1).match(/'/g);

    let in_double = false,
        in_single = false;

    if(dbl_matches) {
        in_double = (dbl_matches.length % 2 === 1);
    }

    if(sgl_matches) {
        in_single = (sgl_matches.length % 2 === 1);
    }

    return in_double || in_single;
}
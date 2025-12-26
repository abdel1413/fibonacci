

/**
 * 
 *1 Split the string into lines using \n
  2 For each line:
Reverse the line character by character (including spaces)
3 Append it to the original line
 4 Rejoin the lines using \n
  No trimming → whitespace preserved exactly
 */

function generateSnowflake(crystals) {
   
   const splitted = crystals.split("\n")
   
   let reversed = splitted.map(ch => ch+ ch.split("").reverse().join(""))
   console.log(reversed)
 
  
   console.log( reversed.join("\n"))
  return reversed.join("\n")
  
}

generateSnowflake("* \n *\n* ") // should return "* *\n ** \n* *"
generateSnowflake("  *  \n * * \n*   *") // should return "  *  *  \n * * * * \n*   *   *"
generateSnowflake("   *   \n  * *  \n *   * \n*     *") // should return "   *   *   \n  * *  * *  \n *   * *   * \n*     *     *"
generateSnowflake("    *    \n   * *   \n  *   *  \n *     * \n*       *") // should return "    *    *    \n   * *   * *   \n  *   *  *   *  \n *     * *     * \n*       *       *"
generateSnowflake("     *     \n    * *    \n   *   *   \n  *   *  \n *       * \n*         *") // should return "     *     *     \n    * *    * *    \n   *   *   *   *   \n  *     *  *     *  \n *       * *       * \n*         *         *"
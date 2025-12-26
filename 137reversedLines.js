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
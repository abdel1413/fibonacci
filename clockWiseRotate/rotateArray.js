//rotate an array 90 clockwise
// PLAN:
//1 : transpose the array( convert rows into columns)
//  a) loop thru each sub array
 // b) insid the loop, create an empty array where to push each el from sub array 
// 2: reverse each row of transposed matrix
  //a) loop thru the outter (entire) array  backwardly
  // b) access each elt base of the sub array index 
  // push into an empty array created earlier
  // finaly push the reversed array into new empty array and return it;

   const rotate = (matrix)=>{
   const rotatedArray = []
  for(let i = 0; i< matrix[0].length; i++){
    const  transposeArray = []
    for(let j = matrix.length-1; j>=0; j--){
        transposeArray.push(matrix[j][i])
    }
     rotatedArray.push(transposeArray)
}

return rotatedArray;

 }


 rotate([[1,2],[3,4]]) //[[3, 1], [4, 2]]
rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) //[[7, 4, 1], [8, 5, 2], [9, 6, 3]]



/**
 * 
 * 
 * The Institutionalization of Disabled People in 20th Century America: A Critical Lens through Disability Studies
Topic Overview

For my initial presentation, I am examining the historical practice of institutionalizing disabled individuals in the United States during the 20th century. This includes the rise and fall of large-scale state hospitals, “asylums,” and training schools that housed people with intellectual, developmental, and psychiatric disabilities. This topic sits at the intersection of disability studies, history, medicalization, and human rights.

Throughout much of the 20th century, disabled people were routinely removed from public life and placed in institutions under the guise of care, protection, or rehabilitation. However, institutions often failed to provide humane conditions or respect the autonomy and dignity of the individuals inside. This legacy is deeply entangled with ableism, eugenics, and societal discomfort with disability, and it continues to shape public policy and perception.

Why This Topic?

I chose this topic because institutionalization represents one of the most visible and traumatic examples of systemic ableism in modern history. Learning about the lived experiences of institutionalized individuals — many of whom were placed involuntarily — opens up essential questions about how society defines "normalcy," who gets to participate in public life, and what counts as a meaningful existence.

The topic is personally important as well, because its legacy persists today in the form of group homes, sheltered workshops, and the ongoing fight for deinstitutionalization and community-based living. Understanding this history helps to reveal how deeply rooted structural barriers to inclusion really are.

Significance to Disability Studies

In the field of disability studies, institutionalization is a key area of critique. It exemplifies how medical and custodial models of disability have historically overshadowed social and human rights models. Rather than treating disabled individuals as full citizens with rights, institutions often treated them as passive subjects requiring management and control.

This topic challenges the medical model’s emphasis on "fixing" or isolating the disabled body and instead aligns with the social model of disability, which focuses on how societal structures — like institutions — create disabling conditions. Disability scholars argue that institutions are not just places of confinement, but systems of oppression that reflect broader cultural anxieties about dependency, productivity, and bodily difference.

The Role of Institutionalization in Disability Studies

Institutionalization plays several critical roles in disability studies:

Historical example of systemic discrimination and exclusion.

Case study for critiquing the medical model and advocating for the social model.

Evidence base for understanding how laws, policies, and public opinion evolve.

Catalyst for disability rights activism (e.g., the closure of Willowbrook, the rise of the Independent Living Movement).

By studying institutions, we also uncover how disability intersects with race, gender, class, and sexuality, as marginalized groups were often disproportionately institutionalized.

What This Topic Suggests About Historical Treatment of Disabled People

The institutionalization of disabled people throughout the 20th century suggests that society viewed disability as something to be hidden, controlled, or corrected rather than understood and accepted. Disabled individuals were often stripped of their autonomy, subjected to inhumane conditions, and denied access to education, employment, and family life.

This period reflects a broader cultural devaluation of disabled lives — one that persists today in more subtle forms, such as lack of accessibility, low expectations, and ongoing segregation. It also reveals the roots of modern advocacy efforts, many of which emerged in direct response to the harms caused by institutional living.

Preliminary List of 10 Sources (APA format)

Bogdan, R., & Taylor, S. J. (1994). The social meaning of mental retardation: Two life stories. Teachers College Press.

Carey, A. C. (2009). On the margins of citizenship: Intellectual disability and civil rights in twentieth-century America. Temple University Press.

Johnson, K. M. (1998). Deinstitutionalizing women: An ethnographic study of institutional closure. SUNY Press.

Longmore, P. K., & Umansky, L. (Eds.). (2001). The new disability history: American perspectives. NYU Press.

Noll, S. (2005). Feeble-minded in our midst: Institutions for the mentally retarded in the South, 1900–1940. University of North Carolina Press.

O'Brien, J., & Lovett, H. (1992). Finding a way toward everyday lives: The contribution of person-centered planning. Inclusion Press.

Pelka, F. (2012). What we have done: An oral history of the disability rights movement. University of Massachusetts Press.

Trent, J. W. (1994). Inventing the feeble mind: A history of mental retardation in the United States. University of California Press.

Wolfensberger, W. (1975). The origin and nature of our institutional models. Human Policy Press.

Wilkerson, A. (2015). Disability, sex radicalism, and political agency. Hypatia, 30(1), 1–19. https://doi.org/10.1111/hypa.12120




in Human: Assignment: In one to three pages, please explain your initial presentation topic. What aspect of disability studies are you examining? Why? How is your topic significant to disability studies? What role(s) does your topic play in disability studies? What does your topic suggest about the treatment and perceptions of disabled people during that historical period? Please also include your list of at least ten (10) potential sources in APA format.
You said:
Yes I like you to rewrite for this topic :disability and education, institutionalization
*/
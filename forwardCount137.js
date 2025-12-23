function emailChainCount(subject) {

  const regex=/(fw:|fwd:|re:)/gi
   
  let r =   subject.match(regex)
  
  return r? r.length : 0;
}

// Example usage:   
emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes")   // should return 4
emailChainCount("FW: Project Update")                     // should return 1
emailChainCount("Re: Re: Fwd: Budget Report")             // should return 3
emailChainCount("Team Lunch Invitation")                  // should return 0

emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary")
// should return 20
emailChainCount("Meeting Agenda")                         // should return 0